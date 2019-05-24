import React from 'react'
import WidgetListComponent from "./WidgetListComponent"


const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, moveWidgetUp, moveWidgetDown, setPreview, preview}) =>

    <div className="container">


        <div className="col-12" style={{marginTop: '2%', float: 'left'}}>

            <div>
                <button className="btn btn-primary" type="button" style={{float: 'right'}} onClick={setPreview}>
                    Preview
                </button>
            </div>

            <div>
                <button className="btn btn-success" style={{float: 'right', marginBottom: '5%', marginRight: '2%'}}>Save</button>
            </div>

        </div>

        <div className="col-12" style={{float: 'left'}}>

            <div className="list-group">

                {
                    widgets.map(widget =>
                        <WidgetListComponent
                            key={widget.id}
                            updateWidget={updateWidget}
                            deleteWidget={deleteWidget}
                            moveWidgetUp={moveWidgetUp}
                            moveWidgetDown={moveWidgetDown}
                            preview = {preview}
                            widget={widget}/>
                    )
                }

            </div>

            <button className="btn btn-sm btn-danger" onClick={addWidget}
                    style={{float: 'right', marginRight: '5%', marginBottom: '2%'}}>
                <i className="fa fa-plus" style={{fontSize: '20px'}}/>
            </button>

        </div>

    </div>


export default WidgetList










