import React from 'react'

const HeadingWidget = ({id, widget, updateWidget, deleteWidget, moveWidgetUp, moveWidgetDown, preview}) => (

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
                                const imageWidget = {url: "url", name: "text"}

                                updateWidget({...imageWidget, id: widget.id})
                            }}
                            style={{marginLeft: '10px', float: 'right'}}>

                            <option value="HEADING">Heading</option>
                            <option value="LIST">List</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LINK">Link</option>

                        </select>

                        <button className="btn btn-sm btn-warning" onClick={() => moveWidgetDown(widget)}
                                style={{
                                    float: 'right', borderTopLeftRadius: '5px',
                                    borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                    borderBottomRightRadius: '5px', marginLeft: '10px'
                                }}>
                            <i className="fa fa-arrow-circle-down" style={{fontSize: '20px'}}/>
                        </button>

                        <button className="btn btn-sm btn-warning" onClick={() => moveWidgetUp(widget)}
                                style={{
                                    float: 'right', borderTopLeftRadius: '5px',
                                    borderTopRightRadius: '5px', borderBottomLeftRadius: '5px',
                                    borderBottomRightRadius: '5px', marginLeft: '25px'
                                }}>
                            <i className="fa fa-arrow-circle-up" style={{fontSize: '20px'}}/>
                        </button>

                        <label style={{fontSize: '25px'}}><b> Heading Widget </b></label>

                    </div>

                    <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                        <input type="text" className="col-12" style={{fontSize: '20px'}}
                               placeholder="Heading Text"
                               onChange={event => {
                                   widget.text = event.target.value
                                   updateWidget(widget)
                               }}/>
                    </div>

                    <div style={{marginTop: '2%', marginBottom: '2%', border: '1px solid black'}}>
                        <select className="form-control col-lg-12">
                            <option>Heading 1</option>
                            <option>Heading 2</option>
                            <option>Heading 3</option>
                            <option>Heading 4</option>
                        </select>
                    </div>

                    <div style={{marginTop: '2%', border: '1px solid black'}}>
                        <input type="text" className="col-12" style={{fontSize: '20px'}}
                               placeholder="Widget text"/>
                    </div>

                </div>

            }

        </div>

        <div>

            <div style={{marginTop: '2%', marginBottom: '2%'}}>
                <h3>Preview</h3>
            </div>

            <div style={{marginBottom: '2%'}}>
                {
                    widget.size === 1 && <h1>{widget.text}</h1> ||
                    widget.size === 2 && <h2>{widget.text}</h2> ||
                    widget.size === 3 && <h3>{widget.text}</h3> ||
                    widget.size === 4 && <h4>{widget.text}</h4> ||
                    widget.size === 5 && <h5>{widget.text}</h5>
                }

            </div>
        </div>

    </div>
)


export default HeadingWidget