import React from 'react'
import iconOrganization from '../../../../img/Market/organizations.svg'

function Organizations({ nameOrganizations }) {
  return (
    <div className="wrapper__market-side-organizations">
      <img src={iconOrganization} alt="organizations" className="wrapper__market-side-organizations-img"></img>
      <div className="wrapper__market-side-organizations-text">{nameOrganizations}</div>
    </div>
  )
}

export default Organizations
