'use client'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Input } from 'postcss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddCircleIcon
          sx={{ fontSize: 50 }}
          color="primary"
          className="ml-12 mt-[450px]"
          onClick={handleOpen}
        />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] h-[289px] bg-[#F7F7F7] border-2 border-solid rounded-[16px] border-white flex flex-col items-center py-[16px]'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='font-kanit text-[24px] font-medium uppercase'>
            New Note 
          </Typography>
          <input
              placeholder="Input your note..."
              className="focus:outline-none w-[85%] p-y[8px] px-[16px] border-blue-600 border-2 h-[38px] rounded-[5px] mt-[25px]"
            />
         <div className='mt-[100px] flex flex-row justify-between gap-[220px]'>
          <div className='border-blue-600 uppercase px-[20px] py-[8px] rounded-[5px] border-2 font-500 font-kanit text-[18px] text-blue-600'>cancel</div>
          <div className='border-blue-600 uppercase px-[20px] py-[8px] rounded-[5px] border-2 font-500 font-kanit text-[18px] bg-blue-600 text-white'>apply</div>
         </div>
        </Box>
      </Modal>
    </div>
  );
}
