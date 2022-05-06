import React from "react";
import { useObservableState } from 'observable-hooks'
import { from } from 'rxjs'

import { tw } from 'twind'
import { topReposQuery } from "../../db/queries";
import { MDIIcon } from "../mdi_icon";


const topReposObservable = () => useObservableState(() => from(topReposQuery()), []);

export function TopReposview() {
    const [repos] = topReposObservable();
    return <table className={'search-results '+ tw`table-auto w-full text-left`}>
        <thead>
            <tr className={tw`text(sm gray-600)`}>
                <th>Helm releases</th>
                <th>Repo</th>
                <th>Stars</th>
            </tr>
        </thead>
        <tbody>
            {repos.map(repo => (
                <tr key={repo.name}>
                    <td>
                        {repo.count}
                    </td>
                    <td>
                        <a href={repo.url}>
                            {repo.name}
                        </a>
                    </td>
                    <td>
                        {repo.stars} stars
                    </td>
                </tr>
            ))}
        </tbody>
    </table>;
  }
  