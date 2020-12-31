import React from 'react';





export const Notification: React.FC = (props:any) => {

    return (
        <div aria-live="polite" aria-atomic="true" className="forNotif " >

            <div className="forNotifPosition">


                <div className="toast opacity-visible" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">

                            <strong className="mr-auto">Bootstrap</strong>

                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="toast-body">
                        See? Just like this.
                    </div>
                </div>

                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">

                            <strong className="mr-auto">Bootstrap</strong>

                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="toast-body">
                        Heads up, toasts will stack automatically
                    </div>
                </div>
            </div>
        </div>


    );
}

