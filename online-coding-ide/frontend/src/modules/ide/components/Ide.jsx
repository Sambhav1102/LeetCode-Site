import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import ReactDOM from 'react-dom';
import Editor from '@monaco-editor/react';
import { apiClient } from '../../../shared/services/api-client';
export const Ide=()=> {
  const skeletoncode =`
  class Solution {
    public int show(int x,int y){
        return x+y;
    }
}`
  const editorRef = useRef(null);
  const mount =(editor)=> {editorRef.current=editor}
  const getCode=async()=> {
    const code = editorRef.current.getValue();
    console.log('code retrieved',code);
    const jsonObject ={"code":code}
    try{
      const response = await apiClient.post(process.env.REACT_APP_CODE_URL,jsonObject);
      console.log('response is', response); }
    catch(err){
      console.log('Error During Code Submission', err);
    }
  }
  
  return(<><Editor onMount={mount} height="80vh" defaultLanguage="java"  defaultValue={skeletoncode} />
  <Button onClick={getCode} variant="contained">Submit</Button>
  </>);
  
}