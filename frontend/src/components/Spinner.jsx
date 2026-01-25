import React from 'react'

const Spinner = () => {
  return (
    // animate-spin：旋转动画；border-4：加边框；border-t-transparent：顶部边框透明，形成“加载圈”效果
    <div className='animate-spin w-16 h-16 m-8 rounded-full border-4 border-sky-600 border-t-transparent'>
    </div>
  )
}

export default Spinner
