"use strict";(self.webpackChunklab_deploy_build=self.webpackChunklab_deploy_build||[]).push([[939],{7939:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(7689),i=n(4165),o=n(5861),c=n(885),s="NoticesSearch_noticesSearchBox__A31AY",a="NoticesSearch_lable__LYP4C",u="NoticesSearch_input__E7mPL",l=n(1700),d=n(184),v=function(e){var t=(0,r.TH)(),n=(0,l.si)(),v=(0,c.Z)(n,1)[0],f=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(n){var r,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=t.pathname.split("/")[2],console.log("handleSubmit ~ category",r),e.next=5,v({title:n.target.elements.search.value,category:r});case 5:o=e.sent,c=o.data,console.log(c.data),n.target.elements.search.value="";case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,d.jsx)("div",{className:s,children:(0,d.jsxs)("form",{onSubmit:function(e){return f(e)},children:[(0,d.jsx)("h1",{className:a,children:"Find your favorite pet"}),(0,d.jsx)("input",{className:u,type:"text",placeholder:"Search",name:"search"})]})})},f=n(9101),N=n(1087),h=n(2627),m="NoticesCategoriesNav_navList__ANHQW",y="NoticesCategoriesNav_button__FVAuH",g="NoticesCategoriesNav_favorite__3l5tZ",_="NoticesCategoriesNav_sell__m5d3Q",j="NoticesCategoriesNav_carrentColor__zSdBD",p=function(){var e=(0,f.useSelector)(h.selectIsLoggedIn);return(0,d.jsxs)("ul",{className:m,children:[(0,d.jsx)("li",{children:(0,d.jsx)(N.NavLink,{className:function(e){var t=e.isActive;return"".concat(y)+(t?" ".concat(j):"")},to:"/notices/lost-found",children:"lost/found"})}),(0,d.jsx)("li",{children:(0,d.jsx)(N.NavLink,{className:function(e){var t=e.isActive;return"".concat(y)+(t?" ".concat(j):"")},to:"/notices/for-free",children:"In good hands"})}),(0,d.jsx)("li",{className:_,children:(0,d.jsx)(N.NavLink,{className:function(e){var t=e.isActive;return"".concat(y)+(t?" ".concat(j):"")},to:"/notices/sell",children:"sell"})}),e&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("li",{className:g,children:(0,d.jsx)(N.NavLink,{className:function(e){var t=e.isActive;return"".concat(y)+(t?" ".concat(j):"")},to:"/notices/favorite",children:"Favorite ads"})}),(0,d.jsx)("li",{children:(0,d.jsx)(N.NavLink,{className:function(e){var t=e.isActive;return"".concat(y)+(t?" ".concat(j):"")},to:"/notices/own",children:"My ads"})})]})]})},x=function(e){var t=e.children;return(0,d.jsx)("div",{children:t})},T=function(){return(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(v,{}),(0,d.jsxs)(x,{children:[(0,d.jsx)(p,{}),(0,d.jsx)(r.j3,{})]})]})}},1700:function(e,t,n){n.d(t,{MQ:function(){return d},KK:function(){return s},K1:function(){return v},u3:function(){return c},si:function(){return o},pL:function(){return l},EO:function(){return a},rZ:function(){return f},Yf:function(){return u}});var r=n(6405),i=r.u.injectEndpoints({endpoints:function(e){return{fetchNotices:e.mutation({query:function(e){var t,n=e.title,r=e.category,i=e.location,o=e.name,c=e.page,s=e.limit;if(n||r||i||o||c||s){var a=(t=e,Object.entries(t).map((function(e){return e.join("=")})).join("&"));return{url:"/notices?".concat(a)}}return{url:"/notices"}}}),deleteNotice:e.mutation({query:function(e){return{url:"/notices/".concat(e),method:"DELETE"}},invalidatesTags:["Notices"]}),createNotice:e.mutation({query:function(e){return{url:"/notices",method:"POST",body:e}},invalidatesTags:["Notices"]}),getNoticeById:e.query({query:function(e){return{url:"/notices/".concat(e),method:"GET"}}}),getPersonalNotice:e.query({query:function(){return{url:"/notices/personal",method:"GET"}},providesTags:["Notices"]}),getFavoritesNotice:e.query({query:function(){return{url:"/notices/favorites",method:"GET"}},providesTags:["Notices"]}),addFavoritesById:e.mutation({query:function(e){return{url:"/notices/favorites/".concat(e),method:"GET"}},invalidatesTags:["Notices","User"]}),deleteFavoritesById:e.mutation({query:function(e){return{url:"/notices/favorites/".concat(e),method:"DELETE"}},invalidatesTags:["User","Notices"]}),getNoticesByCategory:e.query({query:function(e){return{url:"/notices/category/".concat(e),method:"GET"}},providesTags:["Notices"]})}}}),o=i.useFetchNoticesMutation,c=i.useDeleteNoticeMutation,s=i.useCreateNoticeMutation,a=i.useGetNoticeByIdQuery,u=i.useGetPersonalNoticeQuery,l=i.useGetFavoritesNoticeQuery,d=i.useAddFavoritesByIdMutation,v=i.useDeleteFavoritesByIdMutation,f=i.useGetNoticesByCategoryQuery}}]);
//# sourceMappingURL=939.2347a78f.chunk.js.map