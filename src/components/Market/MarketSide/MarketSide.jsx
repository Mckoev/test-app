import React from 'react'
import Agent from './marketSideComponents/Agent'
import ProcessManager from './marketSideComponents/ProcessManager'
import Organizations from './marketSideComponents/Organizations'
import './MarketSide.css'

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
