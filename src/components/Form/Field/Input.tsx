import * as React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextMask from '../Mask/TextMask';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      marginTop: 20
    },
    cssLabel: {
      '&$cssFocused': {
        color: '#613EEA'
      }
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: '#613EEA'
      }
    },
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: '#613EEA'
      }
    },
    notchedOutline: {}
  });

interface IIProps extends WithStyles<typeof styles> {
  id: string;
  name?: string;
  label?: string;
  options?: string[];
  value?: any;
  placeholder?: string;
  startAdornment?: string;
  maskValue?: string;
  mask?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  classes,
  label,
  value,
  maskValue,
  mask,
  id,
  placeholder,
  startAdornment,
  onChange
}: IIProps) => {
  return (
    <div className={classes.root}>
      <TextField
        value={maskValue || value}
        id={id}
        className={classes.margin}
        label={label || placeholder}
        placeholder={placeholder || label}
        fullWidth
        variant="outlined"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          },
          startAdornment: startAdornment && (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          inputComponent: mask
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default withStyles(styles)(Input);
