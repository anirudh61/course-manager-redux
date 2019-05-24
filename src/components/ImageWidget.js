import React from 'react'

const ImageWidget = ({id, widget, updateWidget, deleteWidget, moveWidgetUp, moveWidgetDown, preview}) =>

    <div className="col-12"
         style={{marginTop: '2%', border: '1px solid black', float: 'left'}}>

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

                            <option value="IMAGE">Image</option>
                            <option value="HEADING">Heading</option>
                            <option value="LIST">List</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="LINK">Link</option>

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

                        <label style={{fontSize: '25px'}}><b> Image Widget </b></label>

                    </div>

                    <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                        <input type="text" className="col-12" placeholder="http://lorempixel.com/300/150"
                               style={{fontSize: '20px'}}
                               onChange={event => {
                                   widget.src = event.target.value
                                   updateWidget(widget)
                               }}/>
                    </div>

                    <div style={{marginTop: '2%', border: '1px solid black'}}>
                        <input type="text" className="col-12" placeholder="Widget Name"
                               style={{fontSize: '20px'}}/>
                    </div>

                </div>

            }

        </div>

        <div>

            <div style={{marginTop: '2%'}}>
                <h2>Preview</h2>
            </div>

            <div style={{marginBottom: '2%'}}>
                <img src={widget.src} style={{width: '350px', height: '300px'}}/>
            </div>

        </div>


    </div>


export default ImageWidget