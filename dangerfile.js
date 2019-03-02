/* global danger */

import { markdown } from 'danger'

const addLinkToDeployment = () => {
    const { commits } = danger.git

    const { sha } = commits[commits.length - 1]
    const deploymentUrl = `https://grxy-${sha}.now.sh`

    markdown(`
# [Deployment](${deploymentUrl})
    `)
}

export default async () => {
    addLinkToDeployment()
}
