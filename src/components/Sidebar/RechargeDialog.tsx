import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import styles from '../../css/RechargePanel.module.css';

const RechargeDialog: React.FC<{ open: boolean, onClose: () => void }> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="recharge-dialog-title"
      aria-describedby="recharge-dialog-description"
    >
      <DialogTitle id="recharge-dialog-title">Recharge</DialogTitle>
      <DialogContent>
        {/* Add your form or other content here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Confirm</Button>
      </DialogActions>
    </Dialog>
  );
}

export default RechargeDialog;
