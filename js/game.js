(()=>{var od=0,eh=1,ad=2;var fu=1,xc=2,en=3,bn=0,ke=1,Ne=2,Gi=0,_n=1,Ke=2,ih=3,nh=4,ld=5,zn=100,cd=101,hd=102,ud=103,dd=104,fd=200,pd=201,md=202,gd=203,qa=204,Za=205,xd=206,yd=207,vd=208,_d=209,Md=210,bd=211,Sd=212,wd=213,Ed=214,$a=0,Ja=1,Ka=2,Ms=3,Qa=4,ja=5,tl=6,el=7,yc=0,Td=1,Ad=2,Mn=0,vc=1,_c=2,Mc=3,hr=4,Rd=5,bc=6,Sc=7;var pu=300,bs=301,Ss=302,il=303,nl=304,Co=306,an=1e3,sn=1001,sl=1002,pi=1003,Cd=1004;var Mr=1005;var bi=1006,ua=1007;var kn=1008;var Ui=1009,mu=1010,gu=1011,nr=1012,wc=1013,Hn=1014,Vi=1015,gi=1016,Ec=1017,Tc=1018,ws=1020,xu=35902,yu=1021,vu=1022,Di=1023,_u=1024,Mu=1025,ys=1026,Es=1027,ur=1028,Ac=1029,bu=1030,Rc=1031;var Cc=1033,$r=33776,Jr=33777,Kr=33778,Qr=33779,rl=35840,ol=35841,al=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,xl=37813,yl=37814,vl=37815,_l=37816,Ml=37817,bl=37818,Sl=37819,wl=37820,El=37821,jr=36492,Tl=36494,Al=36495,Su=36283,Rl=36284,Cl=36285,Pl=36286;var to=2300,Il=2301,da=2302,sh=2400,rh=2401,oh=2402;var Pd=3200,Id=3201;var Pc=0,Ld=1,vn="",Ae="srgb",Ns="srgb-linear",Po="linear",le="srgb";var is=7680;var ah=519,Dd=512,Ud=513,Nd=514,wu=515,Fd=516,zd=517,Od=518,Bd=519,lh=35044,Yn=35048;var ch="300 es",rn=2e3,eo=2001,Sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fa=Math.PI/180,Ll=180/Math.PI;function dr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function Be(s,t,e){return Math.max(t,Math.min(e,s))}function kd(s,t){return(s%t+t)%t}function pa(s,t,e){return(1-e)*s+e*t}function Gs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var xt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=n[0],m=n[3],p=n[6],y=n[1],M=n[4],v=n[7],C=n[2],w=n[5],E=n[8];return r[0]=o*x+a*y+l*C,r[3]=o*m+a*M+l*w,r[6]=o*p+a*v+l*E,r[1]=c*x+h*y+u*C,r[4]=c*m+h*M+u*w,r[7]=c*p+h*v+u*E,r[2]=f*x+d*y+g*C,r[5]=f*m+d*M+g*w,r[8]=f*p+d*v+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ma=new Wt;function Eu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hd(){let s=io("canvas");return s.style.display="block",s}var hh={};function Qs(s){s in hh||(hh[s]=!0,console.warn(s))}function Vd(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Gd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(s.r=on(s.r),s.g=on(s.g),s.b=on(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vn?Po:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function on(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var uh=[.64,.33,.3,.6,.15,.06],dh=[.2126,.7152,.0722],fh=[.3127,.329],ph=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Ns]:{primaries:uh,whitePoint:fh,transfer:Po,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:uh,whitePoint:fh,transfer:le,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:dh,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});var ns,Dl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=io("canvas")),ns.width=t.width,ns.height=t.height;let i=ns.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=io("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=on(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(on(e[i]/255)*255):e[i]=on(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xd=0,no=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=dr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(ga(n[o].image)):r.push(ga(n[o]))}else r=ga(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yd=0,ai=class s extends Sn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=sn,n=sn,r=bi,o=kn,a=Di,l=Ui,c=s.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=dr(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case an:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case an:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=pu;ai.DEFAULT_ANISOTROPY=1;var de=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,C=(p+1)/2,w=(h+f)/4,E=(u+x)/4,A=(g+m)/4;return M>v&&M>C?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=w/i,r=E/i):v>C?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=w/n,r=A/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=E/r,n=A/r),this.set(i,n,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ul=class extends Sn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ai(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends Ul{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},so=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=pi,this.minFilter=pi,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nl=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=pi,this.minFilter=pi,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ee=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let C=Math.sqrt(M),w=Math.atan2(C,p*y);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}let v=a*y;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-n)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xa=new L,gh=new Ee,ln=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pi):Pi.fromBufferAttribute(r,o),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),br.copy(i.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Sr.subVectors(this.max,Ws),ss.subVectors(t.a,Ws),rs.subVectors(t.b,Ws),os.subVectors(t.c,Ws),fn.subVectors(rs,ss),pn.subVectors(os,rs),Pn.subVectors(ss,os);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Pn.z,Pn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Pn.z,0,-Pn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Pn.y,Pn.x,0];return!ya(e,ss,rs,os,Sr)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,ss,rs,os,Sr))?!1:(wr.crossVectors(fn,pn),e=[wr.x,wr.y,wr.z],ya(e,ss,rs,os,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ji=[new L,new L,new L,new L,new L,new L,new L,new L],Pi=new L,br=new ln,ss=new L,rs=new L,os=new L,fn=new L,pn=new L,Pn=new L,Ws=new L,Sr=new L,wr=new L,In=new L;function ya(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){In.fromArray(s,r);let a=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qd=new ln,Xs=new L,va=new L,cn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):qd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Xs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(va)),this.expandByPoint(Xs.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ki=new L,_a=new L,Er=new L,mn=new L,Ma=new L,Tr=new L,ba=new L,sr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){_a.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(_a);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Er),a=mn.dot(this.direction),l=-mn.dot(Er),c=mn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(_a).addScaledVector(Er,f),d}intersectSphere(t,e){Ki.subVectors(t.center,this.origin);let i=Ki.dot(this.direction),n=Ki.dot(Ki)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,i,n,r){Ma.subVectors(e,t),Tr.subVectors(i,t),ba.crossVectors(Ma,Tr);let o=this.direction.dot(ba),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mn.subVectors(this.origin,t);let l=a*this.direction.dot(Tr.crossVectors(mn,Tr));if(l<0)return null;let c=a*this.direction.dot(Ma.cross(mn));if(c<0||l+c>o)return null;let h=-a*mn.dot(ba);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class s{constructor(t,e,i,n,r,o,a,l,c,h,u,f,d,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,i,n,r,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),o=1/as.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,$d)}lookAt(t,e,i){let n=this.elements;return di.subVectors(t,e),di.lengthSq()===0&&(di.z=1),di.normalize(),gn.crossVectors(i,di),gn.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),gn.crossVectors(i,di)),gn.normalize(),Ar.crossVectors(di,gn),n[0]=gn.x,n[4]=Ar.x,n[8]=di.x,n[1]=gn.y,n[5]=Ar.y,n[9]=di.y,n[2]=gn.z,n[6]=Ar.z,n[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],M=i[7],v=i[11],C=i[15],w=n[0],E=n[4],A=n[8],b=n[12],_=n[1],I=n[5],N=n[9],k=n[13],X=n[2],Q=n[6],Y=n[10],it=n[14],H=n[3],at=n[7],ut=n[11],_t=n[15];return r[0]=o*w+a*_+l*X+c*H,r[4]=o*E+a*I+l*Q+c*at,r[8]=o*A+a*N+l*Y+c*ut,r[12]=o*b+a*k+l*it+c*_t,r[1]=h*w+u*_+f*X+d*H,r[5]=h*E+u*I+f*Q+d*at,r[9]=h*A+u*N+f*Y+d*ut,r[13]=h*b+u*k+f*it+d*_t,r[2]=g*w+x*_+m*X+p*H,r[6]=g*E+x*I+m*Q+p*at,r[10]=g*A+x*N+m*Y+p*ut,r[14]=g*b+x*k+m*it+p*_t,r[3]=y*w+M*_+v*X+C*H,r[7]=y*E+M*I+v*Q+C*at,r[11]=y*A+M*N+v*Y+C*ut,r[15]=y*b+M*k+v*it+C*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-n*c*u-r*a*f+i*c*f+n*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-n*o*d+n*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+p*(-n*a*h-e*l*u+e*a*f+n*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,M=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,C=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,w=e*y+i*M+n*v+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=y*E,t[1]=(x*f*r-u*m*r-x*n*d+i*m*d+u*n*p-i*f*p)*E,t[2]=(a*m*r-x*l*r+x*n*c-i*m*c-a*n*p+i*l*p)*E,t[3]=(u*l*r-a*f*r-u*n*c+i*f*c+a*n*d-i*l*d)*E,t[4]=M*E,t[5]=(h*m*r-g*f*r+g*n*d-e*m*d-h*n*p+e*f*p)*E,t[6]=(g*l*r-o*m*r-g*n*c+e*m*c+o*n*p-e*l*p)*E,t[7]=(o*f*r-h*l*r+h*n*c-e*f*c-o*n*d+e*l*d)*E,t[8]=v*E,t[9]=(g*u*r-h*x*r-g*i*d+e*x*d+h*i*p-e*u*p)*E,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*E,t[12]=C*E,t[13]=(h*x*n-g*u*n+g*i*f-e*x*f-h*i*m+e*u*m)*E,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*m-e*a*m)*E,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*f+e*a*f)*E,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=l*c,M=l*h,v=l*u,C=i.x,w=i.y,E=i.z;return n[0]=(1-(x+p))*C,n[1]=(d+v)*C,n[2]=(g-M)*C,n[3]=0,n[4]=(d-v)*w,n[5]=(1-(f+p))*w,n[6]=(m+y)*w,n[7]=0,n[8]=(g+M)*E,n[9]=(m-y)*E,n[10]=(1-(f+x))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=as.set(n[0],n[1],n[2]).length(),o=as.set(n[4],n[5],n[6]).length(),a=as.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Ii.copy(this);let c=1/r,h=1/o,u=1/a;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=u,Ii.elements[9]*=u,Ii.elements[10]*=u,e.setFromRotationMatrix(Ii),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=rn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,g;if(a===rn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===eo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=rn){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),f=(e+t)*c,d=(i+n)*h,g,x;if(a===rn)g=(o+r)*u,x=-2*u;else if(a===eo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},as=new L,Ii=new Jt,Zd=new L(0,0,0),$d=new L(1,1,1),gn=new L,Ar=new L,di=new L,xh=new Jt,yh=new Ee,Pe=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pe.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jd=0,vh=new L,ls=new Ee,Qi=new Jt,Rr=new L,Ys=new L,Kd=new L,Qd=new Ee,_h=new L(1,0,0),Mh=new L(0,1,0),bh=new L(0,0,1),Sh={type:"added"},jd={type:"removed"},cs={type:"childadded",child:null},Sa={type:"childremoved",child:null},Ge=class s extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Pe,i=new Ee,n=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Wt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rr.copy(t):Rr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ys,Rr,this.up):Qi.lookAt(Rr,Ys,this.up),this.quaternion.setFromRotationMatrix(Qi),n&&(Qi.extractRotation(n.matrixWorld),ls.setFromRotationMatrix(Qi),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sh),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jd),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sh),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,Kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Ge.DEFAULT_UP=new L(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=new L,ji=new L,wa=new L,tn=new L,hs=new L,us=new L,wh=new L,Ea=new L,Ta=new L,Aa=new L,Ra=new de,Ca=new de,Pa=new de,On=class s{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Li.subVectors(t,e),n.cross(Li);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Li.subVectors(n,e),ji.subVectors(i,e),wa.subVectors(t,e);let o=Li.dot(Li),a=Li.dot(ji),l=Li.dot(wa),c=ji.dot(ji),h=ji.dot(wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,i),Pa.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Ca,r.y),o.addScaledVector(Pa,r.z),o}static isFrontFacing(t,e,i,n){return Li.subVectors(i,e),ji.subVectors(t,e),Li.cross(ji).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Li.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;hs.subVectors(n,i),us.subVectors(r,i),Ea.subVectors(t,i);let l=hs.dot(Ea),c=us.dot(Ea);if(l<=0&&c<=0)return e.copy(i);Ta.subVectors(t,n);let h=hs.dot(Ta),u=us.dot(Ta);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(hs,o);Aa.subVectors(t,r);let d=hs.dot(Aa),g=us.dot(Aa);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(us,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return wh.subVectors(r,n),a=(u-h)/(u-h+(d-g)),e.copy(n).addScaledVector(wh,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(hs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Ia(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ne.workingColorSpace){if(t=kd(t,1),e=Be(e,0,1),i=Be(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ia(o,r,t+1/3),this.g=Ia(o,r,t),this.b=Ia(o,r,t-1/3)}return ne.toWorkingColorSpace(this,n),this}setStyle(t,e=Ae){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let i=Tu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=on(t.r),this.g=on(t.g),this.b=on(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ne.fromWorkingColorSpace($e.copy(this),t),Math.round(Be($e.r*255,0,255))*65536+Math.round(Be($e.g*255,0,255))*256+Math.round(Be($e.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace($e.copy(this),e);let i=$e.r,n=$e.g,r=$e.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ae){ne.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,i=$e.g,n=$e.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(Cr);let i=pa(xn.h,Cr.h,e),n=pa(xn.s,Cr.s,e),r=pa(xn.l,Cr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new dt;dt.NAMES=Tu;var tf=0,Wi=class extends Sn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=dr(),this.name="",this.blending=_n,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Za,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_n&&(i.blending=this.blending),this.side!==bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qa&&(i.blendSrc=this.blendSrc),this.blendDst!==Za&&(i.blendDst=this.blendDst),this.blendEquation!==zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pe=class extends Wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new L,Pr=new xt,we=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lh,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array),n=oi(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array),n=oi(n,this.array),r=oi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lh&&(t.usage=this.usage),t}};var oo=class extends we{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ao=class extends we{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Tt=class extends we{constructor(t,e,i){super(new Float32Array(t),e,i)}},ef=0,Mi=new Jt,La=new Ge,ds=new L,fi=new ln,qs=new ln,Oe=new L,Xt=class s extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?ao:oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,i){return Mi.makeTranslation(t,e,i),this.applyMatrix4(Mi),this}scale(t,e,i){return Mi.makeScale(t,e,i),this.applyMatrix4(Mi),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(fi.min,qs.min),fi.expandByPoint(Oe),Oe.addVectors(fi.max,qs.max),fi.expandByPoint(Oe)):(fi.expandByPoint(qs.min),fi.expandByPoint(qs.max))}fi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(t,c),Oe.add(ds)),n=Math.max(n,i.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new L,l[A]=new L;let c=new L,h=new L,u=new L,f=new xt,d=new xt,g=new xt,x=new L,m=new L;function p(A,b,_){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[A].add(x),a[b].add(x),a[_].add(x),l[A].add(m),l[b].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,b=y.length;A<b;++A){let _=y[A],I=_.start,N=_.count;for(let k=I,X=I+N;k<X;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let M=new L,v=new L,C=new L,w=new L;function E(A){C.fromBufferAttribute(n,A),w.copy(C);let b=a[A];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(w,b);let I=v.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,I)}for(let A=0,b=y.length;A<b;++A){let _=y[A],I=_.start,N=_.count;for(let k=I,X=I+N;k<X;k+=3)E(t.getX(k+0)),E(t.getX(k+1)),E(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new we(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eh=new Jt,Ln=new sr,Ir=new cn,Th=new L,Lr=new L,Dr=new L,Ur=new L,Da=new L,Nr=new L,Ah=new L,Fr=new L,Ct=class extends Ge{constructor(t=new Xt,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Da.fromBufferAttribute(u,t),o?Nr.addScaledVector(Da,h):Nr.addScaledVector(Da.sub(e),h))}e.add(Nr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(Ir.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(Ir,Th)===null||Ln.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(Eh.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&Ln.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,C=M;v<C;v+=3){let w=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);n=zr(this,p,t,i,c,h,u,w,E,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);n=zr(this,o,t,i,c,h,u,y,M,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,C=M;v<C;v+=3){let w=v,E=v+1,A=v+2;n=zr(this,p,t,i,c,h,u,w,E,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,M=m+1,v=m+2;n=zr(this,o,t,i,c,h,u,y,M,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function nf(s,t,e,i,n,r,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===bn,a),l===null)return null;Fr.copy(a),Fr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:s}}function zr(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Lr),s.getVertexPosition(l,Dr),s.getVertexPosition(c,Ur);let h=nf(s,t,e,i,Lr,Dr,Ur,Ah);if(h){let u=new L;On.getBarycoord(Ah,Lr,Dr,Ur,u),n&&(h.uv=On.getInterpolatedAttribute(n,a,l,c,u,new xt)),r&&(h.uv1=On.getInterpolatedAttribute(r,a,l,c,u,new xt)),o&&(h.normal=On.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};On.getNormal(Lr,Dr,Ur,f.normal),h.face=f,h.barycoord=u}return h}var De=class s extends Xt{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(x,m,p,y,M,v,C,w,E,A,b){let _=v/E,I=C/A,N=v/2,k=C/2,X=w/2,Q=E+1,Y=A+1,it=0,H=0,at=new L;for(let ut=0;ut<Y;ut++){let _t=ut*I-k;for(let Bt=0;Bt<Q;Bt++){let Lt=Bt*_-N;at[x]=Lt*y,at[m]=_t*M,at[p]=X,c.push(at.x,at.y,at.z),at[x]=0,at[m]=0,at[p]=w>0?1:-1,h.push(at.x,at.y,at.z),u.push(Bt/E),u.push(1-ut/A),it+=1}}for(let ut=0;ut<A;ut++)for(let _t=0;_t<E;_t++){let Bt=f+_t+Q*ut,Lt=f+_t+Q*(ut+1),nt=f+(_t+1)+Q*(ut+1),ht=f+(_t+1)+Q*ut;l.push(Bt,Lt,ht),l.push(Lt,nt,ht),H+=6}a.addGroup(d,H,b),d+=H,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ti(s){let t={};for(let e=0;e<s.length;e++){let i=Ts(s[e]);for(let n in i)t[n]=i[n]}return t}function sf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Au(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Tn={clone:Ts,merge:ti},rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends Wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},lo=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yn=new L,Rh=new xt,Ch=new xt,Je=class extends lo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ll*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,Rh,Ch),e.subVectors(Ch,Rh)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fa*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},fs=-90,ps=1,Fl=class extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Je(fs,ps,t,e);n.layers=this.layers,this.add(n);let r=new Je(fs,ps,t,e);r.layers=this.layers,this.add(r);let o=new Je(fs,ps,t,e);o.layers=this.layers,this.add(o);let a=new Je(fs,ps,t,e);a.layers=this.layers,this.add(a);let l=new Je(fs,ps,t,e);l.layers=this.layers,this.add(l);let c=new Je(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===rn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},co=class extends ai{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zl=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new co(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new De(5,5,5),r=new xe({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Gi});r.uniforms.tEquirect.value=e;let o=new Ct(n,r),a=e.minFilter;return e.minFilter===kn&&(e.minFilter=bi),new Fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Ua=new L,af=new L,lf=new Wt,nn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Ua.subVectors(i,e).cross(af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ua),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||lf.getNormalMatrix(t),n=this.coplanarPoint(Ua).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dn=new cn,Or=new L,rr=class{constructor(t=new nn,e=new nn,i=new nn,n=new nn,r=new nn,o=new nn){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=rn){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],g=n[9],x=n[10],m=n[11],p=n[12],y=n[13],M=n[14],v=n[15];if(i[0].setComponents(l-r,f-c,m-d,v-p).normalize(),i[1].setComponents(l+r,f+c,m+d,v+p).normalize(),i[2].setComponents(l+o,f+h,m+g,v+y).normalize(),i[3].setComponents(l-o,f-h,m-g,v-y).normalize(),i[4].setComponents(l-a,f-u,m-x,v-M).normalize(),e===rn)i[5].setComponents(l+a,f+u,m+x,v+M).normalize();else if(e===eo)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Or.x=n.normal.x>0?t.max.x:t.min.x,Or.y=n.normal.y>0?t.max.y:t.min.y,Or.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ru(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function cf(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var mi=class s extends Xt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-o;for(let M=0;M<c;M++){let v=M*u-r;g.push(v,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let M=y+c*p,v=y+c*(p+1),C=y+1+c*(p+1),w=y+1+c*p;d.push(M,v,w),d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
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
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
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
#endif`,wf=`#ifdef USE_BUMPMAP
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Df=`#define PI 3.141592653589793
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
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
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
}`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
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
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
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
#endif`,lp=`struct PhysicalMaterial {
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
}`,cp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vp=`#if defined( USE_POINTS_UV )
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
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,wm=`uniform vec3 diffuse;
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
}`,Em=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define TOON
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
}`,Fm=`#define TOON
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
}`,zm=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:xf,batching_pars_vertex:yf,batching_vertex:vf,begin_vertex:_f,beginnormal_vertex:Mf,bsdfs:bf,iridescence_fragment:Sf,bumpmap_pars_fragment:wf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Rf,color_fragment:Cf,color_pars_fragment:Pf,color_pars_vertex:If,color_vertex:Lf,common:Df,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Ff,displacementmap_vertex:zf,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:kf,colorspace_pars_fragment:Hf,envmap_fragment:Vf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:ip,envmap_vertex:Yf,fog_vertex:qf,fog_pars_vertex:Zf,fog_fragment:$f,fog_pars_fragment:Jf,gradientmap_pars_fragment:Kf,lightmap_pars_fragment:Qf,lights_lambert_fragment:jf,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:np,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:op,lights_physical_fragment:ap,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:xp,map_particle_fragment:yp,map_particle_pars_fragment:vp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:Mp,morphinstance_vertex:bp,morphcolor_vertex:Sp,morphnormal_vertex:wp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Tp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Ip,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Fp,opaque_fragment:zp,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:kp,dithering_fragment:Hp,dithering_pars_fragment:Vp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:Yp,shadowmap_vertex:qp,shadowmask_pars_fragment:Zp,skinbase_vertex:$p,skinning_pars_vertex:Jp,skinning_vertex:Kp,skinnormal_vertex:Qp,specularmap_fragment:jp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:im,transmission_fragment:nm,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:xm,distanceRGBA_frag:ym,equirect_vert:vm,equirect_frag:_m,linedashed_vert:Mm,linedashed_frag:bm,meshbasic_vert:Sm,meshbasic_frag:wm,meshlambert_vert:Em,meshlambert_frag:Tm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Im,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:Um,meshtoon_vert:Nm,meshtoon_frag:Fm,points_vert:zm,points_frag:Om,shadow_vert:Bm,shadow_frag:km,sprite_vert:Hm,sprite_frag:Vm},vt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Hi={basic:{uniforms:ti([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ti([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new dt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ti([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ti([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ti([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new dt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ti([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ti([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ti([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ti([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ti([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ti([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ti([vt.common,vt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ti([vt.lights,vt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Hi.physical={uniforms:ti([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Br={r:0,b:0,g:0},Un=new Pe,Gm=new Jt;function Wm(s,t,e,i,n,r,o){let a=new dt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1,v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===Co)?(h===void 0&&(h=new Ct(new De(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Ts(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Un.copy(M.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(Un)),h.material.toneMapped=ne.getTransfer(v.colorSpace)!==le,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ct(new mi(2,2),new xe({name:"BackgroundMaterial",uniforms:Ts(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ne.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(Br,Au(s)),i.buffers.color.setClear(Br.r,Br.g,Br.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m}}function Xm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,o=!1;function a(_,I,N,k,X){let Q=!1,Y=u(k,N,I);r!==Y&&(r=Y,c(r.object)),Q=d(_,k,N,X),Q&&g(_,k,N,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(_,I,N,k),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,I,N){let k=N.wireframe===!0,X=i[_.id];X===void 0&&(X={},i[_.id]=X);let Q=X[I.id];Q===void 0&&(Q={},X[I.id]=Q);let Y=Q[k];return Y===void 0&&(Y=f(l()),Q[k]=Y),Y}function f(_){let I=[],N=[],k=[];for(let X=0;X<e;X++)I[X]=0,N[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:k,object:_,attributes:{},index:null}}function d(_,I,N,k){let X=r.attributes,Q=I.attributes,Y=0,it=N.getAttributes();for(let H in it)if(it[H].location>=0){let ut=X[H],_t=Q[H];if(_t===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),ut===void 0||ut.attribute!==_t||_t&&ut.data!==_t.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(_,I,N,k){let X={},Q=I.attributes,Y=0,it=N.getAttributes();for(let H in it)if(it[H].location>=0){let ut=Q[H];ut===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));let _t={};_t.attribute=ut,ut&&ut.data&&(_t.data=ut.data),X[H]=_t,Y++}r.attributes=X,r.attributesNum=Y,r.index=k}function x(){let _=r.newAttributes;for(let I=0,N=_.length;I<N;I++)_[I]=0}function m(_){p(_,0)}function p(_,I){let N=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;N[_]=1,k[_]===0&&(s.enableVertexAttribArray(_),k[_]=1),X[_]!==I&&(s.vertexAttribDivisor(_,I),X[_]=I)}function y(){let _=r.newAttributes,I=r.enabledAttributes;for(let N=0,k=I.length;N<k;N++)I[N]!==_[N]&&(s.disableVertexAttribArray(N),I[N]=0)}function M(_,I,N,k,X,Q,Y){Y===!0?s.vertexAttribIPointer(_,I,N,X,Q):s.vertexAttribPointer(_,I,N,k,X,Q)}function v(_,I,N,k){x();let X=k.attributes,Q=N.getAttributes(),Y=I.defaultAttributeValues;for(let it in Q){let H=Q[it];if(H.location>=0){let at=X[it];if(at===void 0&&(it==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),it==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),at!==void 0){let ut=at.normalized,_t=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;let Lt=Bt.buffer,nt=Bt.type,ht=Bt.bytesPerElement,Dt=nt===s.INT||nt===s.UNSIGNED_INT||at.gpuType===wc;if(at.isInterleavedBufferAttribute){let Mt=at.data,kt=Mt.stride,Vt=at.offset;if(Mt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<H.locationSize;Yt++)p(H.location+Yt,Mt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Yt=0;Yt<H.locationSize;Yt++)m(H.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let Yt=0;Yt<H.locationSize;Yt++)M(H.location+Yt,_t/H.locationSize,nt,ut,kt*ht,(Vt+_t/H.locationSize*Yt)*ht,Dt)}else{if(at.isInstancedBufferAttribute){for(let Mt=0;Mt<H.locationSize;Mt++)p(H.location+Mt,at.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Mt=0;Mt<H.locationSize;Mt++)m(H.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let Mt=0;Mt<H.locationSize;Mt++)M(H.location+Mt,_t/H.locationSize,nt,ut,_t*ht,_t/H.locationSize*Mt*ht,Dt)}}else if(Y!==void 0){let ut=Y[it];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(H.location,ut);break;case 3:s.vertexAttrib3fv(H.location,ut);break;case 4:s.vertexAttrib4fv(H.location,ut);break;default:s.vertexAttrib1fv(H.location,ut)}}}}y()}function C(){A();for(let _ in i){let I=i[_];for(let N in I){let k=I[N];for(let X in k)h(k[X].object),delete k[X];delete I[N]}delete i[_]}}function w(_){if(i[_.id]===void 0)return;let I=i[_.id];for(let N in I){let k=I[N];for(let X in k)h(k[X].object),delete k[X];delete I[N]}delete i[_.id]}function E(_){for(let I in i){let N=i[I];if(N[_.id]===void 0)continue;let k=N[_.id];for(let X in k)h(k[X].object),delete k[X];delete N[_.id]}}function A(){b(),o=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Ym(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qm(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(E){return!(E!==Di&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let A=E===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ui&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Vi&&!A)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function Zm(s){let t=this,e=null,i=0,n=!1,r=!1,o=new nn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,M=y*4,v=p.clippingState||null;l.value=v,v=h(g,f,M,d);for(let C=0;C!==M;++C)v[C]=e[C];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function $m(s){let t=new WeakMap;function e(o,a){return a===il?o.mapping=bs:a===nl&&(o.mapping=Ss),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===il||a===nl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var As=class extends lo{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xs=4,Ph=[.125,.215,.35,.446,.526,.582],Bn=20,Na=new As,Ih=new dt,Fa=null,za=0,Oa=0,Ba=!1,Fn=(1+Math.sqrt(5))/2,ms=1/Fn,Lh=[new L(-Fn,ms,0),new L(Fn,ms,0),new L(-ms,0,Fn),new L(ms,0,Fn),new L(0,Fn,-ms),new L(0,Fn,ms),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Rs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Fa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,za,Oa),this._renderer.xr.enabled=Ba,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:gi,format:Di,colorSpace:Ns,depthBuffer:!1},n=Dh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=Km(r,t,e)}return n}_compileMaterial(t){let e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,i,n){let a=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ih),h.toneMapping=Mn,h.autoClear=!1;let d=new pe({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Ct(new De,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Ih),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;kr(n,y*M,p>2?M:0,M,M),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===bs||t.mapping===Ss;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uh());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;kr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Na)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lh[(n-r-1)%Lh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ct(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Bn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Bn;m>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);let p=[],y=0;for(let E=0;E<Bn;++E){let A=E/x,b=Math.exp(-A*A/2);p.push(b),E===0?y+=b:E<m&&(y+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let v=this._sizeLods[n],C=3*v*(n>M-xs?n-M+xs:0),w=4*(this._cubeSize-v);kr(e,C,w,3*v,2*v),l.setRenderTarget(e),l.render(u,Na)}};function Jm(s){let t=[],e=[],i=[],n=s,r=s-xs+1+Ph.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-xs?l=Ph[o-s+xs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),M=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){let E=w%3*2/3-1,A=w>2?0:-1,b=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(b,x*g*w),M.set(f,m*g*w);let _=[w,w,w,w,w,w];v.set(_,p*g*w)}let C=new Xt;C.setAttribute("position",new we(y,x)),C.setAttribute("uv",new we(M,m)),C.setAttribute("faceIndex",new we(v,p)),t.push(C),n>xs&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Dh(s,t,e){let i=new Ve(s,t,e);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Km(s,t,e){let i=new Float32Array(Bn),n=new L(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Uh(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Nh(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function Qm(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===il||l===nl,h=l===bs||l===Ss;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Rs(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new Rs(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function jm(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Qs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function t0(s,t,e,i){let n={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete n[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let M=0,v=y.length;M<v;M+=3){let C=y[M+0],w=y[M+1],E=y[M+2];f.push(C,w,w,E,E,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let C=M+0,w=M+1,E=M+2;f.push(C,w,w,E,E,C)}}else return;let m=new(Eu(f)?ao:oo)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function e0(s,t,e){let i;function n(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*x[y];e.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function n0(s,t,e){let i=new WeakMap,n=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*C*4*u),E=new so(w,v,C,u);E.type=Vi,E.needsUpdate=!0;let A=M*4;for(let _=0;_<u;_++){let I=m[_],N=p[_],k=y[_],X=v*C*4*_;for(let Q=0;Q<I.count;Q++){let Y=Q*A;d===!0&&(n.fromBufferAttribute(I,Q),w[X+Y+0]=n.x,w[X+Y+1]=n.y,w[X+Y+2]=n.z,w[X+Y+3]=0),g===!0&&(n.fromBufferAttribute(N,Q),w[X+Y+4]=n.x,w[X+Y+5]=n.y,w[X+Y+6]=n.z,w[X+Y+7]=0),x===!0&&(n.fromBufferAttribute(k,Q),w[X+Y+8]=n.x,w[X+Y+9]=n.y,w[X+Y+10]=n.z,w[X+Y+11]=k.itemSize===4?n.w:1)}}f={count:u,texture:E,size:new xt(v,C)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function s0(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ho=class extends ai{constructor(t,e,i,n,r,o,a,l,c,h=ys){if(h!==ys&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ys&&(i=Hn),i===void 0&&h===Es&&(i=ws),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pi,this.minFilter=l!==void 0?l:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cu=new ai,Fh=new ho(1,1),Pu=new so,Iu=new Nl,Lu=new co,zh=[],Oh=[],Bh=new Float32Array(16),kh=new Float32Array(9),Hh=new Float32Array(4);function Fs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=zh[n];if(r===void 0&&(r=new Float32Array(n),zh[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Io(s,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function r0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function o0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function a0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function c0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,i))return;Hh.set(i),s.uniformMatrix2fv(this.addr,!1,Hh),ze(e,i)}}function h0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,i))return;kh.set(i),s.uniformMatrix3fv(this.addr,!1,kh),ze(e,i)}}function u0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,i))return;Bh.set(i),s.uniformMatrix4fv(this.addr,!1,Bh),ze(e,i)}}function d0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function f0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function g0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function x0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function v0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function _0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Fh.compareFunction=wu,r=Fh):r=Cu,e.setTexture2D(t||r,n)}function M0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Iu,n)}function b0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Lu,n)}function S0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Pu,n)}function w0(s){switch(s){case 5126:return r0;case 35664:return o0;case 35665:return a0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return x0;case 36295:return y0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return S0}}function E0(s,t){s.uniform1fv(this.addr,t)}function T0(s,t){let e=Fs(t,this.size,2);s.uniform2fv(this.addr,e)}function A0(s,t){let e=Fs(t,this.size,3);s.uniform3fv(this.addr,e)}function R0(s,t){let e=Fs(t,this.size,4);s.uniform4fv(this.addr,e)}function C0(s,t){let e=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function P0(s,t){let e=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function I0(s,t){let e=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function L0(s,t){s.uniform1iv(this.addr,t)}function D0(s,t){s.uniform2iv(this.addr,t)}function U0(s,t){s.uniform3iv(this.addr,t)}function N0(s,t){s.uniform4iv(this.addr,t)}function F0(s,t){s.uniform1uiv(this.addr,t)}function z0(s,t){s.uniform2uiv(this.addr,t)}function O0(s,t){s.uniform3uiv(this.addr,t)}function B0(s,t){s.uniform4uiv(this.addr,t)}function k0(s,t,e){let i=this.cache,n=t.length,r=Io(e,n);Fe(i,r)||(s.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Cu,r[o])}function H0(s,t,e){let i=this.cache,n=t.length,r=Io(e,n);Fe(i,r)||(s.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Iu,r[o])}function V0(s,t,e){let i=this.cache,n=t.length,r=Io(e,n);Fe(i,r)||(s.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Lu,r[o])}function G0(s,t,e){let i=this.cache,n=t.length,r=Io(e,n);Fe(i,r)||(s.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Pu,r[o])}function W0(s){switch(s){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return I0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return z0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}var Ol=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=w0(e.type)}},Bl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=W0(e.type)}},kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},ka=/(\w+)(\])?(\[|\.)?/g;function Vh(s,t){s.seq.push(t),s.map[t.id]=t}function X0(s,t,e){let i=s.name,n=i.length;for(ka.lastIndex=0;;){let r=ka.exec(i),o=ka.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Vh(e,c===void 0?new Ol(a,s,t):new Bl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new kl(a),Vh(e,u)),e=u}}}var _s=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);X0(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Gh(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Y0=37297,q0=0;function Z0(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Wh=new Wt;function $0(s){ne._getMatrix(Wh,ne.workingColorSpace,s);let t=`mat3( ${Wh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Po:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Xh(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Z0(s.getShaderSource(t),o)}else return n}function J0(s,t){let e=$0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function K0(s,t){let e;switch(t){case vc:e="Linear";break;case _c:e="Reinhard";break;case Mc:e="Cineon";break;case hr:e="ACESFilmic";break;case bc:e="AgX";break;case Sc:e="Neutral";break;case Rd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hr=new L;function Q0(){ne.getLuminanceCoefficients(Hr);let s=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function tg(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function eg(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function js(s){return s!==""}function Yh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(s){return s.replace(ig,sg)}var ng=new Map;function sg(s,t){let e=$t[t];if(e===void 0){let i=ng.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}var rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zh(s){return s.replace(rg,og)}function og(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function $h(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function ag(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function lg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case Ss:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ss&&(t="ENVMAP_MODE_REFRACTION"),t}function hg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yc:t="ENVMAP_BLENDING_MULTIPLY";break;case Td:t="ENVMAP_BLENDING_MIX";break;case Ad:t="ENVMAP_BLENDING_ADD";break}return t}function ug(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function dg(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ag(e),c=lg(e),h=cg(e),u=hg(e),f=ug(e),d=j0(e),g=tg(r),x=n.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Mn?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,J0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=Hl(o),o=Yh(o,e),o=qh(o,e),a=Hl(a),a=Yh(a,e),a=qh(a,e),o=Zh(o),a=Zh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+m+o,v=y+p+a,C=Gh(n,n.VERTEX_SHADER,M),w=Gh(n,n.FRAGMENT_SHADER,v);n.attachShader(x,C),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function E(I){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(x).trim(),k=n.getShaderInfoLog(C).trim(),X=n.getShaderInfoLog(w).trim(),Q=!0,Y=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,C,w);else{let it=Xh(n,C,"vertex"),H=Xh(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+it+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||X==="")&&(Y=!1);Y&&(I.diagnostics={runnable:Q,programLog:N,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:p}})}n.deleteShader(C),n.deleteShader(w),A=new _s(n,x),b=eg(n,x)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(x,Y0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}var fg=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Gl(t),e.set(t,i)),i}},Gl=class{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}};function pg(s,t,e,i,n,r,o){let a=new ro,l=new Vl,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,I,N,k){let X=N.fog,Q=k.geometry,Y=b.isMeshStandardMaterial?N.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),H=it&&it.mapping===Co?it.image.height:null,at=g[b.type];b.precision!==null&&(d=n.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ut=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_t=ut!==void 0?ut.length:0,Bt=0;Q.morphAttributes.position!==void 0&&(Bt=1),Q.morphAttributes.normal!==void 0&&(Bt=2),Q.morphAttributes.color!==void 0&&(Bt=3);let Lt,nt,ht,Dt;if(at){let ue=Hi[at];Lt=ue.vertexShader,nt=ue.fragmentShader}else Lt=b.vertexShader,nt=b.fragmentShader,l.update(b),ht=l.getVertexShaderID(b),Dt=l.getFragmentShaderID(b);let Mt=s.getRenderTarget(),kt=s.state.buffers.depth.getReversed(),Vt=k.isInstancedMesh===!0,Yt=k.isBatchedMesh===!0,ye=!!b.map,ie=!!b.matcap,ve=!!it,z=!!b.aoMap,Ye=!!b.lightMap,Qt=!!b.bumpMap,P=!!b.normalMap,G=!!b.displacementMap,j=!!b.emissiveMap,$=!!b.metalnessMap,R=!!b.roughnessMap,S=b.anisotropy>0,U=b.clearcoat>0,Z=b.dispersion>0,q=b.iridescence>0,V=b.sheen>0,lt=b.transmission>0,rt=S&&!!b.anisotropyMap,st=U&&!!b.clearcoatMap,mt=U&&!!b.clearcoatNormalMap,W=U&&!!b.clearcoatRoughnessMap,tt=q&&!!b.iridescenceMap,yt=q&&!!b.iridescenceThicknessMap,Et=V&&!!b.sheenColorMap,O=V&&!!b.sheenRoughnessMap,gt=!!b.specularMap,ct=!!b.specularColorMap,At=!!b.specularIntensityMap,D=lt&&!!b.transmissionMap,pt=lt&&!!b.thicknessMap,et=!!b.gradientMap,ot=!!b.alphaMap,wt=b.alphaTest>0,bt=!!b.alphaHash,qt=!!b.extensions,Re=Mn;b.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Re=s.toneMapping);let qe={shaderID:at,shaderType:b.type,shaderName:b.name,vertexShader:Lt,fragmentShader:nt,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:Dt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Yt,batchingColor:Yt&&k._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&k.instanceColor!==null,instancingMorph:Vt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Ns,alphaToCoverage:!!b.alphaToCoverage,map:ye,matcap:ie,envMap:ve,envMapMode:ve&&it.mapping,envMapCubeUVHeight:H,aoMap:z,lightMap:Ye,bumpMap:Qt,normalMap:P,displacementMap:f&&G,emissiveMap:j,normalMapObjectSpace:P&&b.normalMapType===Ld,normalMapTangentSpace:P&&b.normalMapType===Pc,metalnessMap:$,roughnessMap:R,anisotropy:S,anisotropyMap:rt,clearcoat:U,clearcoatMap:st,clearcoatNormalMap:mt,clearcoatRoughnessMap:W,dispersion:Z,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:yt,sheen:V,sheenColorMap:Et,sheenRoughnessMap:O,specularMap:gt,specularColorMap:ct,specularIntensityMap:At,transmission:lt,transmissionMap:D,thicknessMap:pt,gradientMap:et,opaque:b.transparent===!1&&b.blending===_n&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:wt,alphaHash:bt,combine:b.combine,mapUv:ye&&x(b.map.channel),aoMapUv:z&&x(b.aoMap.channel),lightMapUv:Ye&&x(b.lightMap.channel),bumpMapUv:Qt&&x(b.bumpMap.channel),normalMapUv:P&&x(b.normalMap.channel),displacementMapUv:G&&x(b.displacementMap.channel),emissiveMapUv:j&&x(b.emissiveMap.channel),metalnessMapUv:$&&x(b.metalnessMap.channel),roughnessMapUv:R&&x(b.roughnessMap.channel),anisotropyMapUv:rt&&x(b.anisotropyMap.channel),clearcoatMapUv:st&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:O&&x(b.sheenRoughnessMap.channel),specularMapUv:gt&&x(b.specularMap.channel),specularColorMapUv:ct&&x(b.specularColorMap.channel),specularIntensityMapUv:At&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:pt&&x(b.thicknessMap.channel),alphaMapUv:ot&&x(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(P||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(ye||ot),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Bt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:ye&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===le,decodeVideoTextureEmissive:j&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===le,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ne,flipSided:b.side===ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&b.extensions.multiDraw===!0||Yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function p(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)_.push(I),_.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(y(_,b),M(_,b),_.push(s.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function y(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function M(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let _=g[b.type],I;if(_){let N=Hi[_];I=Tn.clone(N.uniforms)}else I=b.uniforms;return I}function C(b,_){let I;for(let N=0,k=h.length;N<k;N++){let X=h[N];if(X.cacheKey===_){I=X,++I.usedTimes;break}}return I===void 0&&(I=new dg(s,_,b,r),h.push(I)),I}function w(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:A}}function mg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function gg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Jh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Kh(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,d,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||gg),i.length>1&&i.sort(f||Jh),n.length>1&&n.sort(f||Jh)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function xg(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new Kh,s.set(i,[o])):n>=r.length?(o=new Kh,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function yg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new dt};break;case"SpotLight":e={position:new L,direction:new L,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function vg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var _g=0;function Mg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bg(s){let t=new yg,e=vg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let n=new L,r=new Jt,o=new Jt;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,M=0,v=0,C=0,w=0,E=0;c.sort(Mg);for(let b=0,_=c.length;b<_;b++){let I=c[b],N=I.color,k=I.intensity,X=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*k,u+=N.g*k,f+=N.b*k;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],k);E++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,H=e.get(I);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=I.shadow.matrix,y++}i.directional[d]=Y,d++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(N).multiplyScalar(k),Y.distance=X,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[x]=Y;let it=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,it.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[x]=it.matrix,I.castShadow){let H=e.get(I);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=Q,v++}x++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(N).multiplyScalar(k),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Y,m++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let it=I.shadow,H=e.get(I);H.shadowIntensity=it.intensity,H.shadowBias=it.bias,H.shadowNormalBias=it.normalBias,H.shadowRadius=it.radius,H.shadowMapSize=it.mapSize,H.shadowCameraNear=it.camera.near,H.shadowCameraFar=it.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=Y,g++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(k),Y.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let A=i.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==v||A.numSpotMaps!==C||A.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,A.directionalLength=d,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=v,A.numSpotMaps=C,A.numLightProbes=E,i.version=_g++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let M=c[p];if(M.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),u++}else if(M.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Qh(s){let t=new bg(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Sg(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new Qh(s),t.set(n,[a])):r>=o.length?(a=new Qh(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Wl=class extends Wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xl=class extends Wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function Tg(s,t,e){let i=new rr,n=new xt,r=new xt,o=new de,a=new Wl({depthPacking:Id}),l=new Xl,c={},h=e.maxTextureSize,u={[bn]:ke,[ke]:bn,[Ne]:Ne},f=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:wg,fragmentShader:Eg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ct(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let p=this.type;this.render=function(w,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),_=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Gi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=p!==en&&this.type===en,X=p===en&&this.type!==en;for(let Q=0,Y=w.length;Q<Y;Q++){let it=w[Q],H=it.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let at=H.getFrameExtents();if(n.multiply(at),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/at.x),n.x=r.x*at.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/at.y),n.y=r.y*at.y,H.mapSize.y=r.y)),H.map===null||k===!0||X===!0){let _t=this.type!==en?{minFilter:pi,magFilter:pi}:{};H.map!==null&&H.map.dispose(),H.map=new Ve(n.x,n.y,_t),H.map.texture.name=it.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ut=H.getViewportCount();for(let _t=0;_t<ut;_t++){let Bt=H.getViewport(_t);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),N.viewport(o),H.updateMatrices(it,_t),i=H.getFrustum(),v(E,A,H.camera,it,this.type)}H.isPointLightShadow!==!0&&this.type===en&&y(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,_,I)};function y(w,E){let A=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ve(n.x,n.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,A,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,A,d,x,null)}function M(w,E,A,b){let _=null,I=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)_=I;else if(_=A.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=_.uuid,k=E.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let Q=X[k];Q===void 0&&(Q=_.clone(),X[k]=Q,E.addEventListener("dispose",C)),_=Q}if(_.visible=E.visible,_.wireframe=E.wireframe,b===en?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=s.properties.get(_);N.light=A}return _}function v(w,E,A,b,_){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===en)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let k=t.update(w),X=w.material;if(Array.isArray(X)){let Q=k.groups;for(let Y=0,it=Q.length;Y<it;Y++){let H=Q[Y],at=X[H.materialIndex];if(at&&at.visible){let ut=M(w,at,b,_);w.onBeforeShadow(s,w,E,A,k,ut,H),s.renderBufferDirect(A,null,k,ut,w,H),w.onAfterShadow(s,w,E,A,k,ut,H)}}}else if(X.visible){let Q=M(w,X,b,_);w.onBeforeShadow(s,w,E,A,k,Q,null),s.renderBufferDirect(A,null,k,Q,w,null),w.onAfterShadow(s,w,E,A,k,Q,null)}}let N=w.children;for(let k=0,X=N.length;k<X;k++)v(N[k],E,A,b,_)}function C(w){w.target.removeEventListener("dispose",C);for(let A in c){let b=c[A],_=w.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var Ag={[$a]:Ja,[Ka]:tl,[Qa]:el,[Ms]:ja,[Ja]:$a,[tl]:Ka,[el]:Qa,[ja]:Ms};function Rg(s,t){function e(){let D=!1,pt=new de,et=null,ot=new de(0,0,0,0);return{setMask:function(wt){et!==wt&&!D&&(s.colorMask(wt,wt,wt,wt),et=wt)},setLocked:function(wt){D=wt},setClear:function(wt,bt,qt,Re,qe){qe===!0&&(wt*=Re,bt*=Re,qt*=Re),pt.set(wt,bt,qt,Re),ot.equals(pt)===!1&&(s.clearColor(wt,bt,qt,Re),ot.copy(pt))},reset:function(){D=!1,et=null,ot.set(-1,0,0,0)}}}function i(){let D=!1,pt=!1,et=null,ot=null,wt=null;return{setReversed:function(bt){if(pt!==bt){let qt=t.get("EXT_clip_control");pt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let Re=wt;wt=null,this.setClear(Re)}pt=bt},getReversed:function(){return pt},setTest:function(bt){bt?Mt(s.DEPTH_TEST):kt(s.DEPTH_TEST)},setMask:function(bt){et!==bt&&!D&&(s.depthMask(bt),et=bt)},setFunc:function(bt){if(pt&&(bt=Ag[bt]),ot!==bt){switch(bt){case $a:s.depthFunc(s.NEVER);break;case Ja:s.depthFunc(s.ALWAYS);break;case Ka:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case Qa:s.depthFunc(s.EQUAL);break;case ja:s.depthFunc(s.GEQUAL);break;case tl:s.depthFunc(s.GREATER);break;case el:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=bt}},setLocked:function(bt){D=bt},setClear:function(bt){wt!==bt&&(pt&&(bt=1-bt),s.clearDepth(bt),wt=bt)},reset:function(){D=!1,et=null,ot=null,wt=null,pt=!1}}}function n(){let D=!1,pt=null,et=null,ot=null,wt=null,bt=null,qt=null,Re=null,qe=null;return{setTest:function(ue){D||(ue?Mt(s.STENCIL_TEST):kt(s.STENCIL_TEST))},setMask:function(ue){pt!==ue&&!D&&(s.stencilMask(ue),pt=ue)},setFunc:function(ue,Ri,Zi){(et!==ue||ot!==Ri||wt!==Zi)&&(s.stencilFunc(ue,Ri,Zi),et=ue,ot=Ri,wt=Zi)},setOp:function(ue,Ri,Zi){(bt!==ue||qt!==Ri||Re!==Zi)&&(s.stencilOp(ue,Ri,Zi),bt=ue,qt=Ri,Re=Zi)},setLocked:function(ue){D=ue},setClear:function(ue){qe!==ue&&(s.clearStencil(ue),qe=ue)},reset:function(){D=!1,pt=null,et=null,ot=null,wt=null,bt=null,qt=null,Re=null,qe=null}}}let r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,M=null,v=null,C=null,w=null,E=new dt(0,0,0),A=0,b=!1,_=null,I=null,N=null,k=null,X=null,Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,it=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=it>=1):H.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=it>=2);let at=null,ut={},_t=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),Lt=new de().fromArray(_t),nt=new de().fromArray(Bt);function ht(D,pt,et,ot){let wt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(D,bt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<et;qt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(pt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return bt}let Dt={};Dt[s.TEXTURE_2D]=ht(s.TEXTURE_2D,s.TEXTURE_2D,1),Dt[s.TEXTURE_CUBE_MAP]=ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[s.TEXTURE_2D_ARRAY]=ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Dt[s.TEXTURE_3D]=ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Mt(s.DEPTH_TEST),o.setFunc(Ms),Qt(!1),P(eh),Mt(s.CULL_FACE),z(Gi);function Mt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function kt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Vt(D,pt){return u[D]!==pt?(s.bindFramebuffer(D,pt),u[D]=pt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function Yt(D,pt){let et=d,ot=!1;if(D){et=f.get(pt),et===void 0&&(et=[],f.set(pt,et));let wt=D.textures;if(et.length!==wt.length||et[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,qt=wt.length;bt<qt;bt++)et[bt]=s.COLOR_ATTACHMENT0+bt;et.length=wt.length,ot=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,ot=!0);ot&&s.drawBuffers(et)}function ye(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let ie={[zn]:s.FUNC_ADD,[cd]:s.FUNC_SUBTRACT,[hd]:s.FUNC_REVERSE_SUBTRACT};ie[ud]=s.MIN,ie[dd]=s.MAX;let ve={[fd]:s.ZERO,[pd]:s.ONE,[md]:s.SRC_COLOR,[qa]:s.SRC_ALPHA,[Md]:s.SRC_ALPHA_SATURATE,[vd]:s.DST_COLOR,[xd]:s.DST_ALPHA,[gd]:s.ONE_MINUS_SRC_COLOR,[Za]:s.ONE_MINUS_SRC_ALPHA,[_d]:s.ONE_MINUS_DST_COLOR,[yd]:s.ONE_MINUS_DST_ALPHA,[bd]:s.CONSTANT_COLOR,[Sd]:s.ONE_MINUS_CONSTANT_COLOR,[wd]:s.CONSTANT_ALPHA,[Ed]:s.ONE_MINUS_CONSTANT_ALPHA};function z(D,pt,et,ot,wt,bt,qt,Re,qe,ue){if(D===Gi){x===!0&&(kt(s.BLEND),x=!1);return}if(x===!1&&(Mt(s.BLEND),x=!0),D!==ld){if(D!==m||ue!==b){if((p!==zn||v!==zn)&&(s.blendEquation(s.FUNC_ADD),p=zn,v=zn),ue)switch(D){case _n:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ke:s.blendFunc(s.ONE,s.ONE);break;case ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _n:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ke:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,M=null,C=null,w=null,E.set(0,0,0),A=0,m=D,b=ue}return}wt=wt||pt,bt=bt||et,qt=qt||ot,(pt!==p||wt!==v)&&(s.blendEquationSeparate(ie[pt],ie[wt]),p=pt,v=wt),(et!==y||ot!==M||bt!==C||qt!==w)&&(s.blendFuncSeparate(ve[et],ve[ot],ve[bt],ve[qt]),y=et,M=ot,C=bt,w=qt),(Re.equals(E)===!1||qe!==A)&&(s.blendColor(Re.r,Re.g,Re.b,qe),E.copy(Re),A=qe),m=D,b=!1}function Ye(D,pt){D.side===Ne?kt(s.CULL_FACE):Mt(s.CULL_FACE);let et=D.side===ke;pt&&(et=!et),Qt(et),D.blending===_n&&D.transparent===!1?z(Gi):z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ot=D.stencilWrite;a.setTest(ot),ot&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),j(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Mt(s.SAMPLE_ALPHA_TO_COVERAGE):kt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(D){_!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),_=D)}function P(D){D!==od?(Mt(s.CULL_FACE),D!==I&&(D===eh?s.cullFace(s.BACK):D===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):kt(s.CULL_FACE),I=D}function G(D){D!==N&&(Y&&s.lineWidth(D),N=D)}function j(D,pt,et){D?(Mt(s.POLYGON_OFFSET_FILL),(k!==pt||X!==et)&&(s.polygonOffset(pt,et),k=pt,X=et)):kt(s.POLYGON_OFFSET_FILL)}function $(D){D?Mt(s.SCISSOR_TEST):kt(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+Q-1),at!==D&&(s.activeTexture(D),at=D)}function S(D,pt,et){et===void 0&&(at===null?et=s.TEXTURE0+Q-1:et=at);let ot=ut[et];ot===void 0&&(ot={type:void 0,texture:void 0},ut[et]=ot),(ot.type!==D||ot.texture!==pt)&&(at!==et&&(s.activeTexture(et),at=et),s.bindTexture(D,pt||Dt[D]),ot.type=D,ot.texture=pt)}function U(){let D=ut[at];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(D){Lt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Lt.copy(D))}function O(D){nt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),nt.copy(D))}function gt(D,pt){let et=c.get(pt);et===void 0&&(et=new WeakMap,c.set(pt,et));let ot=et.get(D);ot===void 0&&(ot=s.getUniformBlockIndex(pt,D.name),et.set(D,ot))}function ct(D,pt){let ot=c.get(pt).get(D);l.get(pt)!==ot&&(s.uniformBlockBinding(pt,ot,D.__bindingPointIndex),l.set(pt,ot))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},at=null,ut={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,M=null,v=null,C=null,w=null,E=new dt(0,0,0),A=0,b=!1,_=null,I=null,N=null,k=null,X=null,Lt.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Mt,disable:kt,bindFramebuffer:Vt,drawBuffers:Yt,useProgram:ye,setBlending:z,setMaterial:Ye,setFlipSided:Qt,setCullFace:P,setLineWidth:G,setPolygonOffset:j,setScissorTest:$,activeTexture:R,bindTexture:S,unbindTexture:U,compressedTexImage2D:Z,compressedTexImage3D:q,texImage2D:tt,texImage3D:yt,updateUBOMapping:gt,uniformBlockBinding:ct,texStorage2D:mt,texStorage3D:W,texSubImage2D:V,texSubImage3D:lt,compressedTexSubImage2D:rt,compressedTexSubImage3D:st,scissor:Et,viewport:O,reset:At}}function jh(s,t,e,i){let n=Cg(i);switch(e){case yu:return s*t;case _u:return s*t;case Mu:return s*t*2;case ur:return s*t/n.components*n.byteLength;case Ac:return s*t/n.components*n.byteLength;case bu:return s*t*2/n.components*n.byteLength;case Rc:return s*t*2/n.components*n.byteLength;case vu:return s*t*3/n.components*n.byteLength;case Di:return s*t*4/n.components*n.byteLength;case Cc:return s*t*4/n.components*n.byteLength;case $r:case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ol:case ll:return Math.max(s,16)*Math.max(t,8)/4;case rl:case al:return Math.max(s,8)*Math.max(t,8)/2;case cl:case hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case xl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case jr:case Tl:case Al:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Su:case Rl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Cl:case Pl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cg(s){switch(s){case Ui:case mu:return{byteLength:1,components:1};case nr:case gu:case gi:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case Hn:case wc:case Vi:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Pg(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return d?new OffscreenCanvas(R,S):io("canvas")}function x(R,S,U){let Z=1,q=$(R);if((q.width>U||q.height>U)&&(Z=U/Math.max(q.width,q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let V=Math.floor(Z*q.width),lt=Math.floor(Z*q.height);u===void 0&&(u=g(V,lt));let rt=S?g(V,lt):u;return rt.width=V,rt.height=lt,rt.getContext("2d").drawImage(R,0,0,V,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+V+"x"+lt+")."),rt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,S,U,Z,q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let V=S;if(S===s.RED&&(U===s.FLOAT&&(V=s.R32F),U===s.HALF_FLOAT&&(V=s.R16F),U===s.UNSIGNED_BYTE&&(V=s.R8)),S===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.R8UI),U===s.UNSIGNED_SHORT&&(V=s.R16UI),U===s.UNSIGNED_INT&&(V=s.R32UI),U===s.BYTE&&(V=s.R8I),U===s.SHORT&&(V=s.R16I),U===s.INT&&(V=s.R32I)),S===s.RG&&(U===s.FLOAT&&(V=s.RG32F),U===s.HALF_FLOAT&&(V=s.RG16F),U===s.UNSIGNED_BYTE&&(V=s.RG8)),S===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.RG8UI),U===s.UNSIGNED_SHORT&&(V=s.RG16UI),U===s.UNSIGNED_INT&&(V=s.RG32UI),U===s.BYTE&&(V=s.RG8I),U===s.SHORT&&(V=s.RG16I),U===s.INT&&(V=s.RG32I)),S===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.RGB8UI),U===s.UNSIGNED_SHORT&&(V=s.RGB16UI),U===s.UNSIGNED_INT&&(V=s.RGB32UI),U===s.BYTE&&(V=s.RGB8I),U===s.SHORT&&(V=s.RGB16I),U===s.INT&&(V=s.RGB32I)),S===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),U===s.UNSIGNED_INT&&(V=s.RGBA32UI),U===s.BYTE&&(V=s.RGBA8I),U===s.SHORT&&(V=s.RGBA16I),U===s.INT&&(V=s.RGBA32I)),S===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),S===s.RGBA){let lt=q?Po:ne.getTransfer(Z);U===s.FLOAT&&(V=s.RGBA32F),U===s.HALF_FLOAT&&(V=s.RGBA16F),U===s.UNSIGNED_BYTE&&(V=lt===le?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(R,S){let U;return R?S===null||S===Hn||S===ws?U=s.DEPTH24_STENCIL8:S===Vi?U=s.DEPTH32F_STENCIL8:S===nr&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hn||S===ws?U=s.DEPTH_COMPONENT24:S===Vi?U=s.DEPTH_COMPONENT32F:S===nr&&(U=s.DEPTH_COMPONENT16),U}function C(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==pi&&R.minFilter!==bi?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){let S=R.target;S.removeEventListener("dispose",w),A(S),S.isVideoTexture&&h.delete(S)}function E(R){let S=R.target;S.removeEventListener("dispose",E),_(S)}function A(R){let S=i.get(R);if(S.__webglInit===void 0)return;let U=R.source,Z=f.get(U);if(Z){let q=Z[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&b(R),Object.keys(Z).length===0&&f.delete(U)}i.remove(R)}function b(R){let S=i.get(R);s.deleteTexture(S.__webglTexture);let U=R.source,Z=f.get(U);delete Z[S.__cacheKey],o.memory.textures--}function _(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let q=0;q<S.__webglFramebuffer[Z].length;q++)s.deleteFramebuffer(S.__webglFramebuffer[Z][q]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let U=R.textures;for(let Z=0,q=U.length;Z<q;Z++){let V=i.get(U[Z]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(U[Z])}i.remove(R)}let I=0;function N(){I=0}function k(){let R=I;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),I+=1,R}function X(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Q(R,S){let U=i.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(U,R,S);return}}e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+S)}function Y(R,S){let U=i.get(R);if(R.version>0&&U.__version!==R.version){nt(U,R,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+S)}function it(R,S){let U=i.get(R);if(R.version>0&&U.__version!==R.version){nt(U,R,S);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+S)}function H(R,S){let U=i.get(R);if(R.version>0&&U.__version!==R.version){ht(U,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+S)}let at={[an]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[sl]:s.MIRRORED_REPEAT},ut={[pi]:s.NEAREST,[Cd]:s.NEAREST_MIPMAP_NEAREST,[Mr]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[ua]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},_t={[Dd]:s.NEVER,[Bd]:s.ALWAYS,[Ud]:s.LESS,[wu]:s.LEQUAL,[Nd]:s.EQUAL,[Od]:s.GEQUAL,[Fd]:s.GREATER,[zd]:s.NOTEQUAL};function Bt(R,S){if(S.type===Vi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bi||S.magFilter===ua||S.magFilter===Mr||S.magFilter===kn||S.minFilter===bi||S.minFilter===ua||S.minFilter===Mr||S.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,at[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,at[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,at[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ut[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pi||S.minFilter!==Mr&&S.minFilter!==kn||S.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Lt(R,S){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let Z=S.source,q=f.get(Z);q===void 0&&(q={},f.set(Z,q));let V=X(S);if(V!==R.__cacheKey){q[V]===void 0&&(q[V]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),q[V].usedTimes++;let lt=q[R.__cacheKey];lt!==void 0&&(q[R.__cacheKey].usedTimes--,lt.usedTimes===0&&b(S)),R.__cacheKey=V,R.__webglTexture=q[V].texture}return U}function nt(R,S,U){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);let q=Lt(R,S),V=S.source;e.bindTexture(Z,R.__webglTexture,s.TEXTURE0+U);let lt=i.get(V);if(V.version!==lt.__version||q===!0){e.activeTexture(s.TEXTURE0+U);let rt=ne.getPrimaries(ne.workingColorSpace),st=S.colorSpace===vn?null:ne.getPrimaries(S.colorSpace),mt=S.colorSpace===vn||rt===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let W=x(S.image,!1,n.maxTextureSize);W=j(S,W);let tt=r.convert(S.format,S.colorSpace),yt=r.convert(S.type),Et=M(S.internalFormat,tt,yt,S.colorSpace,S.isVideoTexture);Bt(Z,S);let O,gt=S.mipmaps,ct=S.isVideoTexture!==!0,At=lt.__version===void 0||q===!0,D=V.dataReady,pt=C(S,W);if(S.isDepthTexture)Et=v(S.format===Es,S.type),At&&(ct?e.texStorage2D(s.TEXTURE_2D,1,Et,W.width,W.height):e.texImage2D(s.TEXTURE_2D,0,Et,W.width,W.height,0,tt,yt,null));else if(S.isDataTexture)if(gt.length>0){ct&&At&&e.texStorage2D(s.TEXTURE_2D,pt,Et,gt[0].width,gt[0].height);for(let et=0,ot=gt.length;et<ot;et++)O=gt[et],ct?D&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,O.width,O.height,tt,yt,O.data):e.texImage2D(s.TEXTURE_2D,et,Et,O.width,O.height,0,tt,yt,O.data);S.generateMipmaps=!1}else ct?(At&&e.texStorage2D(s.TEXTURE_2D,pt,Et,W.width,W.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,W.width,W.height,tt,yt,W.data)):e.texImage2D(s.TEXTURE_2D,0,Et,W.width,W.height,0,tt,yt,W.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ct&&At&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Et,gt[0].width,gt[0].height,W.depth);for(let et=0,ot=gt.length;et<ot;et++)if(O=gt[et],S.format!==Di)if(tt!==null)if(ct){if(D)if(S.layerUpdates.size>0){let wt=jh(O.width,O.height,S.format,S.type);for(let bt of S.layerUpdates){let qt=O.data.subarray(bt*wt/O.data.BYTES_PER_ELEMENT,(bt+1)*wt/O.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,bt,O.width,O.height,1,tt,qt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,O.width,O.height,W.depth,tt,O.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,Et,O.width,O.height,W.depth,0,O.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,O.width,O.height,W.depth,tt,yt,O.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,Et,O.width,O.height,W.depth,0,tt,yt,O.data)}else{ct&&At&&e.texStorage2D(s.TEXTURE_2D,pt,Et,gt[0].width,gt[0].height);for(let et=0,ot=gt.length;et<ot;et++)O=gt[et],S.format!==Di?tt!==null?ct?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,O.width,O.height,tt,O.data):e.compressedTexImage2D(s.TEXTURE_2D,et,Et,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?D&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,O.width,O.height,tt,yt,O.data):e.texImage2D(s.TEXTURE_2D,et,Et,O.width,O.height,0,tt,yt,O.data)}else if(S.isDataArrayTexture)if(ct){if(At&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Et,W.width,W.height,W.depth),D)if(S.layerUpdates.size>0){let et=jh(W.width,W.height,S.format,S.type);for(let ot of S.layerUpdates){let wt=W.data.subarray(ot*et/W.data.BYTES_PER_ELEMENT,(ot+1)*et/W.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,W.width,W.height,1,tt,yt,wt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,tt,yt,W.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Et,W.width,W.height,W.depth,0,tt,yt,W.data);else if(S.isData3DTexture)ct?(At&&e.texStorage3D(s.TEXTURE_3D,pt,Et,W.width,W.height,W.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,tt,yt,W.data)):e.texImage3D(s.TEXTURE_3D,0,Et,W.width,W.height,W.depth,0,tt,yt,W.data);else if(S.isFramebufferTexture){if(At)if(ct)e.texStorage2D(s.TEXTURE_2D,pt,Et,W.width,W.height);else{let et=W.width,ot=W.height;for(let wt=0;wt<pt;wt++)e.texImage2D(s.TEXTURE_2D,wt,Et,et,ot,0,tt,yt,null),et>>=1,ot>>=1}}else if(gt.length>0){if(ct&&At){let et=$(gt[0]);e.texStorage2D(s.TEXTURE_2D,pt,Et,et.width,et.height)}for(let et=0,ot=gt.length;et<ot;et++)O=gt[et],ct?D&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,tt,yt,O):e.texImage2D(s.TEXTURE_2D,et,Et,tt,yt,O);S.generateMipmaps=!1}else if(ct){if(At){let et=$(W);e.texStorage2D(s.TEXTURE_2D,pt,Et,et.width,et.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt,yt,W)}else e.texImage2D(s.TEXTURE_2D,0,Et,tt,yt,W);m(S)&&p(Z),lt.__version=V.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ht(R,S,U){if(S.image.length!==6)return;let Z=Lt(R,S),q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+U);let V=i.get(q);if(q.version!==V.__version||Z===!0){e.activeTexture(s.TEXTURE0+U);let lt=ne.getPrimaries(ne.workingColorSpace),rt=S.colorSpace===vn?null:ne.getPrimaries(S.colorSpace),st=S.colorSpace===vn||lt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let mt=S.isCompressedTexture||S.image[0].isCompressedTexture,W=S.image[0]&&S.image[0].isDataTexture,tt=[];for(let ot=0;ot<6;ot++)!mt&&!W?tt[ot]=x(S.image[ot],!0,n.maxCubemapSize):tt[ot]=W?S.image[ot].image:S.image[ot],tt[ot]=j(S,tt[ot]);let yt=tt[0],Et=r.convert(S.format,S.colorSpace),O=r.convert(S.type),gt=M(S.internalFormat,Et,O,S.colorSpace),ct=S.isVideoTexture!==!0,At=V.__version===void 0||Z===!0,D=q.dataReady,pt=C(S,yt);Bt(s.TEXTURE_CUBE_MAP,S);let et;if(mt){ct&&At&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,gt,yt.width,yt.height);for(let ot=0;ot<6;ot++){et=tt[ot].mipmaps;for(let wt=0;wt<et.length;wt++){let bt=et[wt];S.format!==Di?Et!==null?ct?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,0,0,bt.width,bt.height,Et,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,gt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,0,0,bt.width,bt.height,Et,O,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,gt,bt.width,bt.height,0,Et,O,bt.data)}}}else{if(et=S.mipmaps,ct&&At){et.length>0&&pt++;let ot=$(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,gt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(W){ct?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,tt[ot].width,tt[ot].height,Et,O,tt[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,gt,tt[ot].width,tt[ot].height,0,Et,O,tt[ot].data);for(let wt=0;wt<et.length;wt++){let qt=et[wt].image[ot].image;ct?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,0,0,qt.width,qt.height,Et,O,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,gt,qt.width,qt.height,0,Et,O,qt.data)}}else{ct?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Et,O,tt[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,gt,Et,O,tt[ot]);for(let wt=0;wt<et.length;wt++){let bt=et[wt];ct?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,0,0,Et,O,bt.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,gt,Et,O,bt.image[ot])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),V.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Dt(R,S,U,Z,q,V){let lt=r.convert(U.format,U.colorSpace),rt=r.convert(U.type),st=M(U.internalFormat,lt,rt,U.colorSpace),mt=i.get(S),W=i.get(U);if(W.__renderTarget=S,!mt.__hasExternalTextures){let tt=Math.max(1,S.width>>V),yt=Math.max(1,S.height>>V);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?e.texImage3D(q,V,st,tt,yt,S.depth,0,lt,rt,null):e.texImage2D(q,V,st,tt,yt,0,lt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),P(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,q,W.__webglTexture,0,Qt(S)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,q,W.__webglTexture,V),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(R,S,U){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let Z=S.depthTexture,q=Z&&Z.isDepthTexture?Z.type:null,V=v(S.stencilBuffer,q),lt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=Qt(S);P(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,V,S.width,S.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,V,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,V,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,R)}else{let Z=S.textures;for(let q=0;q<Z.length;q++){let V=Z[q],lt=r.convert(V.format,V.colorSpace),rt=r.convert(V.type),st=M(V.internalFormat,lt,rt,V.colorSpace),mt=Qt(S);U&&P(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,st,S.width,S.height):P(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,st,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,st,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);let q=Z.__webglTexture,V=Qt(S);if(S.depthTexture.format===ys)P(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0);else if(S.depthTexture.format===Es)P(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Vt(R){let S=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",q)};Z.addEventListener("dispose",q),S.__depthDisposeCallback=q}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");kt(S.__webglFramebuffer,R)}else if(U){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),Mt(S.__webglDepthbuffer[Z],R,!1);else{let q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,V)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Mt(S.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(R,S,U){let Z=i.get(R);S!==void 0&&Dt(Z.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Vt(R)}function ye(R){let S=R.texture,U=i.get(R),Z=i.get(S);R.addEventListener("dispose",E);let q=R.textures,V=R.isWebGLCubeRenderTarget===!0,lt=q.length>1;if(lt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,o.memory.textures++),V){U.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[rt]=[];for(let st=0;st<S.mipmaps.length;st++)U.__webglFramebuffer[rt][st]=s.createFramebuffer()}else U.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)U.__webglFramebuffer[rt]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(lt)for(let rt=0,st=q.length;rt<st;rt++){let mt=i.get(q[rt]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&P(R)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let rt=0;rt<q.length;rt++){let st=q[rt];U.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[rt]);let mt=r.convert(st.format,st.colorSpace),W=r.convert(st.type),tt=M(st.internalFormat,mt,W,st.colorSpace,R.isXRRenderTarget===!0),yt=Qt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,tt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,U.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)Dt(U.__webglFramebuffer[rt][st],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,st);else Dt(U.__webglFramebuffer[rt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let rt=0,st=q.length;rt<st;rt++){let mt=q[rt],W=i.get(mt);e.bindTexture(s.TEXTURE_2D,W.__webglTexture),Bt(s.TEXTURE_2D,mt),Dt(U.__webglFramebuffer,R,mt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(mt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,Z.__webglTexture),Bt(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)Dt(U.__webglFramebuffer[st],R,S,s.COLOR_ATTACHMENT0,rt,st);else Dt(U.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,rt,0);m(S)&&p(rt),e.unbindTexture()}R.depthBuffer&&Vt(R)}function ie(R){let S=R.textures;for(let U=0,Z=S.length;U<Z;U++){let q=S[U];if(m(q)){let V=y(R),lt=i.get(q).__webglTexture;e.bindTexture(V,lt),p(V),e.unbindTexture()}}}let ve=[],z=[];function Ye(R){if(R.samples>0){if(P(R)===!1){let S=R.textures,U=R.width,Z=R.height,q=s.COLOR_BUFFER_BIT,V=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=i.get(R),rt=S.length>1;if(rt)for(let st=0;st<S.length;st++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let st=0;st<S.length;st++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[st]);let mt=i.get(S[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,mt,0)}s.blitFramebuffer(0,0,U,Z,0,0,U,Z,q,s.NEAREST),l===!0&&(ve.length=0,z.length=0,ve.push(s.COLOR_ATTACHMENT0+st),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ve.push(V),z.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let st=0;st<S.length;st++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,lt.__webglColorRenderbuffer[st]);let mt=i.get(S[st]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,mt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Qt(R){return Math.min(n.maxSamples,R.samples)}function P(R){let S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function j(R,S){let U=R.colorSpace,Z=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Ns&&U!==vn&&(ne.getTransfer(U)===le?(Z!==Di||q!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=it,this.setTextureCube=H,this.rebindTextures=Yt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=P}function Ig(s,t){function e(i,n=vn){let r,o=ne.getTransfer(n);if(i===Ui)return s.UNSIGNED_BYTE;if(i===Ec)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Tc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===xu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===mu)return s.BYTE;if(i===gu)return s.SHORT;if(i===nr)return s.UNSIGNED_SHORT;if(i===wc)return s.INT;if(i===Hn)return s.UNSIGNED_INT;if(i===Vi)return s.FLOAT;if(i===gi)return s.HALF_FLOAT;if(i===yu)return s.ALPHA;if(i===vu)return s.RGB;if(i===Di)return s.RGBA;if(i===_u)return s.LUMINANCE;if(i===Mu)return s.LUMINANCE_ALPHA;if(i===ys)return s.DEPTH_COMPONENT;if(i===Es)return s.DEPTH_STENCIL;if(i===ur)return s.RED;if(i===Ac)return s.RED_INTEGER;if(i===bu)return s.RG;if(i===Rc)return s.RG_INTEGER;if(i===Cc)return s.RGBA_INTEGER;if(i===$r||i===Jr||i===Kr||i===Qr)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===ol||i===al||i===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===hl||i===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cl||i===hl)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ul)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dl||i===fl||i===pl||i===ml||i===gl||i===xl||i===yl||i===vl||i===_l||i===Ml||i===bl||i===Sl||i===wl||i===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_l)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ml)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===El)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jr||i===Tl||i===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jr)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Su||i===Rl||i===Cl||i===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===jr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var Yl=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lg={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
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

}`,ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ai,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new xe({vertexShader:Dg,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zl=class extends Sn{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new ql,m=e.getContextAttributes(),p=null,y=null,M=[],v=[],C=new xt,w=null,E=new Je;E.viewport=new de;let A=new Je;A.viewport=new de;let b=[E,A],_=new Yl,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=M[nt];return ht===void 0&&(ht=new tr,M[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=M[nt];return ht===void 0&&(ht=new tr,M[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=M[nt];return ht===void 0&&(ht=new tr,M[nt]=ht),ht.getHandSpace()};function k(nt){let ht=v.indexOf(nt.inputSource);if(ht===-1)return;let Dt=M[ht];Dt!==void 0&&(Dt.update(nt.inputSource,nt.frame,c||o),Dt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function X(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",Q);for(let nt=0;nt<M.length;nt++){let ht=v[nt];ht!==null&&(v[nt]=null,M[nt].disconnect(ht))}I=null,N=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,n=null,y=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(nt){if(n=nt,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",X),n.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),n.renderState.layers===void 0){let ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,ht),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ve(d.framebufferWidth,d.framebufferHeight,{format:Di,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,Dt=null,Mt=null;m.depth&&(Mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?Es:ys,Dt=m.stencil?ws:Hn);let kt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(kt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ve(f.textureWidth,f.textureHeight,{format:Di,type:Ui,depthTexture:new ho(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Lt.setContext(n),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(nt){for(let ht=0;ht<nt.removed.length;ht++){let Dt=nt.removed[ht],Mt=v.indexOf(Dt);Mt>=0&&(v[Mt]=null,M[Mt].disconnect(Dt))}for(let ht=0;ht<nt.added.length;ht++){let Dt=nt.added[ht],Mt=v.indexOf(Dt);if(Mt===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=v.length){v.push(Dt),Mt=Vt;break}else if(v[Vt]===null){v[Vt]=Dt,Mt=Vt;break}if(Mt===-1)break}let kt=M[Mt];kt&&kt.connect(Dt)}}let Y=new L,it=new L;function H(nt,ht,Dt){Y.setFromMatrixPosition(ht.matrixWorld),it.setFromMatrixPosition(Dt.matrixWorld);let Mt=Y.distanceTo(it),kt=ht.projectionMatrix.elements,Vt=Dt.projectionMatrix.elements,Yt=kt[14]/(kt[10]-1),ye=kt[14]/(kt[10]+1),ie=(kt[9]+1)/kt[5],ve=(kt[9]-1)/kt[5],z=(kt[8]-1)/kt[0],Ye=(Vt[8]+1)/Vt[0],Qt=Yt*z,P=Yt*Ye,G=Mt/(-z+Ye),j=G*-z;if(ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(j),nt.translateZ(G),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),kt[10]===-1)nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let $=Yt+G,R=ye+G,S=Qt-j,U=P+(Mt-j),Z=ie*ye/R*$,q=ve*ye/R*$;nt.projectionMatrix.makePerspective(S,U,Z,q,$,R),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function at(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(n===null)return;let ht=nt.near,Dt=nt.far;x.texture!==null&&(x.depthNear>0&&(ht=x.depthNear),x.depthFar>0&&(Dt=x.depthFar)),_.near=A.near=E.near=ht,_.far=A.far=E.far=Dt,(I!==_.near||N!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,N=_.far),E.layers.mask=nt.layers.mask|2,A.layers.mask=nt.layers.mask|4,_.layers.mask=E.layers.mask|A.layers.mask;let Mt=nt.parent,kt=_.cameras;at(_,Mt);for(let Vt=0;Vt<kt.length;Vt++)at(kt[Vt],Mt);kt.length===2?H(_,E,A):_.projectionMatrix.copy(E.projectionMatrix),ut(nt,_,Mt)};function ut(nt,ht,Dt){Dt===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(Dt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ll*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let _t=null;function Bt(nt,ht){if(h=ht.getViewerPose(c||o),g=ht,h!==null){let Dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Mt=!1;Dt.length!==_.cameras.length&&(_.cameras.length=0,Mt=!0);for(let Vt=0;Vt<Dt.length;Vt++){let Yt=Dt[Vt],ye=null;if(d!==null)ye=d.getViewport(Yt);else{let ve=u.getViewSubImage(f,Yt);ye=ve.viewport,Vt===0&&(t.setRenderTargetTextures(y,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),t.setRenderTarget(y))}let ie=b[Vt];ie===void 0&&(ie=new Je,ie.layers.enable(Vt),ie.viewport=new de,b[Vt]=ie),ie.matrix.fromArray(Yt.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Yt.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ye.x,ye.y,ye.width,ye.height),Vt===0&&(_.matrix.copy(ie.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Mt===!0&&_.cameras.push(ie)}let kt=n.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let Vt=u.getDepthInformation(Dt[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,n.renderState)}}for(let Dt=0;Dt<M.length;Dt++){let Mt=v[Dt],kt=M[Dt];Mt!==null&&kt!==void 0&&kt.update(Mt,ht,c||o)}_t&&_t(nt,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Lt=new Ru;Lt.setAnimationLoop(Bt),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}},Nn=new Pe,Ng=new Jt;function Fg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Au(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,Nn.copy(v),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(Nn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function zg(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let v=M.program;i.uniformBlockBinding(y,v)}function c(y,M){let v=n[y.id];v===void 0&&(g(y),v=h(y),n[y.id]=v,y.addEventListener("dispose",m));let C=M.program;i.updateUBOMapping(y,C);let w=t.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){let M=u();y.__bindingPointIndex=M;let v=s.createBuffer(),C=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=n[y.id],v=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,E=v.length;w<E;w++){let A=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,_=A.length;b<_;b++){let I=A[b];if(d(I,w,b,C)===!0){let N=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],X=0;for(let Q=0;Q<k.length;Q++){let Y=k[Q],it=x(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,N+X,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,X),X+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,M,v,C){let w=y.value,E=M+"_"+v;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{let A=C[E];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return C[E]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(y){let M=y.uniforms,v=0,C=16;for(let E=0,A=M.length;E<A;E++){let b=Array.isArray(M[E])?M[E]:[M[E]];for(let _=0,I=b.length;_<I;_++){let N=b[_],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,Q=k.length;X<Q;X++){let Y=k[X],it=x(Y),H=v%C,at=H%it.boundary,ut=H+at;v+=at,ut!==0&&C-ut<it.storage&&(v+=C-ut),N.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=it.storage}}}let w=v%C;return w>0&&(v+=C-w),y.__size=v,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){let M=y.target;M.removeEventListener("dispose",m);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function p(){for(let y in n)s.deleteBuffer(n[y]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}var uo=class{constructor(t={}){let{canvas:e=Hd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=Mn,this.toneMappingExposure=1;let v=this,C=!1,w=0,E=0,A=null,b=-1,_=null,I=new de,N=new de,k=null,X=new dt(0),Q=0,Y=e.width,it=e.height,H=1,at=null,ut=null,_t=new de(0,0,Y,it),Bt=new de(0,0,Y,it),Lt=!1,nt=new rr,ht=!1,Dt=!1,Mt=new Jt,kt=new Jt,Vt=new L,Yt=new de,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ie=!1;function ve(){return A===null?H:1}let z=i;function Ye(T,F){return e.getContext(T,F)}try{let T={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),z===null){let F="webgl2";if(z=Ye(F,T),z===null)throw Ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Qt,P,G,j,$,R,S,U,Z,q,V,lt,rt,st,mt,W,tt,yt,Et,O,gt,ct,At,D;function pt(){Qt=new jm(z),Qt.init(),ct=new Ig(z,Qt),P=new qm(z,Qt,t,ct),G=new Rg(z,Qt),P.reverseDepthBuffer&&f&&G.buffers.depth.setReversed(!0),j=new i0(z),$=new mg,R=new Pg(z,Qt,G,$,P,ct,j),S=new $m(v),U=new Qm(v),Z=new cf(z),At=new Xm(z,Z),q=new t0(z,Z,j,At),V=new s0(z,q,Z,j),Et=new n0(z,P,R),W=new Zm($),lt=new pg(v,S,U,Qt,P,At,W),rt=new Fg(v,$),st=new xg,mt=new Sg(Qt),yt=new Wm(v,S,U,G,V,d,l),tt=new Tg(v,V,P),D=new zg(z,j,P,G),O=new Ym(z,Qt,j),gt=new e0(z,Qt,j),j.programs=lt.programs,v.capabilities=P,v.extensions=Qt,v.properties=$,v.renderLists=st,v.shadowMap=tt,v.state=G,v.info=j}pt();let et=new Zl(v,z);this.xr=et,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=Qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(Y,it,!1))},this.getSize=function(T){return T.set(Y,it)},this.setSize=function(T,F,J=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,it=F,e.width=Math.floor(T*H),e.height=Math.floor(F*H),J===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Y*H,it*H).floor()},this.setDrawingBufferSize=function(T,F,J){Y=T,it=F,H=J,e.width=Math.floor(T*J),e.height=Math.floor(F*J),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(_t)},this.setViewport=function(T,F,J,K){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,F,J,K),G.viewport(I.copy(_t).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Bt)},this.setScissor=function(T,F,J,K){T.isVector4?Bt.set(T.x,T.y,T.z,T.w):Bt.set(T,F,J,K),G.scissor(N.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(T){G.setScissorTest(Lt=T)},this.setOpaqueSort=function(T){at=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(T=!0,F=!0,J=!0){let K=0;if(T){let B=!1;if(A!==null){let ft=A.texture.format;B=ft===Cc||ft===Rc||ft===Ac}if(B){let ft=A.texture.type,St=ft===Ui||ft===Hn||ft===nr||ft===ws||ft===Ec||ft===Tc,Ut=yt.getClearColor(),Nt=yt.getClearAlpha(),Gt=Ut.r,Zt=Ut.g,Ft=Ut.b;St?(g[0]=Gt,g[1]=Zt,g[2]=Ft,g[3]=Nt,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=Gt,x[1]=Zt,x[2]=Ft,x[3]=Nt,z.clearBufferiv(z.COLOR,0,x))}else K|=z.COLOR_BUFFER_BIT}F&&(K|=z.DEPTH_BUFFER_BIT),J&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),st.dispose(),mt.dispose(),$.dispose(),S.dispose(),U.dispose(),V.dispose(),At.dispose(),D.dispose(),lt.dispose(),et.dispose(),et.removeEventListener("sessionstart",qc),et.removeEventListener("sessionend",Zc),Cn.stop()};function ot(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let T=j.autoReset,F=tt.enabled,J=tt.autoUpdate,K=tt.needsUpdate,B=tt.type;pt(),j.autoReset=T,tt.enabled=F,tt.autoUpdate=J,tt.needsUpdate=K,tt.type=B}function bt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qt(T){let F=T.target;F.removeEventListener("dispose",qt),Re(F)}function Re(T){qe(T),$.remove(T)}function qe(T){let F=$.get(T).programs;F!==void 0&&(F.forEach(function(J){lt.releaseProgram(J)}),T.isShaderMaterial&&lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,J,K,B,ft){F===null&&(F=ye);let St=B.isMesh&&B.matrixWorld.determinant()<0,Ut=nd(T,F,J,K,B);G.setMaterial(K,St);let Nt=J.index,Gt=1;if(K.wireframe===!0){if(Nt=q.getWireframeAttribute(J),Nt===void 0)return;Gt=2}let Zt=J.drawRange,Ft=J.attributes.position,re=Zt.start*Gt,ge=(Zt.start+Zt.count)*Gt;ft!==null&&(re=Math.max(re,ft.start*Gt),ge=Math.min(ge,(ft.start+ft.count)*Gt)),Nt!==null?(re=Math.max(re,0),ge=Math.min(ge,Nt.count)):Ft!=null&&(re=Math.max(re,0),ge=Math.min(ge,Ft.count));let _e=ge-re;if(_e<0||_e===1/0)return;At.setup(B,K,Ut,J,Nt);let ri,oe=O;if(Nt!==null&&(ri=Z.get(Nt),oe=gt,oe.setIndex(ri)),B.isMesh)K.wireframe===!0?(G.setLineWidth(K.wireframeLinewidth*ve()),oe.setMode(z.LINES)):oe.setMode(z.TRIANGLES);else if(B.isLine){let zt=K.linewidth;zt===void 0&&(zt=1),G.setLineWidth(zt*ve()),B.isLineSegments?oe.setMode(z.LINES):B.isLineLoop?oe.setMode(z.LINE_LOOP):oe.setMode(z.LINE_STRIP)}else B.isPoints?oe.setMode(z.POINTS):B.isSprite&&oe.setMode(z.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)oe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))oe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let zt=B._multiDrawStarts,$i=B._multiDrawCounts,ae=B._multiDrawCount,Ci=Nt?Z.get(Nt).bytesPerElement:1,es=$.get(K).currentProgram.getUniforms();for(let ui=0;ui<ae;ui++)es.setValue(z,"_gl_DrawID",ui),oe.render(zt[ui]/Ci,$i[ui])}else if(B.isInstancedMesh)oe.renderInstances(re,_e,B.count);else if(J.isInstancedBufferGeometry){let zt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,$i=Math.min(J.instanceCount,zt);oe.renderInstances(re,_e,$i)}else oe.render(re,_e)};function ue(T,F,J){T.transparent===!0&&T.side===Ne&&T.forceSinglePass===!1?(T.side=ke,T.needsUpdate=!0,_r(T,F,J),T.side=bn,T.needsUpdate=!0,_r(T,F,J),T.side=Ne):_r(T,F,J)}this.compile=function(T,F,J=null){J===null&&(J=T),p=mt.get(J),p.init(F),M.push(p),J.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),T!==J&&T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let K=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ft=B.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){let Ut=ft[St];ue(Ut,J,B),K.add(Ut)}else ue(ft,J,B),K.add(ft)}),M.pop(),p=null,K},this.compileAsync=function(T,F,J=null){let K=this.compile(T,F,J);return new Promise(B=>{function ft(){if(K.forEach(function(St){$.get(St).currentProgram.isReady()&&K.delete(St)}),K.size===0){B(T);return}setTimeout(ft,10)}Qt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ri=null;function Zi(T){Ri&&Ri(T)}function qc(){Cn.stop()}function Zc(){Cn.start()}let Cn=new Ru;Cn.setAnimationLoop(Zi),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(T){Ri=T,et.setAnimationLoop(T),T===null?Cn.stop():Cn.start()},et.addEventListener("sessionstart",qc),et.addEventListener("sessionend",Zc),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(F),F=et.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,A),p=mt.get(T,M.length),p.init(F),M.push(p),kt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(kt),Dt=this.localClippingEnabled,ht=W.init(this.clippingPlanes,Dt),m=st.get(T,y.length),m.init(),y.push(m),et.enabled===!0&&et.isPresenting===!0){let ft=v.xr.getDepthSensingMesh();ft!==null&&ha(ft,F,-1/0,v.sortObjects)}ha(T,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(at,ut),ie=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,ie&&yt.addToRenderList(m,T),this.info.render.frame++,ht===!0&&W.beginShadows();let J=p.state.shadowsArray;tt.render(J,T,F),ht===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){let ft=F.cameras;if(B.length>0)for(let St=0,Ut=ft.length;St<Ut;St++){let Nt=ft[St];Jc(K,B,T,Nt)}ie&&yt.render(T);for(let St=0,Ut=ft.length;St<Ut;St++){let Nt=ft[St];$c(m,T,Nt,Nt.viewport)}}else B.length>0&&Jc(K,B,T,F),ie&&yt.render(T),$c(m,T,F);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,F),At.resetDefaultState(),b=-1,_=null,M.pop(),M.length>0?(p=M[M.length-1],ht===!0&&W.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ha(T,F,J,K){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){K&&Yt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(kt);let St=V.update(T),Ut=T.material;Ut.visible&&m.push(T,St,Ut,J,Yt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){let St=V.update(T),Ut=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Yt.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Yt.copy(St.boundingSphere.center)),Yt.applyMatrix4(T.matrixWorld).applyMatrix4(kt)),Array.isArray(Ut)){let Nt=St.groups;for(let Gt=0,Zt=Nt.length;Gt<Zt;Gt++){let Ft=Nt[Gt],re=Ut[Ft.materialIndex];re&&re.visible&&m.push(T,St,re,J,Yt.z,Ft)}}else Ut.visible&&m.push(T,St,Ut,J,Yt.z,null)}}let ft=T.children;for(let St=0,Ut=ft.length;St<Ut;St++)ha(ft[St],F,J,K)}function $c(T,F,J,K){let B=T.opaque,ft=T.transmissive,St=T.transparent;p.setupLightsView(J),ht===!0&&W.setGlobalState(v.clippingPlanes,J),K&&G.viewport(I.copy(K)),B.length>0&&vr(B,F,J),ft.length>0&&vr(ft,F,J),St.length>0&&vr(St,F,J),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Jc(T,F,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ve(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?gi:Ui,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let ft=p.state.transmissionRenderTarget[K.id],St=K.viewport||I;ft.setSize(St.z,St.w);let Ut=v.getRenderTarget();v.setRenderTarget(ft),v.getClearColor(X),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),ie&&yt.render(J);let Nt=v.toneMapping;v.toneMapping=Mn;let Gt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),ht===!0&&W.setGlobalState(v.clippingPlanes,K),vr(T,J,K),R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ft=0,re=F.length;Ft<re;Ft++){let ge=F[Ft],_e=ge.object,ri=ge.geometry,oe=ge.material,zt=ge.group;if(oe.side===Ne&&_e.layers.test(K.layers)){let $i=oe.side;oe.side=ke,oe.needsUpdate=!0,Kc(_e,J,K,ri,oe,zt),oe.side=$i,oe.needsUpdate=!0,Zt=!0}}Zt===!0&&(R.updateMultisampleRenderTarget(ft),R.updateRenderTargetMipmap(ft))}v.setRenderTarget(Ut),v.setClearColor(X,Q),Gt!==void 0&&(K.viewport=Gt),v.toneMapping=Nt}function vr(T,F,J){let K=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ft=T.length;B<ft;B++){let St=T[B],Ut=St.object,Nt=St.geometry,Gt=K===null?St.material:K,Zt=St.group;Ut.layers.test(J.layers)&&Kc(Ut,F,J,Nt,Gt,Zt)}}function Kc(T,F,J,K,B,ft){T.onBeforeRender(v,F,J,K,B,ft),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,F,J,K,T,ft),B.transparent===!0&&B.side===Ne&&B.forceSinglePass===!1?(B.side=ke,B.needsUpdate=!0,v.renderBufferDirect(J,F,K,B,T,ft),B.side=bn,B.needsUpdate=!0,v.renderBufferDirect(J,F,K,B,T,ft),B.side=Ne):v.renderBufferDirect(J,F,K,B,T,ft),T.onAfterRender(v,F,J,K,B,ft)}function _r(T,F,J){F.isScene!==!0&&(F=ye);let K=$.get(T),B=p.state.lights,ft=p.state.shadowsArray,St=B.state.version,Ut=lt.getParameters(T,B.state,ft,F,J),Nt=lt.getProgramCacheKey(Ut),Gt=K.programs;K.environment=T.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(T.isMeshStandardMaterial?U:S).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",qt),Gt=new Map,K.programs=Gt);let Zt=Gt.get(Nt);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===St)return jc(T,Ut),Zt}else Ut.uniforms=lt.getUniforms(T),T.onBeforeCompile(Ut,v),Zt=lt.acquireProgram(Ut,Nt),Gt.set(Nt,Zt),K.uniforms=Ut.uniforms;let Ft=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=W.uniform),jc(T,Ut),K.needsLights=rd(T),K.lightsStateVersion=St,K.needsLights&&(Ft.ambientLightColor.value=B.state.ambient,Ft.lightProbe.value=B.state.probe,Ft.directionalLights.value=B.state.directional,Ft.directionalLightShadows.value=B.state.directionalShadow,Ft.spotLights.value=B.state.spot,Ft.spotLightShadows.value=B.state.spotShadow,Ft.rectAreaLights.value=B.state.rectArea,Ft.ltc_1.value=B.state.rectAreaLTC1,Ft.ltc_2.value=B.state.rectAreaLTC2,Ft.pointLights.value=B.state.point,Ft.pointLightShadows.value=B.state.pointShadow,Ft.hemisphereLights.value=B.state.hemi,Ft.directionalShadowMap.value=B.state.directionalShadowMap,Ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ft.spotShadowMap.value=B.state.spotShadowMap,Ft.spotLightMatrix.value=B.state.spotLightMatrix,Ft.spotLightMap.value=B.state.spotLightMap,Ft.pointShadowMap.value=B.state.pointShadowMap,Ft.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function Qc(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=_s.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function jc(T,F){let J=$.get(T);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function nd(T,F,J,K,B){F.isScene!==!0&&(F=ye),R.resetTextureUnits();let ft=F.fog,St=K.isMeshStandardMaterial?F.environment:null,Ut=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ns,Nt=(K.isMeshStandardMaterial?U:S).get(K.envMap||St),Gt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Zt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ft=!!J.morphAttributes.position,re=!!J.morphAttributes.normal,ge=!!J.morphAttributes.color,_e=Mn;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_e=v.toneMapping);let ri=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,oe=ri!==void 0?ri.length:0,zt=$.get(K),$i=p.state.lights;if(ht===!0&&(Dt===!0||T!==_)){let _i=T===_&&K.id===b;W.setState(K,T,_i)}let ae=!1;K.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==$i.state.version||zt.outputColorSpace!==Ut||B.isBatchedMesh&&zt.batching===!1||!B.isBatchedMesh&&zt.batching===!0||B.isBatchedMesh&&zt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&zt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&zt.instancing===!1||!B.isInstancedMesh&&zt.instancing===!0||B.isSkinnedMesh&&zt.skinning===!1||!B.isSkinnedMesh&&zt.skinning===!0||B.isInstancedMesh&&zt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&zt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&zt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&zt.instancingMorph===!1&&B.morphTexture!==null||zt.envMap!==Nt||K.fog===!0&&zt.fog!==ft||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==W.numPlanes||zt.numIntersection!==W.numIntersection)||zt.vertexAlphas!==Gt||zt.vertexTangents!==Zt||zt.morphTargets!==Ft||zt.morphNormals!==re||zt.morphColors!==ge||zt.toneMapping!==_e||zt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,zt.__version=K.version);let Ci=zt.currentProgram;ae===!0&&(Ci=_r(K,F,B));let es=!1,ui=!1,Hs=!1,Me=Ci.getUniforms(),ki=zt.uniforms;if(G.useProgram(Ci.program)&&(es=!0,ui=!0,Hs=!0),K.id!==b&&(b=K.id,ui=!0),es||_!==T){G.buffers.depth.getReversed()?(Mt.copy(T.projectionMatrix),Gd(Mt),Wd(Mt),Me.setValue(z,"projectionMatrix",Mt)):Me.setValue(z,"projectionMatrix",T.projectionMatrix),Me.setValue(z,"viewMatrix",T.matrixWorldInverse);let un=Me.map.cameraPosition;un!==void 0&&un.setValue(z,Vt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&Me.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Me.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,ui=!0,Hs=!0)}if(B.isSkinnedMesh){Me.setOptional(z,B,"bindMatrix"),Me.setOptional(z,B,"bindMatrixInverse");let _i=B.skeleton;_i&&(_i.boneTexture===null&&_i.computeBoneTexture(),Me.setValue(z,"boneTexture",_i.boneTexture,R))}B.isBatchedMesh&&(Me.setOptional(z,B,"batchingTexture"),Me.setValue(z,"batchingTexture",B._matricesTexture,R),Me.setOptional(z,B,"batchingIdTexture"),Me.setValue(z,"batchingIdTexture",B._indirectTexture,R),Me.setOptional(z,B,"batchingColorTexture"),B._colorsTexture!==null&&Me.setValue(z,"batchingColorTexture",B._colorsTexture,R));let Vs=J.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0)&&Et.update(B,J,Ci),(ui||zt.receiveShadow!==B.receiveShadow)&&(zt.receiveShadow=B.receiveShadow,Me.setValue(z,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ki.envMap.value=Nt,ki.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(ki.envMapIntensity.value=F.environmentIntensity),ui&&(Me.setValue(z,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&sd(ki,Hs),ft&&K.fog===!0&&rt.refreshFogUniforms(ki,ft),rt.refreshMaterialUniforms(ki,K,H,it,p.state.transmissionRenderTarget[T.id]),_s.upload(z,Qc(zt),ki,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(_s.upload(z,Qc(zt),ki,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Me.setValue(z,"center",B.center),Me.setValue(z,"modelViewMatrix",B.modelViewMatrix),Me.setValue(z,"normalMatrix",B.normalMatrix),Me.setValue(z,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let _i=K.uniformsGroups;for(let un=0,dn=_i.length;un<dn;un++){let th=_i[un];D.update(th,Ci),D.bind(th,Ci)}}return Ci}function sd(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function rd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,J){$.get(T.texture).__webglTexture=F,$.get(T.depthTexture).__webglTexture=J;let K=$.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){let J=$.get(T);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,J=0){A=T,w=F,E=J;let K=!0,B=null,ft=!1,St=!1;if(T){let Nt=$.get(T);if(Nt.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(z.FRAMEBUFFER,null),K=!1;else if(Nt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Nt.__hasExternalTextures)R.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ft=T.depthTexture;if(Nt.__boundDepthTexture!==Ft){if(Ft!==null&&$.has(Ft)&&(T.width!==Ft.image.width||T.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(St=!0);let Zt=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?B=Zt[F][J]:B=Zt[F],ft=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?B=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?B=Zt[J]:B=Zt,I.copy(T.viewport),N.copy(T.scissor),k=T.scissorTest}else I.copy(_t).multiplyScalar(H).floor(),N.copy(Bt).multiplyScalar(H).floor(),k=Lt;if(G.bindFramebuffer(z.FRAMEBUFFER,B)&&K&&G.drawBuffers(T,B),G.viewport(I),G.scissor(N),G.setScissorTest(k),ft){let Nt=$.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Nt.__webglTexture,J)}else if(St){let Nt=$.get(T.texture),Gt=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,J||0,Gt)}b=-1},this.readRenderTargetPixels=function(T,F,J,K,B,ft,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Ut=Ut[St]),Ut){G.bindFramebuffer(z.FRAMEBUFFER,Ut);try{let Nt=T.texture,Gt=Nt.format,Zt=Nt.type;if(!P.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-K&&J>=0&&J<=T.height-B&&z.readPixels(F,J,K,B,ct.convert(Gt),ct.convert(Zt),ft)}finally{let Nt=A!==null?$.get(A).__webglFramebuffer:null;G.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,F,J,K,B,ft,St){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Ut=Ut[St]),Ut){let Nt=T.texture,Gt=Nt.format,Zt=Nt.type;if(!P.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-K&&J>=0&&J<=T.height-B){G.bindFramebuffer(z.FRAMEBUFFER,Ut);let Ft=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ft),z.bufferData(z.PIXEL_PACK_BUFFER,ft.byteLength,z.STREAM_READ),z.readPixels(F,J,K,B,ct.convert(Gt),ct.convert(Zt),0);let re=A!==null?$.get(A).__webglFramebuffer:null;G.bindFramebuffer(z.FRAMEBUFFER,re);let ge=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Vd(z,ge,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ft),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ft),z.deleteBuffer(Ft),z.deleteSync(ge),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,J=0){T.isTexture!==!0&&(Qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);let K=Math.pow(2,-J),B=Math.floor(T.image.width*K),ft=Math.floor(T.image.height*K),St=F!==null?F.x:0,Ut=F!==null?F.y:0;R.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,St,Ut,B,ft),G.unbindTexture()},this.copyTextureToTexture=function(T,F,J=null,K=null,B=0){T.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],F=arguments[2],B=arguments[3]||0,J=null);let ft,St,Ut,Nt,Gt,Zt,Ft,re,ge,_e=T.isCompressedTexture?T.mipmaps[B]:T.image;J!==null?(ft=J.max.x-J.min.x,St=J.max.y-J.min.y,Ut=J.isBox3?J.max.z-J.min.z:1,Nt=J.min.x,Gt=J.min.y,Zt=J.isBox3?J.min.z:0):(ft=_e.width,St=_e.height,Ut=_e.depth||1,Nt=0,Gt=0,Zt=0),K!==null?(Ft=K.x,re=K.y,ge=K.z):(Ft=0,re=0,ge=0);let ri=ct.convert(F.format),oe=ct.convert(F.type),zt;F.isData3DTexture?(R.setTexture3D(F,0),zt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),zt=z.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),zt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let $i=z.getParameter(z.UNPACK_ROW_LENGTH),ae=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ci=z.getParameter(z.UNPACK_SKIP_PIXELS),es=z.getParameter(z.UNPACK_SKIP_ROWS),ui=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_e.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Gt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Zt);let Hs=T.isDataArrayTexture||T.isData3DTexture,Me=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let ki=$.get(T),Vs=$.get(F),_i=$.get(ki.__renderTarget),un=$.get(Vs.__renderTarget);G.bindFramebuffer(z.READ_FRAMEBUFFER,_i.__webglFramebuffer),G.bindFramebuffer(z.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let dn=0;dn<Ut;dn++)Hs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(T).__webglTexture,B,Zt+dn),T.isDepthTexture?(Me&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(F).__webglTexture,B,ge+dn),z.blitFramebuffer(Nt,Gt,ft,St,Ft,re,ft,St,z.DEPTH_BUFFER_BIT,z.NEAREST)):Me?z.copyTexSubImage3D(zt,B,Ft,re,ge+dn,Nt,Gt,ft,St):z.copyTexSubImage2D(zt,B,Ft,re,ge+dn,Nt,Gt,ft,St);G.bindFramebuffer(z.READ_FRAMEBUFFER,null),G.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Me?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(zt,B,Ft,re,ge,ft,St,Ut,ri,oe,_e.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(zt,B,Ft,re,ge,ft,St,Ut,ri,_e.data):z.texSubImage3D(zt,B,Ft,re,ge,ft,St,Ut,ri,oe,_e):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,B,Ft,re,ft,St,ri,oe,_e.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,B,Ft,re,_e.width,_e.height,ri,_e.data):z.texSubImage2D(z.TEXTURE_2D,B,Ft,re,ft,St,ri,oe,_e);z.pixelStorei(z.UNPACK_ROW_LENGTH,$i),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ae),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ci),z.pixelStorei(z.UNPACK_SKIP_ROWS,es),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ui),B===0&&F.generateMipmaps&&z.generateMipmap(zt),G.unbindTexture()},this.copyTextureToTexture3D=function(T,F,J=null,K=null,B=0){return T.isTexture!==!0&&(Qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,T=arguments[2],F=arguments[3],B=arguments[4]||0),Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,J,K,B)},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),G.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,G.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}},fo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Cs=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pe,this.environmentIntensity=1,this.environmentRotation=new Pe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var or=class extends ai{constructor(t=null,e=1,i=1,n,r,o,a,l,c=pi,h=pi,u,f){super(null,o,a,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var po=class extends we{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},gs=new Jt,tu=new Jt,Vr=[],eu=new ln,Og=new Jt,Zs=new Ct,$s=new cn,wn=class extends Ct{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new po(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Og)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gs),eu.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gs),$s.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,gs),tu.multiplyMatrices(i,gs),Zs.matrixWorld=tu,Zs.raycast(t,Vr);for(let o=0,a=Vr.length;o<a;o++){let l=Vr[o];l.instanceId=r,l.object=this,e.push(l)}Vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(n*this.count),n,this.count,ur,Vi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Vn=class extends Wi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},mo=new L,go=new L,iu=new Jt,Js=new sr,Gr=new cn,Ha=new L,nu=new L,$l=class extends Ge{constructor(t=new Xt,e=new Vn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)mo.fromBufferAttribute(e,n-1),go.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=mo.distanceTo(go);t.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(n),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;iu.copy(n).invert(),Js.copy(t.ray).applyMatrix4(iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),M=Wr(this,t,Js,l,p,y);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Wr(this,t,Js,l,x,m);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Wr(this,t,Js,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=Wr(this,t,Js,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wr(s,t,e,i,n,r){let o=s.geometry.attributes.position;if(mo.fromBufferAttribute(o,n),go.fromBufferAttribute(o,r),e.distanceSqToSegment(mo,go,Ha,nu)>i)return;Ha.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ha);if(!(l<t.near||l>t.far))return{distance:l,point:nu.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var su=new L,ru=new L,Ps=class extends $l{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)su.fromBufferAttribute(e,n),ru.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+su.distanceTo(ru);t.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ar=class extends Wi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ou=new Jt,Jl=new sr,Xr=new cn,Yr=new L,Is=class extends Ge{constructor(t=new Xt,e=new ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(n),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;ou.copy(n).invert(),Jl.copy(t.ray).applyMatrix4(ou);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Yr.fromBufferAttribute(u,m),au(Yr,m,l,n,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Yr.fromBufferAttribute(u,g),au(Yr,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function au(s,t,e,i,n,r,o){let a=Jl.distanceSqToPoint(s);if(a<e){let l=new L;Jl.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ni=class extends ai{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],f=i[n+1]-h,d=(o-h)/f;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new xt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new L,n=[],r=[],o=[],a=new L,l=new Jt;for(let d=0;d<=t;d++){let g=d/t;n[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Be(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(Be(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xo=class extends Fi{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new xt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kl=class extends xo{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lc(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,n(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var qr=new L,Va=new Lc,Ga=new Lc,Wa=new Lc,Ls=class extends Fi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new L){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(qr.subVectors(n[0],n[1]).add(n[0]),c=qr);let u=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(qr.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Va.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Ga.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Wa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ga.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Wa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Va.calc(l),Ga.calc(l),Wa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new L().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lu(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Bg(s,t){let e=1-s;return e*e*t}function kg(s,t){return 2*(1-s)*s*t}function Hg(s,t){return s*s*t}function er(s,t,e,i){return Bg(s,t)+kg(s,e)+Hg(s,i)}function Vg(s,t){let e=1-s;return e*e*e*t}function Gg(s,t){let e=1-s;return 3*e*e*s*t}function Wg(s,t){return 3*(1-s)*s*s*t}function Xg(s,t){return s*s*s*t}function ir(s,t,e,i,n){return Vg(s,t)+Gg(s,e)+Wg(s,i)+Xg(s,n)}var Ql=class extends Fi{constructor(t=new xt,e=new xt,i=new xt,n=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new xt){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(t,n.x,r.x,o.x,a.x),ir(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jl=class extends Fi{constructor(t=new L,e=new L,i=new L,n=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new L){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ir(t,n.x,r.x,o.x,a.x),ir(t,n.y,r.y,o.y,a.y),ir(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tc=class extends Fi{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ec=class extends Fi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ic=class extends Fi{constructor(t=new xt,e=new xt,i=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new xt){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(er(t,n.x,r.x,o.x),er(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends Fi{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(er(t,n.x,r.x,o.x),er(t,n.y,r.y,o.y),er(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nc=class extends Fi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(lu(a,l.x,c.x,h.x,u.x),lu(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new xt().fromArray(n))}return this}},Yg=Object.freeze({__proto__:null,ArcCurve:Kl,CatmullRomCurve3:Ls,CubicBezierCurve:Ql,CubicBezierCurve3:jl,EllipseCurve:xo,LineCurve:tc,LineCurve3:ec,QuadraticBezierCurve:ic,QuadraticBezierCurve3:yo,SplineCurve:nc});var vo=class s extends Xt{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Be(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,f=new xt,d=new L,g=new L,x=new L,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let M=i+y*h*n,v=Math.sin(M),C=Math.cos(M);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*C,o.push(u.x,u.y,u.z),f.x=y/e,f.y=w/(t.length-1),a.push(f.x,f.y);let E=l[3*w+0]*v,A=l[3*w+1],b=l[3*w+0]*C;c.push(E,A,b)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let v=M+y*t.length,C=v,w=v+t.length,E=v+t.length+1,A=v+1;r.push(C,w,A),r.push(E,A,w)}this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("uv",new Tt(a,2)),this.setAttribute("normal",new Tt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var zi=class s extends Xt{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,h=new xt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ue=class s extends Xt{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=i/2,p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(d,2));function y(){let v=new L,C=new L,w=0,E=(e-t)/i;for(let A=0;A<=r;A++){let b=[],_=A/r,I=_*(e-t)+t;for(let N=0;N<=n;N++){let k=N/n,X=k*l+a,Q=Math.sin(X),Y=Math.cos(X);C.x=I*Q,C.y=-_*i+m,C.z=I*Y,u.push(C.x,C.y,C.z),v.set(Q,E,Y).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-_),b.push(g++)}x.push(b)}for(let A=0;A<n;A++)for(let b=0;b<r;b++){let _=x[b][A],I=x[b+1][A],N=x[b+1][A+1],k=x[b][A+1];(t>0||b!==0)&&(h.push(_,I,k),w+=3),(e>0||b!==r-1)&&(h.push(I,N,k),w+=3)}c.addGroup(p,w,0),p+=w}function M(v){let C=g,w=new xt,E=new L,A=0,b=v===!0?t:e,_=v===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;let I=g;for(let N=0;N<=n;N++){let X=N/n*l+a,Q=Math.cos(X),Y=Math.sin(X);E.x=b*Y,E.y=m*_,E.z=b*Q,u.push(E.x,E.y,E.z),f.push(0,_,0),w.x=Q*.5+.5,w.y=Y*.5*_+.5,d.push(w.x,w.y),g++}for(let N=0;N<n;N++){let k=C+N,X=I+N;v===!0?h.push(X,X+1,k):h.push(X+1,X,k),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},lr=class s extends Ue{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sc=class s extends Xt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new L,v=new L,C=new L;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],v),d(e[w+2],C),l(M,v,C,y)}function l(y,M,v,C){let w=C+1,E=[];for(let A=0;A<=w;A++){E[A]=[];let b=y.clone().lerp(v,A/w),_=M.clone().lerp(v,A/w),I=w-A;for(let N=0;N<=I;N++)N===0&&A===w?E[A][N]=b:E[A][N]=b.clone().lerp(_,N/I)}for(let A=0;A<w;A++)for(let b=0;b<2*(w-A)-1;b++){let _=Math.floor(b/2);b%2===0?(f(E[A][_+1]),f(E[A+1][_]),f(E[A][_])):(f(E[A][_+1]),f(E[A+1][_+1]),f(E[A+1][_]))}}function c(y){let M=new L;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let y=new L;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let v=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;o.push(v,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let M=o[y+0],v=o[y+2],C=o[y+4],w=Math.max(M,v,C),E=Math.min(M,v,C);w>.9&&E<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,M){let v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){let y=new L,M=new L,v=new L,C=new L,w=new xt,E=new xt,A=new xt;for(let b=0,_=0;b<r.length;b+=9,_+=6){y.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(o[_+0],o[_+1]),E.set(o[_+2],o[_+3]),A.set(o[_+4],o[_+5]),C.copy(y).add(M).add(v).divideScalar(3);let I=m(C);x(w,_+0,y,I),x(E,_+2,M,I),x(A,_+4,v,I)}}function x(y,M,v,C){C<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Gn=class s extends sc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ds=class s extends Xt{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/n,d=new L,g=new xt;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<n;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,M=y,v=y+i+1,C=y+i+2,w=y+1;a.push(M,v,w),a.push(v,C,w)}}this.setIndex(a),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var En=class s extends Xt{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],M=p/i,v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){let w=C/e;u.x=-t*Math.cos(n+w*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(n+w*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(w+v,1-M),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){let M=h[p][y+1],v=h[p][y],C=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&d.push(M,v,w),(p!==i-1||l<Math.PI)&&d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xi=class s extends Xt{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=i;d++)for(let g=0;g<=n;g++){let x=g/n*r,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=n;g++){let x=(n+1)*d+g-1,m=(n+1)*(d-1)+g-1,p=(n+1)*(d-1)+g,y=(n+1)*d+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var _o=class s extends Xt{constructor(t=new yo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new xt,h=new L,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(d,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),p()}function m(M){h=t.getPointAt(M/e,h);let v=o.normals[M],C=o.binormals[M];for(let w=0;w<=n;w++){let E=w/n*Math.PI*2,A=Math.sin(E),b=-Math.cos(E);l.x=b*v.x+A*C.x,l.y=b*v.y+A*C.y,l.z=b*v.z+A*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=n;v++){let C=(n+1)*(M-1)+(v-1),w=(n+1)*M+(v-1),E=(n+1)*M+v,A=(n+1)*(M-1)+v;g.push(C,w,A),g.push(w,E,A)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=n;v++)c.x=M/e,c.y=v/n,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Yg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Mo=class extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},li=class extends Wi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bo=class extends li{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var be=class extends Wi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Zr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function qg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Us=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rc=class extends Us{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sh,endingEnd:sh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case rh:r=t,a=2*e-i;break;case oh:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:o=t,l=2*i-e;break;case oh:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*x+.5*g,v=d*m-d*x;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+y*o[c+C]+M*o[l+C]+v*o[u+C];return r}},oc=class extends Us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},ac=class extends Us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Oi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zr(e,this.TimeBufferType),this.values=Zr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Zr(t.times,Array),values:Zr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case Il:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return Il;case this.InterpolantFactoryMethodSmooth:return da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&qg(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===da,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=Il;var Wn=class extends Oi{constructor(t,e,i){super(t,e,i)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=to;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Oi{};lc.prototype.ValueTypeName="color";var cc=class extends Oi{};cc.prototype.ValueTypeName="number";var hc=class extends Us{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ee.slerpFlat(r,0,o,c-a,o,c,l);return r}},So=class extends Oi{InterpolantFactoryMethodLinear(t){return new hc(this.times,this.values,this.getValueSize(),t)}};So.prototype.ValueTypeName="quaternion";So.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends Oi{constructor(t,e,i){super(t,e,i)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=to;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var uc=class extends Oi{};uc.prototype.ValueTypeName="vector";var dc=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Zg=new dc,fc=class{constructor(t){this.manager=t!==void 0?t:Zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},wo=class extends cr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Xa=new Jt,cu=new L,hu=new L,Eo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rr,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(cu),hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hu),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var uu=new Jt,Ks=new L,Ya=new L,pc=class extends Eo{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ks),Ya.copy(i.position),Ya.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ya),i.updateMatrixWorld(),n.makeTranslation(-Ks.x,-Ks.y,-Ks.z),uu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}},To=class extends cr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new pc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},mc=class extends Eo{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ao=class extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new mc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ro=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=du();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function du(){return performance.now()}var Dc="\\[\\]\\.:\\/",$g=new RegExp("["+Dc+"]","g"),Uc="[^"+Dc+"]",Jg="[^"+Dc.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",Uc),Qg=/(WCOD+)?/.source.replace("WCOD",Jg),jg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),tx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),ex=new RegExp("^"+Kg+Qg+jg+tx+"$"),ix=["material","materials","bones","map"],gc=class{constructor(t,e,i){let n=i||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Se=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($g,"")}static parseTrackName(t){let e=ex.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);ix.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=gc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Pt=(s,t,e)=>s<t?t:s>e?e:s,nx=s=>s<0?0:s>1?1:s,Ot=(s,t,e)=>s+(t-s)*e,jt=(s,t,e)=>{let i=nx((e-s)/(t-s));return i*i*(3-2*i)},se=(s,t,e,i)=>s+(t-s)*(1-Math.exp(-e*i)),sx=s=>(s=(s+Math.PI)%(Math.PI*2),s<0&&(s+=Math.PI*2),s-Math.PI),An=(s,t,e,i)=>s+sx(t-s)*(1-Math.exp(-e*i)),Du=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;function qn(s){let t=s>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Lo(s,t,e){let i=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Do(s,t,e=0){let i=Math.floor(s),n=Math.floor(t),r=s-i,o=t-n,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Lo(i,n,e),h=Lo(i+1,n,e),u=Lo(i,n+1,e),f=Lo(i+1,n+1,e);return c+(h-c)*a+(u-c)*l+(c-h-u+f)*a*l}function Zn(s,t,e=4,i=0){let n=0,r=.5,o=1,a=0;for(let l=0;l<e;l++)n+=r*Do(s*o,t*o,i+l*17),a+=r,r*=.5,o*=2.03;return n/a}function Qe(s){let t=s.length,e=new Array(t);for(let i=0;i<t;i++){let n=s[Math.max(0,i-1)],r=s[Math.min(t-1,i+1)];e[i]=r[0]===n[0]?0:(r[1]-n[1])/(r[0]-n[0])}return i=>{if(i<=s[0][0])return s[0][1];if(i>=s[t-1][0])return s[t-1][1];let n=0;for(;i>s[n+1][0];)n++;let r=s[n][0],o=s[n+1][0],a=o-r,l=(i-r)/a,c=l*l,h=c*l;return(2*h-3*c+1)*s[n][1]+(h-2*c+l)*a*e[n]+(-2*h+3*c)*s[n+1][1]+(h-c)*a*e[n+1]}}var ei=s=>Math.round(s).toLocaleString("en-US");var rx="https://sdk.crazygames.com/crazygames-sdk-v3.js",Si={api:null,active:!1,playing:!1,loading:!1,muted:!1,onMute:null,async init(){try{await new Promise((t,e)=>{if(window.CrazyGames&&window.CrazyGames.SDK)return t();let i=document.createElement("script");i.src=rx,i.onload=t,i.onerror=()=>e(new Error("sdk blocked")),document.head.appendChild(i),setTimeout(()=>e(new Error("sdk timeout")),3500)});let s=window.CrazyGames.SDK;if(await Promise.race([s.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("init timeout")),3500))]),this.api=s,this.active=s.environment==="crazygames"||s.environment==="local",this.active)try{this.muted=!!s.game.settings.muteAudio,s.game.addSettingsChangeListener(t=>{this.muted=!!t.muteAudio,this.onMute&&this.onMute(this.muted)})}catch{}}catch{this.api=null,this.active=!1}return this.active},call(s){if(this.active)try{s(this.api)}catch{}},loadingStart(){this.loading||(this.loading=!0,this.call(s=>s.game.loadingStart()))},loadingStop(){this.loading&&(this.loading=!1,this.call(s=>s.game.loadingStop()))},gameplayStart(){this.playing||(this.playing=!0,this.call(s=>s.game.gameplayStart()))},gameplayStop(){this.playing&&(this.playing=!1,this.call(s=>s.game.gameplayStop()))},happytime(){this.call(s=>s.game.happytime())},getItem(s){if(this.active)try{let t=this.api.data.getItem(s);if(t!==void 0)return t}catch{}try{return localStorage.getItem(s)}catch{return null}},setItem(s,t){if(this.active)try{this.api.data.setItem(s,t);return}catch{}try{localStorage.setItem(s,t)}catch{}}};var Uu=[["forward","Accelerate"],["back","Brake / Reverse"],["left","Steer left"],["right","Steer right"],["boost","Boost / Climb"],["shift","Drift / Descend"],["fly","Flight on / off"],["rollL","Roll left"],["rollR","Roll right"],["reset","Reset car"],["look","Look back"],["photo","Photo mode"],["pause","Pause"]],fr={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],boost:["Space"],shift:["ShiftLeft","ShiftRight"],fly:["KeyF"],rollL:["KeyQ"],rollR:["KeyE"],reset:["KeyR"],look:["KeyC"],photo:["KeyP"],pause:["Escape"]};function $n(s){if(!s)return"\u2014";let t={Space:"Space",ShiftLeft:"Shift",ShiftRight:"R Shift",ControlLeft:"Ctrl",ControlRight:"R Ctrl",AltLeft:"Alt",AltRight:"R Alt",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Escape:"Esc",Enter:"Enter",Backspace:"Backspace",Tab:"Tab"};return t[s]?t[s]:s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):s.startsWith("Numpad")?"Num "+s.slice(6):s}var Uo=class{constructor(t,e){this.canvas=t,this.keys=e,this.down=new Set,this.pressed=new Set,this.state={steer:0,throttle:0,boost:!1,shift:!1,roll:0,fly:!1,boostPressed:!1,look:!1},this.dragX=0,this.dragY=0,this.zoom=0,this.pinch=0,this.touch={active:!1,joy:null,jx:0,jy:0,boost:!1,shift:!1,fly:!1,roll:!1,drag:null},this.isTouch=!1,this.capture=null,this.enabled=!0,this.padPrev=[],this.onTouchMode=null,addEventListener("keydown",l=>{if(this.capture){l.preventDefault();let c=this.capture;this.capture=null,c(l.code);return}l.target&&/INPUT|SELECT|TEXTAREA/.test(l.target.tagName)||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(l.code)&&l.preventDefault(),l.repeat||this.pressed.add(l.code),this.down.add(l.code))}),addEventListener("keyup",l=>this.down.delete(l.code)),addEventListener("blur",()=>{this.down.clear(),this.touch.boost=this.touch.shift=!1,this.touch.joy=null});let i=!1;t.addEventListener("mousedown",l=>{(l.button===0||l.button===2)&&(i=!0)}),addEventListener("mouseup",()=>{i=!1}),addEventListener("mousemove",l=>{i&&(this.dragX+=l.movementX,this.dragY+=l.movementY)}),t.addEventListener("wheel",l=>{l.preventDefault(),this.zoom+=Math.sign(l.deltaY)},{passive:!1}),t.addEventListener("contextmenu",l=>l.preventDefault());let n=this.touch,r=l=>{this.isTouch||(this.isTouch=!0,this.onTouchMode&&this.onTouchMode(!0));for(let c of l.changedTouches)this.joyEnabled&&!n.joy&&c.clientX<innerWidth*.46&&c.clientY>innerHeight*.25?(n.joy={id:c.identifier,x:c.clientX,y:c.clientY},n.jx=n.jy=0,this.onJoy&&this.onJoy(n.joy,0,0,!0)):n.drag?n.drag2||(n.drag2={id:c.identifier,x:c.clientX,y:c.clientY},n.pinchD=Math.hypot(n.drag.x-c.clientX,n.drag.y-c.clientY)):n.drag={id:c.identifier,x:c.clientX,y:c.clientY};l.preventDefault()},o=l=>{for(let c of l.changedTouches){if(n.joy&&c.identifier===n.joy.id){let u=(c.clientX-n.joy.x)/58,f=(c.clientY-n.joy.y)/58,d=Math.hypot(u,f);d>1&&(u/=d,f/=d),n.jx=u,n.jy=-f,this.onJoy&&this.onJoy(n.joy,u,f,!0)}else n.drag&&c.identifier===n.drag.id?(n.drag2||(this.dragX+=(c.clientX-n.drag.x)*1.4,this.dragY+=(c.clientY-n.drag.y)*1.4),n.drag.x=c.clientX,n.drag.y=c.clientY):n.drag2&&c.identifier===n.drag2.id&&(n.drag2.x=c.clientX,n.drag2.y=c.clientY);if(n.drag&&n.drag2){let h=Math.hypot(n.drag.x-n.drag2.x,n.drag.y-n.drag2.y);this.pinch+=(n.pinchD-h)*.02,n.pinchD=h}}l.preventDefault()},a=l=>{for(let c of l.changedTouches)n.joy&&c.identifier===n.joy.id&&(n.joy=null,n.jx=n.jy=0,this.onJoy&&this.onJoy(null,0,0,!1)),n.drag&&c.identifier===n.drag.id?(n.drag=n.drag2||null,n.drag2=null):n.drag2&&c.identifier===n.drag2.id&&(n.drag2=null)};t.addEventListener("touchstart",r,{passive:!1}),t.addEventListener("touchmove",o,{passive:!1}),t.addEventListener("touchend",a),t.addEventListener("touchcancel",a),this.joyEnabled=!0}bindButton(t,e){let i=this.touch,n=o=>{o.preventDefault(),this.isTouch||(this.isTouch=!0,this.onTouchMode&&this.onTouchMode(!0)),i[e]=!0,(e==="fly"||e==="roll")&&(i[e+"Edge"]=!0),t.classList.add("on")},r=o=>{o.preventDefault(),i[e]=!1,t.classList.remove("on")};t.addEventListener("touchstart",n,{passive:!1}),t.addEventListener("touchend",r,{passive:!1}),t.addEventListener("touchcancel",r,{passive:!1}),t.addEventListener("mousedown",n),t.addEventListener("mouseup",r),t.addEventListener("mouseleave",o=>{i[e]&&r(o)})}held(t){let e=this.keys[t];if(!e)return!1;for(let i of e)if(i&&this.down.has(i))return!0;return!1}hit(t){let e=this.keys[t];if(!e)return!1;for(let i of e)if(i&&this.pressed.has(i))return!0;return!1}poll(t){let e=this.state,i=this.touch,n=(this.held("right")?1:0)-(this.held("left")?1:0),r=(this.held("forward")?1:0)-(this.held("back")?1:0),o=this.held("boost"),a=this.held("shift"),l=(this.held("rollR")?1:0)-(this.held("rollL")?1:0),c=this.hit("fly"),h=this.hit("boost"),u={pause:this.hit("pause"),photo:this.hit("photo"),reset:this.hit("reset")};if(e.look=this.held("look"),i.joy){let d=(g,x)=>Math.abs(g)<x?0:(g-Math.sign(g)*x)/(1-x);n=Pt(n+d(i.jx,.12),-1,1),r=Pt(r+d(i.jy,.2)*1.25,-1,1)}i.boost&&(o=!0,i.boostWas||(h=!0)),i.boostWas=i.boost,i.shift&&(a=!0),i.flyEdge&&(t?this.rollHold={dir:n<-.1?-1:1,t:6}:c=!0,i.flyEdge=!1),this.rollHold&&(l=this.rollHold.dir,--this.rollHold.t<=0&&(this.rollHold=null));let f=navigator.getGamepads?navigator.getGamepads():[];for(let d of f){if(!d||!d.connected||d.mapping!=="standard")continue;let g=y=>d.buttons[y]&&d.buttons[y].pressed,x=y=>d.buttons[y]?d.buttons[y].value:0,m=this.padPrev,p=Math.abs(d.axes[0])>.15?d.axes[0]:0;n=Pt(n+p,-1,1),r=Pt(r+x(7)-x(6),-1,1),g(0)&&(o=!0,m[0]||(h=!0)),(g(1)||g(2))&&(a=!0),g(3)&&!m[3]&&(c=!0),l=Pt(l+(g(5)?1:0)-(g(4)?1:0),-1,1),g(9)&&!m[9]&&(u.pause=!0),g(8)&&!m[8]&&(u.reset=!0),Math.abs(d.axes[2])>.2&&(this.dragX+=d.axes[2]*14),Math.abs(d.axes[3])>.2&&(this.dragY+=d.axes[3]*10),this.padPrev=d.buttons.map(y=>y.pressed);break}return e.steer=n,e.throttle=r,e.boost=o,e.shift=a,e.roll=l,e.fly=c,e.boostPressed=h,this.pressed.clear(),u}takeDrag(){let t={x:this.dragX,y:this.dragY,zoom:this.zoom+this.pinch};return this.dragX=this.dragY=this.zoom=this.pinch=0,t}};var Nu="flying-roadster-save-v1",zs=()=>({points:0,paint:"white",unlocked:["white"],stats:{bestCombo:0,topSpeed:0,longestAir:0,rings:0,launches:0,pads:[]},hints:{},settings:{master:.8,music:.55,sfx:.9,quality:"auto",cinematic:!0,units:"kmh",time:"sunset",sens:1,shake:!0},keys:JSON.parse(JSON.stringify(fr))}),Ht={data:zs(),timer:null,load(){let s=zs();try{let t=Si.getItem(Nu);if(t){let e=JSON.parse(t);Object.assign(s,e),s.stats=Object.assign(zs().stats,e.stats),s.settings=Object.assign(zs().settings,e.settings),s.keys=Object.assign(zs().keys,e.keys),s.hints=e.hints||{},(!Array.isArray(s.unlocked)||!s.unlocked.includes("white"))&&(s.unlocked=["white"])}}catch{}return this.data=s,s},flush(){clearTimeout(this.timer),this.timer=null;try{Si.setItem(Nu,JSON.stringify(this.data))}catch{}},touch(){this.timer||(this.timer=setTimeout(()=>this.flush(),1500))},reset(){let s={settings:this.data.settings,keys:this.data.keys};this.data=Object.assign(zs(),s),this.flush()}};var No={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var xi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ox=new As(-1,1,1,-1,0,1),Nc=class extends Xt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}},ax=new Nc,Rn=class{constructor(t){this._mesh=new Ct(ax,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ox)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Fo=class extends xi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Tn.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Rn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var pr=class extends xi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},zo=class extends xi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Oo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new xt);this._width=i.width,this._height=i.height,e=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fo(No),this.copyPass.material.blending=Gi,this.clock=new Ro}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}pr!==void 0&&(o instanceof pr?i=!0:o instanceof zo&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Bo=class extends xi{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Fu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Os=class s extends xi{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new dt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(r,o,{type:gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ve(r,o,{type:gi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ve(r,o,{type:gi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Fu;this.highPassUniforms=Tn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new xt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=No;this.copyUniforms=Tn.clone(h.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ke,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new dt,this.oldClearAlpha=1,this.basic=new pe,this.fsQuad=new Rn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Os.BlurDirectionX=new xt(1,0);Os.BlurDirectionY=new xt(0,1);var zu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ko=class extends xi{constructor(){super();let t=zu;this.uniforms=Tn.clone(t.uniforms),this.material=new Mo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Rn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Sc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var lx={low:{ratio:1,bloom:!1,shadows:0,msaa:0,treeShadows:!1,trees:.4},medium:{ratio:1.5,bloom:!0,shadows:1024,msaa:0,treeShadows:!1,trees:.7},high:{ratio:2,bloom:!0,shadows:2048,msaa:4,treeShadows:!0,trees:1}},Ho=class{constructor(t){this.canvas=t;let e=this.renderer=new uo({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1});e.toneMapping=hr,e.outputColorSpace=Ae,e.shadowMap.enabled=!0,e.shadowMap.type=xc,this.mobile=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),this.setting="auto",this.tierName=this.mobile?"medium":"high",this.scale=1,this.composer=null,this.frameAcc=0,this.frameN=0,this.slowStreak=0,this.fastStreak=0,this.bloomStrength=.5,this.w=1,this.h=1}get tier(){return lx[this.tierName]}init(t,e,i){this.scene=t,this.camera=e,this.world=i,this.apply()}setQuality(t){this.setting=t,this.tierName=t==="auto"?this.mobile?"medium":"high":t,this.scale=1,this.slowStreak=this.fastStreak=0,this.scene&&this.apply()}apply(){let t=this.tier,e=this.renderer,i=this.world.sky.sun;e.shadowMap.enabled=t.shadows>0,i.castShadow=t.shadows>0,t.shadows&&i.shadow.mapSize.x!==t.shadows&&(i.shadow.mapSize.set(t.shadows,t.shadows),i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null));for(let n of this.world.props.group.userData.trees||[])n.castShadow=t.treeShadows,n.count=Math.round(n.userData.full*t.trees);if(this.scene.traverse(n=>{if(n.material){let r=Array.isArray(n.material)?n.material:[n.material];for(let o of r)o.needsUpdate=!0}}),this.composer&&(this.composer.dispose(),this.composer=null),t.bloom){let n=new Ve(4,4,{type:gi,samples:t.msaa}),r=this.composer=new Oo(e,n);r.addPass(new Bo(this.scene,this.camera)),this.bloom=new Os(new xt(256,256),this.bloomStrength,.6,1);let o=this.bloom.materialHighPassFilter;o.fragmentShader=o.fragmentShader.replace("gl_FragColor = mix( outputColor, texel, alpha );","vec4 safe = mix( outputColor, texel, alpha ); if ( any( isnan( safe ) ) || any( isinf( safe ) ) ) safe = vec4( 0.0 ); gl_FragColor = min( safe, vec4( 4.5 ) );"),o.needsUpdate=!0,r.addPass(this.bloom),r.addPass(new ko)}this.resize(!0)}resize(t){let e=this.canvas.clientWidth||innerWidth,i=this.canvas.clientHeight||innerHeight,n=Math.min(devicePixelRatio||1,this.tier.ratio)*this.scale;!t&&e===this.w&&i===this.h&&n===this.ratio||(this.w=e,this.h=i,this.ratio=n,this.renderer.setPixelRatio(n),this.renderer.setSize(e,i,!1),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,i)),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())}adapt(t){if(this.setting!=="auto"||t>.25||(this.frameAcc+=t,this.frameN++,this.frameAcc<1.5))return;let e=this.frameAcc/this.frameN;this.frameAcc=0,this.frameN=0,e>1/48?(this.slowStreak++,this.fastStreak=0):e<1/57?(this.fastStreak++,this.slowStreak=0):this.slowStreak=this.fastStreak=0,this.slowStreak>=2?(this.slowStreak=0,this.scale>.72?(this.scale=Math.max(.7,this.scale-.15),this.resize(!0)):this.tierName==="high"?(this.tierName="medium",this.scale=1,this.apply()):this.tierName==="medium"?(this.tierName="low",this.scale=1,this.apply()):this.scale>.55&&(this.scale=.55,this.resize(!0))):this.fastStreak>=6&&this.scale<1&&(this.fastStreak=0,this.scale=Math.min(1,this.scale+.15),this.resize(!0))}render(){this.resize(!1),this.composer?(this.bloom.strength=this.world.sky.v.bloom,this.bloom.threshold=this.world.sky.v.bloomT,this.composer.render()):this.renderer.render(this.scene,this.camera)}snapshot(){this.render();let t=document.createElement("canvas");return t.width=this.canvas.width,t.height=this.canvas.height,t.getContext("2d").drawImage(this.canvas,0,0),t}};var te={x:-200,z:-820,r:780,h:300,summitY:262,summitR:46},Te={x:-40,z:840,rx:330,rz:640},ii={x:-900,z:1430,r:190,h:20},wi={x:1010,z:-990,r:430,h:62},ce={x0:-1640,x1:-510,z0:240,z1:520,y:14},ee={x0:-1604,x1:-598,z:380,halfW:20},Ou={x:-569,z:380,yaw:Math.PI/2,len:54,halfW:9,h:10.5,curve:1.85},Rt={x0:511,z0:101,n:9,pitch:82,street:18,y:7};Rt.x1=Rt.x0+Rt.n*Rt.pitch;Rt.z1=Rt.z0+Rt.n*Rt.pitch;var We={x:-1150,z:380,yaw:Math.PI/2},Vo=Math.atan2(.5,.82);var Fc=(s,t,e,i,n,r)=>Math.hypot(Math.max(e-s,0,s-n),Math.max(i-t,0,t-r));function Bu(s,t,e,i,n,r,o,a,l){let c=Fc(t,e,i,n,r,o);return c>=l?s:Ot(a,s,jt(0,l,c))}function Wo(s,t){let e=Math.hypot(s,t),i=(Zn(s*.0011+3.1,t*.0011-7.7,3,11)-.5)*520,n=jt(1800,1180,e+i),r=-30+n*44;r+=n*n*(Zn(s*.0021+20,t*.0021+9,4,5)-.42)*85,r+=n*(Zn(s*.012,t*.012,2,31)-.5)*5;let o=Math.hypot(s-te.x,t-te.z)/te.r;if(o<1){let u=1-o,f=u*u*(3-2*u),d=1-Math.abs(Zn(s*.0042+50,t*.0042-20,3,77)*2-1);r+=f*te.h*(.8+.2*d)}let a=Math.hypot(s-wi.x,t-wi.z)/wi.r;if(a<1){let u=1-a;r+=u*u*(3-2*u)*wi.h*(.4+.6*n)}let l=Math.hypot((s-Te.x)/Te.rx,(t-Te.z)/Te.rz);r=Ot(r,-16,jt(1.22,.8,l));let c=Math.hypot(s-ii.x,t-ii.z);c<ii.r&&(r=Math.max(r,-6+(ii.h+6)*jt(ii.r,ii.r*.3,c))),r>0&&r<7&&(r=7*Math.pow(r/7,1.9)),r=Bu(r,s,t,ce.x0,ce.z0,ce.x1,ce.z1,ce.y,80),r=Bu(r,s,t,Rt.x0-24,Rt.z0-24,Rt.x1+24,Rt.z1+24,Rt.y,90);let h=Math.hypot(s-te.x,t-te.z);return h<te.summitR+70&&(r=Ot(te.summitY,r,jt(te.summitR,te.summitR+70,h))),r}var Yi=s=>new dt(s),yi={seabed:Yi("#1d5e6b"),wetSand:Yi("#c9b083"),sand:Yi("#e6cf9f"),grassA:Yi("#86a75a"),grassB:Yi("#5f9150"),dry:Yi("#b3ab66"),rock:Yi("#8d8176"),rockDark:Yi("#6f6660"),peak:Yi("#c4b8aa"),pave:Yi("#878b92")},Go=class{constructor(t){let e=this.n=320;this.size=4e3,this.half=4e3/2,this.cell=4e3/e;let i=e+1,n=this.h=new Float32Array(i*i);for(let r=0;r<i;r++)for(let o=0;o<i;o++)n[r*i+o]=Wo(-this.half+o*this.cell,-this.half+r*this.cell);this.flatten(t)}flatten(t){let e=this.n+1,i=this.h,n=new Float32Array(i.length).fill(9),r=new Float32Array(i.length);for(let o of t){let a=o.halfW+9,l=o.halfW+44;for(let c of o.pts){if(c.bridge)continue;let h=Math.max(0,Math.floor((c.x-l+this.half)/this.cell)),u=Math.min(e-1,Math.ceil((c.x+l+this.half)/this.cell)),f=Math.max(0,Math.floor((c.z-l+this.half)/this.cell)),d=Math.min(e-1,Math.ceil((c.z+l+this.half)/this.cell));for(let g=f;g<=d;g++)for(let x=h;x<=u;x++){let m=(Math.hypot(-this.half+x*this.cell-c.x,-this.half+g*this.cell-c.z)-a)/(l-a),p=g*e+x;m<n[p]&&(n[p]=m,r[p]=c.y)}}}for(let o=0;o<i.length;o++)n[o]<1&&(i[o]=Ot(r[o],i[o],jt(0,1,n[o])))}heightAt(t,e){let i=this.n,n=i+1,r=(t+this.half)/this.cell,o=(e+this.half)/this.cell;if(r<0||o<0||r>=i||o>=i)return-30;let a=r|0,l=o|0,c=r-a,h=o-l,u=l*n+a,f=this.h,d=f[u],g=f[u+1],x=f[u+n],m=f[u+n+1];return c+h<=1?d+(g-d)*c+(x-d)*h:m+(x-m)*(1-c)+(g-m)*(1-h)}normalAt(t,e,i){return i.set(this.heightAt(t-2.5,e)-this.heightAt(t+2.5,e),2*2.5,this.heightAt(t,e-2.5)-this.heightAt(t,e+2.5)),i.normalize()}buildMesh(){let t=this.n,e=t+1,i=this.h,n=new Float32Array(e*e*3),r=new Float32Array(e*e*3),o=new dt,a=new dt;for(let f=0;f<e;f++)for(let d=0;d<e;d++){let g=f*e+d,x=-this.half+d*this.cell,m=-this.half+f*this.cell,p=i[g];n[g*3]=x,n[g*3+1]=p,n[g*3+2]=m;let y=i[f*e+Math.max(0,d-1)],M=i[f*e+Math.min(t,d+1)],v=i[Math.max(0,f-1)*e+d],C=i[Math.min(t,f+1)*e+d],w=Math.hypot(M-y,C-v)/(2*this.cell),E=Do(x*.006,m*.006,3),A=Do(x*.031,m*.031,9);p<.4?o.copy(yi.wetSand).lerp(yi.seabed,jt(.4,-7,p)):p<3.4+E*1.5?o.copy(yi.sand).lerp(yi.wetSand,jt(1.4,.4,p)):(o.copy(yi.grassA).lerp(yi.grassB,jt(.3,.7,E)).lerp(yi.dry,jt(.55,.95,A)*.6),o.lerp(yi.sand,jt(6.5,3.4,p)*.7),a.copy(yi.rock).lerp(yi.rockDark,A),o.lerp(a,jt(.34,.58,w+A*.08)),o.lerp(yi.peak,jt(170,255,p+E*40)*.85));let b=Fc(x,m,Rt.x0-10,Rt.z0-10,Rt.x1+10,Rt.z1+10);b<30&&o.lerp(yi.pave,jt(30,0,b));let _=Fc(x,m,ce.x0+10,ce.z0+10,ce.x1-10,ce.z1-10);_<40&&p>6&&o.lerp(yi.dry,jt(40,0,_)*.75),o.multiplyScalar(.94+A*.12),r[g*3]=o.r,r[g*3+1]=o.g,r[g*3+2]=o.b}let l=new Uint32Array(t*t*6),c=0;for(let f=0;f<t;f++)for(let d=0;d<t;d++){let g=f*e+d,x=g+1,m=g+e,p=m+1;l[c++]=g,l[c++]=m,l[c++]=x,l[c++]=x,l[c++]=m,l[c++]=p}let h=new Xt;h.setAttribute("position",new we(n,3)),h.setAttribute("color",new we(r,3)),h.setIndex(new we(l,1)),h.computeVertexNormals(),this.colors=r;let u=new Ct(h,new be({vertexColors:!0,flatShading:!0}));return u.receiveShadow=!0,u.matrixAutoUpdate=!1,u}buildHeightTexture(){let t=this.n+1,e=new Uint8Array(t*t);for(let n=0;n<e.length;n++)e[n]=Pt(Math.round((this.h[n]+16)/32*255),0,255);let i=new or(e,t,t,ur,Ui);return i.magFilter=i.minFilter=bi,i.needsUpdate=!0,i}};var hi=.15;function cx(){let s=[[-100,-60],[-112,-150]],t=1.42,e=1.62,i=24;for(let n=0;n<=i;n++){let r=n/i,o=t+r*e*Math.PI*2,a=Ot(640,te.summitR-10,Math.pow(r,.92));s.push([te.x+Math.cos(o)*a,te.z+Math.sin(o)*a])}return s}var hx=[{id:"coast",closed:!0,halfW:9,lanes:4,deck:15,pts:[[-440,150],[-405,430],[-470,760],[-545,1040],[-380,1172],[-40,1178],[300,1172],[560,1050],[900,945],[1230,935],[1345,700],[1345,300],[1290,-150],[1140,-600],[820,-800],[500,-560],[250,-250],[-100,-60],[-330,40]]},{id:"summit",halfW:6.5,lanes:2,deck:8,join:"coast",endY:te.summitY,pts:cx()},{id:"cape",halfW:6.5,lanes:2,deck:7,join:"coast",pts:[[-545,1040],[-660,1180],[-790,1320],[ii.x+26,ii.z-34]]},{id:"airlink",halfW:6.5,lanes:2,deck:8,join:"coast",pts:[[-440,150],[-505,196],[-572,246],[-606,300]]}];function ux(s,t,e){let i=new Ls(s.pts.map(d=>new L(d[0],0,d[1])),!!s.closed,"centripetal"),n=Math.ceil(i.getLength()/5),r=i.getSpacedPoints(n);s.closed&&r.pop();let o=r.length,a=r.map(d=>({x:d.x,z:d.z,y:0,base:t(d.x,d.z),bridge:!1,nx:0,nz:0,s:0})),l=a.map(d=>d.base<-.6?Math.max(s.deck,d.base):Math.max(d.base,3.2)),c=null,h=s.endY??null;if(s.join){let d=e.find(x=>x.id===s.join),g=1e9;for(let x of d.pts){let m=Math.hypot(x.x-a[0].x,x.z-a[0].z);m<g&&(g=m,c=x.y)}}let u=8;for(let d=0;d<9;d++){let g=new Array(o);for(let x=0;x<o;x++){let m=0;for(let p=-u;p<=u;p++){let y=s.closed?(x+p+o)%o:Math.min(o-1,Math.max(0,x+p));m+=l[y]}g[x]=m/(2*u+1)}if(l=g,c!==null)for(let x=0;x<10;x++)l[x]=Ot(c,l[x],jt(0,10,x));if(h!==null)for(let x=0;x<10;x++)l[o-1-x]=Ot(h,l[o-1-x],jt(0,10,x))}let f=0;for(let d=0;d<o;d++){let g=a[d],x=a[s.closed?(d-1+o)%o:Math.max(0,d-1)],m=a[s.closed?(d+1)%o:Math.min(o-1,d+1)],p=m.x-x.x,y=m.z-x.z,M=Math.hypot(p,y)||1;g.tx=p/M,g.tz=y/M,g.nx=y/M,g.nz=-p/M,g.y=l[d],g.bridge=g.y-g.base>4.2&&g.base<2.5,d>0&&(f+=Math.hypot(g.x-a[d-1].x,g.z-a[d-1].z)),g.s=f}return{id:s.id,halfW:s.halfW,lanes:s.lanes,closed:!!s.closed,pts:a}}function dx(s){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillStyle="#3b3e46",e.fillRect(0,0,256,256);for(let n=0;n<2600;n++){let r=50+Math.random()*30;e.fillStyle=`rgba(${r},${r+2},${r+8},0.35)`,e.fillRect(Math.random()*256,Math.random()*256,2,2)}e.fillStyle="#e9e6dc",e.fillRect(12,0,5,256),e.fillRect(239,0,5,256),s===4?(e.fillStyle="#e8b64a",e.fillRect(123,0,3.5,256),e.fillRect(130,0,3.5,256),e.fillStyle="#e9e6dc",e.fillRect(68,20,4,96),e.fillRect(184,20,4,96),e.fillRect(68,148,4,96),e.fillRect(184,148,4,96)):(e.fillStyle="#e8b64a",e.fillRect(125,16,6,100),e.fillRect(125,144,6,100));let i=new Ni(t);return i.wrapS=sn,i.wrapT=an,i.colorSpace=Ae,i.anisotropy=8,i}var Xo=class{constructor(t,e){this.roads=[];let i=hx.slice();e&&e-44>1010&&i.push({id:"pier",halfW:6.5,lanes:2,deck:7,join:"coast",pts:[[900,945],[893,990],[884,(990+e-44)/2],[880,e-44]]});for(let n of i)this.roads.push(ux(n,t,this.roads));this.cell=32,this.hash=new Map;for(let n of this.roads){let r=n.pts,o=r.length,a=n.closed?o:o-1;for(let l=0;l<a;l++){let c=r[l],h=r[(l+1)%o];if(c.bridge&&h.bridge)continue;let u=n.halfW+2,f=Math.floor((Math.min(c.x,h.x)-u)/this.cell),d=Math.floor((Math.max(c.x,h.x)+u)/this.cell),g=Math.floor((Math.min(c.z,h.z)-u)/this.cell),x=Math.floor((Math.max(c.z,h.z)+u)/this.cell),m={ax:c.x,az:c.z,bx:h.x,bz:h.z,w:n.halfW};for(let p=g;p<=x;p++)for(let y=f;y<=d;y++){let M=y*4096+p,v=this.hash.get(M);v||this.hash.set(M,v=[]),v.push(m)}}}}surfaceAt(t,e){let i=this.hash.get(Math.floor(t/this.cell)*4096+Math.floor(e/this.cell));if(!i)return 0;let n=0;for(let r=0;r<i.length;r++){let o=i[r],a=o.bx-o.ax,l=o.bz-o.az,c=((t-o.ax)*a+(e-o.az)*l)/(a*a+l*l);c=c<0?0:c>1?1:c;let h=Math.hypot(t-o.ax-a*c,e-o.az-l*c);if(h<o.w+.9){let u=h<o.w-.3?1:(o.w+.9-h)/1.2;u>n&&(n=u)}}return n}buildMeshes(t){let e=new fe,i={2:[],4:[]};for(let n of this.roads)i[n.lanes].push(n);for(let n of[4,2]){let r=[],o=[],a=[];for(let u of i[n]){let f=u.pts,d=f.length,g=u.closed?d+1:d,x=r.length/3,m=f[d-1].s+5;for(let p=0;p<g;p++){let y=f[p%d],M=p===d?m:y.s;for(let v=0;v<5;v++){let C=(v-2)/2,w=y.x+y.nx*C*u.halfW,E=y.z+y.nz*C*u.halfW,A=y.bridge?y.y+hi:Math.max(t.heightAt(w,E),y.y-.4)+hi;r.push(w,A,E),o.push(v/4,M/24)}if(p>0){let v=x+(p-1)*5,C=x+p*5;for(let w=0;w<4;w++)a.push(v+w,v+w+1,C+w,C+w,v+w+1,C+w+1)}}}let l=new Xt;l.setAttribute("position",new Tt(r,3)),l.setAttribute("uv",new Tt(o,2)),l.setIndex(a),l.computeVertexNormals();let c=new be({map:dx(n),polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}),h=new Ct(l,c);h.receiveShadow=!0,h.matrixAutoUpdate=!1,e.add(h)}return e}buildBridges(t,e){let i=[],a=[],l=null;for(let u of this.roads){let f=u.pts,d=f.length,g=[],x=()=>{if(g.length>1){let m=g[g.length-1].s-g[0].s,p=g[g.length>>1],y=Math.hypot(p.x-Te.x,p.z-(Te.z+Te.rz*.52));u.id==="coast"&&m>200&&(!l||y<l.dist)&&(l={run:g.slice(),len:m,road:u,dist:y});let M=1e9;for(let v=0;v<g.length-1;v++){let C=g[v],w=g[v+1],E=(C.x+w.x)/2,A=(C.z+w.z)/2,b=Math.hypot(w.x-C.x,w.z-C.z),_=Math.atan2(w.x-C.x,w.z-C.z),I=C.y+hi,N=w.y+hi,k=u.halfW+.9;t.add({x:E,z:A,hx:k,hz:b/2+.35,yaw:_,y0:Math.min(I,N)-1.5,y1:I,y2:N,kind:"deck",quiet:!0});let X=-Math.atan2(N-I,b);i.push({x:E,y:(I+N)/2-1,z:A,sx:k*2,sy:1.5,sz:b+.5,yaw:_,pitch:X,color:12170410});for(let Y of[-1,1]){let it=Math.cos(_)*Y*(k-.3),H=-Math.sin(_)*Y*(k-.3);t.add({x:E+it,z:A+H,hx:.32,hz:b/2+.35,yaw:_,y0:Math.min(I,N)-1.5,y1:I+.95,y2:N+.95,kind:"rail",quiet:!0}),i.push({x:E+it,y:(I+N)/2+.47,z:A+H,sx:.5,sy:.95,sz:b+.5,yaw:_,pitch:X,color:14209734})}M+=b;let Q=e.heightAt(E,A);if(M>44&&(I+N)/2-Q>3){M=0;let Y=(I+N)/2-1.5,it=Q-2;i.push({x:E,y:(Y+it)/2,z:A,sx:k*1.3,sy:Y-it,sz:2.6,yaw:_,pitch:0,color:5593183}),t.add({x:E,z:A,hx:k*.65,hz:1.3,yaw:_,y0:it,y1:Y,kind:"pier"})}}}g=[]};for(let m=0;m<d;m++)f[m].bridge?g.push(f[m]):x();x()}let c=[];if(this.bayBridge=null,l){let u=l.run,f=l.road.halfW+2.6,d=M=>u[Math.round(M*(u.length-1))],g=78,x=[d(.27),d(.73)];for(let M of x){let v=Math.atan2(M.tx,M.tz),C=e.heightAt(M.x,M.z)-2;for(let w of[-1,1]){let E=M.x+M.nx*w*f,A=M.z+M.nz*w*f;i.push({x:E,y:(g+C)/2,z:A,sx:3.2,sy:g-C,sz:4.4,yaw:v,pitch:0,color:13191226}),t.add({x:E,z:A,hx:1.6,hz:2.2,yaw:v,y0:C,y1:g,kind:"tower"}),a.push([E,g+1.2,A])}for(let w of[g-3,M.y+30,M.y-4])i.push({x:M.x,y:w,z:M.z,sx:f*2,sy:w<M.y?3:2.4,sz:3.2,yaw:v,pitch:0,color:13191226}),w>M.y&&t.add({x:M.x,z:M.z,hx:f,hz:1.6,yaw:v,y0:w-1.2,y1:w+1.2,kind:"tower"})}let m=Math.round(.27*(u.length-1)),p=Math.round(.73*(u.length-1));for(let M of[-1,1]){let v=[];for(let C=0;C<u.length;C++){let w=u[C],E;if(C<=m)E=Ot(w.y+2,g-2,Math.pow(C/m,1.7));else if(C>=p)E=Ot(w.y+2,g-2,Math.pow((u.length-1-C)/(u.length-1-p),1.7));else{let A=(C-m)/(p-m)*2-1;E=Ot(w.y+7,g-2,A*A)}v.push(new L(w.x+w.nx*M*f,E,w.z+w.nz*M*f))}c.push(v)}let y=d(.5);this.bayBridge={x:y.x,z:y.z,y:y.y,yaw:Math.atan2(y.tx,y.tz),halfW:l.road.halfW,len:l.len}}let h=new fe;if(i.length){let u=new De(1,1,1).toNonIndexed(),f=[],d=[],g=[],x=new Jt,m=new Ee,p=new Pe,y=new L,M=new L,v=new dt,C=u.attributes.position,w=u.attributes.normal;for(let b of i){p.set(b.pitch,b.yaw,0,"YXZ"),m.setFromEuler(p),x.compose(y.set(b.x,b.y,b.z),m,M.set(b.sx,b.sy,b.sz)),v.set(b.color);for(let _=0;_<C.count;_++)y.fromBufferAttribute(C,_).applyMatrix4(x),M.fromBufferAttribute(w,_).applyQuaternion(m),f.push(y.x,y.y,y.z),d.push(M.x,M.y,M.z),g.push(v.r,v.g,v.b)}let E=new Xt;E.setAttribute("position",new Tt(f,3)),E.setAttribute("normal",new Tt(d,3)),E.setAttribute("color",new Tt(g,3));let A=new Ct(E,new be({vertexColors:!0}));A.castShadow=A.receiveShadow=!0,A.matrixAutoUpdate=!1,h.add(A)}if(c.length){let u=new be({color:13191226}),f=[];for(let p of c){let y=new Ct(new _o(new Ls(p),90,.38,5,!1),u);y.matrixAutoUpdate=!1,h.add(y)}let d=l.run,g=l.road.halfW+2.6;for(let p=3;p<d.length-3;p+=3)for(let y=0;y<2;y++){let M=c[y][p],v=y?1:-1;f.push(M.x,M.y,M.z,d[p].x+d[p].nx*v*(g-1.6),d[p].y+1,d[p].z+d[p].nz*v*(g-1.6))}let x=new Xt;x.setAttribute("position",new Tt(f,3));let m=new Ps(x,new Vn({color:14198684,transparent:!0,opacity:.75}));m.matrixAutoUpdate=!1,h.add(m)}return this.beaconPositions=a,h}};var Jn=class{constructor(){this.boxes=[],this.cell=64,this.grid=new Map}add(t){t.yaw=t.yaw||0,t.c=Math.cos(t.yaw),t.s=Math.sin(t.yaw),t.y2===void 0&&(t.y2=t.y1),t.curve=t.curve||1,t.top=Math.max(t.y1,t.y2),t.id=this.boxes.length,this.boxes.push(t);let e=Math.abs(t.c)*t.hx+Math.abs(t.s)*t.hz,i=Math.abs(t.s)*t.hx+Math.abs(t.c)*t.hz,n=6,r=Math.floor((t.x-e-n)/this.cell),o=Math.floor((t.x+e+n)/this.cell),a=Math.floor((t.z-i-n)/this.cell),l=Math.floor((t.z+i+n)/this.cell);for(let c=a;c<=l;c++)for(let h=r;h<=o;h++){let u=h*4096+c,f=this.grid.get(u);f||this.grid.set(u,f=[]),f.push(t)}return t}near(t,e){return this.grid.get(Math.floor(t/this.cell)*4096+Math.floor(e/this.cell))}static topAt(t,e){if(t.y1===t.y2)return t.y1;let i=(e+t.hz)/(2*t.hz);return i=i<0?0:i>1?1:i,t.y1+(t.y2-t.y1)*(t.curve===1?i:Math.pow(i,t.curve))}};var qo={sunset:{label:"Golden hour",elev:.2,az:Vo,sun:"#ffae6b",sunI:2.9,hemiSky:"#b4c0ee",hemiGround:"#c79a78",hemiI:1.7,zenith:"#25427f",mid:"#e88f78",horizon:"#ffcf96",glow:"#ff9a4d",disc:9,fog:"#eeb48e",fogD:205e-6,deep:"#144a63",shallow:"#3fa7a3",foam:"#ffe9d6",cloud:"#ffd9c2",cloudDark:"#c97f86",exposure:1,windows:.85,stars:0,bloom:.5,bloomT:2.3,lamps:1},day:{label:"Clear day",elev:.86,az:Vo-.5,sun:"#fff3de",sunI:2.7,hemiSky:"#bcd4ff",hemiGround:"#a39d84",hemiI:1.2,zenith:"#2a66c4",mid:"#78b1ea",horizon:"#d3e9f7",glow:"#fff1cf",disc:9,fog:"#cfe3f3",fogD:15e-5,deep:"#0f5c8a",shallow:"#3fc2bb",foam:"#ffffff",cloud:"#ffffff",cloudDark:"#b9c8de",exposure:.95,windows:.12,stars:0,bloom:.32,bloomT:2.8,lamps:0},night:{label:"Night flight",elev:.62,az:Vo+2.1,sun:"#9fb6ff",sunI:.8,hemiSky:"#4a5c9c",hemiGround:"#232838",hemiI:.95,zenith:"#040817",mid:"#0c1736",horizon:"#263763",glow:"#5a6fb5",disc:3.5,fog:"#141d3a",fogD:19e-5,deep:"#050f24",shallow:"#123a55",foam:"#b7c8ee",cloud:"#3a4672",cloudDark:"#1a2140",exposure:1.15,windows:2.3,stars:1,bloom:.75,bloomT:1,lamps:1.6}},Bs=["sunset","day","night"],zc=["sun","hemiSky","hemiGround","zenith","mid","horizon","glow","fog","deep","shallow","foam","cloud","cloudDark"],ku=["elev","az","sunI","hemiI","disc","fogD","exposure","windows","stars","bloom","bloomT","lamps"],fx=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,px=`
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
}`,Yo=class{constructor(t,e){this.scene=t,this.renderer=e,this.v={sunDir:new L};for(let o of zc)this.v[o]=new dt;this.from=null,this.to=null,this.t=1,this.name="sunset",this.uniforms={uZenith:{value:this.v.zenith},uMid:{value:this.v.mid},uHorizon:{value:this.v.horizon},uGlow:{value:this.v.glow},uSunDir:{value:this.v.sunDir},uSunColor:{value:this.v.sun},uFog:{value:this.v.fog},uDisc:{value:8},uStars:{value:0}};let i=new xe({vertexShader:fx,fragmentShader:px,uniforms:this.uniforms,side:ke,depthWrite:!1,depthTest:!0,fog:!1});this.dome=new Ct(new En(1,32,16),i),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,t.add(this.dome),this.sun=new Ao(16777215,3),this.sun.castShadow=!0;let n=this.sun.shadow;n.mapSize.set(2048,2048),n.camera.near=1,n.camera.far=520,n.bias=-5e-4,n.normalBias=.06,this.setShadowRange(70),t.add(this.sun,this.sun.target),this.hemi=new wo(16777215,8947848,1),t.add(this.hemi),t.fog=new fo(16777215,2e-4),this.clouds=this.buildClouds(),t.add(this.clouds),this.pmrem=new Rs(e),this.envScene=new Cs;let r=new Ct(this.dome.geometry,i);r.scale.setScalar(900),this.envScene.add(r),this.envRT=null,this.setTime("sunset",!0)}setShadowRange(t){let e=this.sun.shadow.camera;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.updateProjectionMatrix(),this.shadowRange=t}buildClouds(){let t=qn(77),e=new Gn(1,1);this.cloudMat=new be({color:16777215,emissive:0,flatShading:!0,fog:!1});let i=[];for(let l=0;l<46;l++){let c=t()*Math.PI*2,h=500+t()*3600,u=Math.cos(c)*h,f=Math.sin(c)*h,d=380+t()*380,g=40+t()*70,x=4+Math.floor(t()*4);for(let m=0;m<x;m++)i.push({x:u+(t()-.5)*g*3.4,y:d+(t()-.3)*g*.4,z:f+(t()-.5)*g*1.6,sx:g*(.7+t()*.8),sy:g*(.32+t()*.25),sz:g*(.6+t()*.6),r:t()*3})}let n=new wn(e,this.cloudMat,i.length),r=new Jt,o=new Ee,a=new Pe;return i.forEach((l,c)=>{o.setFromEuler(a.set(0,l.r,0)),r.compose(new L(l.x,l.y,l.z),o,new L(l.sx,l.sy,l.sz)),n.setMatrixAt(c,r)}),n.frustumCulled=!1,n}setTime(t,e=!1){let i=qo[t];if(i){this.name=t,this.to={},this.from={};for(let n of zc)this.to[n]=new dt(i[n]),this.from[n]=this.v[n].clone();for(let n of ku)this.to[n]=i[n],this.from[n]=this.v[n]??i[n];this.t=e?1:0,this.apply(this.t),e&&this.refreshEnv()}}apply(t){let e=this.v,i=t*t*(3-2*t);for(let r of zc)e[r].copy(this.from[r]).lerp(this.to[r],i);for(let r of ku)e[r]=Ot(this.from[r],this.to[r],i);let n=Math.cos(e.elev);e.sunDir.set(n*Math.cos(e.az),Math.sin(e.elev),n*Math.sin(e.az)).normalize(),this.uniforms.uDisc.value=e.disc,this.uniforms.uStars.value=e.stars,this.sun.color.copy(e.sun),this.sun.intensity=e.sunI,this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround),this.hemi.intensity=e.hemiI,this.scene.fog.color.copy(e.fog),this.scene.fog.density=e.fogD,this.cloudMat.color.copy(e.cloud),this.cloudMat.emissive.copy(e.cloudDark).multiplyScalar(.55),this.renderer.toneMappingExposure=e.exposure}refreshEnv(){let t=this.envRT,e=this.uniforms.uDisc.value;this.uniforms.uDisc.value=Math.min(e,4),this.envRT=this.pmrem.fromScene(this.envScene,.02,1,2e3),this.uniforms.uDisc.value=e,this.scene.environment=this.envRT.texture,t&&t.dispose()}update(t,e,i){this.t<1&&(this.t=Math.min(1,this.t+t/1.6),this.apply(this.t),this.t>=1&&this.refreshEnv()),this.dome.position.copy(e.position),this.dome.scale.setScalar(e.far*.9),this.clouds.rotation.y+=t*.0012;let n=this.shadowRange,r=2*n/this.sun.shadow.mapSize.x,o=Math.round(i.x/r)*r,a=Math.round(i.y/r)*r,l=Math.round(i.z/r)*r;this.sun.target.position.set(o,a,l),this.sun.position.set(o,a,l).addScaledVector(this.v.sunDir,260)}};var mx=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,gx=`
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
}`;function Hu(s){let t=new xe({vertexShader:mx,fragmentShader:gx,uniforms:{uTime:{value:0},uSize:{value:4e3},uHeight:{value:s},uFogDensity:{value:2e-4},uSunDir:{value:new L(0,1,0)},uSunColor:{value:new dt},uDeep:{value:new dt},uShallow:{value:new dt},uFoam:{value:new dt},uHorizon:{value:new dt},uZenith:{value:new dt},uFogColor:{value:new dt}}}),e=new Ct(new mi(24e3,24e3,1,1).rotateX(-Math.PI/2),t);return e.frustumCulled=!1,e.matrixAutoUpdate=!1,e}var He=class s{constructor(){this.pos=[],this.nor=[],this.col=[],this._m=new Jt,this._q=new Ee,this._e=new Pe,this._v=new L,this._s=new L,this._c=new dt,this._n3=new Wt}addGeometry(t,e,i){let n=t.index?t.toNonIndexed():t;n.attributes.normal||n.computeVertexNormals();let r=n.attributes.position,o=n.attributes.normal,a=this._v,l=this._c;this._n3.getNormalMatrix(e);let c=typeof i=="function"?i:null;c||l.set(i);for(let h=0;h<r.count;h++)a.fromBufferAttribute(r,h),c&&l.set(c(a)),a.applyMatrix4(e),this.pos.push(a.x,a.y,a.z),a.fromBufferAttribute(o,h).applyMatrix3(this._n3).normalize(),this.nor.push(a.x,a.y,a.z),this.col.push(l.r,l.g,l.b);return this}matrix(t,e,i,n=1,r=1,o=1,a=0,l=0,c=0){return this._e.set(l,a,c,"YXZ"),this._q.setFromEuler(this._e),this._m.compose(this._v.set(t,e,i),this._q,this._s.set(n,r,o)).clone()}box(t,e,i,n,r,o,a,l=0,c=0,h=0){return this.addGeometry(s.unitBox,this.matrix(t,e,i,n,r,o,l,c,h),a)}cyl(t,e,i,n,r,o,a,l=8,c=0,h=0,u=0){let f=new Ue(n,r,o,l);return this.addGeometry(f,this.matrix(t,e,i,1,1,1,c,h,u),a)}quad(t,e,i,n,r){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=i[0]-t[0],h=i[1]-t[1],u=i[2]-t[2],f=a*u-l*h,d=l*c-o*u,g=o*h-a*c,x=Math.hypot(f,d,g)||1;f/=x,d/=x,g/=x;let m=this._c.set(r);for(let p of[t,e,i,t,i,n])this.pos.push(p[0],p[1],p[2]),this.nor.push(f,d,g),this.col.push(m.r,m.g,m.b);return this}build(t,e=!0){let i=new Xt;i.setAttribute("position",new Tt(this.pos,3)),i.setAttribute("normal",new Tt(this.nor,3)),i.setAttribute("color",new Tt(this.col,3));let n=new Ct(i,t||new be({vertexColors:!0}));return n.castShadow=n.receiveShadow=e,n.matrixAutoUpdate=!1,n}};He.unitBox=new De(1,1,1).toNonIndexed();var xx=3.2,yx=3.4,Bi=16;function vx(s,t){let e=qn(t),i=512,n=i/Bi,r=document.createElement("canvas"),o=document.createElement("canvas");r.width=r.height=o.width=o.height=i;let a=r.getContext("2d"),l=o.getContext("2d");if(l.fillStyle="#000",l.fillRect(0,0,i,i),s==="A"){a.fillStyle="#ffffff",a.fillRect(0,0,i,i);for(let h=0;h<Bi;h++){a.fillStyle="rgba(0,0,0,0.07)",a.fillRect(0,h*n+n-2,i,2);for(let u=0;u<Bi;u++){let f=u*n+7,d=h*n+6,g=n-14,x=n-13;if(a.fillStyle="#26313f",a.fillRect(f,d,g,x),a.fillStyle="#51657c",a.fillRect(f,d,g,5),a.fillStyle="rgba(255,255,255,0.5)",a.fillRect(f-1,d+x,g+2,2),e()<.34){let m=e();l.fillStyle=m<.6?"#ffc778":m<.88?"#ffe3b8":"#bcd6ff",l.globalAlpha=.55+e()*.45,l.fillRect(f,d,g,x),l.globalAlpha=1}}}}else{a.fillStyle="#8fb0c9",a.fillRect(0,0,i,i);for(let h=0;h<Bi;h++)for(let u=0;u<Bi;u++){let f=u*n,d=h*n,g=.72+e()*.28;a.fillStyle=`rgb(${Math.round(150*g)},${Math.round(186*g)},${Math.round(214*g)})`,a.fillRect(f+1,d+1,n-2,n-8),a.fillStyle="#dfe9f0",a.fillRect(f,d+n-7,n,5),a.fillStyle="#31404f",a.fillRect(f,d,2,n),e()<.24&&(l.fillStyle=e()<.8?"#e8a85c":"#cfe0ff",l.globalAlpha=.3+e()*.4,l.fillRect(f+2,d+1,n-3,n-8),l.globalAlpha=1)}}let c=h=>{let u=new Ni(h);return u.wrapS=u.wrapT=an,u.colorSpace=Ae,u.anisotropy=4,u};return{map:c(r),emissiveMap:c(o)}}function _x(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),i=512/Rt.pitch,n=Rt.street/2*i,r=3.2*i;for(let a=0;a<2;a++){let l=a*512;e.save(),e.translate(l,0),e.beginPath(),e.rect(0,0,512,512),e.clip(),e.fillStyle="#3b3e46",e.fillRect(0,0,512,512);for(let h=0;h<3e3;h++){let u=52+Math.random()*26;e.fillStyle=`rgba(${u},${u+2},${u+8},0.3)`,e.fillRect(Math.random()*512,Math.random()*512,2,2)}if(e.fillStyle="#b3aea4",e.fillRect(n,n,512-2*n,512-2*n),e.fillStyle=a===0?"#96938c":"#6f9a57",e.fillRect(n+r,n+r,512-2*(n+r),512-2*(n+r)),a===0){e.strokeStyle="rgba(0,0,0,0.08)",e.lineWidth=1;for(let h=n+r;h<512-n-r;h+=4*i)e.beginPath(),e.moveTo(h,n+r),e.lineTo(h,512-n-r),e.stroke(),e.beginPath(),e.moveTo(n+r,h),e.lineTo(512-n-r,h),e.stroke()}else{e.strokeStyle="#d8c9a3",e.lineWidth=3*i,e.beginPath(),e.moveTo(n+r,n+r),e.lineTo(512-n-r,512-n-r),e.stroke(),e.beginPath(),e.moveTo(512-n-r,n+r),e.lineTo(n+r,512-n-r),e.stroke(),e.fillStyle="#d8c9a3",e.beginPath(),e.arc(512/2,512/2,11*i,0,7),e.fill(),e.fillStyle="#7fa965";for(let h=0;h<60;h++)e.globalAlpha=.5,e.beginPath(),e.arc(n+r+Math.random()*(512-2*n-2*r),n+r+Math.random()*(512-2*n-2*r),4+Math.random()*9,0,7),e.fill();e.globalAlpha=1}e.fillStyle="#e8b64a";for(let h=n+14;h<512-n-14;h+=34)e.fillRect(0,h,2.5,18),e.fillRect(512-2.5,h,2.5,18),e.fillRect(h,0,18,2.5),e.fillRect(h,512-2.5,18,2.5);e.fillStyle="#e9e6dc";let c=4*i;for(let h=5;h<n-4;h+=9)e.fillRect(n+2,h,c,5),e.fillRect(512-n-2-c,h,c,5),e.fillRect(n+2,512-h-5,c,5),e.fillRect(512-n-2-c,512-h-5,c,5),e.fillRect(h,n+2,5,c),e.fillRect(h,512-n-2-c,5,c),e.fillRect(512-h-5,n+2,5,c),e.fillRect(512-h-5,512-n-2-c,5,c);e.restore()}let o=new Ni(t);return o.colorSpace=Ae,o.anisotropy=8,o}var Mx=["#efe3cf","#dccab2","#cdbcab","#e6d6c2","#bfae9d","#d9b99e","#d2d8da","#f3eadb","#c9906f","#e2c7a6"],bx=["#b4d2e4","#9cc0d8","#bfdcd8","#d6c2a4","#a9b8d2","#cfe2ec","#94b6c8"];function Vu(s){let t=qn(2026),e=new fe,i={A:{pos:[],nor:[],uv:[],col:[]},B:{pos:[],nor:[],uv:[],col:[]}},n=new He,r=[],o=[],a=[],l=[],c=[],h=new dt,u=Rt.y+hi;function f(E,A,b,_,I,N,k,X,Q,Y,it,H){let at=Math.hypot(_-A,I-b),ut=Math.max(1,Math.round(at/xx))/Bi,_t=Math.max(1,Math.round((k-N)/yx))/Bi;E.pos.push(A,N,b,_,N,I,_,k,I,A,N,b,_,k,I,A,k,b),E.uv.push(it,H,it+ut,H,it+ut,H+_t,it,H,it+ut,H+_t,it,H+_t);for(let Bt=0;Bt<6;Bt++)E.nor.push(X,0,Q),E.col.push(Y.r,Y.g,Y.b)}function d(E,A,b,_,I,N,k,X){let Q=i[k];h.set(X);let Y=Math.floor(t()*Bi)/Bi,it=Math.floor(t()*Bi)/Bi;f(Q,E-b,A+_,E+b,A+_,I,N,0,1,h,Y,it),f(Q,E+b,A+_,E+b,A-_,I,N,1,0,h,Y,it),f(Q,E+b,A-_,E-b,A-_,I,N,0,-1,h,Y,it),f(Q,E-b,A-_,E-b,A+_,I,N,-1,0,h,Y,it);let H=new dt(X).multiplyScalar(.5).lerp(new dt("#5c6068"),.5);n.box(E,N-.05,A,b*2,.1,_*2,H.getHex()),n.box(E,N-.03,A,b*2-3,.1,_*2-3,H.clone().multiplyScalar(1.25).getHex()),s.add({x:E,z:A,hx:b,hz:_,y0:I-3,y1:N,kind:"building"}),c.push({x:E,z:A,hx:b,hz:_,y:N})}function g(E,A,b,_,I,N){let k=I>70,X=k?t()<.7?"B":"A":t()<.16?"B":"A",Q=X==="A"?Mx:bx,Y=Q[Math.floor(t()*Q.length)];if(k&&Math.min(b,_)>12&&t()<.75){let it=I*(.5+t()*.25);d(E,A,b,_,u,u+it,X,Y);let H=4+t()*4;if(d(E,A,b-H,_-H,u+it,u+I,X,Y),t()<.4){let at=H+4+t()*3,ut=10+t()*22;if(Math.min(b,_)-at>4)return d(E,A,b-at,_-at,u+I,u+I+ut,X,Y),{x:E,z:A,hx:b-at,hz:_-at,top:u+I+ut}}return{x:E,z:A,hx:b-H,hz:_-H,top:u+I}}return d(E,A,b,_,u,u+I,X,Y),{x:E,z:A,hx:b,hz:_,top:u+I}}let x=[],m={pos:[],uv:[],idx:[]},p=(Rt.pitch-Rt.street)/2-4;for(let E=0;E<Rt.n;E++)for(let A=0;A<Rt.n;A++){let b=Rt.x0+(A+.5)*Rt.pitch,_=Rt.z0+(E+.5)*Rt.pitch,I=Math.max(Math.abs(A-4),Math.abs(E-4)),N=`${A},${E}`,k=N==="2,6"||N==="7,3",X=N==="6,6"||N==="1,2",Q=m.pos.length/3,Y=Rt.pitch/2,it=k?.5:0;if(m.pos.push(b-Y,u,_-Y,b+Y,u,_-Y,b-Y,u,_+Y,b+Y,u,_+Y),m.uv.push(it+.001,1,it+.499,1,it+.001,0,it+.499,0),m.idx.push(Q,Q+2,Q+1,Q+1,Q+2,Q+3),k){l.push({x:b,z:_,r:p});continue}if(X){o.push({x:b,z:_,y:u,plaza:!0});continue}if(I===0){let Lt="#8fb7cf";d(b,_,27,27,u,u+70,"B",Lt),d(b,_,21,21,u+70,u+170,"B",Lt),d(b,_,15,15,u+170,u+246,"B",Lt),r.push({x:b,z:_,y:u+246,r:10,name:"Aurora Tower"}),a.push([b+14,u+248,_+14],[b-14,u+248,_-14]),x.push({x:b,z:_,hx:15,hz:15,top:u+246,ring:I});continue}let H=t(),at=I===1?[88,190]:I===2?[34,92]:I===3?[11,34]:[8,20],ut=()=>at[0]+t()*(at[1]-at[0]),_t=2.5,Bt=[];if(I===1&&H<.5||I===2&&H<.25){let Lt=p-t()*5;Bt.push(g(b,_,Lt,Lt,ut()*1.1,I))}else if(I<=2&&H<.7||I>2&&H<.3){let Lt=p/2-_t/2;t()<.5?Bt.push(g(b-Lt-_t,_,Lt,p,ut(),I),g(b+Lt+_t,_,Lt,p,ut(),I)):Bt.push(g(b,_-Lt-_t,p,Lt,ut(),I),g(b,_+Lt+_t,p,Lt,ut(),I))}else if(H<.86||I<=2){let Lt=p/2-_t/2;for(let nt of[-1,1])for(let ht of[-1,1])Bt.push(g(b+nt*(Lt+_t),_+ht*(Lt+_t),Lt,Lt,ut()*(.7+t()*.5),I))}else{let Lt=p/2-_t/2;Bt.push(g(b,_-Lt-_t,p,Lt,ut(),I));for(let nt of[-1,1])Bt.push(g(b+nt*(Lt+_t),_+Lt+_t,Lt,Lt,ut()*.8,I))}for(let Lt of Bt)x.push({...Lt,ring:I})}let y=x.filter(E=>E.ring>=1&&E.ring<=2&&Math.min(E.hx,E.hz)>=11).sort((E,A)=>A.top-E.top),M=["Skyline Deck","Harbor View","Midtown Roof"];[y[0],y[Math.floor(y.length/2)],y[y.length-2]].forEach((E,A)=>{E&&r.push({x:E.x,z:E.z,y:E.top,r:Math.min(9,Math.min(E.hx,E.hz)-1.5),name:M[A]})});for(let E of x)E.top>150&&E.ring>0&&a.push([E.x,E.top+1.5,E.z]);let v={};for(let E of["A","B"]){let A=i[E],b=new Xt;b.setAttribute("position",new Tt(A.pos,3)),b.setAttribute("normal",new Tt(A.nor,3)),b.setAttribute("uv",new Tt(A.uv,2)),b.setAttribute("color",new Tt(A.col,3));let _=vx(E,E==="A"?5:9),I=new be({map:_.map,emissiveMap:_.emissiveMap,emissive:16777215,emissiveIntensity:1,vertexColors:!0});v[E]=I;let N=new Ct(b,I);N.castShadow=N.receiveShadow=!0,N.matrixAutoUpdate=!1,e.add(N)}e.add(n.build());let C=new Xt;C.setAttribute("position",new Tt(m.pos,3)),C.setAttribute("uv",new Tt(m.uv,2)),C.setIndex(m.idx),C.computeVertexNormals();let w=new Ct(C,new be({map:_x(),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));return w.receiveShadow=!0,w.matrixAutoUpdate=!1,e.add(w),{group:e,mats:v,pads:r,rampSpots:o,beacons:a,parks:l,tops:x,roofList:c}}var Sx='"Barlow Condensed", "Arial Narrow", Arial, sans-serif';function Kn(s,t,e,i={}){let n=document.createElement("canvas");n.width=s,n.height=t,e(n.getContext("2d"),s,t);let r=new Ni(n);return r.colorSpace=Ae,r.anisotropy=8,i.repeat&&(r.wrapS=r.wrapT=an),r}function Oc(s,t,e,i){s.beginPath(),s.moveTo(t-50*i,e+32*i),s.lineTo(t,e-18*i),s.lineTo(t+50*i,e+32*i),s.lineTo(t+50*i,e+6*i),s.lineTo(t,e-44*i),s.lineTo(t-50*i,e+6*i),s.closePath(),s.fill()}function Gu({terrain:s,roads:t,colliders:e,city:i,pierZ:n}){let r=new fe,o=qn(4242),a=new He,l=new He,c=[],h=[...i.pads],u=[],f=[],d=[],g=[...i.beacons,...t.beaconPositions||[]],x={kicker:{pos:[],uv:[],idx:[]},launch:{pos:[],uv:[],idx:[]}};function m(P){P.curve=P.curve||1.6;let G=Math.cos(P.yaw),j=Math.sin(P.yaw),$=14,R=x[P.launch?"launch":"kicker"],S=(rt,st,mt)=>[P.x+rt*G+mt*j,P.baseY+st,P.z-rt*j+mt*G],U=rt=>P.h*Math.pow(rt,P.curve),Z=R.pos.length/3,q=P.halfW,V=P.len,lt=P.launch?1908260:3159100;for(let rt=0;rt<=$;rt++){let st=rt/$,mt=-V/2+st*V,W=U(st);if(R.pos.push(...S(-q,W,mt),...S(q,W,mt)),R.uv.push(0,st*V/8,1,st*V/8),rt>0){let tt=Z+(rt-1)*2,yt=Z+rt*2;R.idx.push(tt,yt,tt+1,tt+1,yt,yt+1);let Et=mt-V/$,O=U((rt-1)/$);a.quad(S(-q,-3,Et),S(-q,-3,mt),S(-q,W,mt),S(-q,O,Et),lt),a.quad(S(q,-3,mt),S(q,-3,Et),S(q,O,Et),S(q,W,mt),lt);let gt=-Math.atan2(W-O,V/$),ct=Math.hypot(W-O,V/$)+.05;for(let At of[-1,1]){let D=S(At*(q-.16),(W+O)/2+.1,(mt+Et)/2);(P.launch?l:a).box(D[0],D[1],D[2],.3,.22,ct,P.launch?rt%2?16769730:16730682:rt%2?16118246:2764083,P.yaw,gt)}}}return a.quad(S(-q,-3,V/2),S(q,-3,V/2),S(q,P.h,V/2),S(-q,P.h,V/2),lt),P.collider=e.add({x:P.x,z:P.z,hx:q,hz:V/2,yaw:P.yaw,y0:P.baseY-3,y1:P.baseY,y2:P.baseY+P.h,curve:P.curve,kind:"ramp",launch:!!P.launch,name:P.name}),P.lipX=P.x+j*V/2,P.lipZ=P.z+G*V/2,P.lipY=P.baseY+P.h,c.push(P),P}let p=ce.y+hi;m({...Ou,baseY:p,launch:!0,name:"Proving Ground Launch"}),m({x:-1400,z:462,yaw:Math.PI/2,len:14,halfW:5,h:3,baseY:p}),m({x:-1310,z:462,yaw:Math.PI/2,len:20,halfW:5.5,h:5.2,baseY:p}),m({x:-1196,z:462,yaw:Math.PI/2,len:22,halfW:6,h:6,baseY:p}),m({x:-1104,z:462,yaw:-Math.PI/2,len:22,halfW:6,h:6,baseY:p}),m({x:-960,z:470,yaw:Math.PI/2,len:12,halfW:4,h:2.4,curve:1.3,baseY:p}),m({x:-920,z:470,yaw:-Math.PI/2,len:12,halfW:4,h:2.4,curve:1.3,baseY:p}),m({x:-1500,z:300,yaw:.9,len:16,halfW:5,h:4,baseY:p});let y=t.roads[0];for(let[P,G,j]of[[.045,1,3.4],[.34,1,3.6],[.46,-1,3.2],[.58,1,4],[.72,-1,3.4],[.86,1,3.8],[.95,-1,3.2]]){let $=y.pts[Math.floor(P*y.pts.length)];if($.bridge)continue;let R=Math.atan2($.tx,$.tz)+(G<0?Math.PI:0);m({x:$.x+$.nx*4.6*G,z:$.z+$.nz*4.6*G,yaw:R,len:17,halfW:3.7,h:j,baseY:$.y+hi})}if(t.bayBridge){let P=t.bayBridge;m({x:P.x+Math.cos(P.yaw)*-4.6,z:P.z-Math.sin(P.yaw)*-4.6,yaw:P.yaw+Math.PI,len:15,halfW:3.6,h:3,baseY:P.y+hi})}let M=Rt.x0+300-te.x,v=Rt.z0+300-te.z,C=Math.hypot(M,v);m({x:te.x+M/C*17,z:te.z+v/C*17,yaw:Math.atan2(M,v),len:30,halfW:6.5,h:6.5,curve:1.8,baseY:te.summitY,launch:!0,name:"Summit Send"});for(let P of i.rampSpots){let G=Math.atan2(Rt.x0+4.5*Rt.pitch-P.x,Rt.z0+4.5*Rt.pitch-P.z);m({x:P.x,z:P.z,yaw:Math.round(G/(Math.PI/2))*(Math.PI/2),len:20,halfW:5.5,h:5,baseY:P.y}),h.push({x:P.x+18,z:P.z-18,y:P.y,r:7,name:"Plaza"})}let w=i.tops.filter(P=>P.ring>=2&&P.ring<=3&&Math.min(P.hx,P.hz)>=11&&!i.pads.some(G=>G.x===P.x&&G.z===P.z));for(let P=0;P<4&&P<w.length;P++){let G=w[Math.floor((P+.5)*w.length/4)],j=Math.atan2(Rt.x0+4.5*Rt.pitch-G.x,Rt.z0+4.5*Rt.pitch-G.z),$=Math.round(j/(Math.PI/2))*(Math.PI/2),R=Math.abs(Math.sin($))>.5?G.hx:G.hz;m({x:G.x+Math.sin($)*(R-8.5),z:G.z+Math.cos($)*(R-8.5),yaw:$,len:15,halfW:4,h:3.2,baseY:G.top})}{let G=n-26,j=n+190,$=6.6;e.add({x:880,z:(G+j)/2,hx:8,hz:(j-G)/2,y0:$-1.2,y1:$,kind:"deck",quiet:!0}),a.box(880,$-.6,(G+j)/2,16,1.2,j-G,12160870),a.box(880,$+.03,(G+j)/2,12,.08,j-G-2,13280122);for(let W=G+12;W<j;W+=24)for(let tt of[-1,1])a.box(880+tt*6.5,($-8)/2-.6,W,1.1,$+8,1.1,7232072);for(let W=G+6;W<j-30;W+=12)for(let tt of[-1,1])a.box(880+tt*7.7,$+1.9,W,.18,3.8,.18,3816772),l.box(880+tt*7.7,$+3.9,W,.5,.5,.5,16767392);let R=Math.max(s.heightAt(880,G-16),1);e.add({x:880,z:G-8,hx:8,hz:8.2,y0:R-3,y1:R,y2:$,kind:"ramp",quiet:!0}),a.box(880,(R+$)/2-.45,G-8,16,.9,16.6,12160870,0,-Math.atan2($-R,16)),m({x:880,z:j-17,yaw:0,len:30,halfW:6,h:6.5,curve:1.8,baseY:$,launch:!0,name:"Pier Launch"});let S=910,U=n+70,Z=27,q=$+Z+5;e.add({x:S,z:U,hx:22,hz:14,y0:$-1.2,y1:$,kind:"deck",quiet:!0}),a.box(S,$-.6,U,44,1.2,28,12160870);for(let W of[-1,1])for(let tt of[-1,1])a.box(S+tt*8,($+q)/2,U+W*3,.9,Math.hypot(q-$,16)+1,.9,15920610,0,0,tt*Math.atan2(16,q-$));for(let W of[-1,1])e.add({x:S+W*13,z:U,hx:3,hz:3.6,y0:$,y1:$+11,kind:"prop"});let V=new fe,lt=new He,rt=new He;for(let W of[-1.6,1.6])lt.addGeometry(new Xi(Z,.35,5,40),lt.matrix(0,0,W),15920610),lt.addGeometry(new Xi(Z*.55,.22,4,32),lt.matrix(0,0,W),15920610);let st=["#e5484d","#f2a33a","#3aa6c9","#f2ede2"];for(let W=0;W<16;W++){let tt=W/16*Math.PI*2;lt.box(Math.cos(tt)*Z/2,Math.sin(tt)*Z/2,0,Z,.2,.2,15920610,0,0,tt),rt.box(Math.cos(tt)*Z,Math.sin(tt)*Z,0,.5,.5,3.6,W%2?16761466:16738906)}V.add(lt.build(null,!1),rt.build(new pe({vertexColors:!0}),!1)),V.children.forEach(W=>{W.matrixAutoUpdate=!0});let mt=[];for(let W=0;W<16;W++){let tt=new Ct(new De(2.6,2.4,2.2),new be({color:st[W%4]}));V.add(tt),mt.push(tt)}V.position.set(S,q,U),r.add(V),d.push((W,tt)=>{V.rotation.z=tt*.07;for(let yt=0;yt<16;yt++){let Et=yt/16*Math.PI*2;mt[yt].position.set(Math.cos(Et)*Z,Math.sin(Et)*Z-1.9,0),mt[yt].rotation.z=-V.rotation.z}}),f.push({x:S,y:q,z:U,r:3.5,name:"wheel hub"})}{let P=p,G=Kn(4096,128,(O,gt,ct)=>{O.fillStyle="#454850",O.fillRect(0,0,gt,ct);for(let At=0;At<14e3;At++){let D=62+Math.random()*30;O.fillStyle=`rgba(${D},${D+2},${D+8},0.35)`,O.fillRect(Math.random()*gt,Math.random()*ct,3,2)}O.fillStyle="#ece9df",O.fillRect(0,5,gt,3),O.fillRect(0,ct-8,gt,3);for(let At=240;At<gt-700;At+=150)O.fillRect(At,ct/2-2,80,4);for(let At=0;At<8;At++)O.fillRect(40,14+At*13.2,120,7);for(let At=0;At<7;At++)O.fillStyle=At%2?"#ece9df":"#ff4a3a",O.save(),O.translate(gt-640+At*84,ct/2),O.beginPath(),O.moveTo(0,-50),O.lineTo(34,0),O.lineTo(0,50),O.lineTo(26,50),O.lineTo(60,0),O.lineTo(26,-50),O.closePath(),O.fill(),O.restore()}),j=new Ct(new mi(ee.x1-ee.x0,ee.halfW*2).rotateX(-Math.PI/2),new be({map:G,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));j.position.set((ee.x0+ee.x1)/2,P,ee.z);let $=Kn(256,256,O=>{O.fillStyle="#a9a69d",O.fillRect(0,0,256,256);for(let gt=0;gt<1500;gt++){let ct=150+Math.random()*40;O.fillStyle=`rgba(${ct},${ct},${ct-8},0.25)`,O.fillRect(Math.random()*256,Math.random()*256,3,3)}O.strokeStyle="rgba(60,60,60,0.35)",O.lineWidth=2,O.strokeRect(0,0,256,256)},{repeat:!0}),R=new be({map:$,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),S=ce.x0+28,U=ce.x1-20;for(let[O,gt]of[[ce.z0+10,ee.z-ee.halfW],[ee.z+ee.halfW,ce.z1-10]]){let ct=new mi(U-S,gt-O).rotateX(-Math.PI/2),At=ct.attributes.uv;for(let pt=0;pt<At.count;pt++)At.setXY(pt,At.getX(pt)*(U-S)/24,At.getY(pt)*(gt-O)/24);let D=new Ct(ct,R);D.position.set((S+U)/2,P,(O+gt)/2),D.receiveShadow=!0,r.add(D)}for(let[O,gt]of[[S,ee.x0],[ee.x1,U]]){let ct=new mi(gt-O,ee.halfW*2).rotateX(-Math.PI/2),At=ct.attributes.uv;for(let pt=0;pt<At.count;pt++)At.setXY(pt,At.getX(pt)*(gt-O)/24,At.getY(pt)*ee.halfW/12);let D=new Ct(ct,R);D.position.set((O+gt)/2,P,ee.z),D.receiveShadow=!0,r.add(D)}j.receiveShadow=!0,r.add(j);for(let O=ee.x0+10;O<ee.x1;O+=28)for(let gt of[-1,1])l.box(O,P+.14,ee.z+gt*(ee.halfW+1.2),.28,.28,.28,O>ee.x1-200?16734780:16771e3);let Z=-1250,q=296,V=76,lt=17,rt=15;for(let O of[-1,1])e.add({x:Z,z:q+O*(lt+.7),hx:V/2,hz:.9,y0:P-2,y1:P+rt,kind:"building"}),a.box(Z,P+rt/2,q+O*(lt+.7),V,rt,1.6,14275783),a.box(Z,P+1.1,q+O*(lt+1.56),V,2.2,.12,13191226);e.add({x:Z,z:q,hx:V/2,hz:lt+1.6,y0:P+rt,y1:P+rt+5.5,kind:"building"});let st=new Ue(lt+1.6,lt+1.6,V,14,1,!1,0,Math.PI);a.addGeometry(st,a.matrix(Z,P+rt,q,.32,1,1,0,0,Math.PI/2),12568009);for(let O=-3;O<=3;O++)l.box(Z+O*10,P+rt-.3,q,1.6,.25,.5,16773584);for(let O of[-1432,-1085])e.add({x:O,z:286,hx:30,hz:20,y0:P-2,y1:P+15,kind:"building"}),a.box(O,P+7.5,286,60,15,40,14275783),a.box(O,P+15.6,286,61,1.2,41,12568009),a.box(O,P+5.5,306.1,42,11,.3,9278620),a.box(O,P+12.6,306.15,60,1,.3,13191226);e.add({x:-985,z:282,hx:4,hz:4,y0:P-2,y1:P+30,kind:"building"}),e.add({x:-985,z:282,hx:6.5,hz:6.5,y0:P+30,y1:P+36.5,kind:"building"}),a.box(-985,P+15,282,8,30,8,15328472),a.box(-985,P+30.6,282,13.6,1.2,13.6,13191226),a.box(-985,P+33,282,12.4,3.6,12.4,8370633),a.box(-985,P+35.6,282,14,1.6,14,15328472),g.push([-985,P+39,282]),h.push({x:-915,z:300,y:P,r:9,name:"Proving Ground"});let mt=[13191226,3112858,15311419,5016666,15328472];for(let O=0;O<9;O++){let gt=-820-O%3*22,ct=450+Math.floor(O/3)*16,At=1+O*7%3;for(let D=0;D<At;D++)a.box(gt,P+1.45+D*2.9,ct,12.2,2.9,2.6,mt[(O+D)%5]);e.add({x:gt,z:ct,hx:6.1,hz:1.3,y0:P-1,y1:P+At*2.9,kind:"prop"})}let W=[15026253,15901498,3843785,15920610,8150212,3119738];for(let O of[-1,1]){let gt=ee.z+O*52;for(let ct=0;ct<5;ct++){a.box(-700,P+.6+ct*1.1,gt+O*ct*1.6,70,1.2,1.7,ct%2?9278620:10988979);for(let At=0;At<34;At++)(At*7+ct*3)%5!==0&&a.box(-733+At*2+(ct*37+At*11)%7*.1,P+1.75+ct*1.1,gt+O*ct*1.6,.55,1.1,.5,W[(At*5+ct*3)%6])}a.box(-700,P+9,gt+O*9.5,72,.5,5,2434861,0,0,0);for(let ct of[-34,0,34])a.box(-700+ct,P+4.5,gt+O*11.5,.6,9,.6,2434861);e.add({x:-700,z:gt+O*4,hx:35,hz:5.6,y0:P-1,y1:P+6.4,kind:"building"});for(let ct=-760;ct<-600;ct+=8)l.box(ct,P+.08,ee.z+O*10.5,4,.12,.25,16734784)}for(let O=0;O<4;O++){let gt=-1560+O*16,ct=262;a.cyl(gt,P+9,ct,5,5,18,15921644,14),a.addGeometry(new En(5,14,6,0,Math.PI*2,0,Math.PI/2),a.matrix(gt,P+18,ct),15921644),e.add({x:gt,z:ct,hx:4.6,hz:4.6,y0:P-1,y1:P+22,kind:"building"})}for(let O=0;O<4;O++)a.box(-1575+O%2*6,P+20,298+Math.floor(O/2)*6,.5,40,.5,13191226);for(let O=0;O<5;O++)a.box(-1572,P+6+O*8,301,7,.4,7,13191226);e.add({x:-1572,z:301,hx:3.6,hz:3.6,y0:P-1,y1:P+40,kind:"building"}),g.push([-1572,P+41,301]);let tt=-690;for(let O of[-1,1])a.box(tt,P+9,ee.z+O*25,1.4,18,1.4,2434861),e.add({x:tt,z:ee.z+O*25,hx:.9,hz:.9,y0:P-1,y1:P+18,kind:"prop"});a.box(tt,P+17.2,ee.z,2,3.6,52,2434861),e.add({x:tt,z:ee.z,hx:1,hz:26,y0:P+15.4,y1:P+19,kind:"prop"});let yt=Kn(1024,96,(O,gt,ct)=>{O.fillStyle="#101115",O.fillRect(0,0,gt,ct),O.fillStyle="#ff4a3a",O.fillRect(0,0,gt,6),O.fillRect(0,ct-6,gt,6),O.font=`italic 700 62px ${Sx}`,O.textAlign="center",O.textBaseline="middle",O.fillStyle="#fff3e0",O.fillText("FLIGHT  TEST   \u203A\u203A\u203A   FULL  THROTTLE   \u203A\u203A\u203A",gt/2,ct/2+3)}),Et=new Ct(new mi(40,3),new pe({map:yt}));Et.position.set(tt-1.05,P+17.2,ee.z),Et.rotation.y=-Math.PI/2,r.add(Et);for(let[O,gt]of[[-610,344],[-610,416],[-545,348],[-545,412]])a.box(O,P+11,gt,.7,22,.7,2434861),l.box(O,P+22.4,gt,1,2.2,4.4,16773584,gt<ee.z?.5:-.5),e.add({x:O,z:gt,hx:.6,hz:.6,y0:P-1,y1:P+23,kind:"prop"})}{let P=ii.x,G=ii.z,j=s.heightAt(P,G);for(let q=0;q<6;q++)a.cyl(P,j+3+q*6,G,3.6-q*.28-.28,3.6-q*.28,6,q%2?13191226:15920610,10);a.cyl(P,j+36.4,G,3.4,3.4,.8,3159100,10),l.addGeometry(new Ue(1.8,1.8,3,8),l.matrix(P,j+38.3,G),16773568),a.addGeometry(new lr(2.6,2.6,8),a.matrix(P,j+41.1,G),13191226),e.add({x:P,z:G,hx:3.4,hz:3.4,y0:j-3,y1:j+42,kind:"building"});let $=new Ue(.6,9,150,10,1,!0).rotateX(Math.PI/2).translate(0,0,75),R=new pe({color:16773568,transparent:!0,opacity:.1,blending:Ke,depthWrite:!1,side:Ne,fog:!1}),S=new fe,U=new Ct($,R),Z=new Ct($,R);Z.rotation.y=Math.PI,S.add(U,Z),S.position.set(P,j+38.3,G),r.add(S),d.push((q,V,lt)=>{S.rotation.y=V*.5,R.opacity=.03+.1*Math.min(lt,1.5),S.visible=lt>.05}),h.push({x:P+22,z:G+4,y:s.heightAt(P+22,G+4),r:7,name:"Lighthouse Cape"})}{let P=te.x-27,G=te.z+6,j=te.summitY;a.cyl(P,j+3,G,8,8.4,6,15328472,12),a.addGeometry(new En(8,12,6,0,Math.PI*2,0,Math.PI/2),a.matrix(P,j+6,G),$=>Math.abs($.x)<1.2&&$.z>0?3159100:16249834),e.add({x:P,z:G,hx:7.4,hz:7.4,y0:j-3,y1:j+13,kind:"building"}),a.box(te.x-6,j+14,te.z-36,.5,28,.5,13191226),e.add({x:te.x-6,z:te.z-36,hx:.5,hz:.5,y0:j-2,y1:j+28,kind:"prop"}),g.push([te.x-6,j+28.6,te.z-36]),h.push({x:te.x+2,z:te.z-22,y:j,r:8,name:"Mount Ember Summit"})}{let P=new fe,G=new be({color:16249834}),j=new De(1.5,27,.4).translate(0,14.5,0);for(let R=0;R<7;R++){let S=R*.9+.4,U=70+R*97%230,Z=wi.x+Math.cos(S)*U,q=wi.z+Math.sin(S)*U,V=s.heightAt(Z,q);if(V<4)continue;a.cyl(Z,V+31,q,1.1,2,62,16249834,8),e.add({x:Z,z:q,hx:1.6,hz:1.6,y0:V-3,y1:V+62,kind:"prop"});let lt=new fe,rt=new Ct(new De(2.4,2.4,6),G);for(let W=0;W<3;W++){let tt=new Ct(j,G);tt.rotation.z=W/3*Math.PI*2,lt.add(tt)}lt.position.set(0,0,3.4);let st=new fe;st.add(rt,lt),st.position.set(Z,V+62.5,q),st.rotation.y=2.2,P.add(st);let mt=.7+R%3*.18;d.push((W,tt)=>{lt.rotation.z=tt*mt+R}),g.push([Z,V+64.5,q])}r.add(P);let $=s.heightAt(wi.x,wi.z);h.push({x:wi.x,z:wi.z,y:$,r:8,name:"Wind Farm"})}{let P=Te.x+30,G=Te.z-190,j=3.6;e.add({x:P,z:G,hx:30,hz:13,y0:-4,y1:j,kind:"deck",quiet:!0}),a.box(P,j/2-2,G,60,j+4,26,2829877),a.box(P,j+.02,G,58,.1,24,4014409);for(let $ of[-1,1])for(let R of[-1,1])l.box(P+$*29,j+.5,G+R*12,.6,1,.6,16761466);h.push({x:P,z:G,y:j,r:10,name:"Bay Barge",bonus:1.5})}{let P=new He;P.box(0,.5,0,2.6,1.3,8,15920610),P.box(0,6.5,-.4,.2,11,.2,7232072),P.quad([0,1.8,-.7],[0,1.8,-4.4],[0,11.5,-.7],[0,11.5,-.7],16644334),P.quad([0,11.5,-.7],[0,1.8,-4.4],[0,1.8,-.7],[0,1.8,-.7],16644334),P.quad([0,1.8,-.1],[0,10.5,-.1],[0,1.8,3.6],[0,1.8,3.6],16747100),P.quad([0,1.8,3.6],[0,10.5,-.1],[0,1.8,-.1],[0,1.8,-.1],16747100);let G=P.build().geometry,j=new be({vertexColors:!0});[[Te.x-90,Te.z+120],[Te.x+120,Te.z+330],[Te.x-30,Te.z-40],[Te.x+60,Te.z+560],[Te.x-150,Te.z+640],[1240,1500],[300,1640],[-1500,1100],[1640,200]].forEach(([U,Z],q)=>{if(s.heightAt(U,Z)>-3)return;let V=new Ct(G,j);V.position.set(U,0,Z),V.rotation.y=q*1.7,r.add(V),d.push((lt,rt)=>{V.position.y=Math.sin(rt*.9+q)*.25,V.rotation.z=Math.sin(rt*.7+q*2)*.05})});let R=[["#e5484d","#fdf3df"],["#f2a33a","#2f7f9a"],["#7c5cc4","#fdf3df"],["#2f9a7a","#f2d23a"],["#e5484d","#f2a33a"]];[[Te.x+40,150,Te.z-380],[640,210,60],[260,130,1300],[-620,170,-260],[1340,160,-480]].forEach(([U,Z,q],V)=>{let lt=new He,[rt,st]=R[V],mt=new En(10,12,8);lt.addGeometry(mt,lt.matrix(0,0,0,1,1.15,1),yt=>Math.floor((Math.atan2(yt.z,yt.x)/(Math.PI*2)+.5)*12)%2?rt:st),lt.addGeometry(new Ue(5.2,1.6,6,12,1,!0),lt.matrix(0,-12.4,0),yt=>Math.floor((Math.atan2(yt.z,yt.x)/(Math.PI*2)+.5)*12)%2?rt:st),lt.box(0,-17.4,0,2.2,1.8,2.2,9071178);let W=lt.build(new be({vertexColors:!0,side:Ne}),!1);W.matrixAutoUpdate=!0,W.position.set(U,Z,q),r.add(W);let tt={x:U,y:Z,z:q,r:11.5,name:"balloon"};f.push(tt),d.push((yt,Et)=>{tt.y=Z+Math.sin(Et*.15+V*2)*9,W.position.y=tt.y,W.rotation.y=Et*.03+V})})}let E=[];function A(P,G,j=8){let $=E.length;E.push({name:P,count:G.length,id:$}),G.forEach((R,S)=>{let U=G[Math.max(0,S-1)],Z=G[Math.min(G.length-1,S+1)],q=new L(Z[0]-U[0],Z[1]-U[1],Z[2]-U[2]).normalize();u.push({pos:new L(R[0],R[1],R[2]),dir:q,r:j,chain:$,index:S,cooldown:0,pulse:0})})}A("Liftoff Line",[[-440,50,380],[-310,56,384],[-170,61,394],[-30,66,410],[120,64,430],[280,62,452],[430,70,470]],9);let b=P=>Rt.x0+P*Rt.pitch,_=P=>Rt.z0+P*Rt.pitch,I=Rt.y;if(A("Downtown Slalom",[[b(3),I+38,_(0)+30],[b(3),I+50,_(2)],[b(3),I+62,_(4)],[b(3)+28,I+66,_(5)-12],[b(4)+20,I+70,_(5)],[b(6)-20,I+74,_(5)],[b(6),I+68,_(5)-30],[b(6),I+56,_(3)],[b(6),I+44,_(1)]],7.5),t.bayBridge){let P=t.bayBridge,G=Math.sin(P.yaw),j=Math.cos(P.yaw);A("Bridge Thread",[-.44,-.23,0,.23,.44].map(U=>[P.x+G*U*P.len,P.y+14+(Math.abs(U)<.3?1:0),P.z+j*U*P.len]),7.5);let $=e.boxes.filter(U=>U.kind==="pier"&&Math.hypot(U.x-P.x,U.z-P.z)<140).sort((U,Z)=>Math.hypot(U.x-P.x,U.z-P.z)-Math.hypot(Z.x-P.x,Z.z-P.z)),R=$.length>1?($[0].x+$[1].x)/2:P.x+G*22,S=$.length>1?($[0].z+$[1].z)/2:P.z+j*22;A("Under the Deck",[[R-j*150,6.5,S+G*150],[R-j*60,6,S+G*60],[R,6,S],[R+j*70,6.5,S-G*70],[R+j*160,9,S-G*160]],5.6)}{let P=t.roads.find(j=>j.id==="summit"),G=[];for(let j=1;j<=9;j++){let $=P.pts[Math.floor(j/10*P.pts.length)];G.push([$.x,$.y+20,$.z])}G.push([te.x,te.summitY+34,te.z]),A("Summit Climb",G,9)}{let P=[];for(let G=0;G<8;G++){let j=.25+G*.2,$=900;for(;$<2100&&s.heightAt(Math.cos(j)*$,Math.sin(j)*$)>-1.5;)$+=15;P.push([Math.cos(j)*($+70),7.5,Math.sin(j)*($+70)])}A("Coast Skimmer",P,7)}A("Hangar Run",[[-1420,ce.y+26,330],[-1330,ce.y+9.5,296],[-1250,ce.y+8,296],[-1170,ce.y+9.5,296],[-1060,ce.y+30,330]],6.2);{let P=[];for(let G=0;G<9;G++){let j=G/9*Math.PI*2;P.push([260+Math.cos(j)*430,420+Math.sin(j*2)*40,60+Math.sin(j)*430])}A("Cloud Nine",P,10)}let N=new Xi(1,.055,6,36),k=new pe({color:16777215,fog:!1}),X=new wn(N,k,u.length);X.frustumCulled=!1;let Q=new Ds(.72,1,36),Y=new pe({color:6744319,transparent:!0,opacity:.07,blending:Ke,depthWrite:!1,side:Ne,fog:!1}),it=new wn(Q,Y,u.length);it.frustumCulled=!1,r.add(X,it);let H=new Jt,at=new Ee,ut=new L,_t=new dt,Bt=new L(0,0,1),Lt=new dt(.55,3,3.9),nt=new dt(.1,.16,.22),ht=new dt(5,4.4,2.8);function Dt(P){for(let G=0;G<u.length;G++){let j=u[G];j.cooldown>0&&(j.cooldown-=P),j.pulse=Math.max(0,j.pulse-P*1.6);let $=j.r*(1+j.pulse*.5);at.setFromUnitVectors(Bt,j.dir),H.compose(j.pos,at,ut.set($,$,$)),X.setMatrixAt(G,H),it.setMatrixAt(G,H),_t.copy(j.cooldown>0?nt:Lt).lerp(ht,j.pulse),X.setColorAt(G,_t),it.setColorAt(G,j.cooldown>0?nt:Lt)}X.instanceMatrix.needsUpdate=!0,it.instanceMatrix.needsUpdate=!0,X.instanceColor.needsUpdate=!0,it.instanceColor.needsUpdate=!0}Dt(0);let Mt=Kn(128,128,P=>{P.fillStyle="#f0702e",P.fillRect(0,0,128,128),P.fillStyle="#d95c20",P.fillRect(0,0,128,3),P.fillStyle="#fff3e0",Oc(P,64,70,.9)},{repeat:!0}),kt=Kn(128,128,P=>{P.fillStyle="#17181d",P.fillRect(0,0,128,128),P.fillStyle="#24262d",P.fillRect(0,0,128,3),P.fillStyle="#7a2b25",Oc(P,64,70,.95)},{repeat:!0}),Vt=Kn(128,128,P=>{P.fillStyle="#000",P.fillRect(0,0,128,128),P.fillStyle="#ff5a40",Oc(P,64,70,.95)},{repeat:!0}),Yt=new be({map:kt,emissiveMap:Vt,emissive:16777215,emissiveIntensity:1.6});for(let[P,G]of[["kicker",new be({map:Mt})],["launch",Yt]]){let j=x[P],$=new Xt;$.setAttribute("position",new Tt(j.pos,3)),$.setAttribute("uv",new Tt(j.uv,2)),$.setIndex(j.idx),$.computeVertexNormals();let R=new Ct($,G);R.castShadow=R.receiveShadow=!0,R.matrixAutoUpdate=!1,r.add(R)}let ye=Kn(256,256,P=>{P.clearRect(0,0,256,256),P.strokeStyle="#fff3e0",P.lineWidth=12,P.beginPath(),P.arc(128,128,116,0,7),P.stroke(),P.strokeStyle="#ff5a40",P.lineWidth=8,P.beginPath(),P.arc(128,128,74,0,7),P.stroke(),P.fillStyle="#fff3e0",P.beginPath(),P.arc(128,128,18,0,7),P.fill();for(let G=0;G<4;G++)P.save(),P.translate(128,128),P.rotate(G*Math.PI/2),P.fillRect(-5,-108,10,26),P.restore()}),ie=new pe({map:ye,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8});for(let P of h){let G=new Ct(new zi(P.r,28).rotateX(-Math.PI/2),ie);G.position.set(P.x,P.y+.06,P.z),G.matrixAutoUpdate=!1,G.updateMatrix(),G.renderOrder=2,r.add(G),P.done=!1}{let P=new Set;for(let st of t.roads)for(let mt of st.pts){let W=st.halfW+16;for(let tt=Math.floor((mt.x-W)/16);tt<=Math.floor((mt.x+W)/16);tt++)for(let yt=Math.floor((mt.z-W)/16);yt<=Math.floor((mt.z+W)/16);yt++)P.add(tt*4096+yt)}let G=new He,j=new He,$=new He;for(let st=0;st<4;st++)G.cyl(st*.22,1+st*1.9,0,.2-st*.02,.26-st*.02,2.1,st%2?9071178:8084801,5,0,0,-.12);for(let st=0;st<7;st++){let mt=st/7*Math.PI*2;G.box(.75+Math.sin(mt)*1.5,7.6,Math.cos(mt)*1.5,.9,.1,3.4,st%2?5216842:4163396,mt,.42)}j.cyl(0,.9,0,.22,.3,1.8,7032634,5),[[2.6,2,3,3107392],[4.3,1.5,2.6,3634503],[5.8,1,2.2,4162128]].forEach(([st,mt,W,tt])=>j.addGeometry(new lr(mt,W,6),j.matrix(0,st,0),tt)),$.cyl(0,1.2,0,.22,.3,2.4,7032634,5),$.addGeometry(new Gn(2.3,0),$.matrix(0,4,0,1,.9,1),6266188),$.addGeometry(new Gn(1.5,0),$.matrix(1.2,3.3,.6),6990165);let R={palm:[],pine:[],round:[]},S=new L;for(let st=0;st<26e3;st++){let mt=(o()-.5)*3700,W=(o()-.5)*3700,tt=s.heightAt(mt,W);if(tt<2.4||tt>215||mt>Rt.x0-34&&mt<Rt.x1+34&&W>Rt.z0-34&&W<Rt.z1+34||mt>ce.x0-6&&mt<ce.x1+14&&W>ce.z0-6&&W<ce.z1+6||P.has(Math.floor(mt/16)*4096+Math.floor(W/16))||Math.hypot(mt-ii.x,W-ii.z)<34||Math.hypot(mt-880,W-n)<40||s.normalAt(mt,W,S).y<.84)continue;let yt=Zn(mt*.0045+4,W*.0045-2,3,91),Et;if(tt<8.5){if(o()>.2)continue;Et="palm"}else if(tt<42){if(o()>(yt-.38)*3.2)continue;Et=o()<.12?"palm":"round"}else{if(o()>(yt-.3)*3.4)continue;Et=tt>70||o()<.6?"pine":"round"}R[Et].push([mt,tt,W])}for(let st of i.parks)for(let mt=0;mt<22;mt++){let W=st.x+(o()-.5)*2*(st.r-2),tt=st.z+(o()-.5)*2*(st.r-2);Math.hypot(W-st.x,tt-st.z)<13||R.round.push([W,Rt.y+hi,tt])}let U=new be({vertexColors:!0,flatShading:!0}),Z=new Jt,q=new Ee,V=new Pe,lt=new dt,rt=[];for(let[st,mt]of[["palm",G],["pine",j],["round",$]]){let W=R[st],tt=new wn(mt.build().geometry,U,W.length);W.forEach(([yt,Et,O],gt)=>{let ct=(st==="palm"?.95:st==="pine"?1.25:1.05)*(.75+o()*.7);q.setFromEuler(V.set((o()-.5)*.08,o()*Math.PI*2,(o()-.5)*.08)),Z.compose(S.set(yt,Et-.15,O),q,new L(ct,ct*(.85+o()*.35),ct)),tt.setMatrixAt(gt,Z),tt.setColorAt(gt,lt.setScalar(.82+o()*.36))}),tt.userData.full=W.length,tt.castShadow=!0,tt.receiveShadow=!1,tt.frustumCulled=!1,r.add(tt),rt.push(tt)}r.userData.trees=rt}r.add(a.build());let ve=new pe({vertexColors:!0});r.add(l.build(ve,!1));let z=new Xt;z.setAttribute("position",new Tt(g.flat(),3));let Ye=new ar({color:16726570,size:7,sizeAttenuation:!0,transparent:!0,blending:Ke,depthWrite:!1,fog:!1}),Qt=new Is(z,Ye);return Qt.frustumCulled=!1,r.add(Qt),{group:r,ramps:c,pads:h,rings:u,chains:E,spheres:f,launchMat:Yt,glowMat:ve,update(P,G,j){for(let R of d)R(P,G,j);Dt(P);let $=Math.pow(Math.max(0,Math.sin(G*3.2)),6);Ye.opacity=(.25+.75*$)*Math.min(1,.35+j),Ye.color.setRGB(6,.8,.5),ve.color.setScalar(.8+j*1.9),Yt.emissiveIntensity=.9+j*1.6}}}var Zo=class{constructor(t,e){let i=960;for(;i<1900&&Wo(880,i)>.3;)i+=4;this.pierZ=i,this.roads=new Xo(Wo,i),this.terrain=new Go(this.roads.roads),this.colliders=new Jn,this.terrainMesh=this.terrain.buildMesh(),t.add(this.terrainMesh),t.add(this.roads.buildMeshes(this.terrain)),t.add(this.roads.buildBridges(this.colliders,this.terrain)),this.city=Vu(this.colliders),t.add(this.city.group),this.props=Gu({terrain:this.terrain,roads:this.roads,colliders:this.colliders,city:this.city,pierZ:i}),t.add(this.props.group),this.sky=new Yo(t,e),this.water=Hu(this.terrain.buildHeightTexture()),t.add(this.water),this.rings=this.props.rings,this.chains=this.props.chains,this.pads=this.props.pads,this.ramps=this.props.ramps,this.spheres=this.props.spheres,this.time=0}ground(t,e,i,n){let r=this.terrain.heightAt(t,i),o=r,a;if(t>Rt.x0&&t<Rt.x1&&i>Rt.z0&&i<Rt.z1||t>ce.x0+28&&t<ce.x1-20&&i>ce.z0+10&&i<ce.z1-10)o+=hi,a="road";else{let c=this.roads.surfaceAt(t,i);o+=hi*c,a=c>.5?"road":r<3.6?"sand":"grass"}n.box=null;let l=this.colliders.near(t,i);if(l)for(let c=0;c<l.length;c++){let h=l[c],u=t-h.x,f=i-h.z,d=u*h.c-f*h.s;if(d<-h.hx||d>h.hx)continue;let g=u*h.s+f*h.c;if(g<-h.hz||g>h.hz)continue;let x=Jn.topAt(h,g);x<=e+.55&&x>o&&(o=x,n.box=h,a="road")}return n.h=o,n.surf=a,n.water=o<0,n}update(t,e,i){this.time+=t;let n=this.sky,r=n.v;n.update(t,e,i);let o=this.water.material.uniforms;o.uTime.value=this.time,o.uSunDir.value.copy(r.sunDir),o.uSunColor.value.copy(r.sun).multiplyScalar(Math.min(1.2,r.sunI/2.6)),o.uDeep.value.copy(r.deep),o.uShallow.value.copy(r.shallow),o.uFoam.value.copy(r.foam),o.uHorizon.value.copy(r.horizon),o.uZenith.value.copy(r.zenith),o.uFogColor.value.copy(r.fog),o.uFogDensity.value=r.fogD,this.city.mats.A.emissiveIntensity=r.windows,this.city.mats.B.emissiveIntensity=r.windows*.8,this.props.update(t,this.time,r.lamps)}};var he={frontZ:1.38,rearZ:-1.34,wheelbase:2.72,trackHalf:.85,rFront:.345,rRear:.362,wFront:.265,wRear:.315,height:1.16,length:4.42},vi=[{id:"white",name:"Aero White",color:"#cfd1ce",metal:.12,rough:.36,coat:.7,cost:0},{id:"cherry",name:"Cherry Red",color:"#a20d1c",metal:.55,rough:.3,coat:1,cost:1500},{id:"black",name:"Solid Black",color:"#0b0b0d",metal:.4,rough:.22,coat:1,cost:4e3},{id:"silver",name:"Midnight Silver",color:"#42464c",metal:.8,rough:.3,coat:1,cost:8e3},{id:"blue",name:"Deep Blue",color:"#0f2f72",metal:.65,rough:.28,coat:1,cost:13e3},{id:"quick",name:"Quicksilver",color:"#9a9fa6",metal:.95,rough:.2,coat:1,cost:2e4},{id:"stealth",name:"Stealth Grey",color:"#55585d",metal:.3,rough:.5,coat:.4,cost:28e3},{id:"ultra",name:"Ultra Red",color:"#d3101c",metal:.35,rough:.26,coat:1,cost:38e3},{id:"orange",name:"Sunset Orange",color:"#ee5a12",metal:.5,rough:.3,coat:1,cost:5e4},{id:"teal",name:"Aurora Teal",color:"#0f9d93",metal:.7,rough:.26,coat:1,cost:65e3},{id:"violet",name:"Ultraviolet",color:"#4a22b8",metal:.7,rough:.26,coat:1,cost:82e3},{id:"gold",name:"Solar Gold",color:"#c9961c",metal:.95,rough:.24,coat:1,cost:1e5},{id:"matte",name:"Matte Black",color:"#141416",metal:.2,rough:.78,coat:0,cost:125e3},{id:"chrome",name:"Liquid Chrome",color:"#c9ccd2",metal:1,rough:.06,coat:1,cost:15e4}],Ei={wb:Qe([[-2.2,.62],[-1.34,.8],[0,.84],[1.38,.8],[1.9,.7],[2.22,.46]]),yb:Qe([[-2.2,.36],[-1.9,.28],[-1.34,.17],[0,.15],[1.38,.15],[2,.16],[2.22,.2]]),ws:Qe([[-2.2,.8],[-1.34,.965],[-.6,.945],[.6,.935],[1.38,.945],[1.9,.85],[2.22,.54]]),ys:Qe([[-2.2,.42],[-1.34,.29],[0,.26],[1.38,.26],[2,.25],[2.22,.27]]),wm:Qe([[-2.2,.865],[-1.8,.985],[-1.34,1.03],[-.75,.99],[0,.93],[.75,.945],[1.38,.995],[1.9,.89],[2.22,.58]]),ym:Qe([[-2.2,.63],[-1.34,.66],[-.75,.6],[0,.52],[.75,.5],[1.38,.56],[1.9,.46],[2.22,.36]]),wsh:Qe([[-2.2,.8],[-1.34,.935],[-.75,.92],[0,.9],[.75,.895],[1.38,.885],[1.9,.76],[2.22,.46]]),ysh:Qe([[-2.2,.8],[-1.8,.89],[-1.34,.925],[-.75,.9],[0,.855],[.75,.815],[1.38,.805],[1.9,.63],[2.22,.44]]),wg:Qe([[-2.2,.7],[-1.34,.75],[-.75,.8],[0,.815],[.75,.8],[.95,.78],[1.38,.68],[1.9,.55],[2.22,.33]]),yg:Qe([[-2.2,.855],[-1.45,.965],[-.75,.915],[0,.875],[.75,.83],[.95,.815],[1.38,.735],[1.9,.61],[2.22,.44]]),wr:Qe([[-2.2,.42],[-1.45,.5],[-.9,.58],[-.05,.63],[.3,.6],[.95,.52],[1.38,.42],[1.9,.33],[2.22,.2]])},Xu=s=>t=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0])return Ot(s[e-1][1],s[e][1],(t-s[e-1][0])/(s[e][0]-s[e-1][0]));return s[s.length-1][1]},wx=Qe([[-1.45,.985],[-.9,1.085],[-.35,1.15],[-.05,1.16],[.3,1.13]]),Ex=Qe([[.95,.835],[1.4,.74],[1.85,.62],[2.1,.52],[2.22,.44]]),Tx=Xu([[-2.2,.868],[-2.1,.898],[-1.9,.908],[-1.45,.985]]),Ax=s=>s<-1.45?Tx(s):s<=.3?wx(s):s<.95?Ot(1.13,.835,(s-.3)/.65):Ex(s),Rx=Qe([[-1.45,.975],[-.9,1.06],[-.35,1.115],[-.05,1.125],[.3,1.1]]),Cx=Qe([[.95,.83],[1.38,.732],[1.85,.614],[2.1,.518],[2.22,.44]]),Px=Xu([[-2.2,.864],[-2.1,.892],[-1.9,.902],[-1.45,.975]]),Ix=s=>s<-1.45?Px(s):s<=.3?Rx(s):s<.95?Ot(1.1,.83,(s-.3)/.65):Cx(s),Hc=-1.45,Vc=.95,qi=-2.2,mr=2.22,Yu=[{z:he.frontZ,r:he.rFront,a:he.rFront+.052},{z:he.rearZ,r:he.rRear,a:he.rRear+.052}];function kc(s){let t=[[0,Ei.yb(s)],[Ei.wb(s),Ei.yb(s)],[Ei.ws(s),Ei.ys(s)],[Ei.wm(s),Ei.ym(s)],[Ei.wsh(s),Ei.ysh(s)],[Ei.wg(s),Ei.yg(s)],[Ei.wr(s),Ix(s)],[0,Ax(s)]];for(let e of Yu){let i=s-e.z;if(Math.abs(i)<e.a){let n=e.r+Math.sqrt(e.a*e.a-i*i);t[1][0]=.6,t[1][1]=Math.max(t[1][1],Math.min(n,t[5][1]-.09)),t[2][1]=Math.max(t[2][1],n),t[2][0]=Math.max(t[2][0],t[3][0]-.012),t[3][1]=Math.max(t[3][1],n+.03),t[4][1]=Math.max(t[4][1],t[3][1]+.03)}}return t}function Jo(s,t,e){let i=Math.min(6,Math.floor(t)),n=t-i;if(i<2)return e[0]=Ot(s[i][0],s[i+1][0],n),e[1]=Ot(s[i][1],s[i+1][1],n),e;let r=i===2?s[2]:s[i-1],o=s[i],a=s[i+1],l=i===6?[-s[6][0],s[6][1]]:s[i+2],c=n*n,h=c*n;for(let u=0;u<2;u++)e[u]=.5*(2*o[u]+(a[u]-r[u])*n+(2*r[u]-5*o[u]+4*a[u]-l[u])*c+(-r[u]+3*o[u]-3*a[u]+l[u])*h);return e}var Wu=(s,t,e)=>Math.max(0,1-Math.abs(s-t)/e);function Ko(s,t,e){let i=Pt((t-5)/2,0,1),n=i*(2-i),r=.13*n*Wu(s,Vc,.55)-.15*n*Wu(s,Hc,.6);return r-=.4*jt(1.45,mr,s)*e*e,r+=.17*jt(-1.7,qi,s)*e*e,s+r}var ni=[0,0];function Lx(s,t,e,i=0,n=new L){let r=kc(s);Jo(r,t,ni);let o=ni[0],a=ni[1];if(n.set(o*e,a,Ko(s,t,o)),i){Jo(r,Math.min(7,t+.02),ni);let c=new L(ni[0]*e-n.x,ni[1]-a,Ko(s,t+.02,ni[0])-n.z);Jo(kc(s+.02),t,ni);let h=new L(ni[0]*e-n.x,ni[1]-a,Ko(s+.02,t,ni[0])-n.z),u=c.cross(h).normalize();(u.x*e<0&&Math.abs(u.x)>.2||Math.abs(u.x)<=.2&&u.y<0)&&u.negate(),n.addScaledVector(u,i)}return n}function Dx(){let s=[];for(let i=qi;i<mr-.03;i+=.105)s.push(i);s.push(mr,mr-.045,qi+.04);let t=[Hc,Vc,.3];for(let i of Yu)for(let n=0;n<=12;n++)t.push(i.z+i.a*Math.cos(n/12*Math.PI)*.9999);let e=s.filter(i=>!t.some(n=>Math.abs(n-i)<.04)).concat(t);return e.sort((i,n)=>i-n),e}var Qn=[0,1,2,2.5,3,3.5,4,4.5,5,5.34,5.67,6,6.34,6.67,7];function Ux(){let s=Dx(),t=Qn.length,e=[];for(let u=0;u<s.length;u++){let f=kc(s[u]),d=[];for(let g=0;g<t;g++)Jo(f,Qn[g],ni),d.push([ni[0],ni[1],Ko(s[u],Qn[g],ni[0])]);e.push(d)}let i={paint:{pos:[],idx:[],map:new Map},glass:{pos:[],idx:[],map:new Map},trim:{pos:[],idx:[],map:new Map}},n=(u,f,d,g)=>{let x=e[f][d],m=f*1e3+d*4+(x[0]<1e-5?0:g+2),p=u.map.get(m);return p===void 0&&(p=u.pos.length/3,u.pos.push(x[0]*g,x[1],x[2]),u.map.set(m,p)),p},r=(u,f,d,g)=>(u.pos.push(f,d,g),u.pos.length/3-1),o=(u,f,d,g,x)=>{d===g||g===x||d===x||(f?u.idx.push(d,x,g):u.idx.push(d,g,x))},a=Math.floor(s.length/2),l=3,c=(u,f,d,g)=>{let x=(f[0]-u[0])*g,m=f[1]-u[1],p=f[2]-u[2],y=(d[0]-u[0])*g,M=d[1]-u[1],v=d[2]-u[2];return[m*v-p*M,p*y-x*v,x*M-m*y]};for(let u of[1,-1]){let f=c(e[a][l],e[a+1][l],e[a+1][l+1],u)[0]*u<0;for(let d=0;d<s.length-1;d++){let g=(s[d]+s[d+1])/2;for(let x=0;x<t-1;x++){let m=(Qn[x]+Qn[x+1])/2,p=m<2?i.trim:m<5?i.paint:g>Hc&&g<Vc?i.glass:i.paint,y=n(p,d,x,u),M=n(p,d+1,x,u),v=n(p,d+1,x+1,u),C=n(p,d,x+1,u);o(p,f,y,M,v),o(p,f,y,v,C)}}for(let[d,g,x]of[[0,-.03,3],[s.length-1,.035,2]]){let m=e[d],p=(m[0][1]+m[t-1][1])/2+(d===0?.02:-.03),y=[0,p,m[0][2]+g],M=c(m[l],m[l+1],y,u)[2]*g<0;for(let v=0;v<t-1;v++){let C=(Qn[v]+Qn[v+1])/2<x?i.trim:i.paint,w=`cap${d}`;C[w]===void 0&&(C[w]=r(C,y[0],y[1],y[2])),o(C,M,n(C,d,v,u),n(C,d,v+1,u),C[w])}}}let h={};for(let u in i){let f=new Xt;f.setAttribute("position",new Tt(i[u].pos,3)),f.setIndex(i[u].idx),f.computeVertexNormals(),h[u]=f}return h}function $o(s,t,e,i,n,r=.006,o=2){let a=[],l=[],c=o+1;for(let u of[1,-1]){let f=a.length/3;for(let d=0;d<=n;d++){let g=d/n,x=Ot(s,t,g),[m,p]=typeof e=="function"?[e(g),i(g)]:[e,i];for(let y=0;y<c;y++){let M=Lx(x,Ot(m,p,y/o),u,r);a.push(M.x,M.y,M.z)}if(d>0){let y=f+(d-1)*c,M=f+d*c;for(let v=0;v<o;v++)u>0?l.push(y+v,M+v,y+v+1,y+v+1,M+v,M+v+1):l.push(y+v,y+v+1,M+v,y+v+1,M+v+1,M+v)}}}let h=new Xt;return h.setAttribute("position",new Tt(a,3)),h.setIndex(l),h.computeVertexNormals(),h}function Nx(s,t,e){let i=new fe,n=[[s-.1,-t/2],[s-.03,-t/2],[s,-t/2+.035],[s,t/2-.035],[s-.03,t/2],[s-.1,t/2]],r=new Ct(new vo(n.map(p=>new xt(p[0],p[1])),22).rotateZ(-Math.PI/2),e.tire),o=s-.095,a=t/2-.035,l=new He,c=new He,h=new Jt,u=new Jt;l.addGeometry(new zi(o,22).rotateY(Math.PI/2),h.makeTranslation(t*.18,0,0),16777215),l.addGeometry(new Ue(.062,.07,.05,12).rotateZ(-Math.PI/2),h.makeTranslation(a,0,0),16777215);let f=new Ct(new Ue(o*.78,o*.78,.02,20).rotateZ(Math.PI/2).translate(t*.2,0,0),e.brake),d=9,g=new De(.022,o-.05,.016).translate(0,(o-.05)/2+.05,0);for(let p=0;p<d;p++)for(let y of[-.085,.085])c.addGeometry(g,h.makeTranslation(a,0,0).multiply(u.makeRotationX(p/d*Math.PI*2+y)),16777215);c.addGeometry(new Xi(o-.012,.014,5,26).rotateY(Math.PI/2),h.makeTranslation(a,0,0),16777215);let x=l.build(e.rimDark,!1),m=c.build(e.rim,!1);return x.matrixAutoUpdate=m.matrixAutoUpdate=!0,i.add(r,x,f,m),r.castShadow=!0,i}var Qo=class{constructor(){this.root=new fe,this.body=new fe,this.root.add(this.body);let t=this.mats={paint:new bo({color:13619662,metalness:.12,roughness:.3,clearcoat:1,clearcoatRoughness:.13,envMapIntensity:1.1}),glass:new li({color:7031324,metalness:1,roughness:.24,envMapIntensity:1.35}),titan:new li({color:9277847,metalness:.92,roughness:.34}),trim:new li({color:789775,metalness:.3,roughness:.55}),tire:new li({color:1250327,roughness:.9,metalness:0}),rim:new li({color:10133157,metalness:.95,roughness:.3}),rimDark:new li({color:1513499,metalness:.7,roughness:.5}),brake:new li({color:4869458,metalness:.8,roughness:.45}),head:new pe({color:16777215}),tail:new pe({color:16719892}),nozzle:new pe({color:0})};t.head.color.setRGB(3.4,3.5,3.8),t.tail.color.setRGB(3.4,.07,.05);let e=Ux();for(let o of["paint","glass","trim"]){let a=new Ct(e[o],t[o]);a.castShadow=!0,this.body.add(a)}let i=(o,a,l=!1)=>{let c=new Ct(o,a);return c.castShadow=l,this.body.add(c),c};{let o=[],a=[];for(let f=0;f<=16;f++){let d=Ot(-.5,.5,f/16),g=Ot(mr+.047,2.116,Math.abs(d)/.55);if(o.push(d,.298,g,d,.318,g),f>0){let x=(f-1)*2,m=f*2;a.push(x,m,x+1,m,m+1,x+1)}}let u=new Xt;u.setAttribute("position",new Tt(o,3)),u.setIndex(a),i(u,t.head)}i($o(qi+.012,qi+.3,o=>Ot(3.5,3.6,o),o=>Ot(3.66,3.66,o),4),t.tail);{let o=[],a=[];for(let f=0;f<=14;f++){let d=Ot(-.8,.8,f/14),g=qi+.17*d*d-.034+Math.abs(d)*.012;if(o.push(d,.748,g,d,.766,g),f>0){let x=(f-1)*2,m=f*2;a.push(x,x+1,m,m,x+1,m+1)}}let u=new Xt;u.setAttribute("position",new Tt(o,3)),u.setIndex(a),i(u,t.tail)}i($o(.74,.95,o=>Ot(2.5,2.9,o),o=>Ot(3.5,3.25,o),3),t.trim),i($o(.6,.612,2,4.95,1,.004,10),t.trim),i($o(-.66,-.648,2,4.95,1,.004,10),t.trim);for(let o of[-.42,-.14,.14,.42])i(new De(.02,.13,.3).translate(o,.43,qi+.14),t.trim);for(let o of[1,-1])i(new De(.14,.02,.04).translate(o*.92,.868,.6),t.trim),i(new De(.03,.055,.13).translate(o*1,.878,.59),t.titan,!0).geometry.computeVertexNormals();this.nozzles=[];for(let o of[-.26,0,.26])i(new Ue(.062,.075,.12,10).rotateX(Math.PI/2).translate(o,.56,qi+.03),t.trim),i(new zi(.052,10).rotateY(Math.PI).translate(o,.56,qi-.032),t.nozzle),this.nozzles.push(new L(o,.56,qi-.04));this.wheels=[];let n=[{z:he.frontZ,s:1,r:he.rFront,w:he.wFront,front:!0},{z:he.frontZ,s:-1,r:he.rFront,w:he.wFront,front:!0},{z:he.rearZ,s:1,r:he.rRear,w:he.wRear},{z:he.rearZ,s:-1,r:he.rRear,w:he.wRear}],r=this.jetMat=new pe({color:new dt(1.2,2.6,3.4),transparent:!0,opacity:0,blending:Ke,depthWrite:!1,side:Ne});for(let o of n){let a=new fe,l=new fe,c=new fe,h=o.s*(he.trackHalf+(o.front?0:.012)-o.w/2+.13);a.position.set(h,o.r,o.z);let u=Nx(o.r,o.w,t);o.s<0&&(u.rotation.y=Math.PI),c.add(u),l.add(c),a.add(l);let f=new Ct(new zi(o.r*.82,18).rotateY(o.s>0?Math.PI/2:-Math.PI/2),r);f.position.x=o.s*(o.w/2+.012),a.add(f),this.body.add(a),this.wheels.push({pivot:a,steer:l,spin:c,home:a.position.clone(),...o})}this.fold=0,this.spinAngle=0,this.setPaint(vi[0])}setPaint(t){let e=this.mats.paint;e.color.set(t.color),e.metalness=t.metal,e.roughness=Math.max(t.rough,.14),e.clearcoat=t.coat,this.paint=t}pose(t,e,i,n){this.fold=t,this.spinAngle+=i;let r=t*t*(3-2*t);for(let o of this.wheels)o.pivot.rotation.z=-o.s*r*Math.PI/2,o.pivot.position.set(Ot(o.home.x,o.s*.74,r),Ot(o.home.y,.31,r),o.home.z),o.steer.rotation.y=o.front?e*(1-r):0,o.spin.rotation.x=this.spinAngle*(1-r)+r*this.spinAngle*.2;this.jetMat.opacity=r*n}setLights(t,e){let i=this.mats.tail.color,n=1+t*1.6+e*.3;i.setRGB(3.4*n,.07*n,.05*n);let r=3.2+e*3;this.mats.head.color.setRGB(r,r*1.03,r*1.12)}setThrust(t){this.mats.nozzle.color.setRGB(3*t,5*t,7*t)}};var Fx=66,zx=92,ta=100,Ox=15,qu=23,Bx=15,Zu=720,Gc=2500,jo=1,$u=1.15,Wc=1.15,Ti=new Pe(0,0,0,"YXZ"),Ju=new Ee,gr=new L,Ce={h:0,surf:"road",box:null,water:!1},kx={h:0,surf:"road",box:null,water:!1},ea=class{constructor(t){this.world=t,this.pos=new L,this.prev=new L,this.vel=new L,this.quat=new Ee,this.angVel=new L,this.events=[],this.near=[],this.safe={x:We.x,z:We.z,yaw:We.yaw},this.time=0,this.reset(We.x,We.z,We.yaw)}reset(t,e,i){this.world.ground(t,5e3,e,Ce),this.pos.set(t,Math.max(Ce.h,0),e),this.prev.copy(this.pos),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.yaw=i,this.pitch=0,this.roll=0,this.yawRate=0,this.mode="drive",this.fold=0,this.foldTarget=0,this.steer=0,this.speed=0,this.slip=0,this.boost=1,this.boosting=!1,this.braking=!1,this.thrust=0,this.lift=0,this.offGround=0,this.airTime=0,this.flyTime=0,this.launchAssist=0,this.recover=0,this.rollTrick=0,this.rollDir=0,this.pitchLock=!1,this.launching=!1,this.lastThrottle=0,this.surf="road",this.groundY=this.pos.y,this.alt=0,this.overWater=!1,this.lastRamp=null,this.lastRampT=-9,this.underT=-9,this.underAward=-9,this.hitT=-9,this.safeT=0,this.syncQuat()}syncQuat(){Ti.set(this.pitch,this.yaw,this.roll+this.rollTrick,"YXZ"),this.quat.setFromEuler(Ti)}eulerFromQuat(){Ti.setFromQuaternion(this.quat,"YXZ"),this.yaw=Ti.y,this.pitch=Ti.x,this.roll=Ti.z}emit(t,e){this.events.push(Object.assign({type:t},e))}engageFlight(t=!1){if(this.mode==="fly")return;let e=this.mode==="drive";this.mode==="air"&&this.eulerFromQuat(),this.mode="fly",this.launching=!1,this.foldTarget=1,this.flyTime=0,this.rollTrick=0,this.launchAssist=t?1.5:0,e&&(this.pos.y+=.25,this.vel.y=Math.max(this.vel.y,7.5),this.launchAssist=.45),this.emit("engage",{fromRamp:t,wasGround:e})}dropFlight(){this.mode==="fly"&&(this.syncQuat(),this.mode="air",this.foldTarget=0,this.airTime=0,this.angVel.set(0,0,0),this.emit("disengage",{}))}step(t,e){if(this.time+=t,this.prev.copy(this.pos),this.mode==="sunk"){this.vel.multiplyScalar(1-3*t),this.pos.addScaledVector(this.vel,t),this.thrust=this.lift=0,this.speed=0;return}e.fly&&(this.mode==="fly"?this.dropFlight():this.engageFlight(!1)),this.mode==="drive"?this.stepDrive(t,e):this.mode==="air"?this.stepAir(t,e):this.stepFly(t,e),this.collide(t),this.fold=Pt(this.fold+Math.sign(this.foldTarget-this.fold)*t/.42,0,1),Math.abs(this.fold-this.foldTarget)<t/.42&&(this.fold=this.foldTarget);let i=Math.hypot(this.pos.x,this.pos.z);if(i>Gc){let n=Math.atan2(-this.pos.x,-this.pos.z);this.mode!=="air"?this.yaw=An(this.yaw,n,jt(Gc,Gc+500,i)*1.6,t):(this.vel.x-=this.pos.x/i*30*t,this.vel.z-=this.pos.z/i*30*t),this.time-(this.edgeT||-9)>6&&(this.edgeT=this.time,this.emit("edge",{}))}this.mode!=="air"&&this.syncQuat(),this.speed=Math.hypot(this.vel.x,this.vel.z)}stepDrive(t,e){let i=this.world,n=this.pos;this.lastThrottle=e.throttle,this.steer=se(this.steer,-e.steer,8,t);let r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this.vel.x*r+this.vel.z*o,l=this.offGround<.05,c=this.surf==="road"?1:this.surf==="grass"?.82:.66,h=e.shift&&Math.abs(a)>4,u=Ot(.6,.075,jt(0,72,Math.abs(a))),f=a*Math.tan(this.steer*u)/he.wheelbase,d=(h?31:25)*c/Math.max(Math.abs(a),7);f=Pt(f,-d,d)*(h?1.5:1),l&&(this.yaw+=f*t),this.yawRate=f,r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this.vel.x*r+this.vel.z*o;let g=this.vel.x*o-this.vel.z*r,x=he.trackHalf,m=(X,Q)=>i.ground(n.x+X*o+Q*r,n.y,n.z-X*r+Q*o,kx).h,p=m(x,he.frontZ),y=m(-x,he.frontZ),M=m(x,he.rearZ),v=m(-x,he.rearZ);i.ground(n.x,n.y,n.z,Ce);let C=(p+y)/2,w=(M+v)/2,E=Math.max(Ce.h,(C+w)/2);this.surf=Ce.surf,this.groundY=E,this.alt=n.y-E,this.overWater=Ce.water,Ce.box&&Ce.box.kind==="ramp"&&(this.lastRamp=Ce.box,this.lastRampT=this.time);let A=0;Math.abs(C-w)<1.6&&(A=(C-w)/he.wheelbase,this.pitch=se(this.pitch,-Math.atan(A),l?14:3,t)),Math.abs(p+M-y-v)<2.4&&(this.roll=se(this.roll,Math.atan((p+M-y-v)/(4*x)),l?12:3,t)),this.boosting=e.boost&&this.boost>.01&&e.throttle>=0&&a>-1;let b=this.boosting?zx:Fx,_=0;if(this.braking=!1,this.boosting||e.throttle>0){let X=this.boosting?1:e.throttle;a<0?_=30*X:_=(this.boosting?27:16)*X*Pt(1-Math.pow(a/b,2.2),-.4,1)}else e.throttle<0&&(a>.6?(_=36*e.throttle,this.braking=!0):_=10*e.throttle*Pt(1+a/Bx,0,1));let I=this.surf==="road"?.35:this.surf==="grass"?2:3.4;_-=Math.sign(a)*I*Math.min(1,Math.abs(a)/2)+5e-4*a*Math.abs(a),h&&(_-=Math.sign(a)*5),!this.boosting&&e.throttle===0&&Math.abs(a)<.4&&(a=0),_-=qu*.75*A/Math.sqrt(1+A*A),this.accel=l&&(this.boosting||e.throttle>0)?Math.max(0,_):0,l&&(a+=_*t*(this.surf==="road"?1:this.boosting?.9:.86),g*=Math.exp(-(h?2.3:11.5)*c*t)),this.slip=Math.abs(g),this.boost=Pt(this.boost+(this.boosting?-.3:.085)*t,0,1),this.thrust=se(this.thrust,this.boosting?1:0,8,t),this.lift=se(this.lift,0,6,t),this.vel.x=r*a+o*g,this.vel.z=o*a-r*g,n.x+=this.vel.x*t,n.z+=this.vel.z*t;let N=this.vel.y-qu*t,k=n.y+N*t;if(k>E+.015?(n.y=k,this.vel.y=N,this.offGround+=t,this.offGround>.085&&k-E>.4&&this.takeOff()):(this.vel.y=Pt((E-n.y)/t,-30,45),this.offGround>.2&&this.emit("thump",{impact:-N}),n.y=E,this.offGround=0),this.overWater&&n.y<-.55)return this.sink();l&&!this.overWater&&E>1.5&&this.time-this.safeT>1.2&&Math.abs(a)>2&&this.time-this.hitT>1.5&&(this.safeT=this.time,this.safe.x=n.x-r*4,this.safe.z=n.z-o*4,this.safe.yaw=this.yaw)}sink(){this.mode="sunk",this.vel.y=Math.max(this.vel.y,-3),this.boosting=this.braking=!1,this.emit("splash",{})}takeOff(){this.mode="air",this.airTime=this.offGround,this.pitchLock=this.lastThrottle>0,this.angVel.set(0,this.yawRate*.35,0),this.syncQuat();let t=this.time-this.lastRampT<.25?this.lastRamp:null,e=Math.hypot(this.vel.x,this.vel.z);this.emit("jump",{ramp:t,speed:e}),t&&t.launch&&e>36&&this.emit("launch",{ramp:t,speed:e})}stepAir(t,e){let i=this.pos;if(this.airTime+=t,this.steer=se(this.steer,0,6,t),this.thrust=se(this.thrust,0,8,t),this.boosting=!1,this.braking=!1,e.boostPressed&&this.airTime>.12&&this.recover<=0)return this.engageFlight(!1);this.vel.y-=Ox*t;let n=1-.035*t;this.vel.x*=n,this.vel.z*=n,i.addScaledVector(this.vel,t),this.pitchLock&&e.throttle<=0&&(this.pitchLock=!1);let r=this.launching?0:1,o=this.pitchLock?0:e.throttle*r,a=o!==0||e.steer*r!==0||e.roll*r!==0;this.angVel.x=se(this.angVel.x,o*4.4,7,t),this.angVel.y=se(this.angVel.y,-e.steer*3.8*r,7,t),this.angVel.z=se(this.angVel.z,e.roll*6*r,7,t);let l=this.angVel,c=l.length();if(c>1e-4&&(Ju.setFromAxisAngle(gr.copy(l).divideScalar(c),c*t),this.quat.multiply(Ju).normalize()),this.recover>0||!a&&this.airTime>.3){Ti.setFromQuaternion(this.quat,"YXZ");let h=this.recover>0?9:1.7;Ti.x=se(Ti.x,Pt(-Math.atan2(this.vel.y,Math.max(8,Math.hypot(this.vel.x,this.vel.z)))*.35,-.3,.3),h,t),Ti.z=se(Ti.z,0,h,t),this.quat.setFromEuler(Ti),this.recover-=t}if(this.world.ground(i.x,i.y+.2,i.z,Ce),this.groundY=Ce.h,this.overWater=Ce.water,this.alt=i.y-Math.max(Ce.h,0),Ce.water&&i.y<-.5)return this.sink();if(i.y<=Ce.h){let h=-this.vel.y,u=gr.set(0,1,0).applyQuaternion(this.quat).y;i.y=Ce.h,u>.5?(this.eulerFromQuat(),this.mode="drive",this.launching=!1,this.offGround=0,this.vel.y=0,this.surf=Ce.surf,this.emit("land",{impact:h,airTime:this.airTime,clean:u>.9,fromFlight:!1,x:i.x,y:i.y,z:i.z})):(this.vel.y=Pt(h*.35,3.5,7),this.vel.x*=.6,this.vel.z*=.6,this.recover=.5,this.airTime=0,this.angVel.set(0,0,0),this.hitT=this.time,this.emit("crash",{impact:Math.max(h,8),flipped:!0}))}}stepFly(t,e){let i=this.pos,n=this.world;this.flyTime+=t,this.steer=se(this.steer,-e.steer,6,t);let r=Math.hypot(this.vel.x,this.vel.z),o=Pt(r/ta,0,1);this.yawRate=se(this.yawRate,-e.steer*Ot(1.75,.8,o),5.5,t),this.yaw+=this.yawRate*t;let a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=this.vel.x*a+this.vel.z*l,h=this.vel.x*l-this.vel.z*a;e.throttle>0?c+=26*e.throttle*Pt(1-c/ta,0,1)*t:e.throttle<0?c+=(c>0?34:12*Pt(1+c/12,0,1))*e.throttle*t:c-=c*.2*t,h*=Math.exp(-3.4*t),this.vel.x=a*c+l*h,this.vel.z=l*c-a*h,this.braking=e.throttle<0&&c>1,this.boosting=!1;let u=e.boost?27:e.shift?-30:0;i.y>Zu-80&&(u=Math.min(u,(Zu-i.y)*.35));let f=-(2.5+this.alt*1.7);if(this.alt<14&&(u=Math.max(u,f)),this.launchAssist-=t,this.vel.y=se(this.vel.y,u,this.launchAssist>0&&!e.shift?.35:this.alt<14&&this.vel.y<f?11:3.3,t),i.addScaledVector(this.vel,t),this.thrust=se(this.thrust,.35+.65*Math.max(0,e.throttle)*(1-o*.4)+(e.boost?.3:0),6,t),this.lift=se(this.lift,.55+(e.boost?.45:0)-(e.shift?.25:0),6,t),this.pitch=se(this.pitch,Pt(-Math.atan2(this.vel.y,Math.max(Math.abs(c),24))*.9+e.throttle*.035,-.7,.7),5,t),this.roll=se(this.roll,Pt(-this.yawRate*(.3+.42*o),-1,1),5,t),this.rollDir===0&&e.roll!==0&&this.flyTime>.3&&(this.rollDir=e.roll,this.rollT=0),this.rollDir!==0){this.rollT+=t/.72;let p=Math.min(this.rollT,1),y=p*p*(3-2*p);this.rollTrick=this.rollDir*y*Math.PI*2,p>=1&&(this.rollTrick=0,this.emit("barrel",{}),this.rollDir=0)}n.ground(i.x,i.y+.6,i.z,Ce);let d=Ce.water,g=d?0:Ce.h;this.groundY=g,this.overWater=d,this.alt=i.y-g,this.surf=Ce.surf;let x=!d&&this.rollDir===0&&(this.alt<4&&this.vel.y<-.6||e.shift&&this.alt<9);this.foldTarget=x?0:1;let m=d?.6:.5*this.fold;if(!d&&this.foldTarget===0&&this.fold<.4&&i.y<=g+.03){let p=-this.vel.y;i.y=g,this.mode="drive",this.offGround=0,this.vel.y=0,this.rollTrick=0,this.rollDir=0,this.emit("land",{impact:p,airTime:this.flyTime,clean:!0,fromFlight:!0,x:i.x,y:i.y,z:i.z,box:Ce.box});return}if(i.y<g+m){if((g+m-i.y)/t>46&&r>20&&!d){n.terrain.normalAt(i.x,i.z,gr);let y=this.vel.dot(gr);y<0&&this.vel.addScaledVector(gr,-1.5*y),this.vel.multiplyScalar(.62),this.hitT=this.time,this.emit("crash",{impact:Math.max(10,-y)})}else this.vel.y<-17&&!d?(this.vel.y=5,this.vel.x*=.75,this.vel.z*=.75,this.hitT=this.time,this.emit("crash",{impact:12})):this.vel.y<0&&(this.vel.y=se(this.vel.y,0,14,t));i.y=Math.max(i.y,Ot(i.y,g+m,1-Math.exp(-18*t))),i.y<g+.05&&(i.y=g+.05),this.skim=d?"water":"ground"}else this.skim=this.alt<3.2?d?"water":"ground":null}collide(t){let e=this.world,i=this.pos,n=Math.sin(this.yaw),r=Math.cos(this.yaw),o=e.colliders.near(i.x,i.z),a=i.y+.12,l=i.y+Wc,c=this.speed,h=this.stamp=(this.stamp||0)+1,u=!1;if(o)for(let f=0;f<2;f++){let d=(f?-1:1)*$u*n,g=(f?-1:1)*$u*r;for(let x=0;x<o.length;x++){let m=o[x],p=i.x+d-m.x,y=i.z+g-m.z,M=p*m.c-y*m.s,v=p*m.s+y*m.c,C=Math.abs(M)-m.hx,w=Math.abs(v)-m.hz;if(C>6||w>6)continue;let E=Jn.topAt(m,v);if(a>=E-.55)continue;let A=C<0&&w<0;if(l<=m.y0){A&&m.kind==="deck"&&m.y0-l<14&&(u=!0);continue}let b=A?-1:Math.hypot(Math.max(C,0),Math.max(w,0))-jo;if(b>=0){if(b<4.2&&c>26&&!m.quiet){let H=this.near.find(at=>at.box===m);H||this.near.push(H={box:m,gap:b,stamp:h}),H.gap=Math.min(H.gap,b),H.stamp=h}continue}if(A&&this.prev.y+Wc<=m.y0+.3&&this.vel.y>0){i.y=m.y0-Wc-.02,this.vel.y=-1;continue}let _,I,N;if(A)-C<-w?(_=Math.sign(M)||1,I=0,N=-C+jo):(_=0,I=Math.sign(v)||1,N=-w+jo);else{let H=M-Pt(M,-m.hx,m.hx),at=v-Pt(v,-m.hz,m.hz),ut=Math.hypot(H,at)||1e-6;_=H/ut,I=at/ut,N=jo-ut}let k=_*m.c+I*m.s,X=-_*m.s+I*m.c;i.x+=k*N,i.z+=X*N;let Q=this.vel.x*k+this.vel.z*X;if(Q<0){let H=this.mode==="fly"?1.4:1.22;this.vel.x-=k*Q*H,this.vel.z-=X*Q*H;let at=1-Math.min(.3,-Q*.012);this.vel.x*=at,this.vel.z*=at,-Q>3.5&&this.time-this.hitT>.25&&(this.hitT=this.time,this.emit(-Q>9?"crash":"scrape",{impact:-Q,x:i.x+d-k,y:i.y+.5,z:i.z+g-X}))}let Y=n*k+r*X;if(Y<-.05&&this.mode!=="air"){let H=n-k*Y,at=r-X*Y;Math.hypot(H,at)<.25&&(H=-X,at=k),this.yaw=An(this.yaw,Math.atan2(H,at),this.mode==="fly"?8:5,t)}let it=this.near.findIndex(H=>H.box===m);it>=0&&this.near.splice(it,1)}}for(let f=this.near.length-1;f>=0;f--){let d=this.near[f];d.stamp!==h&&(this.near.splice(f,1),this.time-this.hitT>.7&&this.time-(d.box.nearT||-9)>5&&(d.box.nearT=this.time,this.emit("near",{gap:d.gap,kind:d.box.kind})))}u?this.underT=this.time:this.time-this.underT<.1&&this.time-this.underAward>6&&c>22&&this.mode!=="drive"&&this.time-this.hitT>1&&(this.underAward=this.time,this.emit("under",{}));for(let f of e.spheres){let d=i.x-f.x,g=i.y+.6-f.y,x=i.z-f.z,m=f.r+1.1,p=d*d+g*g+x*x;if(p<m*m){let y=Math.sqrt(p)||1,M=d/y,v=g/y,C=x/y;i.x+=M*(m-y),i.y+=v*(m-y),i.z+=C*(m-y);let w=this.vel.x*M+this.vel.y*v+this.vel.z*C;w<0&&(this.vel.x-=M*w*1.5,this.vel.y-=v*w*1.5,this.vel.z-=C*w*1.5,this.time-this.hitT>.3&&(this.hitT=this.time,this.emit("crash",{impact:Math.max(9,-w),soft:!0})))}else p<(m+5)*(m+5)&&c>26&&this.time-(f.nearT||-9)>6&&this.time-this.hitT>1?f.pending=this.time:f.pending&&p>(m+9)*(m+9)&&(this.time-f.pending<2&&this.time-this.hitT>1&&(f.nearT=this.time,this.emit("near",{gap:2,kind:"balloon"})),f.pending=0)}}respawn(){let t=this.safe,e=this.boost;this.reset(t.x,t.z,t.yaw),this.boost=e}};var si=new L,me=new L,xr=new L,hn={h:0},ia=class{constructor(t,e){this.cam=t,this.world=e,this.yaw=0,this.orbitYaw=0,this.orbitPitch=0,this.manual=0,this.zoom=1,this.focus=new L,this.look=new L,this.fov=60,this.shake=0,this.kick=0,this.roll=0,this.time=0,this.cine=null,this.orbit={yaw:.7,pitch:.16,dist:7,roll:0,fov:42,panX:0,panY:0,floor:null},this.sens=1,this.snapNext=!0}snap(t){this.yaw=t.yaw,this.focus.copy(t.pos).y+=1.05,this.orbitYaw=this.orbitPitch=0,this.snapNext=!0}addShake(t){this.shake=Math.min(1.2,this.shake+t)}aspectFov(t){let e=this.cam.aspect;if(e>=1.2)return t;let i=2*Math.atan(Math.tan(t*Math.PI/360)*1.2);return Pt(2*Math.atan(Math.tan(i/2)/e)*180/Math.PI,t,96)}startCinematic(t,e){let i=Math.sin(t.yaw),n=Math.cos(t.yaw),r=this.world.sky.v.sunDir,o=r.x*n-r.z*i>0?1:-1,a=new L(t.pos.x+i*21+n*o*10.5,t.pos.y+.6,t.pos.z+n*21-i*o*10.5);this.world.ground(a.x,a.y+50,a.z,hn),a.y=Math.max(a.y,hn.h+1.4),this.cine={t:0,duration:e,pos:a,side:o}}update(t,e,i,n={}){this.time+=t;let r=this.cam,o=e.speed,a=e.mode==="fly",l=Pt(o/ta,0,1),c=e.yaw;if(e.mode==="air")c=o>6?Math.atan2(e.vel.x,e.vel.z):this.yaw;else if(o>9&&e.mode==="drive"){let M=Math.atan2(e.vel.x,e.vel.z);c=Math.cos(M-e.yaw)>0?e.yaw+Pt(Math.atan2(Math.sin(M-e.yaw),Math.cos(M-e.yaw)),-.6,.6)*.45:e.yaw}n.lookBack&&(c+=Math.PI),this.yaw=this.snapNext?c:An(this.yaw,c,n.lookBack?14:3.2+l*4,t),i&&(i.x||i.y)&&(this.orbitYaw-=i.x*.0052*this.sens,this.orbitPitch=Pt(this.orbitPitch+i.y*.004*this.sens,-.5,1.15),this.manual=2.2),i&&i.zoom&&(this.zoom=Pt(this.zoom+i.zoom*.1,.7,2.2)),this.manual-=t,this.manual<=0&&o>3&&(this.orbitYaw=An(this.orbitYaw,0,2.5,t),this.orbitPitch=se(this.orbitPitch,0,2.5,t));let h=r.aspect<1?1.22:1,u=(a?8.2+l*3:6.5+l*2.2)*this.zoom*h,f=Pt(e.vel.y/40,-.5,.5),d=Pt((a?.21:.19)+this.orbitPitch-(a||e.mode==="air"?f*.28:0),-.45,1.3),g=this.yaw+this.orbitYaw;si.copy(e.pos),si.y+=1.05,this.snapNext?this.focus.copy(si):(this.focus.x=se(this.focus.x,si.x,22,t),this.focus.z=se(this.focus.z,si.z,22,t),this.focus.y=se(this.focus.y,si.y,12,t)),me.set(this.focus.x-Math.sin(g)*Math.cos(d)*u,this.focus.y+Math.sin(d)*u+.25,this.focus.z-Math.cos(g)*Math.cos(d)*u);for(let M=0;M<5&&(this.world.ground(me.x,me.y+400,me.z,hn),!(me.y>=hn.h+.9));M++){if(M===4||hn.h-me.y<3){me.y=hn.h+.9;break}me.lerp(this.focus,.3)}let x=2+o*.035;xr.set(this.focus.x+Math.sin(this.yaw)*x*(n.lookBack?-1:1),this.focus.y+.25+(a?f*2.2:0),this.focus.z+Math.cos(this.yaw)*x*(n.lookBack?-1:1)),this.kick=se(this.kick,e.boosting?1:0,5,t);let m=58+jt(0,1,l)*17+this.kick*6,p=a?e.roll*.22:-e.yawRate*.012*l;if(this.cine){let M=this.cine;M.t+=n.realDt??t;let v=M.t/M.duration,C=jt(.7,1,v),w=si.copy(e.pos);w.y+=.7;let E=M.pos,A=Du(Pt(v/.75,0,1));E.y+=(n.realDt??t)*.5;let b=E.x+Math.sin(e.yaw)*A*5,_=E.z+Math.cos(e.yaw)*A*5;me.set(Ot(b,me.x,C),Ot(E.y,me.y,C),Ot(_,me.z,C)),xr.lerpVectors(w,xr,C),m=Ot(34-A*4,m,C),p=Ot(-M.side*.06,p,C),v>=1&&(this.cine=null)}this.shake=Math.max(0,this.shake-t*2.4);let y=this.shake*this.shake*.35+(e.boosting?.012:0)+(a?l*.008:0);if(y>0){let M=this.time;me.x+=Math.sin(M*61)*y,me.y+=Math.sin(M*73+1)*y,me.z+=Math.sin(M*67+2)*y}r.position.copy(me),this.look.copy(xr),r.up.set(0,1,0),r.lookAt(xr),this.roll=this.snapNext?p:se(this.roll,p,4,t),r.rotateZ(this.roll),this.fov=this.snapNext?m:se(this.fov,m,5,t),r.fov=this.aspectFov(this.fov),r.near=Ot(.6,3,jt(6,60,e.alt||0)),r.updateProjectionMatrix(),this.snapNext=!1}updateOrbit(t,e,i,n=0){let r=this.orbit,o=this.cam;i&&((i.x||i.y)&&(r.yaw-=i.x*.006,r.pitch=Pt(r.pitch+i.y*.005,-.25,1.45)),i.zoom&&(r.dist=Pt(r.dist*(1+i.zoom*.08),3.6,60))),r.yaw+=n*t;let a=e.yaw,l=Math.cos(a),c=Math.sin(a);si.copy(e.pos),si.y+=.62+r.panY,si.x+=l*r.panX,si.z-=c*r.panX;let h=a+r.yaw,u=o.aspect<1?1.35:1,f=r.dist*u;me.set(si.x+Math.sin(h)*Math.cos(r.pitch)*f,si.y+Math.sin(r.pitch)*f,si.z+Math.cos(h)*Math.cos(r.pitch)*f),r.floor!=null?me.y<r.floor&&(me.y=r.floor):(this.world.ground(me.x,me.y+400,me.z,hn),me.y<hn.h+.35&&(me.y=hn.h+.35),me.y<.4&&(me.y=.4)),o.position.copy(me),o.up.set(0,1,0),o.lookAt(si),o.rotateZ(r.roll),o.fov=o.aspect<1?Pt(r.fov*1.25,20,100):r.fov,o.near=.3,o.updateProjectionMatrix(),this.snapNext=!0,this.yaw=e.yaw,this.focus.copy(e.pos).y+=1.05}};var Hx=`
attribute float size;
attribute vec4 tint;
uniform float uScale;
varying vec4 vTint;
void main() {
  vTint = tint;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,Vx=`
varying vec4 vTint;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.25, d) * vTint.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vTint.rgb, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,na=class{constructor(t,e){this.n=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.tint=new Float32Array(t*4),this.size=new Float32Array(t),this.life=new Float32Array(t),this.max=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.a0=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.next=0;let i=new Xt;i.setAttribute("position",new we(this.pos,3).setUsage(Yn)),i.setAttribute("tint",new we(this.tint,4).setUsage(Yn)),i.setAttribute("size",new we(this.size,1).setUsage(Yn)),this.mat=new xe({vertexShader:Hx,fragmentShader:Vx,uniforms:{uScale:{value:600}},transparent:!0,depthWrite:!1,blending:e?Ke:_n}),this.points=new Is(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=e?6:5}spawn(t,e,i,n,r,o,a,l,c,h,u,f,d,g=0,x=0){let m=this.next;this.next=(m+1)%this.n,this.pos[m*3]=t,this.pos[m*3+1]=e,this.pos[m*3+2]=i,this.vel[m*3]=n,this.vel[m*3+1]=r,this.vel[m*3+2]=o,this.tint[m*4]=h,this.tint[m*4+1]=u,this.tint[m*4+2]=f,this.tint[m*4+3]=d,this.life[m]=this.max[m]=a,this.s0[m]=l,this.s1[m]=c,this.a0[m]=d,this.grav[m]=g,this.drag[m]=x,this.size[m]=l}update(t){let{pos:e,vel:i,tint:n,size:r,life:o,max:a,n:l}=this;for(let h=0;h<l;h++){if(o[h]<=0)continue;if(o[h]-=t,o[h]<=0){r[h]=0,n[h*4+3]=0;continue}let u=1-o[h]/a[h],f=1-this.drag[h]*t;i[h*3]*=f,i[h*3+1]=i[h*3+1]*f-this.grav[h]*t,i[h*3+2]*=f,e[h*3]+=i[h*3]*t,e[h*3+1]+=i[h*3+1]*t,e[h*3+2]+=i[h*3+2]*t,r[h]=Ot(this.s0[h],this.s1[h],u),n[h*4+3]=this.a0[h]*(1-u)*Math.min(1,u*12)}let c=this.points.geometry;c.attributes.position.needsUpdate=!0,c.attributes.tint.needsUpdate=!0,c.attributes.size.needsUpdate=!0}},Gx=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Wx=`
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
}`,Kt=s=>(Math.random()-.5)*2*s,Ie=new L,Ku=new L,Qu=new Ee,sa=class{constructor(t,e){this.scene=t,this.model=e,this.add=new na(700,!0),this.alpha=new na(600,!1),t.add(this.add.points,this.alpha.points),this.time=0;let i=()=>new xe({vertexShader:Gx,fragmentShader:Wx,transparent:!0,depthWrite:!1,blending:Ke,side:Ne,uniforms:{uTime:{value:0},uPower:{value:0},uCore:{value:new dt(1,1,1)},uEdge:{value:new dt(.25,.6,1)}}});this.rearMat=i(),this.liftMat=i();let n=new Ue(.085,.02,1,10,1,!0).rotateX(Math.PI/2).translate(0,0,-.5);{let h=n.attributes.uv,u=n.attributes.position;for(let f=0;f<h.count;f++)h.setY(f,1+u.getZ(f))}this.rear=[];for(let h of e.nozzles){let u=new Ct(n,this.rearMat);u.position.copy(h),u.visible=!1,e.body.add(u),this.rear.push(u)}let r=new Ue(.26,.06,1,12,1,!0).translate(0,-.5,0);{let h=r.attributes.uv,u=r.attributes.position;for(let f=0;f<h.count;f++)h.setY(f,1+u.getY(f))}this.lifts=[];for(let h of e.wheels){let u=new Ct(r,this.liftMat);u.position.set(h.s*.74,.17,h.z),u.visible=!1,e.body.add(u),this.lifts.push(u)}let o=this.trailN=26;this.trails=[],this.trailMat=new pe({vertexColors:!0,transparent:!0,blending:Ke,depthWrite:!1,side:Ne,fog:!1});for(let h=0;h<2;h++){let u=new Xt,f=new Float32Array(o*2*3),d=new Float32Array(o*2*3),g=[];for(let m=0;m<o-1;m++)g.push(m*2,m*2+1,m*2+2,m*2+2,m*2+1,m*2+3);u.setAttribute("position",new we(f,3).setUsage(Yn)),u.setAttribute("color",new we(d,3).setUsage(Yn)),u.setIndex(g);let x=new Ct(u,this.trailMat);x.frustumCulled=!1,x.renderOrder=6,t.add(x),this.trails.push({mesh:x,pts:[],local:new L((h?-1:1)*.74,.757,-2.14)})}this.trailPower=0,this.trailAcc=0;let a=this.streakN=40;this.streakPos=new Float32Array(a*6),this.streakSeed=[];for(let h=0;h<a;h++)this.streakSeed.push(new L(Kt(1),Kt(1),Math.random()));let l=new Xt;l.setAttribute("position",new we(this.streakPos,3).setUsage(Yn)),this.streakMat=new Vn({color:16777215,transparent:!0,opacity:0,blending:Ke,depthWrite:!1,fog:!1}),this.streaks=new Ps(l,this.streakMat),this.streaks.frustumCulled=!1,this.streaks.renderOrder=7,t.add(this.streaks),this.waves=[];let c=new Ds(.82,1,40);for(let h=0;h<3;h++){let u=new Ct(c,new pe({color:new dt(2.2,3.2,4),transparent:!0,opacity:0,blending:Ke,depthWrite:!1,side:Ne,fog:!1}));u.visible=!1,u.renderOrder=6,t.add(u),this.waves.push({m:u,t:1,size:8})}}reset(){for(let t of this.trails)t.pts.length=0}shockwave(t,e,i=9,n=12577279){let r=this.waves.find(o=>o.t>=1)||this.waves[0];r.t=0,r.size=i,r.m.position.copy(t),r.m.quaternion.setFromUnitVectors(Ie.set(0,0,1),Ku.copy(e).normalize()),r.m.visible=!0}burst(t,e,i,n,r=0,o=0,a=0,l=12){let c=this.add,h=this.alpha;for(let u=0;u<l;u++)t==="spark"?c.spawn(e,i,n,r*.4+Kt(7),o*.4+Math.random()*6,a*.4+Kt(7),.35+Math.random()*.4,.22,.05,3,1.6,.5,1,16,1.5):t==="dust"?h.spawn(e+Kt(1.2),i+.2,n+Kt(1.2),r*.25+Kt(3),.6+Math.random()*2,a*.25+Kt(3),.8+Math.random()*.7,.8,3.6,.78,.7,.6,.34,-.4,1.6):t==="splash"?h.spawn(e+Kt(1.5),i,n+Kt(1.5),r*.3+Kt(5),4+Math.random()*9,a*.3+Kt(5),.7+Math.random()*.6,.6,2.2,.92,.97,1,.6,14,.6):t==="ring"?c.spawn(e+Kt(6),i+Kt(6),n+Kt(6),r*.5+Kt(6),o*.5+Kt(6),a*.5+Kt(6),.5+Math.random()*.5,.5,.05,.5,2.2,3,1,0,1):t==="ignite"?c.spawn(e,i,n,r+Kt(9),o+Kt(9),a+Kt(9),.3+Math.random()*.45,.9,.1,1.6,2.6,4,1,0,2.5):t==="confetti"&&c.spawn(e+Kt(1),i+1,n+Kt(1),Kt(6),4+Math.random()*6,Kt(6),.8+Math.random()*.6,.3,.1,1+Math.random()*2,1+Math.random()*2,1+Math.random()*2,1,9,1)}update(t,e,i,n){this.time+=t;let r=this.time,o=this.model.body,a=n/(2*Math.tan(i.fov*Math.PI/360));this.add.mat.uniforms.uScale.value=a,this.alpha.mat.uniforms.uScale.value=a;let l=e.thrust*(e.mode==="fly"?1:.85);this.rearMat.uniforms.uTime.value=r,this.rearMat.uniforms.uPower.value=Pt(l*1.3,0,1.25);for(let y of this.rear){y.visible=l>.02;let M=.5+l*(e.mode==="fly"?2.6:1.9)+Math.sin(r*47)*.08;y.scale.set(1+l*.5,1+l*.5,M)}let c=e.fold*e.lift;this.liftMat.uniforms.uTime.value=r+3,this.liftMat.uniforms.uPower.value=Pt(c*1.1,0,1.1);for(let y of this.lifts)y.visible=c>.02,y.scale.set(1,.5+c*1.5+Math.sin(r*41+y.position.z)*.06,1);this.model.setThrust(Math.max(l,c*.3));let h=e.speed,u=e.pos,f=Math.sin(e.yaw),d=Math.cos(e.yaw);if(l>.5&&Math.random()<t*60*l&&(Ie.set(Kt(.3),.56,-2.3).applyQuaternion(e.quat).add(u),this.add.spawn(Ie.x,Ie.y,Ie.z,e.vel.x*.6-f*6+Kt(1.5),e.vel.y*.6+Kt(1.5),e.vel.z*.6-d*6+Kt(1.5),.25+Math.random()*.25,.4,.05,.7,1.7,3.2,.9,0,2)),e.mode==="drive"&&e.offGround<.05&&h>4){let y=e.surf!=="road",M=e.slip>5.5,v=(y?jt(4,40,h)*34:0)+(M?44:0);if(v>0&&Math.random()<t*v){let C=Math.random()<.5?1:-1;Ie.set(C*he.trackHalf,.1,he.rearZ).applyQuaternion(e.quat).add(u);let w=y?e.surf==="sand"?[.86,.78,.62]:[.62,.58,.46]:[.85,.85,.88];this.alpha.spawn(Ie.x,Ie.y,Ie.z,e.vel.x*.25+Kt(1.2),.8+Math.random()*1.6,e.vel.z*.25+Kt(1.2),.7+Math.random()*.7,.7,y?3.4:2.6,w[0],w[1],w[2],y?.32:.22,-.3,1.4)}}if(e.mode==="fly"&&e.skim&&h>14&&e.alt<3.2){let y=jt(14,70,h)*(1-e.alt/3.4);if(Math.random()<t*90*y){let M=e.skim==="water",v=u.x-f*1.6+Kt(.9),C=u.z-d*1.6+Kt(.9),w=e.groundY+.15;M?this.alpha.spawn(v,w,C,e.vel.x*.35+Kt(4),2.5+Math.random()*5,e.vel.z*.35+Kt(4),.6+Math.random()*.6,.7,3,.9,.96,1,.5,9,.8):this.alpha.spawn(v,w,C,e.vel.x*.3+Kt(3),1+Math.random()*2.5,e.vel.z*.3+Kt(3),.7+Math.random()*.6,.8,3.6,.72,.66,.54,.3,-.2,1.2)}}if(e.mode==="fly"&&e.alt<5&&!e.overWater&&Math.random()<t*22*(1-e.alt/5)){let y=Math.random()*6.28;this.alpha.spawn(u.x+Math.cos(y)*1.3,e.groundY+.15,u.z+Math.sin(y)*1.3,Math.cos(y)*7,.6,Math.sin(y)*7,.6,.6,2.6,.75,.7,.6,.22,0,2.4)}this.add.update(t),this.alpha.update(t);let g=e.mode==="fly"?jt(20,60,h):e.boosting?1:jt(46,62,h)*.7;this.trailPower=Ot(this.trailPower,g,1-Math.exp(-4*t)),this.trailAcc+=Math.hypot(e.vel.x,e.vel.y,e.vel.z)*t;let x=this.trailAcc>.3;x&&(this.trailAcc=0);let m=this.trailN;for(let y of this.trails){if(Ie.copy(y.local).applyQuaternion(e.quat).add(u),y.pts.length===0)for(let C=0;C<m;C++)y.pts.push(Ie.clone());if(x){let C=y.pts.pop();C.copy(Ie),y.pts.unshift(C)}else y.pts[0].copy(Ie);let M=y.mesh.geometry.attributes.position,v=y.mesh.geometry.attributes.color;for(let C=0;C<m;C++){let w=y.pts[C],E=1-C/(m-1),A=E*E*this.trailPower;M.setXYZ(C*2,w.x,w.y-.02-.02*E,w.z),M.setXYZ(C*2+1,w.x,w.y+.02+.02*E,w.z),v.setXYZ(C*2,3.4*A,.2*A,.12*A),v.setXYZ(C*2+1,3.4*A,.2*A,.12*A)}M.needsUpdate=v.needsUpdate=!0,y.mesh.visible=this.trailPower>.01}let p=jt(58,100,h)*.22;if(this.streakMat.opacity=p,this.streaks.visible=p>.01,p>.01){let y=Math.hypot(e.vel.x,e.vel.y,e.vel.z)||1,M=e.vel.x/y,v=e.vel.y/y,C=e.vel.z/y;Qu.setFromUnitVectors(Ie.set(0,0,1),Ku.set(M,v,C));let w=90,E=1+h*.035;for(let A=0;A<this.streakN;A++){let b=this.streakSeed[A];b.z-=h*t/w,b.z<0&&(b.z+=1,b.x=Kt(1),b.y=Kt(1));let _=9+Math.abs(b.x)*16;Ie.set(Math.cos(b.y*3.14159)*_,Math.sin(b.y*3.14159)*_*.7+1,(b.z-.35)*w).applyQuaternion(Qu).add(u),this.streakPos[A*6]=Ie.x,this.streakPos[A*6+1]=Ie.y,this.streakPos[A*6+2]=Ie.z,this.streakPos[A*6+3]=Ie.x-M*E,this.streakPos[A*6+4]=Ie.y-v*E,this.streakPos[A*6+5]=Ie.z-C*E}this.streaks.geometry.attributes.position.needsUpdate=!0}for(let y of this.waves){if(y.t>=1)continue;y.t+=t/.55;let M=Math.min(y.t,1),v=1-Math.pow(1-M,3);y.m.scale.setScalar(.6+v*y.size),y.m.material.opacity=(1-M)*.9,M>=1&&(y.m.visible=!1)}}};var Ai={music:{loop:[1,116.86954648526077]},motor:{loop:[.25,4]},jet:{loop:[.25,4]},lift:{loop:[.25,4.6]},wind:{loop:[.25,5]},skid:{loop:[.25,1.7]},click:{},tick:{},ring:{},bank:{},bankBig:{},unlock:{},thud:{},land:{},crash:{},crash2:{},scrape:{},ignite:{},fold:{},unfold:{},whoosh:{},whoosh2:{},splash:{},shutter:{}};var Xx="assets/audio/",Yx=["motor","jet","lift","wind","skid"],ra=class{constructor(){this.ctx=null,this.vol={master:.8,music:.55,sfx:.9},this.muted=!1,this.paused=!1,this.buffers={},this.layers=null,this.state="idle"}unlock(){if(this.ctx){this.ctx.state==="suspended"&&!this.paused&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let i=e.createDynamicsCompressor();i.threshold.value=-12,i.ratio.value=4,i.attack.value=.005,i.release.value=.2,this.master.connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.music=e.createGain(),this.music.connect(this.master),this.world=e.createGain(),this.world.connect(this.sfx),this.world.gain.value=0,this.applyVolumes(),this.load()}async fetchBuffer(t){let e=await fetch(`${Xx}${t}.mp3`);if(!e.ok)throw new Error(`missing ${t}`);let i=await e.arrayBuffer();return new Promise((n,r)=>this.ctx.decodeAudioData(i,n,r))}async load(){if(this.state!=="idle")return;this.state="loading";let t=Object.keys(Ai).filter(e=>e!=="music");await Promise.all(t.map(async e=>{try{this.buffers[e]=await this.fetchBuffer(e)}catch{}})),this.startLayers(),this.state="ready";try{let e=await this.fetchBuffer("music"),i=this.ctx.createGain();i.gain.value=0,i.gain.linearRampToValueAtTime(1,this.ctx.currentTime+3),this.loopSource(e,Ai.music.loop,i).connect(this.music)}catch{}}loopSource(t,e,i){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=!0,n.loopStart=e[0],n.loopEnd=e[0]+e[1],n.connect(i),n.start(0,e[0]),i}startLayers(){let t=this.ctx,e={};for(let i of Yx){let n=this.buffers[i];if(!n)continue;let r=t.createBufferSource();r.buffer=n,r.loop=!0,r.loopStart=Ai[i].loop[0],r.loopEnd=Ai[i].loop[0]+Ai[i].loop[1];let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=18e3;let a=t.createGain();a.gain.value=0,r.connect(o).connect(a).connect(this.world),r.start(0,Ai[i].loop[0]+Math.random()*Ai[i].loop[1]*.5),e[i]={src:r,filter:o,gain:a}}if(e.motor&&(e.motor.filter.type="bandpass",e.motor.filter.Q.value=1.6,e.motor.filter.frequency.value=2400),this.buffers.wind){let i=t.createBufferSource();i.buffer=this.buffers.wind,i.loop=!0,i.loopStart=Ai.wind.loop[0],i.loopEnd=Ai.wind.loop[0]+Ai.wind.loop[1],i.playbackRate.value=.5;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=420;let r=t.createGain();r.gain.value=0,i.connect(n).connect(r).connect(this.world),i.start(0,Ai.wind.loop[0]+1.3),e.road={src:i,filter:n,gain:r}}this.layers=e}setVolumes(t){Object.assign(this.vol,t),this.applyVolumes()}setMuted(t){this.muted=t,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted?0:this.vol.master,t,.03),this.sfx.gain.setTargetAtTime(this.vol.sfx,t,.03),this.music.gain.setTargetAtTime(this.vol.music*.8,t,.05)}suspend(t){this.paused=t,this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}play(t,e={}){if(!this.ctx||this.ctx.state!=="running")return;let i=this.buffers[t];if(!i)return;let n=this.ctx.createBufferSource();n.buffer=i,n.playbackRate.value=(e.rate||1)*(e.vary?1+(Math.random()-.5)*e.vary:1);let r=this.ctx.createGain();r.gain.value=e.gain??1,n.connect(r).connect(this.sfx),n.start()}update(t,e,i,n=1){let r=this.layers;if(!this.ctx||this.ctx.state!=="running"||!r)return;let o=this.ctx.currentTime,a=(d,g,x=.07)=>d.setTargetAtTime(g,o,x);a(this.world.gain,i?1:0,.12);let l=e.speed,c=Pt(l/95,0,1),h=e.mode==="fly",u=e.mode==="drive"&&e.offGround<.08,f=Ot(.6,1,n);if(r.motor){let d=u?Pt(Math.abs(e.accel||0)/16,0,1)*.7+(e.boosting?.3:0):0;a(r.motor.src.playbackRate,(1.1+c*1.7)*f),a(r.motor.gain.gain,c>.01?(.012+c*.03)*d:0,.12),a(r.motor.filter.frequency,1900+c*3600)}r.road&&(a(r.road.gain.gain,u?c*(e.surf==="road"?.62:.95):0),a(r.road.filter.frequency,e.surf==="road"?320+c*380:220+c*200)),r.wind&&(a(r.wind.gain.gain,c*c*(h||!u?.75:.5)),a(r.wind.src.playbackRate,.75+c*.6)),r.jet&&(a(r.jet.gain.gain,e.thrust*.55),a(r.jet.src.playbackRate,(.8+e.thrust*.45)*f)),r.lift&&(a(r.lift.gain.gain,e.fold*e.lift*.4),a(r.lift.src.playbackRate,(.85+e.lift*.35)*f)),r.skid&&(a(r.skid.gain.gain,u&&e.surf==="road"?Pt((e.slip-4)/11,0,1)*.5:0,.05),a(r.skid.src.playbackRate,.9+Pt(e.slip,0,20)*.012))}};var Xc=Math.PI*2,oa=class{constructor(t){this.game=t,this.pot=0,this.mult=1,this.timer=0,this.lines=[],this.rot={x:0,y:0,z:0},this.drift={t:0,pts:0,gap:0},this.skimT=0,this.chain=new Map,this.time=0,this.lastTouchdown=-99}add(t,e,i){e=Math.round(e),this.pot+=e,this.mult=Math.min(10,this.mult+(this.lines.length?1:0)),this.timer=4.2,this.lines.push({name:t,pts:e}),this.lines.length>4&&this.lines.shift(),this.game.car.boost=Math.min(1,this.game.car.boost+.06+e/4e3),this.game.ui.combo(this,!0),i||this.game.audio.play("tick",{rate:1+Math.min(this.mult,10)*.06})}bank(){if(this.pot<=0)return;let t=this.pot*this.mult,e=Ht.data,i=e.points;e.points+=t,t>e.stats.bestCombo&&(e.stats.bestCombo=t),this.game.ui.banked(t,this.mult),this.game.audio.play(t>=2e3?"bankBig":"bank"),this.pot=0,this.mult=1,this.lines=[],this.timer=0,this.game.ui.combo(this,!1);for(let n of vi)n.cost>i&&n.cost<=e.points&&!e.unlocked.includes(n.id)&&(e.unlocked.push(n.id),this.game.onUnlock(n));Ht.touch()}fail(){this.pot>0&&(this.game.ui.toast("Combo lost","bad"),this.pot=0,this.mult=1,this.lines=[],this.timer=0,this.game.ui.combo(this,!1)),this.rot.x=this.rot.y=this.rot.z=0,this.drift.t=this.drift.pts=0}onEvent(t){let e=this.game.car,i=Ht.data.stats;switch(t.type){case"jump":this.rot.x=this.rot.y=this.rot.z=0;break;case"launch":this.add("Lift-off",250),i.launches++;break;case"barrel":this.add("Barrel roll",120);break;case"near":t.gap<1.1?this.add("Paint-thin miss",160):this.add("Near miss",80);break;case"under":this.add("Under the bridge",300);break;case"crash":this.fail();break;case"land":{if(t.fromFlight){let h=this.padAt(t);if(h){let u=!i.pads.includes(h.name);u&&i.pads.push(h.name),this.add(`Bullseye \xB7 ${h.name}`,(u?900:350)*(h.bonus||1)),this.game.fx.burst("confetti",t.x,t.y,t.z,0,0,0,26)}else this.time-this.lastTouchdown>12&&t.airTime>3&&this.add(t.impact<5?"Butter touchdown":"Touchdown",t.impact<5?150:80);this.lastTouchdown=this.time;break}let n=this.rot,r=Math.floor((Math.abs(n.x)+.9)/Xc),o=Math.floor((Math.abs(n.y)+.9)/Xc),a=Math.floor((Math.abs(n.z)+.9)/Xc);if(t.airTime>i.longestAir&&(i.longestAir=t.airTime),!t.clean&&(r||o||a)){this.game.ui.toast("Sketchy landing","bad"),n.x=n.y=n.z=0;break}t.airTime>.75&&this.add(`Air time ${t.airTime.toFixed(1)}s`,t.airTime*70,!0);let l=h=>h>1?["","","Double ","Triple ","Quad "][Math.min(h,4)]:"";r&&this.add(l(r)+(n.x>0?"Front flip":"Backflip"),320*r*(r>1?1.3:1)),o&&this.add(`${o*360} Spin`,220*o),a&&this.add(l(a)+"Barrel roll",260*a),t.clean&&t.airTime>1.2&&t.impact<12&&this.add("Clean landing",60,!0);let c=this.padAt(t);c&&t.airTime>1&&this.add(`Bullseye \xB7 ${c.name}`,300),n.x=n.y=n.z=0;break}default:}}padAt(t){for(let e of this.game.world.pads)if(Math.abs(t.y-e.y)<1.2&&Math.hypot(t.x-e.x,t.z-e.z)<e.r+.8)return e;return null}update(t,e){this.time+=t;let i=Ht.data.stats;e.speed>i.topSpeed&&(i.topSpeed=e.speed),e.mode==="air"&&(this.rot.x+=e.angVel.x*t,this.rot.y+=e.angVel.y*t,this.rot.z+=e.angVel.z*t);let n=this.drift;e.mode==="drive"&&e.offGround<.05&&e.slip>5.5&&e.speed>13?(n.t+=t,n.pts+=e.slip*t*5,n.gap=0):n.t>0&&(n.gap+=t,n.gap>.35&&(n.t>.9&&this.add(`Drift ${n.t.toFixed(1)}s`,n.pts),n.t=n.pts=0)),e.mode==="fly"&&e.skim&&e.alt<3&&e.speed>38?(this.skimT+=t,this.skimT>1.1&&(this.skimT=0,this.add(e.skim==="water"?"Wave skimmer":"Ground hugger",60,!0))):this.skimT=Math.max(0,this.skimT-t),this.checkRings(e),this.pot>0&&(e.mode==="air"||n.t>0||(this.timer-=t),this.timer<=0?this.bank():this.game.ui.comboTimer(this.timer/4.2))}checkRings(t){let e=this.game.world.rings,i=t.prev,n=t.pos;for(let r=0;r<e.length;r++){let o=e[r];if(o.cooldown>0)continue;let a=n.x-o.pos.x,l=n.y+.6-o.pos.y,c=n.z-o.pos.z;if(a*a+l*l+c*c>900)continue;let h=a*o.dir.x+l*o.dir.y+c*o.dir.z,u=(i.x-o.pos.x)*o.dir.x+(i.y+.6-o.pos.y)*o.dir.y+(i.z-o.pos.z)*o.dir.z;if(u*h>0)continue;let f=u/(u-h||1e-6),d=i.x+(n.x-i.x)*f-o.pos.x,g=i.y+.6+(n.y-i.y)*f-o.pos.y,x=i.z+(n.z-i.z)*f-o.pos.z;if(d*d+g*g+x*x>o.r*o.r)continue;o.cooldown=30,o.pulse=1;let m=this.game.world.chains[o.chain],p=this.chain.get(o.chain);(!p||this.time-p.t>16)&&(p={n:0,t:0,seen:new Set}),p.seen.has(o.index)||(p.seen.add(o.index),p.n++),p.t=this.time,this.chain.set(o.chain,p),Ht.data.stats.rings++,this.add(`${m.name} ${p.n}/${m.count}`,100+40*(p.n-1),!0),this.game.audio.play("ring",{rate:1+(p.n-1)*.085}),this.game.fx.burst("ring",o.pos.x,o.pos.y,o.pos.z,t.vel.x*.3,t.vel.y*.3,t.vel.z*.3,22),p.n>=m.count&&(this.add(`${m.name} complete!`,500+m.count*60),this.game.audio.play("unlock"),this.chain.delete(o.chain))}}nextUnlock(){let t=Ht.data;return vi.find(e=>!t.unlocked.includes(e.id))||null}label(){return`${ei(this.pot)}`}};var aa=class{constructor(t,e){this.canvas=t,this.world=e,this.ctx=t.getContext("2d"),this.base=this.render(e),this.frame=0}render(t){let i=document.createElement("canvas");i.width=i.height=512;let n=i.getContext("2d"),r=t.terrain,o=r.n+1,a=n.createImageData(o,o),l=r.colors;for(let u=0;u<o*o;u++){let f=r.h[u],d=l[u*3],g=l[u*3+1],x=l[u*3+2];f<0&&(d=.07,g=.2,x=.3);let m=f<0?1:.85+Math.min(.3,f/600);a.data[u*4]=Math.min(255,Math.sqrt(d)*255*m*.8),a.data[u*4+1]=Math.min(255,Math.sqrt(g)*255*m*.8),a.data[u*4+2]=Math.min(255,Math.sqrt(x)*255*m*.8),a.data[u*4+3]=255}let c=document.createElement("canvas");c.width=c.height=o,c.getContext("2d").putImageData(a,0,0),n.imageSmoothingEnabled=!0,n.drawImage(c,0,0,512,512);let h=u=>(u+4e3/2)/4e3*512;n.fillStyle="rgba(70,74,84,0.9)",n.fillRect(h(Rt.x0),h(Rt.z0),h(Rt.x1)-h(Rt.x0),h(Rt.z1)-h(Rt.z0)),n.fillStyle="rgba(190,190,200,0.5)";for(let u of t.city.roofList)n.fillRect(h(u.x-u.hx),h(u.z-u.hz),u.hx*2/4e3*512,u.hz*2/4e3*512);n.fillStyle="#3a3d45",n.fillRect(h(ee.x0),h(ee.z-ee.halfW),h(ee.x1)-h(ee.x0),ee.halfW*2/4e3*512),n.lineCap=n.lineJoin="round";for(let u of[0,1])for(let f of t.roads.roads)n.strokeStyle=u?"#f3ead8":"rgba(20,22,28,0.8)",n.lineWidth=(f.lanes===4?3.2:2.2)+(u?0:1.6),n.beginPath(),f.pts.forEach((d,g)=>g?n.lineTo(h(d.x),h(d.z)):n.moveTo(h(d.x),h(d.z))),f.closed&&n.closePath(),n.stroke();for(let u of t.ramps)n.fillStyle=u.launch?"#ff4a3a":"#f0902e",n.beginPath(),n.arc(h(u.x),h(u.z),u.launch?4.2:2.6,0,7),n.fill();n.strokeStyle="#fff3e0",n.lineWidth=1.4;for(let u of t.pads)n.beginPath(),n.arc(h(u.x),h(u.z),3.2,0,7),n.stroke();return i}draw(t){if(this.frame++%2)return;let e=this.canvas,i=this.ctx,n=e.width,r=n/2,o=this.base.width,a=t.mode==="fly"?620:380;this.range=this.range?this.range+(a-this.range)*.06:a;let l=r/this.range/(o/4e3);i.clearRect(0,0,n,n),i.save(),i.beginPath(),i.arc(r,r,r-2,0,7),i.clip(),i.fillStyle="#12303f",i.fillRect(0,0,n,n),i.translate(r,r),i.rotate(t.yaw+Math.PI),i.scale(l,l);let c=(t.pos.x+4e3/2)/4e3*o,h=(t.pos.z+4e3/2)/4e3*o;i.drawImage(this.base,-c,-h);let u=o/4e3;for(let d of this.world.rings){if(d.cooldown>0)continue;let g=d.pos.x-t.pos.x,x=d.pos.z-t.pos.z;g*g+x*x>this.range*this.range*1.1||(i.fillStyle="#5fe6ff",i.beginPath(),i.arc(g*u,x*u,2.2/l,0,7),i.fill())}i.restore(),i.save(),i.translate(r,r),i.fillStyle="#ff3b30",i.strokeStyle="#fff",i.lineWidth=n*.012;let f=n*.055;i.beginPath(),i.moveTo(0,-f*1.3),i.lineTo(f,f),i.lineTo(0,f*.5),i.lineTo(-f,f),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.28)",i.lineWidth=n*.02,i.beginPath(),i.arc(r,r,r-n*.012,0,7),i.stroke()}};var It=s=>document.getElementById(s),je=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},la=class{constructor(t){this.game=t,this.screens=["menu","pause","garage","settings","help","photo"],this.last={},this.hintTimer=null,document.querySelectorAll("[data-act]").forEach(e=>e.addEventListener("click",()=>{t.audio.play("click"),t.act(e.dataset.act)})),It("btn-pause").addEventListener("click",()=>t.act("pause")),It("btn-photo").addEventListener("click",()=>t.act("photo"));for(let e of["p-fov","p-roll","p-pan"])It(e).addEventListener("input",()=>t.photoSliders(+It("p-fov").value,+It("p-roll").value,+It("p-pan").value));It("p-time").addEventListener("click",()=>{t.audio.play("click"),t.cycleTime()}),It("p-hide").addEventListener("click",()=>{document.body.classList.toggle("photo-clean"),It("p-hide").textContent=document.body.classList.contains("photo-clean")?"SHOW UI":"HIDE UI"}),It("p-shot").addEventListener("click",()=>t.takePhoto()),It("p-exit").addEventListener("click",()=>{t.audio.play("click"),t.act("back")}),this.buildHelp()}show(t){for(let e of this.screens)It(e).classList.toggle("hidden",e!==t);It("hud").classList.toggle("hidden",t!==null),document.body.classList.remove("photo-clean"),It("p-hide").textContent="HIDE UI",t==="menu"&&this.menuFoot(),t==="pause"&&this.pauseStats(),t==="garage"&&this.buildGarage(),t==="settings"&&this.buildSettings(),t==="photo"&&this.photoTime()}loading(t,e){It("load-fill").style.width=`${Math.round(t*100)}%`,e&&(It("load-tip").textContent=e)}loadingDone(){let t=It("loading");t.classList.add("out"),setTimeout(()=>t.remove(),700)}hud(t,e){let i=this.last,n=Ht.data.settings,r=Math.round(t.speed*(n.units==="mph"?2.23694:3.6));r!==i.v&&(i.v=r,It("speed").textContent=r),n.units!==i.units&&(i.units=n.units,It("unit").textContent=n.units==="mph"?"MPH":"KM/H");let o=t.mode==="fly"?"fly":t.mode==="air"?"air":"drive";if(o!==i.mode){i.mode=o;let c=It("mode");c.textContent=o==="fly"?"FLIGHT":o==="air"?"AIRBORNE":"DRIVE",c.className=o,It("alt").classList.toggle("on",o!=="drive"),document.body.classList.toggle("flying",o==="fly"),It("boost").classList.toggle("hot",o==="fly"),It("t-boost").textContent=o==="fly"?"UP":o==="air"?"FLY":"BOOST",It("t-shift").textContent=o==="fly"?"DOWN":"DRIFT",It("t-fly").textContent=o==="fly"?"ROLL":"FLY"}if(o!=="drive"){let c=Math.max(0,Math.round(t.alt));c!==i.alt&&(i.alt=c,It("alt").textContent=`ALT ${c} M`)}let a=o==="fly"?1:t.boost;Math.abs(a-(i.boost??-1))>.004&&(i.boost=a,It("boost-fill").style.transform=`scaleX(${a.toFixed(3)})`);let l=Ht.data.points;if(l!==i.pts){i.pts=l,It("score-val").textContent=ei(l);let c=e.nextUnlock();if(c){let h=[...vi].reverse().find(f=>f.cost<=l),u=h?h.cost:0;It("next-fill").style.width=`${Pt((l-u)/(c.cost-u)*100,0,100)}%`,It("next-label").textContent=`${c.name} \xB7 ${ei(c.cost)}`}else It("next-fill").style.width="100%",It("next-label").textContent="All paints unlocked"}}combo(t,e){let i=It("combo");if(t.pot<=0){i.classList.add("hidden");return}i.classList.remove("hidden");let n=It("combo-lines");n.innerHTML="";for(let r of t.lines.slice(-3))n.appendChild(je("div","",`${r.name}<span>+${ei(r.pts)}</span>`));if(It("combo-pts").textContent=ei(t.pot),It("combo-mult").textContent=`\xD7${t.mult}`,e){let r=It("combo-pot");r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop")}}comboTimer(t){It("combo-timer").firstElementChild.style.transform=`scaleX(${Pt(t,0,1).toFixed(3)})`}banked(t,e){this.toast(`+${ei(t)}`,"good",e>1?`Combo \xD7${e} banked`:"Banked",1700);let i=It("score");i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")}toast(t,e="",i="",n=2200){let r=It("toasts");for(;r.children.length>2;)r.firstElementChild.remove();let o=je("div",`toast ${e}`,i?`${t}<small>${i}</small>`:t);r.appendChild(o),setTimeout(()=>{o.classList.add("out"),setTimeout(()=>o.remove(),320)},n)}hint(t,e=7e3){let i=It("hint");if(clearTimeout(this.hintTimer),!t){i.classList.add("hidden");return}i.innerHTML=t,i.classList.remove("hidden"),this.hintTimer=setTimeout(()=>i.classList.add("hidden"),e)}cinematic(t){document.body.classList.toggle("cine",t)}cineTitle(){let t=It("cine-title");t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}flash(){let t=It("flash");t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}fade(t){It("fade").classList.toggle("on",t)}touchMode(t){document.body.classList.toggle("touch",t),It("touch").classList.toggle("hidden",!t)}joy(t,e,i,n){let r=It("joy");r.classList.toggle("hidden",!n),It("joy-ghost").classList.toggle("hidden",n),n&&t&&(r.style.left=`${t.x}px`,r.style.top=`${t.y}px`,r.firstElementChild.style.transform=`translate(${e*40}px, ${i*40}px)`)}menuFoot(){let t=Ht.data;It("menu-foot").innerHTML=`Stunt points <b>${ei(t.points)}</b> &nbsp;\xB7&nbsp; Paints <b>${t.unlocked.length}/${vi.length}</b>`}pauseStats(){let t=Ht.data,e=t.stats,i=t.settings.units==="mph";It("pause-stats").innerHTML=`
      <div>Stunt points<b>${ei(t.points)}</b></div>
      <div>Best combo<b>${ei(e.bestCombo)}</b></div>
      <div>Top speed<b>${Math.round(e.topSpeed*(i?2.23694:3.6))} ${i?"mph":"km/h"}</b></div>
      <div>Longest air<b>${e.longestAir.toFixed(1)} s</b></div>
      <div>Rings<b>${ei(e.rings)}</b></div>
      <div>Landing pads<b>${e.pads.length}/${this.game.world.pads.length}</b></div>`}buildGarage(){let t=It("g-strip"),e=Ht.data;t.innerHTML="",this.gSel=this.gSel&&vi.some(o=>o.id===this.gSel)?this.gSel:e.paint;for(let o of vi){let a=!e.unlocked.includes(o.id),l=je("button",`swatch${a?" locked":""}${o.id===this.gSel?" on":""}`,"<i></i>");l.style.setProperty("--c",o.color),l.setAttribute("aria-label",o.name),l.addEventListener("click",()=>{this.game.audio.play("click"),this.gSel=o.id,this.game.previewPaint(o.id),this.buildGarage()}),t.appendChild(l),o.id===this.gSel&&setTimeout(()=>l.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}),0)}let i=vi.find(o=>o.id===this.gSel),n=!e.unlocked.includes(i.id);It("g-name").textContent=i.name;let r=It("g-state");r.classList.toggle("locked",n),r.textContent=n?`Locked \xB7 ${ei(i.cost)} stunt points (${ei(Math.max(0,i.cost-e.points))} to go)`:i.id===e.paint?"Equipped":"Unlocked \xB7 tap done to equip",It("g-points").innerHTML=`\u2605 ${ei(e.points)} stunt points`}buildSettings(){let t=It("settings-body"),e=Ht.data.settings,i=this.game;t.innerHTML="";let n=m=>{let p=je("div","set-group",`<h3>${m}</h3>`);return t.appendChild(p),p},r=(m,p,y,M=0,v=1)=>{let C=je("div","set-row",`<span>${p}</span>`),w=je("input");w.type="range",w.min=M,w.max=v,w.step=.01,w.value=e[y],w.addEventListener("input",()=>{e[y]=+w.value,i.applySettings(),Ht.touch()}),C.appendChild(w),m.appendChild(C)},o=(m,p,y,M)=>{let v=je("div","set-row",`<span>${p}</span>`),C=je("div","seg");for(let[w,E]of M){let A=je("button",e[y]===w?"on":"",E);A.addEventListener("click",()=>{e[y]=w,i.audio.play("click"),i.applySettings(),Ht.touch(),this.buildSettings()}),C.appendChild(A)}v.appendChild(C),m.appendChild(v)},a=n("Audio");r(a,"Master volume","master"),r(a,"Music","music"),r(a,"Sound effects","sfx");let l=n("Graphics");o(l,"Quality","quality",[["auto","Auto"],["low","Low"],["medium","Medium"],["high","High"]]),o(l,"Time of day","time",Bs.map(m=>[m,qo[m].label]));let c=n("Gameplay");o(c,"Cinematic take-off","cinematic",[[!0,"On"],[!1,"Off"]]),o(c,"Camera shake","shake",[[!0,"On"],[!1,"Off"]]),o(c,"Speed units","units",[["kmh","km/h"],["mph","mph"]]),r(c,"Look sensitivity","sens",.4,2);let h=n("Keyboard controls"),u=je("div","keys");for(let[m,p]of Uu){let y=je("div","key-row",`<span>${p}</span>`),M=je("div","slots");for(let v=0;v<2;v++){let C=je("button","",$n(Ht.data.keys[m][v]));C.addEventListener("click",()=>{C.textContent="Press\u2026",C.classList.add("listen"),i.input.capture=w=>{if(w!=="Escape"||m==="pause"){for(let E in Ht.data.keys)Ht.data.keys[E]=Ht.data.keys[E].map(A=>A===w?null:A);Ht.data.keys[m][v]=w}Ht.touch(),this.buildSettings()}}),M.appendChild(C)}y.appendChild(M),u.appendChild(y)}h.appendChild(u);let f=je("button","link-btn","Restore default keys");f.style.marginTop="10px",f.addEventListener("click",()=>{for(let m in fr)Ht.data.keys[m]=fr[m].slice();Ht.touch(),this.buildSettings()}),h.appendChild(f);let d=n("Progress"),g=je("div","set-row","<span>Stunt points and unlocked paints</span>"),x=je("button","link-btn","Reset progress");x.addEventListener("click",()=>{x.dataset.sure?(i.resetProgress(),this.buildSettings()):(x.dataset.sure="1",x.textContent="Tap again to confirm")}),g.appendChild(x),d.appendChild(g)}buildHelp(){let t=e=>$n(Ht.data.keys[e][0]);It("help-body").innerHTML=`<div class="help-grid">
      <div><h3>The idea</h3>
        <p><b>Free play.</b> Floor it down the runway, hit the launch ramp, and the roadster folds its wheels, lights its thrusters and takes off. Fly anywhere, land anywhere, drive again.</p>
        <p>Stunts fill a combo pot. Stay in control for a moment to <b>bank</b> it \u2014 crash and it is gone. Stunt points unlock new paint.</p></div>
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
    </div>`}slide(t,e,i){let n=It("showcase");It("sc-num").textContent=`0${t+1} / 0${e}`,It("sc-title").textContent=i.title,It("sc-text").textContent=i.text,It("sc-dots").innerHTML=Array.from({length:e},(r,o)=>`<i class="${o===t?"on":""}"></i>`).join(""),n.classList.remove("in"),n.offsetWidth,n.classList.add("in")}photoTime(){It("p-time").textContent=qo[this.game.world.sky.name].label.toUpperCase()}};var ju=-400,jn=ju+.18;function td(){let s=new fe,t=(u,f,d)=>new pe({color:new dt(u,f,d),fog:!1}),e=new Ct(new zi(42,64).rotateX(-Math.PI/2),new li({color:723984,roughness:.2,metalness:.75,fog:!1,envMapIntensity:.12}));e.receiveShadow=!0;let i=new Ct(new Ue(4.3,4.5,.18,64),new li({color:1776932,roughness:.32,metalness:.7,fog:!1,envMapIntensity:.12}));i.position.y=.09,i.receiveShadow=!0,s.userData.stage=i;let n=new Ct(new Ue(42,42,26,64,1,!0),new pe({color:460811,side:ke,fog:!1}));n.position.y=13;let r=new Ct(new zi(42,48).rotateX(Math.PI/2),new pe({color:263431,fog:!1}));r.position.y=26,s.add(e,i,n,r);let o=(u,f,d,g)=>{let x=new Ct(new Xi(u,f,6,96).rotateX(Math.PI/2),g);return x.position.y=d,s.add(x),x};o(4.42,.035,.19,t(4.5,4.1,3.6)),o(9,.03,.02,t(2.6,.22,.16)),o(16,.03,.02,t(.5,.5,.55)),o(8,.14,13,t(5,4.7,4.2)),o(15,.08,16,t(2.4,2.3,2.2));let a=new De(.35,15,.12);for(let u=0;u<24;u++){let f=u/24*Math.PI*2,d=new Ct(a,u%3===0?t(3.2,.3,.22):t(1.5,1.45,1.4));d.position.set(Math.sin(f)*40,8.5,Math.cos(f)*40),d.rotation.y=f,s.add(d)}let l=document.createElement("canvas");l.width=2048,l.height=384;let c=l.getContext("2d");c.fillStyle="#07080b",c.fillRect(0,0,2048,384),c.textAlign="center",c.textBaseline="middle",c.fillStyle="#fff3e0",c.font='italic 700 250px "Barlow Condensed", "Arial Narrow", Arial, sans-serif',c.fillText("FLYING ROADSTER",1024,200),c.fillStyle="#e2202c",c.fillRect(250,340,1548,14);let h=new Ni(l);h.colorSpace=Ae,h.anisotropy=8;for(let u of[0,Math.PI]){let f=new Ct(new mi(40,7.5),new pe({map:h,fog:!1}));f.position.set(Math.sin(u)*-38,11,Math.cos(u)*-38),f.rotation.y=u,s.add(f)}for(let[u,f,d,g]of[[5,9,6,150],[-7,7,-4,100],[0,12,-9,90]]){let x=new To(16777215,g,45,2);x.position.set(u,f,d),s.add(x)}return s.position.y=ju,s}var ca=[{title:"MEET THE ROADSTER",text:"All-electric, near silent and absurdly quick. One car, one island, no rules.",yaw:2.45,pitch:.11,dist:7.6,fly:0},{title:"HIT THE RAMP",text:"Floor it down the runway and take the launch ramp for a slow-motion lift-off.",yaw:.75,pitch:.16,dist:7.2,fly:0},{title:"WHEELS UP",text:"The wheels fold away, the cold-gas thrusters fire and the roadster simply flies.",yaw:3.95,pitch:.03,dist:6.8,fly:1},{title:"FLY ANYWHERE",text:"Thread the ring chains, skim the bay, slip under the bridge, land on a rooftop.",yaw:1.5,pitch:.3,dist:8.4,fly:1},{title:"STUNT FOR PAINT",text:"Flips, drifts, near misses and combos earn points that unlock 13 more colours.",yaw:5.3,pitch:.14,dist:7,fly:0},{title:"FRAME THE SHOT",text:"Photo mode with golden hour, clear day and night. Save it and show it off.",yaw:2.9,pitch:.42,dist:9,fly:0}],ts=1/120,yr=()=>new Promise(s=>requestAnimationFrame(()=>s())),ks=new L,ed=new L,Yc=class{constructor(){this.state="loading",this.returnTo="menu",this.acc=0,this.last=0,this.launch=null,this.cine=null,this.timeScale=1,this.pend={fly:!1,boostPressed:!1},this.respawning=!1,this.playTime=0,this.hinted={},this.show={pos:new L(0,jn,0),quat:new Ee,vel:new L,yaw:0,speed:0,mode:"show",fold:0,lift:0,thrust:0,hover:0,alt:0,groundY:jn,slide:-1,t:99},this.showCam={pos:new L(0,jn,0),yaw:0}}async boot(){let t=document.getElementById("game");this.audio=new ra,this.ui=new la(this),this.ui.loading(.08,"Charging the thrusters\u2026"),await yr(),await Si.init(),Si.loadingStart(),Ht.load(),this.ui.buildHelp();try{await Promise.race([document.fonts.load('italic 700 40px "Barlow Condensed"'),new Promise(i=>setTimeout(i,1500))])}catch{}this.ui.loading(.2,"Raising the island\u2026"),await yr(),this.gfx=new Ho(t),this.scene=new Cs,this.camera=new Je(60,innerWidth/innerHeight,.6,9e3),this.world=new Zo(this.scene,this.gfx.renderer),this.ui.loading(.62,"Polishing the paint\u2026"),await yr(),this.model=new Qo,this.scene.add(this.model.root),this.scene.add(td()),this.car=new ea(this.world),this.rig=new ia(this.camera,this.world),this.fx=new sa(this.scene,this.model),this.input=new Uo(t,Ht.data.keys),this.stunts=new oa(this),this.minimap=new aa(document.getElementById("minimap"),this.world),this.input.onTouchMode=i=>this.ui.touchMode(i),this.input.onJoy=(i,n,r,o)=>this.ui.joy(i,n,r,o),this.input.bindButton(document.getElementById("t-boost"),"boost"),this.input.bindButton(document.getElementById("t-shift"),"shift"),this.input.bindButton(document.getElementById("t-fly"),"fly"),matchMedia("(pointer: coarse)").matches&&"ontouchstart"in window&&(this.input.isTouch=!0,this.ui.touchMode(!0)),this.gfx.init(this.scene,this.camera,this.world),this.applySettings(!0),this.setPaint(Ht.data.paint),this.rig.orbit.yaw=2.45,this.rig.orbit.pitch=.12,this.rig.orbit.dist=7.6,this.rig.orbit.floor=jn+.25,this.updateShow(0,!1),this.ui.loading(.85,"Warming up the shaders\u2026"),await yr();try{this.gfx.renderer.compile(this.scene,this.camera)}catch{}this.gfx.render(),this.ui.loading(1,"Ready for take-off"),await yr(),Si.onMute=i=>this.audio.setMuted(i),this.audio.setMuted(Si.muted);let e=()=>this.audio.unlock();addEventListener("pointerdown",e),addEventListener("keydown",e),addEventListener("touchend",e),document.addEventListener("visibilitychange",()=>{document.hidden?(this.state==="play"&&this.act("pause"),this.audio.suspend(!0),Ht.flush()):this.audio.suspend(!1)}),addEventListener("pagehide",()=>Ht.flush()),addEventListener("resize",()=>this.gfx.resize(!0)),Si.loadingStop(),this.ui.loadingDone(),this.setState("menu"),this.last=performance.now(),requestAnimationFrame(i=>this.frame(i))}setState(t){let e=this.state;if(this.state=t,this.ui.show(t==="play"?null:t),t==="play"?Si.gameplayStart():Si.gameplayStop(),this.rig.orbit.floor=t==="menu"||t==="garage"?jn+.25:null,this.fx&&this.fx.reset(),t==="menu"&&(this.show.slide=-1,this.show.t=99),t==="menu"||t==="garage"){let i=this.rig.orbit;i.roll=0,i.panY=0,i.fov=40,t==="garage"?(i.dist=6.6,i.pitch=.2,i.panX=0):(i.dist=7.6,i.pitch=.11,i.panX=this.camera.aspect>1?2.1:0,e==="loading"&&(i.yaw=2.45))}t!=="play"&&(this.ui.cinematic(!1),this.ui.hint(null)),t!=="play"&&t!=="photo"&&Ht.flush()}act(t){switch(t){case"play":this.audio.unlock(),(this.car.mode!=="drive"||this.car.overWater)&&this.car.reset(We.x,We.z,We.yaw),this.rig.snap(this.car),this.fx.reset(),this.setState("play"),this.firstHints();break;case"resume":this.setState("play");break;case"pause":this.state==="play"&&(this.endCinematic(),this.setState("pause"));break;case"garage":this.returnTo=this.state,this.setState("garage");break;case"settings":this.returnTo=this.state,this.setState("settings");break;case"help":this.returnTo=this.state,this.setState("help");break;case"photo":if(this.state==="play"||this.state==="pause"){this.endCinematic();let e=this.rig.orbit;e.yaw=Math.atan2(this.camera.position.x-this.car.pos.x,this.camera.position.z-this.car.pos.z)-this.car.yaw,e.pitch=.16,e.dist=8,e.roll=0,e.fov=42,e.panX=0,e.panY=0,document.getElementById("p-fov").value=42,document.getElementById("p-roll").value=0,document.getElementById("p-pan").value=0,this.setState("photo")}break;case"menu":this.stunts.bank(),this.car.reset(We.x,We.z,We.yaw),this.syncModel(0),this.setState("menu");break;case"respawn":this.stunts.fail(),this.car.reset(We.x,We.z,We.yaw),this.rig.snap(this.car),this.fx.reset(),this.setState("play");break;case"back":if(this.state==="garage"){let e=this.ui.gSel;e&&Ht.data.unlocked.includes(e)&&(Ht.data.paint=e,Ht.touch()),this.setPaint(Ht.data.paint),this.ui.gSel=null}this.setState(this.state==="photo"?"play":this.returnTo==="pause"?"pause":"menu");break;default:}}applySettings(t){let e=Ht.data.settings;this.audio.setVolumes({master:e.master,music:e.music,sfx:e.sfx}),(t||e.quality!==this.gfx.setting)&&this.gfx.setQuality(e.quality),(e.time!==this.world.sky.name||t)&&this.world.sky.setTime(e.time,!!t),this.rig.sens=e.sens}cycleTime(){let t=Ht.data.settings;t.time=Bs[(Bs.indexOf(t.time)+1)%Bs.length],this.world.sky.setTime(t.time,!1),this.ui.photoTime(),Ht.touch()}setPaint(t){let e=vi.find(i=>i.id===t)||vi[0];this.model.setPaint(e)}previewPaint(t){this.setPaint(t)}onUnlock(t){this.ui.toast(`New paint \xB7 ${t.name}`,"big","Open the garage to equip it",3600),this.audio.play("unlock"),this.fx.burst("confetti",this.car.pos.x,this.car.pos.y,this.car.pos.z,0,0,0,40),Si.happytime()}resetProgress(){Ht.reset(),this.setPaint(Ht.data.paint),this.ui.last={}}photoSliders(t,e,i){let n=this.rig.orbit;n.fov=t,n.roll=e*Math.PI/180,n.panY=i/10}takePhoto(){document.body.classList.add("photo-clean"),this.audio.play("shutter");let t=this.gfx.snapshot(),e=t.getContext("2d"),i=t.width,n=t.height,r=Math.max(12,n/46),o=e.createRadialGradient(i/2,n*.46,n*.45,i/2,n*.46,Math.hypot(i,n)*.62);o.addColorStop(0,"rgba(10,4,8,0)"),o.addColorStop(1,"rgba(10,4,8,0.32)"),e.fillStyle=o,e.fillRect(0,0,i,n),e.font=`italic 700 ${r*1.5}px "Barlow Condensed", Arial, sans-serif`,e.textAlign="right",e.textBaseline="alphabetic",e.fillStyle="rgba(255,255,255,0.92)",e.shadowColor="rgba(0,0,0,0.5)",e.shadowBlur=r*.5,e.fillText("FLYING ROADSTER",i-r*1.2,n-r*1.1),this.ui.flash(),t.toBlob(async a=>{if(document.body.classList.remove("photo-clean"),document.getElementById("p-hide").textContent="HIDE UI",!a)return;let l=new File([a],"flying-roadster.png",{type:"image/png"});try{if(this.input.isTouch&&navigator.canShare&&navigator.canShare({files:[l]})){await navigator.share({files:[l],title:"Flying Roadster"});return}}catch{}let c=document.createElement("a");c.href=URL.createObjectURL(a),c.download=`flying-roadster-${Date.now()}.png`,document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(c.href),4e3)},"image/png")}firstHints(){if(this.hinted.start)return;this.hinted.start=!0;let t=e=>$n(Ht.data.keys[e][0]);this.input.isTouch?this.ui.hint("<span>Push the stick <b>up</b> for gas</span><span><b>BOOST</b> down the runway</span><span>Hit the <b>ramp</b></span>",9e3):this.ui.hint(`<span><kbd>${t("forward")}</kbd>Accelerate</span><span><kbd>${t("left")}</kbd><kbd>${t("right")}</kbd>Steer</span><span><kbd>${t("boost")}</kbd>Boost</span><span><b>Hit the ramp at full speed</b></span>`,1e4)}handle(t){let e=this.car,i=this.fx,n=this.audio,r=e.pos,o=Ht.data.settings.shake?1:0;switch(this.stunts.onEvent(t),t.type){case"launch":e.foldTarget=1,e.launching=!0,n.play("fold",{rate:.7}),this.launch={t:0},Ht.data.settings.cinematic&&(this.cine={t:0,dur:2.8},this.rig.startCinematic(e,2.8),this.ui.cinematic(!0));break;case"engage":{if(ed.set(-Math.sin(e.yaw),.15,-Math.cos(e.yaw)),ks.set(0,.6,-2.3).applyQuaternion(e.quat).add(r),i.shockwave(ks,ed,t.fromRamp?12:7),i.burst("ignite",ks.x,ks.y,ks.z,e.vel.x*.5,e.vel.y*.5,e.vel.z*.5,t.fromRamp?34:18),n.play("ignite",{gain:t.fromRamp?1:.7}),t.fromRamp||n.play("fold"),this.rig.addShake(.5*o),t.fromRamp&&(this.ui.flash(),this.cine?this.ui.cineTitle():this.ui.toast("Lift-off","big","Wheels up \xB7 thrusters on",1800)),t.wasGround&&i.burst("dust",r.x,r.y,r.z,0,0,0,14),!this.hinted.fly){this.hinted.fly=!0;let a=l=>$n(Ht.data.keys[l][0]);setTimeout(()=>{this.state==="play"&&(this.input.isTouch?this.ui.hint("<span><b>UP</b> climb</span><span><b>DOWN</b> descend &amp; land</span><span>Fly through the <b>rings</b></span>",9e3):this.ui.hint(`<span><kbd>${a("boost")}</kbd>Climb</span><span><kbd>${a("shift")}</kbd>Descend &amp; land</span><span><kbd>${a("rollL")}</kbd><kbd>${a("rollR")}</kbd>Roll</span><span>Fly through the <b>rings</b></span>`,9e3))},t.fromRamp?2600:600)}break}case"disengage":n.play("unfold");break;case"land":n.play("land",{gain:Pt(.4+t.impact/20,.4,1)}),t.fromFlight&&n.play("unfold",{gain:.6}),i.burst("dust",r.x,r.y,r.z,e.vel.x,0,e.vel.z,t.fromFlight?10:Pt(Math.round(t.impact),6,20)),this.rig.addShake(Pt(t.impact/28,.1,.7)*o),t.fromFlight&&!this.hinted.land&&(this.hinted.land=!0,this.input.isTouch?this.ui.hint("<span>Tap <b>FLY</b> to take off anywhere</span>",6e3):this.ui.hint(`<span><kbd>${$n(Ht.data.keys.fly[0])}</kbd>Take off again anywhere</span>`,6e3)),this.launch=null;break;case"thump":t.impact>5&&(n.play("thud",{gain:Pt(t.impact/22,.25,.9),vary:.2}),this.rig.addShake(Pt(t.impact/50,0,.4)*o));break;case"crash":n.play("crash",{gain:Pt(t.impact/26,.5,1),vary:.15}),n.play("crash2",{gain:Pt(t.impact/30,.4,.9),rate:.8,vary:.2}),i.burst("spark",t.x??r.x,t.y??r.y+.5,t.z??r.z,e.vel.x,2,e.vel.z,22),this.rig.addShake(.9*o),this.launch=null,e.launching=!1,this.endCinematic();break;case"scrape":n.play("scrape",{gain:Pt(t.impact/9,.3,.9),vary:.3}),i.burst("spark",t.x,t.y,t.z,e.vel.x,1,e.vel.z,8),this.rig.addShake(.25*o);break;case"near":case"under":n.play("whoosh",{rate:.55,vary:.2});break;case"barrel":n.play("whoosh2",{rate:.5});break;case"jump":t.speed>30&&n.play("whoosh",{gain:.5,rate:.42});break;case"edge":this.ui.toast("Turning back to the island","","",1800);break;case"splash":if(this.respawning)break;this.respawning=!0,n.play("splash"),i.burst("splash",r.x,.2,r.z,e.vel.x,0,e.vel.z,36),this.stunts.fail(),this.endCinematic(),this.launch=null,this.ui.toast("Splashdown","bad","Back to dry land",1600),setTimeout(()=>this.ui.fade(!0),250),setTimeout(()=>{this.car.respawn(),this.rig.snap(this.car),this.fx.reset(),this.syncModel(0),this.ui.fade(!1),this.respawning=!1},640);break;default:}}tick(t){let e=this.car;if(e.step(ts,t),this.launch&&(this.launch.t+=ts,e.mode!=="air"?this.launch=null:this.launch.t>=.34&&(e.engageFlight(!0),this.launch=null)),e.events.length){let i=e.events.splice(0);for(let n of i)this.handle(n)}this.stunts.update(ts,e)}debugAdvance(t,e={}){let i=Object.assign({steer:0,throttle:0,boost:!1,shift:!1,roll:0,fly:!1,boostPressed:!1,look:!1},e);for(let n=Math.round(t/ts);n>0;n--)this.tick(i),i.fly=i.boostPressed=!1;this.syncModel(ts)}endCinematic(){this.cine&&(this.cine=null,this.rig.cine=null,this.timeScale=1,this.ui.cinematic(!1))}syncModel(t){let e=this.car,i=this.model;i.root.position.copy(e.pos),i.root.quaternion.copy(e.quat);let n=e.mode==="fly"?Math.sin(this.world.time*2.1)*.05*(1-Pt(e.speed/30,0,1)):0,r=e.mode==="drive"?Pt(e.yawRate*e.speed*.0024,-.06,.06):0,o=e.mode==="drive"?e.boosting?-.022:e.braking?.02:0:0;i.body.rotation.z=Ot(i.body.rotation.z,r,1-Math.exp(-8*t)),i.body.rotation.x=Ot(i.body.rotation.x,o,1-Math.exp(-8*t)),i.body.position.y=n;let a=Math.sin(e.yaw),l=Math.cos(e.yaw),c=e.vel.x*a+e.vel.z*l;i.pose(e.fold,e.steer*Ot(.5,.12,Pt(e.speed/60,0,1)),c*t/.35,e.lift),i.setLights(e.braking?1:0,this.world.sky.v.lamps>1.2?1:this.world.sky.v.lamps*.5)}updateShow(t,e,i){let n=this.show,r=this.rig.orbit,o=this.model;n.t+=t,!e&&n.t>4.6&&(n.t=0,n.slide=(n.slide+1)%ca.length,this.ui.slide(n.slide,ca.length,ca[n.slide]));let a=e?{fly:0}:ca[Math.max(0,n.slide)];e||(r.yaw=An(r.yaw,a.yaw,1.6,t)+t*.05,r.pitch=se(r.pitch,a.pitch,1.6,t),r.dist=se(r.dist,a.dist,1.6,t)),n.fold=Pt(n.fold+(a.fly?1:-1)*t/.7,0,1),n.lift=se(n.lift,a.fly?.75:0,3,t),n.thrust=se(n.thrust,a.fly?.45:0,3,t),n.hover=se(n.hover,a.fly?.85:0,2.2,t),n.yaw+=t*(e?.12:.22),n.pos.y=jn+n.hover+Math.sin(this.world.time*2)*.04*n.hover,n.quat.setFromAxisAngle(ks.set(0,1,0),n.yaw),o.root.position.copy(n.pos),o.root.quaternion.copy(n.quat),o.body.rotation.set(Math.sin(this.world.time*1.3)*.02*n.hover,0,0),o.body.position.y=0,o.pose(n.fold,0,0,n.lift),o.setLights(0,1),this.rig.updateOrbit(t,this.showCam,e?i:null,0),this.world.update(t,this.camera,n.pos),this.fx.update(t,n,this.camera,this.gfx.h)}frame(t){requestAnimationFrame(l=>this.frame(l));let e=Math.min((t-this.last)/1e3,.1);this.last=t;let i=this.input.poll(this.car.mode==="fly"),n=this.input.takeDrag(),r=this.car,o=this.input.state,a=0;if(this.state==="play"?i.pause?this.act("pause"):i.photo?this.act("photo"):i.reset&&!this.respawning&&(this.stunts.fail(),r.respawn(),this.rig.snap(r),this.fx.reset()):i.pause?this.state==="pause"?this.act("resume"):(this.state==="photo"||this.state==="garage"||this.state==="settings"||this.state==="help")&&this.act("back"):this.state==="photo"&&i.photo&&this.act("back"),this.state==="play"){if(this.gfx.adapt(e),this.playTime+=e,this.cine){let c=this.cine;c.t+=e;let h=c.t/c.dur;this.timeScale=h<.07?Ot(1,.17,h/.07):h<.74?.17:Ot(.17,1,jt(.74,1,h)),h>=1&&this.endCinematic()}a=e*this.timeScale,o.fly&&(this.pend.fly=!0),o.boostPressed&&(this.pend.boostPressed=!0),this.acc+=a;let l=0;for(;this.acc>=ts&&l<14;)o.fly=this.pend.fly,o.boostPressed=this.pend.boostPressed,this.pend.fly=this.pend.boostPressed=!1,this.respawning&&(o.fly=!1,o.boostPressed=!1),this.tick(o),this.acc-=ts,l++;l===14&&(this.acc=0),o.fly=o.boostPressed=!1,this.syncModel(a),this.rig.update(e,r,n,{lookBack:o.look,realDt:e}),this.world.update(a,this.camera,r.pos),this.fx.update(a,r,this.camera,this.gfx.h),this.ui.hud(r,this.stunts),this.minimap.draw(r),this.hinted.start&&!this.hinted.startDone&&(r.speed>28||r.mode!=="drive")&&(this.hinted.startDone=!0,this.ui.hint(null))}else this.state==="menu"||this.state==="garage"?this.updateShow(e,this.state==="garage",n):this.state==="photo"?(this.rig.updateOrbit(e,r,n,0),this.world.update(0,this.camera,r.pos),this.world.sky.update(e,this.camera,r.pos)):this.world.update(0,this.camera,r.pos);this.audio.update(e,r,this.state==="play",this.timeScale),this.gfx.render()}},id=new Yc;window.__game=id;id.boot().catch(s=>{console.error(s);let t=document.getElementById("load-tip");t&&(t.textContent="Could not start: WebGL is unavailable on this device.")});})();
