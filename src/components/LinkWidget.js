import React from 'react'

const LinkWidget = ({id, widget, updateWidget, deleteWidget, moveWidgetUp, moveWidgetDown, preview}) =>

    <div>

        <div>

            {

                !preview &&

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

                        <option value="LINK">Link</option>
                        <option value="HEADING">Heading</option>
                        <option value="LIST">List</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="IMAGE">Image</option>

                    </select>

                    <button className="btn btn-sm btn-warning" onClick={() => moveWidgetDown(widget)}
                            style={{float: 'right', borderTopLeftRadius: '5px',
                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                        <i className="fa fa-arrow-circle-down"
                           style={{fontSize: '20px'}}/>
                    </button>

                    <button className="btn btn-sm btn-warning" onClick={() => moveWidgetUp(widget)}
                            style={{float: 'right', borderTopLeftRadius: '5px',
                                borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                borderBottomRightRadius: '5px', marginLeft: '10px'}}>
                        <i className="fa fa-arrow-circle-up"
                           style={{fontSize: '20px'}}/>
                    </button>

                    <label style={{fontSize: '25px'}}><b> Link Widget </b></label>

                    <input type="text" className="col-12" placeholder="http://youtube.com"
                            style={{fontSize: '20px'}}
                            onChange={event => {
                            widget.href = event.target.value
                            updateWidget(widget)
                        }}/>

                    <input type="text" className="col-12" placeholder="Link text"
                           style={{fontSize: '20px'}}/>

                    <input type="text" className="col-12" placeholder="http://youtube.com"
                           style={{fontSize: '20px'}}/>

                    <input type="text" className="col-12" placeholder="Widget Name"
                           style={{fontSize: '20px'}}/>

                </div>

            }

        </div>

        <div>

            <div style={{marginTop: '2%', marginBottom: '2%'}}>
                <h2>Preview</h2>
            </div>

            <div style={{marginBottom: '2%'}}>
                <a href="#">{widget.href}</a>
            </div>

        </div>

    </div>


export default LinkWidget