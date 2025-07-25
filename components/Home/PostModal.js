import React from 'react'
import PostItem from './PostItem'
import { HiOutlineXCircle } from 'react-icons/hi'

export default function PostModal({post}) {
  return (
    <div bg-blue-50 min-h-screen>

<dialog id="my_modal_1" className="modal p-0 rounded-lg">
  <form method="dialog" className="modal-box">
  <button className='absolute right-2 top-2'>
        <HiOutlineXCircle className='text-[22px] text-white'/>
    </button>
    <PostItem post={post} />
  </form>
</dialog>
    </div>
  )
}

// PostModal