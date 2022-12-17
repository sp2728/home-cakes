import classNames from 'classnames';
import React from 'react'
import './sheet.css';


interface Props {
    open: boolean;
    position: SheetPosition;
    handleClose: () => void;
    children: React.ReactNode;
    width?: string;
}

export enum SheetPosition {
    left = 'left', right='right', top='top', bottom='bottom'
}

const Sheet = ({ open, position, handleClose, children, width = '450px' }: Props) => {
    return (
        <>
            {open && <div className={classNames('backdrop', position)} onClick={handleClose}></div>}
            <div className={classNames('sheet-container', `sheet-${position}`, { 'open': open, })} style={{width}}>
                {children}
            </div>
        </>
    )
};


export default Sheet