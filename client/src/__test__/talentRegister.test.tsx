import React from 'react'
import { Provider } from 'react-redux'
import store from '../helpers/store'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen, queryByAttribute } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TalentRegister } from "../features/register/components/TalentRegister/TalentRegister"
import TestingRouter from "./TestingRouter"
const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('handlers server error', async () => {
  server.use(
    rest.post('/talent/register', (req: any, res, ctx) => {
      expect(req.body.firstName).toEqual("jon")
      return res(ctx.json({ "message": "talent is created" }))
    })
  )

  const getByName = queryByAttribute.bind(null, 'name');


  const { container } = render(<Provider store={store}>  <TestingRouter ComponentWithRedirection={() => <TalentRegister />}
    RedirectUrl={'/login'} /> </Provider>);
  //const r = container.querySelector('[data-foo="bar"]') as any;
  const r = container.getElementsByTagName("input") as any

  var w = screen.getByPlaceholderText('Enter FirstName')
  
  fireEvent.change(w, undefined);


  fireEvent.click(screen.getByText('Register'))

  expect(container.innerHTML).toMatch(container.innerHTML)

  //await waitFor(() => screen.getByRole('alert'))

  // expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  // expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})
