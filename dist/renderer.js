var t=function(t,n){this.c=t,this.p=null,this.n=n,this.d=0};t.prototype.r=function(){this.d=1};var n=function(){this.h=null};n.prototype.add=function(n){var e=new t(n,this.h);return this.h&&(this.h.p=e),this.h=e,e},n.prototype.i=function(t){for(var n=this.h;n;)n.d?(n.p?n.p.n=n.n:this.h=n.n,n.n&&(n.n.p=n.p)):t(n.c),n=n.n};var e=function(t){this.z=t,this.o=new n,this.t=new n};e.prototype.add=function(t){t.remove(),t.layer=this,t.n=(function(t){return 1!==t.alpha||0===t.frame.atest}(t)?this.t:this.o).add(t)};var i=function(t,n){var r=Object.assign({antialias:!1,alpha:!1},n),a=r.alpha?1:770,o=t.getContext("webgl",r),s=o.getExtension("ANGLE_instanced_arrays"),u=function(t,n){var e=o.createShader(n);return o.shaderSource(e,t),o.compileShader(e),e},c=o.createProgram();o.attachShader(c,u("attribute vec2 g;\nattribute vec2 a;\nattribute vec2 t;\nattribute float r;\nattribute vec2 s;\nattribute vec4 u;\nattribute vec4 c;\nattribute float z;\nuniform mat4 m;\nvarying vec2 v;\nvarying vec4 i;\nvoid main(){\nv=u.xy+g*u.zw;\ni=c.abgr;\nvec2 p=(g-a)*s;\nfloat q=cos(r);\nfloat w=sin(r);\np=vec2(p.x*q-p.y*w,p.x*w+p.y*q);\np+=a+t;\ngl_Position=m*vec4(p,z,1);}",35633)),o.attachShader(c,u("precision mediump float;\nuniform sampler2D x;\nuniform float j;\nvarying vec2 v;\nvarying vec4 i;\nvoid main(){\nvec4 c=texture2D(x,v);\ngl_FragColor=c*i;\nif(j>0.0){\nif(c.a<j)discard;\ngl_FragColor.a=1.0;};}",35632)),o.linkProgram(c);var h=function(t,n,e){var i=o.createBuffer();return o.bindBuffer(t,i),o.bufferData(t,n,e||35044),i},f=function(t,n,e,i,r,a,u){var h=o.getAttribLocation(c,t);return o.enableVertexAttribArray(h),o.vertexAttribPointer(h,n,a||5126,!!u,e||0,r||0),i&&s.vertexAttribDivisorANGLE(h,i),h};h(34963,new Uint8Array([0,1,2,2,1,3])),h(34962,new Float32Array([0,0,0,1,1,0,1,1])),f("g",2);var l=new ArrayBuffer(3407820),v=new Float32Array(l),p=new Uint32Array(l);h(34962,l,35048),f("a",2,52,1),f("s",2,52,1,8),f("r",1,52,1,16),f("t",2,52,1,20),f("u",4,52,1,28),f("c",4,52,1,44,5121,!0),f("z",1,52,1,48);var y,d,x=function(t){return o.getUniformLocation(c,t)},g=x("m"),b=x("x"),m=x("j"),w=0,P=function(){w&&(o.bufferSubData(34962,0,v.subarray(0,13*w)),s.drawElementsInstancedANGLE(4,6,5121,0,w),w=0)},z=function(t){if(t.visible){65535===w&&P();var n=t.frame,e=t.scale,i=t.position,r=n.tex,a=n.size,s=n.uvs,u=t.anchor||n.anchor;y!==r&&(P(),y=r,o.bindTexture(3553,r),o.uniform1i(b,r),o.uniform1f(m,d?n.atest:0));var c=13*w;v[c++]=u.x,v[c++]=u.y,v[c++]=e.x*a.x,v[c++]=e.y*a.y,v[c++]=t.rotation,v[c++]=i.x,v[c++]=i.y,v[c++]=s[0],v[c++]=s[1],v[c++]=s[2],v[c++]=s[3],p[c++]=((16777215&t.tint)<<8|255*t.alpha&255)>>>0,v[c++]=t.layer.z,w++}},A=new e(0),j=[A],F={gl:o,camera:{at:i.Point(),to:i.Point(),angle:0},background:function(t,n,e,i){void 0===i&&(i=1),o.clearColor(t,n,e,i)},layer:function(t){var n=j.find(function(n){return n.z===t});return n||(n=new e(t),j.push(n),j.sort(function(t,n){return n.z-t.z})),n},add:function(t){A.add(t)},render:function(){var n=t.clientWidth,e=t.clientHeight;t.width=n,t.height=e;var i=F.camera,r=i.at,s=i.to,u=i.angle,h=r.x-n*s.x,f=r.y-e*s.y,l=Math.cos(u),v=Math.sin(u),p=2/n,x=-2/e,b=[l*p,v*x,0,0,-v*p,l*x,0,0,0,0,-1e-5,0,(r.x*(1-l)+r.y*v)*p-2*h/n-1,(r.y*(1-l)-r.x*v)*x+2*f/e+1,0,1];o.useProgram(c),o.uniformMatrix4fv(g,!1,b),o.viewport(0,0,n,e),o.clear(16640),o.activeTexture(33984),y=null,o.disable(3042),o.enable(2929),o.depthFunc(513),d=!0,j.forEach(function(t){return t.o.i(function(t){return z(t)})}),P(),o.enable(3042),o.blendFunc(a,771),o.depthFunc(515),o.uniform1f(m,0),d=!1;for(var w=j.length-1;w>=0;w--)j[w].t.i(function(t){return z(t)});P()}};return F.render(),F};i.Point=function(){function t(t,n){if(!(this instanceof i.Point))return new i.Point(t,n);this.set(t,n)}return t.prototype.set=function(t,n){return this.x=t||0,this.y=n||(0!==n?this.x:0),this},t.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this},t}();var r=function t(n,e,r,a){if(!(this instanceof t))return new t(n,e,r,a);this.size=i.Point().copy(r),this.anchor=i.Point().copy(a||n.anchor),this.uvs=[e.x/n.size.x,e.y/n.size.y,r.x/n.size.x,r.y/n.size.y],this.t=n},a={atest:{configurable:!0},tex:{configurable:!0}};a.atest.get=function(){return this.t.atest},a.tex.get=function(){return this.t.tex},Object.defineProperties(r.prototype,a);i.Frame=r,i.Texture=function t(n,e,r,a){if(!(this instanceof t))return new t(n,e,r,a);this.size=i.Point(e.width,e.height),this.anchor=i.Point(),this.uvs=[0,0,1,1],this.atest=r||(0===r?0:1);var o=Object.assign({10240:9728,10241:9728,10242:33071,10243:33071},a),s=n.gl;this.tex=s.createTexture(),s.bindTexture(3553,this.tex),Object.keys(o).forEach(function(t){return s.texParameteri(3553,t,o[t])}),s.texImage2D(3553,0,6408,6408,5121,e)},i.Sprite=function(){function t(n,e){if(!(this instanceof t))return new t(n,e);this.frame=n,this.a=1,Object.assign(this,{visible:!0,position:i.Point(),rotation:0,anchor:null,scale:i.Point(1),tint:16777215},e),this.remove()}var n={alpha:{configurable:!0}};return n.alpha.get=function(){return this.a},n.alpha.set=function(t){var n=this.a;this.a=t,this.n&&(t<1&&1===n||1===t&&n<1)&&this.layer.add(this)},t.prototype.remove=function(){this.n&&this.n.r(),this.layer=null,this.n=null},Object.defineProperties(t.prototype,n),t}(),module.exports=i;
