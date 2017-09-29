import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Row, Col, Input, Button } from 'antd';
const { Content } = Layout;

class Content1 extends Component {
    render() {
        return (
            <Layout className="layout margin">
                <Content>
                    <div className="gutter-example" style={{ background: '#111', padding: 24, minHeight: 280 }}>
                    <Row gutter={16}>
                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb box-col" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/womens-run-2017.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/womens-run-2017.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            Bangkok Women's Run 2017
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                        <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/vff.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/vff.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            Five Fingers Run 2017
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/sriracha.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/sriracha.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            Sriracha GRAND PRIX
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                        <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/amarin-run.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/amarin-run.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            Amarin Run for Kids 2017
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>
                        
                        
                        
                        

                        
                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb box-col" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/pk21.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/pk21.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            Prachuap Khiri Run by Tipco
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                        <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/thale-noi-roi-run.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/thale-noi-roi-run.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            ทะเลน้อยร้อยรัน
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/21st-anniversary-jog-&-joy-mini-marathon-2017.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/21st-anniversary-jog-&-joy-mini-marathon-2017.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            JOG&JOY
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                        <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/runaran-2017.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/runaran-2017.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            Run Aran 2017
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>
                        




                       
                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/the-mall-korat-marathon-2017.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/the-mall-korat-marathon-2017.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            The Mall Korat Marathon 2017
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/august-12th-half-marathon-bangkok-2017.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/august-12th-half-marathon-bangkok-2017.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            August 12th Half Marathon Bangkok 2017
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/bangkok-post-mini-marathon-2017.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/bangkok-post-mini-marathon-2017.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            Bangkok Post International Mini Marathon 2017
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={12} md={8} lg={6} className="gutter-row mb" span={6}>
                                <div className="gutter-box box-1">
                                    <a href="" className="a">
                                        <div className="box-img">
                                            <img src="https://storage.googleapis.com/s.cert.phuket.run/logo/khanom-2017.jpg"
                                                alt="https://storage.googleapis.com/s.cert.phuket.run/logo/khanom-2017.jpg"
                                                width="288" height="140"
                                            />
                                        </div>
                                    </a>
                                    <div className="box-search">
                                        <div className="font-1 name-margin box-name">
                                            Khanom Marathon 2017
                                        </div>
                                        <Input placeholder="Bib number" style={{ width: 150, height: 35 }} />
                                        &nbsp;&nbsp;&nbsp;
                                    <Button type="primary" style={{ height: 35 }}>Search</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default Content1;