import React, { Component } from "react";
import { Panel } from "../../../../common/panel"
export class ProfileSummary extends Component<any, IProfileSummaryState> {

    status = {
        items: [
            { title: "I am...", summary: "I am a full stack software engineer with 8 years of experience in building large-scale applications. Pivotal contributions to the architecture and development life cycle of company projects. I am eager to use my technical skills and vast experiences in building .NET base application." },
            { title: "My strongest skills and how I learned them...", summary: "My strengths lie within C# and JavaScript. I was lucky to work with some very knowledgeable senior developers at my current workplace. I designed and developed a dozen of application using C# and JavaScript along with other technologies. I developed few open source projects to give back to the community." },
            { title: "What I am looking for...", summary: "I'm looking for a backend developer position, or a full-stack position with a focus on backend. I'm open to trying new technologies but I'm highly experienced in C# and JavaScript. I would love to share my knowledge, potentially in a technical leadership role" },
            { title: "One fact (outside of work) about me...", summary: "I developed few open source projects and hosted in GitHub and my favorite one is Bulletproof-Node.js-Architecture." },
            { title: "Additional information", summary: "I fixed the connectivity issue of Dairy Applications that was very hard to debug and hard to reproduce also." },
        ]
    }

    render() {
        return (
            <>
                <Panel title="Summary" className="mt-2">
                    {this.status.items.map((item, i) => {
                        return (
                            <div className="mt-3" key={i}>
                                <h4 className="text-dark m-0 profile-header-text font-weight-bold">
                                    {item.title}
                                </h4>
                                <h3 className="text-body profile-header-text font-weight-normal">
                                    {item.summary}
                                </h3>
                            </div>
                        )
                    })}
                </Panel>
            </>
        )
    }
}


interface IProfileSummaryState {
    items: ISummaryItem[]
}

interface ISummaryItem {
    title: string;
    summary: string;
}