import React from 'react'
import Agent from './Agent'
import ProcessManager from './ProcessManager'
import './Market.css'
import Organizations from './Organizations'

function Market() {
  const agentName = 'ЧЕСТНЫЙ АГЕНТ'
  const nameProcessManager = 'МЕНЕДЖЕР ПРОЦЕССА'
  const nameOrganizations = 'ОРГАНИЗАЦИИ'

  return (
    <div className="wrapper__market">
      <Agent agentName={agentName} />
      <ProcessManager nameProcessManager={nameProcessManager} />
      <Organizations nameOrganizations={nameOrganizations} />
    </div>
  )
}

export default Market
