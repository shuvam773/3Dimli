import React from 'react'

const Background = () => {
    return (
        <div className="fixed inset-0 overflow-hidden">
            <div className="fixed inset-0 bg-black">
                {/* Red circle - larger and more visible */}
                <div
                    className="relative bg-[#ef233c] blur-3xl filter h-44 w-44 md:h-[22rem] md:w-[22rem] lg:h-[28rem] lg:w-[28rem] opacity-15 rounded-full"
                    style={{
                        left: '10%',
                        top: '20%'
                    }}
                />
                <div
                    className="relative bg-[#04868b] blur-3xl filter h-44 w-44 md:h-[22rem] md:w-[22rem] lg:h-[28rem] lg:w-[28rem] opacity-20 rounded-full"
                    style={{
                        left: '30%',
                        bottom: '5%'
                    }}
                />
            </div>
        </div>
    )
}

export default Background