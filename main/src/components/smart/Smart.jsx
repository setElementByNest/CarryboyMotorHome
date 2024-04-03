import React from 'react'
import './smart.css'

function Smart() {
    return (
        <div className='smart' id='smart'>
            <h2>RV Smart System</h2>
            <div className="smart-content">
                <div className="smart-content-1">
                    <video controls muted autoPlay loop id='videoTag'>
                        <source src="/img_index/Smart system.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="smart-content-2">
                    <div className="smart-group">
                        <div className="smart-group-head">Control</div>
                        <img src="/img_index/smart/air-conditioning.png" alt="" />
                        <h4>Air Condition</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">Control</div>
                        <img src="/img_index/smart/table.png" alt="" />
                        <h4>Electric Chair</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">Control</div>
                        <img src="/img_index/smart/idea.png" alt="" />
                        <h4>Light</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">Control</div>
                        <img src="/img_index/smart/water-heater.png" alt="" />
                        <h4>Water Heater</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">Monitor</div>
                        <img src="/img_index/smart/electric-power.png" alt="" />
                        <h4>Electric Status</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">Monitor</div>
                        <img src="/img_index/smart/battery-status.png" alt="" />
                        <h4>Battery</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">Monitor</div>
                        <img src="/img_index/smart/trend.png" alt="" />
                        <h4>Electric Used</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">Monitor</div>
                        <img src="/img_index/smart/drop.png" alt="" />
                        <h4>Water Used</h4>
                    </div>
                    <div className="smart-group">
                        <div className="smart-group-head">Monitor</div>
                        <img src="/img_index/smart/water-waste.png" alt="" />
                        <h4>Water Waste</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smart
