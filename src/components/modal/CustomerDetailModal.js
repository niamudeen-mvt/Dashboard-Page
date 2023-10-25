import React from 'react';
import { Modal, ModalBody, Container, Row, Col } from 'reactstrap';
import DownloadCustomerDetail from '../shared/button';
import closeIcon from "../../assets/icons/close-icon.svg"

function CustomerDetailModal({ showCustomerDetail, setShowCustomerDetail }) {
  const toggle = () => setShowCustomerDetail(!showCustomerDetail);
  const handleCloseBtn = () => {
    setShowCustomerDetail(false)
  }


  return (
    <div className='customer_detail_modal'>
      <Modal isOpen={showCustomerDetail} toggle={toggle} centered>
        <ModalBody>
          <div className='top_section d-flex justify-content-end align-items-center cursor'>
            <span className='modal_close_btn d-flex justify-content-center align-items-center' onClick={handleCloseBtn}>
              <img src={closeIcon} alt="close-btn" width='10px' height='10px' />
            </span>
          </div>
          <Container className='p-3'>
            <h2 className='sf_pro_font_700 mb-4'>Customer Detail</h2>
            <Row className='mb-4 px-5'>
              <Col className='col-6  p-0'>
                <div className='py-2 border-bottom d-flex '>
                  <p className='sf_pro_font_400w_16f'>Name</p>
                </div>
              </Col>
              <Col className='col-6  p-0'>
                <div className='py-2 border-bottom d-flex '>
                  <p className='sf_pro_font_400w_16f'>Cody</p>
                </div>
              </Col>
              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_16f'>Store Name</p>
                </div>
              </Col>
              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_16f'>Oopla</p>
                </div>
              </Col>
              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_16f'>Address</p>
                </div>
              </Col>
              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_14f'>8794 Bogan Flats, Wolfftown, MI 91969-3855</p>
                </div>
              </Col>
              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_16f'>
                    Orders
                  </p>
                </div>
              </Col>
              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_16f'>
                    5
                  </p>
                </div>
              </Col>

              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_16f'>Status</p>
                </div>
              </Col>
              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_12f grey_status p-0 px-3 border_radius_12'>Sent out</p>
                </div>
              </Col>
              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_16f'>Country</p>
                </div>
              </Col>
              <Col className='col-6 p-0'>
                <div className='py-2 border-bottom d-flex'>
                  <p className='sf_pro_font_400w_16f'>Albama</p>
                </div>
              </Col>
            </Row>
            <div className='mb-4'>
              <p className='sf_pro_font_500 mb-4'>Campaigns</p>
              <Row className=''>
                <Col>
                  <div>
                    <p className='campaign_tag sf_pro_font_400w_16f d-flex justify-content-center align-items-center'>
                      First Purchase Celebration
                    </p>
                  </div>
                </Col>
                <Col>
                  <div>
                    <p className='campaign_tag sf_pro_font_400w_16f d-flex justify-content-center align-items-center'>
                      Customer Anniversery
                    </p>
                  </div>
                </Col>
                <Col>
                  <div>
                    <p className='campaign_tag sf_pro_font_400w_16f d-flex justify-content-center align-items-center'>
                      Adhoc Promotions
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <DownloadCustomerDetail setShowCustomerDetail={setShowCustomerDetail} />
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}


export default CustomerDetailModal;