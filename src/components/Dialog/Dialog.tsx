import React from 'react';
import { withStyles, createStyles } from '@material-ui/core';
import { FormControlClassKey as MUIFormControlClassKey } from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export type FormControlClassKey = MUIFormControlClassKey | 'title';

const styles = createStyles<FormControlClassKey, {}>({
  title: {
    justifyContent: 'center',
    display: 'flex',
  },

  // Hoist MUI classes. Necessary to allow pass through of MUI classes
  fullWidth: {},
  marginDense: {},
  marginNormal: {},
  root: {},
});

type OwnProps = {
  button: React.ReactNode;
  classes: {
    title: string;
  };
};
type OwnState = {
  openRegister: boolean;
  openLogIn: boolean;
  selectedDate: Date | null;
};
type ButtonType = {
  className: string;
  text: string;
  fullWidth?: boolean;
  color: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  variant: any;
  dialogTitle: string;
  typeOpen: string;
  fields: any;
};

class FormDialog extends React.Component<OwnProps, OwnState> {
  state: OwnState = {
    openRegister: false,
    openLogIn: false,
    selectedDate: new Date(),
  };

  handleClickOpen = (typeOpen: string) => {
    if (typeOpen === 'register') {
      this.setState({
        openRegister: true,
      });
    } else if (typeOpen === 'login') {
      this.setState({
        openLogIn: true,
      });
    }
  };

  handleClose = (typeOpen: string) => {
    if (typeOpen === 'register') {
      this.setState({
        openRegister: false,
      });
    } else if (typeOpen === 'login') {
      this.setState({
        openLogIn: false,
      });
    }
  };

  handleDateChange = (date: Date | null) => {
    this.setState({
      selectedDate: date,
    });
  };

  renderButton(button: any) {
    const { classes } = this.props;

    return button.map((item: ButtonType) => (
      <>
        <Button
          className={item.className}
          color={item.color}
          variant={item.variant}
          fullWidth={item.fullWidth}
          onClick={() => this.handleClickOpen(item.typeOpen)}>
          {item.text}
        </Button>
        <Dialog
          open={
            item.typeOpen === 'register' && this.state.openRegister
              ? true
              : this.state.openLogIn
          }
          onClose={() => this.handleClose(item.typeOpen)}
          aria-labelledby='form-dialog-title'
          id={`dialog-${item.text.replace(/ /g, '')}`}>
          <DialogTitle id='form-dialog-title' className={classes.title}>
            {item.dialogTitle}
          </DialogTitle>
          <DialogContent>
            {item.fields.map((field: any) => (
              <TextField
                autoFocus={field.autoFocus || false}
                margin={field.margin}
                id={field.id}
                label={field.label}
                type={field.type}
                variant={field.variant}
                fullWidth={field.fullWidth}
                required={field.required || false}
              />
            ))}
            {item.typeOpen === 'register' ? (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify='space-around'>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='Date picker inline'
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.handleClose(item.typeOpen)}
              color='primary'>
              Cancel
            </Button>
            <Button
              onClick={() => this.handleClose(item.typeOpen)}
              color='primary'
              variant='contained'>
              Log in
            </Button>
          </DialogActions>
        </Dialog>
      </>
    ));
  }

  render() {
    const { button } = this.props;
    return <>{this.renderButton(button)}</>;
  }
}

export default withStyles(styles)(FormDialog);
