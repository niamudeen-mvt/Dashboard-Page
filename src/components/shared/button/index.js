import React from 'react'
import { useLocation } from 'react-router-dom'
import { downloadCustomerDetail, downloadFiles } from '../../../utils/helper'


const DownloadCustomerDetail = ({ setShowCustomerDetail, margin, listToDownload, tableId, fileName, actionType }) => {
  const routeName = useLocation().pathname
  const subRoute = routeName.substring(0, 19)


  const handleDownload = () => {
    if (actionType === "campaign-detail") {
      downloadCustomerDetail(tableId, fileName)
    } else if (actionType === 'postcard-detail') {
      downloadFiles(listToDownload)
    }
  }

  return (
    <div className={`custom_btn_section d-flex justify-content-end align-content-end ${margin ? margin : ''}`}>
      {
        (subRoute === "/dashboard/campaign" && routeName !== "/dashbaord/campaign/customers") ? null :
          <button className='border_radius_12 sf_pro_text_500w_14f cancel_btn' onClick={() => setShowCustomerDetail(false)}>
            Cancel
          </button>
      }

      <button className='border_radius_12 sf_pro_text_500w_14f download_btn' onClick={handleDownload}>
        Download Campaign Details
      </button>
    </div>
  )
}

export default DownloadCustomerDetail