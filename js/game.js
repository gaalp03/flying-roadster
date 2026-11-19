(()=>{var yd=0,ch=1,vd=2;var Mu=1,Ac=2,si=3,wi=0,ze=1,Ue=2,Zn=0,bi=1,Be=2,hh=3,uh=4,_d=5,Oi=100,Md=101,bd=102,Sd=103,wd=104,Ed=200,Td=201,Ad=202,Rd=203,il=204,sl=205,Cd=206,Pd=207,Id=208,Ld=209,Dd=210,Ud=211,Nd=212,Fd=213,zd=214,rl=0,ol=1,al=2,Es=3,ll=4,cl=5,hl=6,ul=7,Fo=0,Bd=1,Od=2,Si=0,Rc=1,Cc=2,Pc=3,vr=4,kd=5,Ic=6,Lc=7;var bu=300,Ts=301,As=302,dl=303,fl=304,zo=306,Bn=1e3,oi=1001,pl=1002,gn=1003,Hd=1004;var Ir=1005;var wn=1006,Ma=1007;var Vi=1008;var On=1009,Su=1010,wu=1011,hr=1012,Dc=1013,Gi=1014,qn=1015,yn=1016,Uc=1017,Nc=1018,Rs=1020,Eu=35902,Tu=1021,Au=1022,zn=1023,Ru=1024,Cu=1025,bs=1026,Cs=1027,_r=1028,Fc=1029,Pu=1030,zc=1031;var Bc=1033,ro=33776,oo=33777,ao=33778,lo=33779,ml=35840,gl=35841,xl=35842,yl=35843,vl=36196,_l=37492,Ml=37496,bl=37808,Sl=37809,wl=37810,El=37811,Tl=37812,Al=37813,Rl=37814,Cl=37815,Pl=37816,Il=37817,Ll=37818,Dl=37819,Ul=37820,Nl=37821,co=36492,Fl=36494,zl=36495,Iu=36283,Bl=36284,Ol=36285,kl=36286;var ho=2300,Hl=2301,ba=2302,dh=2400,fh=2401,ph=2402;var Vd=3200,Gd=3201;var Bo=0,Wd=1,Mi="",Ae="srgb",Os="srgb-linear",Oo="linear",he="srgb";var os=7680;var mh=519,Xd=512,Yd=513,qd=514,Lu=515,Zd=516,$d=517,Jd=518,Kd=519,gh=35044,$i=35048;var xh="300 es",ai=2e3,uo=2001,Ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sa=Math.PI/180,Vl=180/Math.PI;function Mr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function Ve(s,t,e){return Math.max(t,Math.min(e,s))}function Qd(s,t){return(s%t+t)%t}function wa(s,t,e){return(1-e)*s+e*t}function Js(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],p=i[3],m=i[6],y=i[1],M=i[4],v=i[7],P=i[2],E=i[5],T=i[8];return r[0]=o*x+a*y+l*P,r[3]=o*p+a*M+l*E,r[6]=o*m+a*v+l*T,r[1]=c*x+h*y+u*P,r[4]=c*p+h*M+u*E,r[7]=c*m+h*v+u*T,r[2]=f*x+d*y+g*P,r[5]=f*p+d*M+g*E,r[8]=f*m+d*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ea=new Wt;function Du(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jd(){let s=fo("canvas");return s.style.display="block",s}var yh={};function rr(s){s in yh||(yh[s]=!0,console.warn(s))}function tf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ef(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?Oo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var vh=[.64,.33,.3,.6,.15,.06],_h=[.2126,.7152,.0722],Mh=[.3127,.329],bh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Os]:{primaries:vh,whitePoint:Mh,transfer:Oo,toXYZ:bh,fromXYZ:Sh,luminanceCoefficients:_h,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:vh,whitePoint:Mh,transfer:he,toXYZ:bh,fromXYZ:Sh,luminanceCoefficients:_h,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});var as,Gl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{as===void 0&&(as=fo("canvas")),as.width=t.width,as.height=t.height;let n=as.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=as}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sf=0,po=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Mr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ta(i[o].image)):r.push(Ta(i[o]))}else r=Ta(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rf=0,dn=class s extends Ei{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=oi,i=oi,r=wn,o=Vi,a=zn,l=On,c=s.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Mr(),this.name="",this.source=new po(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bn:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bn:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=bu;dn.DEFAULT_ANISOTROPY=1;var ge=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,P=(m+1)/2,E=(h+f)/4,T=(u+x)/4,R=(g+p)/4;return M>v&&M>P?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=T/n):v>P?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=R/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=T/r,i=R/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new po(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xe=class extends Wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},mo=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xl=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*x,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let P=Math.sqrt(M),E=Math.atan2(P,m*y);p=Math.sin(p*E)/P,a=Math.sin(a*E)/P}let v=a*y;if(l=l*p+f*v,c=c*p+d*v,h=h*p+g*v,u=u*p+x*v,p===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Aa=new I,wh=new pe,ci=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(t.matrixWorld),this.union(Lr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Dr.subVectors(this.max,Ks),ls.subVectors(t.a,Ks),cs.subVectors(t.b,Ks),hs.subVectors(t.c,Ks),mi.subVectors(cs,ls),gi.subVectors(hs,cs),Li.subVectors(ls,hs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Li.z,Li.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Li.z,0,-Li.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Li.y,Li.x,0];return!Ra(e,ls,cs,hs,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,ls,cs,hs,Dr))?!1:(Ur.crossVectors(mi,gi),e=[Ur.x,Ur.y,Ur.z],Ra(e,ls,cs,hs,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},jn=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,Lr=new ci,ls=new I,cs=new I,hs=new I,mi=new I,gi=new I,Li=new I,Ks=new I,Dr=new I,Ur=new I,Di=new I;function Ra(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Di.fromArray(s,r);let a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var of=new ci,Qs=new I,Ca=new I,hi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):of.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Ca)),this.expandByPoint(Qs.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new I,Pa=new I,Nr=new I,xi=new I,Ia=new I,Fr=new I,La=new I,ur=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pa.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),xi.copy(this.origin).sub(Pa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Nr),a=xi.dot(this.direction),l=-xi.dot(Nr),c=xi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pa).addScaledVector(Nr,f),d}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,r){Ia.subVectors(e,t),Fr.subVectors(n,t),La.crossVectors(Ia,Fr);let o=this.direction.dot(La),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,t);let l=a*this.direction.dot(Fr.crossVectors(xi,Fr));if(l<0)return null;let c=a*this.direction.dot(Ia.cross(xi));if(c<0||l+c>o)return null;let h=-a*xi.dot(La);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,x,p)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(af,t,lf)}lookAt(t,e,n){let i=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),yi.crossVectors(n,pn),yi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),yi.crossVectors(n,pn)),yi.normalize(),zr.crossVectors(pn,yi),i[0]=yi.x,i[4]=zr.x,i[8]=pn.x,i[1]=yi.y,i[5]=zr.y,i[9]=pn.y,i[2]=yi.z,i[6]=zr.z,i[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],M=n[7],v=n[11],P=n[15],E=i[0],T=i[4],R=i[8],S=i[12],b=i[1],L=i[5],N=i[9],F=i[13],V=i[2],J=i[6],G=i[10],et=i[14],z=i[3],lt=i[7],ht=i[11],gt=i[15];return r[0]=o*E+a*b+l*V+c*z,r[4]=o*T+a*L+l*J+c*lt,r[8]=o*R+a*N+l*G+c*ht,r[12]=o*S+a*F+l*et+c*gt,r[1]=h*E+u*b+f*V+d*z,r[5]=h*T+u*L+f*J+d*lt,r[9]=h*R+u*N+f*G+d*ht,r[13]=h*S+u*F+f*et+d*gt,r[2]=g*E+x*b+p*V+m*z,r[6]=g*T+x*L+p*J+m*lt,r[10]=g*R+x*N+p*G+m*ht,r[14]=g*S+x*F+p*et+m*gt,r[3]=y*E+M*b+v*V+P*z,r[7]=y*T+M*L+v*J+P*lt,r[11]=y*R+M*N+v*G+P*ht,r[15]=y*S+M*F+v*et+P*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=u*p*c-x*f*c+x*l*d-a*p*d-u*l*m+a*f*m,M=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*m+o*u*m,P=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,E=e*y+n*M+i*v+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=y*T,t[1]=(x*f*r-u*p*r-x*i*d+n*p*d+u*i*m-n*f*m)*T,t[2]=(a*p*r-x*l*r+x*i*c-n*p*c-a*i*m+n*l*m)*T,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*T,t[4]=M*T,t[5]=(h*p*r-g*f*r+g*i*d-e*p*d-h*i*m+e*f*m)*T,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*m-e*l*m)*T,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*T,t[8]=v*T,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*m-e*u*m)*T,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*m+e*a*m)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*T,t[12]=P*T,t[13]=(h*x*i-g*u*i+g*n*f-e*x*f-h*n*p+e*u*p)*T,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*p-e*a*p)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,p=o*u,m=a*u,y=l*c,M=l*h,v=l*u,P=n.x,E=n.y,T=n.z;return i[0]=(1-(x+m))*P,i[1]=(d+v)*P,i[2]=(g-M)*P,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+m))*E,i[6]=(p+y)*E,i[7]=0,i[8]=(g+M)*T,i[9]=(p-y)*T,i[10]=(1-(f+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=us.set(i[0],i[1],i[2]).length(),o=us.set(i[4],i[5],i[6]).length(),a=us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Nn.copy(this);let c=1/r,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ai){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===ai)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===uo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ai){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,d=(n+i)*h,g,x;if(a===ai)g=(o+r)*u,x=-2*u;else if(a===uo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},us=new I,Nn=new Xt,af=new I(0,0,0),lf=new I(1,1,1),yi=new I,zr=new I,pn=new I,Eh=new Xt,Th=new pe,Ce=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ce.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cf=0,Ah=new I,ds=new pe,ei=new Xt,Br=new I,js=new I,hf=new I,uf=new pe,Rh=new I(1,0,0),Ch=new I(0,1,0),Ph=new I(0,0,1),Ih={type:"added"},df={type:"removed"},fs={type:"childadded",child:null},Da={type:"childremoved",child:null},Ye=class s extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Ce,n=new pe,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Wt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Ch,t)}rotateZ(t){return this.rotateOnAxis(Ph,t)}translateOnAxis(t,e){return Ah.copy(t).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Ch,t)}translateZ(t){return this.translateOnAxis(Ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(js,Br,this.up):ei.lookAt(Br,js,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),ds.setFromRotationMatrix(ei),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ih),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(df),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ih),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,uf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ye.DEFAULT_UP=new I(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new I,ni=new I,Ua=new I,ii=new I,ps=new I,ms=new I,Lh=new I,Na=new I,Fa=new I,za=new I,Ba=new ge,Oa=new ge,ka=new ge,ki=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fn.subVectors(t,e),i.cross(Fn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Fn.subVectors(i,e),ni.subVectors(n,e),Ua.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(ni),l=Fn.dot(Ua),c=ni.dot(ni),h=ni.dot(Ua),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ba.setScalar(0),Oa.setScalar(0),ka.setScalar(0),Ba.fromBufferAttribute(t,e),Oa.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ba,r.x),o.addScaledVector(Oa,r.y),o.addScaledVector(ka,r.z),o}static isFrontFacing(t,e,n,i){return Fn.subVectors(n,e),ni.subVectors(t,e),Fn.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Fn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ps.subVectors(i,n),ms.subVectors(r,n),Na.subVectors(t,n);let l=ps.dot(Na),c=ms.dot(Na);if(l<=0&&c<=0)return e.copy(n);Fa.subVectors(t,i);let h=ps.dot(Fa),u=ms.dot(Fa);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ps,o);za.subVectors(t,r);let d=ps.dot(za),g=ms.dot(za);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ms,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Lh.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Lh,a);let m=1/(p+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Ha(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=Qd(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ha(o,r,t+1/3),this.g=Ha(o,r,t),this.b=Ha(o,r,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=Uu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return se.fromWorkingColorSpace(Je.copy(this),t),Math.round(Ve(Je.r*255,0,255))*65536+Math.round(Ve(Je.g*255,0,255))*256+Math.round(Ve(Je.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Je.copy(this),e);let n=Je.r,i=Je.g,r=Je.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Ae){se.fromWorkingColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,i=Je.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Or);let n=wa(vi.h,Or.h,e),i=wa(vi.s,Or.s,e),r=wa(vi.l,Or.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new ut;ut.NAMES=Uu;var ff=0,kn=class extends Ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Mr(),this.name="",this.blending=bi,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==il&&(n.blendSrc=this.blendSrc),this.blendDst!==sl&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qt=class extends kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new I,kr=new yt,ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gh,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gh&&(t.usage=this.usage),t}};var xo=class extends ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yo=class extends ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var wt=class extends ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},pf=0,Sn=new Xt,Va=new Ye,gs=new I,mn=new ci,tr=new ci,He=new I,Vt=class s extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?yo:xo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(mn.min,tr.min),mn.expandByPoint(He),He.addVectors(mn.max,tr.max),mn.expandByPoint(He)):(mn.expandByPoint(tr.min),mn.expandByPoint(tr.max))}mn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(t,c),He.add(gs)),i=Math.max(i,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new I,l[R]=new I;let c=new I,h=new I,u=new I,f=new yt,d=new yt,g=new yt,x=new I,p=new I;function m(R,S,b){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[R].add(x),a[S].add(x),a[b].add(x),l[R].add(p),l[S].add(p),l[b].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,S=y.length;R<S;++R){let b=y[R],L=b.start,N=b.count;for(let F=L,V=L+N;F<V;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new I,v=new I,P=new I,E=new I;function T(R){P.fromBufferAttribute(i,R),E.copy(P);let S=a[R];M.copy(S),M.sub(P.multiplyScalar(P.dot(S))).normalize(),v.crossVectors(E,S);let L=v.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,L)}for(let R=0,S=y.length;R<S;++R){let b=y[R],L=b.start,N=b.count;for(let F=L,V=L+N;F<V;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new ve(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dh=new Xt,Ui=new ur,Hr=new hi,Uh=new I,Vr=new I,Gr=new I,Wr=new I,Ga=new I,Xr=new I,Nh=new I,Yr=new I,mt=class extends Ye{constructor(t=new Vt,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ga.fromBufferAttribute(u,t),o?Xr.addScaledVector(Ga,h):Xr.addScaledVector(Ga.sub(e),h))}e.add(Xr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(Hr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Hr,Uh)===null||Ui.origin.distanceToSquared(Uh)>(t.far-t.near)**2))&&(Dh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,P=M;v<P;v+=3){let E=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);i=qr(this,m,t,n,c,h,u,E,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);i=qr(this,o,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,P=M;v<P;v+=3){let E=v,T=v+1,R=v+2;i=qr(this,m,t,n,c,h,u,E,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let y=p,M=p+1,v=p+2;i=qr(this,o,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function mf(s,t,e,n,i,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===wi,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:s}}function qr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Vr),s.getVertexPosition(l,Gr),s.getVertexPosition(c,Wr);let h=mf(s,t,e,n,Vr,Gr,Wr,Nh);if(h){let u=new I;ki.getBarycoord(Nh,Vr,Gr,Wr,u),i&&(h.uv=ki.getInterpolatedAttribute(i,a,l,c,u,new yt)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,l,c,u,new yt)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};ki.getNormal(Vr,Gr,Wr,f.normal),h.face=f,h.barycoord=u}return h}var Pe=class s extends Vt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function g(x,p,m,y,M,v,P,E,T,R,S){let b=v/T,L=P/R,N=v/2,F=P/2,V=E/2,J=T+1,G=R+1,et=0,z=0,lt=new I;for(let ht=0;ht<G;ht++){let gt=ht*L-F;for(let Et=0;Et<J;Et++){let _t=Et*b-N;lt[x]=_t*y,lt[p]=gt*M,lt[m]=V,c.push(lt.x,lt.y,lt.z),lt[x]=0,lt[p]=0,lt[m]=E>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Et/T),u.push(1-ht/R),et+=1}}for(let ht=0;ht<R;ht++)for(let gt=0;gt<T;gt++){let Et=f+gt+J*ht,_t=f+gt+J*(ht+1),j=f+(gt+1)+J*(ht+1),dt=f+(gt+1)+J*ht;l.push(Et,_t,dt),l.push(_t,j,dt),z+=6}a.addGroup(d,z,S),d+=z,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ps(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function nn(s){let t={};for(let e=0;e<s.length;e++){let n=Ps(s[e]);for(let i in n)t[i]=n[i]}return t}function gf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Ri={clone:Ps,merge:nn},xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},vo=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=ai}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_i=new I,Fh=new yt,zh=new yt,Ke=class extends vo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Fh,zh),e.subVectors(zh,Fh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=-90,ys=1,Yl=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ke(xs,ys,t,e);i.layers=this.layers,this.add(i);let r=new Ke(xs,ys,t,e);r.layers=this.layers,this.add(r);let o=new Ke(xs,ys,t,e);o.layers=this.layers,this.add(o);let a=new Ke(xs,ys,t,e);a.layers=this.layers,this.add(a);let l=new Ke(xs,ys,t,e);l.layers=this.layers,this.add(l);let c=new Ke(xs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_o=class extends dn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ql=class extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new _o(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Pe(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Zn});r.uniforms.tEquirect.value=e;let o=new mt(i,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=wn),new Yl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Wa=new I,vf=new I,_f=new Wt,ri=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wa.subVectors(n,e).cross(vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_f.getNormalMatrix(t),i=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new hi,Zr=new I,dr=class{constructor(t=new ri,e=new ri,n=new ri,i=new ri,r=new ri,o=new ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ai){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],x=i[10],p=i[11],m=i[12],y=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,p-d,v-m).normalize(),n[1].setComponents(l+r,f+c,p+d,v+m).normalize(),n[2].setComponents(l+o,f+h,p+g,v+y).normalize(),n[3].setComponents(l-o,f-h,p-g,v-y).normalize(),n[4].setComponents(l-a,f-u,p-x,v-M).normalize(),e===ai)n[5].setComponents(l+a,f+u,p+x,v+M).normalize();else if(e===uo)n[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Zr.x=i.normal.x>0?t.max.x:t.min.x,Zr.y=i.normal.y>0?t.max.y:t.min.y,Zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Mf(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Qe=class s extends Vt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*f-o;for(let M=0;M<c;M++){let v=M*u-r;g.push(v,-y,0),x.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let M=y+c*m,v=y+c*(m+1),P=y+1+c*(m+1),E=y+1+c*m;d.push(M,v,E),d.push(v,P,E)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_p=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ip=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ym=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:bf,alphahash_pars_fragment:Sf,alphamap_fragment:wf,alphamap_pars_fragment:Ef,alphatest_fragment:Tf,alphatest_pars_fragment:Af,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Pf,batching_vertex:If,begin_vertex:Lf,beginnormal_vertex:Df,bsdfs:Uf,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:zf,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:Of,clipping_planes_vertex:kf,color_fragment:Hf,color_pars_fragment:Vf,color_pars_vertex:Gf,color_vertex:Wf,common:Xf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Zf,displacementmap_vertex:$f,emissivemap_fragment:Jf,emissivemap_pars_fragment:Kf,colorspace_fragment:Qf,colorspace_pars_fragment:jf,envmap_fragment:tp,envmap_common_pars_fragment:ep,envmap_pars_fragment:np,envmap_pars_vertex:ip,envmap_physical_pars_fragment:pp,envmap_vertex:sp,fog_vertex:rp,fog_pars_vertex:op,fog_fragment:ap,fog_pars_fragment:lp,gradientmap_pars_fragment:cp,lightmap_pars_fragment:hp,lights_lambert_fragment:up,lights_lambert_pars_fragment:dp,lights_pars_begin:fp,lights_toon_fragment:mp,lights_toon_pars_fragment:gp,lights_phong_fragment:xp,lights_phong_pars_fragment:yp,lights_physical_fragment:vp,lights_physical_pars_fragment:_p,lights_fragment_begin:Mp,lights_fragment_maps:bp,lights_fragment_end:Sp,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ap,map_fragment:Rp,map_pars_fragment:Cp,map_particle_fragment:Pp,map_particle_pars_fragment:Ip,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Up,morphcolor_vertex:Np,morphnormal_vertex:Fp,morphtarget_pars_vertex:zp,morphtarget_vertex:Bp,normal_fragment_begin:Op,normal_fragment_maps:kp,normal_pars_fragment:Hp,normal_pars_vertex:Vp,normal_vertex:Gp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Zp,opaque_fragment:$p,packing:Jp,premultiplied_alpha_fragment:Kp,project_vertex:Qp,dithering_fragment:jp,dithering_pars_fragment:tm,roughnessmap_fragment:em,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:sm,shadowmap_vertex:rm,shadowmask_pars_fragment:om,skinbase_vertex:am,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:ym,uv_vertex:vm,worldpos_vertex:_m,background_vert:Mm,background_frag:bm,backgroundCube_vert:Sm,backgroundCube_frag:wm,cube_vert:Em,cube_frag:Tm,depth_vert:Am,depth_frag:Rm,distanceRGBA_vert:Cm,distanceRGBA_frag:Pm,equirect_vert:Im,equirect_frag:Lm,linedashed_vert:Dm,linedashed_frag:Um,meshbasic_vert:Nm,meshbasic_frag:Fm,meshlambert_vert:zm,meshlambert_frag:Bm,meshmatcap_vert:Om,meshmatcap_frag:km,meshnormal_vert:Hm,meshnormal_frag:Vm,meshphong_vert:Gm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:Ym,meshtoon_vert:qm,meshtoon_frag:Zm,points_vert:$m,points_frag:Jm,shadow_vert:Km,shadow_frag:Qm,sprite_vert:jm,sprite_frag:t0},vt={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Yn={basic:{uniforms:nn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:nn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:nn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:nn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:nn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ut(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:nn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:nn([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:nn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:nn([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:nn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:nn([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:nn([vt.common,vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:nn([vt.lights,vt.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Yn.physical={uniforms:nn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var $r={r:0,b:0,g:0},Fi=new Ce,e0=new Xt;function n0(s,t,e,n,i,r,o){let a=new ut(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1,v=g(y);v===null?m(a,l):v&&v.isColor&&(m(v,1),M=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===zo)?(h===void 0&&(h=new mt(new Pe(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:Ps(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fi.copy(M.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(e0.makeRotationFromEuler(Fi)),h.material.toneMapped=se.getTransfer(v.colorSpace)!==he,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new mt(new Qe(2,2),new _e({name:"BackgroundMaterial",uniforms:Ps(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=se.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB($r,Nu(s)),n.buffers.color.setClear($r.r,$r.g,$r.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:x,addToRenderList:p}}function i0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(b,L,N,F,V){let J=!1,G=u(F,N,L);r!==G&&(r=G,c(r.object)),J=d(b,F,N,V),J&&g(b,F,N,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(b,L,N,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,N){let F=N.wireframe===!0,V=n[b.id];V===void 0&&(V={},n[b.id]=V);let J=V[L.id];J===void 0&&(J={},V[L.id]=J);let G=J[F];return G===void 0&&(G=f(l()),J[F]=G),G}function f(b){let L=[],N=[],F=[];for(let V=0;V<e;V++)L[V]=0,N[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:F,object:b,attributes:{},index:null}}function d(b,L,N,F){let V=r.attributes,J=L.attributes,G=0,et=N.getAttributes();for(let z in et)if(et[z].location>=0){let ht=V[z],gt=J[z];if(gt===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor)),ht===void 0||ht.attribute!==gt||gt&&ht.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(b,L,N,F){let V={},J=L.attributes,G=0,et=N.getAttributes();for(let z in et)if(et[z].location>=0){let ht=J[z];ht===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));let gt={};gt.attribute=ht,ht&&ht.data&&(gt.data=ht.data),V[z]=gt,G++}r.attributes=V,r.attributesNum=G,r.index=F}function x(){let b=r.newAttributes;for(let L=0,N=b.length;L<N;L++)b[L]=0}function p(b){m(b,0)}function m(b,L){let N=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;N[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),V[b]!==L&&(s.vertexAttribDivisor(b,L),V[b]=L)}function y(){let b=r.newAttributes,L=r.enabledAttributes;for(let N=0,F=L.length;N<F;N++)L[N]!==b[N]&&(s.disableVertexAttribArray(N),L[N]=0)}function M(b,L,N,F,V,J,G){G===!0?s.vertexAttribIPointer(b,L,N,V,J):s.vertexAttribPointer(b,L,N,F,V,J)}function v(b,L,N,F){x();let V=F.attributes,J=N.getAttributes(),G=L.defaultAttributeValues;for(let et in J){let z=J[et];if(z.location>=0){let lt=V[et];if(lt===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),lt!==void 0){let ht=lt.normalized,gt=lt.itemSize,Et=t.get(lt);if(Et===void 0)continue;let _t=Et.buffer,j=Et.type,dt=Et.bytesPerElement,Rt=j===s.INT||j===s.UNSIGNED_INT||lt.gpuType===Dc;if(lt.isInterleavedBufferAttribute){let ft=lt.data,Tt=ft.stride,kt=lt.offset;if(ft.isInstancedInterleavedBuffer){for(let Gt=0;Gt<z.locationSize;Gt++)m(z.location+Gt,ft.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Gt=0;Gt<z.locationSize;Gt++)p(z.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Gt=0;Gt<z.locationSize;Gt++)M(z.location+Gt,gt/z.locationSize,j,ht,Tt*dt,(kt+gt/z.locationSize*Gt)*dt,Rt)}else{if(lt.isInstancedBufferAttribute){for(let ft=0;ft<z.locationSize;ft++)m(z.location+ft,lt.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ft=0;ft<z.locationSize;ft++)p(z.location+ft);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let ft=0;ft<z.locationSize;ft++)M(z.location+ft,gt/z.locationSize,j,ht,gt*dt,gt/z.locationSize*ft*dt,Rt)}}else if(G!==void 0){let ht=G[et];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(z.location,ht);break;case 3:s.vertexAttrib3fv(z.location,ht);break;case 4:s.vertexAttrib4fv(z.location,ht);break;default:s.vertexAttrib1fv(z.location,ht)}}}}y()}function P(){R();for(let b in n){let L=n[b];for(let N in L){let F=L[N];for(let V in F)h(F[V].object),delete F[V];delete L[N]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let N in L){let F=L[N];for(let V in F)h(F[V].object),delete F[V];delete L[N]}delete n[b.id]}function T(b){for(let L in n){let N=n[L];if(N[b.id]===void 0)continue;let F=N[b.id];for(let V in F)h(F[V].object),delete F[V];delete N[b.id]}}function R(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function s0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function r0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==zn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==On&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==qn&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:P,maxSamples:E}}function o0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ri,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,M=y*4,v=m.clippingState||null;l.value=v,v=h(g,f,M,d);for(let P=0;P!==M;++P)v[P]=e[P];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function a0(s){let t=new WeakMap;function e(o,a){return a===dl?o.mapping=Ts:a===fl&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dl||a===fl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ql(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Is=class extends vo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ms=4,Bh=[.125,.215,.35,.446,.526,.582],Hi=20,Xa=new Is,Oh=new ut,Ya=null,qa=0,Za=0,$a=!1,Bi=(1+Math.sqrt(5))/2,vs=1/Bi,kh=[new I(-Bi,vs,0),new I(Bi,vs,0),new I(-vs,0,Bi),new I(vs,0,Bi),new I(0,Bi,-vs),new I(0,Bi,vs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ls=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,qa,Za),this._renderer.xr.enabled=$a,t.scissorTest=!1,Jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:yn,format:zn,colorSpace:Os,depthBuffer:!1},i=Hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(r)),this._blurMaterial=c0(r,t,e)}return i}_compileMaterial(t){let e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,i){let a=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Oh),h.toneMapping=Si,h.autoClear=!1;let d=new Qt({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new mt(new Pe,d),x=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(Oh),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let M=this._cubeSize;Jr(i,y*M,m>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ts||t.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kh[(i-r-1)%kh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Hi;p>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);let m=[],y=0;for(let T=0;T<Hi;++T){let R=T/x,S=Math.exp(-R*R/2);m.push(S),T===0?y+=S:T<p&&(y+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let v=this._sizeLods[i],P=3*v*(i>M-Ms?i-M+Ms:0),E=4*(this._cubeSize-v);Jr(e,P,E,3*v,2*v),l.setRenderTarget(e),l.render(u,Xa)}};function l0(s){let t=[],e=[],n=[],i=s,r=s-Ms+1+Bh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ms?l=Bh[o-s+Ms-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*d),M=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,R=E>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(S,x*g*E),M.set(f,p*g*E);let b=[E,E,E,E,E,E];v.set(b,m*g*E)}let P=new Vt;P.setAttribute("position",new ve(y,x)),P.setAttribute("uv",new ve(M,p)),P.setAttribute("faceIndex",new ve(v,m)),t.push(P),i>Ms&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Hh(s,t,e){let n=new Xe(s,t,e);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function c0(s,t,e){let n=new Float32Array(Hi),i=new I(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Vh(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Gh(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function h0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===dl||l===fl,h=l===Ts||l===As;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ls(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Ls(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function u0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function d0(s,t,e,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let M=0,v=y.length;M<v;M+=3){let P=y[M+0],E=y[M+1],T=y[M+2];f.push(P,E,E,T,T,P)}}else if(g!==void 0){let y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let P=M+0,E=M+1,T=M+2;f.push(P,E,E,T,T,P)}}else return;let p=new(Du(f)?yo:xo)(f,1);p.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function f0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*x[y];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function p0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function m0(s,t,e){let n=new WeakMap,i=new ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*P*4*u),T=new mo(E,v,P,u);T.type=qn,T.needsUpdate=!0;let R=M*4;for(let b=0;b<u;b++){let L=p[b],N=m[b],F=y[b],V=v*P*4*b;for(let J=0;J<L.count;J++){let G=J*R;d===!0&&(i.fromBufferAttribute(L,J),E[V+G+0]=i.x,E[V+G+1]=i.y,E[V+G+2]=i.z,E[V+G+3]=0),g===!0&&(i.fromBufferAttribute(N,J),E[V+G+4]=i.x,E[V+G+5]=i.y,E[V+G+6]=i.z,E[V+G+7]=0),x===!0&&(i.fromBufferAttribute(F,J),E[V+G+8]=i.x,E[V+G+9]=i.y,E[V+G+10]=i.z,E[V+G+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new yt(v,P)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function g0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Mo=class extends dn{constructor(t,e,n,i,r,o,a,l,c,h=bs){if(h!==bs&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bs&&(n=Gi),n===void 0&&h===Cs&&(n=Rs),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zu=new dn,Wh=new Mo(1,1),Bu=new mo,Ou=new Xl,ku=new _o,Xh=[],Yh=[],qh=new Float32Array(16),Zh=new Float32Array(9),$h=new Float32Array(4);function ks(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Xh[i];if(r===void 0&&(r=new Float32Array(i),Xh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ko(s,t){let e=Yh[t];e===void 0&&(e=new Int32Array(t),Yh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function x0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function v0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function _0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function M0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,n))return;$h.set(n),s.uniformMatrix2fv(this.addr,!1,$h),ke(e,n)}}function b0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,n))return;Zh.set(n),s.uniformMatrix3fv(this.addr,!1,Zh),ke(e,n)}}function S0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,n))return;qh.set(n),s.uniformMatrix4fv(this.addr,!1,qh),ke(e,n)}}function w0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function E0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function T0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function A0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function R0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function C0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function P0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function I0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function L0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wh.compareFunction=Lu,r=Wh):r=zu,e.setTexture2D(t||r,i)}function D0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ou,i)}function U0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ku,i)}function N0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bu,i)}function F0(s){switch(s){case 5126:return x0;case 35664:return y0;case 35665:return v0;case 35666:return _0;case 35674:return M0;case 35675:return b0;case 35676:return S0;case 5124:case 35670:return w0;case 35667:case 35671:return E0;case 35668:case 35672:return T0;case 35669:case 35673:return A0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}function z0(s,t){s.uniform1fv(this.addr,t)}function B0(s,t){let e=ks(t,this.size,2);s.uniform2fv(this.addr,e)}function O0(s,t){let e=ks(t,this.size,3);s.uniform3fv(this.addr,e)}function k0(s,t){let e=ks(t,this.size,4);s.uniform4fv(this.addr,e)}function H0(s,t){let e=ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function V0(s,t){let e=ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function G0(s,t){let e=ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function W0(s,t){s.uniform1iv(this.addr,t)}function X0(s,t){s.uniform2iv(this.addr,t)}function Y0(s,t){s.uniform3iv(this.addr,t)}function q0(s,t){s.uniform4iv(this.addr,t)}function Z0(s,t){s.uniform1uiv(this.addr,t)}function $0(s,t){s.uniform2uiv(this.addr,t)}function J0(s,t){s.uniform3uiv(this.addr,t)}function K0(s,t){s.uniform4uiv(this.addr,t)}function Q0(s,t,e){let n=this.cache,i=t.length,r=ko(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||zu,r[o])}function j0(s,t,e){let n=this.cache,i=t.length,r=ko(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ou,r[o])}function tg(s,t,e){let n=this.cache,i=t.length,r=ko(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ku,r[o])}function eg(s,t,e){let n=this.cache,i=t.length,r=ko(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Bu,r[o])}function ng(s){switch(s){case 5126:return z0;case 35664:return B0;case 35665:return O0;case 35666:return k0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return Y0;case 35669:case 35673:return q0;case 5125:return Z0;case 36294:return $0;case 36295:return J0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}var Zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=F0(e.type)}},$l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ng(e.type)}},Jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ja=/(\w+)(\])?(\[|\.)?/g;function Jh(s,t){s.seq.push(t),s.map[t.id]=t}function ig(s,t,e){let n=s.name,i=n.length;for(Ja.lastIndex=0;;){let r=Ja.exec(n),o=Ja.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Jh(e,c===void 0?new Zl(a,s,t):new $l(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Jl(a),Jh(e,u)),e=u}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ig(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Kh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var sg=37297,rg=0;function og(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Qh=new Wt;function ag(s){se._getMatrix(Qh,se.workingColorSpace,s);let t=`mat3( ${Qh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case Oo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function jh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+og(s.getShaderSource(t),o)}else return i}function lg(s,t){let e=ag(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cg(s,t){let e;switch(t){case Rc:e="Linear";break;case Cc:e="Reinhard";break;case Pc:e="Cineon";break;case vr:e="ACESFilmic";break;case Ic:e="AgX";break;case Lc:e="Neutral";break;case kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Kr=new I;function hg(){se.getLuminanceCoefficients(Kr);let s=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ug(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function dg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function or(s){return s!==""}function tu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(s){return s.replace(pg,gg)}var mg=new Map;function gg(s,t){let e=Zt[t];if(e===void 0){let n=mg.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}var xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(s){return s.replace(xg,yg)}function yg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function iu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function _g(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case As:t="ENVMAP_TYPE_CUBE";break;case zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===As&&(t="ENVMAP_MODE_REFRACTION"),t}function bg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fo:t="ENVMAP_BLENDING_MULTIPLY";break;case Bd:t="ENVMAP_BLENDING_MIX";break;case Od:t="ENVMAP_BLENDING_ADD";break}return t}function Sg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=vg(e),c=_g(e),h=Mg(e),u=bg(e),f=Sg(e),d=ug(e),g=dg(r),x=i.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`)):(p=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),m=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Si?cg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,lg("linearToOutputTexel",e.outputColorSpace),hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=Kl(o),o=tu(o,e),o=eu(o,e),a=Kl(a),a=tu(a,e),a=eu(a,e),o=nu(o),a=nu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+p+o,v=y+m+a,P=Kh(i,i.VERTEX_SHADER,M),E=Kh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,P),i.attachShader(x,E),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(L){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(P).trim(),V=i.getShaderInfoLog(E).trim(),J=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,E);else{let et=jh(i,P,"vertex"),z=jh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+et+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||V==="")&&(G=!1);G&&(L.diagnostics={runnable:J,programLog:N,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(P),i.deleteShader(E),R=new ws(i,x),S=fg(i,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,sg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}var Eg=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jl(t),e.set(t,n)),n}},jl=class{constructor(t){this.id=Eg++,this.code=t,this.usedTimes=0}};function Tg(s,t,e,n,i,r,o){let a=new go,l=new Ql,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,L,N,F){let V=N.fog,J=F.geometry,G=S.isMeshStandardMaterial?N.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),z=et&&et.mapping===zo?et.image.height:null,lt=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,gt=ht!==void 0?ht.length:0,Et=0;J.morphAttributes.position!==void 0&&(Et=1),J.morphAttributes.normal!==void 0&&(Et=2),J.morphAttributes.color!==void 0&&(Et=3);let _t,j,dt,Rt;if(lt){let fe=Yn[lt];_t=fe.vertexShader,j=fe.fragmentShader}else _t=S.vertexShader,j=S.fragmentShader,l.update(S),dt=l.getVertexShaderID(S),Rt=l.getFragmentShaderID(S);let ft=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),kt=F.isInstancedMesh===!0,Gt=F.isBatchedMesh===!0,ae=!!S.map,ie=!!S.matcap,Me=!!et,k=!!S.aoMap,cn=!!S.lightMap,Jt=!!S.bumpMap,Kt=!!S.normalMap,Bt=!!S.displacementMap,me=!!S.emissiveMap,C=!!S.metalnessMap,w=!!S.roughnessMap,_=S.anisotropy>0,D=S.clearcoat>0,W=S.dispersion>0,Y=S.iridescence>0,X=S.sheen>0,at=S.transmission>0,K=_&&!!S.anisotropyMap,rt=D&&!!S.clearcoatMap,St=D&&!!S.clearcoatNormalMap,nt=D&&!!S.clearcoatRoughnessMap,ot=Y&&!!S.iridescenceMap,ct=Y&&!!S.iridescenceThicknessMap,st=X&&!!S.sheenColorMap,tt=X&&!!S.sheenRoughnessMap,It=!!S.specularMap,Pt=!!S.specularColorMap,$=!!S.specularIntensityMap,U=at&&!!S.transmissionMap,it=at&&!!S.thicknessMap,H=!!S.gradientMap,Q=!!S.alphaMap,xt=S.alphaTest>0,Mt=!!S.alphaHash,Yt=!!S.extensions,Re=Si;S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Re=s.toneMapping);let Ze={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:j,defines:S.defines,customVertexShaderID:dt,customFragmentShaderID:Rt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Gt,batchingColor:Gt&&F._colorsTexture!==null,instancing:kt,instancingColor:kt&&F.instanceColor!==null,instancingMorph:kt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Os,alphaToCoverage:!!S.alphaToCoverage,map:ae,matcap:ie,envMap:Me,envMapMode:Me&&et.mapping,envMapCubeUVHeight:z,aoMap:k,lightMap:cn,bumpMap:Jt,normalMap:Kt,displacementMap:f&&Bt,emissiveMap:me,normalMapObjectSpace:Kt&&S.normalMapType===Wd,normalMapTangentSpace:Kt&&S.normalMapType===Bo,metalnessMap:C,roughnessMap:w,anisotropy:_,anisotropyMap:K,clearcoat:D,clearcoatMap:rt,clearcoatNormalMap:St,clearcoatRoughnessMap:nt,dispersion:W,iridescence:Y,iridescenceMap:ot,iridescenceThicknessMap:ct,sheen:X,sheenColorMap:st,sheenRoughnessMap:tt,specularMap:It,specularColorMap:Pt,specularIntensityMap:$,transmission:at,transmissionMap:U,thicknessMap:it,gradientMap:H,opaque:S.transparent===!1&&S.blending===bi&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:Mt,combine:S.combine,mapUv:ae&&x(S.map.channel),aoMapUv:k&&x(S.aoMap.channel),lightMapUv:cn&&x(S.lightMap.channel),bumpMapUv:Jt&&x(S.bumpMap.channel),normalMapUv:Kt&&x(S.normalMap.channel),displacementMapUv:Bt&&x(S.displacementMap.channel),emissiveMapUv:me&&x(S.emissiveMap.channel),metalnessMapUv:C&&x(S.metalnessMap.channel),roughnessMapUv:w&&x(S.roughnessMap.channel),anisotropyMapUv:K&&x(S.anisotropyMap.channel),clearcoatMapUv:rt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:St&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:st&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:tt&&x(S.sheenRoughnessMap.channel),specularMapUv:It&&x(S.specularMap.channel),specularColorMapUv:Pt&&x(S.specularColorMap.channel),specularIntensityMapUv:$&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:it&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Kt||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(ae||Q),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&se.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ue,flipSided:S.side===ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(b,S),M(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let b=g[S.type],L;if(b){let N=Yn[b];L=Ri.clone(N.uniforms)}else L=S.uniforms;return L}function P(S,b){let L;for(let N=0,F=h.length;N<F;N++){let V=h[N];if(V.cacheKey===b){L=V,++L.usedTimes;break}}return L===void 0&&(L=new wg(s,b,S,r),h.push(L)),L}function E(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:P,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function Ag(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Rg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function su(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ru(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||Rg),n.length>1&&n.sort(f||su),i.length>1&&i.sort(f||su)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Cg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ru,s.set(n,[o])):i>=r.length?(o=new ru,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Pg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ut};break;case"SpotLight":e={position:new I,direction:new I,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Ig(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Lg=0;function Dg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ug(s){let t=new Pg,e=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Xt,o=new Xt;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,y=0,M=0,v=0,P=0,E=0,T=0;c.sort(Dg);for(let S=0,b=c.length;S<b;S++){let L=c[S],N=L.color,F=L.intensity,V=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*F,u+=N.g*F,f+=N.b*F;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],F);T++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,z=e.get(L);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=J,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=G,d++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(N).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;let et=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,et.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[x]=et.matrix,L.castShadow){let z=e.get(L);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=J,v++}x++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(N).multiplyScalar(F),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=G,p++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let et=L.shadow,z=e.get(L);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,z.shadowCameraNear=et.camera.near,z.shadowCameraFar=et.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=G,g++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(F),G.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[m]=G,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==P||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=P,R.numLightProbes=T,n.version=Lg++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let M=c[m];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),u++}else if(M.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function ou(s){let t=new Ug(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ng(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new ou(s),t.set(i,[a])):r>=o.length?(a=new ou(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var tc=class extends kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ec=class extends kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bg(s,t,e){let n=new dr,i=new yt,r=new yt,o=new ge,a=new tc({depthPacking:Gd}),l=new ec,c={},h=e.maxTextureSize,u={[wi]:ze,[ze]:wi,[Ue]:Ue},f=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Fg,fragmentShader:zg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Vt;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let m=this.type;this.render=function(E,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Zn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=m!==si&&this.type===si,V=m===si&&this.type!==si;for(let J=0,G=E.length;J<G;J++){let et=E[J],z=et.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let lt=z.getFrameExtents();if(i.multiply(lt),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/lt.x),i.x=r.x*lt.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/lt.y),i.y=r.y*lt.y,z.mapSize.y=r.y)),z.map===null||F===!0||V===!0){let gt=this.type!==si?{minFilter:gn,magFilter:gn}:{};z.map!==null&&z.map.dispose(),z.map=new Xe(i.x,i.y,gt),z.map.texture.name=et.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let ht=z.getViewportCount();for(let gt=0;gt<ht;gt++){let Et=z.getViewport(gt);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),N.viewport(o),z.updateMatrices(et,gt),n=z.getFrustum(),v(T,R,z.camera,et,this.type)}z.isPointLightShadow!==!0&&this.type===si&&y(z,R),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(S,b,L)};function y(E,T){let R=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xe(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,R,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,R,d,x,null)}function M(E,T,R,S){let b=null,L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=b.uuid,F=T.uuid,V=c[N];V===void 0&&(V={},c[N]=V);let J=V[F];J===void 0&&(J=b.clone(),V[F]=J,T.addEventListener("dispose",P)),b=J}if(b.visible=T.visible,b.wireframe=T.wireframe,S===si?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=s.properties.get(b);N.light=R}return b}function v(E,T,R,S,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=t.update(E),V=E.material;if(Array.isArray(V)){let J=F.groups;for(let G=0,et=J.length;G<et;G++){let z=J[G],lt=V[z.materialIndex];if(lt&&lt.visible){let ht=M(E,lt,S,b);E.onBeforeShadow(s,E,T,R,F,ht,z),s.renderBufferDirect(R,null,F,ht,E,z),E.onAfterShadow(s,E,T,R,F,ht,z)}}}else if(V.visible){let J=M(E,V,S,b);E.onBeforeShadow(s,E,T,R,F,J,null),s.renderBufferDirect(R,null,F,J,E,null),E.onAfterShadow(s,E,T,R,F,J,null)}}let N=E.children;for(let F=0,V=N.length;F<V;F++)v(N[F],T,R,S,b)}function P(E){E.target.removeEventListener("dispose",P);for(let R in c){let S=c[R],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var Og={[rl]:ol,[al]:hl,[ll]:ul,[Es]:cl,[ol]:rl,[hl]:al,[ul]:ll,[cl]:Es};function kg(s,t){function e(){let U=!1,it=new ge,H=null,Q=new ge(0,0,0,0);return{setMask:function(xt){H!==xt&&!U&&(s.colorMask(xt,xt,xt,xt),H=xt)},setLocked:function(xt){U=xt},setClear:function(xt,Mt,Yt,Re,Ze){Ze===!0&&(xt*=Re,Mt*=Re,Yt*=Re),it.set(xt,Mt,Yt,Re),Q.equals(it)===!1&&(s.clearColor(xt,Mt,Yt,Re),Q.copy(it))},reset:function(){U=!1,H=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,it=!1,H=null,Q=null,xt=null;return{setReversed:function(Mt){if(it!==Mt){let Yt=t.get("EXT_clip_control");it?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let Re=xt;xt=null,this.setClear(Re)}it=Mt},getReversed:function(){return it},setTest:function(Mt){Mt?ft(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(Mt){H!==Mt&&!U&&(s.depthMask(Mt),H=Mt)},setFunc:function(Mt){if(it&&(Mt=Og[Mt]),Q!==Mt){switch(Mt){case rl:s.depthFunc(s.NEVER);break;case ol:s.depthFunc(s.ALWAYS);break;case al:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case ll:s.depthFunc(s.EQUAL);break;case cl:s.depthFunc(s.GEQUAL);break;case hl:s.depthFunc(s.GREATER);break;case ul:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=Mt}},setLocked:function(Mt){U=Mt},setClear:function(Mt){xt!==Mt&&(it&&(Mt=1-Mt),s.clearDepth(Mt),xt=Mt)},reset:function(){U=!1,H=null,Q=null,xt=null,it=!1}}}function i(){let U=!1,it=null,H=null,Q=null,xt=null,Mt=null,Yt=null,Re=null,Ze=null;return{setTest:function(fe){U||(fe?ft(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(fe){it!==fe&&!U&&(s.stencilMask(fe),it=fe)},setFunc:function(fe,Ln,Kn){(H!==fe||Q!==Ln||xt!==Kn)&&(s.stencilFunc(fe,Ln,Kn),H=fe,Q=Ln,xt=Kn)},setOp:function(fe,Ln,Kn){(Mt!==fe||Yt!==Ln||Re!==Kn)&&(s.stencilOp(fe,Ln,Kn),Mt=fe,Yt=Ln,Re=Kn)},setLocked:function(fe){U=fe},setClear:function(fe){Ze!==fe&&(s.clearStencil(fe),Ze=fe)},reset:function(){U=!1,it=null,H=null,Q=null,xt=null,Mt=null,Yt=null,Re=null,Ze=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,y=null,M=null,v=null,P=null,E=null,T=new ut(0,0,0),R=0,S=!1,b=null,L=null,N=null,F=null,V=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,et=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=et>=1):z.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=et>=2);let lt=null,ht={},gt=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),_t=new ge().fromArray(gt),j=new ge().fromArray(Et);function dt(U,it,H,Q){let xt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(U,Mt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<H;Yt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(it+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return Mt}let Rt={};Rt[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(s.DEPTH_TEST),o.setFunc(Es),Jt(!1),Kt(ch),ft(s.CULL_FACE),k(Zn);function ft(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Tt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function kt(U,it){return u[U]!==it?(s.bindFramebuffer(U,it),u[U]=it,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=it),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Gt(U,it){let H=d,Q=!1;if(U){H=f.get(it),H===void 0&&(H=[],f.set(it,H));let xt=U.textures;if(H.length!==xt.length||H[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Yt=xt.length;Mt<Yt;Mt++)H[Mt]=s.COLOR_ATTACHMENT0+Mt;H.length=xt.length,Q=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,Q=!0);Q&&s.drawBuffers(H)}function ae(U){return g!==U?(s.useProgram(U),g=U,!0):!1}let ie={[Oi]:s.FUNC_ADD,[Md]:s.FUNC_SUBTRACT,[bd]:s.FUNC_REVERSE_SUBTRACT};ie[Sd]=s.MIN,ie[wd]=s.MAX;let Me={[Ed]:s.ZERO,[Td]:s.ONE,[Ad]:s.SRC_COLOR,[il]:s.SRC_ALPHA,[Dd]:s.SRC_ALPHA_SATURATE,[Id]:s.DST_COLOR,[Cd]:s.DST_ALPHA,[Rd]:s.ONE_MINUS_SRC_COLOR,[sl]:s.ONE_MINUS_SRC_ALPHA,[Ld]:s.ONE_MINUS_DST_COLOR,[Pd]:s.ONE_MINUS_DST_ALPHA,[Ud]:s.CONSTANT_COLOR,[Nd]:s.ONE_MINUS_CONSTANT_COLOR,[Fd]:s.CONSTANT_ALPHA,[zd]:s.ONE_MINUS_CONSTANT_ALPHA};function k(U,it,H,Q,xt,Mt,Yt,Re,Ze,fe){if(U===Zn){x===!0&&(Tt(s.BLEND),x=!1);return}if(x===!1&&(ft(s.BLEND),x=!0),U!==_d){if(U!==p||fe!==S){if((m!==Oi||v!==Oi)&&(s.blendEquation(s.FUNC_ADD),m=Oi,v=Oi),fe)switch(U){case bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Be:s.blendFunc(s.ONE,s.ONE);break;case hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Be:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,P=null,E=null,T.set(0,0,0),R=0,p=U,S=fe}return}xt=xt||it,Mt=Mt||H,Yt=Yt||Q,(it!==m||xt!==v)&&(s.blendEquationSeparate(ie[it],ie[xt]),m=it,v=xt),(H!==y||Q!==M||Mt!==P||Yt!==E)&&(s.blendFuncSeparate(Me[H],Me[Q],Me[Mt],Me[Yt]),y=H,M=Q,P=Mt,E=Yt),(Re.equals(T)===!1||Ze!==R)&&(s.blendColor(Re.r,Re.g,Re.b,Ze),T.copy(Re),R=Ze),p=U,S=!1}function cn(U,it){U.side===Ue?Tt(s.CULL_FACE):ft(s.CULL_FACE);let H=U.side===ze;it&&(H=!H),Jt(H),U.blending===bi&&U.transparent===!1?k(Zn):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(U){b!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),b=U)}function Kt(U){U!==yd?(ft(s.CULL_FACE),U!==L&&(U===ch?s.cullFace(s.BACK):U===vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),L=U}function Bt(U){U!==N&&(G&&s.lineWidth(U),N=U)}function me(U,it,H){U?(ft(s.POLYGON_OFFSET_FILL),(F!==it||V!==H)&&(s.polygonOffset(it,H),F=it,V=H)):Tt(s.POLYGON_OFFSET_FILL)}function C(U){U?ft(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function w(U){U===void 0&&(U=s.TEXTURE0+J-1),lt!==U&&(s.activeTexture(U),lt=U)}function _(U,it,H){H===void 0&&(lt===null?H=s.TEXTURE0+J-1:H=lt);let Q=ht[H];Q===void 0&&(Q={type:void 0,texture:void 0},ht[H]=Q),(Q.type!==U||Q.texture!==it)&&(lt!==H&&(s.activeTexture(H),lt=H),s.bindTexture(U,it||Rt[U]),Q.type=U,Q.texture=it)}function D(){let U=ht[lt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function W(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(U){_t.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),_t.copy(U))}function tt(U){j.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function It(U,it){let H=c.get(it);H===void 0&&(H=new WeakMap,c.set(it,H));let Q=H.get(U);Q===void 0&&(Q=s.getUniformBlockIndex(it,U.name),H.set(U,Q))}function Pt(U,it){let Q=c.get(it).get(U);l.get(it)!==Q&&(s.uniformBlockBinding(it,Q,U.__bindingPointIndex),l.set(it,Q))}function $(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},lt=null,ht={},u={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,y=null,M=null,v=null,P=null,E=null,T=new ut(0,0,0),R=0,S=!1,b=null,L=null,N=null,F=null,V=null,_t.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Tt,bindFramebuffer:kt,drawBuffers:Gt,useProgram:ae,setBlending:k,setMaterial:cn,setFlipSided:Jt,setCullFace:Kt,setLineWidth:Bt,setPolygonOffset:me,setScissorTest:C,activeTexture:w,bindTexture:_,unbindTexture:D,compressedTexImage2D:W,compressedTexImage3D:Y,texImage2D:ot,texImage3D:ct,updateUBOMapping:It,uniformBlockBinding:Pt,texStorage2D:St,texStorage3D:nt,texSubImage2D:X,texSubImage3D:at,compressedTexSubImage2D:K,compressedTexSubImage3D:rt,scissor:st,viewport:tt,reset:$}}function au(s,t,e,n){let i=Hg(n);switch(e){case Tu:return s*t;case Ru:return s*t;case Cu:return s*t*2;case _r:return s*t/i.components*i.byteLength;case Fc:return s*t/i.components*i.byteLength;case Pu:return s*t*2/i.components*i.byteLength;case zc:return s*t*2/i.components*i.byteLength;case Au:return s*t*3/i.components*i.byteLength;case zn:return s*t*4/i.components*i.byteLength;case Bc:return s*t*4/i.components*i.byteLength;case ro:case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ao:case lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gl:case yl:return Math.max(s,16)*Math.max(t,8)/4;case ml:case xl:return Math.max(s,8)*Math.max(t,8)/2;case vl:case _l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case co:case Fl:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Iu:case Bl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ol:case kl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Hg(s){switch(s){case On:case Su:return{byteLength:1,components:1};case hr:case wu:case yn:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case Gi:case Dc:case qn:return{byteLength:4,components:1};case Eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Vg(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return d?new OffscreenCanvas(w,_):fo("canvas")}function x(w,_,D){let W=1,Y=C(w);if((Y.width>D||Y.height>D)&&(W=D/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let X=Math.floor(W*Y.width),at=Math.floor(W*Y.height);u===void 0&&(u=g(X,at));let K=_?g(X,at):u;return K.width=X,K.height=at,K.getContext("2d").drawImage(w,0,0,X,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+at+")."),K}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function p(w){return w.generateMipmaps}function m(w){s.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(w,_,D,W,Y=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=_;if(_===s.RED&&(D===s.FLOAT&&(X=s.R32F),D===s.HALF_FLOAT&&(X=s.R16F),D===s.UNSIGNED_BYTE&&(X=s.R8)),_===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(X=s.R8UI),D===s.UNSIGNED_SHORT&&(X=s.R16UI),D===s.UNSIGNED_INT&&(X=s.R32UI),D===s.BYTE&&(X=s.R8I),D===s.SHORT&&(X=s.R16I),D===s.INT&&(X=s.R32I)),_===s.RG&&(D===s.FLOAT&&(X=s.RG32F),D===s.HALF_FLOAT&&(X=s.RG16F),D===s.UNSIGNED_BYTE&&(X=s.RG8)),_===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(X=s.RG8UI),D===s.UNSIGNED_SHORT&&(X=s.RG16UI),D===s.UNSIGNED_INT&&(X=s.RG32UI),D===s.BYTE&&(X=s.RG8I),D===s.SHORT&&(X=s.RG16I),D===s.INT&&(X=s.RG32I)),_===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(X=s.RGB8UI),D===s.UNSIGNED_SHORT&&(X=s.RGB16UI),D===s.UNSIGNED_INT&&(X=s.RGB32UI),D===s.BYTE&&(X=s.RGB8I),D===s.SHORT&&(X=s.RGB16I),D===s.INT&&(X=s.RGB32I)),_===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),D===s.UNSIGNED_INT&&(X=s.RGBA32UI),D===s.BYTE&&(X=s.RGBA8I),D===s.SHORT&&(X=s.RGBA16I),D===s.INT&&(X=s.RGBA32I)),_===s.RGB&&D===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),_===s.RGBA){let at=Y?Oo:se.getTransfer(W);D===s.FLOAT&&(X=s.RGBA32F),D===s.HALF_FLOAT&&(X=s.RGBA16F),D===s.UNSIGNED_BYTE&&(X=at===he?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(w,_){let D;return w?_===null||_===Gi||_===Rs?D=s.DEPTH24_STENCIL8:_===qn?D=s.DEPTH32F_STENCIL8:_===hr&&(D=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Gi||_===Rs?D=s.DEPTH_COMPONENT24:_===qn?D=s.DEPTH_COMPONENT32F:_===hr&&(D=s.DEPTH_COMPONENT16),D}function P(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==gn&&w.minFilter!==wn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function E(w){let _=w.target;_.removeEventListener("dispose",E),R(_),_.isVideoTexture&&h.delete(_)}function T(w){let _=w.target;_.removeEventListener("dispose",T),b(_)}function R(w){let _=n.get(w);if(_.__webglInit===void 0)return;let D=w.source,W=f.get(D);if(W){let Y=W[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(w),Object.keys(W).length===0&&f.delete(D)}n.remove(w)}function S(w){let _=n.get(w);s.deleteTexture(_.__webglTexture);let D=w.source,W=f.get(D);delete W[_.__cacheKey],o.memory.textures--}function b(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Y=0;Y<_.__webglFramebuffer[W].length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[W][Y]);else s.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)s.deleteFramebuffer(_.__webglFramebuffer[W]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let D=w.textures;for(let W=0,Y=D.length;W<Y;W++){let X=n.get(D[W]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(D[W])}n.remove(w)}let L=0;function N(){L=0}function F(){let w=L;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),L+=1,w}function V(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function J(w,_){let D=n.get(w);if(w.isVideoTexture&&Bt(w),w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){let W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(D,w,_);return}}e.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+_)}function G(w,_){let D=n.get(w);if(w.version>0&&D.__version!==w.version){j(D,w,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+_)}function et(w,_){let D=n.get(w);if(w.version>0&&D.__version!==w.version){j(D,w,_);return}e.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+_)}function z(w,_){let D=n.get(w);if(w.version>0&&D.__version!==w.version){dt(D,w,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+_)}let lt={[Bn]:s.REPEAT,[oi]:s.CLAMP_TO_EDGE,[pl]:s.MIRRORED_REPEAT},ht={[gn]:s.NEAREST,[Hd]:s.NEAREST_MIPMAP_NEAREST,[Ir]:s.NEAREST_MIPMAP_LINEAR,[wn]:s.LINEAR,[Ma]:s.LINEAR_MIPMAP_NEAREST,[Vi]:s.LINEAR_MIPMAP_LINEAR},gt={[Xd]:s.NEVER,[Kd]:s.ALWAYS,[Yd]:s.LESS,[Lu]:s.LEQUAL,[qd]:s.EQUAL,[Jd]:s.GEQUAL,[Zd]:s.GREATER,[$d]:s.NOTEQUAL};function Et(w,_){if(_.type===qn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===wn||_.magFilter===Ma||_.magFilter===Ir||_.magFilter===Vi||_.minFilter===wn||_.minFilter===Ma||_.minFilter===Ir||_.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,lt[_.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,lt[_.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,lt[_.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ht[_.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,gt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==Ir&&_.minFilter!==Vi||_.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function _t(w,_){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",E));let W=_.source,Y=f.get(W);Y===void 0&&(Y={},f.set(W,Y));let X=V(_);if(X!==w.__cacheKey){Y[X]===void 0&&(Y[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Y[X].usedTimes++;let at=Y[w.__cacheKey];at!==void 0&&(Y[w.__cacheKey].usedTimes--,at.usedTimes===0&&S(_)),w.__cacheKey=X,w.__webglTexture=Y[X].texture}return D}function j(w,_,D){let W=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=s.TEXTURE_3D);let Y=_t(w,_),X=_.source;e.bindTexture(W,w.__webglTexture,s.TEXTURE0+D);let at=n.get(X);if(X.version!==at.__version||Y===!0){e.activeTexture(s.TEXTURE0+D);let K=se.getPrimaries(se.workingColorSpace),rt=_.colorSpace===Mi?null:se.getPrimaries(_.colorSpace),St=_.colorSpace===Mi||K===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let nt=x(_.image,!1,i.maxTextureSize);nt=me(_,nt);let ot=r.convert(_.format,_.colorSpace),ct=r.convert(_.type),st=M(_.internalFormat,ot,ct,_.colorSpace,_.isVideoTexture);Et(W,_);let tt,It=_.mipmaps,Pt=_.isVideoTexture!==!0,$=at.__version===void 0||Y===!0,U=X.dataReady,it=P(_,nt);if(_.isDepthTexture)st=v(_.format===Cs,_.type),$&&(Pt?e.texStorage2D(s.TEXTURE_2D,1,st,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,st,nt.width,nt.height,0,ot,ct,null));else if(_.isDataTexture)if(It.length>0){Pt&&$&&e.texStorage2D(s.TEXTURE_2D,it,st,It[0].width,It[0].height);for(let H=0,Q=It.length;H<Q;H++)tt=It[H],Pt?U&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,tt.width,tt.height,ot,ct,tt.data):e.texImage2D(s.TEXTURE_2D,H,st,tt.width,tt.height,0,ot,ct,tt.data);_.generateMipmaps=!1}else Pt?($&&e.texStorage2D(s.TEXTURE_2D,it,st,nt.width,nt.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,ot,ct,nt.data)):e.texImage2D(s.TEXTURE_2D,0,st,nt.width,nt.height,0,ot,ct,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pt&&$&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,st,It[0].width,It[0].height,nt.depth);for(let H=0,Q=It.length;H<Q;H++)if(tt=It[H],_.format!==zn)if(ot!==null)if(Pt){if(U)if(_.layerUpdates.size>0){let xt=au(tt.width,tt.height,_.format,_.type);for(let Mt of _.layerUpdates){let Yt=tt.data.subarray(Mt*xt/tt.data.BYTES_PER_ELEMENT,(Mt+1)*xt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,Mt,tt.width,tt.height,1,ot,Yt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,tt.width,tt.height,nt.depth,ot,tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,st,tt.width,tt.height,nt.depth,0,tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,tt.width,tt.height,nt.depth,ot,ct,tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,st,tt.width,tt.height,nt.depth,0,ot,ct,tt.data)}else{Pt&&$&&e.texStorage2D(s.TEXTURE_2D,it,st,It[0].width,It[0].height);for(let H=0,Q=It.length;H<Q;H++)tt=It[H],_.format!==zn?ot!==null?Pt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,tt.width,tt.height,ot,tt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,st,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?U&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,tt.width,tt.height,ot,ct,tt.data):e.texImage2D(s.TEXTURE_2D,H,st,tt.width,tt.height,0,ot,ct,tt.data)}else if(_.isDataArrayTexture)if(Pt){if($&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,st,nt.width,nt.height,nt.depth),U)if(_.layerUpdates.size>0){let H=au(nt.width,nt.height,_.format,_.type);for(let Q of _.layerUpdates){let xt=nt.data.subarray(Q*H/nt.data.BYTES_PER_ELEMENT,(Q+1)*H/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,ot,ct,xt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ot,ct,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,st,nt.width,nt.height,nt.depth,0,ot,ct,nt.data);else if(_.isData3DTexture)Pt?($&&e.texStorage3D(s.TEXTURE_3D,it,st,nt.width,nt.height,nt.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ot,ct,nt.data)):e.texImage3D(s.TEXTURE_3D,0,st,nt.width,nt.height,nt.depth,0,ot,ct,nt.data);else if(_.isFramebufferTexture){if($)if(Pt)e.texStorage2D(s.TEXTURE_2D,it,st,nt.width,nt.height);else{let H=nt.width,Q=nt.height;for(let xt=0;xt<it;xt++)e.texImage2D(s.TEXTURE_2D,xt,st,H,Q,0,ot,ct,null),H>>=1,Q>>=1}}else if(It.length>0){if(Pt&&$){let H=C(It[0]);e.texStorage2D(s.TEXTURE_2D,it,st,H.width,H.height)}for(let H=0,Q=It.length;H<Q;H++)tt=It[H],Pt?U&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,ot,ct,tt):e.texImage2D(s.TEXTURE_2D,H,st,ot,ct,tt);_.generateMipmaps=!1}else if(Pt){if($){let H=C(nt);e.texStorage2D(s.TEXTURE_2D,it,st,H.width,H.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,ct,nt)}else e.texImage2D(s.TEXTURE_2D,0,st,ot,ct,nt);p(_)&&m(W),at.__version=X.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function dt(w,_,D){if(_.image.length!==6)return;let W=_t(w,_),Y=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+D);let X=n.get(Y);if(Y.version!==X.__version||W===!0){e.activeTexture(s.TEXTURE0+D);let at=se.getPrimaries(se.workingColorSpace),K=_.colorSpace===Mi?null:se.getPrimaries(_.colorSpace),rt=_.colorSpace===Mi||at===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let St=_.isCompressedTexture||_.image[0].isCompressedTexture,nt=_.image[0]&&_.image[0].isDataTexture,ot=[];for(let Q=0;Q<6;Q++)!St&&!nt?ot[Q]=x(_.image[Q],!0,i.maxCubemapSize):ot[Q]=nt?_.image[Q].image:_.image[Q],ot[Q]=me(_,ot[Q]);let ct=ot[0],st=r.convert(_.format,_.colorSpace),tt=r.convert(_.type),It=M(_.internalFormat,st,tt,_.colorSpace),Pt=_.isVideoTexture!==!0,$=X.__version===void 0||W===!0,U=Y.dataReady,it=P(_,ct);Et(s.TEXTURE_CUBE_MAP,_);let H;if(St){Pt&&$&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,It,ct.width,ct.height);for(let Q=0;Q<6;Q++){H=ot[Q].mipmaps;for(let xt=0;xt<H.length;xt++){let Mt=H[xt];_.format!==zn?st!==null?Pt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,Mt.width,Mt.height,st,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,It,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,Mt.width,Mt.height,st,tt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,It,Mt.width,Mt.height,0,st,tt,Mt.data)}}}else{if(H=_.mipmaps,Pt&&$){H.length>0&&it++;let Q=C(ot[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,It,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){Pt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ot[Q].width,ot[Q].height,st,tt,ot[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,ot[Q].width,ot[Q].height,0,st,tt,ot[Q].data);for(let xt=0;xt<H.length;xt++){let Yt=H[xt].image[Q].image;Pt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Yt.width,Yt.height,st,tt,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,It,Yt.width,Yt.height,0,st,tt,Yt.data)}}else{Pt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,st,tt,ot[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,It,st,tt,ot[Q]);for(let xt=0;xt<H.length;xt++){let Mt=H[xt];Pt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,st,tt,Mt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,It,st,tt,Mt.image[Q])}}}p(_)&&m(s.TEXTURE_CUBE_MAP),X.__version=Y.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Rt(w,_,D,W,Y,X){let at=r.convert(D.format,D.colorSpace),K=r.convert(D.type),rt=M(D.internalFormat,at,K,D.colorSpace),St=n.get(_),nt=n.get(D);if(nt.__renderTarget=_,!St.__hasExternalTextures){let ot=Math.max(1,_.width>>X),ct=Math.max(1,_.height>>X);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,X,rt,ot,ct,_.depth,0,at,K,null):e.texImage2D(Y,X,rt,ot,ct,0,at,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Kt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Y,nt.__webglTexture,0,Jt(_)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Y,nt.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(w,_,D){if(s.bindRenderbuffer(s.RENDERBUFFER,w),_.depthBuffer){let W=_.depthTexture,Y=W&&W.isDepthTexture?W.type:null,X=v(_.stencilBuffer,Y),at=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=Jt(_);Kt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,X,_.width,_.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,X,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,X,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,w)}else{let W=_.textures;for(let Y=0;Y<W.length;Y++){let X=W[Y],at=r.convert(X.format,X.colorSpace),K=r.convert(X.type),rt=M(X.internalFormat,at,K,X.colorSpace),St=Jt(_);D&&Kt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,rt,_.width,_.height):Kt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,rt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,rt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let Y=W.__webglTexture,X=Jt(_);if(_.depthTexture.format===bs)Kt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(_.depthTexture.format===Cs)Kt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function kt(w){let _=n.get(w),D=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let W=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=W}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Tt(_.__webglFramebuffer,w)}else if(D){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=s.createRenderbuffer(),ft(_.__webglDepthbuffer[W],w,!1);else{let Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,X)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),ft(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,Y)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(w,_,D){let W=n.get(w);_!==void 0&&Rt(W.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&kt(w)}function ae(w){let _=w.texture,D=n.get(w),W=n.get(_);w.addEventListener("dispose",T);let Y=w.textures,X=w.isWebGLCubeRenderTarget===!0,at=Y.length>1;if(at||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=_.version,o.memory.textures++),X){D.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[K]=[];for(let rt=0;rt<_.mipmaps.length;rt++)D.__webglFramebuffer[K][rt]=s.createFramebuffer()}else D.__webglFramebuffer[K]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)D.__webglFramebuffer[K]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(at)for(let K=0,rt=Y.length;K<rt;K++){let St=n.get(Y[K]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&Kt(w)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let rt=Y[K];D.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[K]);let St=r.convert(rt.format,rt.colorSpace),nt=r.convert(rt.type),ot=M(rt.internalFormat,St,nt,rt.colorSpace,w.isXRRenderTarget===!0),ct=Jt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,ot,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,D.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(D.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Et(s.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)Rt(D.__webglFramebuffer[K][rt],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt);else Rt(D.__webglFramebuffer[K],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,rt=Y.length;K<rt;K++){let St=Y[K],nt=n.get(St);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Et(s.TEXTURE_2D,St),Rt(D.__webglFramebuffer,w,St,s.COLOR_ATTACHMENT0+K,s.TEXTURE_2D,0),p(St)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,W.__webglTexture),Et(K,_),_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)Rt(D.__webglFramebuffer[rt],w,_,s.COLOR_ATTACHMENT0,K,rt);else Rt(D.__webglFramebuffer,w,_,s.COLOR_ATTACHMENT0,K,0);p(_)&&m(K),e.unbindTexture()}w.depthBuffer&&kt(w)}function ie(w){let _=w.textures;for(let D=0,W=_.length;D<W;D++){let Y=_[D];if(p(Y)){let X=y(w),at=n.get(Y).__webglTexture;e.bindTexture(X,at),m(X),e.unbindTexture()}}}let Me=[],k=[];function cn(w){if(w.samples>0){if(Kt(w)===!1){let _=w.textures,D=w.width,W=w.height,Y=s.COLOR_BUFFER_BIT,X=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(w),K=_.length>1;if(K)for(let rt=0;rt<_.length;rt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let rt=0;rt<_.length;rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[rt]);let St=n.get(_[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,St,0)}s.blitFramebuffer(0,0,D,W,0,0,D,W,Y,s.NEAREST),l===!0&&(Me.length=0,k.length=0,Me.push(s.COLOR_ATTACHMENT0+rt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Me.push(X),k.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let rt=0;rt<_.length;rt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,at.__webglColorRenderbuffer[rt]);let St=n.get(_[rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,St,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Jt(w){return Math.min(i.maxSamples,w.samples)}function Kt(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Bt(w){let _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function me(w,_){let D=w.colorSpace,W=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==Os&&D!==Mi&&(se.getTransfer(D)===he?(W!==zn||Y!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function C(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=et,this.setTextureCube=z,this.rebindTextures=Gt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Kt}function Gg(s,t){function e(n,i=Mi){let r,o=se.getTransfer(i);if(n===On)return s.UNSIGNED_BYTE;if(n===Uc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return s.BYTE;if(n===wu)return s.SHORT;if(n===hr)return s.UNSIGNED_SHORT;if(n===Dc)return s.INT;if(n===Gi)return s.UNSIGNED_INT;if(n===qn)return s.FLOAT;if(n===yn)return s.HALF_FLOAT;if(n===Tu)return s.ALPHA;if(n===Au)return s.RGB;if(n===zn)return s.RGBA;if(n===Ru)return s.LUMINANCE;if(n===Cu)return s.LUMINANCE_ALPHA;if(n===bs)return s.DEPTH_COMPONENT;if(n===Cs)return s.DEPTH_STENCIL;if(n===_r)return s.RED;if(n===Fc)return s.RED_INTEGER;if(n===Pu)return s.RG;if(n===zc)return s.RG_INTEGER;if(n===Bc)return s.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===lo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ml||n===gl||n===xl||n===yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===_l||n===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===_l)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===Sl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Al)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===Fl||n===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Iu||n===Bl||n===Ol||n===kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var nc=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wg={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new dn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _e({vertexShader:Xg,fragmentShader:Yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sc=class extends Ei{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new ic,p=e.getContextAttributes(),m=null,y=null,M=[],v=[],P=new yt,E=null,T=new Ke;T.viewport=new ge;let R=new Ke;R.viewport=new ge;let S=[T,R],b=new nc,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let dt=M[j];return dt===void 0&&(dt=new ar,M[j]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(j){let dt=M[j];return dt===void 0&&(dt=new ar,M[j]=dt),dt.getGripSpace()},this.getHand=function(j){let dt=M[j];return dt===void 0&&(dt=new ar,M[j]=dt),dt.getHandSpace()};function F(j){let dt=v.indexOf(j.inputSource);if(dt===-1)return;let Rt=M[dt];Rt!==void 0&&(Rt.update(j.inputSource,j.frame,c||o),Rt.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",J);for(let j=0;j<M.length;j++){let dt=v[j];dt!==null&&(v[j]=null,M[j].disconnect(dt))}L=null,N=null,x.reset(),t.setRenderTarget(m),d=null,f=null,u=null,i=null,y=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){let dt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Xe(d.framebufferWidth,d.framebufferHeight,{format:zn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let dt=null,Rt=null,ft=null;p.depth&&(ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=p.stencil?Cs:bs,Rt=p.stencil?Rs:Gi);let Tt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Tt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Xe(f.textureWidth,f.textureHeight,{format:zn,type:On,depthTexture:new Mo(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),_t.setContext(i),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(j){for(let dt=0;dt<j.removed.length;dt++){let Rt=j.removed[dt],ft=v.indexOf(Rt);ft>=0&&(v[ft]=null,M[ft].disconnect(Rt))}for(let dt=0;dt<j.added.length;dt++){let Rt=j.added[dt],ft=v.indexOf(Rt);if(ft===-1){for(let kt=0;kt<M.length;kt++)if(kt>=v.length){v.push(Rt),ft=kt;break}else if(v[kt]===null){v[kt]=Rt,ft=kt;break}if(ft===-1)break}let Tt=M[ft];Tt&&Tt.connect(Rt)}}let G=new I,et=new I;function z(j,dt,Rt){G.setFromMatrixPosition(dt.matrixWorld),et.setFromMatrixPosition(Rt.matrixWorld);let ft=G.distanceTo(et),Tt=dt.projectionMatrix.elements,kt=Rt.projectionMatrix.elements,Gt=Tt[14]/(Tt[10]-1),ae=Tt[14]/(Tt[10]+1),ie=(Tt[9]+1)/Tt[5],Me=(Tt[9]-1)/Tt[5],k=(Tt[8]-1)/Tt[0],cn=(kt[8]+1)/kt[0],Jt=Gt*k,Kt=Gt*cn,Bt=ft/(-k+cn),me=Bt*-k;if(dt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(me),j.translateZ(Bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Tt[10]===-1)j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{let C=Gt+Bt,w=ae+Bt,_=Jt-me,D=Kt+(ft-me),W=ie*ae/w*C,Y=Me*ae/w*C;j.projectionMatrix.makePerspective(_,D,W,Y,C,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function lt(j,dt){dt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(dt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let dt=j.near,Rt=j.far;x.texture!==null&&(x.depthNear>0&&(dt=x.depthNear),x.depthFar>0&&(Rt=x.depthFar)),b.near=R.near=T.near=dt,b.far=R.far=T.far=Rt,(L!==b.near||N!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,N=b.far),T.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,b.layers.mask=T.layers.mask|R.layers.mask;let ft=j.parent,Tt=b.cameras;lt(b,ft);for(let kt=0;kt<Tt.length;kt++)lt(Tt[kt],ft);Tt.length===2?z(b,T,R):b.projectionMatrix.copy(T.projectionMatrix),ht(j,b,ft)};function ht(j,dt,Rt){Rt===null?j.matrix.copy(dt.matrixWorld):(j.matrix.copy(Rt.matrixWorld),j.matrix.invert(),j.matrix.multiply(dt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Vl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let gt=null;function Et(j,dt){if(h=dt.getViewerPose(c||o),g=dt,h!==null){let Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ft=!1;Rt.length!==b.cameras.length&&(b.cameras.length=0,ft=!0);for(let kt=0;kt<Rt.length;kt++){let Gt=Rt[kt],ae=null;if(d!==null)ae=d.getViewport(Gt);else{let Me=u.getViewSubImage(f,Gt);ae=Me.viewport,kt===0&&(t.setRenderTargetTextures(y,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(y))}let ie=S[kt];ie===void 0&&(ie=new Ke,ie.layers.enable(kt),ie.viewport=new ge,S[kt]=ie),ie.matrix.fromArray(Gt.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Gt.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ae.x,ae.y,ae.width,ae.height),kt===0&&(b.matrix.copy(ie.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ft===!0&&b.cameras.push(ie)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let kt=u.getDepthInformation(Rt[0]);kt&&kt.isValid&&kt.texture&&x.init(t,kt,i.renderState)}}for(let Rt=0;Rt<M.length;Rt++){let ft=v[Rt],Tt=M[Rt];ft!==null&&Tt!==void 0&&Tt.update(ft,dt,c||o)}gt&&gt(j,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),g=null}let _t=new Fu;_t.setAnimationLoop(Et),this.setAnimationLoop=function(j){gt=j},this.dispose=function(){}}},zi=new Ce,qg=new Xt;function Zg(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ze&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ze&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),M=y.envMap,v=y.envMapRotation;M&&(p.envMap.value=M,zi.copy(v),zi.x*=-1,zi.y*=-1,zi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),p.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(zi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $g(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let v=M.program;n.uniformBlockBinding(y,v)}function c(y,M){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",p));let P=M.program;n.updateUBOMapping(y,P);let E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){let M=u();y.__bindingPointIndex=M;let v=s.createBuffer(),P=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=i[y.id],v=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){let R=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,b=R.length;S<b;S++){let L=R[S];if(d(L,E,S,P)===!0){let N=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],V=0;for(let J=0;J<F.length;J++){let G=F[J],et=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,N+V,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,V),V+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,M,v,P){let E=y.value,T=M+"_"+v;if(P[T]===void 0)return typeof E=="number"||typeof E=="boolean"?P[T]=E:P[T]=E.clone(),!0;{let R=P[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return P[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(y){let M=y.uniforms,v=0,P=16;for(let T=0,R=M.length;T<R;T++){let S=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,L=S.length;b<L;b++){let N=S[b],F=Array.isArray(N.value)?N.value:[N.value];for(let V=0,J=F.length;V<J;V++){let G=F[V],et=x(G),z=v%P,lt=z%et.boundary,ht=z+lt;v+=lt,ht!==0&&P-ht<et.storage&&(v+=P-ht),N.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=et.storage}}}let E=v%P;return E>0&&(v+=P-E),y.__size=v,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){let M=y.target;M.removeEventListener("dispose",p);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function m(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var bo=class{constructor(t={}){let{canvas:e=jd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,m=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=Si,this.toneMappingExposure=1;let v=this,P=!1,E=0,T=0,R=null,S=-1,b=null,L=new ge,N=new ge,F=null,V=new ut(0),J=0,G=e.width,et=e.height,z=1,lt=null,ht=null,gt=new ge(0,0,G,et),Et=new ge(0,0,G,et),_t=!1,j=new dr,dt=!1,Rt=!1,ft=new Xt,Tt=new Xt,kt=new I,Gt=new ge,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function Me(){return R===null?z:1}let k=n;function cn(A,B){return e.getContext(A,B)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),k===null){let B="webgl2";if(k=cn(B,A),k===null)throw cn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Jt,Kt,Bt,me,C,w,_,D,W,Y,X,at,K,rt,St,nt,ot,ct,st,tt,It,Pt,$,U;function it(){Jt=new u0(k),Jt.init(),Pt=new Gg(k,Jt),Kt=new r0(k,Jt,t,Pt),Bt=new kg(k,Jt),Kt.reverseDepthBuffer&&f&&Bt.buffers.depth.setReversed(!0),me=new p0(k),C=new Ag,w=new Vg(k,Jt,Bt,C,Kt,Pt,me),_=new a0(v),D=new h0(v),W=new Mf(k),$=new i0(k,W),Y=new d0(k,W,me,$),X=new g0(k,Y,W,me),st=new m0(k,Kt,w),nt=new o0(C),at=new Tg(v,_,D,Jt,Kt,$,nt),K=new Zg(v,C),rt=new Cg,St=new Ng(Jt),ct=new n0(v,_,D,Bt,X,d,l),ot=new Bg(v,X,Kt),U=new $g(k,me,Kt,Bt),tt=new s0(k,Jt,me),It=new f0(k,Jt,me),me.programs=at.programs,v.capabilities=Kt,v.extensions=Jt,v.properties=C,v.renderLists=rt,v.shadowMap=ot,v.state=Bt,v.info=me}it();let H=new sc(v,k);this.xr=H,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(G,et,!1))},this.getSize=function(A){return A.set(G,et)},this.setSize=function(A,B,q=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,et=B,e.width=Math.floor(A*z),e.height=Math.floor(B*z),q===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(G*z,et*z).floor()},this.setDrawingBufferSize=function(A,B,q){G=A,et=B,z=q,e.width=Math.floor(A*q),e.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(gt)},this.setViewport=function(A,B,q,Z){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,B,q,Z),Bt.viewport(L.copy(gt).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,B,q,Z){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,B,q,Z),Bt.scissor(N.copy(Et).multiplyScalar(z).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){Bt.setScissorTest(_t=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){ht=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(A=!0,B=!0,q=!0){let Z=0;if(A){let O=!1;if(R!==null){let pt=R.texture.format;O=pt===Bc||pt===zc||pt===Fc}if(O){let pt=R.texture.type,bt=pt===On||pt===Gi||pt===hr||pt===Rs||pt===Uc||pt===Nc,Dt=ct.getClearColor(),Ut=ct.getClearAlpha(),Ht=Dt.r,qt=Dt.g,Nt=Dt.b;bt?(g[0]=Ht,g[1]=qt,g[2]=Nt,g[3]=Ut,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=Ht,x[1]=qt,x[2]=Nt,x[3]=Ut,k.clearBufferiv(k.COLOR,0,x))}else Z|=k.COLOR_BUFFER_BIT}B&&(Z|=k.DEPTH_BUFFER_BIT),q&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),rt.dispose(),St.dispose(),C.dispose(),_.dispose(),D.dispose(),X.dispose(),$.dispose(),U.dispose(),at.dispose(),H.dispose(),H.removeEventListener("sessionstart",eh),H.removeEventListener("sessionend",nh),Ii.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=me.autoReset,B=ot.enabled,q=ot.autoUpdate,Z=ot.needsUpdate,O=ot.type;it(),me.autoReset=A,ot.enabled=B,ot.autoUpdate=q,ot.needsUpdate=Z,ot.type=O}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){let B=A.target;B.removeEventListener("dispose",Yt),Re(B)}function Re(A){Ze(A),C.remove(A)}function Ze(A){let B=C.get(A).programs;B!==void 0&&(B.forEach(function(q){at.releaseProgram(q)}),A.isShaderMaterial&&at.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,Z,O,pt){B===null&&(B=ae);let bt=O.isMesh&&O.matrixWorld.determinant()<0,Dt=md(A,B,q,Z,O);Bt.setMaterial(Z,bt);let Ut=q.index,Ht=1;if(Z.wireframe===!0){if(Ut=Y.getWireframeAttribute(q),Ut===void 0)return;Ht=2}let qt=q.drawRange,Nt=q.attributes.position,re=qt.start*Ht,ye=(qt.start+qt.count)*Ht;pt!==null&&(re=Math.max(re,pt.start*Ht),ye=Math.min(ye,(pt.start+pt.count)*Ht)),Ut!==null?(re=Math.max(re,0),ye=Math.min(ye,Ut.count)):Nt!=null&&(re=Math.max(re,0),ye=Math.min(ye,Nt.count));let be=ye-re;if(be<0||be===1/0)return;$.setup(O,Z,Dt,q,Ut);let hn,le=tt;if(Ut!==null&&(hn=W.get(Ut),le=It,le.setIndex(hn)),O.isMesh)Z.wireframe===!0?(Bt.setLineWidth(Z.wireframeLinewidth*Me()),le.setMode(k.LINES)):le.setMode(k.TRIANGLES);else if(O.isLine){let zt=Z.linewidth;zt===void 0&&(zt=1),Bt.setLineWidth(zt*Me()),O.isLineSegments?le.setMode(k.LINES):O.isLineLoop?le.setMode(k.LINE_LOOP):le.setMode(k.LINE_STRIP)}else O.isPoints?le.setMode(k.POINTS):O.isSprite&&le.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)le.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))le.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let zt=O._multiDrawStarts,Qn=O._multiDrawCounts,ce=O._multiDrawCount,Dn=Ut?W.get(Ut).bytesPerElement:1,rs=C.get(Z).currentProgram.getUniforms();for(let fn=0;fn<ce;fn++)rs.setValue(k,"_gl_DrawID",fn),le.render(zt[fn]/Dn,Qn[fn])}else if(O.isInstancedMesh)le.renderInstances(re,be,O.count);else if(q.isInstancedBufferGeometry){let zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Qn=Math.min(q.instanceCount,zt);le.renderInstances(re,be,Qn)}else le.render(re,be)};function fe(A,B,q){A.transparent===!0&&A.side===Ue&&A.forceSinglePass===!1?(A.side=ze,A.needsUpdate=!0,Pr(A,B,q),A.side=wi,A.needsUpdate=!0,Pr(A,B,q),A.side=Ue):Pr(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),m=St.get(q),m.init(B),M.push(m),q.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),A!==q&&A.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let Z=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let pt=O.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){let Dt=pt[bt];fe(Dt,q,O),Z.add(Dt)}else fe(pt,q,O),Z.add(pt)}),M.pop(),m=null,Z},this.compileAsync=function(A,B,q=null){let Z=this.compile(A,B,q);return new Promise(O=>{function pt(){if(Z.forEach(function(bt){C.get(bt).currentProgram.isReady()&&Z.delete(bt)}),Z.size===0){O(A);return}setTimeout(pt,10)}Jt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Ln=null;function Kn(A){Ln&&Ln(A)}function eh(){Ii.stop()}function nh(){Ii.start()}let Ii=new Fu;Ii.setAnimationLoop(Kn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(A){Ln=A,H.setAnimationLoop(A),A===null?Ii.stop():Ii.start()},H.addEventListener("sessionstart",eh),H.addEventListener("sessionend",nh),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(B),B=H.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,R),m=St.get(A,M.length),m.init(B),M.push(m),Tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Tt),Rt=this.localClippingEnabled,dt=nt.init(this.clippingPlanes,Rt),p=rt.get(A,y.length),p.init(),y.push(p),H.enabled===!0&&H.isPresenting===!0){let pt=v.xr.getDepthSensingMesh();pt!==null&&_a(pt,B,-1/0,v.sortObjects)}_a(A,B,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(lt,ht),ie=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,ie&&ct.addToRenderList(p,A),this.info.render.frame++,dt===!0&&nt.beginShadows();let q=m.state.shadowsArray;ot.render(q,A,B),dt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=p.opaque,O=p.transmissive;if(m.setupLights(),B.isArrayCamera){let pt=B.cameras;if(O.length>0)for(let bt=0,Dt=pt.length;bt<Dt;bt++){let Ut=pt[bt];sh(Z,O,A,Ut)}ie&&ct.render(A);for(let bt=0,Dt=pt.length;bt<Dt;bt++){let Ut=pt[bt];ih(p,A,Ut,Ut.viewport)}}else O.length>0&&sh(Z,O,A,B),ie&&ct.render(A),ih(p,A,B);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,B),$.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],dt===!0&&nt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function _a(A,B,q,Z){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Z&&Gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Tt);let bt=X.update(A),Dt=A.material;Dt.visible&&p.push(A,bt,Dt,q,Gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){let bt=X.update(A),Dt=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Gt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Gt.copy(bt.boundingSphere.center)),Gt.applyMatrix4(A.matrixWorld).applyMatrix4(Tt)),Array.isArray(Dt)){let Ut=bt.groups;for(let Ht=0,qt=Ut.length;Ht<qt;Ht++){let Nt=Ut[Ht],re=Dt[Nt.materialIndex];re&&re.visible&&p.push(A,bt,re,q,Gt.z,Nt)}}else Dt.visible&&p.push(A,bt,Dt,q,Gt.z,null)}}let pt=A.children;for(let bt=0,Dt=pt.length;bt<Dt;bt++)_a(pt[bt],B,q,Z)}function ih(A,B,q,Z){let O=A.opaque,pt=A.transmissive,bt=A.transparent;m.setupLightsView(q),dt===!0&&nt.setGlobalState(v.clippingPlanes,q),Z&&Bt.viewport(L.copy(Z)),O.length>0&&Cr(O,B,q),pt.length>0&&Cr(pt,B,q),bt.length>0&&Cr(bt,B,q),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function sh(A,B,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Xe(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?yn:On,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let pt=m.state.transmissionRenderTarget[Z.id],bt=Z.viewport||L;pt.setSize(bt.z,bt.w);let Dt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(V),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),ie&&ct.render(q);let Ut=v.toneMapping;v.toneMapping=Si;let Ht=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),dt===!0&&nt.setGlobalState(v.clippingPlanes,Z),Cr(A,q,Z),w.updateMultisampleRenderTarget(pt),w.updateRenderTargetMipmap(pt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Nt=0,re=B.length;Nt<re;Nt++){let ye=B[Nt],be=ye.object,hn=ye.geometry,le=ye.material,zt=ye.group;if(le.side===Ue&&be.layers.test(Z.layers)){let Qn=le.side;le.side=ze,le.needsUpdate=!0,rh(be,q,Z,hn,le,zt),le.side=Qn,le.needsUpdate=!0,qt=!0}}qt===!0&&(w.updateMultisampleRenderTarget(pt),w.updateRenderTargetMipmap(pt))}v.setRenderTarget(Dt),v.setClearColor(V,J),Ht!==void 0&&(Z.viewport=Ht),v.toneMapping=Ut}function Cr(A,B,q){let Z=B.isScene===!0?B.overrideMaterial:null;for(let O=0,pt=A.length;O<pt;O++){let bt=A[O],Dt=bt.object,Ut=bt.geometry,Ht=Z===null?bt.material:Z,qt=bt.group;Dt.layers.test(q.layers)&&rh(Dt,B,q,Ut,Ht,qt)}}function rh(A,B,q,Z,O,pt){A.onBeforeRender(v,B,q,Z,O,pt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(v,B,q,Z,A,pt),O.transparent===!0&&O.side===Ue&&O.forceSinglePass===!1?(O.side=ze,O.needsUpdate=!0,v.renderBufferDirect(q,B,Z,O,A,pt),O.side=wi,O.needsUpdate=!0,v.renderBufferDirect(q,B,Z,O,A,pt),O.side=Ue):v.renderBufferDirect(q,B,Z,O,A,pt),A.onAfterRender(v,B,q,Z,O,pt)}function Pr(A,B,q){B.isScene!==!0&&(B=ae);let Z=C.get(A),O=m.state.lights,pt=m.state.shadowsArray,bt=O.state.version,Dt=at.getParameters(A,O.state,pt,B,q),Ut=at.getProgramCacheKey(Dt),Ht=Z.programs;Z.environment=A.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(A.isMeshStandardMaterial?D:_).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",Yt),Ht=new Map,Z.programs=Ht);let qt=Ht.get(Ut);if(qt!==void 0){if(Z.currentProgram===qt&&Z.lightsStateVersion===bt)return ah(A,Dt),qt}else Dt.uniforms=at.getUniforms(A),A.onBeforeCompile(Dt,v),qt=at.acquireProgram(Dt,Ut),Ht.set(Ut,qt),Z.uniforms=Dt.uniforms;let Nt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=nt.uniform),ah(A,Dt),Z.needsLights=xd(A),Z.lightsStateVersion=bt,Z.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),Z.currentProgram=qt,Z.uniformsList=null,qt}function oh(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=ws.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function ah(A,B){let q=C.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function md(A,B,q,Z,O){B.isScene!==!0&&(B=ae),w.resetTextureUnits();let pt=B.fog,bt=Z.isMeshStandardMaterial?B.environment:null,Dt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Os,Ut=(Z.isMeshStandardMaterial?D:_).get(Z.envMap||bt),Ht=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qt=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Nt=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,ye=!!q.morphAttributes.color,be=Si;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(be=v.toneMapping);let hn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=hn!==void 0?hn.length:0,zt=C.get(Z),Qn=m.state.lights;if(dt===!0&&(Rt===!0||A!==b)){let bn=A===b&&Z.id===S;nt.setState(Z,A,bn)}let ce=!1;Z.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Qn.state.version||zt.outputColorSpace!==Dt||O.isBatchedMesh&&zt.batching===!1||!O.isBatchedMesh&&zt.batching===!0||O.isBatchedMesh&&zt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&zt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&zt.instancing===!1||!O.isInstancedMesh&&zt.instancing===!0||O.isSkinnedMesh&&zt.skinning===!1||!O.isSkinnedMesh&&zt.skinning===!0||O.isInstancedMesh&&zt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&zt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&zt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&zt.instancingMorph===!1&&O.morphTexture!==null||zt.envMap!==Ut||Z.fog===!0&&zt.fog!==pt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==nt.numPlanes||zt.numIntersection!==nt.numIntersection)||zt.vertexAlphas!==Ht||zt.vertexTangents!==qt||zt.morphTargets!==Nt||zt.morphNormals!==re||zt.morphColors!==ye||zt.toneMapping!==be||zt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,zt.__version=Z.version);let Dn=zt.currentProgram;ce===!0&&(Dn=Pr(Z,B,O));let rs=!1,fn=!1,Zs=!1,Se=Dn.getUniforms(),Xn=zt.uniforms;if(Bt.useProgram(Dn.program)&&(rs=!0,fn=!0,Zs=!0),Z.id!==S&&(S=Z.id,fn=!0),rs||b!==A){Bt.buffers.depth.getReversed()?(ft.copy(A.projectionMatrix),ef(ft),nf(ft),Se.setValue(k,"projectionMatrix",ft)):Se.setValue(k,"projectionMatrix",A.projectionMatrix),Se.setValue(k,"viewMatrix",A.matrixWorldInverse);let fi=Se.map.cameraPosition;fi!==void 0&&fi.setValue(k,kt.setFromMatrixPosition(A.matrixWorld)),Kt.logarithmicDepthBuffer&&Se.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Se.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,fn=!0,Zs=!0)}if(O.isSkinnedMesh){Se.setOptional(k,O,"bindMatrix"),Se.setOptional(k,O,"bindMatrixInverse");let bn=O.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Se.setValue(k,"boneTexture",bn.boneTexture,w))}O.isBatchedMesh&&(Se.setOptional(k,O,"batchingTexture"),Se.setValue(k,"batchingTexture",O._matricesTexture,w),Se.setOptional(k,O,"batchingIdTexture"),Se.setValue(k,"batchingIdTexture",O._indirectTexture,w),Se.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&Se.setValue(k,"batchingColorTexture",O._colorsTexture,w));let $s=q.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0)&&st.update(O,q,Dn),(fn||zt.receiveShadow!==O.receiveShadow)&&(zt.receiveShadow=O.receiveShadow,Se.setValue(k,"receiveShadow",O.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Xn.envMap.value=Ut,Xn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Xn.envMapIntensity.value=B.environmentIntensity),fn&&(Se.setValue(k,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&gd(Xn,Zs),pt&&Z.fog===!0&&K.refreshFogUniforms(Xn,pt),K.refreshMaterialUniforms(Xn,Z,z,et,m.state.transmissionRenderTarget[A.id]),ws.upload(k,oh(zt),Xn,w)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ws.upload(k,oh(zt),Xn,w),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Se.setValue(k,"center",O.center),Se.setValue(k,"modelViewMatrix",O.modelViewMatrix),Se.setValue(k,"normalMatrix",O.normalMatrix),Se.setValue(k,"modelMatrix",O.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let bn=Z.uniformsGroups;for(let fi=0,pi=bn.length;fi<pi;fi++){let lh=bn[fi];U.update(lh,Dn),U.bind(lh,Dn)}}return Dn}function gd(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function xd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,B,q){C.get(A.texture).__webglTexture=B,C.get(A.depthTexture).__webglTexture=q;let Z=C.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){let q=C.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,q=0){R=A,E=B,T=q;let Z=!0,O=null,pt=!1,bt=!1;if(A){let Ut=C.get(A);if(Ut.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(k.FRAMEBUFFER,null),Z=!1;else if(Ut.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(Ut.__hasExternalTextures)w.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Nt=A.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&C.has(Nt)&&(A.width!==Nt.image.width||A.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}let Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);let qt=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[B])?O=qt[B][q]:O=qt[B],pt=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?O=C.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?O=qt[q]:O=qt,L.copy(A.viewport),N.copy(A.scissor),F=A.scissorTest}else L.copy(gt).multiplyScalar(z).floor(),N.copy(Et).multiplyScalar(z).floor(),F=_t;if(Bt.bindFramebuffer(k.FRAMEBUFFER,O)&&Z&&Bt.drawBuffers(A,O),Bt.viewport(L),Bt.scissor(N),Bt.setScissorTest(F),pt){let Ut=C.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,q)}else if(bt){let Ut=C.get(A.texture),Ht=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ut.__webglTexture,q||0,Ht)}S=-1},this.readRenderTargetPixels=function(A,B,q,Z,O,pt,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){Bt.bindFramebuffer(k.FRAMEBUFFER,Dt);try{let Ut=A.texture,Ht=Ut.format,qt=Ut.type;if(!Kt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Z&&q>=0&&q<=A.height-O&&k.readPixels(B,q,Z,O,Pt.convert(Ht),Pt.convert(qt),pt)}finally{let Ut=R!==null?C.get(R).__webglFramebuffer:null;Bt.bindFramebuffer(k.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,Z,O,pt,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){let Ut=A.texture,Ht=Ut.format,qt=Ut.type;if(!Kt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-Z&&q>=0&&q<=A.height-O){Bt.bindFramebuffer(k.FRAMEBUFFER,Dt);let Nt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Nt),k.bufferData(k.PIXEL_PACK_BUFFER,pt.byteLength,k.STREAM_READ),k.readPixels(B,q,Z,O,Pt.convert(Ht),Pt.convert(qt),0);let re=R!==null?C.get(R).__webglFramebuffer:null;Bt.bindFramebuffer(k.FRAMEBUFFER,re);let ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await tf(k,ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Nt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,pt),k.deleteBuffer(Nt),k.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,q=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);let Z=Math.pow(2,-q),O=Math.floor(A.image.width*Z),pt=Math.floor(A.image.height*Z),bt=B!==null?B.x:0,Dt=B!==null?B.y:0;w.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,bt,Dt,O,pt),Bt.unbindTexture()},this.copyTextureToTexture=function(A,B,q=null,Z=null,O=0){A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],B=arguments[2],O=arguments[3]||0,q=null);let pt,bt,Dt,Ut,Ht,qt,Nt,re,ye,be=A.isCompressedTexture?A.mipmaps[O]:A.image;q!==null?(pt=q.max.x-q.min.x,bt=q.max.y-q.min.y,Dt=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,Ht=q.min.y,qt=q.isBox3?q.min.z:0):(pt=be.width,bt=be.height,Dt=be.depth||1,Ut=0,Ht=0,qt=0),Z!==null?(Nt=Z.x,re=Z.y,ye=Z.z):(Nt=0,re=0,ye=0);let hn=Pt.convert(B.format),le=Pt.convert(B.type),zt;B.isData3DTexture?(w.setTexture3D(B,0),zt=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(w.setTexture2DArray(B,0),zt=k.TEXTURE_2D_ARRAY):(w.setTexture2D(B,0),zt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let Qn=k.getParameter(k.UNPACK_ROW_LENGTH),ce=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Dn=k.getParameter(k.UNPACK_SKIP_PIXELS),rs=k.getParameter(k.UNPACK_SKIP_ROWS),fn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,be.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,be.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ut),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ht),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qt);let Zs=A.isDataArrayTexture||A.isData3DTexture,Se=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Xn=C.get(A),$s=C.get(B),bn=C.get(Xn.__renderTarget),fi=C.get($s.__renderTarget);Bt.bindFramebuffer(k.READ_FRAMEBUFFER,bn.__webglFramebuffer),Bt.bindFramebuffer(k.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let pi=0;pi<Dt;pi++)Zs&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,C.get(A).__webglTexture,O,qt+pi),A.isDepthTexture?(Se&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,C.get(B).__webglTexture,O,ye+pi),k.blitFramebuffer(Ut,Ht,pt,bt,Nt,re,pt,bt,k.DEPTH_BUFFER_BIT,k.NEAREST)):Se?k.copyTexSubImage3D(zt,O,Nt,re,ye+pi,Ut,Ht,pt,bt):k.copyTexSubImage2D(zt,O,Nt,re,ye+pi,Ut,Ht,pt,bt);Bt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Se?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(zt,O,Nt,re,ye,pt,bt,Dt,hn,le,be.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(zt,O,Nt,re,ye,pt,bt,Dt,hn,be.data):k.texSubImage3D(zt,O,Nt,re,ye,pt,bt,Dt,hn,le,be):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,Nt,re,pt,bt,hn,le,be.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,Nt,re,be.width,be.height,hn,be.data):k.texSubImage2D(k.TEXTURE_2D,O,Nt,re,pt,bt,hn,le,be);k.pixelStorei(k.UNPACK_ROW_LENGTH,Qn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ce),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Dn),k.pixelStorei(k.UNPACK_SKIP_ROWS,rs),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fn),O===0&&B.generateMipmaps&&k.generateMipmap(zt),Bt.unbindTexture()},this.copyTextureToTexture3D=function(A,B,q=null,Z=null,O=0){return A.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],B=arguments[3],O=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,q,Z,O)},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),Bt.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,Bt.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}},So=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ti=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ce,this.environmentIntensity=1,this.environmentRotation=new Ce,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var fr=class extends dn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=gn,h=gn,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_s=new Xt,lu=new Xt,Qr=[],cu=new ci,Jg=new Xt,er=new mt,nr=new hi,En=class extends mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),cu.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(cu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),nr.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_s),lu.multiplyMatrices(n,_s),er.matrixWorld=lu,er.raycast(t,Qr);for(let o=0,a=Qr.length;o<a;o++){let l=Qr[o];l.instanceId=r,l.object=this,e.push(l)}Qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(i*this.count),i,this.count,_r,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Wi=class extends kn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},wo=new I,Eo=new I,hu=new Xt,ir=new ur,jr=new hi,Ka=new I,uu=new I,rc=class extends Ye{constructor(t=new Vt,e=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)wo.fromBufferAttribute(e,i-1),Eo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=wo.distanceTo(Eo);t.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;hu.copy(i).invert(),ir.copy(t.ray).applyMatrix4(hu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=h.getX(x),y=h.getX(x+1),M=to(this,t,ir,l,m,y);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(d),m=to(this,t,ir,l,x,p);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=to(this,t,ir,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=to(this,t,ir,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function to(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(wo.fromBufferAttribute(o,i),Eo.fromBufferAttribute(o,r),e.distanceSqToSegment(wo,Eo,Ka,uu)>n)return;Ka.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ka);if(!(l<t.near||l>t.far))return{distance:l,point:uu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var du=new I,fu=new I,Ds=class extends rc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)du.fromBufferAttribute(e,i),fu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+du.distanceTo(fu);t.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var mr=class extends kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pu=new Xt,oc=new ur,eo=new hi,no=new I,Us=class extends Ye{constructor(t=new Vt,e=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;pu.copy(i).invert(),oc.copy(t.ray).applyMatrix4(pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);no.fromBufferAttribute(u,p),mu(no,p,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)no.fromBufferAttribute(u,g),mu(no,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function mu(s,t,e,n,i,r,o){let a=oc.distanceSqToPoint(s);if(a<e){let l=new I;oc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var sn=class extends dn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new yt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],r=[],o=[],a=new I,l=new Xt;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ve(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ve(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},To=class extends Hn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new yt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ac=class extends To{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var io=new I,Qa=new kc,ja=new kc,tl=new kc,Ns=class extends Hn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(io.subVectors(i[0],i[1]).add(i[0]),c=io);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(io.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=io),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Qa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),ja.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),tl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ja.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),tl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Qa.calc(l),ja.calc(l),tl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gu(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Kg(s,t){let e=1-s;return e*e*t}function Qg(s,t){return 2*(1-s)*s*t}function jg(s,t){return s*s*t}function lr(s,t,e,n){return Kg(s,t)+Qg(s,e)+jg(s,n)}function tx(s,t){let e=1-s;return e*e*e*t}function ex(s,t){let e=1-s;return 3*e*e*s*t}function nx(s,t){return 3*(1-s)*s*s*t}function ix(s,t){return s*s*s*t}function cr(s,t,e,n,i){return tx(s,t)+ex(s,e)+nx(s,n)+ix(s,i)}var lc=class extends Hn{constructor(t=new yt,e=new yt,n=new yt,i=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new yt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,i.x,r.x,o.x,a.x),cr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cc=class extends Hn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,i.x,r.x,o.x,a.x),cr(t,i.y,r.y,o.y,a.y),cr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hc=class extends Hn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uc=class extends Hn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},dc=class extends Hn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,i.x,r.x,o.x),lr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends Hn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,i.x,r.x,o.x),lr(t,i.y,r.y,o.y),lr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fc=class extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(gu(a,l.x,c.x,h.x,u.x),gu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new yt().fromArray(i))}return this}},sx=Object.freeze({__proto__:null,ArcCurve:ac,CatmullRomCurve3:Ns,CubicBezierCurve:lc,CubicBezierCurve3:cc,EllipseCurve:To,LineCurve:hc,LineCurve3:uc,QuadraticBezierCurve:dc,QuadraticBezierCurve3:Ao,SplineCurve:fc});var Ro=class s extends Vt{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ve(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new yt,d=new I,g=new I,x=new I,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let M=n+y*h*i,v=Math.sin(M),P=Math.cos(M);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*P,o.push(u.x,u.y,u.z),f.x=y/e,f.y=E/(t.length-1),a.push(f.x,f.y);let T=l[3*E+0]*v,R=l[3*E+1],S=l[3*E+0]*P;c.push(T,R,S)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let v=M+y*t.length,P=v,E=v+t.length,T=v+t.length+1,R=v+1;r.push(P,E,R),r.push(T,R,E)}this.setIndex(r),this.setAttribute("position",new wt(o,3)),this.setAttribute("uv",new wt(a,2)),this.setAttribute("normal",new wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Vn=class s extends Vt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new yt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ie=class s extends Vt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],p=n/2,m=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(d,2));function y(){let v=new I,P=new I,E=0,T=(e-t)/n;for(let R=0;R<=r;R++){let S=[],b=R/r,L=b*(e-t)+t;for(let N=0;N<=i;N++){let F=N/i,V=F*l+a,J=Math.sin(V),G=Math.cos(V);P.x=L*J,P.y=-b*n+p,P.z=L*G,u.push(P.x,P.y,P.z),v.set(J,T,G).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-b),S.push(g++)}x.push(S)}for(let R=0;R<i;R++)for(let S=0;S<r;S++){let b=x[S][R],L=x[S+1][R],N=x[S+1][R+1],F=x[S][R+1];(t>0||S!==0)&&(h.push(b,L,F),E+=3),(e>0||S!==r-1)&&(h.push(L,N,F),E+=3)}c.addGroup(m,E,0),m+=E}function M(v){let P=g,E=new yt,T=new I,R=0,S=v===!0?t:e,b=v===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,p*b,0),f.push(0,b,0),d.push(.5,.5),g++;let L=g;for(let N=0;N<=i;N++){let V=N/i*l+a,J=Math.cos(V),G=Math.sin(V);T.x=S*G,T.y=p*b,T.z=S*J,u.push(T.x,T.y,T.z),f.push(0,b,0),E.x=J*.5+.5,E.y=G*.5*b+.5,d.push(E.x,E.y),g++}for(let N=0;N<i;N++){let F=P+N,V=L+N;v===!0?h.push(V,V+1,F):h.push(V+1,V,F),R+=3}c.addGroup(m,R,v===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xi=class s extends Ie{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pc=class s extends Vt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new I,v=new I,P=new I;for(let E=0;E<e.length;E+=3)d(e[E+0],M),d(e[E+1],v),d(e[E+2],P),l(M,v,P,y)}function l(y,M,v,P){let E=P+1,T=[];for(let R=0;R<=E;R++){T[R]=[];let S=y.clone().lerp(v,R/E),b=M.clone().lerp(v,R/E),L=E-R;for(let N=0;N<=L;N++)N===0&&R===E?T[R][N]=S:T[R][N]=S.clone().lerp(b,N/L)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){let b=Math.floor(S/2);S%2===0?(f(T[R][b+1]),f(T[R+1][b]),f(T[R][b])):(f(T[R][b+1]),f(T[R+1][b+1]),f(T[R+1][b]))}}function c(y){let M=new I;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let y=new I;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let v=p(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let M=o[y+0],v=o[y+2],P=o[y+4],E=Math.max(M,v,P),T=Math.min(M,v,P);E>.9&&T<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,M){let v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){let y=new I,M=new I,v=new I,P=new I,E=new yt,T=new yt,R=new yt;for(let S=0,b=0;S<r.length;S+=9,b+=6){y.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),R.set(o[b+4],o[b+5]),P.copy(y).add(M).add(v).divideScalar(3);let L=p(P);x(E,b+0,y,L),x(T,b+2,M,L),x(R,b+4,v,L)}}function x(y,M,v,P){P<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Yi=class s extends pc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Fs=class s extends Vt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new I,g=new yt;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){let p=x*(n+1);for(let m=0;m<n;m++){let y=m+p,M=y,v=y+n+1,P=y+n+2,E=y+1;a.push(M,v,E),a.push(v,P,E)}}this.setIndex(a),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ai=class s extends Vt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let y=[],M=m/n,v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let E=P/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(E+v,1-M),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let M=h[m][y+1],v=h[m][y],P=h[m+1][y],E=h[m+1][y+1];(m!==0||o>0)&&d.push(M,v,E),(m!==n-1||l<Math.PI)&&d.push(v,P,E)}this.setIndex(d),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tn=class s extends Vt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let x=g/i*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let x=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(x,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Co=class s extends Vt{constructor(t=new Ao(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new yt,h=new I,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(f,3)),this.setAttribute("uv",new wt(d,2));function x(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),y(),m()}function p(M){h=t.getPointAt(M/e,h);let v=o.normals[M],P=o.binormals[M];for(let E=0;E<=i;E++){let T=E/i*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);l.x=S*v.x+R*P.x,l.y=S*v.y+R*P.y,l.z=S*v.z+R*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let v=1;v<=i;v++){let P=(i+1)*(M-1)+(v-1),E=(i+1)*M+(v-1),T=(i+1)*M+v,R=(i+1)*(M-1)+v;g.push(P,E,R),g.push(E,T,R)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=i;v++)c.x=M/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new sx[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Po=class extends _e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},xn=class extends kn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},gr=class extends xn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},xr=class extends kn{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var we=class extends kn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function so(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function rx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var zs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mc=class extends zs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=t,a=2*e-n;break;case ph:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:o=t,l=2*n-e;break;case ph:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,y=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-d)*p+(1.5+d)*x+.5*g,v=d*p-d*x;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+y*o[c+P]+M*o[l+P]+v*o[u+P];return r}},gc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},xc=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Gn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=so(e,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:so(t.times,Array),values:so(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ho:e=this.InterpolantFactoryMethodDiscrete;break;case Hl:e=this.InterpolantFactoryMethodLinear;break;case ba:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return Hl;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&rx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ba,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Hl;var qi=class extends Gn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ho;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends Gn{};yc.prototype.ValueTypeName="color";var vc=class extends Gn{};vc.prototype.ValueTypeName="number";var _c=class extends zs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)pe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Io=class extends Gn{InterpolantFactoryMethodLinear(t){return new _c(this.times,this.values,this.getValueSize(),t)}};Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Gn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ho;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Gn{};Mc.prototype.ValueTypeName="vector";var bc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},ox=new bc,Sc=class{constructor(t){this.manager=t!==void 0?t:ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Lo=class extends yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},el=new Xt,xu=new I,yu=new I,Do=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(xu),yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yu),e.updateMatrixWorld(),el.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var vu=new Xt,sr=new I,nl=new I,wc=class extends Do{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),nl.copy(n.position),nl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nl),n.updateMatrixWorld(),i.makeTranslation(-sr.x,-sr.y,-sr.z),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu)}},Bs=class extends yr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ec=class extends Do{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Ec}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var No=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_u(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=_u();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function _u(){return performance.now()}var Hc="\\[\\]\\.:\\/",ax=new RegExp("["+Hc+"]","g"),Vc="[^"+Hc+"]",lx="[^"+Hc.replace("\\.","")+"]",cx=/((?:WC+[\/:])*)/.source.replace("WC",Vc),hx=/(WCOD+)?/.source.replace("WCOD",lx),ux=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),dx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),fx=new RegExp("^"+cx+hx+ux+dx+"$"),px=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let i=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ax,"")}static parseTrackName(t){let e=fx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Tc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ay=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Lt=(s,t,e)=>s<t?t:s>e?e:s,mx=s=>s<0?0:s>1?1:s,Ot=(s,t,e)=>s+(t-s)*e,jt=(s,t,e)=>{let n=mx((e-s)/(t-s));return n*n*(3-2*n)},te=(s,t,e,n)=>s+(t-s)*(1-Math.exp(-e*n)),gx=s=>(s=(s+Math.PI)%(Math.PI*2),s<0&&(s+=Math.PI*2),s-Math.PI),Ci=(s,t,e,n)=>s+gx(t-s)*(1-Math.exp(-e*n)),Hu=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;function Ji(s){let t=s>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ho(s,t,e){let n=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Vo(s,t,e=0){let n=Math.floor(s),i=Math.floor(t),r=s-n,o=t-i,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Ho(n,i,e),h=Ho(n+1,i,e),u=Ho(n,i+1,e),f=Ho(n+1,i+1,e);return c+(h-c)*a+(u-c)*l+(c-h-u+f)*a*l}function Ki(s,t,e=4,n=0){let i=0,r=.5,o=1,a=0;for(let l=0;l<e;l++)i+=r*Vo(s*o,t*o,n+l*17),a+=r,r*=.5,o*=2.03;return i/a}function je(s){let t=s.length,e=new Array(t);for(let n=0;n<t;n++){let i=s[Math.max(0,n-1)],r=s[Math.min(t-1,n+1)];e[n]=r[0]===i[0]?0:(r[1]-i[1])/(r[0]-i[0])}return n=>{if(n<=s[0][0])return s[0][1];if(n>=s[t-1][0])return s[t-1][1];let i=0;for(;n>s[i+1][0];)i++;let r=s[i][0],o=s[i+1][0],a=o-r,l=(n-r)/a,c=l*l,h=c*l;return(2*h-3*c+1)*s[i][1]+(h-2*c+l)*a*e[i]+(-2*h+3*c)*s[i+1][1]+(h-c)*a*e[i+1]}}var Ge=s=>Math.round(s).toLocaleString("en-US");var xx="https://sdk.crazygames.com/crazygames-sdk-v3.js",An={api:null,active:!1,playing:!1,loading:!1,muted:!1,onMute:null,async init(){try{await new Promise((t,e)=>{if(window.CrazyGames&&window.CrazyGames.SDK)return t();let n=document.createElement("script");n.src=xx,n.onload=t,n.onerror=()=>e(new Error("sdk blocked")),document.head.appendChild(n),setTimeout(()=>e(new Error("sdk timeout")),3500)});let s=window.CrazyGames.SDK;if(await Promise.race([s.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("init timeout")),3500))]),this.api=s,this.active=s.environment==="crazygames"||s.environment==="local",this.active)try{this.muted=!!s.game.settings.muteAudio,s.game.addSettingsChangeListener(t=>{this.muted=!!t.muteAudio,this.onMute&&this.onMute(this.muted)})}catch{}}catch{this.api=null,this.active=!1}return this.active},call(s){if(this.active)try{s(this.api)}catch{}},loadingStart(){this.loading||(this.loading=!0,this.call(s=>s.game.loadingStart()))},loadingStop(){this.loading&&(this.loading=!1,this.call(s=>s.game.loadingStop()))},gameplayStart(){this.playing||(this.playing=!0,this.call(s=>s.game.gameplayStart()))},gameplayStop(){this.playing&&(this.playing=!1,this.call(s=>s.game.gameplayStop()))},happytime(){this.call(s=>s.game.happytime())},getItem(s){if(this.active)try{let t=this.api.data.getItem(s);if(t!==void 0)return t}catch{}try{return localStorage.getItem(s)}catch{return null}},setItem(s,t){if(this.active)try{this.api.data.setItem(s,t);return}catch{}try{localStorage.setItem(s,t)}catch{}}};var Vu=[["forward","Accelerate"],["back","Brake / Reverse"],["left","Steer left"],["right","Steer right"],["boost","Boost / Climb"],["shift","Drift / Descend"],["fly","Flight on / off"],["rollL","Roll left"],["rollR","Roll right"],["reset","Reset car"],["look","Look back"],["photo","Photo mode"],["pause","Pause"]],br={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],boost:["Space"],shift:["ShiftLeft","ShiftRight"],fly:["KeyF"],rollL:["KeyQ"],rollR:["KeyE"],reset:["KeyR"],look:["KeyC"],photo:["KeyP"],pause:["Escape"]};function Qi(s){if(!s)return"\u2014";let t={Space:"Space",ShiftLeft:"Shift",ShiftRight:"R Shift",ControlLeft:"Ctrl",ControlRight:"R Ctrl",AltLeft:"Alt",AltRight:"R Alt",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Escape:"Esc",Enter:"Enter",Backspace:"Backspace",Tab:"Tab"};return t[s]?t[s]:s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):s.startsWith("Numpad")?"Num "+s.slice(6):s}var Go=class{constructor(t,e){this.canvas=t,this.keys=e,this.down=new Set,this.pressed=new Set,this.state={steer:0,throttle:0,boost:!1,shift:!1,roll:0,fly:!1,boostPressed:!1,look:!1},this.dragX=0,this.dragY=0,this.zoom=0,this.pinch=0,this.touch={active:!1,joy:null,jx:0,jy:0,boost:!1,shift:!1,fly:!1,roll:!1,drag:null},this.isTouch=!1,this.capture=null,this.enabled=!0,this.padPrev=[],this.onTouchMode=null,addEventListener("keydown",l=>{if(this.capture){l.preventDefault();let c=this.capture;this.capture=null,c(l.code);return}l.target&&/INPUT|SELECT|TEXTAREA/.test(l.target.tagName)||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(l.code)&&l.preventDefault(),l.repeat||this.pressed.add(l.code),this.down.add(l.code))}),addEventListener("keyup",l=>this.down.delete(l.code)),addEventListener("blur",()=>{this.down.clear(),this.touch.boost=this.touch.shift=!1,this.touch.joy=null});let n=!1;t.addEventListener("mousedown",l=>{(l.button===0||l.button===2)&&(n=!0)}),addEventListener("mouseup",()=>{n=!1}),addEventListener("mousemove",l=>{n&&(this.dragX+=l.movementX,this.dragY+=l.movementY)}),t.addEventListener("wheel",l=>{l.preventDefault(),this.zoom+=Math.sign(l.deltaY)},{passive:!1}),t.addEventListener("contextmenu",l=>l.preventDefault());let i=this.touch,r=l=>{this.isTouch||(this.isTouch=!0,this.onTouchMode&&this.onTouchMode(!0));for(let c of l.changedTouches)this.joyEnabled&&!i.joy&&c.clientX<innerWidth*.46&&c.clientY>innerHeight*.25?(i.joy={id:c.identifier,x:c.clientX,y:c.clientY},i.jx=i.jy=0,this.onJoy&&this.onJoy(i.joy,0,0,!0)):i.drag?i.drag2||(i.drag2={id:c.identifier,x:c.clientX,y:c.clientY},i.pinchD=Math.hypot(i.drag.x-c.clientX,i.drag.y-c.clientY)):i.drag={id:c.identifier,x:c.clientX,y:c.clientY};l.preventDefault()},o=l=>{for(let c of l.changedTouches){if(i.joy&&c.identifier===i.joy.id){let u=(c.clientX-i.joy.x)/58,f=(c.clientY-i.joy.y)/58,d=Math.hypot(u,f);d>1&&(u/=d,f/=d),i.jx=u,i.jy=-f,this.onJoy&&this.onJoy(i.joy,u,f,!0)}else i.drag&&c.identifier===i.drag.id?(i.drag2||(this.dragX+=(c.clientX-i.drag.x)*1.4,this.dragY+=(c.clientY-i.drag.y)*1.4),i.drag.x=c.clientX,i.drag.y=c.clientY):i.drag2&&c.identifier===i.drag2.id&&(i.drag2.x=c.clientX,i.drag2.y=c.clientY);if(i.drag&&i.drag2){let h=Math.hypot(i.drag.x-i.drag2.x,i.drag.y-i.drag2.y);this.pinch+=(i.pinchD-h)*.02,i.pinchD=h}}l.preventDefault()},a=l=>{for(let c of l.changedTouches)i.joy&&c.identifier===i.joy.id&&(i.joy=null,i.jx=i.jy=0,this.onJoy&&this.onJoy(null,0,0,!1)),i.drag&&c.identifier===i.drag.id?(i.drag=i.drag2||null,i.drag2=null):i.drag2&&c.identifier===i.drag2.id&&(i.drag2=null)};t.addEventListener("touchstart",r,{passive:!1}),t.addEventListener("touchmove",o,{passive:!1}),t.addEventListener("touchend",a),t.addEventListener("touchcancel",a),this.joyEnabled=!0}bindButton(t,e){let n=this.touch,i=o=>{o.preventDefault(),this.isTouch||(this.isTouch=!0,this.onTouchMode&&this.onTouchMode(!0)),n[e]=!0,(e==="fly"||e==="roll")&&(n[e+"Edge"]=!0),t.classList.add("on")},r=o=>{o.preventDefault(),n[e]=!1,t.classList.remove("on")};t.addEventListener("touchstart",i,{passive:!1}),t.addEventListener("touchend",r,{passive:!1}),t.addEventListener("touchcancel",r,{passive:!1}),t.addEventListener("mousedown",i),t.addEventListener("mouseup",r),t.addEventListener("mouseleave",o=>{n[e]&&r(o)})}held(t){let e=this.keys[t];if(!e)return!1;for(let n of e)if(n&&this.down.has(n))return!0;return!1}hit(t){let e=this.keys[t];if(!e)return!1;for(let n of e)if(n&&this.pressed.has(n))return!0;return!1}poll(t){let e=this.state,n=this.touch,i=(this.held("right")?1:0)-(this.held("left")?1:0),r=(this.held("forward")?1:0)-(this.held("back")?1:0),o=this.held("boost"),a=this.held("shift"),l=(this.held("rollR")?1:0)-(this.held("rollL")?1:0),c=this.hit("fly"),h=this.hit("boost"),u={pause:this.hit("pause"),photo:this.hit("photo"),reset:this.hit("reset")};if(e.look=this.held("look"),n.joy){let d=(g,x)=>Math.abs(g)<x?0:(g-Math.sign(g)*x)/(1-x);i=Lt(i+d(n.jx,.12),-1,1),r=Lt(r+d(n.jy,.2)*1.25,-1,1)}n.boost&&(o=!0,n.boostWas||(h=!0)),n.boostWas=n.boost,n.shift&&(a=!0),n.flyEdge&&(t?this.rollHold={dir:i<-.1?-1:1,t:6}:c=!0,n.flyEdge=!1),this.rollHold&&(l=this.rollHold.dir,--this.rollHold.t<=0&&(this.rollHold=null));let f=navigator.getGamepads?navigator.getGamepads():[];for(let d of f){if(!d||!d.connected||d.mapping!=="standard")continue;let g=y=>d.buttons[y]&&d.buttons[y].pressed,x=y=>d.buttons[y]?d.buttons[y].value:0,p=this.padPrev,m=Math.abs(d.axes[0])>.15?d.axes[0]:0;i=Lt(i+m,-1,1),r=Lt(r+x(7)-x(6),-1,1),g(0)&&(o=!0,p[0]||(h=!0)),(g(1)||g(2))&&(a=!0),g(3)&&!p[3]&&(c=!0),l=Lt(l+(g(5)?1:0)-(g(4)?1:0),-1,1),g(9)&&!p[9]&&(u.pause=!0),g(8)&&!p[8]&&(u.reset=!0),Math.abs(d.axes[2])>.2&&(this.dragX+=d.axes[2]*14),Math.abs(d.axes[3])>.2&&(this.dragY+=d.axes[3]*10),this.padPrev=d.buttons.map(y=>y.pressed);break}return e.steer=i,e.throttle=r,e.boost=o,e.shift=a,e.roll=l,e.fly=c,e.boostPressed=h,this.pressed.clear(),u}takeDrag(){let t={x:this.dragX,y:this.dragY,zoom:this.zoom+this.pinch};return this.dragX=this.dragY=this.zoom=this.pinch=0,t}};var Gu="flying-roadster-save-v1",Hs=()=>({points:0,paint:"white",unlocked:["white"],stats:{bestCombo:0,topSpeed:0,longestAir:0,rings:0,launches:0,pads:[],flips:0,spins:0,rolls:0,near:0,under:0,chains:[],driftBest:0,skim:0,maxAlt:0},done:[],hints:{},settings:{master:.8,music:.55,sfx:.9,quality:"auto",cinematic:!0,units:"kmh",time:"sunset",sens:1,shake:!0},keys:JSON.parse(JSON.stringify(br))}),Ft={data:Hs(),timer:null,load(){let s=Hs();try{let t=An.getItem(Gu);if(t){let e=JSON.parse(t);Object.assign(s,e),s.stats=Object.assign(Hs().stats,e.stats),s.settings=Object.assign(Hs().settings,e.settings),s.keys=Object.assign(Hs().keys,e.keys),s.hints=e.hints||{},Array.isArray(s.done)||(s.done=[]),Array.isArray(s.stats.chains)||(s.stats.chains=[]),(!Array.isArray(s.unlocked)||!s.unlocked.includes("white"))&&(s.unlocked=["white"])}}catch{}return this.data=s,s},flush(){clearTimeout(this.timer),this.timer=null;try{An.setItem(Gu,JSON.stringify(this.data))}catch{}},touch(){this.timer||(this.timer=setTimeout(()=>this.flush(),1500))},reset(){let s={settings:this.data.settings,keys:this.data.keys};this.data=Object.assign(Hs(),s),this.flush()}};var Wo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yx=new Is(-1,1,1,-1,0,1),Gc=class extends Vt{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}},vx=new Gc,Pi=class{constructor(t){this._mesh=new mt(vx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,yx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Vs=class extends vn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ri.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Pi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sr=class extends vn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Xo=class extends vn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Yo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new yt);this._width=n.width,this._height=n.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vs(Wo),this.copyPass.material.blending=Zn,this.clock=new No}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Sr!==void 0&&(o instanceof Sr?n=!0:o instanceof Xo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qo=class extends vn{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ut}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Wu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ut(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Gs=class s extends vn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,o,{type:yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Xe(r,o,{type:yn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Xe(r,o,{type:yn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Wu;this.highPassUniforms=Ri.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new yt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Wo;this.copyUniforms=Ri.clone(h.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ut,this.oldClearAlpha=1,this.basic=new Qt,this.fsQuad=new Pi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new yt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Gs.BlurDirectionX=new yt(1,0);Gs.BlurDirectionY=new yt(0,1);var Xu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Zo=class extends vn{constructor(){super();let t=Xu;this.uniforms=Ri.clone(t.uniforms),this.material=new Po({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _x={low:{ratio:1,bloom:!1,shadows:0,msaa:0,treeShadows:!1,trees:.4},medium:{ratio:1.5,bloom:!0,shadows:1024,msaa:0,treeShadows:!1,trees:.7},high:{ratio:2,bloom:!0,shadows:2048,msaa:4,treeShadows:!0,trees:1}},Mx={uniforms:{tDiffuse:{value:null},uStrength:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uStrength; varying vec2 vUv;
    void main() {
      vec2 d = vUv - vec2(0.5, 0.52);
      float r = length(d);
      vec4 acc = vec4(0.0);
      float amt = uStrength * 0.11 * smoothstep(0.08, 0.6, r);
      for (int i = 0; i < 10; i++) acc += texture2D(tDiffuse, vUv - d * amt * (float(i) / 9.0));
      acc /= 10.0;
            gl_FragColor = acc;
    }`},$o=class{constructor(t){this.canvas=t;let e=this.renderer=new bo({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1});e.toneMapping=vr,e.outputColorSpace=Ae,e.shadowMap.enabled=!0,e.shadowMap.type=Ac,this.mobile=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),this.setting="auto",this.tierName=this.mobile?"medium":"high",this.scale=1,this.composer=null,this.frameAcc=0,this.frameN=0,this.slowStreak=0,this.fastStreak=0,this.bloomStrength=.5,this.radial=0,this.w=1,this.h=1}get tier(){return _x[this.tierName]}init(t,e,n){this.scene=t,this.camera=e,this.world=n,this.apply()}setQuality(t){this.setting=t,this.tierName=t==="auto"?this.mobile?"medium":"high":t,this.scale=1,this.slowStreak=this.fastStreak=0,this.scene&&this.apply()}apply(){let t=this.tier,e=this.renderer,n=this.world.sky.sun;e.shadowMap.enabled=t.shadows>0,n.castShadow=t.shadows>0,t.shadows&&n.shadow.mapSize.x!==t.shadows&&(n.shadow.mapSize.set(t.shadows,t.shadows),n.shadow.map&&(n.shadow.map.dispose(),n.shadow.map=null));for(let i of this.world.props.group.userData.trees||[])i.castShadow=t.treeShadows,i.count=Math.round(i.userData.full*t.trees);if(this.scene.traverse(i=>{if(i.material){let r=Array.isArray(i.material)?i.material:[i.material];for(let o of r)o.needsUpdate=!0}}),this.composer&&(this.composer.dispose(),this.composer=null),t.bloom){let i=new Xe(4,4,{type:yn,samples:t.msaa}),r=this.composer=new Yo(e,i);r.addPass(new qo(this.scene,this.camera)),this.bloom=new Gs(new yt(256,256),this.bloomStrength,.6,1);let o=this.bloom.materialHighPassFilter;o.fragmentShader=o.fragmentShader.replace("gl_FragColor = mix( outputColor, texel, alpha );","vec4 safe = mix( outputColor, texel, alpha ); if ( any( isnan( safe ) ) || any( isinf( safe ) ) ) safe = vec4( 0.0 ); gl_FragColor = min( safe, vec4( 4.5 ) );"),o.needsUpdate=!0,r.addPass(this.bloom),this.radialPass=new Vs(Mx),this.radialPass.enabled=!1,r.addPass(this.radialPass),r.addPass(new Zo)}this.resize(!0)}resize(t){let e=this.canvas.clientWidth||innerWidth,n=this.canvas.clientHeight||innerHeight,i=Math.min(devicePixelRatio||1,this.tier.ratio)*this.scale;!t&&e===this.w&&n===this.h&&i===this.ratio||(this.w=e,this.h=n,this.ratio=i,this.renderer.setPixelRatio(i),this.renderer.setSize(e,n,!1),this.composer&&(this.composer.setPixelRatio(i),this.composer.setSize(e,n)),this.camera.aspect=e/n,this.camera.updateProjectionMatrix())}adapt(t){if(this.setting!=="auto"||t>.25||(this.frameAcc+=t,this.frameN++,this.frameAcc<1.5))return;let e=this.frameAcc/this.frameN;this.frameAcc=0,this.frameN=0,e>1/48?(this.slowStreak++,this.fastStreak=0):e<1/57?(this.fastStreak++,this.slowStreak=0):this.slowStreak=this.fastStreak=0,this.slowStreak>=2?(this.slowStreak=0,this.scale>.72?(this.scale=Math.max(.7,this.scale-.15),this.resize(!0)):this.tierName==="high"?(this.tierName="medium",this.scale=1,this.apply()):this.tierName==="medium"?(this.tierName="low",this.scale=1,this.apply()):this.scale>.55&&(this.scale=.55,this.resize(!0))):this.fastStreak>=6&&this.scale<1&&(this.fastStreak=0,this.scale=Math.min(1,this.scale+.15),this.resize(!0))}render(){if(this.resize(!1),this.composer){let t=this.world.sky;this.bloom.strength=t.studio?.38:t.v.bloom,this.bloom.threshold=t.studio?1.6:t.v.bloomT,this.bloom.radius=t.studio?.35:.6,this.radialPass.enabled=this.radial>.01,this.radialPass.uniforms.uStrength.value=this.radial,this.composer.render()}else this.renderer.render(this.scene,this.camera)}snapshot(){this.render();let t=document.createElement("canvas");return t.width=this.canvas.width,t.height=this.canvas.height,t.getContext("2d").drawImage(this.canvas,0,0),t}};var ee={x:-200,z:-820,r:780,h:300,summitY:262,summitR:46},Te={x:-40,z:840,rx:330,rz:640},on={x:-900,z:1430,r:190,h:20},Rn={x:1010,z:-990,r:430,h:62},oe={x0:-1640,x1:-510,z0:240,z1:520,y:14},ne={x0:-1604,x1:-598,z:380,halfW:20},ui={x:-569,z:380,yaw:Math.PI/2,len:54,halfW:9,h:10.5,curve:1.85},Ct={x0:511,z0:101,n:9,pitch:82,street:18,y:7};Ct.x1=Ct.x0+Ct.n*Ct.pitch;Ct.z1=Ct.z0+Ct.n*Ct.pitch;var Le={x:-1150,z:380,yaw:Math.PI/2},Jo=Math.atan2(.5,.82);var Wc=(s,t,e,n,i,r)=>Math.hypot(Math.max(e-s,0,s-i),Math.max(n-t,0,t-r));function Yu(s,t,e,n,i,r,o,a,l){let c=Wc(t,e,n,i,r,o);return c>=l?s:Ot(a,s,jt(0,l,c))}function Qo(s,t){let e=Math.hypot(s,t),n=(Ki(s*.0011+3.1,t*.0011-7.7,3,11)-.5)*520,i=jt(1800,1180,e+n),r=-30+i*44;r+=i*i*(Ki(s*.0021+20,t*.0021+9,4,5)-.42)*85,r+=i*(Ki(s*.012,t*.012,2,31)-.5)*5;let o=Math.hypot(s-ee.x,t-ee.z)/ee.r;if(o<1){let u=1-o,f=u*u*(3-2*u),d=1-Math.abs(Ki(s*.0042+50,t*.0042-20,3,77)*2-1);r+=f*ee.h*(.8+.2*d)}let a=Math.hypot(s-Rn.x,t-Rn.z)/Rn.r;if(a<1){let u=1-a;r+=u*u*(3-2*u)*Rn.h*(.4+.6*i)}let l=Math.hypot((s-Te.x)/Te.rx,(t-Te.z)/Te.rz);r=Ot(r,-16,jt(1.22,.8,l));let c=Math.hypot(s-on.x,t-on.z);c<on.r&&(r=Math.max(r,-6+(on.h+6)*jt(on.r,on.r*.3,c))),r>0&&r<7&&(r=7*Math.pow(r/7,1.9)),r=Yu(r,s,t,oe.x0,oe.z0,oe.x1,oe.z1,oe.y,80),r=Yu(r,s,t,Ct.x0-24,Ct.z0-24,Ct.x1+24,Ct.z1+24,Ct.y,90);let h=Math.hypot(s-ee.x,t-ee.z);return h<ee.summitR+70&&(r=Ot(ee.summitY,r,jt(ee.summitR,ee.summitR+70,h))),r}var $n=s=>new ut(s),_n={seabed:$n("#1d5e6b"),wetSand:$n("#c9b083"),sand:$n("#e6cf9f"),grassA:$n("#86a75a"),grassB:$n("#5f9150"),dry:$n("#b3ab66"),rock:$n("#8d8176"),rockDark:$n("#6f6660"),peak:$n("#c4b8aa"),pave:$n("#878b92")},Ko=class{constructor(t){let e=this.n=320;this.size=4e3,this.half=4e3/2,this.cell=4e3/e;let n=e+1,i=this.h=new Float32Array(n*n);for(let r=0;r<n;r++)for(let o=0;o<n;o++)i[r*n+o]=Qo(-this.half+o*this.cell,-this.half+r*this.cell);this.flatten(t)}flatten(t){let e=this.n+1,n=this.h,i=new Float32Array(n.length).fill(9),r=new Float32Array(n.length);for(let o of t){let a=o.halfW+9,l=o.halfW+44;for(let c of o.pts){if(c.bridge)continue;let h=Math.max(0,Math.floor((c.x-l+this.half)/this.cell)),u=Math.min(e-1,Math.ceil((c.x+l+this.half)/this.cell)),f=Math.max(0,Math.floor((c.z-l+this.half)/this.cell)),d=Math.min(e-1,Math.ceil((c.z+l+this.half)/this.cell));for(let g=f;g<=d;g++)for(let x=h;x<=u;x++){let p=(Math.hypot(-this.half+x*this.cell-c.x,-this.half+g*this.cell-c.z)-a)/(l-a),m=g*e+x;p<i[m]&&(i[m]=p,r[m]=c.y)}}}for(let o=0;o<n.length;o++)i[o]<1&&(n[o]=Ot(r[o],n[o],jt(0,1,i[o])))}heightAt(t,e){let n=this.n,i=n+1,r=(t+this.half)/this.cell,o=(e+this.half)/this.cell;if(r<0||o<0||r>=n||o>=n)return-30;let a=r|0,l=o|0,c=r-a,h=o-l,u=l*i+a,f=this.h,d=f[u],g=f[u+1],x=f[u+i],p=f[u+i+1];return c+h<=1?d+(g-d)*c+(x-d)*h:p+(x-p)*(1-c)+(g-p)*(1-h)}normalAt(t,e,n){return n.set(this.heightAt(t-2.5,e)-this.heightAt(t+2.5,e),2*2.5,this.heightAt(t,e-2.5)-this.heightAt(t,e+2.5)),n.normalize()}buildMesh(){let t=this.n,e=t+1,n=this.h,i=new Float32Array(e*e*3),r=new Float32Array(e*e*3),o=new ut,a=new ut;for(let f=0;f<e;f++)for(let d=0;d<e;d++){let g=f*e+d,x=-this.half+d*this.cell,p=-this.half+f*this.cell,m=n[g];i[g*3]=x,i[g*3+1]=m,i[g*3+2]=p;let y=n[f*e+Math.max(0,d-1)],M=n[f*e+Math.min(t,d+1)],v=n[Math.max(0,f-1)*e+d],P=n[Math.min(t,f+1)*e+d],E=Math.hypot(M-y,P-v)/(2*this.cell),T=Vo(x*.006,p*.006,3),R=Vo(x*.031,p*.031,9);m<.4?o.copy(_n.wetSand).lerp(_n.seabed,jt(.4,-7,m)):m<3.4+T*1.5?o.copy(_n.sand).lerp(_n.wetSand,jt(1.4,.4,m)):(o.copy(_n.grassA).lerp(_n.grassB,jt(.3,.7,T)).lerp(_n.dry,jt(.55,.95,R)*.6),o.lerp(_n.sand,jt(6.5,3.4,m)*.7),a.copy(_n.rock).lerp(_n.rockDark,R),o.lerp(a,jt(.34,.58,E+R*.08)),o.lerp(_n.peak,jt(170,255,m+T*40)*.85));let S=Wc(x,p,Ct.x0-10,Ct.z0-10,Ct.x1+10,Ct.z1+10);S<30&&o.lerp(_n.pave,jt(30,0,S));let b=Wc(x,p,oe.x0+10,oe.z0+10,oe.x1-10,oe.z1-10);b<40&&m>6&&o.lerp(_n.dry,jt(40,0,b)*.75),o.multiplyScalar(.94+R*.12),r[g*3]=o.r,r[g*3+1]=o.g,r[g*3+2]=o.b}let l=new Uint32Array(t*t*6),c=0;for(let f=0;f<t;f++)for(let d=0;d<t;d++){let g=f*e+d,x=g+1,p=g+e,m=p+1;l[c++]=g,l[c++]=p,l[c++]=x,l[c++]=x,l[c++]=p,l[c++]=m}let h=new Vt;h.setAttribute("position",new ve(i,3)),h.setAttribute("color",new ve(r,3)),h.setIndex(new ve(l,1)),h.computeVertexNormals(),this.colors=r;let u=new mt(h,new we({vertexColors:!0,flatShading:!0}));return u.receiveShadow=!0,u.matrixAutoUpdate=!1,u}buildHeightTexture(){let t=this.n+1,e=new Uint8Array(t*t);for(let i=0;i<e.length;i++)e[i]=Lt(Math.round((this.h[i]+16)/32*255),0,255);let n=new fr(e,t,t,_r,On);return n.magFilter=n.minFilter=wn,n.needsUpdate=!0,n}};var tn=.15;function bx(){let s=[[-100,-60],[-112,-150]],t=1.42,e=1.62,n=24;for(let i=0;i<=n;i++){let r=i/n,o=t+r*e*Math.PI*2,a=Ot(640,ee.summitR-10,Math.pow(r,.92));s.push([ee.x+Math.cos(o)*a,ee.z+Math.sin(o)*a])}return s}var Sx=[{id:"coast",closed:!0,halfW:9,lanes:4,deck:15,pts:[[-440,150],[-405,430],[-470,760],[-545,1040],[-380,1172],[-40,1178],[300,1172],[560,1050],[900,945],[1230,935],[1345,700],[1345,300],[1290,-150],[1140,-600],[820,-800],[500,-560],[250,-250],[-100,-60],[-330,40]]},{id:"summit",halfW:6.5,lanes:2,deck:8,join:"coast",endY:ee.summitY,pts:bx()},{id:"cape",halfW:6.5,lanes:2,deck:7,join:"coast",pts:[[-545,1040],[-660,1180],[-790,1320],[on.x+26,on.z-34]]},{id:"airlink",halfW:6.5,lanes:2,deck:8,join:"coast",pts:[[-440,150],[-505,196],[-572,246],[-606,300]]}];function wx(s,t,e){let n=new Ns(s.pts.map(d=>new I(d[0],0,d[1])),!!s.closed,"centripetal"),i=Math.ceil(n.getLength()/5),r=n.getSpacedPoints(i);s.closed&&r.pop();let o=r.length,a=r.map(d=>({x:d.x,z:d.z,y:0,base:t(d.x,d.z),bridge:!1,nx:0,nz:0,s:0})),l=a.map(d=>d.base<-.6?Math.max(s.deck,d.base):Math.max(d.base,3.2)),c=null,h=s.endY??null;if(s.join){let d=e.find(x=>x.id===s.join),g=1e9;for(let x of d.pts){let p=Math.hypot(x.x-a[0].x,x.z-a[0].z);p<g&&(g=p,c=x.y)}}let u=8;for(let d=0;d<9;d++){let g=new Array(o);for(let x=0;x<o;x++){let p=0;for(let m=-u;m<=u;m++){let y=s.closed?(x+m+o)%o:Math.min(o-1,Math.max(0,x+m));p+=l[y]}g[x]=p/(2*u+1)}if(l=g,c!==null)for(let x=0;x<10;x++)l[x]=Ot(c,l[x],jt(0,10,x));if(h!==null)for(let x=0;x<10;x++)l[o-1-x]=Ot(h,l[o-1-x],jt(0,10,x))}let f=0;for(let d=0;d<o;d++){let g=a[d],x=a[s.closed?(d-1+o)%o:Math.max(0,d-1)],p=a[s.closed?(d+1)%o:Math.min(o-1,d+1)],m=p.x-x.x,y=p.z-x.z,M=Math.hypot(m,y)||1;g.tx=m/M,g.tz=y/M,g.nx=y/M,g.nz=-m/M,g.y=l[d],g.bridge=g.y-g.base>4.2&&g.base<2.5,d>0&&(f+=Math.hypot(g.x-a[d-1].x,g.z-a[d-1].z)),g.s=f}return{id:s.id,halfW:s.halfW,lanes:s.lanes,closed:!!s.closed,pts:a}}function Ex(s){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillStyle="#3b3e46",e.fillRect(0,0,256,256);for(let i=0;i<2600;i++){let r=50+Math.random()*30;e.fillStyle=`rgba(${r},${r+2},${r+8},0.35)`,e.fillRect(Math.random()*256,Math.random()*256,2,2)}e.fillStyle="#e9e6dc",e.fillRect(12,0,5,256),e.fillRect(239,0,5,256),s===4?(e.fillStyle="#e8b64a",e.fillRect(123,0,3.5,256),e.fillRect(130,0,3.5,256),e.fillStyle="#e9e6dc",e.fillRect(68,20,4,96),e.fillRect(184,20,4,96),e.fillRect(68,148,4,96),e.fillRect(184,148,4,96)):(e.fillStyle="#e8b64a",e.fillRect(125,16,6,100),e.fillRect(125,144,6,100));let n=new sn(t);return n.wrapS=oi,n.wrapT=Bn,n.colorSpace=Ae,n.anisotropy=8,n}var jo=class{constructor(t,e){this.roads=[];let n=Sx.slice();e&&e-44>1010&&n.push({id:"pier",halfW:6.5,lanes:2,deck:7,join:"coast",pts:[[900,945],[893,990],[884,(990+e-44)/2],[880,e-44]]});for(let i of n)this.roads.push(wx(i,t,this.roads));this.cell=32,this.hash=new Map;for(let i of this.roads){let r=i.pts,o=r.length,a=i.closed?o:o-1;for(let l=0;l<a;l++){let c=r[l],h=r[(l+1)%o];if(c.bridge&&h.bridge)continue;let u=i.halfW+2,f=Math.floor((Math.min(c.x,h.x)-u)/this.cell),d=Math.floor((Math.max(c.x,h.x)+u)/this.cell),g=Math.floor((Math.min(c.z,h.z)-u)/this.cell),x=Math.floor((Math.max(c.z,h.z)+u)/this.cell),p={ax:c.x,az:c.z,bx:h.x,bz:h.z,w:i.halfW};for(let m=g;m<=x;m++)for(let y=f;y<=d;y++){let M=y*4096+m,v=this.hash.get(M);v||this.hash.set(M,v=[]),v.push(p)}}}}surfaceAt(t,e){let n=this.hash.get(Math.floor(t/this.cell)*4096+Math.floor(e/this.cell));if(!n)return 0;let i=0;for(let r=0;r<n.length;r++){let o=n[r],a=o.bx-o.ax,l=o.bz-o.az,c=((t-o.ax)*a+(e-o.az)*l)/(a*a+l*l);c=c<0?0:c>1?1:c;let h=Math.hypot(t-o.ax-a*c,e-o.az-l*c);if(h<o.w+.9){let u=h<o.w-.3?1:(o.w+.9-h)/1.2;u>i&&(i=u)}}return i}buildMeshes(t){let e=new ue,n={2:[],4:[]};for(let i of this.roads)n[i.lanes].push(i);for(let i of[4,2]){let r=[],o=[],a=[];for(let u of n[i]){let f=u.pts,d=f.length,g=u.closed?d+1:d,x=r.length/3,p=f[d-1].s+5;for(let m=0;m<g;m++){let y=f[m%d],M=m===d?p:y.s;for(let v=0;v<5;v++){let P=(v-2)/2,E=y.x+y.nx*P*u.halfW,T=y.z+y.nz*P*u.halfW,R=y.bridge?y.y+tn:Math.max(t.heightAt(E,T),y.y-.4)+tn;r.push(E,R,T),o.push(v/4,M/24)}if(m>0){let v=x+(m-1)*5,P=x+m*5;for(let E=0;E<4;E++)a.push(v+E,v+E+1,P+E,P+E,v+E+1,P+E+1)}}}let l=new Vt;l.setAttribute("position",new wt(r,3)),l.setAttribute("uv",new wt(o,2)),l.setIndex(a),l.computeVertexNormals();let c=new we({map:Ex(i),polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}),h=new mt(l,c);h.receiveShadow=!0,h.matrixAutoUpdate=!1,e.add(h)}return e}buildBridges(t,e){let n=[],a=[],l=null;for(let u of this.roads){let f=u.pts,d=f.length,g=[],x=()=>{if(g.length>1){let p=g[g.length-1].s-g[0].s,m=g[g.length>>1],y=Math.hypot(m.x-Te.x,m.z-(Te.z+Te.rz*.52));u.id==="coast"&&p>200&&(!l||y<l.dist)&&(l={run:g.slice(),len:p,road:u,dist:y});let M=1e9;for(let v=0;v<g.length-1;v++){let P=g[v],E=g[v+1],T=(P.x+E.x)/2,R=(P.z+E.z)/2,S=Math.hypot(E.x-P.x,E.z-P.z),b=Math.atan2(E.x-P.x,E.z-P.z),L=P.y+tn,N=E.y+tn,F=u.halfW+.9;t.add({x:T,z:R,hx:F,hz:S/2+.35,yaw:b,y0:Math.min(L,N)-1.5,y1:L,y2:N,kind:"deck",quiet:!0});let V=-Math.atan2(N-L,S);n.push({x:T,y:(L+N)/2-1,z:R,sx:F*2,sy:1.5,sz:S+.5,yaw:b,pitch:V,color:12170410});for(let G of[-1,1]){let et=Math.cos(b)*G*(F-.3),z=-Math.sin(b)*G*(F-.3);t.add({x:T+et,z:R+z,hx:.32,hz:S/2+.35,yaw:b,y0:Math.min(L,N)-1.5,y1:L+.95,y2:N+.95,kind:"rail",quiet:!0}),n.push({x:T+et,y:(L+N)/2+.47,z:R+z,sx:.5,sy:.95,sz:S+.5,yaw:b,pitch:V,color:14209734})}M+=S;let J=e.heightAt(T,R);if(M>44&&(L+N)/2-J>3){M=0;let G=(L+N)/2-1.5,et=J-2;n.push({x:T,y:(G+et)/2,z:R,sx:F*1.3,sy:G-et,sz:2.6,yaw:b,pitch:0,color:5593183}),t.add({x:T,z:R,hx:F*.65,hz:1.3,yaw:b,y0:et,y1:G,kind:"pier"})}}}g=[]};for(let p=0;p<d;p++)f[p].bridge?g.push(f[p]):x();x()}let c=[];if(this.bayBridge=null,l){let u=l.run,f=l.road.halfW+2.6,d=M=>u[Math.round(M*(u.length-1))],g=78,x=[d(.27),d(.73)];for(let M of x){let v=Math.atan2(M.tx,M.tz),P=e.heightAt(M.x,M.z)-2;for(let E of[-1,1]){let T=M.x+M.nx*E*f,R=M.z+M.nz*E*f;n.push({x:T,y:(g+P)/2,z:R,sx:3.2,sy:g-P,sz:4.4,yaw:v,pitch:0,color:13191226}),t.add({x:T,z:R,hx:1.6,hz:2.2,yaw:v,y0:P,y1:g,kind:"tower"}),a.push([T,g+1.2,R])}for(let E of[g-3,M.y+30,M.y-4])n.push({x:M.x,y:E,z:M.z,sx:f*2,sy:E<M.y?3:2.4,sz:3.2,yaw:v,pitch:0,color:13191226}),E>M.y&&t.add({x:M.x,z:M.z,hx:f,hz:1.6,yaw:v,y0:E-1.2,y1:E+1.2,kind:"tower"})}let p=Math.round(.27*(u.length-1)),m=Math.round(.73*(u.length-1));for(let M of[-1,1]){let v=[];for(let P=0;P<u.length;P++){let E=u[P],T;if(P<=p)T=Ot(E.y+2,g-2,Math.pow(P/p,1.7));else if(P>=m)T=Ot(E.y+2,g-2,Math.pow((u.length-1-P)/(u.length-1-m),1.7));else{let R=(P-p)/(m-p)*2-1;T=Ot(E.y+7,g-2,R*R)}v.push(new I(E.x+E.nx*M*f,T,E.z+E.nz*M*f))}c.push(v)}let y=d(.5);this.bayBridge={x:y.x,z:y.z,y:y.y,yaw:Math.atan2(y.tx,y.tz),halfW:l.road.halfW,len:l.len}}let h=new ue;if(n.length){let u=new Pe(1,1,1).toNonIndexed(),f=[],d=[],g=[],x=new Xt,p=new pe,m=new Ce,y=new I,M=new I,v=new ut,P=u.attributes.position,E=u.attributes.normal;for(let S of n){m.set(S.pitch,S.yaw,0,"YXZ"),p.setFromEuler(m),x.compose(y.set(S.x,S.y,S.z),p,M.set(S.sx,S.sy,S.sz)),v.set(S.color);for(let b=0;b<P.count;b++)y.fromBufferAttribute(P,b).applyMatrix4(x),M.fromBufferAttribute(E,b).applyQuaternion(p),f.push(y.x,y.y,y.z),d.push(M.x,M.y,M.z),g.push(v.r,v.g,v.b)}let T=new Vt;T.setAttribute("position",new wt(f,3)),T.setAttribute("normal",new wt(d,3)),T.setAttribute("color",new wt(g,3));let R=new mt(T,new we({vertexColors:!0}));R.castShadow=R.receiveShadow=!0,R.matrixAutoUpdate=!1,h.add(R)}if(c.length){let u=new we({color:13191226}),f=[];for(let m of c){let y=new mt(new Co(new Ns(m),90,.38,5,!1),u);y.matrixAutoUpdate=!1,h.add(y)}let d=l.run,g=l.road.halfW+2.6;for(let m=3;m<d.length-3;m+=3)for(let y=0;y<2;y++){let M=c[y][m],v=y?1:-1;f.push(M.x,M.y,M.z,d[m].x+d[m].nx*v*(g-1.6),d[m].y+1,d[m].z+d[m].nz*v*(g-1.6))}let x=new Vt;x.setAttribute("position",new wt(f,3));let p=new Ds(x,new Wi({color:14198684,transparent:!0,opacity:.75}));p.matrixAutoUpdate=!1,h.add(p)}return this.beaconPositions=a,h}};var ji=class{constructor(){this.boxes=[],this.cell=64,this.grid=new Map}add(t){t.yaw=t.yaw||0,t.c=Math.cos(t.yaw),t.s=Math.sin(t.yaw),t.y2===void 0&&(t.y2=t.y1),t.curve=t.curve||1,t.top=Math.max(t.y1,t.y2),t.id=this.boxes.length,this.boxes.push(t);let e=Math.abs(t.c)*t.hx+Math.abs(t.s)*t.hz,n=Math.abs(t.s)*t.hx+Math.abs(t.c)*t.hz,i=6,r=Math.floor((t.x-e-i)/this.cell),o=Math.floor((t.x+e+i)/this.cell),a=Math.floor((t.z-n-i)/this.cell),l=Math.floor((t.z+n+i)/this.cell);for(let c=a;c<=l;c++)for(let h=r;h<=o;h++){let u=h*4096+c,f=this.grid.get(u);f||this.grid.set(u,f=[]),f.push(t)}return t}near(t,e){return this.grid.get(Math.floor(t/this.cell)*4096+Math.floor(e/this.cell))}static topAt(t,e){if(t.y1===t.y2)return t.y1;let n=(e+t.hz)/(2*t.hz);return n=n<0?0:n>1?1:n,t.y1+(t.y2-t.y1)*(t.curve===1?n:Math.pow(n,t.curve))}};var ta=class extends Ti{constructor(){super();let t=new Pe;t.deleteAttribute("uv");let e=new xn({side:ze}),n=new xn,i=new Bs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new mt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new mt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new mt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new mt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new mt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new mt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new mt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let f=new mt(t,Ws(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let d=new mt(t,Ws(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new mt(t,Ws(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new mt(t,Ws(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new mt(t,Ws(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new mt(t,Ws(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ws(s){let t=new Qt;return t.color.setScalar(s),t}var ia={sunset:{label:"Golden hour",elev:.2,az:Jo,sun:"#ffae6b",sunI:2.9,hemiSky:"#b4c0ee",hemiGround:"#c79a78",hemiI:1.7,zenith:"#25427f",mid:"#e88f78",horizon:"#ffcf96",glow:"#ff9a4d",disc:9,fog:"#eeb48e",fogD:205e-6,deep:"#144a63",shallow:"#3fa7a3",foam:"#ffe9d6",cloud:"#ffd9c2",cloudDark:"#c97f86",exposure:1,windows:.85,stars:0,bloom:.5,bloomT:2.3,lamps:1},day:{label:"Clear day",elev:.86,az:Jo-.5,sun:"#fff3de",sunI:2.7,hemiSky:"#bcd4ff",hemiGround:"#a39d84",hemiI:1.2,zenith:"#2a66c4",mid:"#78b1ea",horizon:"#d3e9f7",glow:"#fff1cf",disc:9,fog:"#cfe3f3",fogD:15e-5,deep:"#0f5c8a",shallow:"#3fc2bb",foam:"#ffffff",cloud:"#ffffff",cloudDark:"#b9c8de",exposure:.95,windows:.12,stars:0,bloom:.32,bloomT:2.8,lamps:0},night:{label:"Night flight",elev:.62,az:Jo+2.1,sun:"#9fb6ff",sunI:.8,hemiSky:"#4a5c9c",hemiGround:"#232838",hemiI:.95,zenith:"#040817",mid:"#0c1736",horizon:"#263763",glow:"#5a6fb5",disc:3.5,fog:"#141d3a",fogD:19e-5,deep:"#050f24",shallow:"#123a55",foam:"#b7c8ee",cloud:"#3a4672",cloudDark:"#1a2140",exposure:1.15,windows:2.3,stars:1,bloom:.75,bloomT:1,lamps:1.6}},Xs=["sunset","day","night"],ea=["sun","hemiSky","hemiGround","zenith","mid","horizon","glow","fog","deep","shallow","foam","cloud","cloudDark"],Xc=["elev","az","sunI","hemiI","disc","fogD","exposure","windows","stars","bloom","bloomT","lamps"],Tx=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Ax=`
uniform vec3 uZenith, uMid, uHorizon, uGlow, uSunDir, uSunColor, uFog;
uniform float uDisc, uStars;
varying vec3 vDir;
float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
void main() {
  vec3 d = normalize(vDir);
  float y = max(d.y, 0.0);
  float t = pow(y, 0.52);
  vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.34, t));
  col = mix(col, uZenith, smoothstep(0.22, 0.95, t));
  float sd = max(dot(d, uSunDir), 0.0);
  float horizonBand = 1.0 - smoothstep(0.0, 0.38, y);
  col += uGlow * (pow(sd, 5.0) * 0.42 * (0.35 + horizonBand) + pow(sd, 40.0) * 0.5);
  col += uSunColor * (smoothstep(0.99935, 0.9997, sd) * uDisc + pow(sd, 900.0) * 1.6);
  if (uStars > 0.01) {
    vec3 sp = d * 170.0, g = floor(sp), f = fract(sp) - 0.5;
    float h = hash(g);
    float tw = step(0.9968, h) * smoothstep(0.4, 0.04, length(f)) * smoothstep(0.02, 0.25, d.y);
    col += vec3(0.85, 0.92, 1.0) * tw * uStars * (1.2 + 2.6 * hash(g + 7.0));
  }
  col = mix(col, uFog, smoothstep(0.0, -0.06, d.y));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,na=class{constructor(t,e){this.scene=t,this.renderer=e,this.v={sunDir:new I};for(let o of ea)this.v[o]=new ut;this.from=null,this.to=null,this.t=1,this.name="sunset",this.uniforms={uZenith:{value:this.v.zenith},uMid:{value:this.v.mid},uHorizon:{value:this.v.horizon},uGlow:{value:this.v.glow},uSunDir:{value:this.v.sunDir},uSunColor:{value:this.v.sun},uFog:{value:this.v.fog},uDisc:{value:8},uStars:{value:0}};let n=new _e({vertexShader:Tx,fragmentShader:Ax,uniforms:this.uniforms,side:ze,depthWrite:!1,depthTest:!0,fog:!1});this.dome=new mt(new Ai(1,32,16),n),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,t.add(this.dome),this.sun=new Uo(16777215,3),this.sun.castShadow=!0;let i=this.sun.shadow;i.mapSize.set(2048,2048),i.camera.near=1,i.camera.far=520,i.bias=-5e-4,i.normalBias=.06,this.setShadowRange(70),t.add(this.sun,this.sun.target),this.hemi=new Lo(16777215,8947848,1),t.add(this.hemi),t.fog=new So(16777215,2e-4),this.clouds=this.buildClouds(),t.add(this.clouds),this.pmrem=new Ls(e),this.envScene=new Ti;let r=new mt(this.dome.geometry,n);r.scale.setScalar(900),this.envScene.add(r),this.envRT=null,this.setTime("sunset",!0)}setShadowRange(t){let e=this.sun.shadow.camera;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.updateProjectionMatrix(),this.shadowRange=t}buildClouds(){let t=Ji(77),e=new Yi(1,1);this.cloudMat=new we({color:16777215,emissive:0,flatShading:!0,fog:!1});let n=[];for(let l=0;l<46;l++){let c=t()*Math.PI*2,h=500+t()*3600,u=Math.cos(c)*h,f=Math.sin(c)*h,d=380+t()*380,g=40+t()*70,x=4+Math.floor(t()*4);for(let p=0;p<x;p++)n.push({x:u+(t()-.5)*g*3.4,y:d+(t()-.3)*g*.4,z:f+(t()-.5)*g*1.6,sx:g*(.7+t()*.8),sy:g*(.32+t()*.25),sz:g*(.6+t()*.6),r:t()*3})}let i=new En(e,this.cloudMat,n.length),r=new Xt,o=new pe,a=new Ce;return n.forEach((l,c)=>{o.setFromEuler(a.set(0,l.r,0)),r.compose(new I(l.x,l.y,l.z),o,new I(l.sx,l.sy,l.sz)),i.setMatrixAt(c,r)}),i.frustumCulled=!1,i}setTime(t,e=!1){let n=ia[t];if(n){this.name=t,this.to={},this.from={};for(let i of ea)this.to[i]=new ut(n[i]),this.from[i]=this.v[i].clone();for(let i of Xc)this.to[i]=n[i],this.from[i]=this.v[i]??n[i];if(this.t=e?1:0,this.studio){this.t=1;for(let i of ea)this.v[i].copy(this.to[i]);for(let i of Xc)this.v[i]=this.to[i];this.from=this.to,this.refreshEnv(),this.scene.environment=this.studioEnv.texture;return}this.apply(this.t),e&&this.refreshEnv()}}apply(t){let e=this.v,n=t*t*(3-2*t);for(let r of ea)e[r].copy(this.from[r]).lerp(this.to[r],n);for(let r of Xc)e[r]=Ot(this.from[r],this.to[r],n);let i=Math.cos(e.elev);e.sunDir.set(i*Math.cos(e.az),Math.sin(e.elev),i*Math.sin(e.az)).normalize(),this.uniforms.uDisc.value=e.disc,this.uniforms.uStars.value=e.stars,this.sun.color.copy(e.sun),this.sun.intensity=e.sunI,this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround),this.hemi.intensity=e.hemiI,this.scene.fog.color.copy(e.fog),this.scene.fog.density=e.fogD,this.cloudMat.color.copy(e.cloud),this.cloudMat.emissive.copy(e.cloudDark).multiplyScalar(.55),this.renderer.toneMappingExposure=e.exposure}refreshEnv(){let t=this.envRT,e=this.uniforms.uDisc.value;this.uniforms.uDisc.value=Math.min(e,4),this.envRT=this.pmrem.fromScene(this.envScene,.02,1,2e3),this.uniforms.uDisc.value=e,this.scene.environment=this.envRT.texture,t&&t.dispose()}setStudio(t){t!==this.studio&&(this.studio=t,t?(this.studioEnv||(this.studioEnv=this.pmrem.fromScene(new ta,.04)),this.scene.environment=this.studioEnv.texture,this.scene.environmentIntensity=.5,this.sun.color.set(16777215),this.sun.intensity=.5,this.hemi.color.set(14673650),this.hemi.groundColor.set(1447708),this.hemi.intensity=.45,this.renderer.toneMappingExposure=.92):(this.apply(this.t),this.scene.environmentIntensity=1,this.envRT&&(this.scene.environment=this.envRT.texture)))}update(t,e,n){this.t<1&&!this.studio&&(this.t=Math.min(1,this.t+t/1.6),this.apply(this.t),this.t>=1&&this.refreshEnv()),this.dome.position.copy(e.position),this.dome.scale.setScalar(e.far*.9),this.clouds.rotation.y+=t*.0012;let i=this.shadowRange,r=2*i/this.sun.shadow.mapSize.x,o=Math.round(n.x/r)*r,a=Math.round(n.y/r)*r,l=Math.round(n.z/r)*r;this.sun.target.position.set(o,a,l),this.sun.position.set(o,a,l).addScaledVector(this.v.sunDir,260)}};var Rx=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Cx=`
uniform float uTime, uFogDensity, uSize;
uniform vec3 uSunDir, uSunColor, uDeep, uShallow, uHorizon, uZenith, uFogColor, uFoam;
uniform sampler2D uHeight;
varying vec3 vWorld;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
}
float waveH(vec2 p) {
  float t = uTime;
  float h = sin(dot(p, vec2(0.08, 0.05)) + t * 0.9) * 0.5;
  h += sin(dot(p, vec2(-0.045, 0.11)) + t * 1.2) * 0.35;
  h += sin(dot(p, vec2(0.21, -0.17)) + t * 1.9) * 0.14;
  h += (noise(p * 0.33 + vec2(t * 0.3, -t * 0.2)) - 0.5) * 0.4;
  return h;
}
void main() {
  vec2 p = vWorld.xz;
  vec3 toCam = cameraPosition - vWorld;
  float dist = length(toCam);
  vec3 V = toCam / dist;
  float e = 0.4 + dist * 0.004;
  float h0 = waveH(p), hx = waveH(p + vec2(e, 0.)), hz = waveH(p + vec2(0., e));
  float bump = mix(0.16, 0.7, smoothstep(2600., 120., dist));
  vec3 n = normalize(vec3((h0 - hx) * bump / e, 1.0, (h0 - hz) * bump / e));
  float fres = 0.03 + 0.97 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 R = reflect(-V, n);
  R.y = abs(R.y);
  vec3 sky = mix(uHorizon, uZenith, pow(clamp(R.y, 0., 1.), 0.5));
  float sd = max(dot(R, uSunDir), 0.);
  sky += uSunColor * pow(sd, 10.) * 0.28;

  vec2 uv = p / uSize + 0.5;
  float inside = step(0., uv.x) * step(uv.x, 1.) * step(0., uv.y) * step(uv.y, 1.);
  float th = texture2D(uHeight, uv).r * 32.0 - 16.0;
  float depth = mix(16.0, max(-th, 0.0), inside);
  vec3 body = mix(uShallow, uDeep, smoothstep(0.0, 8.0, depth));
  vec3 col = mix(body, sky, fres);
  col += uSunColor * (pow(sd, 420.) * 7.0 + pow(sd, 60.) * 0.35);

  float fl = depth + sin(uTime * 1.25 + p.x * 0.11 + p.y * 0.09) * 0.32 - noise(p * 0.55 + uTime * 0.2) * 0.55;
  float foam = smoothstep(1.25, 0.15, fl) * inside;
  col = mix(col, uFoam, foam * 0.85);

  float f = 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
  col = mix(col, uFogColor, f);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function qu(s){let t=new _e({vertexShader:Rx,fragmentShader:Cx,uniforms:{uTime:{value:0},uSize:{value:4e3},uHeight:{value:s},uFogDensity:{value:2e-4},uSunDir:{value:new I(0,1,0)},uSunColor:{value:new ut},uDeep:{value:new ut},uShallow:{value:new ut},uFoam:{value:new ut},uHorizon:{value:new ut},uZenith:{value:new ut},uFogColor:{value:new ut}}}),e=new mt(new Qe(24e3,24e3,1,1).rotateX(-Math.PI/2),t);return e.frustumCulled=!1,e.matrixAutoUpdate=!1,e}var We=class s{constructor(){this.pos=[],this.nor=[],this.col=[],this._m=new Xt,this._q=new pe,this._e=new Ce,this._v=new I,this._s=new I,this._c=new ut,this._n3=new Wt}addGeometry(t,e,n){let i=t.index?t.toNonIndexed():t;i.attributes.normal||i.computeVertexNormals();let r=i.attributes.position,o=i.attributes.normal,a=this._v,l=this._c;this._n3.getNormalMatrix(e);let c=typeof n=="function"?n:null;c||l.set(n);for(let h=0;h<r.count;h++)a.fromBufferAttribute(r,h),c&&l.set(c(a)),a.applyMatrix4(e),this.pos.push(a.x,a.y,a.z),a.fromBufferAttribute(o,h).applyMatrix3(this._n3).normalize(),this.nor.push(a.x,a.y,a.z),this.col.push(l.r,l.g,l.b);return this}matrix(t,e,n,i=1,r=1,o=1,a=0,l=0,c=0){return this._e.set(l,a,c,"YXZ"),this._q.setFromEuler(this._e),this._m.compose(this._v.set(t,e,n),this._q,this._s.set(i,r,o)).clone()}box(t,e,n,i,r,o,a,l=0,c=0,h=0){return this.addGeometry(s.unitBox,this.matrix(t,e,n,i,r,o,l,c,h),a)}cyl(t,e,n,i,r,o,a,l=8,c=0,h=0,u=0){let f=new Ie(i,r,o,l);return this.addGeometry(f,this.matrix(t,e,n,1,1,1,c,h,u),a)}quad(t,e,n,i,r){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=n[0]-t[0],h=n[1]-t[1],u=n[2]-t[2],f=a*u-l*h,d=l*c-o*u,g=o*h-a*c,x=Math.hypot(f,d,g)||1;f/=x,d/=x,g/=x;let p=this._c.set(r);for(let m of[t,e,n,t,n,i])this.pos.push(m[0],m[1],m[2]),this.nor.push(f,d,g),this.col.push(p.r,p.g,p.b);return this}build(t,e=!0){let n=new Vt;n.setAttribute("position",new wt(this.pos,3)),n.setAttribute("normal",new wt(this.nor,3)),n.setAttribute("color",new wt(this.col,3));let i=new mt(n,t||new we({vertexColors:!0}));return i.castShadow=i.receiveShadow=e,i.matrixAutoUpdate=!1,i}};We.unitBox=new Pe(1,1,1).toNonIndexed();var Px=3.2,Ix=3.4,Wn=16;function Lx(s,t){let e=Ji(t),n=512,i=n/Wn,r=document.createElement("canvas"),o=document.createElement("canvas");r.width=r.height=o.width=o.height=n;let a=r.getContext("2d"),l=o.getContext("2d");if(l.fillStyle="#000",l.fillRect(0,0,n,n),s==="A"){a.fillStyle="#ffffff",a.fillRect(0,0,n,n);for(let h=0;h<Wn;h++){a.fillStyle="rgba(0,0,0,0.07)",a.fillRect(0,h*i+i-2,n,2);for(let u=0;u<Wn;u++){let f=u*i+7,d=h*i+6,g=i-14,x=i-13;if(a.fillStyle="#26313f",a.fillRect(f,d,g,x),a.fillStyle="#51657c",a.fillRect(f,d,g,5),a.fillStyle="rgba(255,255,255,0.5)",a.fillRect(f-1,d+x,g+2,2),e()<.34){let p=e();l.fillStyle=p<.6?"#ffc778":p<.88?"#ffe3b8":"#bcd6ff",l.globalAlpha=.55+e()*.45,l.fillRect(f,d,g,x),l.globalAlpha=1}}}}else{a.fillStyle="#8fb0c9",a.fillRect(0,0,n,n);for(let h=0;h<Wn;h++)for(let u=0;u<Wn;u++){let f=u*i,d=h*i,g=.72+e()*.28;a.fillStyle=`rgb(${Math.round(150*g)},${Math.round(186*g)},${Math.round(214*g)})`,a.fillRect(f+1,d+1,i-2,i-8),a.fillStyle="#dfe9f0",a.fillRect(f,d+i-7,i,5),a.fillStyle="#31404f",a.fillRect(f,d,2,i),e()<.24&&(l.fillStyle=e()<.8?"#e8a85c":"#cfe0ff",l.globalAlpha=.3+e()*.4,l.fillRect(f+2,d+1,i-3,i-8),l.globalAlpha=1)}}let c=h=>{let u=new sn(h);return u.wrapS=u.wrapT=Bn,u.colorSpace=Ae,u.anisotropy=4,u};return{map:c(r),emissiveMap:c(o)}}function Dx(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),n=512/Ct.pitch,i=Ct.street/2*n,r=3.2*n;for(let a=0;a<2;a++){let l=a*512;e.save(),e.translate(l,0),e.beginPath(),e.rect(0,0,512,512),e.clip(),e.fillStyle="#3b3e46",e.fillRect(0,0,512,512);for(let h=0;h<3e3;h++){let u=52+Math.random()*26;e.fillStyle=`rgba(${u},${u+2},${u+8},0.3)`,e.fillRect(Math.random()*512,Math.random()*512,2,2)}if(e.fillStyle="#b3aea4",e.fillRect(i,i,512-2*i,512-2*i),e.fillStyle=a===0?"#96938c":"#6f9a57",e.fillRect(i+r,i+r,512-2*(i+r),512-2*(i+r)),a===0){e.strokeStyle="rgba(0,0,0,0.08)",e.lineWidth=1;for(let h=i+r;h<512-i-r;h+=4*n)e.beginPath(),e.moveTo(h,i+r),e.lineTo(h,512-i-r),e.stroke(),e.beginPath(),e.moveTo(i+r,h),e.lineTo(512-i-r,h),e.stroke()}else{e.strokeStyle="#d8c9a3",e.lineWidth=3*n,e.beginPath(),e.moveTo(i+r,i+r),e.lineTo(512-i-r,512-i-r),e.stroke(),e.beginPath(),e.moveTo(512-i-r,i+r),e.lineTo(i+r,512-i-r),e.stroke(),e.fillStyle="#d8c9a3",e.beginPath(),e.arc(512/2,512/2,11*n,0,7),e.fill(),e.fillStyle="#7fa965";for(let h=0;h<60;h++)e.globalAlpha=.5,e.beginPath(),e.arc(i+r+Math.random()*(512-2*i-2*r),i+r+Math.random()*(512-2*i-2*r),4+Math.random()*9,0,7),e.fill();e.globalAlpha=1}e.fillStyle="#e8b64a";for(let h=i+14;h<512-i-14;h+=34)e.fillRect(0,h,2.5,18),e.fillRect(512-2.5,h,2.5,18),e.fillRect(h,0,18,2.5),e.fillRect(h,512-2.5,18,2.5);e.fillStyle="#e9e6dc";let c=4*n;for(let h=5;h<i-4;h+=9)e.fillRect(i+2,h,c,5),e.fillRect(512-i-2-c,h,c,5),e.fillRect(i+2,512-h-5,c,5),e.fillRect(512-i-2-c,512-h-5,c,5),e.fillRect(h,i+2,5,c),e.fillRect(h,512-i-2-c,5,c),e.fillRect(512-h-5,i+2,5,c),e.fillRect(512-h-5,512-i-2-c,5,c);e.restore()}let o=new sn(t);return o.colorSpace=Ae,o.anisotropy=8,o}var Ux=["#efe3cf","#dccab2","#cdbcab","#e6d6c2","#bfae9d","#d9b99e","#d2d8da","#f3eadb","#c9906f","#e2c7a6"],Nx=["#b4d2e4","#9cc0d8","#bfdcd8","#d6c2a4","#a9b8d2","#cfe2ec","#94b6c8"];function Zu(s){let t=Ji(2026),e=new ue,n={A:{pos:[],nor:[],uv:[],col:[]},B:{pos:[],nor:[],uv:[],col:[]}},i=new We,r=[],o=[],a=[],l=[],c=[],h=new ut,u=Ct.y+tn;function f(T,R,S,b,L,N,F,V,J,G,et,z){let lt=Math.hypot(b-R,L-S),ht=Math.max(1,Math.round(lt/Px))/Wn,gt=Math.max(1,Math.round((F-N)/Ix))/Wn;T.pos.push(R,N,S,b,N,L,b,F,L,R,N,S,b,F,L,R,F,S),T.uv.push(et,z,et+ht,z,et+ht,z+gt,et,z,et+ht,z+gt,et,z+gt);for(let Et=0;Et<6;Et++)T.nor.push(V,0,J),T.col.push(G.r,G.g,G.b)}function d(T,R,S,b,L,N,F,V){let J=n[F];h.set(V);let G=Math.floor(t()*Wn)/Wn,et=Math.floor(t()*Wn)/Wn;f(J,T-S,R+b,T+S,R+b,L,N,0,1,h,G,et),f(J,T+S,R+b,T+S,R-b,L,N,1,0,h,G,et),f(J,T+S,R-b,T-S,R-b,L,N,0,-1,h,G,et),f(J,T-S,R-b,T-S,R+b,L,N,-1,0,h,G,et);let z=new ut(V).multiplyScalar(.5).lerp(new ut("#5c6068"),.5);i.box(T,N-.05,R,S*2,.1,b*2,z.getHex()),i.box(T,N-.03,R,S*2-3,.1,b*2-3,z.clone().multiplyScalar(1.25).getHex()),s.add({x:T,z:R,hx:S,hz:b,y0:L-3,y1:N,kind:"building"}),c.push({x:T,z:R,hx:S,hz:b,y:N})}function g(T,R,S,b,L,N){let F=L>70,V=F?t()<.7?"B":"A":t()<.16?"B":"A",J=V==="A"?Ux:Nx,G=J[Math.floor(t()*J.length)];if(F&&Math.min(S,b)>12&&t()<.75){let et=L*(.5+t()*.25);d(T,R,S,b,u,u+et,V,G);let z=4+t()*4;if(d(T,R,S-z,b-z,u+et,u+L,V,G),t()<.4){let lt=z+4+t()*3,ht=10+t()*22;if(Math.min(S,b)-lt>4)return d(T,R,S-lt,b-lt,u+L,u+L+ht,V,G),{x:T,z:R,hx:S-lt,hz:b-lt,top:u+L+ht}}return{x:T,z:R,hx:S-z,hz:b-z,top:u+L}}return d(T,R,S,b,u,u+L,V,G),{x:T,z:R,hx:S,hz:b,top:u+L}}let x=[],p={pos:[],uv:[],idx:[]},m=(Ct.pitch-Ct.street)/2-4;for(let T=0;T<Ct.n;T++)for(let R=0;R<Ct.n;R++){let S=Ct.x0+(R+.5)*Ct.pitch,b=Ct.z0+(T+.5)*Ct.pitch,L=Math.max(Math.abs(R-4),Math.abs(T-4)),N=`${R},${T}`,F=N==="2,6"||N==="7,3",V=N==="6,6"||N==="1,2",J=p.pos.length/3,G=Ct.pitch/2,et=F?.5:0;if(p.pos.push(S-G,u,b-G,S+G,u,b-G,S-G,u,b+G,S+G,u,b+G),p.uv.push(et+.001,1,et+.499,1,et+.001,0,et+.499,0),p.idx.push(J,J+2,J+1,J+1,J+2,J+3),F){l.push({x:S,z:b,r:m});continue}if(V){o.push({x:S,z:b,y:u,plaza:!0});continue}if(L===0){let _t="#8fb7cf";d(S,b,27,27,u,u+70,"B",_t),d(S,b,21,21,u+70,u+170,"B",_t),d(S,b,15,15,u+170,u+246,"B",_t),r.push({x:S,z:b,y:u+246,r:10,name:"Aurora Tower"}),a.push([S+14,u+248,b+14],[S-14,u+248,b-14]),x.push({x:S,z:b,hx:15,hz:15,top:u+246,ring:L});continue}let z=t(),lt=L===1?[88,190]:L===2?[34,92]:L===3?[11,34]:[8,20],ht=()=>lt[0]+t()*(lt[1]-lt[0]),gt=2.5,Et=[];if(L===1&&z<.5||L===2&&z<.25){let _t=m-t()*5;Et.push(g(S,b,_t,_t,ht()*1.1,L))}else if(L<=2&&z<.7||L>2&&z<.3){let _t=m/2-gt/2;t()<.5?Et.push(g(S-_t-gt,b,_t,m,ht(),L),g(S+_t+gt,b,_t,m,ht(),L)):Et.push(g(S,b-_t-gt,m,_t,ht(),L),g(S,b+_t+gt,m,_t,ht(),L))}else if(z<.86||L<=2){let _t=m/2-gt/2;for(let j of[-1,1])for(let dt of[-1,1])Et.push(g(S+j*(_t+gt),b+dt*(_t+gt),_t,_t,ht()*(.7+t()*.5),L))}else{let _t=m/2-gt/2;Et.push(g(S,b-_t-gt,m,_t,ht(),L));for(let j of[-1,1])Et.push(g(S+j*(_t+gt),b+_t+gt,_t,_t,ht()*.8,L))}for(let _t of Et)x.push({..._t,ring:L})}let y=x.filter(T=>T.ring>=1&&T.ring<=2&&Math.min(T.hx,T.hz)>=11).sort((T,R)=>R.top-T.top),M=["Skyline Deck","Harbor View","Midtown Roof"];[y[0],y[Math.floor(y.length/2)],y[y.length-2]].forEach((T,R)=>{T&&r.push({x:T.x,z:T.z,y:T.top,r:Math.min(9,Math.min(T.hx,T.hz)-1.5),name:M[R]})});for(let T of x)T.top>150&&T.ring>0&&a.push([T.x,T.top+1.5,T.z]);let v={};for(let T of["A","B"]){let R=n[T],S=new Vt;S.setAttribute("position",new wt(R.pos,3)),S.setAttribute("normal",new wt(R.nor,3)),S.setAttribute("uv",new wt(R.uv,2)),S.setAttribute("color",new wt(R.col,3));let b=Lx(T,T==="A"?5:9),L=new we({map:b.map,emissiveMap:b.emissiveMap,emissive:16777215,emissiveIntensity:1,vertexColors:!0});v[T]=L;let N=new mt(S,L);N.castShadow=N.receiveShadow=!0,N.matrixAutoUpdate=!1,e.add(N)}e.add(i.build());let P=new Vt;P.setAttribute("position",new wt(p.pos,3)),P.setAttribute("uv",new wt(p.uv,2)),P.setIndex(p.idx),P.computeVertexNormals();let E=new mt(P,new we({map:Dx(),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));return E.receiveShadow=!0,E.matrixAutoUpdate=!1,e.add(E),{group:e,mats:v,pads:r,rampSpots:o,beacons:a,parks:l,tops:x,roofList:c}}function Ju(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Vt,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=$u(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=$u(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function $u(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ve(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function wr(s=8,t=.62,e=.045){let n=[],i=Math.PI*2/s;for(let o=0;o<s;o++){let a=new Tn(1,e,5,10,i*t);a.rotateZ(o*i),n.push(a)}let r=Ju(n);return n.forEach(o=>o.dispose()),r}var Ys=6,Fx=new ut(5,4.6,3.6);function Ku(){let s=new ue,t=oe.y+tn,e=ui.z,n=ui.x-ui.len/2,i=[];for(let Et=0;Et<Ys;Et++){let _t=Le.x+70+(n-90-Le.x-70)*Et/(Ys-1);i.push({x:_t,y:t+6.6,z:e,r:6.2,pulse:0})}let r=wr(10,.7,.05),o=wr(5,.42,.075),a=new Qt({color:16777215,fog:!1,toneMapped:!0}),l=new En(r,a,Ys),c=new En(o,a,Ys);l.frustumCulled=c.frustumCulled=!1,s.add(l,c);let h=document.createElement("canvas");h.width=128,h.height=64;let u=h.getContext("2d");u.fillStyle="#fff",u.beginPath(),u.moveTo(34,6),u.lineTo(70,32),u.lineTo(34,58),u.lineTo(52,58),u.lineTo(88,32),u.lineTo(52,6),u.closePath(),u.fill();let f=new sn(h);f.wrapS=Bn,f.anisotropy=8;let d=n-8-(Le.x+30),g=6;f.repeat.set(d/(g*3),1);let x=new Qt({map:f,color:new ut(1.5,.42,.1),transparent:!0,opacity:.85,blending:Be,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2}),p=new mt(new Qe(d,g).rotateX(-Math.PI/2),x);p.position.set(Le.x+30+d/2,t+.05,e),s.add(p);let m=ui.x,y=ui.z,M=t+ui.h+17,v=new ue;v.position.set(m,M,y);let P=new Qt({color:new ut(4.2,1.3,.5),fog:!1}),E=new mt(new Xi(2.4,4.6,4,1).rotateX(Math.PI),P),T=new mt(wr(12,.55,.04).rotateX(Math.PI/2),new Qt({color:new ut(3.4,3.1,2.6),fog:!1}));T.scale.setScalar(5.2),v.add(E,T);let R=(()=>{let Et=document.createElement("canvas");Et.width=4,Et.height=128;let _t=Et.getContext("2d"),j=_t.createLinearGradient(0,0,0,128);return j.addColorStop(0,"rgba(255,255,255,0)"),j.addColorStop(.75,"rgba(255,255,255,0.55)"),j.addColorStop(1,"rgba(255,255,255,1)"),_t.fillStyle=j,_t.fillRect(0,0,4,128),new sn(Et)})(),S=new Qt({map:R,color:new ut(1.5,.55,.25),transparent:!0,blending:Be,depthWrite:!1,side:Ue,fog:!1}),b=new mt(new Ie(.9,1.6,220,12,1,!0),S);b.position.set(m,M+2+110,y),s.add(v,b);let L=new Xt,N=new pe,F=new pe,V=new I,J=new I,G=new ut,et=new pe().setFromUnitVectors(new I(0,0,1),new I(1,0,0)),z=new I(0,0,1),lt=null,ht=0,gt={group:s,gates:i,passed:-1,update(Et,_t,j){if(ht+=Et,gt.passed=-1,_t&&lt!=null)for(let ft=0;ft<Ys;ft++){let Tt=i[ft];(lt-Tt.x)*(_t.x-Tt.x)<=0&&lt!==_t.x&&Math.hypot(_t.y+.6-Tt.y,_t.z-Tt.z)<Tt.r&&(Tt.pulse=1,gt.passed=ft)}lt=_t?_t.x:null;let dt=1-j*.55;for(let ft=0;ft<Ys;ft++){let Tt=i[ft];Tt.pulse=Math.max(0,Tt.pulse-Et*1.4);let Gt=(.6+Math.pow(Math.max(0,Math.sin(ht*3.1-ft*.85)),6)*1.6)*dt,ae=Tt.r*(1+Tt.pulse*.35);G.setRGB(2.6*Gt,.55*Gt,.16*Gt).lerp(Fx,Tt.pulse),J.set(Tt.x,Tt.y,Tt.z),N.copy(et).multiply(F.setFromAxisAngle(z,ht*.9+ft*.5)),l.setMatrixAt(ft,L.compose(J,N,V.set(ae,ae,ae))),l.setColorAt(ft,G),N.copy(et).multiply(F.setFromAxisAngle(z,-ht*1.7-ft*.5)),c.setMatrixAt(ft,L.compose(J,N,V.setScalar(ae*.86))),c.setColorAt(ft,G)}for(let ft of[l,c])ft.instanceMatrix.needsUpdate=!0;l.instanceColor.needsUpdate=c.instanceColor.needsUpdate=!0,f.offset.x=-(ht*.9)%1,x.opacity=.85*dt,E.rotation.y=ht*1.6,T.rotation.y=-ht*.7,v.position.y=M+Math.sin(ht*2.2)*.9;let Rt=.7+.3*Math.sin(ht*4.4);P.color.setRGB(4.2*Rt,1.3*Rt,.5*Rt),S.opacity=.75*dt}};return gt.update(0,null,0),gt}var zx='"Barlow Condensed", "Arial Narrow", Arial, sans-serif';function ts(s,t,e,n={}){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new sn(i);return r.colorSpace=Ae,r.anisotropy=8,n.repeat&&(r.wrapS=r.wrapT=Bn),r}function Yc(s,t,e,n){s.beginPath(),s.moveTo(t-50*n,e+32*n),s.lineTo(t,e-18*n),s.lineTo(t+50*n,e+32*n),s.lineTo(t+50*n,e+6*n),s.lineTo(t,e-44*n),s.lineTo(t-50*n,e+6*n),s.closePath(),s.fill()}function Qu({terrain:s,roads:t,colliders:e,city:n,pierZ:i}){let r=new ue,o=Ji(4242),a=new We,l=new We,c=[],h=[...n.pads],u=[],f=[],d=[],g=[...n.beacons,...t.beaconPositions||[]],x={kicker:{pos:[],uv:[],idx:[]},launch:{pos:[],uv:[],idx:[]}};function p(C){C.curve=C.curve||1.6;let w=Math.cos(C.yaw),_=Math.sin(C.yaw),D=14,W=x[C.launch?"launch":"kicker"],Y=(nt,ot,ct)=>[C.x+nt*w+ct*_,C.baseY+ot,C.z-nt*_+ct*w],X=nt=>C.h*Math.pow(nt,C.curve),at=W.pos.length/3,K=C.halfW,rt=C.len,St=C.launch?1908260:3159100;for(let nt=0;nt<=D;nt++){let ot=nt/D,ct=-rt/2+ot*rt,st=X(ot);if(W.pos.push(...Y(-K,st,ct),...Y(K,st,ct)),W.uv.push(0,ot*rt/8,1,ot*rt/8),nt>0){let tt=at+(nt-1)*2,It=at+nt*2;W.idx.push(tt,It,tt+1,tt+1,It,It+1);let Pt=ct-rt/D,$=X((nt-1)/D);a.quad(Y(-K,-3,Pt),Y(-K,-3,ct),Y(-K,st,ct),Y(-K,$,Pt),St),a.quad(Y(K,-3,ct),Y(K,-3,Pt),Y(K,$,Pt),Y(K,st,ct),St);let U=-Math.atan2(st-$,rt/D),it=Math.hypot(st-$,rt/D)+.05;for(let H of[-1,1]){let Q=Y(H*(K-.16),(st+$)/2+.1,(ct+Pt)/2);(C.launch?l:a).box(Q[0],Q[1],Q[2],.3,.22,it,C.launch?nt%2?16769730:16730682:nt%2?16118246:2764083,C.yaw,U)}}}return a.quad(Y(-K,-3,rt/2),Y(K,-3,rt/2),Y(K,C.h,rt/2),Y(-K,C.h,rt/2),St),C.collider=e.add({x:C.x,z:C.z,hx:K,hz:rt/2,yaw:C.yaw,y0:C.baseY-3,y1:C.baseY,y2:C.baseY+C.h,curve:C.curve,kind:"ramp",launch:!!C.launch,name:C.name}),C.lipX=C.x+_*rt/2,C.lipZ=C.z+w*rt/2,C.lipY=C.baseY+C.h,c.push(C),C}let m=oe.y+tn;p({...ui,baseY:m,launch:!0,name:"Proving Ground Launch"}),p({x:-1400,z:462,yaw:Math.PI/2,len:14,halfW:5,h:3,baseY:m}),p({x:-1310,z:462,yaw:Math.PI/2,len:20,halfW:5.5,h:5.2,baseY:m}),p({x:-1196,z:462,yaw:Math.PI/2,len:22,halfW:6,h:6,baseY:m}),p({x:-1104,z:462,yaw:-Math.PI/2,len:22,halfW:6,h:6,baseY:m}),p({x:-960,z:470,yaw:Math.PI/2,len:12,halfW:4,h:2.4,curve:1.3,baseY:m}),p({x:-920,z:470,yaw:-Math.PI/2,len:12,halfW:4,h:2.4,curve:1.3,baseY:m}),p({x:-1500,z:300,yaw:.9,len:16,halfW:5,h:4,baseY:m});let y=t.roads[0];for(let[C,w,_]of[[.045,1,3.4],[.34,1,3.6],[.46,-1,3.2],[.58,1,4],[.72,-1,3.4],[.86,1,3.8],[.95,-1,3.2]]){let D=y.pts[Math.floor(C*y.pts.length)];if(D.bridge)continue;let W=Math.atan2(D.tx,D.tz)+(w<0?Math.PI:0);p({x:D.x+D.nx*4.6*w,z:D.z+D.nz*4.6*w,yaw:W,len:17,halfW:3.7,h:_,baseY:D.y+tn})}if(t.bayBridge){let C=t.bayBridge;p({x:C.x+Math.cos(C.yaw)*-4.6,z:C.z-Math.sin(C.yaw)*-4.6,yaw:C.yaw+Math.PI,len:15,halfW:3.6,h:3,baseY:C.y+tn})}let M=Ct.x0+300-ee.x,v=Ct.z0+300-ee.z,P=Math.hypot(M,v);p({x:ee.x+M/P*17,z:ee.z+v/P*17,yaw:Math.atan2(M,v),len:30,halfW:6.5,h:6.5,curve:1.8,baseY:ee.summitY,launch:!0,name:"Summit Send"});for(let C of n.rampSpots){let w=Math.atan2(Ct.x0+4.5*Ct.pitch-C.x,Ct.z0+4.5*Ct.pitch-C.z);p({x:C.x,z:C.z,yaw:Math.round(w/(Math.PI/2))*(Math.PI/2),len:20,halfW:5.5,h:5,baseY:C.y}),h.push({x:C.x+18,z:C.z-18,y:C.y,r:7,name:"Plaza"})}let E=n.tops.filter(C=>C.ring>=2&&C.ring<=3&&Math.min(C.hx,C.hz)>=11&&!n.pads.some(w=>w.x===C.x&&w.z===C.z));for(let C=0;C<4&&C<E.length;C++){let w=E[Math.floor((C+.5)*E.length/4)],_=Math.atan2(Ct.x0+4.5*Ct.pitch-w.x,Ct.z0+4.5*Ct.pitch-w.z),D=Math.round(_/(Math.PI/2))*(Math.PI/2),W=Math.abs(Math.sin(D))>.5?w.hx:w.hz;p({x:w.x+Math.sin(D)*(W-8.5),z:w.z+Math.cos(D)*(W-8.5),yaw:D,len:15,halfW:4,h:3.2,baseY:w.top})}{let w=i-26,_=i+190,D=6.6;e.add({x:880,z:(w+_)/2,hx:8,hz:(_-w)/2,y0:D-1.2,y1:D,kind:"deck",quiet:!0}),a.box(880,D-.6,(w+_)/2,16,1.2,_-w,12160870),a.box(880,D+.03,(w+_)/2,12,.08,_-w-2,13280122);for(let st=w+12;st<_;st+=24)for(let tt of[-1,1])a.box(880+tt*6.5,(D-8)/2-.6,st,1.1,D+8,1.1,7232072);for(let st=w+6;st<_-30;st+=12)for(let tt of[-1,1])a.box(880+tt*7.7,D+1.9,st,.18,3.8,.18,3816772),l.box(880+tt*7.7,D+3.9,st,.5,.5,.5,16767392);let W=Math.max(s.heightAt(880,w-16),1);e.add({x:880,z:w-8,hx:8,hz:8.2,y0:W-3,y1:W,y2:D,kind:"ramp",quiet:!0}),a.box(880,(W+D)/2-.45,w-8,16,.9,16.6,12160870,0,-Math.atan2(D-W,16)),p({x:880,z:_-17,yaw:0,len:30,halfW:6,h:6.5,curve:1.8,baseY:D,launch:!0,name:"Pier Launch"});let Y=910,X=i+70,at=27,K=D+at+5;e.add({x:Y,z:X,hx:22,hz:14,y0:D-1.2,y1:D,kind:"deck",quiet:!0}),a.box(Y,D-.6,X,44,1.2,28,12160870);for(let st of[-1,1])for(let tt of[-1,1])a.box(Y+tt*8,(D+K)/2,X+st*3,.9,Math.hypot(K-D,16)+1,.9,15920610,0,0,tt*Math.atan2(16,K-D));for(let st of[-1,1])e.add({x:Y+st*13,z:X,hx:3,hz:3.6,y0:D,y1:D+11,kind:"prop"});let rt=new ue,St=new We,nt=new We;for(let st of[-1.6,1.6])St.addGeometry(new Tn(at,.35,5,40),St.matrix(0,0,st),15920610),St.addGeometry(new Tn(at*.55,.22,4,32),St.matrix(0,0,st),15920610);let ot=["#e5484d","#f2a33a","#3aa6c9","#f2ede2"];for(let st=0;st<16;st++){let tt=st/16*Math.PI*2;St.box(Math.cos(tt)*at/2,Math.sin(tt)*at/2,0,at,.2,.2,15920610,0,0,tt),nt.box(Math.cos(tt)*at,Math.sin(tt)*at,0,.5,.5,3.6,st%2?16761466:16738906)}rt.add(St.build(null,!1),nt.build(new Qt({vertexColors:!0}),!1)),rt.children.forEach(st=>{st.matrixAutoUpdate=!0});let ct=[];for(let st=0;st<16;st++){let tt=new mt(new Pe(2.6,2.4,2.2),new we({color:ot[st%4]}));rt.add(tt),ct.push(tt)}rt.position.set(Y,K,X),r.add(rt),d.push((st,tt)=>{rt.rotation.z=tt*.07;for(let It=0;It<16;It++){let Pt=It/16*Math.PI*2;ct[It].position.set(Math.cos(Pt)*at,Math.sin(Pt)*at-1.9,0),ct[It].rotation.z=-rt.rotation.z}}),f.push({x:Y,y:K,z:X,r:3.5,name:"wheel hub"})}{let C=m,w=ts(4096,128,($,U,it)=>{$.fillStyle="#454850",$.fillRect(0,0,U,it);for(let H=0;H<14e3;H++){let Q=62+Math.random()*30;$.fillStyle=`rgba(${Q},${Q+2},${Q+8},0.35)`,$.fillRect(Math.random()*U,Math.random()*it,3,2)}$.fillStyle="#ece9df",$.fillRect(0,5,U,3),$.fillRect(0,it-8,U,3);for(let H=240;H<U-700;H+=150)$.fillRect(H,it/2-2,80,4);for(let H=0;H<8;H++)$.fillRect(40,14+H*13.2,120,7);for(let H=0;H<7;H++)$.fillStyle=H%2?"#ece9df":"#ff4a3a",$.save(),$.translate(U-640+H*84,it/2),$.beginPath(),$.moveTo(0,-50),$.lineTo(34,0),$.lineTo(0,50),$.lineTo(26,50),$.lineTo(60,0),$.lineTo(26,-50),$.closePath(),$.fill(),$.restore()}),_=new mt(new Qe(ne.x1-ne.x0,ne.halfW*2).rotateX(-Math.PI/2),new we({map:w,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));_.position.set((ne.x0+ne.x1)/2,C,ne.z);let D=ts(256,256,$=>{$.fillStyle="#a9a69d",$.fillRect(0,0,256,256);for(let U=0;U<1500;U++){let it=150+Math.random()*40;$.fillStyle=`rgba(${it},${it},${it-8},0.25)`,$.fillRect(Math.random()*256,Math.random()*256,3,3)}$.strokeStyle="rgba(60,60,60,0.35)",$.lineWidth=2,$.strokeRect(0,0,256,256)},{repeat:!0}),W=new we({map:D,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),Y=oe.x0+28,X=oe.x1-20;for(let[$,U]of[[oe.z0+10,ne.z-ne.halfW],[ne.z+ne.halfW,oe.z1-10]]){let it=new Qe(X-Y,U-$).rotateX(-Math.PI/2),H=it.attributes.uv;for(let xt=0;xt<H.count;xt++)H.setXY(xt,H.getX(xt)*(X-Y)/24,H.getY(xt)*(U-$)/24);let Q=new mt(it,W);Q.position.set((Y+X)/2,C,($+U)/2),Q.receiveShadow=!0,r.add(Q)}for(let[$,U]of[[Y,ne.x0],[ne.x1,X]]){let it=new Qe(U-$,ne.halfW*2).rotateX(-Math.PI/2),H=it.attributes.uv;for(let xt=0;xt<H.count;xt++)H.setXY(xt,H.getX(xt)*(U-$)/24,H.getY(xt)*ne.halfW/12);let Q=new mt(it,W);Q.position.set(($+U)/2,C,ne.z),Q.receiveShadow=!0,r.add(Q)}_.receiveShadow=!0,r.add(_);for(let $=ne.x0+10;$<ne.x1;$+=28)for(let U of[-1,1])l.box($,C+.14,ne.z+U*(ne.halfW+1.2),.28,.28,.28,$>ne.x1-200?16734780:16771e3);let at=-1250,K=296,rt=76,St=17,nt=15;for(let $ of[-1,1])e.add({x:at,z:K+$*(St+.7),hx:rt/2,hz:.9,y0:C-2,y1:C+nt,kind:"building"}),a.box(at,C+nt/2,K+$*(St+.7),rt,nt,1.6,14275783),a.box(at,C+1.1,K+$*(St+1.56),rt,2.2,.12,13191226);e.add({x:at,z:K,hx:rt/2,hz:St+1.6,y0:C+nt,y1:C+nt+5.5,kind:"building"});let ot=new Ie(St+1.6,St+1.6,rt,14,1,!1,0,Math.PI);a.addGeometry(ot,a.matrix(at,C+nt,K,.32,1,1,0,0,Math.PI/2),12568009);for(let $=-3;$<=3;$++)l.box(at+$*10,C+nt-.3,K,1.6,.25,.5,16773584);for(let $ of[-1432,-1085])e.add({x:$,z:286,hx:30,hz:20,y0:C-2,y1:C+15,kind:"building"}),a.box($,C+7.5,286,60,15,40,14275783),a.box($,C+15.6,286,61,1.2,41,12568009),a.box($,C+5.5,306.1,42,11,.3,9278620),a.box($,C+12.6,306.15,60,1,.3,13191226);e.add({x:-985,z:282,hx:4,hz:4,y0:C-2,y1:C+30,kind:"building"}),e.add({x:-985,z:282,hx:6.5,hz:6.5,y0:C+30,y1:C+36.5,kind:"building"}),a.box(-985,C+15,282,8,30,8,15328472),a.box(-985,C+30.6,282,13.6,1.2,13.6,13191226),a.box(-985,C+33,282,12.4,3.6,12.4,8370633),a.box(-985,C+35.6,282,14,1.6,14,15328472),g.push([-985,C+39,282]),h.push({x:-915,z:300,y:C,r:9,name:"Proving Ground"});let ct=[13191226,3112858,15311419,5016666,15328472];for(let $=0;$<9;$++){let U=-820-$%3*22,it=450+Math.floor($/3)*16,H=1+$*7%3;for(let Q=0;Q<H;Q++)a.box(U,C+1.45+Q*2.9,it,12.2,2.9,2.6,ct[($+Q)%5]);e.add({x:U,z:it,hx:6.1,hz:1.3,y0:C-1,y1:C+H*2.9,kind:"prop"})}let st=[15026253,15901498,3843785,15920610,8150212,3119738];for(let $ of[-1,1]){let U=ne.z+$*52;for(let it=0;it<5;it++){a.box(-700,C+.6+it*1.1,U+$*it*1.6,70,1.2,1.7,it%2?9278620:10988979);for(let H=0;H<34;H++)(H*7+it*3)%5!==0&&a.box(-733+H*2+(it*37+H*11)%7*.1,C+1.75+it*1.1,U+$*it*1.6,.55,1.1,.5,st[(H*5+it*3)%6])}a.box(-700,C+9,U+$*9.5,72,.5,5,2434861,0,0,0);for(let it of[-34,0,34])a.box(-700+it,C+4.5,U+$*11.5,.6,9,.6,2434861);e.add({x:-700,z:U+$*4,hx:35,hz:5.6,y0:C-1,y1:C+6.4,kind:"building"});for(let it=-760;it<-600;it+=8)l.box(it,C+.08,ne.z+$*10.5,4,.12,.25,16734784)}for(let $=0;$<4;$++){let U=-1560+$*16,it=262;a.cyl(U,C+9,it,5,5,18,15921644,14),a.addGeometry(new Ai(5,14,6,0,Math.PI*2,0,Math.PI/2),a.matrix(U,C+18,it),15921644),e.add({x:U,z:it,hx:4.6,hz:4.6,y0:C-1,y1:C+22,kind:"building"})}for(let $=0;$<4;$++)a.box(-1575+$%2*6,C+20,298+Math.floor($/2)*6,.5,40,.5,13191226);for(let $=0;$<5;$++)a.box(-1572,C+6+$*8,301,7,.4,7,13191226);e.add({x:-1572,z:301,hx:3.6,hz:3.6,y0:C-1,y1:C+40,kind:"building"}),g.push([-1572,C+41,301]);let tt=-690;for(let $ of[-1,1])a.box(tt,C+9,ne.z+$*25,1.4,18,1.4,2434861),e.add({x:tt,z:ne.z+$*25,hx:.9,hz:.9,y0:C-1,y1:C+18,kind:"prop"});a.box(tt,C+17.2,ne.z,2,3.6,52,2434861),e.add({x:tt,z:ne.z,hx:1,hz:26,y0:C+15.4,y1:C+19,kind:"prop"});let It=ts(1024,96,($,U,it)=>{$.fillStyle="#101115",$.fillRect(0,0,U,it),$.fillStyle="#ff4a3a",$.fillRect(0,0,U,6),$.fillRect(0,it-6,U,6),$.font=`italic 700 62px ${zx}`,$.textAlign="center",$.textBaseline="middle",$.fillStyle="#fff3e0",$.fillText("FLIGHT  TEST   \u203A\u203A\u203A   FULL  THROTTLE   \u203A\u203A\u203A",U/2,it/2+3)}),Pt=new mt(new Qe(40,3),new Qt({map:It}));Pt.position.set(tt-1.05,C+17.2,ne.z),Pt.rotation.y=-Math.PI/2,r.add(Pt);for(let[$,U]of[[-610,344],[-610,416],[-545,348],[-545,412]])a.box($,C+11,U,.7,22,.7,2434861),l.box($,C+22.4,U,1,2.2,4.4,16773584,U<ne.z?.5:-.5),e.add({x:$,z:U,hx:.6,hz:.6,y0:C-1,y1:C+23,kind:"prop"})}{let C=on.x,w=on.z,_=s.heightAt(C,w);for(let K=0;K<6;K++)a.cyl(C,_+3+K*6,w,3.6-K*.28-.28,3.6-K*.28,6,K%2?13191226:15920610,10);a.cyl(C,_+36.4,w,3.4,3.4,.8,3159100,10),l.addGeometry(new Ie(1.8,1.8,3,8),l.matrix(C,_+38.3,w),16773568),a.addGeometry(new Xi(2.6,2.6,8),a.matrix(C,_+41.1,w),13191226),e.add({x:C,z:w,hx:3.4,hz:3.4,y0:_-3,y1:_+42,kind:"building"});let D=new Ie(.6,9,150,10,1,!0).rotateX(Math.PI/2).translate(0,0,75),W=new Qt({color:16773568,transparent:!0,opacity:.1,blending:Be,depthWrite:!1,side:Ue,fog:!1}),Y=new ue,X=new mt(D,W),at=new mt(D,W);at.rotation.y=Math.PI,Y.add(X,at),Y.position.set(C,_+38.3,w),r.add(Y),d.push((K,rt,St)=>{Y.rotation.y=rt*.5,W.opacity=.03+.1*Math.min(St,1.5),Y.visible=St>.05}),h.push({x:C+22,z:w+4,y:s.heightAt(C+22,w+4),r:7,name:"Lighthouse Cape"})}{let C=ee.x-27,w=ee.z+6,_=ee.summitY;a.cyl(C,_+3,w,8,8.4,6,15328472,12),a.addGeometry(new Ai(8,12,6,0,Math.PI*2,0,Math.PI/2),a.matrix(C,_+6,w),D=>Math.abs(D.x)<1.2&&D.z>0?3159100:16249834),e.add({x:C,z:w,hx:7.4,hz:7.4,y0:_-3,y1:_+13,kind:"building"}),a.box(ee.x-6,_+14,ee.z-36,.5,28,.5,13191226),e.add({x:ee.x-6,z:ee.z-36,hx:.5,hz:.5,y0:_-2,y1:_+28,kind:"prop"}),g.push([ee.x-6,_+28.6,ee.z-36]),h.push({x:ee.x+2,z:ee.z-22,y:_,r:8,name:"Mount Ember Summit"})}{let C=new ue,w=new we({color:16249834}),_=new Pe(1.5,27,.4).translate(0,14.5,0);for(let W=0;W<7;W++){let Y=W*.9+.4,X=70+W*97%230,at=Rn.x+Math.cos(Y)*X,K=Rn.z+Math.sin(Y)*X,rt=s.heightAt(at,K);if(rt<4)continue;a.cyl(at,rt+31,K,1.1,2,62,16249834,8),e.add({x:at,z:K,hx:1.6,hz:1.6,y0:rt-3,y1:rt+62,kind:"prop"});let St=new ue,nt=new mt(new Pe(2.4,2.4,6),w);for(let st=0;st<3;st++){let tt=new mt(_,w);tt.rotation.z=st/3*Math.PI*2,St.add(tt)}St.position.set(0,0,3.4);let ot=new ue;ot.add(nt,St),ot.position.set(at,rt+62.5,K),ot.rotation.y=2.2,C.add(ot);let ct=.7+W%3*.18;d.push((st,tt)=>{St.rotation.z=tt*ct+W}),g.push([at,rt+64.5,K])}r.add(C);let D=s.heightAt(Rn.x,Rn.z);h.push({x:Rn.x,z:Rn.z,y:D,r:8,name:"Wind Farm"})}{let C=Te.x+30,w=Te.z-190,_=3.6;e.add({x:C,z:w,hx:30,hz:13,y0:-4,y1:_,kind:"deck",quiet:!0}),a.box(C,_/2-2,w,60,_+4,26,2829877),a.box(C,_+.02,w,58,.1,24,4014409);for(let D of[-1,1])for(let W of[-1,1])l.box(C+D*29,_+.5,w+W*12,.6,1,.6,16761466);h.push({x:C,z:w,y:_,r:10,name:"Bay Barge",bonus:1.5})}{let C=new We;C.box(0,.5,0,2.6,1.3,8,15920610),C.box(0,6.5,-.4,.2,11,.2,7232072),C.quad([0,1.8,-.7],[0,1.8,-4.4],[0,11.5,-.7],[0,11.5,-.7],16644334),C.quad([0,11.5,-.7],[0,1.8,-4.4],[0,1.8,-.7],[0,1.8,-.7],16644334),C.quad([0,1.8,-.1],[0,10.5,-.1],[0,1.8,3.6],[0,1.8,3.6],16747100),C.quad([0,1.8,3.6],[0,10.5,-.1],[0,1.8,-.1],[0,1.8,-.1],16747100);let w=C.build().geometry,_=new we({vertexColors:!0});[[Te.x-90,Te.z+120],[Te.x+120,Te.z+330],[Te.x-30,Te.z-40],[Te.x+60,Te.z+560],[Te.x-150,Te.z+640],[1240,1500],[300,1640],[-1500,1100],[1640,200]].forEach(([X,at],K)=>{if(s.heightAt(X,at)>-3)return;let rt=new mt(w,_);rt.position.set(X,0,at),rt.rotation.y=K*1.7,r.add(rt),d.push((St,nt)=>{rt.position.y=Math.sin(nt*.9+K)*.25,rt.rotation.z=Math.sin(nt*.7+K*2)*.05})});let W=[["#e5484d","#fdf3df"],["#f2a33a","#2f7f9a"],["#7c5cc4","#fdf3df"],["#2f9a7a","#f2d23a"],["#e5484d","#f2a33a"]];[[Te.x+40,150,Te.z-380],[640,210,60],[260,130,1300],[-620,170,-260],[1340,160,-480]].forEach(([X,at,K],rt)=>{let St=new We,[nt,ot]=W[rt],ct=new Ai(10,12,8);St.addGeometry(ct,St.matrix(0,0,0,1,1.15,1),It=>Math.floor((Math.atan2(It.z,It.x)/(Math.PI*2)+.5)*12)%2?nt:ot),St.addGeometry(new Ie(5.2,1.6,6,12,1,!0),St.matrix(0,-12.4,0),It=>Math.floor((Math.atan2(It.z,It.x)/(Math.PI*2)+.5)*12)%2?nt:ot),St.box(0,-17.4,0,2.2,1.8,2.2,9071178);let st=St.build(new we({vertexColors:!0,side:Ue}),!1);st.matrixAutoUpdate=!0,st.position.set(X,at,K),r.add(st);let tt={x:X,y:at,z:K,r:11.5,name:"balloon"};f.push(tt),d.push((It,Pt)=>{tt.y=at+Math.sin(Pt*.15+rt*2)*9,st.position.y=tt.y,st.rotation.y=Pt*.03+rt})})}let T=[];function R(C,w,_=8){let D=T.length;T.push({name:C,count:w.length,id:D}),w.forEach((W,Y)=>{let X=w[Math.max(0,Y-1)],at=w[Math.min(w.length-1,Y+1)],K=new I(at[0]-X[0],at[1]-X[1],at[2]-X[2]).normalize();u.push({pos:new I(W[0],W[1],W[2]),dir:K,r:_,chain:D,index:Y,cooldown:0,pulse:0})})}R("Liftoff Line",[[-440,50,380],[-310,56,384],[-170,61,394],[-30,66,410],[120,64,430],[280,62,452],[430,70,470]],9);let S=C=>Ct.x0+C*Ct.pitch,b=C=>Ct.z0+C*Ct.pitch,L=Ct.y;if(R("Downtown Slalom",[[S(3),L+38,b(0)+30],[S(3),L+50,b(2)],[S(3),L+62,b(4)],[S(3)+28,L+66,b(5)-12],[S(4)+20,L+70,b(5)],[S(6)-20,L+74,b(5)],[S(6),L+68,b(5)-30],[S(6),L+56,b(3)],[S(6),L+44,b(1)]],7.5),t.bayBridge){let C=t.bayBridge,w=Math.sin(C.yaw),_=Math.cos(C.yaw);R("Bridge Thread",[-.44,-.23,0,.23,.44].map(X=>[C.x+w*X*C.len,C.y+14+(Math.abs(X)<.3?1:0),C.z+_*X*C.len]),7.5);let D=e.boxes.filter(X=>X.kind==="pier"&&Math.hypot(X.x-C.x,X.z-C.z)<140).sort((X,at)=>Math.hypot(X.x-C.x,X.z-C.z)-Math.hypot(at.x-C.x,at.z-C.z)),W=D.length>1?(D[0].x+D[1].x)/2:C.x+w*22,Y=D.length>1?(D[0].z+D[1].z)/2:C.z+_*22;R("Under the Deck",[[W-_*150,6.5,Y+w*150],[W-_*60,6,Y+w*60],[W,6,Y],[W+_*70,6.5,Y-w*70],[W+_*160,9,Y-w*160]],5.6)}{let C=t.roads.find(_=>_.id==="summit"),w=[];for(let _=1;_<=9;_++){let D=C.pts[Math.floor(_/10*C.pts.length)];w.push([D.x,D.y+20,D.z])}w.push([ee.x,ee.summitY+34,ee.z]),R("Summit Climb",w,9)}{let C=[];for(let w=0;w<8;w++){let _=.25+w*.2,D=900;for(;D<2100&&s.heightAt(Math.cos(_)*D,Math.sin(_)*D)>-1.5;)D+=15;C.push([Math.cos(_)*(D+70),7.5,Math.sin(_)*(D+70)])}R("Coast Skimmer",C,7)}R("Hangar Run",[[-1420,oe.y+26,330],[-1330,oe.y+9.5,296],[-1250,oe.y+8,296],[-1170,oe.y+9.5,296],[-1060,oe.y+30,330]],6.2);{let C=[];for(let w=0;w<9;w++){let _=w/9*Math.PI*2;C.push([260+Math.cos(_)*430,420+Math.sin(_*2)*40,60+Math.sin(_)*430])}R("Cloud Nine",C,10)}let N=new Tn(1,.055,6,36),F=new Qt({color:16777215,fog:!1}),V=new En(N,F,u.length);V.frustumCulled=!1;let J=new Fs(.72,1,36),G=new Qt({color:6744319,transparent:!0,opacity:.07,blending:Be,depthWrite:!1,side:Ue,fog:!1}),et=new En(J,G,u.length);et.frustumCulled=!1;let z=new En(wr(6,.5,.04),new Qt({color:new ut(.55,.55,.55),fog:!1}),u.length);z.frustumCulled=!1,r.add(V,et,z);let lt=new pe,ht=0,gt=new Xt,Et=new pe,_t=new I,j=new ut,dt=new I(0,0,1),Rt=new ut(.55,3,3.9),ft=new ut(.1,.16,.22),Tt=new ut(5,4.4,2.8);function kt(C){ht+=C;for(let w=0;w<u.length;w++){let _=u[w];_.cooldown>0&&(_.cooldown-=C),_.pulse=Math.max(0,_.pulse-C*1.6);let D=_.r*(1+_.pulse*.5);Et.setFromUnitVectors(dt,_.dir),gt.compose(_.pos,Et,_t.set(D,D,D)),V.setMatrixAt(w,gt),et.setMatrixAt(w,gt),j.copy(_.cooldown>0?ft:Rt).lerp(Tt,_.pulse),V.setColorAt(w,j),et.setColorAt(w,_.cooldown>0?ft:Rt),Et.multiply(lt.setFromAxisAngle(dt,ht*(w%2?1.1:-1.1)+w)),gt.compose(_.pos,Et,_t.multiplyScalar(.84)),z.setMatrixAt(w,gt),z.setColorAt(w,j)}z.instanceMatrix.needsUpdate=!0,z.instanceColor.needsUpdate=!0,V.instanceMatrix.needsUpdate=!0,et.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0,et.instanceColor.needsUpdate=!0}kt(0);let Gt=ts(128,128,C=>{C.fillStyle="#f0702e",C.fillRect(0,0,128,128),C.fillStyle="#d95c20",C.fillRect(0,0,128,3),C.fillStyle="#fff3e0",Yc(C,64,70,.9)},{repeat:!0}),ae=ts(128,128,C=>{C.fillStyle="#17181d",C.fillRect(0,0,128,128),C.fillStyle="#24262d",C.fillRect(0,0,128,3),C.fillStyle="#7a2b25",Yc(C,64,70,.95)},{repeat:!0}),ie=ts(128,128,C=>{C.fillStyle="#000",C.fillRect(0,0,128,128),C.fillStyle="#ff5a40",Yc(C,64,70,.95)},{repeat:!0}),Me=new we({map:ae,emissiveMap:ie,emissive:16777215,emissiveIntensity:1.6});for(let[C,w]of[["kicker",new we({map:Gt})],["launch",Me]]){let _=x[C],D=new Vt;D.setAttribute("position",new wt(_.pos,3)),D.setAttribute("uv",new wt(_.uv,2)),D.setIndex(_.idx),D.computeVertexNormals();let W=new mt(D,w);W.castShadow=W.receiveShadow=!0,W.matrixAutoUpdate=!1,r.add(W)}let k=ts(256,256,C=>{C.clearRect(0,0,256,256),C.strokeStyle="#fff3e0",C.lineWidth=12,C.beginPath(),C.arc(128,128,116,0,7),C.stroke(),C.strokeStyle="#ff5a40",C.lineWidth=8,C.beginPath(),C.arc(128,128,74,0,7),C.stroke(),C.fillStyle="#fff3e0",C.beginPath(),C.arc(128,128,18,0,7),C.fill();for(let w=0;w<4;w++)C.save(),C.translate(128,128),C.rotate(w*Math.PI/2),C.fillRect(-5,-108,10,26),C.restore()}),cn=new Qt({map:k,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8});for(let C of h){let w=new mt(new Vn(C.r,28).rotateX(-Math.PI/2),cn);w.position.set(C.x,C.y+.06,C.z),w.matrixAutoUpdate=!1,w.updateMatrix(),w.renderOrder=2,r.add(w),C.done=!1}{let C=new Set;for(let ot of t.roads)for(let ct of ot.pts){let st=ot.halfW+16;for(let tt=Math.floor((ct.x-st)/16);tt<=Math.floor((ct.x+st)/16);tt++)for(let It=Math.floor((ct.z-st)/16);It<=Math.floor((ct.z+st)/16);It++)C.add(tt*4096+It)}let w=new We,_=new We,D=new We;for(let ot=0;ot<4;ot++)w.cyl(ot*.22,1+ot*1.9,0,.2-ot*.02,.26-ot*.02,2.1,ot%2?9071178:8084801,5,0,0,-.12);for(let ot=0;ot<7;ot++){let ct=ot/7*Math.PI*2;w.box(.75+Math.sin(ct)*1.5,7.6,Math.cos(ct)*1.5,.9,.1,3.4,ot%2?5216842:4163396,ct,.42)}_.cyl(0,.9,0,.22,.3,1.8,7032634,5),[[2.6,2,3,3107392],[4.3,1.5,2.6,3634503],[5.8,1,2.2,4162128]].forEach(([ot,ct,st,tt])=>_.addGeometry(new Xi(ct,st,6),_.matrix(0,ot,0),tt)),D.cyl(0,1.2,0,.22,.3,2.4,7032634,5),D.addGeometry(new Yi(2.3,0),D.matrix(0,4,0,1,.9,1),6266188),D.addGeometry(new Yi(1.5,0),D.matrix(1.2,3.3,.6),6990165);let W={palm:[],pine:[],round:[]},Y=new I;for(let ot=0;ot<26e3;ot++){let ct=(o()-.5)*3700,st=(o()-.5)*3700,tt=s.heightAt(ct,st);if(tt<2.4||tt>215||ct>Ct.x0-34&&ct<Ct.x1+34&&st>Ct.z0-34&&st<Ct.z1+34||ct>oe.x0-6&&ct<oe.x1+14&&st>oe.z0-6&&st<oe.z1+6||C.has(Math.floor(ct/16)*4096+Math.floor(st/16))||Math.hypot(ct-on.x,st-on.z)<34||Math.hypot(ct-880,st-i)<40||s.normalAt(ct,st,Y).y<.84)continue;let It=Ki(ct*.0045+4,st*.0045-2,3,91),Pt;if(tt<8.5){if(o()>.2)continue;Pt="palm"}else if(tt<42){if(o()>(It-.38)*3.2)continue;Pt=o()<.12?"palm":"round"}else{if(o()>(It-.3)*3.4)continue;Pt=tt>70||o()<.6?"pine":"round"}W[Pt].push([ct,tt,st])}for(let ot of n.parks)for(let ct=0;ct<22;ct++){let st=ot.x+(o()-.5)*2*(ot.r-2),tt=ot.z+(o()-.5)*2*(ot.r-2);Math.hypot(st-ot.x,tt-ot.z)<13||W.round.push([st,Ct.y+tn,tt])}let X=new we({vertexColors:!0,flatShading:!0}),at=new Xt,K=new pe,rt=new Ce,St=new ut,nt=[];for(let[ot,ct]of[["palm",w],["pine",_],["round",D]]){let st=W[ot],tt=new En(ct.build().geometry,X,st.length);st.forEach(([It,Pt,$],U)=>{let it=(ot==="palm"?.95:ot==="pine"?1.25:1.05)*(.75+o()*.7);K.setFromEuler(rt.set((o()-.5)*.08,o()*Math.PI*2,(o()-.5)*.08)),at.compose(Y.set(It,Pt-.15,$),K,new I(it,it*(.85+o()*.35),it)),tt.setMatrixAt(U,at),tt.setColorAt(U,St.setScalar(.82+o()*.36))}),tt.userData.full=st.length,tt.castShadow=!0,tt.receiveShadow=!1,tt.frustumCulled=!1,r.add(tt),nt.push(tt)}r.userData.trees=nt}r.add(a.build());let Jt=new Qt({vertexColors:!0});r.add(l.build(Jt,!1));let Kt=new Vt;Kt.setAttribute("position",new wt(g.flat(),3));let Bt=new mr({color:16726570,size:7,sizeAttenuation:!0,transparent:!0,blending:Be,depthWrite:!1,fog:!1}),me=new Us(Kt,Bt);return me.frustumCulled=!1,r.add(me),{group:r,ramps:c,pads:h,rings:u,chains:T,spheres:f,launchMat:Me,glowMat:Jt,update(C,w,_){for(let W of d)W(C,w,_);kt(C);let D=Math.pow(Math.max(0,Math.sin(w*3.2)),6);Bt.opacity=(.25+.75*D)*Math.min(1,.35+_),Bt.color.setRGB(6,.8,.5),Jt.color.setScalar(.8+_*1.9),Me.emissiveIntensity=.9+_*1.6}}}var sa=class{constructor(t,e){let n=960;for(;n<1900&&Qo(880,n)>.3;)n+=4;this.pierZ=n,this.roads=new jo(Qo,n),this.terrain=new Ko(this.roads.roads),this.colliders=new ji,this.terrainMesh=this.terrain.buildMesh(),t.add(this.terrainMesh),t.add(this.roads.buildMeshes(this.terrain)),t.add(this.roads.buildBridges(this.colliders,this.terrain)),this.city=Zu(this.colliders),t.add(this.city.group),this.props=Qu({terrain:this.terrain,roads:this.roads,colliders:this.colliders,city:this.city,pierZ:n}),t.add(this.props.group),this.guide=Ku(),t.add(this.guide.group),this.sky=new na(t,e),this.water=qu(this.terrain.buildHeightTexture()),t.add(this.water),this.rings=this.props.rings,this.chains=this.props.chains,this.pads=this.props.pads,this.ramps=this.props.ramps,this.spheres=this.props.spheres,this.time=0}ground(t,e,n,i){let r=this.terrain.heightAt(t,n),o=r,a;if(t>Ct.x0&&t<Ct.x1&&n>Ct.z0&&n<Ct.z1||t>oe.x0+28&&t<oe.x1-20&&n>oe.z0+10&&n<oe.z1-10)o+=tn,a="road";else{let c=this.roads.surfaceAt(t,n);o+=tn*c,a=c>.5?"road":r<3.6?"sand":"grass"}i.box=null;let l=this.colliders.near(t,n);if(l)for(let c=0;c<l.length;c++){let h=l[c],u=t-h.x,f=n-h.z,d=u*h.c-f*h.s;if(d<-h.hx||d>h.hx)continue;let g=u*h.s+f*h.c;if(g<-h.hz||g>h.hz)continue;let x=ji.topAt(h,g);x<=e+.55&&x>o&&(o=x,i.box=h,a="road")}return i.h=o,i.surf=a,i.water=o<0,i}update(t,e,n){this.time+=t;let i=this.sky,r=i.v;i.update(t,e,n);let o=this.water.material.uniforms;o.uTime.value=this.time,o.uSunDir.value.copy(r.sunDir),o.uSunColor.value.copy(r.sun).multiplyScalar(Math.min(1.2,r.sunI/2.6)),o.uDeep.value.copy(r.deep),o.uShallow.value.copy(r.shallow),o.uFoam.value.copy(r.foam),o.uHorizon.value.copy(r.horizon),o.uZenith.value.copy(r.zenith),o.uFogColor.value.copy(r.fog),o.uFogDensity.value=r.fogD,this.city.mats.A.emissiveIntensity=r.windows,this.city.mats.B.emissiveIntensity=r.windows*.8,this.props.update(t,this.time,r.lamps),this.guide.update(t,this.guideFocus||null,this.guideDim||0)}};var de={frontZ:1.38,rearZ:-1.34,wheelbase:2.72,trackHalf:.85,rFront:.345,rRear:.362,wFront:.265,wRear:.315,height:1.16,length:4.42},Mn=[{id:"white",name:"Aero White",color:"#cfd1ce",metal:.12,rough:.36,coat:.7,cost:0},{id:"cherry",name:"Cherry Red",color:"#a20d1c",metal:.55,rough:.3,coat:1,cost:1500},{id:"black",name:"Solid Black",color:"#0b0b0d",metal:.4,rough:.22,coat:1,cost:4e3},{id:"silver",name:"Midnight Silver",color:"#42464c",metal:.8,rough:.3,coat:1,cost:8e3},{id:"blue",name:"Deep Blue",color:"#0f2f72",metal:.65,rough:.28,coat:1,cost:13e3},{id:"quick",name:"Quicksilver",color:"#9a9fa6",metal:.95,rough:.2,coat:1,cost:2e4},{id:"stealth",name:"Stealth Grey",color:"#55585d",metal:.3,rough:.5,coat:.4,cost:28e3},{id:"ultra",name:"Ultra Red",color:"#d3101c",metal:.35,rough:.26,coat:1,cost:38e3},{id:"orange",name:"Sunset Orange",color:"#ee5a12",metal:.5,rough:.3,coat:1,cost:5e4},{id:"teal",name:"Aurora Teal",color:"#0f9d93",metal:.7,rough:.26,coat:1,cost:65e3},{id:"violet",name:"Ultraviolet",color:"#4a22b8",metal:.7,rough:.26,coat:1,cost:82e3},{id:"gold",name:"Solar Gold",color:"#c9961c",metal:.95,rough:.24,coat:1,cost:1e5},{id:"matte",name:"Matte Black",color:"#141416",metal:.2,rough:.78,coat:0,cost:125e3},{id:"chrome",name:"Liquid Chrome",color:"#c9ccd2",metal:1,rough:.06,coat:1,cost:15e4}],Cn={wb:je([[-2.2,.62],[-1.34,.8],[0,.84],[1.38,.8],[1.9,.7],[2.22,.46]]),yb:je([[-2.2,.36],[-1.9,.28],[-1.34,.17],[0,.15],[1.38,.15],[2,.16],[2.22,.2]]),ws:je([[-2.2,.8],[-1.34,.965],[-.6,.945],[.6,.935],[1.38,.945],[1.9,.85],[2.22,.54]]),ys:je([[-2.2,.42],[-1.34,.29],[0,.26],[1.38,.26],[2,.25],[2.22,.27]]),wm:je([[-2.2,.865],[-1.8,.985],[-1.34,1.03],[-.75,.99],[0,.93],[.75,.945],[1.38,.995],[1.9,.89],[2.22,.58]]),ym:je([[-2.2,.63],[-1.34,.66],[-.75,.6],[0,.52],[.75,.5],[1.38,.56],[1.9,.46],[2.22,.36]]),wsh:je([[-2.2,.8],[-1.34,.935],[-.75,.92],[0,.9],[.75,.895],[1.38,.885],[1.9,.76],[2.22,.46]]),ysh:je([[-2.2,.8],[-1.8,.89],[-1.34,.925],[-.75,.9],[0,.855],[.75,.815],[1.38,.805],[1.9,.63],[2.22,.44]]),wg:je([[-2.2,.7],[-1.34,.75],[-.75,.8],[0,.815],[.75,.8],[.95,.78],[1.38,.68],[1.9,.55],[2.22,.33]]),yg:je([[-2.2,.855],[-1.45,.965],[-.75,.915],[0,.875],[.75,.83],[.95,.815],[1.38,.735],[1.9,.61],[2.22,.44]]),wr:je([[-2.2,.42],[-1.45,.5],[-.9,.58],[-.05,.63],[.3,.6],[.95,.52],[1.38,.42],[1.9,.33],[2.22,.2]])},td=s=>t=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0])return Ot(s[e-1][1],s[e][1],(t-s[e-1][0])/(s[e][0]-s[e-1][0]));return s[s.length-1][1]},Bx=je([[-1.45,.985],[-.9,1.085],[-.35,1.15],[-.05,1.16],[.3,1.13]]),Ox=je([[.95,.835],[1.4,.74],[1.85,.62],[2.1,.52],[2.22,.44]]),kx=td([[-2.2,.868],[-2.1,.898],[-1.9,.908],[-1.45,.985]]),Hx=s=>s<-1.45?kx(s):s<=.3?Bx(s):s<.95?Ot(1.13,.835,(s-.3)/.65):Ox(s),Vx=je([[-1.45,.975],[-.9,1.06],[-.35,1.115],[-.05,1.125],[.3,1.1]]),Gx=je([[.95,.83],[1.38,.732],[1.85,.614],[2.1,.518],[2.22,.44]]),Wx=td([[-2.2,.864],[-2.1,.892],[-1.9,.902],[-1.45,.975]]),Xx=s=>s<-1.45?Wx(s):s<=.3?Vx(s):s<.95?Ot(1.1,.83,(s-.3)/.65):Gx(s),$c=-1.45,Jc=.95,Jn=-2.2,Er=2.22,ed=[{z:de.frontZ,r:de.rFront,a:de.rFront+.052},{z:de.rearZ,r:de.rRear,a:de.rRear+.052}];function Zc(s){let t=[[0,Cn.yb(s)],[Cn.wb(s),Cn.yb(s)],[Cn.ws(s),Cn.ys(s)],[Cn.wm(s),Cn.ym(s)],[Cn.wsh(s),Cn.ysh(s)],[Cn.wg(s),Cn.yg(s)],[Cn.wr(s),Xx(s)],[0,Hx(s)]];for(let e of ed){let n=s-e.z;if(Math.abs(n)<e.a){let i=e.r+Math.sqrt(e.a*e.a-n*n);t[1][0]=.6,t[1][1]=Math.max(t[1][1],Math.min(i,t[5][1]-.09)),t[2][1]=Math.max(t[2][1],i),t[2][0]=Math.max(t[2][0],t[3][0]-.012),t[3][1]=Math.max(t[3][1],i+.03),t[4][1]=Math.max(t[4][1],t[3][1]+.03)}}return t}function oa(s,t,e){let n=Math.min(6,Math.floor(t)),i=t-n;if(n<2)return e[0]=Ot(s[n][0],s[n+1][0],i),e[1]=Ot(s[n][1],s[n+1][1],i),e;let r=n===2?s[2]:s[n-1],o=s[n],a=s[n+1],l=n===6?[-s[6][0],s[6][1]]:s[n+2],c=i*i,h=c*i;for(let u=0;u<2;u++)e[u]=.5*(2*o[u]+(a[u]-r[u])*i+(2*r[u]-5*o[u]+4*a[u]-l[u])*c+(-r[u]+3*o[u]-3*a[u]+l[u])*h);return e}var ju=(s,t,e)=>Math.max(0,1-Math.abs(s-t)/e);function aa(s,t,e){let n=Lt((t-5)/2,0,1),i=n*(2-n),r=.13*i*ju(s,Jc,.55)-.15*i*ju(s,$c,.6);return r-=.4*jt(1.45,Er,s)*e*e,r+=.17*jt(-1.7,Jn,s)*e*e,s+r}var an=[0,0];function Yx(s,t,e,n=0,i=new I){let r=Zc(s);oa(r,t,an);let o=an[0],a=an[1];if(i.set(o*e,a,aa(s,t,o)),n){oa(r,Math.min(7,t+.02),an);let c=new I(an[0]*e-i.x,an[1]-a,aa(s,t+.02,an[0])-i.z);oa(Zc(s+.02),t,an);let h=new I(an[0]*e-i.x,an[1]-a,aa(s+.02,t,an[0])-i.z),u=c.cross(h).normalize();(u.x*e<0&&Math.abs(u.x)>.2||Math.abs(u.x)<=.2&&u.y<0)&&u.negate(),i.addScaledVector(u,n)}return i}function qx(){let s=[];for(let n=Jn;n<Er-.03;n+=.105)s.push(n);s.push(Er,Er-.045,Jn+.04);let t=[$c,Jc,.3];for(let n of ed)for(let i=0;i<=12;i++)t.push(n.z+n.a*Math.cos(i/12*Math.PI)*.9999);let e=s.filter(n=>!t.some(i=>Math.abs(i-n)<.04)).concat(t);return e.sort((n,i)=>n-i),e}var es=[0,1,2,2.5,3,3.5,4,4.5,5,5.34,5.67,6,6.34,6.67,7];function Zx(){let s=qx(),t=es.length,e=[];for(let u=0;u<s.length;u++){let f=Zc(s[u]),d=[];for(let g=0;g<t;g++)oa(f,es[g],an),d.push([an[0],an[1],aa(s[u],es[g],an[0])]);e.push(d)}let n={paint:{pos:[],idx:[],map:new Map},glass:{pos:[],idx:[],map:new Map},trim:{pos:[],idx:[],map:new Map}},i=(u,f,d,g)=>{let x=e[f][d],p=f*1e3+d*4+(x[0]<1e-5?0:g+2),m=u.map.get(p);return m===void 0&&(m=u.pos.length/3,u.pos.push(x[0]*g,x[1],x[2]),u.map.set(p,m)),m},r=(u,f,d,g)=>(u.pos.push(f,d,g),u.pos.length/3-1),o=(u,f,d,g,x)=>{d===g||g===x||d===x||(f?u.idx.push(d,x,g):u.idx.push(d,g,x))},a=Math.floor(s.length/2),l=3,c=(u,f,d,g)=>{let x=(f[0]-u[0])*g,p=f[1]-u[1],m=f[2]-u[2],y=(d[0]-u[0])*g,M=d[1]-u[1],v=d[2]-u[2];return[p*v-m*M,m*y-x*v,x*M-p*y]};for(let u of[1,-1]){let f=c(e[a][l],e[a+1][l],e[a+1][l+1],u)[0]*u<0;for(let d=0;d<s.length-1;d++){let g=(s[d]+s[d+1])/2;for(let x=0;x<t-1;x++){let p=(es[x]+es[x+1])/2,m=p<2?n.trim:p<5?n.paint:g>$c&&g<Jc?n.glass:n.paint,y=i(m,d,x,u),M=i(m,d+1,x,u),v=i(m,d+1,x+1,u),P=i(m,d,x+1,u);o(m,f,y,M,v),o(m,f,y,v,P)}}for(let[d,g,x]of[[0,-.03,3],[s.length-1,.035,2]]){let p=e[d],m=(p[0][1]+p[t-1][1])/2+(d===0?.02:-.03),y=[0,m,p[0][2]+g],M=c(p[l],p[l+1],y,u)[2]*g<0;for(let v=0;v<t-1;v++){let P=(es[v]+es[v+1])/2<x?n.trim:n.paint,E=`cap${d}`;P[E]===void 0&&(P[E]=r(P,y[0],y[1],y[2])),o(P,M,i(P,d,v,u),i(P,d,v+1,u),P[E])}}}let h={};for(let u in n){let f=new Vt;f.setAttribute("position",new wt(n[u].pos,3)),f.setIndex(n[u].idx),f.computeVertexNormals(),h[u]=f}return h}function ra(s,t,e,n,i,r=.006,o=2){let a=[],l=[],c=o+1;for(let u of[1,-1]){let f=a.length/3;for(let d=0;d<=i;d++){let g=d/i,x=Ot(s,t,g),[p,m]=typeof e=="function"?[e(g),n(g)]:[e,n];for(let y=0;y<c;y++){let M=Yx(x,Ot(p,m,y/o),u,r);a.push(M.x,M.y,M.z)}if(d>0){let y=f+(d-1)*c,M=f+d*c;for(let v=0;v<o;v++)u>0?l.push(y+v,M+v,y+v+1,y+v+1,M+v,M+v+1):l.push(y+v,y+v+1,M+v,y+v+1,M+v+1,M+v)}}}let h=new Vt;return h.setAttribute("position",new wt(a,3)),h.setIndex(l),h.computeVertexNormals(),h}function $x(s,t,e){let n=new ue,i=[[s-.1,-t/2],[s-.03,-t/2],[s,-t/2+.035],[s,t/2-.035],[s-.03,t/2],[s-.1,t/2]],r=new mt(new Ro(i.map(m=>new yt(m[0],m[1])),22).rotateZ(-Math.PI/2),e.tire),o=s-.095,a=t/2-.035,l=new We,c=new We,h=new Xt,u=new Xt;l.addGeometry(new Vn(o,22).rotateY(Math.PI/2),h.makeTranslation(t*.18,0,0),16777215),l.addGeometry(new Ie(.062,.07,.05,12).rotateZ(-Math.PI/2),h.makeTranslation(a,0,0),16777215);let f=new mt(new Ie(o*.78,o*.78,.02,20).rotateZ(Math.PI/2).translate(t*.2,0,0),e.brake),d=9,g=new Pe(.022,o-.05,.016).translate(0,(o-.05)/2+.05,0);for(let m=0;m<d;m++)for(let y of[-.085,.085])c.addGeometry(g,h.makeTranslation(a,0,0).multiply(u.makeRotationX(m/d*Math.PI*2+y)),16777215);c.addGeometry(new Tn(o-.012,.014,5,26).rotateY(Math.PI/2),h.makeTranslation(a,0,0),16777215);let x=l.build(e.rimDark,!1),p=c.build(e.rim,!1);return x.matrixAutoUpdate=p.matrixAutoUpdate=!0,n.add(r,x,f,p),r.castShadow=!0,n}var la=class{constructor(){this.root=new ue,this.body=new ue,this.root.add(this.body);let t=this.mats={paint:new gr({color:13619662,metalness:.12,roughness:.3,clearcoat:1,clearcoatRoughness:.13,envMapIntensity:1.1}),glass:new gr({color:1314827,metalness:.2,roughness:.32,clearcoat:.6,clearcoatRoughness:.28,sheen:.6,sheenColor:9069616,sheenRoughness:.4}),titan:new xn({color:9277847,metalness:.92,roughness:.34}),trim:new xn({color:789775,metalness:.3,roughness:.55}),tire:new xn({color:1250327,roughness:.9,metalness:0}),rim:new xn({color:10133157,metalness:.95,roughness:.3}),rimDark:new xn({color:1513499,metalness:.7,roughness:.5}),brake:new xn({color:4869458,metalness:.8,roughness:.45}),head:new Qt({color:16777215}),tail:new Qt({color:16719892}),nozzle:new Qt({color:0})};t.head.color.setRGB(3.4,3.5,3.8),t.tail.color.setRGB(3.4,.07,.05);let e=Zx();for(let o of["paint","glass","trim"]){let a=new mt(e[o],t[o]);a.castShadow=!0,this.body.add(a)}let n=(o,a,l=!1)=>{let c=new mt(o,a);return c.castShadow=l,this.body.add(c),c};{let o=[],a=[];for(let f=0;f<=16;f++){let d=Ot(-.5,.5,f/16),g=Ot(Er+.047,2.116,Math.abs(d)/.55);if(o.push(d,.298,g,d,.318,g),f>0){let x=(f-1)*2,p=f*2;a.push(x,p,x+1,p,p+1,x+1)}}let u=new Vt;u.setAttribute("position",new wt(o,3)),u.setIndex(a),n(u,t.head)}n(ra(Jn+.012,Jn+.3,o=>Ot(3.5,3.6,o),o=>Ot(3.66,3.66,o),4),t.tail);{let o=[],a=[];for(let f=0;f<=14;f++){let d=Ot(-.8,.8,f/14),g=Jn+.17*d*d-.034+Math.abs(d)*.012;if(o.push(d,.748,g,d,.766,g),f>0){let x=(f-1)*2,p=f*2;a.push(x,x+1,p,p,x+1,p+1)}}let u=new Vt;u.setAttribute("position",new wt(o,3)),u.setIndex(a),n(u,t.tail)}n(ra(.74,.95,o=>Ot(2.5,2.9,o),o=>Ot(3.5,3.25,o),3),t.trim),n(ra(.6,.612,2,4.95,1,.004,10),t.trim),n(ra(-.66,-.648,2,4.95,1,.004,10),t.trim);for(let o of[-.42,-.14,.14,.42])n(new Pe(.02,.13,.3).translate(o,.43,Jn+.14),t.trim);for(let o of[1,-1])n(new Pe(.14,.02,.04).translate(o*.92,.868,.6),t.trim),n(new Pe(.03,.055,.13).translate(o*1,.878,.59),t.titan,!0).geometry.computeVertexNormals();this.nozzles=[];for(let o of[-.26,0,.26])n(new Ie(.062,.075,.12,10).rotateX(Math.PI/2).translate(o,.56,Jn+.03),t.trim),n(new Vn(.052,10).rotateY(Math.PI).translate(o,.56,Jn-.032),t.nozzle),this.nozzles.push(new I(o,.56,Jn-.04));this.wheels=[];let i=[{z:de.frontZ,s:1,r:de.rFront,w:de.wFront,front:!0},{z:de.frontZ,s:-1,r:de.rFront,w:de.wFront,front:!0},{z:de.rearZ,s:1,r:de.rRear,w:de.wRear},{z:de.rearZ,s:-1,r:de.rRear,w:de.wRear}],r=this.jetMat=new Qt({color:new ut(1.2,2.6,3.4),transparent:!0,opacity:0,blending:Be,depthWrite:!1,side:Ue});for(let o of i){let a=new ue,l=new ue,c=new ue,h=o.s*(de.trackHalf+(o.front?0:.012)-o.w/2+.13);a.position.set(h,o.r,o.z);let u=$x(o.r,o.w,t);o.s<0&&(u.rotation.y=Math.PI),c.add(u),l.add(c),a.add(l);let f=new mt(new Vn(o.r*.82,18).rotateY(o.s>0?Math.PI/2:-Math.PI/2),r);f.position.x=o.s*(o.w/2+.012),a.add(f),this.body.add(a),this.wheels.push({pivot:a,steer:l,spin:c,home:a.position.clone(),...o})}this.fold=0,this.spinAngle=0,this.setPaint(Mn[0])}setPaint(t){let e=this.mats.paint;e.color.set(t.color),e.metalness=t.metal,e.roughness=Math.max(t.rough,.14),e.clearcoat=t.coat,this.paint=t}pose(t,e,n,i){this.fold=t,this.spinAngle+=n;let r=t*t*(3-2*t);for(let o of this.wheels)o.pivot.rotation.z=-o.s*r*Math.PI/2,o.pivot.position.set(Ot(o.home.x,o.s*.74,r),Ot(o.home.y,.31,r),o.home.z),o.steer.rotation.y=o.front?e*(1-r):0,o.spin.rotation.x=this.spinAngle*(1-r)+r*this.spinAngle*.2;this.jetMat.opacity=r*i}setLights(t,e){let n=this.mats.tail.color,i=1+t*1.6+e*.3;n.setRGB(3.4*i,.07*i,.05*i);let r=3.2+e*3;this.mats.head.color.setRGB(r,r*1.03,r*1.12)}setThrust(t){this.mats.nozzle.color.setRGB(3*t,5*t,7*t)}};var Jx=66,Kx=92,ha=100,Qx=15,nd=23,jx=15,id=720,Kc=2500,ca=1,sd=1.15,Qc=1.15,Pn=new Ce(0,0,0,"YXZ"),rd=new pe,Tr=new I,De={h:0,surf:"road",box:null,water:!1},ty={h:0,surf:"road",box:null,water:!1},ua=class{constructor(t){this.world=t,this.pos=new I,this.prev=new I,this.vel=new I,this.quat=new pe,this.angVel=new I,this.events=[],this.near=[],this.safe={x:Le.x,z:Le.z,yaw:Le.yaw},this.time=0,this.reset(Le.x,Le.z,Le.yaw)}reset(t,e,n){this.world.ground(t,5e3,e,De),this.pos.set(t,Math.max(De.h,0),e),this.prev.copy(this.pos),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.yaw=n,this.pitch=0,this.roll=0,this.yawRate=0,this.mode="drive",this.fold=0,this.foldTarget=0,this.steer=0,this.speed=0,this.slip=0,this.boost=1,this.boosting=!1,this.braking=!1,this.thrust=0,this.lift=0,this.offGround=0,this.airTime=0,this.flyTime=0,this.launchAssist=0,this.recover=0,this.rollTrick=0,this.rollDir=0,this.pitchLock=!1,this.launching=!1,this.lastThrottle=0,this.surf="road",this.groundY=this.pos.y,this.alt=0,this.overWater=!1,this.lastRamp=null,this.lastRampT=-9,this.underT=-9,this.underAward=-9,this.hitT=-9,this.safeT=0,this.syncQuat()}syncQuat(){Pn.set(this.pitch,this.yaw,this.roll+this.rollTrick,"YXZ"),this.quat.setFromEuler(Pn)}eulerFromQuat(){Pn.setFromQuaternion(this.quat,"YXZ"),this.yaw=Pn.y,this.pitch=Pn.x,this.roll=Pn.z}emit(t,e){this.events.push(Object.assign({type:t},e))}engageFlight(t=!1){if(this.mode==="fly")return;let e=this.mode==="drive";this.mode==="air"&&this.eulerFromQuat(),this.mode="fly",this.launching=!1,this.foldTarget=1,this.flyTime=0,this.rollTrick=0,this.launchAssist=t?1.5:0,e&&(this.pos.y+=.25,this.vel.y=Math.max(this.vel.y,7.5),this.launchAssist=.45),this.emit("engage",{fromRamp:t,wasGround:e})}dropFlight(){this.mode==="fly"&&(this.syncQuat(),this.mode="air",this.foldTarget=0,this.airTime=0,this.angVel.set(0,0,0),this.emit("disengage",{}))}step(t,e){if(this.time+=t,this.prev.copy(this.pos),this.mode==="sunk"){this.vel.multiplyScalar(1-3*t),this.pos.addScaledVector(this.vel,t),this.thrust=this.lift=0,this.speed=0;return}e.fly&&(this.mode==="fly"?this.dropFlight():this.engageFlight(!1)),this.mode==="drive"?this.stepDrive(t,e):this.mode==="air"?this.stepAir(t,e):this.stepFly(t,e),this.collide(t),this.fold=Lt(this.fold+Math.sign(this.foldTarget-this.fold)*t/.42,0,1),Math.abs(this.fold-this.foldTarget)<t/.42&&(this.fold=this.foldTarget);let n=Math.hypot(this.pos.x,this.pos.z);if(n>Kc){let i=Math.atan2(-this.pos.x,-this.pos.z);this.mode!=="air"?this.yaw=Ci(this.yaw,i,jt(Kc,Kc+500,n)*1.6,t):(this.vel.x-=this.pos.x/n*30*t,this.vel.z-=this.pos.z/n*30*t),this.time-(this.edgeT||-9)>6&&(this.edgeT=this.time,this.emit("edge",{}))}this.mode!=="air"&&this.syncQuat(),this.speed=Math.hypot(this.vel.x,this.vel.z)}stepDrive(t,e){let n=this.world,i=this.pos;this.lastThrottle=e.throttle,this.steer=te(this.steer,-e.steer,8,t);let r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this.vel.x*r+this.vel.z*o,l=this.offGround<.05,c=this.surf==="road"?1:this.surf==="grass"?.82:.66,h=e.shift&&Math.abs(a)>4,u=Ot(.6,.075,jt(0,72,Math.abs(a))),f=a*Math.tan(this.steer*u)/de.wheelbase,d=(h?31:25)*c/Math.max(Math.abs(a),7);f=Lt(f,-d,d)*(h?1.5:1),l&&(this.yaw+=f*t),this.yawRate=f,r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this.vel.x*r+this.vel.z*o;let g=this.vel.x*o-this.vel.z*r,x=de.trackHalf,p=(V,J)=>n.ground(i.x+V*o+J*r,i.y,i.z-V*r+J*o,ty).h,m=p(x,de.frontZ),y=p(-x,de.frontZ),M=p(x,de.rearZ),v=p(-x,de.rearZ);n.ground(i.x,i.y,i.z,De);let P=(m+y)/2,E=(M+v)/2,T=Math.max(De.h,(P+E)/2);this.surf=De.surf,this.groundY=T,this.alt=i.y-T,this.overWater=De.water,De.box&&De.box.kind==="ramp"&&(this.lastRamp=De.box,this.lastRampT=this.time);let R=0;Math.abs(P-E)<1.6&&(R=(P-E)/de.wheelbase,this.pitch=te(this.pitch,-Math.atan(R),l?14:3,t)),Math.abs(m+M-y-v)<2.4&&(this.roll=te(this.roll,Math.atan((m+M-y-v)/(4*x)),l?12:3,t)),this.boosting=e.boost&&this.boost>.01&&e.throttle>=0&&a>-1;let S=this.boosting?Kx:Jx,b=0;if(this.braking=!1,this.boosting||e.throttle>0){let V=this.boosting?1:e.throttle;a<0?b=30*V:b=(this.boosting?27:16)*V*Lt(1-Math.pow(a/S,2.2),-.4,1)}else e.throttle<0&&(a>.6?(b=36*e.throttle,this.braking=!0):b=10*e.throttle*Lt(1+a/jx,0,1));let L=this.surf==="road"?.35:this.surf==="grass"?2:3.4;b-=Math.sign(a)*L*Math.min(1,Math.abs(a)/2)+5e-4*a*Math.abs(a),h&&(b-=Math.sign(a)*5),!this.boosting&&e.throttle===0&&Math.abs(a)<.4&&(a=0),b-=nd*.75*R/Math.sqrt(1+R*R),this.accel=l&&(this.boosting||e.throttle>0)?Math.max(0,b):0,l&&(a+=b*t*(this.surf==="road"?1:this.boosting?.9:.86),g*=Math.exp(-(h?2.3:11.5)*c*t)),this.slip=Math.abs(g),this.boost=Lt(this.boost+(this.boosting?-.3:.085)*t,0,1),this.thrust=te(this.thrust,this.boosting?1:0,8,t),this.lift=te(this.lift,0,6,t),this.vel.x=r*a+o*g,this.vel.z=o*a-r*g,i.x+=this.vel.x*t,i.z+=this.vel.z*t;let N=this.vel.y-nd*t,F=i.y+N*t;if(F>T+.015?(i.y=F,this.vel.y=N,this.offGround+=t,this.offGround>.085&&F-T>.4&&this.takeOff()):(this.vel.y=Lt((T-i.y)/t,-30,45),this.offGround>.2&&this.emit("thump",{impact:-N}),i.y=T,this.offGround=0),this.overWater&&i.y<-.55)return this.sink();l&&!this.overWater&&T>1.5&&this.time-this.safeT>1.2&&Math.abs(a)>2&&this.time-this.hitT>1.5&&(this.safeT=this.time,this.safe.x=i.x-r*4,this.safe.z=i.z-o*4,this.safe.yaw=this.yaw)}sink(){this.mode="sunk",this.vel.y=Math.max(this.vel.y,-3),this.boosting=this.braking=!1,this.emit("splash",{})}takeOff(){this.mode="air",this.airTime=this.offGround,this.pitchLock=this.lastThrottle>0,this.angVel.set(0,this.yawRate*.35,0),this.syncQuat();let t=this.time-this.lastRampT<.25?this.lastRamp:null,e=Math.hypot(this.vel.x,this.vel.z);this.emit("jump",{ramp:t,speed:e}),t&&t.launch&&e>36&&this.emit("launch",{ramp:t,speed:e})}stepAir(t,e){let n=this.pos;if(this.airTime+=t,this.steer=te(this.steer,0,6,t),this.thrust=te(this.thrust,0,8,t),this.boosting=!1,this.braking=!1,e.boostPressed&&this.airTime>.12&&this.recover<=0)return this.engageFlight(!1);this.vel.y-=Qx*t;let i=1-.035*t;this.vel.x*=i,this.vel.z*=i,n.addScaledVector(this.vel,t),this.pitchLock&&e.throttle<=0&&(this.pitchLock=!1);let r=this.launching?0:1,o=this.pitchLock?0:e.throttle*r,a=o!==0||e.steer*r!==0||e.roll*r!==0;this.angVel.x=te(this.angVel.x,o*4.4,7,t),this.angVel.y=te(this.angVel.y,-e.steer*3.8*r,7,t),this.angVel.z=te(this.angVel.z,e.roll*6*r,7,t);let l=this.angVel,c=l.length();if(c>1e-4&&(rd.setFromAxisAngle(Tr.copy(l).divideScalar(c),c*t),this.quat.multiply(rd).normalize()),this.recover>0||!a&&this.airTime>.3){Pn.setFromQuaternion(this.quat,"YXZ");let h=this.recover>0?9:1.7;Pn.x=te(Pn.x,Lt(-Math.atan2(this.vel.y,Math.max(8,Math.hypot(this.vel.x,this.vel.z)))*.35,-.3,.3),h,t),Pn.z=te(Pn.z,0,h,t),this.quat.setFromEuler(Pn),this.recover-=t}if(this.world.ground(n.x,n.y+.2,n.z,De),this.groundY=De.h,this.overWater=De.water,this.alt=n.y-Math.max(De.h,0),De.water&&n.y<-.5)return this.sink();if(n.y<=De.h){let h=-this.vel.y,u=Tr.set(0,1,0).applyQuaternion(this.quat).y;n.y=De.h,u>.5?(this.eulerFromQuat(),this.mode="drive",this.launching=!1,this.offGround=0,this.vel.y=0,this.surf=De.surf,this.emit("land",{impact:h,airTime:this.airTime,clean:u>.9,fromFlight:!1,x:n.x,y:n.y,z:n.z})):(this.vel.y=Lt(h*.35,3.5,7),this.vel.x*=.6,this.vel.z*=.6,this.recover=.5,this.airTime=0,this.angVel.set(0,0,0),this.hitT=this.time,this.emit("crash",{impact:Math.max(h,8),flipped:!0}))}}stepFly(t,e){let n=this.pos,i=this.world;this.flyTime+=t,this.steer=te(this.steer,-e.steer,6,t);let r=Math.hypot(this.vel.x,this.vel.z),o=Lt(r/ha,0,1);this.yawRate=te(this.yawRate,-e.steer*Ot(1.75,.8,o),5.5,t),this.yaw+=this.yawRate*t;let a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=this.vel.x*a+this.vel.z*l,h=this.vel.x*l-this.vel.z*a;e.throttle>0?c+=26*e.throttle*Lt(1-c/ha,0,1)*t:e.throttle<0?c+=(c>0?34:12*Lt(1+c/12,0,1))*e.throttle*t:c-=c*.2*t,h*=Math.exp(-3.4*t),this.vel.x=a*c+l*h,this.vel.z=l*c-a*h,this.braking=e.throttle<0&&c>1,this.boosting=!1;let u=e.boost?27:e.shift?-30:0;n.y>id-80&&(u=Math.min(u,(id-n.y)*.35));let f=-(2.5+this.alt*1.7);if(this.alt<14&&(u=Math.max(u,f)),this.launchAssist-=t,this.vel.y=te(this.vel.y,u,this.launchAssist>0&&!e.shift?.35:this.alt<14&&this.vel.y<f?11:3.3,t),n.addScaledVector(this.vel,t),this.thrust=te(this.thrust,.35+.65*Math.max(0,e.throttle)*(1-o*.4)+(e.boost?.3:0),6,t),this.lift=te(this.lift,.55+(e.boost?.45:0)-(e.shift?.25:0),6,t),this.pitch=te(this.pitch,Lt(-Math.atan2(this.vel.y,Math.max(Math.abs(c),24))*.9+e.throttle*.035,-.7,.7),5,t),this.roll=te(this.roll,Lt(-this.yawRate*(.3+.42*o),-1,1),5,t),this.rollDir===0&&e.roll!==0&&this.flyTime>.3&&(this.rollDir=e.roll,this.rollT=0),this.rollDir!==0){this.rollT+=t/.72;let m=Math.min(this.rollT,1),y=m*m*(3-2*m);this.rollTrick=this.rollDir*y*Math.PI*2,m>=1&&(this.rollTrick=0,this.emit("barrel",{}),this.rollDir=0)}i.ground(n.x,n.y+.6,n.z,De);let d=De.water,g=d?0:De.h;this.groundY=g,this.overWater=d,this.alt=n.y-g,this.surf=De.surf;let x=!d&&this.rollDir===0&&(this.alt<4&&this.vel.y<-.6||e.shift&&this.alt<9);this.foldTarget=x?0:1;let p=d?.6:.5*this.fold;if(!d&&this.foldTarget===0&&this.fold<.4&&n.y<=g+.03){let m=-this.vel.y;n.y=g,this.mode="drive",this.offGround=0,this.vel.y=0,this.rollTrick=0,this.rollDir=0,this.emit("land",{impact:m,airTime:this.flyTime,clean:!0,fromFlight:!0,x:n.x,y:n.y,z:n.z,box:De.box});return}if(n.y<g+p){if((g+p-n.y)/t>46&&r>20&&!d){i.terrain.normalAt(n.x,n.z,Tr);let y=this.vel.dot(Tr);y<0&&this.vel.addScaledVector(Tr,-1.5*y),this.vel.multiplyScalar(.62),this.hitT=this.time,this.emit("crash",{impact:Math.max(10,-y)})}else this.vel.y<-17&&!d?(this.vel.y=5,this.vel.x*=.75,this.vel.z*=.75,this.hitT=this.time,this.emit("crash",{impact:12})):this.vel.y<0&&(this.vel.y=te(this.vel.y,0,14,t));n.y=Math.max(n.y,Ot(n.y,g+p,1-Math.exp(-18*t))),n.y<g+.05&&(n.y=g+.05),this.skim=d?"water":"ground"}else this.skim=this.alt<3.2?d?"water":"ground":null}collide(t){let e=this.world,n=this.pos,i=Math.sin(this.yaw),r=Math.cos(this.yaw),o=e.colliders.near(n.x,n.z),a=n.y+.12,l=n.y+Qc,c=this.speed,h=this.stamp=(this.stamp||0)+1,u=!1;if(o)for(let f=0;f<2;f++){let d=(f?-1:1)*sd*i,g=(f?-1:1)*sd*r;for(let x=0;x<o.length;x++){let p=o[x],m=n.x+d-p.x,y=n.z+g-p.z,M=m*p.c-y*p.s,v=m*p.s+y*p.c,P=Math.abs(M)-p.hx,E=Math.abs(v)-p.hz;if(P>6||E>6)continue;let T=ji.topAt(p,v);if(a>=T-.55)continue;let R=P<0&&E<0;if(l<=p.y0){R&&p.kind==="deck"&&p.y0-l<14&&(u=!0);continue}let S=R?-1:Math.hypot(Math.max(P,0),Math.max(E,0))-ca;if(S>=0){if(S<4.2&&c>26&&!p.quiet){let z=this.near.find(lt=>lt.box===p);z||this.near.push(z={box:p,gap:S,stamp:h}),z.gap=Math.min(z.gap,S),z.stamp=h}continue}if(R&&this.prev.y+Qc<=p.y0+.3&&this.vel.y>0){n.y=p.y0-Qc-.02,this.vel.y=-1;continue}let b,L,N;if(R)-P<-E?(b=Math.sign(M)||1,L=0,N=-P+ca):(b=0,L=Math.sign(v)||1,N=-E+ca);else{let z=M-Lt(M,-p.hx,p.hx),lt=v-Lt(v,-p.hz,p.hz),ht=Math.hypot(z,lt)||1e-6;b=z/ht,L=lt/ht,N=ca-ht}let F=b*p.c+L*p.s,V=-b*p.s+L*p.c;n.x+=F*N,n.z+=V*N;let J=this.vel.x*F+this.vel.z*V;if(J<0){let z=this.mode==="fly"?1.4:1.22;this.vel.x-=F*J*z,this.vel.z-=V*J*z;let lt=1-Math.min(.3,-J*.012);this.vel.x*=lt,this.vel.z*=lt,-J>3.5&&this.time-this.hitT>.25&&(this.hitT=this.time,this.emit(-J>9?"crash":"scrape",{impact:-J,x:n.x+d-F,y:n.y+.5,z:n.z+g-V}))}let G=i*F+r*V;if(G<-.05&&this.mode!=="air"){let z=i-F*G,lt=r-V*G;Math.hypot(z,lt)<.25&&(z=-V,lt=F),this.yaw=Ci(this.yaw,Math.atan2(z,lt),this.mode==="fly"?8:5,t)}let et=this.near.findIndex(z=>z.box===p);et>=0&&this.near.splice(et,1)}}for(let f=this.near.length-1;f>=0;f--){let d=this.near[f];d.stamp!==h&&(this.near.splice(f,1),this.time-this.hitT>.7&&this.time-(d.box.nearT||-9)>5&&(d.box.nearT=this.time,this.emit("near",{gap:d.gap,kind:d.box.kind})))}u?this.underT=this.time:this.time-this.underT<.1&&this.time-this.underAward>6&&c>22&&this.mode!=="drive"&&this.time-this.hitT>1&&(this.underAward=this.time,this.emit("under",{}));for(let f of e.spheres){let d=n.x-f.x,g=n.y+.6-f.y,x=n.z-f.z,p=f.r+1.1,m=d*d+g*g+x*x;if(m<p*p){let y=Math.sqrt(m)||1,M=d/y,v=g/y,P=x/y;n.x+=M*(p-y),n.y+=v*(p-y),n.z+=P*(p-y);let E=this.vel.x*M+this.vel.y*v+this.vel.z*P;E<0&&(this.vel.x-=M*E*1.5,this.vel.y-=v*E*1.5,this.vel.z-=P*E*1.5,this.time-this.hitT>.3&&(this.hitT=this.time,this.emit("crash",{impact:Math.max(9,-E),soft:!0})))}else m<(p+5)*(p+5)&&c>26&&this.time-(f.nearT||-9)>6&&this.time-this.hitT>1?f.pending=this.time:f.pending&&m>(p+9)*(p+9)&&(this.time-f.pending<2&&this.time-this.hitT>1&&(f.nearT=this.time,this.emit("near",{gap:2,kind:"balloon"})),f.pending=0)}}respawn(){let t=this.safe,e=this.boost;this.reset(t.x,t.z,t.yaw),this.boost=e}};var ln=new I,xe=new I,Ar=new I,di={h:0},da=class{constructor(t,e){this.cam=t,this.world=e,this.yaw=0,this.orbitYaw=0,this.orbitPitch=0,this.manual=0,this.zoom=1,this.focus=new I,this.look=new I,this.fov=60,this.shake=0,this.kick=0,this.punch=0,this.roll=0,this.time=0,this.cine=null,this.orbit={yaw:.7,pitch:.16,dist:7,roll:0,fov:42,panX:0,panY:0,floor:null},this.sens=1,this.snapNext=!0}snap(t){this.yaw=t.yaw,this.focus.copy(t.pos).y+=1.05,this.orbitYaw=this.orbitPitch=0,this.snapNext=!0}addShake(t){this.shake=Math.min(1.2,this.shake+t)}aspectFov(t){let e=this.cam.aspect;if(e>=1.2)return t;let n=2*Math.atan(Math.tan(t*Math.PI/360)*1.2);return Lt(2*Math.atan(Math.tan(n/2)/e)*180/Math.PI,t,96)}startCinematic(t,e){let n=Math.sin(t.yaw),i=Math.cos(t.yaw),r=this.world.sky.v.sunDir,o=r.x*i-r.z*n>0?1:-1,a=new I(t.pos.x+n*21+i*o*10.5,t.pos.y+.6,t.pos.z+i*21-n*o*10.5);this.world.ground(a.x,a.y+50,a.z,di),a.y=Math.max(a.y,di.h+1.4),this.cine={t:0,duration:e,pos:a,side:o}}update(t,e,n,i={}){this.time+=t;let r=this.cam,o=e.speed,a=e.mode==="fly",l=Lt(o/ha,0,1),c=e.yaw;if(e.mode==="air")c=o>6?Math.atan2(e.vel.x,e.vel.z):this.yaw;else if(o>9&&e.mode==="drive"){let M=Math.atan2(e.vel.x,e.vel.z);c=Math.cos(M-e.yaw)>0?e.yaw+Lt(Math.atan2(Math.sin(M-e.yaw),Math.cos(M-e.yaw)),-.6,.6)*.45:e.yaw}i.lookBack&&(c+=Math.PI),this.yaw=this.snapNext?c:Ci(this.yaw,c,i.lookBack?14:3.2+l*4,t),n&&(n.x||n.y)&&(this.orbitYaw-=n.x*.0052*this.sens,this.orbitPitch=Lt(this.orbitPitch+n.y*.004*this.sens,-.5,1.15),this.manual=2.2),n&&n.zoom&&(this.zoom=Lt(this.zoom+n.zoom*.1,.7,2.2)),this.manual-=t,this.manual<=0&&o>3&&(this.orbitYaw=Ci(this.orbitYaw,0,2.5,t),this.orbitPitch=te(this.orbitPitch,0,2.5,t));let h=r.aspect<1?1.22:1,u=(a?8.2+l*3:6.5+l*2.2)*this.zoom*h,f=Lt(e.vel.y/40,-.5,.5),d=Lt((a?.21:.19)+this.orbitPitch-(a||e.mode==="air"?f*.28:0),-.45,1.3),g=this.yaw+this.orbitYaw;ln.copy(e.pos),ln.y+=1.05,this.snapNext?this.focus.copy(ln):(this.focus.x=te(this.focus.x,ln.x,22,t),this.focus.z=te(this.focus.z,ln.z,22,t),this.focus.y=te(this.focus.y,ln.y,12,t)),xe.set(this.focus.x-Math.sin(g)*Math.cos(d)*u,this.focus.y+Math.sin(d)*u+.25,this.focus.z-Math.cos(g)*Math.cos(d)*u);for(let M=0;M<5&&(this.world.ground(xe.x,xe.y+400,xe.z,di),!(xe.y>=di.h+.9));M++){if(M===4||di.h-xe.y<3){xe.y=di.h+.9;break}xe.lerp(this.focus,.3)}let x=2+o*.035;Ar.set(this.focus.x+Math.sin(this.yaw)*x*(i.lookBack?-1:1),this.focus.y+.25+(a?f*2.2:0),this.focus.z+Math.cos(this.yaw)*x*(i.lookBack?-1:1)),this.kick=te(this.kick,e.boosting?1:0,5,t);let p=58+jt(0,1,l)*17+this.kick*6,m=a?e.roll*.22:-e.yawRate*.012*l;if(this.cine){let M=this.cine;M.t+=i.realDt??t;let v=M.t/M.duration,P=jt(.7,1,v),E=ln.copy(e.pos);E.y+=.7;let T=M.pos,R=Hu(Lt(v/.75,0,1));T.y+=(i.realDt??t)*.5;let S=T.x+Math.sin(e.yaw)*R*5,b=T.z+Math.cos(e.yaw)*R*5;xe.set(Ot(S,xe.x,P),Ot(T.y,xe.y,P),Ot(b,xe.z,P)),Ar.lerpVectors(E,Ar,P),p=Ot(34-R*4,p,P),m=Ot(-M.side*.06,m,P),v>=1&&(this.cine=null)}p+=this.punch*16,this.punch=Math.max(0,this.punch-(i.realDt??t)*1.1),this.shake=Math.max(0,this.shake-t*2.4);let y=this.shake*this.shake*.35+(e.boosting?.012:0)+(a?l*.008:0);if(y>0){let M=this.time;xe.x+=Math.sin(M*61)*y,xe.y+=Math.sin(M*73+1)*y,xe.z+=Math.sin(M*67+2)*y}r.position.copy(xe),this.look.copy(Ar),r.up.set(0,1,0),r.lookAt(Ar),this.roll=this.snapNext?m:te(this.roll,m,4,t),r.rotateZ(this.roll),this.fov=this.snapNext?p:te(this.fov,p,5,t),r.fov=this.aspectFov(this.fov),r.near=Ot(.6,3,jt(6,60,e.alt||0)),r.updateProjectionMatrix(),this.snapNext=!1}updateOrbit(t,e,n,i=0){let r=this.orbit,o=this.cam;n&&((n.x||n.y)&&(r.yaw-=n.x*.006,r.pitch=Lt(r.pitch+n.y*.005,-.25,1.45)),n.zoom&&(r.dist=Lt(r.dist*(1+n.zoom*.08),3.6,60))),r.yaw+=i*t;let a=e.yaw;ln.copy(e.pos),ln.y+=.62+r.panY;let l=a+r.yaw;ln.x-=Math.cos(l)*r.panX,ln.z+=Math.sin(l)*r.panX;let c=o.aspect<1?1.35:1,h=r.dist*c;xe.set(ln.x+Math.sin(l)*Math.cos(r.pitch)*h,ln.y+Math.sin(r.pitch)*h,ln.z+Math.cos(l)*Math.cos(r.pitch)*h),r.floor!=null?xe.y<r.floor&&(xe.y=r.floor):(this.world.ground(xe.x,xe.y+400,xe.z,di),xe.y<di.h+.35&&(xe.y=di.h+.35),xe.y<.4&&(xe.y=.4)),o.position.copy(xe),o.up.set(0,1,0),o.lookAt(ln),o.rotateZ(r.roll),o.fov=o.aspect<1?Lt(r.fov*1.25,20,100):r.fov,o.near=.3,o.updateProjectionMatrix(),this.snapNext=!0,this.yaw=e.yaw,this.focus.copy(e.pos).y+=1.05}};var ey=`
attribute float size;
attribute vec4 tint;
uniform float uScale;
varying vec4 vTint;
void main() {
  vTint = tint;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,ny=`
varying vec4 vTint;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.25, d) * vTint.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vTint.rgb, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,fa=class{constructor(t,e){this.n=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.tint=new Float32Array(t*4),this.size=new Float32Array(t),this.life=new Float32Array(t),this.max=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.a0=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.next=0;let n=new Vt;n.setAttribute("position",new ve(this.pos,3).setUsage($i)),n.setAttribute("tint",new ve(this.tint,4).setUsage($i)),n.setAttribute("size",new ve(this.size,1).setUsage($i)),this.mat=new _e({vertexShader:ey,fragmentShader:ny,uniforms:{uScale:{value:600}},transparent:!0,depthWrite:!1,blending:e?Be:bi}),this.points=new Us(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=e?6:5}spawn(t,e,n,i,r,o,a,l,c,h,u,f,d,g=0,x=0){let p=this.next;this.next=(p+1)%this.n,this.pos[p*3]=t,this.pos[p*3+1]=e,this.pos[p*3+2]=n,this.vel[p*3]=i,this.vel[p*3+1]=r,this.vel[p*3+2]=o,this.tint[p*4]=h,this.tint[p*4+1]=u,this.tint[p*4+2]=f,this.tint[p*4+3]=d,this.life[p]=this.max[p]=a,this.s0[p]=l,this.s1[p]=c,this.a0[p]=d,this.grav[p]=g,this.drag[p]=x,this.size[p]=l}update(t){let{pos:e,vel:n,tint:i,size:r,life:o,max:a,n:l}=this;for(let h=0;h<l;h++){if(o[h]<=0)continue;if(o[h]-=t,o[h]<=0){r[h]=0,i[h*4+3]=0;continue}let u=1-o[h]/a[h],f=1-this.drag[h]*t;n[h*3]*=f,n[h*3+1]=n[h*3+1]*f-this.grav[h]*t,n[h*3+2]*=f,e[h*3]+=n[h*3]*t,e[h*3+1]+=n[h*3+1]*t,e[h*3+2]+=n[h*3+2]*t,r[h]=Ot(this.s0[h],this.s1[h],u),i[h*4+3]=this.a0[h]*(1-u)*Math.min(1,u*12)}let c=this.points.geometry;c.attributes.position.needsUpdate=!0,c.attributes.tint.needsUpdate=!0,c.attributes.size.needsUpdate=!0}},iy=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,sy=`
uniform float uTime, uPower;
uniform vec3 uCore, uEdge;
varying vec2 vUv;
void main() {
  float t = 1.0 - vUv.y;
  float flick = 0.82 + 0.18 * sin(uTime * 55.0 + vUv.x * 19.0) * sin(uTime * 31.0 + t * 9.0);
  float a = pow(1.0 - t, 1.6) * flick * uPower;
  vec3 col = mix(uCore, uEdge, smoothstep(0.0, 0.55, t));
  gl_FragColor = vec4(col * a * 5.0, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,$t=s=>(Math.random()-.5)*2*s,Ne=new I,od=new I,ad=new pe,pa=class{constructor(t,e){this.scene=t,this.model=e,this.add=new fa(700,!0),this.alpha=new fa(600,!1),t.add(this.add.points,this.alpha.points),this.time=0;let n=()=>new _e({vertexShader:iy,fragmentShader:sy,transparent:!0,depthWrite:!1,blending:Be,side:Ue,uniforms:{uTime:{value:0},uPower:{value:0},uCore:{value:new ut(1,1,1)},uEdge:{value:new ut(.25,.6,1)}}});this.rearMat=n(),this.liftMat=n();let i=new Ie(.085,.02,1,10,1,!0).rotateX(Math.PI/2).translate(0,0,-.5);{let h=i.attributes.uv,u=i.attributes.position;for(let f=0;f<h.count;f++)h.setY(f,1+u.getZ(f))}this.rear=[];for(let h of e.nozzles){let u=new mt(i,this.rearMat);u.position.copy(h),u.visible=!1,e.body.add(u),this.rear.push(u)}let r=new Ie(.26,.06,1,12,1,!0).translate(0,-.5,0);{let h=r.attributes.uv,u=r.attributes.position;for(let f=0;f<h.count;f++)h.setY(f,1+u.getY(f))}this.lifts=[];for(let h of e.wheels){let u=new mt(r,this.liftMat);u.position.set(h.s*.74,.17,h.z),u.visible=!1,e.body.add(u),this.lifts.push(u)}let o=this.trailN=26;this.trails=[],this.trailMat=new Qt({vertexColors:!0,transparent:!0,blending:Be,depthWrite:!1,side:Ue,fog:!1});for(let h=0;h<2;h++){let u=new Vt,f=new Float32Array(o*2*3),d=new Float32Array(o*2*3),g=[];for(let p=0;p<o-1;p++)g.push(p*2,p*2+1,p*2+2,p*2+2,p*2+1,p*2+3);u.setAttribute("position",new ve(f,3).setUsage($i)),u.setAttribute("color",new ve(d,3).setUsage($i)),u.setIndex(g);let x=new mt(u,this.trailMat);x.frustumCulled=!1,x.renderOrder=6,t.add(x),this.trails.push({mesh:x,pts:[],local:new I((h?-1:1)*.74,.757,-2.14)})}this.trailPower=0,this.trailAcc=0;let a=this.streakN=40;this.streakPos=new Float32Array(a*6),this.streakSeed=[];for(let h=0;h<a;h++)this.streakSeed.push(new I($t(1),$t(1),Math.random()));let l=new Vt;l.setAttribute("position",new ve(this.streakPos,3).setUsage($i)),this.streakMat=new Wi({color:16777215,transparent:!0,opacity:0,blending:Be,depthWrite:!1,fog:!1}),this.streaks=new Ds(l,this.streakMat),this.streaks.frustumCulled=!1,this.streaks.renderOrder=7,t.add(this.streaks),this.waves=[];let c=new Fs(.82,1,40);for(let h=0;h<3;h++){let u=new mt(c,new Qt({color:new ut(2.2,3.2,4),transparent:!0,opacity:0,blending:Be,depthWrite:!1,side:Ue,fog:!1}));u.visible=!1,u.renderOrder=6,t.add(u),this.waves.push({m:u,t:1,size:8})}}reset(){for(let t of this.trails)t.pts.length=0}shockwave(t,e,n=9,i=12577279){let r=this.waves.find(o=>o.t>=1)||this.waves[0];r.t=0,r.size=n,r.m.position.copy(t),r.m.quaternion.setFromUnitVectors(Ne.set(0,0,1),od.copy(e).normalize()),r.m.visible=!0}burst(t,e,n,i,r=0,o=0,a=0,l=12){let c=this.add,h=this.alpha;for(let u=0;u<l;u++)t==="spark"?c.spawn(e,n,i,r*.4+$t(7),o*.4+Math.random()*6,a*.4+$t(7),.35+Math.random()*.4,.22,.05,3,1.6,.5,1,16,1.5):t==="dust"?h.spawn(e+$t(1.2),n+.2,i+$t(1.2),r*.25+$t(3),.6+Math.random()*2,a*.25+$t(3),.8+Math.random()*.7,.8,3.6,.78,.7,.6,.34,-.4,1.6):t==="splash"?h.spawn(e+$t(1.5),n,i+$t(1.5),r*.3+$t(5),4+Math.random()*9,a*.3+$t(5),.7+Math.random()*.6,.6,2.2,.92,.97,1,.6,14,.6):t==="ring"?c.spawn(e+$t(6),n+$t(6),i+$t(6),r*.5+$t(6),o*.5+$t(6),a*.5+$t(6),.5+Math.random()*.5,.5,.05,.5,2.2,3,1,0,1):t==="ignite"?c.spawn(e,n,i,r+$t(9),o+$t(9),a+$t(9),.3+Math.random()*.45,.9,.1,1.6,2.6,4,1,0,2.5):t==="confetti"&&c.spawn(e+$t(1),n+1,i+$t(1),$t(6),4+Math.random()*6,$t(6),.8+Math.random()*.6,.3,.1,1+Math.random()*2,1+Math.random()*2,1+Math.random()*2,1,9,1)}update(t,e,n,i){this.time+=t;let r=this.time,o=this.model.body,a=i/(2*Math.tan(n.fov*Math.PI/360));this.add.mat.uniforms.uScale.value=a,this.alpha.mat.uniforms.uScale.value=a;let l=e.thrust*(e.mode==="fly"?1:.85);this.rearMat.uniforms.uTime.value=r,this.rearMat.uniforms.uPower.value=Lt(l*1.3,0,1.25);for(let y of this.rear){y.visible=l>.02;let M=.5+l*(e.mode==="fly"?2.6:1.9)+Math.sin(r*47)*.08;y.scale.set(1+l*.5,1+l*.5,M)}let c=e.fold*e.lift;this.liftMat.uniforms.uTime.value=r+3,this.liftMat.uniforms.uPower.value=Lt(c*1.1,0,1.1);for(let y of this.lifts)y.visible=c>.02,y.scale.set(1,.5+c*1.5+Math.sin(r*41+y.position.z)*.06,1);this.model.setThrust(Math.max(l,c*.3));let h=e.speed,u=e.pos,f=Math.sin(e.yaw),d=Math.cos(e.yaw);if(l>.5&&Math.random()<t*60*l&&(Ne.set($t(.3),.56,-2.3).applyQuaternion(e.quat).add(u),this.add.spawn(Ne.x,Ne.y,Ne.z,e.vel.x*.6-f*6+$t(1.5),e.vel.y*.6+$t(1.5),e.vel.z*.6-d*6+$t(1.5),.25+Math.random()*.25,.4,.05,.7,1.7,3.2,.9,0,2)),e.mode==="drive"&&e.offGround<.05&&h>4){let y=e.surf!=="road",M=e.slip>5.5,v=(y?jt(4,40,h)*34:0)+(M?44:0);if(v>0&&Math.random()<t*v){let P=Math.random()<.5?1:-1;Ne.set(P*de.trackHalf,.1,de.rearZ).applyQuaternion(e.quat).add(u);let E=y?e.surf==="sand"?[.86,.78,.62]:[.62,.58,.46]:[.85,.85,.88];this.alpha.spawn(Ne.x,Ne.y,Ne.z,e.vel.x*.25+$t(1.2),.8+Math.random()*1.6,e.vel.z*.25+$t(1.2),.7+Math.random()*.7,.7,y?3.4:2.6,E[0],E[1],E[2],y?.32:.22,-.3,1.4)}}if(e.mode==="fly"&&e.skim&&h>14&&e.alt<3.2){let y=jt(14,70,h)*(1-e.alt/3.4);if(Math.random()<t*90*y){let M=e.skim==="water",v=u.x-f*1.6+$t(.9),P=u.z-d*1.6+$t(.9),E=e.groundY+.15;M?this.alpha.spawn(v,E,P,e.vel.x*.35+$t(4),2.5+Math.random()*5,e.vel.z*.35+$t(4),.6+Math.random()*.6,.7,3,.9,.96,1,.5,9,.8):this.alpha.spawn(v,E,P,e.vel.x*.3+$t(3),1+Math.random()*2.5,e.vel.z*.3+$t(3),.7+Math.random()*.6,.8,3.6,.72,.66,.54,.3,-.2,1.2)}}if(e.mode==="fly"&&e.alt<5&&!e.overWater&&Math.random()<t*22*(1-e.alt/5)){let y=Math.random()*6.28;this.alpha.spawn(u.x+Math.cos(y)*1.3,e.groundY+.15,u.z+Math.sin(y)*1.3,Math.cos(y)*7,.6,Math.sin(y)*7,.6,.6,2.6,.75,.7,.6,.22,0,2.4)}this.add.update(t),this.alpha.update(t);let g=e.mode==="fly"?jt(20,60,h):e.boosting?1:jt(46,62,h)*.7;this.trailPower=Ot(this.trailPower,g,1-Math.exp(-4*t)),this.trailAcc+=Math.hypot(e.vel.x,e.vel.y,e.vel.z)*t;let x=this.trailAcc>.3;x&&(this.trailAcc=0);let p=this.trailN;for(let y of this.trails){if(Ne.copy(y.local).applyQuaternion(e.quat).add(u),y.pts.length===0)for(let P=0;P<p;P++)y.pts.push(Ne.clone());if(x){let P=y.pts.pop();P.copy(Ne),y.pts.unshift(P)}else y.pts[0].copy(Ne);let M=y.mesh.geometry.attributes.position,v=y.mesh.geometry.attributes.color;for(let P=0;P<p;P++){let E=y.pts[P],T=1-P/(p-1),R=T*T*this.trailPower;M.setXYZ(P*2,E.x,E.y-.02-.02*T,E.z),M.setXYZ(P*2+1,E.x,E.y+.02+.02*T,E.z),v.setXYZ(P*2,3.4*R,.2*R,.12*R),v.setXYZ(P*2+1,3.4*R,.2*R,.12*R)}M.needsUpdate=v.needsUpdate=!0,y.mesh.visible=this.trailPower>.01}let m=jt(58,100,h)*.22;if(this.streakMat.opacity=m,this.streaks.visible=m>.01,m>.01){let y=Math.hypot(e.vel.x,e.vel.y,e.vel.z)||1,M=e.vel.x/y,v=e.vel.y/y,P=e.vel.z/y;ad.setFromUnitVectors(Ne.set(0,0,1),od.set(M,v,P));let E=90,T=1+h*.035;for(let R=0;R<this.streakN;R++){let S=this.streakSeed[R];S.z-=h*t/E,S.z<0&&(S.z+=1,S.x=$t(1),S.y=$t(1));let b=9+Math.abs(S.x)*16;Ne.set(Math.cos(S.y*3.14159)*b,Math.sin(S.y*3.14159)*b*.7+1,(S.z-.35)*E).applyQuaternion(ad).add(u),this.streakPos[R*6]=Ne.x,this.streakPos[R*6+1]=Ne.y,this.streakPos[R*6+2]=Ne.z,this.streakPos[R*6+3]=Ne.x-M*T,this.streakPos[R*6+4]=Ne.y-v*T,this.streakPos[R*6+5]=Ne.z-P*T}this.streaks.geometry.attributes.position.needsUpdate=!0}for(let y of this.waves){if(y.t>=1)continue;y.t+=t/.55;let M=Math.min(y.t,1),v=1-Math.pow(1-M,3);y.m.scale.setScalar(.6+v*y.size),y.m.material.opacity=(1-M)*.9,M>=1&&(y.m.visible=!1)}}};var In={music:{loop:[1,116.86954648526077]},motor:{loop:[.25,4]},jet:{loop:[.25,4]},lift:{loop:[.25,4.6]},wind:{loop:[.25,5]},skid:{loop:[.25,1.7]},click:{},tick:{},ring:{},bank:{},bankBig:{},unlock:{},thud:{},land:{},crash:{},crash2:{},scrape:{},ignite:{},fold:{},unfold:{},whoosh:{},whoosh2:{},splash:{},shutter:{}};var ry="assets/audio/",oy=["motor","jet","lift","wind","skid"],ma=class{constructor(){this.ctx=null,this.vol={master:.8,music:.55,sfx:.9},this.muted=!1,this.paused=!1,this.buffers={},this.layers=null,this.state="idle"}unlock(){if(this.ctx){this.ctx.state==="suspended"&&!this.paused&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let n=e.createDynamicsCompressor();n.threshold.value=-12,n.ratio.value=4,n.attack.value=.005,n.release.value=.2,this.master.connect(n).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.music=e.createGain(),this.music.connect(this.master),this.world=e.createGain(),this.world.connect(this.sfx),this.world.gain.value=0,this.applyVolumes(),this.load()}async fetchBuffer(t){let e=await fetch(`${ry}${t}.mp3`);if(!e.ok)throw new Error(`missing ${t}`);let n=await e.arrayBuffer();return new Promise((i,r)=>this.ctx.decodeAudioData(n,i,r))}async load(){if(this.state!=="idle")return;this.state="loading";let t=Object.keys(In).filter(e=>e!=="music");await Promise.all(t.map(async e=>{try{this.buffers[e]=await this.fetchBuffer(e)}catch{}})),this.startLayers(),this.state="ready";try{let e=await this.fetchBuffer("music"),n=this.ctx.createGain();n.gain.value=0,n.gain.linearRampToValueAtTime(1,this.ctx.currentTime+3),this.loopSource(e,In.music.loop,n).connect(this.music)}catch{}}loopSource(t,e,n){let i=this.ctx.createBufferSource();return i.buffer=t,i.loop=!0,i.loopStart=e[0],i.loopEnd=e[0]+e[1],i.connect(n),i.start(0,e[0]),n}startLayers(){let t=this.ctx,e={};for(let n of oy){let i=this.buffers[n];if(!i)continue;let r=t.createBufferSource();r.buffer=i,r.loop=!0,r.loopStart=In[n].loop[0],r.loopEnd=In[n].loop[0]+In[n].loop[1];let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=18e3;let a=t.createGain();a.gain.value=0,r.connect(o).connect(a).connect(this.world),r.start(0,In[n].loop[0]+Math.random()*In[n].loop[1]*.5),e[n]={src:r,filter:o,gain:a}}if(e.motor&&(e.motor.filter.type="bandpass",e.motor.filter.Q.value=1.6,e.motor.filter.frequency.value=2400),this.buffers.wind){let n=t.createBufferSource();n.buffer=this.buffers.wind,n.loop=!0,n.loopStart=In.wind.loop[0],n.loopEnd=In.wind.loop[0]+In.wind.loop[1],n.playbackRate.value=.5;let i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=420;let r=t.createGain();r.gain.value=0,n.connect(i).connect(r).connect(this.world),n.start(0,In.wind.loop[0]+1.3),e.road={src:n,filter:i,gain:r}}this.layers=e}setVolumes(t){Object.assign(this.vol,t),this.applyVolumes()}setMuted(t){this.muted=t,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted?0:this.vol.master,t,.03),this.sfx.gain.setTargetAtTime(this.vol.sfx,t,.03),this.music.gain.setTargetAtTime(this.vol.music*.8,t,.05)}suspend(t){this.paused=t,this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}play(t,e={}){if(!this.ctx||this.ctx.state!=="running")return;let n=this.buffers[t];if(!n)return;let i=this.ctx.createBufferSource();i.buffer=n,i.playbackRate.value=(e.rate||1)*(e.vary?1+(Math.random()-.5)*e.vary:1);let r=this.ctx.createGain();r.gain.value=e.gain??1,i.connect(r).connect(this.sfx),i.start()}update(t,e,n,i=1){let r=this.layers;if(!this.ctx||this.ctx.state!=="running"||!r)return;let o=this.ctx.currentTime,a=(d,g,x=.07)=>d.setTargetAtTime(g,o,x);a(this.world.gain,n?1:0,.12);let l=e.speed,c=Lt(l/95,0,1),h=e.mode==="fly",u=e.mode==="drive"&&e.offGround<.08,f=Ot(.6,1,i);if(r.motor){let d=u?Lt(Math.abs(e.accel||0)/16,0,1)*.7+(e.boosting?.3:0):0;a(r.motor.src.playbackRate,(1.1+c*1.7)*f),a(r.motor.gain.gain,c>.01?(.012+c*.03)*d:0,.12),a(r.motor.filter.frequency,1900+c*3600)}r.road&&(a(r.road.gain.gain,u?c*(e.surf==="road"?.62:.95):0),a(r.road.filter.frequency,e.surf==="road"?320+c*380:220+c*200)),r.wind&&(a(r.wind.gain.gain,c*c*(h||!u?.75:.5)),a(r.wind.src.playbackRate,.75+c*.6)),r.jet&&(a(r.jet.gain.gain,e.thrust*.55),a(r.jet.src.playbackRate,(.8+e.thrust*.45)*f)),r.lift&&(a(r.lift.gain.gain,e.fold*e.lift*.4),a(r.lift.src.playbackRate,(.85+e.lift*.35)*f)),r.skid&&(a(r.skid.gain.gain,u&&e.surf==="road"?Lt((e.slip-4)/11,0,1)*.5:0,.05),a(r.skid.src.playbackRate,.9+Lt(e.slip,0,20)*.012))}};var ns=[{id:"liftoff",name:"Wheels Up",desc:"Take the big launch ramp and fly",n:1,v:s=>s.launches,reward:300},{id:"flyer",name:"Frequent Flyer",desc:"Launch off big ramps 10 times",n:10,v:s=>s.launches,reward:900},{id:"flip",name:"Head Over Wheels",desc:"Land a flip off any jump",n:1,v:s=>s.flips,reward:300},{id:"acro",name:"Acrobat",desc:"Land 25 flips, spins or rolls",n:25,v:s=>s.flips+s.spins+s.rolls,reward:1500},{id:"rings",name:"Ring Runner",desc:"Fly through 25 rings",n:25,v:s=>s.rings,reward:600},{id:"chain3",name:"Chain Gang",desc:"Complete 3 different ring chains",n:3,v:s=>s.chains.length,reward:1200},{id:"chainAll",name:"Thread Them All",desc:"Complete every ring chain",n:8,v:s=>s.chains.length,reward:4e3},{id:"pad",name:"Bullseye",desc:"Fly in and land on a landing pad",n:1,v:s=>s.pads.length,reward:400},{id:"padAll",name:"Pad Hopper",desc:"Land on all 11 landing pads",n:11,v:s=>s.pads.length,reward:3500},{id:"near",name:"Close Call",desc:"Pull off 10 near misses",n:10,v:s=>s.near,reward:600},{id:"under",name:"Bridge Dweller",desc:"Fly under the bay bridge",n:1,v:s=>s.under,reward:500},{id:"drift",name:"Sideways",desc:"Hold a 3 second drift",n:3,v:s=>s.driftBest,reward:500,dec:1,unit:"s"},{id:"skim",name:"Wave Skimmer",desc:"Skim the ground or water 5 times",n:5,v:s=>s.skim,reward:500},{id:"air",name:"Hang Time",desc:"Stay airborne for 6 seconds on wheels",n:6,v:s=>s.longestAir,reward:700,dec:1,unit:"s"},{id:"speed",name:"Light Speed",desc:"Hit 340 km/h",n:340,v:s=>s.topSpeed*3.6,reward:800,unit:"km/h"},{id:"alt",name:"Cloud Nine",desc:"Climb to 400 m altitude",n:400,v:s=>s.maxAlt,reward:800,unit:"m"},{id:"combo",name:"Showtime",desc:"Bank a single 5,000 point combo",n:5e3,v:s=>s.bestCombo,reward:1500}];function ld(s){let t=Ft.data.stats;return Math.min(s.n,s.v(t)||0)}function cd(s){return Ft.data.done.includes(s.id)}function hd(){let s=Ft.data,t=[];for(let e of ns)s.done.includes(e.id)||(e.v(s.stats)||0)>=e.n&&(s.done.push(e.id),t.push(e));return t}var jc=Math.PI*2,ga=class{constructor(t){this.game=t,this.pot=0,this.mult=1,this.timer=0,this.lines=[],this.rot={x:0,y:0,z:0},this.drift={t:0,pts:0,gap:0},this.skimT=0,this.chain=new Map,this.time=0,this.lastTouchdown=-99}add(t,e,n){e=Math.round(e),this.pot+=e,this.mult=Math.min(10,this.mult+(this.lines.length?1:0)),this.timer=4.2,this.lines.push({name:t,pts:e}),this.lines.length>4&&this.lines.shift(),this.game.car.boost=Math.min(1,this.game.car.boost+.06+e/4e3),this.game.ui.combo(this,!0),n||this.game.audio.play("tick",{rate:1+Math.min(this.mult,10)*.06})}bank(){if(this.pot<=0)return;let t=this.pot*this.mult,e=Ft.data;t>e.stats.bestCombo&&(e.stats.bestCombo=t),this.game.ui.banked(t,this.mult),this.game.audio.play(t>=2e3?"bankBig":"bank"),this.pot=0,this.mult=1,this.lines=[],this.timer=0,this.game.ui.combo(this,!1),this.award(t),this.checkGoals()}award(t){let e=Ft.data,n=e.points;e.points+=t;for(let i of Mn)i.cost>n&&i.cost<=e.points&&!e.unlocked.includes(i.id)&&(e.unlocked.push(i.id),this.game.onUnlock(i));Ft.touch()}checkGoals(){let t=hd();t.forEach((e,n)=>{setTimeout(()=>{this.game.ui.toast("Challenge complete","big",`${e.name} \xB7 +${Ge(e.reward)}`,2600),this.game.audio.play("unlock",{rate:1.12})},900+n*1400),this.award(e.reward)}),t.length&&Ft.touch()}fail(){this.pot>0&&(this.game.ui.toast("Combo lost","bad"),this.pot=0,this.mult=1,this.lines=[],this.timer=0,this.game.ui.combo(this,!1)),this.rot.x=this.rot.y=this.rot.z=0,this.drift.t=this.drift.pts=0}onEvent(t){let e=this.game.car,n=Ft.data.stats;switch(t.type){case"jump":this.rot.x=this.rot.y=this.rot.z=0;break;case"launch":this.add("Lift-off",250),n.launches++;break;case"barrel":this.add("Barrel roll",120);break;case"near":n.near++,t.gap<1.1?this.add("Paint-thin miss",160):this.add("Near miss",80);break;case"under":n.under++,this.add("Under the bridge",300);break;case"crash":this.fail();break;case"land":{if(t.fromFlight){let h=this.padAt(t);if(h){let u=!n.pads.includes(h.name);u&&n.pads.push(h.name),this.add(`Bullseye \xB7 ${h.name}`,(u?900:350)*(h.bonus||1)),this.game.fx.burst("confetti",t.x,t.y,t.z,0,0,0,26)}else this.time-this.lastTouchdown>12&&t.airTime>3&&this.add(t.impact<5?"Butter touchdown":"Touchdown",t.impact<5?150:80);this.lastTouchdown=this.time;break}let i=this.rot,r=Math.floor((Math.abs(i.x)+.9)/jc),o=Math.floor((Math.abs(i.y)+.9)/jc),a=Math.floor((Math.abs(i.z)+.9)/jc);if(t.airTime>n.longestAir&&(n.longestAir=t.airTime),!t.clean&&(r||o||a)){this.game.ui.toast("Sketchy landing","bad"),i.x=i.y=i.z=0;break}t.airTime>.75&&this.add(`Air time ${t.airTime.toFixed(1)}s`,t.airTime*70,!0);let l=h=>h>1?["","","Double ","Triple ","Quad "][Math.min(h,4)]:"";n.flips+=r,n.spins+=o,n.rolls+=a,r&&this.add(l(r)+(i.x>0?"Front flip":"Backflip"),320*r*(r>1?1.3:1)),o&&this.add(`${o*360} Spin`,220*o),a&&this.add(l(a)+"Barrel roll",260*a),t.clean&&t.airTime>1.2&&t.impact<12&&this.add("Clean landing",60,!0);let c=this.padAt(t);c&&t.airTime>1&&this.add(`Bullseye \xB7 ${c.name}`,300),i.x=i.y=i.z=0;break}default:}}padAt(t){for(let e of this.game.world.pads)if(Math.abs(t.y-e.y)<1.2&&Math.hypot(t.x-e.x,t.z-e.z)<e.r+.8)return e;return null}update(t,e){this.time+=t;let n=Ft.data.stats;e.speed>n.topSpeed&&(n.topSpeed=e.speed),e.alt>n.maxAlt&&e.mode==="fly"&&(n.maxAlt=e.alt),this.goalT=(this.goalT||0)+t,this.goalT>.5&&(this.goalT=0,this.checkGoals()),e.mode==="air"&&(this.rot.x+=e.angVel.x*t,this.rot.y+=e.angVel.y*t,this.rot.z+=e.angVel.z*t);let i=this.drift;e.mode==="drive"&&e.offGround<.05&&e.slip>5.5&&e.speed>13?(i.t+=t,i.pts+=e.slip*t*5,i.gap=0):i.t>0&&(i.gap+=t,i.gap>.35&&(i.t>n.driftBest&&(n.driftBest=i.t),i.t>.9&&this.add(`Drift ${i.t.toFixed(1)}s`,i.pts),i.t=i.pts=0)),e.mode==="fly"&&e.skim&&e.alt<3&&e.speed>38?(this.skimT+=t,this.skimT>1.1&&(this.skimT=0,n.skim++,this.add(e.skim==="water"?"Wave skimmer":"Ground hugger",60,!0))):this.skimT=Math.max(0,this.skimT-t),this.checkRings(e),this.pot>0&&(e.mode==="air"||i.t>0||(this.timer-=t),this.timer<=0?this.bank():this.game.ui.comboTimer(this.timer/4.2))}checkRings(t){let e=this.game.world.rings,n=t.prev,i=t.pos;for(let r=0;r<e.length;r++){let o=e[r];if(o.cooldown>0)continue;let a=i.x-o.pos.x,l=i.y+.6-o.pos.y,c=i.z-o.pos.z;if(a*a+l*l+c*c>900)continue;let h=a*o.dir.x+l*o.dir.y+c*o.dir.z,u=(n.x-o.pos.x)*o.dir.x+(n.y+.6-o.pos.y)*o.dir.y+(n.z-o.pos.z)*o.dir.z;if(u*h>0)continue;let f=u/(u-h||1e-6),d=n.x+(i.x-n.x)*f-o.pos.x,g=n.y+.6+(i.y-n.y)*f-o.pos.y,x=n.z+(i.z-n.z)*f-o.pos.z;if(d*d+g*g+x*x>o.r*o.r)continue;o.cooldown=30,o.pulse=1;let p=this.game.world.chains[o.chain],m=this.chain.get(o.chain);(!m||this.time-m.t>16)&&(m={n:0,t:0,seen:new Set}),m.seen.has(o.index)||(m.seen.add(o.index),m.n++),m.t=this.time,this.chain.set(o.chain,m),Ft.data.stats.rings++,this.add(`${p.name} ${m.n}/${p.count}`,100+40*(m.n-1),!0),this.game.audio.play("ring",{rate:1+(m.n-1)*.085}),this.game.fx.burst("ring",o.pos.x,o.pos.y,o.pos.z,t.vel.x*.3,t.vel.y*.3,t.vel.z*.3,22),m.n>=p.count&&(this.add(`${p.name} complete!`,500+p.count*60),Ft.data.stats.chains.includes(p.name)||Ft.data.stats.chains.push(p.name),this.game.audio.play("unlock"),this.chain.delete(o.chain))}}nextUnlock(){let t=Ft.data;return Mn.find(e=>!t.unlocked.includes(e.id))||null}label(){return`${Ge(this.pot)}`}};var xa=class{constructor(t,e){this.canvas=t,this.world=e,this.ctx=t.getContext("2d"),this.base=this.render(e),this.frame=0}render(t){let n=document.createElement("canvas");n.width=n.height=512;let i=n.getContext("2d"),r=t.terrain,o=r.n+1,a=i.createImageData(o,o),l=r.colors;for(let u=0;u<o*o;u++){let f=r.h[u],d=l[u*3],g=l[u*3+1],x=l[u*3+2];f<0&&(d=.07,g=.2,x=.3);let p=f<0?1:.85+Math.min(.3,f/600);a.data[u*4]=Math.min(255,Math.sqrt(d)*255*p*.8),a.data[u*4+1]=Math.min(255,Math.sqrt(g)*255*p*.8),a.data[u*4+2]=Math.min(255,Math.sqrt(x)*255*p*.8),a.data[u*4+3]=255}let c=document.createElement("canvas");c.width=c.height=o,c.getContext("2d").putImageData(a,0,0),i.imageSmoothingEnabled=!0,i.drawImage(c,0,0,512,512);let h=u=>(u+4e3/2)/4e3*512;i.fillStyle="rgba(70,74,84,0.9)",i.fillRect(h(Ct.x0),h(Ct.z0),h(Ct.x1)-h(Ct.x0),h(Ct.z1)-h(Ct.z0)),i.fillStyle="rgba(190,190,200,0.5)";for(let u of t.city.roofList)i.fillRect(h(u.x-u.hx),h(u.z-u.hz),u.hx*2/4e3*512,u.hz*2/4e3*512);i.fillStyle="#3a3d45",i.fillRect(h(ne.x0),h(ne.z-ne.halfW),h(ne.x1)-h(ne.x0),ne.halfW*2/4e3*512),i.lineCap=i.lineJoin="round";for(let u of[0,1])for(let f of t.roads.roads)i.strokeStyle=u?"#f3ead8":"rgba(20,22,28,0.8)",i.lineWidth=(f.lanes===4?3.2:2.2)+(u?0:1.6),i.beginPath(),f.pts.forEach((d,g)=>g?i.lineTo(h(d.x),h(d.z)):i.moveTo(h(d.x),h(d.z))),f.closed&&i.closePath(),i.stroke();for(let u of t.ramps)i.fillStyle=u.launch?"#ff4a3a":"#f0902e",i.beginPath(),i.arc(h(u.x),h(u.z),u.launch?4.2:2.6,0,7),i.fill();i.strokeStyle="#fff3e0",i.lineWidth=1.4;for(let u of t.pads)i.beginPath(),i.arc(h(u.x),h(u.z),3.2,0,7),i.stroke();return n}draw(t){if(this.frame++%2)return;let e=this.canvas,n=this.ctx,i=e.width,r=i/2,o=this.base.width,a=t.mode==="fly"?620:380;this.range=this.range?this.range+(a-this.range)*.06:a;let l=r/this.range/(o/4e3);n.clearRect(0,0,i,i),n.save(),n.beginPath(),n.arc(r,r,r-2,0,7),n.clip(),n.fillStyle="#12303f",n.fillRect(0,0,i,i),n.translate(r,r),n.rotate(t.yaw+Math.PI),n.scale(l,l);let c=(t.pos.x+4e3/2)/4e3*o,h=(t.pos.z+4e3/2)/4e3*o;n.drawImage(this.base,-c,-h);let u=o/4e3;for(let d of this.world.rings){if(d.cooldown>0)continue;let g=d.pos.x-t.pos.x,x=d.pos.z-t.pos.z;g*g+x*x>this.range*this.range*1.1||(n.fillStyle="#5fe6ff",n.beginPath(),n.arc(g*u,x*u,2.2/l,0,7),n.fill())}n.restore(),n.save(),n.translate(r,r),n.fillStyle="#ff3b30",n.strokeStyle="#fff",n.lineWidth=i*.012;let f=i*.055;n.beginPath(),n.moveTo(0,-f*1.3),n.lineTo(f,f),n.lineTo(0,f*.5),n.lineTo(-f,f),n.closePath(),n.fill(),n.stroke(),n.restore(),n.strokeStyle="rgba(255,255,255,0.28)",n.lineWidth=i*.02,n.beginPath(),n.arc(r,r,r-i*.012,0,7),n.stroke()}};var At=s=>document.getElementById(s),en=(s,t,e)=>{let n=document.createElement(s);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n},ya=class{constructor(t){this.game=t,this.screens=["menu","pause","garage","settings","help","photo","challenges"],this.last={},this.hintTimer=null,document.querySelectorAll("[data-act]").forEach(e=>e.addEventListener("click",()=>{t.audio.play("click"),t.act(e.dataset.act)})),At("btn-pause").addEventListener("click",()=>t.act("pause")),At("btn-photo").addEventListener("click",()=>t.act("photo"));for(let e of["p-fov","p-roll","p-pan"])At(e).addEventListener("input",()=>t.photoSliders(+At("p-fov").value,+At("p-roll").value,+At("p-pan").value));At("p-time").addEventListener("click",()=>{t.audio.play("click"),t.cycleTime()}),At("p-hide").addEventListener("click",()=>{document.body.classList.toggle("photo-clean"),At("p-hide").textContent=document.body.classList.contains("photo-clean")?"SHOW UI":"HIDE UI"}),At("p-shot").addEventListener("click",()=>t.takePhoto()),At("p-exit").addEventListener("click",()=>{t.audio.play("click"),t.act("back")}),this.buildHelp()}show(t){for(let i of this.screens)At(i).classList.toggle("hidden",i!==t);At("hud").classList.toggle("hidden",t!==null),document.body.classList.remove("photo-clean"),At("p-hide").textContent="HIDE UI",t==="menu"&&this.menuFoot(),t==="pause"&&this.pauseStats(),t==="garage"&&this.buildGarage(),t==="settings"&&this.buildSettings(),t==="photo"&&this.photoTime(),t==="challenges"&&this.buildChallenges();let e=Ft.data.done.length,n=`${e}/${ns.length}`;At("ch-count-menu").textContent=n,At("ch-count-pause").textContent=n}buildChallenges(){let t=Ft.data.done.length;At("ch-sum").textContent=`${t} / ${ns.length}`;let e=Ft.data.settings.units==="mph",n=(r,o)=>r.unit==="km/h"?e?`${Math.round(o/1.609)} mph`:`${Math.round(o)} km/h`:(r.dec?o.toFixed(r.dec):Ge(Math.floor(o)))+(r.unit?` ${r.unit}`:""),i=ns.map(r=>{let o=cd(r),a=o?r.n:ld(r),l=r.unit==="km/h"&&e?"Hit 211 mph":r.desc;return`<div class="ch${o?" done":""}"><b>${r.name}</b><em>${o?"\u2713 DONE":`+${Ge(r.reward)}`}</em><p>${l}</p>
        <div class="bar"><i style="width:${Math.round(a/r.n*100)}%"></i></div>${o||r.n===1?"":`<span class="num">${n(r,a)} / ${n(r,r.n)}</span>`}</div>`});At("ch-body").innerHTML=`<div class="ch-list">${i.join("")}</div>`}loading(t,e){At("load-fill").style.width=`${Math.round(t*100)}%`,e&&(At("load-tip").textContent=e)}loadingDone(){let t=At("loading");t.classList.add("out"),setTimeout(()=>t.remove(),700)}hud(t,e){let n=this.last,i=Ft.data.settings,r=Math.round(t.speed*(i.units==="mph"?2.23694:3.6));r!==n.v&&(n.v=r,At("speed").textContent=r),i.units!==n.units&&(n.units=i.units,At("unit").textContent=i.units==="mph"?"MPH":"KM/H");let o=t.mode==="fly"?"fly":t.mode==="air"?"air":"drive";if(o!==n.mode){n.mode=o;let c=At("mode");c.textContent=o==="fly"?"FLIGHT":o==="air"?"AIRBORNE":"DRIVE",c.className=o,At("alt").classList.toggle("on",o!=="drive"),document.body.classList.toggle("flying",o==="fly"),At("boost").classList.toggle("hot",o==="fly"),At("t-boost").textContent=o==="fly"?"UP":o==="air"?"FLY":"BOOST",At("t-shift").textContent=o==="fly"?"DOWN":"DRIFT",At("t-fly").textContent=o==="fly"?"ROLL":"FLY"}if(o!=="drive"){let c=Math.max(0,Math.round(t.alt));c!==n.alt&&(n.alt=c,At("alt").textContent=`ALT ${c} M`)}let a=o==="fly"?1:t.boost;Math.abs(a-(n.boost??-1))>.004&&(n.boost=a,At("boost-fill").style.transform=`scaleX(${a.toFixed(3)})`);let l=Ft.data.points;if(l!==n.pts){n.pts=l,At("score-val").textContent=Ge(l);let c=e.nextUnlock();if(c){let h=[...Mn].reverse().find(f=>f.cost<=l),u=h?h.cost:0;At("next-fill").style.width=`${Lt((l-u)/(c.cost-u)*100,0,100)}%`,At("next-label").textContent=`${c.name} \xB7 ${Ge(c.cost)}`}else At("next-fill").style.width="100%",At("next-label").textContent="All paints unlocked"}}combo(t,e){let n=At("combo");if(t.pot<=0){n.classList.add("hidden");return}n.classList.remove("hidden");let i=At("combo-lines");i.innerHTML="";for(let r of t.lines.slice(-3))i.appendChild(en("div","",`${r.name}<span>+${Ge(r.pts)}</span>`));if(At("combo-pts").textContent=Ge(t.pot),At("combo-mult").textContent=`\xD7${t.mult}`,e){let r=At("combo-pot");r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop")}}comboTimer(t){At("combo-timer").firstElementChild.style.transform=`scaleX(${Lt(t,0,1).toFixed(3)})`}banked(t,e){this.toast(`+${Ge(t)}`,"good",e>1?`Combo \xD7${e} banked`:"Banked",1700);let n=At("score");n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")}toast(t,e="",n="",i=2200){let r=At("toasts");for(;r.children.length>2;)r.firstElementChild.remove();let o=en("div",`toast ${e}`,n?`${t}<small>${n}</small>`:t);r.appendChild(o),setTimeout(()=>{o.classList.add("out"),setTimeout(()=>o.remove(),320)},i)}hint(t,e=7e3){let n=At("hint");if(clearTimeout(this.hintTimer),!t){n.classList.add("hidden");return}n.innerHTML=t,n.classList.remove("hidden"),this.hintTimer=setTimeout(()=>n.classList.add("hidden"),e)}cinematic(t){document.body.classList.toggle("cine",t)}cineTitle(){let t=At("cine-title");t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}flash(){let t=At("flash");t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}fade(t){At("fade").classList.toggle("on",t)}touchMode(t){document.body.classList.toggle("touch",t),At("touch").classList.toggle("hidden",!t)}joy(t,e,n,i){let r=At("joy");r.classList.toggle("hidden",!i),At("joy-ghost").classList.toggle("hidden",i),i&&t&&(r.style.left=`${t.x}px`,r.style.top=`${t.y}px`,r.firstElementChild.style.transform=`translate(${e*40}px, ${n*40}px)`)}menuFoot(){let t=Ft.data;At("menu-foot").innerHTML=`Stunt points <b>${Ge(t.points)}</b> &nbsp;\xB7&nbsp; Paints <b>${t.unlocked.length}/${Mn.length}</b>`}pauseStats(){let t=Ft.data,e=t.stats,n=t.settings.units==="mph";At("pause-stats").innerHTML=`
      <div>Stunt points<b>${Ge(t.points)}</b></div>
      <div>Best combo<b>${Ge(e.bestCombo)}</b></div>
      <div>Top speed<b>${Math.round(e.topSpeed*(n?2.23694:3.6))} ${n?"mph":"km/h"}</b></div>
      <div>Longest air<b>${e.longestAir.toFixed(1)} s</b></div>
      <div>Rings<b>${Ge(e.rings)}</b></div>
      <div>Landing pads<b>${e.pads.length}/${this.game.world.pads.length}</b></div>`}buildGarage(){let t=At("g-strip"),e=Ft.data;t.innerHTML="",this.gSel=this.gSel&&Mn.some(o=>o.id===this.gSel)?this.gSel:e.paint;for(let o of Mn){let a=!e.unlocked.includes(o.id),l=en("button",`swatch${a?" locked":""}${o.id===this.gSel?" on":""}`,"<i></i>");l.style.setProperty("--c",o.color),l.setAttribute("aria-label",o.name),l.addEventListener("click",()=>{this.game.audio.play("click"),this.gSel=o.id,this.game.previewPaint(o.id),this.buildGarage()}),t.appendChild(l),o.id===this.gSel&&setTimeout(()=>l.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}),0)}let n=Mn.find(o=>o.id===this.gSel),i=!e.unlocked.includes(n.id);At("g-name").textContent=n.name;let r=At("g-state");r.classList.toggle("locked",i),r.textContent=i?`Locked \xB7 ${Ge(n.cost)} stunt points (${Ge(Math.max(0,n.cost-e.points))} to go)`:n.id===e.paint?"Equipped":"Unlocked \xB7 tap done to equip",At("g-points").innerHTML=`\u2605 ${Ge(e.points)} stunt points`}buildSettings(){let t=At("settings-body"),e=Ft.data.settings,n=this.game;t.innerHTML="";let i=p=>{let m=en("div","set-group",`<h3>${p}</h3>`);return t.appendChild(m),m},r=(p,m,y,M=0,v=1)=>{let P=en("div","set-row",`<span>${m}</span>`),E=en("input");E.type="range",E.min=M,E.max=v,E.step=.01,E.value=e[y],E.addEventListener("input",()=>{e[y]=+E.value,n.applySettings(),Ft.touch()}),P.appendChild(E),p.appendChild(P)},o=(p,m,y,M)=>{let v=en("div","set-row",`<span>${m}</span>`),P=en("div","seg");for(let[E,T]of M){let R=en("button",e[y]===E?"on":"",T);R.addEventListener("click",()=>{e[y]=E,n.audio.play("click"),n.applySettings(),Ft.touch(),this.buildSettings()}),P.appendChild(R)}v.appendChild(P),p.appendChild(v)},a=i("Audio");r(a,"Master volume","master"),r(a,"Music","music"),r(a,"Sound effects","sfx");let l=i("Graphics");o(l,"Quality","quality",[["auto","Auto"],["low","Low"],["medium","Medium"],["high","High"]]),o(l,"Time of day","time",Xs.map(p=>[p,ia[p].label]));let c=i("Gameplay");o(c,"Cinematic take-off","cinematic",[[!0,"On"],[!1,"Off"]]),o(c,"Camera shake","shake",[[!0,"On"],[!1,"Off"]]),o(c,"Speed units","units",[["kmh","km/h"],["mph","mph"]]),r(c,"Look sensitivity","sens",.4,2);let h=i("Keyboard controls"),u=en("div","keys");for(let[p,m]of Vu){let y=en("div","key-row",`<span>${m}</span>`),M=en("div","slots");for(let v=0;v<2;v++){let P=en("button","",Qi(Ft.data.keys[p][v]));P.addEventListener("click",()=>{P.textContent="Press\u2026",P.classList.add("listen"),n.input.capture=E=>{if(E!=="Escape"||p==="pause"){for(let T in Ft.data.keys)Ft.data.keys[T]=Ft.data.keys[T].map(R=>R===E?null:R);Ft.data.keys[p][v]=E}Ft.touch(),this.buildSettings()}}),M.appendChild(P)}y.appendChild(M),u.appendChild(y)}h.appendChild(u);let f=en("button","link-btn","Restore default keys");f.style.marginTop="10px",f.addEventListener("click",()=>{for(let p in br)Ft.data.keys[p]=br[p].slice();Ft.touch(),this.buildSettings()}),h.appendChild(f);let d=i("Progress"),g=en("div","set-row","<span>Stunt points and unlocked paints</span>"),x=en("button","link-btn","Reset progress");x.addEventListener("click",()=>{x.dataset.sure?(n.resetProgress(),this.buildSettings()):(x.dataset.sure="1",x.textContent="Tap again to confirm")}),g.appendChild(x),d.appendChild(g)}buildHelp(){let t=e=>Qi(Ft.data.keys[e][0]);At("help-body").innerHTML=`<div class="help-grid">
      <div><h3>The idea</h3>
        <p><b>Free play.</b> Floor it down the runway, hit the launch ramp, and the roadster folds its wheels, lights its thrusters and takes off. Fly anywhere, land anywhere, drive again.</p>
        <p>Stunts fill a combo pot. Stay in control for a moment to <b>bank</b> it \u2014 crash and it is gone. Stunt points unlock new paint, and <b>Challenges</b> pay big bonuses for milestones.</p></div>
      <div><h3>Driving</h3><ul>
        <li><kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> or arrows \u2014 drive</li>
        <li><kbd>Space</kbd> \u2014 boost</li>
        <li><kbd>Shift</kbd> \u2014 handbrake drift</li>
        <li><kbd>F</kbd> \u2014 take off anywhere</li>
        <li><kbd>R</kbd> reset \xB7 <kbd>C</kbd> look back \xB7 drag mouse to look around</li></ul></div>
      <div><h3>In the air</h3><ul>
        <li>Off a ramp: <kbd>W</kbd>/<kbd>S</kbd> flip, <kbd>A</kbd>/<kbd>D</kbd> spin, <kbd>Q</kbd>/<kbd>E</kbd> roll</li>
        <li><kbd>Space</kbd> mid-air \u2014 thrusters on, start flying</li>
        <li>Flying: <kbd>Space</kbd> climb, <kbd>Shift</kbd> descend, <kbd>W</kbd>/<kbd>S</kbd> speed, <kbd>A</kbd>/<kbd>D</kbd> turn</li>
        <li>Hold <kbd>Shift</kbd> near the ground to drop the wheels and land</li>
        <li><kbd>Q</kbd>/<kbd>E</kbd> barrel roll \xB7 <kbd>F</kbd> cut thrusters</li></ul></div>
      <div><h3>Touch</h3><ul>
        <li>Left thumb: stick steers, push up for gas, pull down to brake</li>
        <li><b>BOOST / UP</b>, <b>DRIFT / DOWN</b> and <b>FLY</b> buttons on the right</li>
        <li>Drag anywhere else to look around</li></ul></div>
      <div><h3>Stunt points</h3><ul>
        <li><b>Rings</b> \u2014 fly a whole chain for a bonus</li>
        <li><b>Near misses</b> \u2014 thread towers, bridge cables and hangars</li>
        <li><b>Flips, spins, rolls</b> \u2014 land them on your wheels</li>
        <li><b>Landing pads</b> \u2014 touch down on the bullseye</li>
        <li><b>Drifts and skimming</b> low over the water</li></ul></div>
      <div><h3>Extras</h3><ul>
        <li><kbd>P</kbd> \u2014 photo mode: orbit, zoom, tilt, change the time of day and save the shot</li>
        <li><kbd>Esc</kbd> \u2014 pause, garage and settings</li>
        <li>Keys can be remapped in Settings; gamepads work too</li></ul></div>
    </div>`}slide(t,e,n){let i=At("showcase");At("sc-num").textContent=`0${t+1} / 0${e}`,At("sc-title").textContent=n.title,At("sc-text").textContent=n.text,At("sc-dots").innerHTML=Array.from({length:e},(r,o)=>`<i class="${o===t?"on":""}"></i>`).join(""),i.classList.remove("in"),i.offsetWidth,i.classList.add("in")}photoTime(){At("p-time").textContent=ia[this.game.world.sky.name].label.toUpperCase()}};var ud=-400,is=ud+.18;function dd(){let s=new ue,t=(x,p,m)=>new Qt({color:new ut(x,p,m),fog:!1}),e=new mt(new Vn(42,64).rotateX(-Math.PI/2),new xr({color:658190,specular:3158586,shininess:70,fog:!1}));e.receiveShadow=!0;let n=new mt(new Ie(4.3,4.5,.18,64),new xr({color:1711138,specular:5593183,shininess:90,fog:!1}));n.position.y=.09,n.receiveShadow=!0,s.userData.stage=n;let i=new mt(new Ie(42,42,26,64,1,!0),new Qt({color:460811,side:ze,fog:!1}));i.position.y=13;let r=new mt(new Vn(42,48).rotateX(Math.PI/2),new Qt({color:263431,fog:!1}));r.position.y=26,s.add(e,n,i,r);let o=(x,p,m,y)=>{let M=new mt(new Tn(x,p,6,96).rotateX(Math.PI/2),y);return M.position.y=m,s.add(M),M};o(4.42,.035,.19,t(2.6,2.4,2.1)),o(9,.03,.02,t(2.6,.22,.16)),o(16,.03,.02,t(.5,.5,.55)),o(8,.1,13,t(2.2,2.1,1.9)),o(15,.06,16,t(1.3,1.25,1.2));let a=new Pe(.35,15,.12);for(let x=0;x<24;x++){let p=x/24*Math.PI*2,m=new mt(a,x%3===0?t(3.2,.3,.22):t(1.5,1.45,1.4));m.position.set(Math.sin(p)*40,8.5,Math.cos(p)*40),m.rotation.y=p,s.add(m)}let l=document.createElement("canvas");l.width=2048,l.height=384;let c=l.getContext("2d");c.fillStyle="#07080b",c.fillRect(0,0,2048,384),c.textAlign="center",c.textBaseline="middle",c.fillStyle="#fff3e0",c.font='italic 700 250px "Barlow Condensed", "Arial Narrow", Arial, sans-serif',c.fillText("FLYING ROADSTER",1024,200),c.fillStyle="#e2202c",c.fillRect(250,340,1548,14);let h=new sn(l);h.colorSpace=Ae,h.anisotropy=8;for(let x of[0,Math.PI]){let p=new mt(new Qe(40,7.5),new Qt({map:h,fog:!1}));p.position.set(Math.sin(x)*-38,11,Math.cos(x)*-38),p.rotation.y=x,s.add(p)}for(let[x,p,m,y]of[[5,9,6,110],[-7,7,-4,85],[0,12,-9,60]]){let M=new Bs(16777215,y,45,2);M.position.set(x,p,m),s.add(M)}let u=document.createElement("canvas");u.width=u.height=128;let f=u.getContext("2d"),d=f.createRadialGradient(64,64,4,64,64,64);d.addColorStop(0,"rgba(0,0,0,0.85)"),d.addColorStop(.55,"rgba(0,0,0,0.45)"),d.addColorStop(1,"rgba(0,0,0,0)"),f.fillStyle=d,f.fillRect(0,0,128,128);let g=new mt(new Qe(1,1).rotateX(-Math.PI/2),new Qt({map:new sn(u),transparent:!0,depthWrite:!1,fog:!1}));return g.position.y=.185,g.renderOrder=1,s.userData.shadow=g,s.add(g),s.name="showroom",e.name="hallFloor",s.position.y=ud,s}var va=[{title:"MEET THE ROADSTER",text:"All-electric, near silent and absurdly quick. One car, one island, no rules.",yaw:2.45,pitch:.11,dist:7.6,fly:0},{title:"HIT THE RAMP",text:"Floor it down the runway and take the launch ramp for a slow-motion lift-off.",yaw:.75,pitch:.16,dist:8.2,fly:0},{title:"WHEELS UP",text:"The wheels fold away, the cold-gas thrusters fire and the roadster simply flies.",yaw:3.95,pitch:.08,dist:8.6,fly:1},{title:"FLY ANYWHERE",text:"Thread the ring chains, skim the bay, slip under the bridge, land on a rooftop.",yaw:1.5,pitch:.3,dist:8.4,fly:1},{title:"STUNT FOR PAINT",text:"Flips, drifts, near misses and combos earn points that unlock 13 more colours.",yaw:5.3,pitch:.14,dist:7.8,fly:0},{title:"FRAME THE SHOT",text:"Photo mode with golden hour, clear day and night. Save it and show it off.",yaw:2.9,pitch:.42,dist:9,fly:0}],ss=1/120,Rr=()=>new Promise(s=>requestAnimationFrame(()=>s())),qs=new I,fd=new I,th=class{constructor(){this.state="loading",this.returnTo="menu",this.acc=0,this.last=0,this.launch=null,this.cine=null,this.timeScale=1,this.liftFx=0,this.pend={fly:!1,boostPressed:!1},this.respawning=!1,this.playTime=0,this.hinted={},this.show={pos:new I(0,is,0),quat:new pe,vel:new I,yaw:0,speed:0,mode:"show",fold:0,lift:0,thrust:0,hover:0,alt:0,groundY:is,slide:-1,t:99},this.showCam={pos:new I(0,is,0),yaw:0}}async boot(){let t=document.getElementById("game");this.audio=new ma,this.ui=new ya(this),this.ui.loading(.08,"Charging the thrusters\u2026"),await Rr(),await An.init(),An.loadingStart(),Ft.load(),this.ui.buildHelp();try{await Promise.race([document.fonts.load('italic 700 40px "Barlow Condensed"'),new Promise(n=>setTimeout(n,1500))])}catch{}this.ui.loading(.2,"Raising the island\u2026"),await Rr(),this.gfx=new $o(t),this.scene=new Ti,this.camera=new Ke(60,innerWidth/innerHeight,.6,9e3),this.world=new sa(this.scene,this.gfx.renderer);for(let n of ns)n.id==="chainAll"&&(n.n=this.world.chains.length,n.desc=`Complete all ${n.n} ring chains`),n.id==="padAll"&&(n.n=this.world.pads.length,n.desc=`Land on all ${n.n} landing pads`);this.ui.loading(.62,"Polishing the paint\u2026"),await Rr(),this.model=new la,this.scene.add(this.model.root),this.hall=dd(),this.scene.add(this.hall),this.car=new ua(this.world),this.rig=new da(this.camera,this.world),this.fx=new pa(this.scene,this.model),this.input=new Go(t,Ft.data.keys),this.stunts=new ga(this),this.minimap=new xa(document.getElementById("minimap"),this.world),this.input.onTouchMode=n=>this.ui.touchMode(n),this.input.onJoy=(n,i,r,o)=>this.ui.joy(n,i,r,o),this.input.bindButton(document.getElementById("t-boost"),"boost"),this.input.bindButton(document.getElementById("t-shift"),"shift"),this.input.bindButton(document.getElementById("t-fly"),"fly"),matchMedia("(pointer: coarse)").matches&&"ontouchstart"in window&&(this.input.isTouch=!0,this.ui.touchMode(!0)),this.gfx.init(this.scene,this.camera,this.world),this.applySettings(!0),this.setPaint(Ft.data.paint),this.rig.orbit.yaw=2.45,this.rig.orbit.pitch=.12,this.rig.orbit.dist=7.6,this.rig.orbit.floor=is+.25,this.updateShow(0,!1),this.ui.loading(.85,"Warming up the shaders\u2026"),await Rr();try{this.gfx.renderer.compile(this.scene,this.camera)}catch{}this.gfx.render(),this.ui.loading(1,"Ready for take-off"),await Rr(),An.onMute=n=>this.audio.setMuted(n),this.audio.setMuted(An.muted);let e=()=>this.audio.unlock();addEventListener("pointerdown",e),addEventListener("keydown",e),addEventListener("touchend",e),document.addEventListener("visibilitychange",()=>{document.hidden?(this.state==="play"&&this.act("pause"),this.audio.suspend(!0),Ft.flush()):this.audio.suspend(!1)}),addEventListener("pagehide",()=>Ft.flush()),addEventListener("resize",()=>this.gfx.resize(!0)),An.loadingStop(),this.ui.loadingDone(),this.setState("menu"),this.last=performance.now(),requestAnimationFrame(n=>this.frame(n))}setState(t){let e=this.state;if(this.state=t,this.ui.show(t==="play"?null:t),t==="play"?An.gameplayStart():An.gameplayStop(),t==="menu"||t==="garage"?this.inHall=!0:(t==="play"||t==="pause"||t==="photo")&&(this.inHall=!1),this.rig.orbit.floor=this.inHall?is+.25:null,this.world.sky.setStudio(!!this.inHall),this.fx&&this.fx.reset(),t==="menu"&&(this.show.slide=-1,this.show.t=99),t==="menu"||t==="garage"){let n=this.rig.orbit;n.roll=0,n.panY=0,n.fov=40,t==="garage"?(n.dist=6.6,n.pitch=.2,n.panX=0):(n.dist=7.6,n.pitch=.11,n.panX=this.camera.aspect>1?2.1:0,e==="loading"&&(n.yaw=2.45))}t==="pause"&&e==="garage"&&(this.syncModel(0),this.rig.snap(this.car),this.rig.update(1/60,this.car,null,{})),t!=="play"&&(this.ui.cinematic(!1),this.ui.hint(null)),t!=="play"&&t!=="photo"&&Ft.flush()}act(t){switch(t){case"play":this.audio.unlock(),(this.car.mode!=="drive"||this.car.overWater)&&this.car.reset(Le.x,Le.z,Le.yaw),this.rig.snap(this.car),this.fx.reset(),this.setState("play"),this.firstHints();break;case"resume":this.setState("play");break;case"pause":this.state==="play"&&(this.endCinematic(),this.setState("pause"));break;case"garage":this.returnTo=this.state,this.setState("garage");break;case"settings":this.returnTo=this.state,this.setState("settings");break;case"help":this.returnTo=this.state,this.setState("help");break;case"challenges":this.returnTo=this.state,this.setState("challenges");break;case"photo":if(this.state==="play"||this.state==="pause"){this.endCinematic();let e=this.rig.orbit;e.yaw=Math.atan2(this.camera.position.x-this.car.pos.x,this.camera.position.z-this.car.pos.z)-this.car.yaw,e.pitch=.16,e.dist=8,e.roll=0,e.fov=42,e.panX=0,e.panY=0,document.getElementById("p-fov").value=42,document.getElementById("p-roll").value=0,document.getElementById("p-pan").value=0,this.setState("photo")}break;case"menu":this.stunts.bank(),this.car.reset(Le.x,Le.z,Le.yaw),this.syncModel(0),this.setState("menu");break;case"respawn":this.stunts.fail(),this.car.reset(Le.x,Le.z,Le.yaw),this.rig.snap(this.car),this.fx.reset(),this.setState("play");break;case"back":if(this.state==="garage"){let e=this.ui.gSel;e&&Ft.data.unlocked.includes(e)&&(Ft.data.paint=e,Ft.touch()),this.setPaint(Ft.data.paint),this.ui.gSel=null}this.setState(this.state==="photo"?"play":this.returnTo==="pause"?"pause":"menu");break;default:}}applySettings(t){let e=Ft.data.settings;this.audio.setVolumes({master:e.master,music:e.music,sfx:e.sfx}),(t||e.quality!==this.gfx.setting)&&this.gfx.setQuality(e.quality),(e.time!==this.world.sky.name||t)&&this.world.sky.setTime(e.time,!!t),this.rig.sens=e.sens}cycleTime(){let t=Ft.data.settings;t.time=Xs[(Xs.indexOf(t.time)+1)%Xs.length],this.world.sky.setTime(t.time,!1),this.ui.photoTime(),Ft.touch()}setPaint(t){let e=Mn.find(n=>n.id===t)||Mn[0];this.model.setPaint(e)}previewPaint(t){this.setPaint(t)}onUnlock(t){this.ui.toast(`New paint \xB7 ${t.name}`,"big","Open the garage to equip it",3600),this.audio.play("unlock"),this.fx.burst("confetti",this.car.pos.x,this.car.pos.y,this.car.pos.z,0,0,0,40),An.happytime()}resetProgress(){Ft.reset(),this.setPaint(Ft.data.paint),this.ui.last={}}photoSliders(t,e,n){let i=this.rig.orbit;i.fov=t,i.roll=e*Math.PI/180,i.panY=n/10}takePhoto(){document.body.classList.add("photo-clean"),this.audio.play("shutter");let t=this.gfx.snapshot(),e=t.getContext("2d"),n=t.width,i=t.height,r=Math.max(12,i/46),o=e.createRadialGradient(n/2,i*.46,i*.45,n/2,i*.46,Math.hypot(n,i)*.62);o.addColorStop(0,"rgba(10,4,8,0)"),o.addColorStop(1,"rgba(10,4,8,0.32)"),e.fillStyle=o,e.fillRect(0,0,n,i),e.font=`italic 700 ${r*1.5}px "Barlow Condensed", Arial, sans-serif`,e.textAlign="right",e.textBaseline="alphabetic",e.fillStyle="rgba(255,255,255,0.92)",e.shadowColor="rgba(0,0,0,0.5)",e.shadowBlur=r*.5,e.fillText("FLYING ROADSTER",n-r*1.2,i-r*1.1),this.ui.flash(),t.toBlob(async a=>{if(document.body.classList.remove("photo-clean"),document.getElementById("p-hide").textContent="HIDE UI",!a)return;let l=new File([a],"flying-roadster.png",{type:"image/png"});try{if(this.input.isTouch&&navigator.canShare&&navigator.canShare({files:[l]})){await navigator.share({files:[l],title:"Flying Roadster"});return}}catch{}let c=document.createElement("a");c.href=URL.createObjectURL(a),c.download=`flying-roadster-${Date.now()}.png`,document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(c.href),4e3)},"image/png")}firstHints(){if(this.hinted.start)return;this.hinted.start=!0;let t=e=>Qi(Ft.data.keys[e][0]);this.input.isTouch?this.ui.hint("<span>Push the stick <b>up</b> for gas</span><span><b>BOOST</b> down the runway</span><span>Hit the <b>ramp</b></span>",9e3):this.ui.hint(`<span><kbd>${t("forward")}</kbd>Accelerate</span><span><kbd>${t("left")}</kbd><kbd>${t("right")}</kbd>Steer</span><span><kbd>${t("boost")}</kbd>Boost</span><span><b>Hit the ramp at full speed</b></span>`,1e4)}handle(t){let e=this.car,n=this.fx,i=this.audio,r=e.pos,o=Ft.data.settings.shake?1:0;switch(this.stunts.onEvent(t),t.type){case"launch":e.foldTarget=1,e.launching=!0,i.play("fold",{rate:.7}),i.play("whoosh2",{rate:.55,gain:.8}),this.launch={t:0},this.liftFx=Math.max(this.liftFx,.35),Ft.data.settings.cinematic&&(this.cine={t:0,dur:2.8},this.rig.startCinematic(e,2.8),this.ui.cinematic(!0));break;case"engage":{if(fd.set(-Math.sin(e.yaw),.15,-Math.cos(e.yaw)),qs.set(0,.6,-2.3).applyQuaternion(e.quat).add(r),n.shockwave(qs,fd,t.fromRamp?12:7),n.burst("ignite",qs.x,qs.y,qs.z,e.vel.x*.5,e.vel.y*.5,e.vel.z*.5,t.fromRamp?34:18),i.play("ignite",{gain:t.fromRamp?1:.7}),t.fromRamp||i.play("fold"),this.rig.addShake(.5*o),t.fromRamp&&(this.liftFx=1.25,this.rig.punch=1,i.play("whoosh",{rate:.8,gain:.9}),this.ui.flash(),this.cine?this.ui.cineTitle():this.ui.toast("Lift-off","big","Wheels up \xB7 thrusters on",1800)),t.wasGround&&n.burst("dust",r.x,r.y,r.z,0,0,0,14),!this.hinted.fly){this.hinted.fly=!0;let a=l=>Qi(Ft.data.keys[l][0]);setTimeout(()=>{this.state==="play"&&(this.input.isTouch?this.ui.hint("<span><b>UP</b> climb</span><span><b>DOWN</b> descend &amp; land</span><span>Fly through the <b>rings</b></span>",9e3):this.ui.hint(`<span><kbd>${a("boost")}</kbd>Climb</span><span><kbd>${a("shift")}</kbd>Descend &amp; land</span><span><kbd>${a("rollL")}</kbd><kbd>${a("rollR")}</kbd>Roll</span><span>Fly through the <b>rings</b></span>`,9e3))},t.fromRamp?2600:600)}break}case"disengage":i.play("unfold");break;case"land":i.play("land",{gain:Lt(.4+t.impact/20,.4,1)}),t.fromFlight&&i.play("unfold",{gain:.6}),n.burst("dust",r.x,r.y,r.z,e.vel.x,0,e.vel.z,t.fromFlight?10:Lt(Math.round(t.impact),6,20)),this.rig.addShake(Lt(t.impact/28,.1,.7)*o),t.fromFlight&&!this.hinted.land&&(this.hinted.land=!0,this.input.isTouch?this.ui.hint("<span>Tap <b>FLY</b> to take off anywhere</span>",6e3):this.ui.hint(`<span><kbd>${Qi(Ft.data.keys.fly[0])}</kbd>Take off again anywhere</span>`,6e3)),this.launch=null;break;case"thump":t.impact>5&&(i.play("thud",{gain:Lt(t.impact/22,.25,.9),vary:.2}),this.rig.addShake(Lt(t.impact/50,0,.4)*o));break;case"crash":i.play("crash",{gain:Lt(t.impact/26,.5,1),vary:.15}),i.play("crash2",{gain:Lt(t.impact/30,.4,.9),rate:.8,vary:.2}),n.burst("spark",t.x??r.x,t.y??r.y+.5,t.z??r.z,e.vel.x,2,e.vel.z,22),this.rig.addShake(.9*o),this.launch=null,e.launching=!1,this.endCinematic();break;case"scrape":i.play("scrape",{gain:Lt(t.impact/9,.3,.9),vary:.3}),n.burst("spark",t.x,t.y,t.z,e.vel.x,1,e.vel.z,8),this.rig.addShake(.25*o);break;case"near":case"under":i.play("whoosh",{rate:.55,vary:.2});break;case"barrel":i.play("whoosh2",{rate:.5});break;case"jump":t.speed>30&&i.play("whoosh",{gain:.5,rate:.42});break;case"edge":this.ui.toast("Turning back to the island","","",1800);break;case"splash":if(this.respawning)break;this.respawning=!0,i.play("splash"),n.burst("splash",r.x,.2,r.z,e.vel.x,0,e.vel.z,36),this.stunts.fail(),this.endCinematic(),this.launch=null,this.ui.toast("Splashdown","bad","Back to dry land",1600),setTimeout(()=>this.ui.fade(!0),250),setTimeout(()=>{this.car.respawn(),this.rig.snap(this.car),this.fx.reset(),this.syncModel(0),this.ui.fade(!1),this.respawning=!1},640);break;default:}}tick(t){let e=this.car;if(e.step(ss,t),this.launch&&(this.launch.t+=ss,e.mode!=="air"?this.launch=null:this.launch.t>=.34&&(e.engageFlight(!0),this.launch=null)),e.events.length){let n=e.events.splice(0);for(let i of n)this.handle(i)}this.stunts.update(ss,e)}debugAdvance(t,e={}){let n=Object.assign({steer:0,throttle:0,boost:!1,shift:!1,roll:0,fly:!1,boostPressed:!1,look:!1},e);for(let i=Math.round(t/ss);i>0;i--)this.tick(n),n.fly=n.boostPressed=!1;this.syncModel(ss)}endCinematic(){this.cine&&(this.cine=null,this.rig.cine=null,this.timeScale=1,this.ui.cinematic(!1))}syncModel(t){let e=this.car,n=this.model;n.root.position.copy(e.pos),n.root.quaternion.copy(e.quat);let i=e.mode==="fly"?Math.sin(this.world.time*2.1)*.05*(1-Lt(e.speed/30,0,1)):0,r=e.mode==="drive"?Lt(e.yawRate*e.speed*.0024,-.06,.06):0,o=e.mode==="drive"?e.boosting?-.022:e.braking?.02:0:0;n.body.rotation.z=Ot(n.body.rotation.z,r,1-Math.exp(-8*t)),n.body.rotation.x=Ot(n.body.rotation.x,o,1-Math.exp(-8*t)),n.body.position.y=i;let a=Math.sin(e.yaw),l=Math.cos(e.yaw),c=e.vel.x*a+e.vel.z*l;n.pose(e.fold,e.steer*Ot(.5,.12,Lt(e.speed/60,0,1)),c*t/.35,e.lift),n.setLights(e.braking?1:0,this.world.sky.v.lamps>1.2?1:this.world.sky.v.lamps*.5)}updateShow(t,e,n){let i=this.show,r=this.rig.orbit,o=this.model;i.t+=t,!e&&i.t>4.6&&(i.t=0,i.slide=(i.slide+1)%va.length,this.ui.slide(i.slide,va.length,va[i.slide]));let a=e?{fly:0}:va[Math.max(0,i.slide)];if(!e){r.yaw=Ci(r.yaw,a.yaw,1.6,t)+t*.05,r.pitch=te(r.pitch,a.pitch,1.6,t);let h=this.camera.aspect<1;r.dist=te(r.dist,a.dist*(h?1.18:1),1.6,t),r.panY=te(r.panY,h?.75:0,3,t)}i.fold=Lt(i.fold+(a.fly?1:-1)*t/.7,0,1),i.lift=te(i.lift,a.fly?.4:0,3,t),i.thrust=te(i.thrust,a.fly?.3:0,3,t),i.hover=te(i.hover,a.fly?.85:0,2.2,t),i.yaw+=t*(e?.12:.22),i.pos.y=is+i.hover+Math.sin(this.world.time*2)*.04*i.hover,i.quat.setFromAxisAngle(qs.set(0,1,0),i.yaw),o.root.position.copy(i.pos),o.root.quaternion.copy(i.quat);let l=this.hall.userData.shadow,c=1+i.hover*.5;l.rotation.y=i.yaw,l.scale.set(2.5*c,1,5.6*c),l.material.opacity=1-i.hover*.55,o.body.rotation.set(Math.sin(this.world.time*1.3)*.02*i.hover,0,0),o.body.position.y=0,o.pose(i.fold,0,0,i.lift),o.setLights(0,1),this.rig.updateOrbit(t,this.showCam,e?n:null,0),this.world.update(t,this.camera,i.pos),this.fx.update(t,i,this.camera,this.gfx.h)}frame(t){requestAnimationFrame(l=>this.frame(l));let e=Math.min((t-this.last)/1e3,.1);this.last=t;let n=this.input.poll(this.car.mode==="fly"),i=this.input.takeDrag(),r=this.car,o=this.input.state,a=0;if(this.state==="play"?n.pause?this.act("pause"):n.photo?this.act("photo"):n.reset&&!this.respawning&&(this.stunts.fail(),r.respawn(),this.rig.snap(r),this.fx.reset()):n.pause?this.state==="pause"?this.act("resume"):(this.state==="photo"||this.state==="garage"||this.state==="settings"||this.state==="help"||this.state==="challenges")&&this.act("back"):this.state==="photo"&&n.photo&&this.act("back"),this.state==="play"){if(this.gfx.adapt(e),this.playTime+=e,this.cine){let c=this.cine;c.t+=e;let h=c.t/c.dur;this.timeScale=h<.07?Ot(1,.17,h/.07):h<.74?.17:Ot(.17,1,jt(.74,1,h)),h>=1&&this.endCinematic()}a=e*this.timeScale,o.fly&&(this.pend.fly=!0),o.boostPressed&&(this.pend.boostPressed=!0),this.acc+=a;let l=0;for(;this.acc>=ss&&l<14;)o.fly=this.pend.fly,o.boostPressed=this.pend.boostPressed,this.pend.fly=this.pend.boostPressed=!1,this.respawning&&(o.fly=!1,o.boostPressed=!1),this.tick(o),this.acc-=ss,l++;l===14&&(this.acc=0),o.fly=o.boostPressed=!1,this.syncModel(a),this.rig.update(e,r,i,{lookBack:o.look,realDt:e}),this.world.guideFocus=r.pos,this.guideDim=te(this.guideDim||0,r.mode==="fly"||r.alt>30?1:0,2,e),this.world.guideDim=this.guideDim,this.world.update(a,this.camera,r.pos),this.world.guide.passed>=0&&(this.audio.play("whoosh2",{rate:1.1+this.world.guide.passed*.06,gain:.55}),this.audio.play("tick",{rate:.8+this.world.guide.passed*.1,gain:.6})),this.liftFx=Math.max(0,(this.liftFx||0)-e*1.5),this.gfx.radial=Math.min(1,this.liftFx),this.fx.update(a,r,this.camera,this.gfx.h),this.ui.hud(r,this.stunts),this.minimap.draw(r),this.hinted.start&&!this.hinted.startDone&&(r.speed>28||r.mode!=="drive")&&(this.hinted.startDone=!0,this.ui.hint(null))}else this.state==="menu"||this.state==="garage"?(this.world.guideFocus=null,this.gfx.radial=0,this.updateShow(e,this.state==="garage",i)):this.state==="photo"?(this.rig.updateOrbit(e,r,i,0),this.world.update(0,this.camera,r.pos),this.world.sky.update(e,this.camera,r.pos)):this.world.update(0,this.camera,r.pos);this.audio.update(e,r,this.state==="play",this.timeScale),this.gfx.render()}},pd=new th;window.__game=pd;pd.boot().catch(s=>{console.error(s);let t=document.getElementById("load-tip");t&&(t.textContent="Could not start: WebGL is unavailable on this device.")});})();
