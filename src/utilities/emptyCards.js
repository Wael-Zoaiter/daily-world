import React from 'react';

function emptyCards(number, layout) {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    return arr.slice(0, number).map(index => (
        <div key={index} className={layout}>
            <div className="card empty">
                <div className="card-header">
                    <span className="empty-title"></span>
                    <span className="empty-title"></span>
                </div>
                <div className="empty-image"></div>
                <div className="card-body">
                    <span className="empty-span"></span>
                    <span className="empty-span"></span>
                    <span className="empty-span"></span>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-6">
                            <span className="empty-span"></span>
                        </div>
                        <div className="col-6">
                            <span className="empty-span"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
}

export default emptyCards;