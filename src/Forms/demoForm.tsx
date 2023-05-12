

import { Box, Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField, Tooltip, Typography } from "@mui/material";
import {countries,interestedIn,DemoInput, DemoErrors, InterestedIn} from "./variables"
import React, { useState } from "react";
import Cookies, { CookieSetOptions } from 'universal-cookie';

export const DemoForm = (): JSX.Element => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const cookie = new Cookies()
  const choices = ['Open Account','Schedule Demo']
  const fallBackButtonName = choices[Math.floor(Math.random()*choices.length)]
  if (!cookie.get("buttonName")) {
    
    cookie.set("buttonName",choices[Math.floor(Math.random() * choices.length)],{'maxAge': 604800,'path':"/",'sameSite':'none','secure':true} as CookieSetOptions)
  }
  const classes = {
    check:{
      '& .MuiSvgIcon-root':{
        color:"#ffcd6d"
      }
    }
    ,
    inp:{
      marginTop:"15px",
   
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {      
      
        '&.Mui-focused fieldset': {
          borderColor: '#ffcd6d',
        },
      },
      
    },
    Button: {
      marginTop:"15px",
      borderRadius:"12px",
      fontSize:"18px",
      letterSpacing:"-0.04em",
      height:"55px",
      backgroundColor: '#ffcd6d',
      color: '#000',
      '&:hover': {
        backgroundColor: '#FFD687'
    },
  },
    Label : {
      marginTop:"15px",
      '& .MuiInput-underline:after': {
        borderBottomColor: 'yellow',
      },
      '& .MuiOutlinedInput-root': {     
        '&.Mui-focused fieldset': {
          borderColor: '#ffcd6d',
        },
      },
    '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused':{    
        color:"black",    
  }}
}
  const [subMessage,setSubMessage] = useState<string>("")
  const [inputState, setInputs] = useState<DemoInput>({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    headcount:"",
    interests:[],
    countryHQ:"",
    companyLinkedinUrl:"",
    companyName:"",
    prefixPhone:"+44",
    jobTitle:""
  });
  const [errors, setErrors] = useState<DemoErrors>({
    firstName:"",
    lastName:"",
    companyName:"",
    email:"",
    phone:"",
    headcount:"",
    interests:"",
    countryHQ:"",
    companyLinkedinUrl:"",
    jobTitle:""
  });
 const successMessage = "Thanks for completing the form, we will reach out shortly."
 const errorMessage = "Something went wrong when submitting the form. If the problem persists, reach out to hello@zelt.app"
 
 const dir = window.innerWidth >=500 ? "row":"column"
// Listen for the resize event and update the rendering accordingly
 return (
  <Box style={{backgroundColor:"transparent",flexDirection:"column",display:"flex",border:"none"}}>
     
    <FormControl >
    <Box style={{backgroundColor:"transparent",flexDirection:dir,display:"flex",border:"none",width:"100%"}}> 
    <TextField
         type="text"
         name="firstName"
         size="small"
         required
         sx={{...classes.inp,width:dir==="column"?"100%":"90%"}}
         onChange={(e)=>{
          inputState.firstName = e.target.value 

          errors.firstName = ""
          setInputs({...inputState})
          setErrors({...errors})
        }}
        helperText={errors.firstName}
        error={errors.firstName===""?false:true}
         InputProps={{
          style: {color: 'black'},
          placeholder: "First Name",
        }}
        >
    </TextField>
    <TextField
         type="text"
         size="small"
        
         name="lastName"
         required
         sx={{...classes.inp,width:dir==="column"?"100%":"90%",marginLeft:dir==="column"?"0px":"10px"}}
         onChange={(e)=>{
          inputState.lastName = e.target.value 
          errors.lastName = ""
          setInputs({...inputState})
          setErrors({...errors})
        }}
        helperText={errors.lastName}
        error={errors.lastName===""?false:true}
         InputProps={{
          style: {color: 'black'},
          placeholder: "Last Name",
        }}
        >
    </TextField>
    </Box>
    <TextField
         type="text"
         size="small"
         name="email"
         sx={classes.inp}
         onChange={(e)=>{
          inputState.email = e.target.value 
          errors.email =""
          setInputs({...inputState})
          setErrors({...errors})
        }}
        helperText={errors.email}
        error={errors.email===""?false:true}
         InputProps={{
          style: {color: 'black'},
          placeholder: "Work Email",
        }}
        >
    </TextField>
        <TextField
         type="text"
         size="small"
         name="jobTitle"
         sx={classes.inp}
         onChange={(e)=>{
          inputState.jobTitle = e.target.value 
          errors.jobTitle =""
          setInputs({...inputState})
          setErrors({...errors})
        }}
        helperText={errors.jobTitle}
        error={errors.jobTitle===""?false:true}
         InputProps={{
          style: {color: 'black'},
          placeholder: "Job Title",
        }}
        >
    </TextField>
    <Box style={{backgroundColor:"transparent",flexDirection:"row",display:"flex",border:"none",width:"100%"}}>
    <FormControl size="small" sx={{...classes.Label,minWidth:"min-content",width:"15%"}}>
        
        <Select
          
       
          sx={{borderRadius:"5px 0px 0px 5px"}}  
          
          onChange={(e)=>{
            inputState.prefixPhone = e.target.value
            setInputs({...inputState})
            
          }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 400,
              },
            },
          }}
          value = {inputState?.prefixPhone}
          
          //renderValue={(selected) => selected.join(', ')}
          //MenuProps={MenuProps}
        >
         {[...countries.map(el=>parseInt(el.dial_code.replace("+","").replace(" ",""))).sort((a,b)=>{return a-b}).filter((country,index,self)=>index===self.indexOf(country))].map((el)=>{
      return <MenuItem key={el} value={"+"+el}>{"+"+el}</MenuItem>
    })}
        </Select>
      </FormControl>
    <TextField
         type="text"
         size="small"
         sx={{...classes.inp,width:"100%" }}
         helperText={errors.phone}
         name="phoneNumber"
        error={errors.phone===""?false:true}
         onChange={(e)=>{
          inputState.phone = e.target.value 
          setInputs({...inputState})
          errors.phone = ""
          setErrors({...errors})
        }}
        InputProps={{
          
          style: {color: 'black', borderRadius:"0px 5px 5px 0px"},
          placeholder: "Phone Number",
        }}
        
  >
    </TextField> 
    </Box>
    <FormControl size="small" sx={classes.Label}>
        <InputLabel style={{color:"#909090"}} id="demo-multiple-checkbox-label">Interested in</InputLabel>
        <Select
          error={errors.interests===""?false:true}
          renderValue={(selected:Array<string>) => selected.map(el=>interestedIn[el as keyof InterestedIn]).join(', ')}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          
          multiple
          onChange={(e)=>{
            const selected = e.target.value 
            inputState!.interests = typeof selected=="string" ? selected.split(',') : selected
            errors.interests = inputState.interests.length!==0 ? "" : errors.interests
            setErrors({...errors})
            setInputs({...inputState})
            
            
          }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 400,
              },
            },
          }}
          value = {inputState?.interests}
          input={<OutlinedInput label="Interested in s" />}
          //renderValue={(selected) => selected.join(', ')}
          //MenuProps={MenuProps}
        >
          {
          
          Object.keys(interestedIn).map((el) => (
            <MenuItem key={el} value={el}>
              <Checkbox  sx={classes.check} checked={inputState!.interests.indexOf(el) > -1} />
              <ListItemText primary={interestedIn[el as keyof InterestedIn]} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    <Box style={{backgroundColor:"transparent",flexDirection:dir,display:"flex",border:"none",width:"100%"}}> 
    <TextField
         type="text"
         size="small"
         required
         name="companyName"
         sx={{...classes.inp,width:dir==="column"?"100%":"90%"}}
         value={inputState.companyName}
         onChange={(e)=>{
          inputState.companyName = e.target.value 
          errors.companyName = ""
          setInputs({...inputState})
          setErrors({...errors})
        }}
        helperText={errors.companyName}
        error={errors.companyName===""?false:true}
         InputProps={{
          style: {color: 'black'},
          placeholder: "Company Name",
        }}
        >
    </TextField>
    <TextField
         type="number"
         size="small"
         value={inputState.headcount}
         required
         sx={{...classes.inp,width:dir==="column"?"100%":"90%",marginLeft:dir==="column"?"0px":"10px"}}
         onChange={(e)=>{
          inputState.headcount = e.target.value 
          errors.headcount = ""
          setInputs({...inputState})
          setErrors({...errors})
        }}
        helperText={errors.headcount}
        error={errors.headcount===""?false:true}
         InputProps={{
          style: {color: 'black'},
          placeholder: "Company Headcount",
          inputProps:{
            min:0
          }
        }}
        >
    </TextField>
    </Box>
<FormControl size="small" sx={classes.Label} >
  <InputLabel style={{color:"#909090"}}>Headquarter Location</InputLabel>
  <Select
    label="Headquarter Location  s"
    error={errors.countryHQ===""?false:true}
   
    size="small"
    value={inputState.countryHQ}
    onChange={(e)=>{
      inputState.countryHQ = e.target.value
      setInputs({...inputState})
      errors.countryHQ = ""
      setErrors({...errors})
    }}
    MenuProps={{
      PaperProps: {
        style: {
          maxHeight: 300,
        },
      },
    }}
  >
    {countries.sort((a,b)=>{
    if (a.name>b.name)   
      return 1
    else if  (a.name<b.name)   
      return -1
    else
      return 0
    
    }).map((el)=>{
      return <MenuItem key={el.name} value={el.name}>{el.name}</MenuItem>
    })}
  </Select>
  
</FormControl>

      {/* <Tooltip
      title="We use your company linkedin url to set up your account"
      open={tooltipOpen}
     
      onClose={() => setTooltipOpen(false)}
      disableFocusListener
      disableHoverListener
      disableTouchListener
    > */}
      <TextField
         type="text"
         size="small"
         sx={classes.inp}
         onChange={(e)=>{
          inputState.companyLinkedinUrl = e.target.value 
          setInputs({...inputState})
        }}
        onMouseEnter={() => setTooltipOpen(true)}
        onClick={() => setTooltipOpen(false)}
        onMouseLeave={() => setTooltipOpen(false)}
        value={inputState.companyLinkedinUrl}
         InputProps={{
          style: {color: 'black'},
          placeholder: "Company Linkedin Url (Optional, used to set up your account)",
        }}
        >
    </TextField>
    {/* </Tooltip> */}
  </FormControl> 
  <Button id="openAccountButton"
      style={{ display:subMessage===successMessage?"none":"block"}}
      onClick={async (e)=>{
        e.preventDefault()
        let isThereAnError = false
        for (const key in inputState) {
          if (typeof inputState[key as keyof DemoInput]==="string" && inputState[key as keyof DemoInput]==="" && key!=="companyLinkedinUrl") {
            errors[key as keyof DemoErrors] = "Please fill the above input"
            isThereAnError = true
          }
        }
        if (inputState.interests.length===0) {
          errors.interests = "Please select at least an interest"
          isThereAnError = true
        } 
        setErrors({...errors})
        if (isThereAnError) 
          return
        
        const firstName = inputState.firstName

        const lastName = inputState.lastName

        const email = inputState.email

        const companyName = inputState.companyName

        const headcount = inputState.headcount

        const country = inputState.countryHQ

        const interestedIn = inputState.interests

        const linkedinUrl = inputState.companyLinkedinUrl

        const jobTitle = inputState.jobTitle

        const submissionUrl = "https://api.hsforms.com/submissions/v3/integration/submit/20337724/d401d4c9-c6c3-4b80-bd1d-9d008c3ced2a"

        const phone = inputState.prefixPhone + inputState.phone

        const data = {"fields":[
          {
            "objectTypeId": "0-1",
            "name": "firstname",
            "value": firstName
      
          },
          {
            "objectTypeId": "0-1",
            "name": "lastname",
            "value": lastName
      
          },
          {
            "objectTypeId": "0-2",
            "name": "name",
            "value": companyName
      
          },
          {
            "objectTypeId": "0-1",
            "name": "number_of_employees_booking_form",
            "value": headcount
      
          },
          {
            "objectTypeId": "0-1",
            "name": "phone",
            "value": phone
      
          },
          {
            "objectTypeId": "0-1",
            "name": "jobtitle",
            "value": jobTitle
      
          },
          {
            "objectTypeId": "0-1",
            "name": "country_of_hq",
            "value": country
      
          },
          {
            "objectTypeId": "0-1",
            "name": "email",
            "value": email
          },
          {
            "objectTypeId": "0-1",
            "name": "demo_form_button_name",
            "value": cookie.get("buttonName")
          },
          {
            "objectTypeId":"0-1",
            "name":"interested_in",
            "value":interestedIn.join(";")
          },
          {
          "objectTypeId": "0-1",
            "name": "insert_your_company_linkedin_url_if_you_want_us_to_set_up_an_account_for_you",
            "value": linkedinUrl
          }
        ],
        "legalConsentOptions": {
          "consent": { // Include this object when GDPR options are enabled
            "consentToProcess": true,
            "text": "",
            "communications": [
              {
                "value": true,
                "subscriptionTypeId": 999,
                "text": ""
              }
            ]
        }
        }
        }
        const res = await fetch(submissionUrl,{
          method:'POST',
          body:JSON.stringify(data),
          headers:{
            'Content-Type':'application/json'
          }
        })
       
        if (res.status === 200) {

          window.parent.postMessage({type:"message",detail: { accountOpened: true, demoEmail: email, buttonName:cookie.get('buttonName')}},'https://zelt.app/demo/')
          setSubMessage(successMessage)
          

        } else {
          const errorRes = await res.json()
          if(errorRes['errors']) {
            const error = errorRes['errors'][0]
            const message = error['message']
            setSubMessage(message)
          } else {          
            setSubMessage(errorMessage)
          }
        }
        
      }}
            
          sx = {classes.Button}   
          >
            {cookie.get("buttonName") ? cookie.get("buttonName") : fallBackButtonName}
          
          </Button>
        <Typography sx = {{marginTop:subMessage!==""?"15px":"0px",color:subMessage===successMessage?"black":"red"}}>{subMessage}</Typography>
  </Box>
 )
};
