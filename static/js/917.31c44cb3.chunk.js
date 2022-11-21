"use strict";(self.webpackChunklab_deploy_build=self.webpackChunklab_deploy_build||[]).push([[917],{332:function(r,n,t){t.d(n,{Z:function(){return u}});t(2791),t(7378);var e={btn:"Button_btn__W1TTO"},o=t(184),u=function(r){var n=r.children,t=r.onClick,u=r.className,a=r.buttonType,i=void 0===a?"button":a;return(0,o.jsx)("button",{type:i,className:[e.btn,u].join(" "),onClick:t,children:n})}},9321:function(r,n,t){t.d(n,{Z:function(){return e.Z}});var e=t(332)},4917:function(r,n,t){t.r(n),t.d(n,{default:function(){return f}});var e=t(4165),o=t(5861),u=t(885),a=t(1087),i=t(9101),s=t(2506),l=t(9321),m=t(4439),c=t(2797),d=t(963),_=t(2627),p=t(184),h=function(){var r=(0,i.useDispatch)(),n=(0,d.useLoginMutation)(),t=(0,u.Z)(n,2),h=t[0],f=t[1].isLoading,g=(0,s.TA)({initialValues:{email:"",password:""},validationSchema:c.Ry().shape({email:c.Z_().email("Email address is invalid").required("Please enter"),password:c.Z_().required("Please enter").min(6,"Password must be at least 6 characters").max(40,"Password must not exceed 40 characters")}),onSubmit:function(){var n=(0,o.Z)((0,e.Z)().mark((function n(t){var o;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,h(t).unwrap();case 2:o=n.sent,r((0,_.setToken)(o.data.token)),g.resetForm();case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()});return(0,p.jsxs)("div",{className:m.Z.formBlock,children:[(0,p.jsx)("h2",{className:m.Z.formTitle,children:"Login"}),(0,p.jsxs)("form",{className:m.Z.loginForm,onSubmit:g.handleSubmit,children:[(0,p.jsx)("input",{className:m.Z.formInput,id:"loginEmail",name:"email",type:"email",onChange:g.handleChange,value:g.values.email,placeholder:"Email"}),""!==g.values.email&&g.errors.email?(0,p.jsx)("p",{className:m.Z.inputLoginErrorEmail,children:g.errors.email}):null,(0,p.jsx)("input",{className:m.Z.formInput,id:"loginPassword",name:"password",type:"password",onChange:g.handleChange,value:g.values.password,placeholder:"Password"}),""!==g.values.password&&g.errors.password?(0,p.jsx)("p",{className:m.Z.inputLoginErrorPassword,children:g.errors.password}):null,(0,p.jsx)(l.Z,{className:m.Z.formBtn,buttonType:"submit",disabled:f,children:"Login"})]}),(0,p.jsxs)("p",{className:m.Z.linkToPage,children:["Don't have an account?"," ",(0,p.jsx)(a.Link,{className:m.Z.link,to:"/register",children:"Register"})," "]})]})},f=function(){return(0,p.jsx)(h,{})}},963:function(r,n,t){t.r(n),t.d(n,{useAvatarsMutation:function(){return l},useCurrentQuery:function(){return s},useEditMutation:function(){return a},useLoginMutation:function(){return u},useLogoutMutation:function(){return i},useRegisterMutation:function(){return o}});var e=t(6405).u.injectEndpoints({endpoints:function(r){return{register:r.mutation({query:function(r){return{url:"/users/register",method:"POST",body:r}}}),login:r.mutation({query:function(r){return{url:"/users/login",method:"POST",body:r}}}),edit:r.mutation({query:function(r){return{url:"/users/edit",method:"PATCH",body:r}},invalidatesTags:["User"]}),logout:r.mutation({query:function(r){return"/users/logout"}}),current:r.query({query:function(){return"/users/current"},providesTags:["User"]}),avatars:r.mutation({query:function(r){return{url:"/users/avatars",method:"PATCH",body:r}},invalidatesTags:["User"]})}},overrideExisting:!1}),o=e.useRegisterMutation,u=e.useLoginMutation,a=e.useEditMutation,i=e.useLogoutMutation,s=e.useCurrentQuery,l=e.useAvatarsMutation},4439:function(r,n){n.Z={formBlock:"authForm_formBlock__1ySqq",formTitle:"authForm_formTitle__kG3g2",registerForm:"authForm_registerForm__jQ767",loginForm:"authForm_loginForm__s5wPX",formInput:"authForm_formInput__7KbGC",inputErrorPhone:"authForm_inputErrorPhone__26x35",inputErrorLocation:"authForm_inputErrorLocation__pKJCM",inputErrorName:"authForm_inputErrorName__i9xIe",inputErrorConfirmPassword:"authForm_inputErrorConfirmPassword__inhRB",inputLoginErrorPassword:"authForm_inputLoginErrorPassword__1CZq9",inputErrorPassword:"authForm_inputErrorPassword__bGQhO",inputLoginErrorEmail:"authForm_inputLoginErrorEmail__5HuH4",inputErrorEmail:"authForm_inputErrorEmail__zuBJV",formBtn:"authForm_formBtn__pBtde",btnBlock:"authForm_btnBlock__OtIl3",formBtnBck:"authForm_formBtnBck__EC-3Y",linkToPage:"authForm_linkToPage__vpbWC",link:"authForm_link__0cb4+"}}}]);
//# sourceMappingURL=917.31c44cb3.chunk.js.map