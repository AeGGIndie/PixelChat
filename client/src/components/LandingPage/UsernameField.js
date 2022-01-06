import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";



const CustomInputField = styled(InputBase)(({ theme }) => ({
  '&.Mui-focused':  {
    borderColor: theme.palette.primary.light,
    transition: '0.4s',
  },
  height: 48,
  paddingTop: 3.5,
  paddingBottom: 3.5,
  marginTop: 30,
  marginBottom: 15,
  border: '1px solid',
  borderColor: theme.palette.grey[300],
  borderRadius: '4px',
  color: '#000',
  flex: 1,
  justifyContent: 'center',
  transition: '0.4s',
}));

const UsernameField = ({ value, setUsername }) => {
  // Input Box Handler
  const handleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  }

  return(
    <CustomInputField onChange={handleChange} value={value}
    inputProps={{
      style: {
        marginLeft: 18,
      }
    }}
    placeholder="Username *"
    required 
    name="username" 
    label="Username" 
    fullWidth
    autoComplete="off"/>
  );
}

export default UsernameField;