import React from 'react'
import Agent from './Agent'
import ProcessManager from './ProcessManager'
import Organizations from './Organizations'

function MarketSide() {
  const agentName = 'ЧЕСТНЫЙ АГЕНТ'
  const nameProcessManager = 'МЕНЕДЖЕР ПРОЦЕССА'
  const nameOrganizations = 'ОРГАНИЗАЦИИ'

  return (
    <div className="wrapper__market-side">
      <Agent agentName={agentName} />
      <ProcessManager nameProcessManager={nameProcessManager} />
      <Organizations nameOrganizations={nameOrganizations} />
    </div>
  )
}

export default MarketSide
