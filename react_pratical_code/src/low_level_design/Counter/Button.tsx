import React from 'react'
const Button = React.memo(({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
    return <button className='btn btn-primary' onClick={onClick}>{children}</button>
})

export default Button