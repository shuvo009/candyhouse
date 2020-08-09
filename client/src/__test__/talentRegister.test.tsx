import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../helpers/store'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen, queryByAttribute } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TalentRegister } from "../features/register/components/TalentRegister/TalentRegister"
import TestingRouter from "./testingRouter"
const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('handlers server error', async () => {
  server.use(
    rest.post('/talent/register', (req: any, res, ctx) => {
      return res(ctx.json({ "message": "talent is created" }))
    })
  )

  const { container } = render(<Provider store={store}>
    <TestingRouter ComponentWithRedirection={() => <TalentRegister />}
      RedirectUrl={'/login'} /> </Provider>);

  const inputs = container.getElementsByTagName("input")
  fireEvent.change(inputs[0], { target: { value: 'jon', name: 'firstName' } })
  fireEvent.change(inputs[1], { target: { value: 'dho', name: 'lastName' } })
  fireEvent.change(inputs[2], { target: { value: 'email@gmail.com', name: 'email' } })
  fireEvent.change(inputs[3], { target: { value: '123456', name: 'password' } })
  fireEvent.change(inputs[4], { target: { value: '123456', name: 'confirmpassword' } })

  fireEvent.click(screen.getByText('Register'))


  //  await waitFor(() => expect(screen.getAllByTestId('error')[0]).toHaveTextContent("hasan"))

  const e = expect(screen.getByText('Register').closest('button')?.disabled).toBeTruthy;
  expect(container.innerHTML).toMatch(container.innerHTML)
  expect(screen.getByText('Register').getAttribute('disabled')).toBeDisabled

  // expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  // expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})
