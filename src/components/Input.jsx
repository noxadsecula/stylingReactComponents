// import {styled} from 'styled-components';


// const Label = styled.label`
// display: block;
// margin-bottom: 0.5rem;
// font-size: 0.75rem;
// font-weight: 700;
// letter-spacing: 0.1em;
// text-transform: uppercase;
// color: ${({$invalid}) => $invalid ?  '#f87171' : '#6b7280'    };
// `

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${({$invalid}) => $invalid ? '#fed2d2' : '#d1d5db' };
//   color: ${({$invalid}) => $invalid ? '#ef4444' : '#374151' };
//   border: 1px solid ${({$invalid}) => $invalid ? '#374151' : 'transparent' };
//   border-color: ${({$invalid}) => $invalid ? '#f73f3f' : '#d1d5db' };
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `



// export default function CustomInput({label, invalid, ...props}) {
//     return <p>
//         <Label $invalid={invalid}>{label}</Label>
//         <Input $invalid={invalid} {...props}/>
//     </p>
// }

export default function Input({label, invalid, ...props}) {


  let validatorClass = 'block mb-2 text-xs font-bold tracking-wide uppercase'
  let inputClass = 'w-full px-3 py-2 leading-tight border rounded shadow'


  if (invalid) {
    validatorClass += ' text-red-400'
    inputClass += ' text-red-400 bg-red-200 border-red-500'
  }else{
    validatorClass += ' text-stone-300'
    inputClass += ' text-gray-700 bg-stone-300'
  }
    return <p>
        <label className={validatorClass}>{label}</label>
        <input className={inputClass}  {...props}/>
    </p>
}