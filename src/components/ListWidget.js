import React from 'react'

const ListWidget = ({id, widget, updateWidget, deleteWidget, moveWidgetUp, moveWidgetDown, preview}) =>


    <div className="col-12" style={{marginTop: '2%', border: '1px solid black', float: 'left'}}>

        <div>

            {

                !preview &&

                <div>

                    <div style={{marginTop: '2%', marginBottom: '2%'}}>

                        <button className="btn btn-sm btn-danger" onClick={() => deleteWidget(widget)}
                                style={{float: 'right', marginLeft: '10px'}}>
                            <i className="fa fa-times" style={{fontSize: '20px'}}/>
                        </button>

                        <select
                            onChange={(event) => {
                                widget.type = event.target.value
                                updateWidget(widget)
                            }}
                            style={{marginLeft: '10px', float: 'right'}}>

                            <option value="LIST">List</option>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LINK">Link</option>

                        </select>

                        <button className="btn btn-sm btn-warning" onClick={() => moveWidgetDown(widget)}
                                style={{float: 'right', borderTopLeftRadius: '5px',
                                    borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                    borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                            <i className="fa fa-arrow-circle-down" style={{fontSize: '20px'}}/>
                        </button>

                        <button className="btn btn-sm btn-warning" onClick={() => moveWidgetUp(widget)}
                                style={{float: 'right', borderTopLeftRadius: '5px',
                                    borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                    borderBottomRightRadius: '5px', marginLeft: '25px'}}>
                            <i className="fa fa-arrow-circle-up" style={{fontSize: '20px'}}/>
                        </button>

                        <label style={{fontSize: '25px'}}><b> List Widget </b></label>

                    </div>

                    <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                        <p type="text" className="col-12" style={{fontSize: '20px'}}>
                            put each item in a separate row</p>
                    </div>

                    <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                        <select className="form-control col-lg-12">
                            <option>Ordered List</option>
                            <option>Unordered List</option>
                        </select>
                    </div>

                    <div style={{marginTop: '2%', border: '1px solid black'}}>
                        <input type="text" className="col-12" placeholder="Widget Name"
                               style={{fontSize: '20px'}}/>
                    </div>

                </div>

            }

        </div>

        <div>

            <div style={{marginTop: '2%', marginBottom: '2%'}}>
                <h2>Preview</h2>

                <ul>

                    <li>Nodes</li>
                    <li>Attributes</li>
                    <li>Tag names</li>
                    <li>IDs</li>
                    <li>Styles</li>
                    <li>Classes</li>

                    {/*{*/}
                        {/*// widget["items"].toString().split(',').map((item) =>*/}
                        {/*//     <li key={widget["items"].indexOf(item)}>{item}</li>)   */}
                    {/*}*/}

                </ul>

            </div>

        </div>

    </div>


export default ListWidget
