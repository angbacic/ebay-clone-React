import React from 'react';



export default function AdvertForm (props){
return (
      <form onSubmit={props.onSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={props.onChange} value={props.values.title}/>
        </label>
        <label>
          Description:
          <input type="text" name="description" onChange={props.onChange} value={props.values.description}/>
        </label>
        <label>
            Photo Url:
            <input type="text" name="picture" onChange={props.onChange} value={props.values.picture}/>
        </label>
        <label>
            Price:
            <input type="text" name="price" onChange={props.onChange} value={props.values.price}/>
        </label>
        <label>
            Email:
            <input type="text" name="email" onChange={props.onChange} value={props.values.email}/>
        </label>
        <label>
            Phone Number:
            <input type="text" name="phoneNumber" onChange={props.onChange} value={props.values.phoneNumber}/>
        </label>
        <button type="submit" value="Submit" >SAVE </button>
        
      </form>
)
}
    