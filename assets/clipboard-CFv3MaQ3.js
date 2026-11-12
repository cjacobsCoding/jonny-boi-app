async function a(e,t=(r=>(r=globalThis.navigator)==null?void 0:r.clipboard)()){if(!t||typeof t.writeText!="function")return!1;try{return await t.writeText(e),!0}catch{return!1}}export{a as c};
