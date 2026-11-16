(()=>{var Ku=0,$c=1,Qu=2;var ou=1,uc=2,Qi=3,_n=0,Ze=1,De=2,Hi=0,yn=1,$e=2,Jc=3,Kc=4,ju=5,Nn=100,td=101,ed=102,id=103,nd=104,sd=200,rd=201,od=202,ad=203,Ha=204,Va=205,ld=206,cd=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,Ga=0,Wa=1,Xa=2,vs=3,Ya=4,qa=5,Za=6,$a=7,dc=0,xd=1,yd=2,vn=0,fc=1,pc=2,mc=3,or=4,vd=5,gc=6,xc=7;var au=300,_s=301,Ms=302,Ja=303,Ka=304,Eo=306,sn=1e3,tn=1001,Qa=1002,di=1003,_d=1004;var yr=1005;var _i=1006,oa=1007;var On=1008;var Li=1009,lu=1010,cu=1011,tr=1012,yc=1013,Bn=1014,ki=1015,fi=1016,vc=1017,_c=1018,bs=1020,hu=35902,uu=1021,du=1022,Ii=1023,fu=1024,pu=1025,gs=1026,Ss=1027,ar=1028,Mc=1029,mu=1030,bc=1031;var Sc=1033,Yr=33776,qr=33777,Zr=33778,$r=33779,ja=35840,tl=35841,el=35842,il=35843,nl=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,xl=37819,yl=37820,vl=37821,Jr=36492,_l=36494,Ml=36495,gu=36283,bl=36284,Sl=36285,wl=36286;var Kr=2300,El=2301,aa=2302,Qc=2400,jc=2401,th=2402;var Md=3200,bd=3201;var wc=0,Sd=1,xn="",Ce="srgb",Ds="srgb-linear",To="linear",ae="srgb";var ts=7680;var eh=519,wd=512,Ed=513,Td=514,xu=515,Ad=516,Rd=517,Cd=518,Pd=519,ih=35044,Xn=35048;var nh="300 es",en=2e3,Qr=2001,Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var la=Math.PI/180,Tl=180/Math.PI;function lr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[s&255]+Ye[s>>8&255]+Ye[s>>16&255]+Ye[s>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function ze(s,t,e){return Math.max(t,Math.min(e,s))}function Id(s,t){return(s%t+t)%t}function ca(s,t,e){return(1-e)*s+e*t}function Hs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var gt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],x=n[0],p=n[3],m=n[6],y=n[1],M=n[4],v=n[7],C=n[2],w=n[5],E=n[8];return r[0]=o*x+a*y+l*C,r[3]=o*p+a*M+l*w,r[6]=o*m+a*v+l*E,r[1]=c*x+h*y+u*C,r[4]=c*p+h*M+u*w,r[7]=c*m+h*v+u*E,r[2]=f*x+d*y+g*C,r[5]=f*p+d*M+g*w,r[8]=f*m+d*v+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+i*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ha=new Wt;function yu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ld(){let s=jr("canvas");return s.style.display="block",s}var sh={};function $s(s){s in sh||(sh[s]=!0,console.warn(s))}function Dd(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ud(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=nn(s.r),s.g=nn(s.g),s.b=nn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xn?To:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function nn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var rh=[.64,.33,.3,.6,.15,.06],oh=[.2126,.7152,.0722],ah=[.3127,.329],lh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ch=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[Ds]:{primaries:rh,whitePoint:ah,transfer:To,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:oh,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:rh,whitePoint:ah,transfer:ae,toXYZ:lh,fromXYZ:ch,luminanceCoefficients:oh,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});var es,Al=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=jr("canvas")),es.width=t.width,es.height=t.height;let i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=jr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=nn(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(nn(e[i]/255)*255):e[i]=nn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fd=0,to=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=lr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(ua(n[o].image)):r.push(ua(n[o]))}else r=ua(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Al.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zd=0,ai=class s extends Mn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=tn,n=tn,r=_i,o=On,a=Ii,l=Li,c=s.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=lr(),this.name="",this.source=new to(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sn:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sn:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=au;ai.DEFAULT_ANISOTROPY=1;var Ee=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,C=(m+1)/2,w=(h+f)/4,E=(u+x)/4,A=(g+p)/4;return M>v&&M>C?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=w/i,r=E/i):v>C?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=w/n,r=A/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=E/r,n=A/r),this.set(i,n,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends Mn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ai(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new to(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends Rl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},eo=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Te=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let p=1-a,m=l*f+c*d+h*g+u*x,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let C=Math.sqrt(M),w=Math.atan2(C,m*y);p=Math.sin(p*w)/C,a=Math.sin(a*w)/C}let v=a*y;if(l=l*p+f*v,c=c*p+d*v,h=h*p+g*v,u=u*p+x*v,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),f=l(i/2),d=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-n)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},da=new L,hh=new Te,rn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ri):Ri.fromBufferAttribute(r,o),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vr.copy(i.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),_r.subVectors(this.max,Vs),is.subVectors(t.a,Vs),ns.subVectors(t.b,Vs),ss.subVectors(t.c,Vs),un.subVectors(ns,is),dn.subVectors(ss,ns),Rn.subVectors(is,ss);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-Rn.z,Rn.y,un.z,0,-un.x,dn.z,0,-dn.x,Rn.z,0,-Rn.x,-un.y,un.x,0,-dn.y,dn.x,0,-Rn.y,Rn.x,0];return!fa(e,is,ns,ss,_r)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,is,ns,ss,_r))?!1:(Mr.crossVectors(un,dn),e=[Mr.x,Mr.y,Mr.z],fa(e,is,ns,ss,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qi=[new L,new L,new L,new L,new L,new L,new L,new L],Ri=new L,vr=new rn,is=new L,ns=new L,ss=new L,un=new L,dn=new L,Rn=new L,Vs=new L,_r=new L,Mr=new L,Cn=new L;function fa(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Cn.fromArray(s,r);let a=n.x*Math.abs(Cn.x)+n.y*Math.abs(Cn.y)+n.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=i.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Od=new rn,Gs=new L,pa=new L,on=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Od.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Gs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(pa)),this.expandByPoint(Gs.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zi=new L,ma=new L,br=new L,fn=new L,ga=new L,Sr=new L,xa=new L,er=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ma.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(ma);let r=t.distanceTo(e)*.5,o=-this.direction.dot(br),a=fn.dot(this.direction),l=-fn.dot(br),c=fn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ma).addScaledVector(br,f),d}intersectSphere(t,e){Zi.subVectors(t.center,this.origin);let i=Zi.dot(this.direction),n=Zi.dot(Zi)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,i,n,r){ga.subVectors(e,t),Sr.subVectors(i,t),xa.crossVectors(ga,Sr);let o=this.direction.dot(xa),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fn.subVectors(this.origin,t);let l=a*this.direction.dot(Sr.crossVectors(fn,Sr));if(l<0)return null;let c=a*this.direction.dot(ga.cross(fn));if(c<0||l+c>o)return null;let h=-a*fn.dot(xa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class s{constructor(t,e,i,n,r,o,a,l,c,h,u,f,d,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,f,d,g,x,p)}set(t,e,i,n,r,o,a,l,c,h,u,f,d,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,kd)}lookAt(t,e,i){let n=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),pn.crossVectors(i,hi),pn.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),pn.crossVectors(i,hi)),pn.normalize(),wr.crossVectors(hi,pn),n[0]=pn.x,n[4]=wr.x,n[8]=hi.x,n[1]=pn.y,n[5]=wr.y,n[9]=hi.y,n[2]=pn.z,n[6]=wr.z,n[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],x=i[6],p=i[10],m=i[14],y=i[3],M=i[7],v=i[11],C=i[15],w=n[0],E=n[4],A=n[8],b=n[12],_=n[1],P=n[5],N=n[9],B=n[13],W=n[2],Q=n[6],X=n[10],it=n[14],k=n[3],lt=n[7],ut=n[11],vt=n[15];return r[0]=o*w+a*_+l*W+c*k,r[4]=o*E+a*P+l*Q+c*lt,r[8]=o*A+a*N+l*X+c*ut,r[12]=o*b+a*B+l*it+c*vt,r[1]=h*w+u*_+f*W+d*k,r[5]=h*E+u*P+f*Q+d*lt,r[9]=h*A+u*N+f*X+d*ut,r[13]=h*b+u*B+f*it+d*vt,r[2]=g*w+x*_+p*W+m*k,r[6]=g*E+x*P+p*Q+m*lt,r[10]=g*A+x*N+p*X+m*ut,r[14]=g*b+x*B+p*it+m*vt,r[3]=y*w+M*_+v*W+C*k,r[7]=y*E+M*P+v*Q+C*lt,r[11]=y*A+M*N+v*X+C*ut,r[15]=y*b+M*B+v*it+C*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*u-n*c*u-r*a*f+i*c*f+n*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-n*o*d+n*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-n*a*h-e*l*u+e*a*f+n*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=u*p*c-x*f*c+x*l*d-a*p*d-u*l*m+a*f*m,M=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*m+o*u*m,C=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,w=e*y+i*M+n*v+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=y*E,t[1]=(x*f*r-u*p*r-x*n*d+i*p*d+u*n*m-i*f*m)*E,t[2]=(a*p*r-x*l*r+x*n*c-i*p*c-a*n*m+i*l*m)*E,t[3]=(u*l*r-a*f*r-u*n*c+i*f*c+a*n*d-i*l*d)*E,t[4]=M*E,t[5]=(h*p*r-g*f*r+g*n*d-e*p*d-h*n*m+e*f*m)*E,t[6]=(g*l*r-o*p*r-g*n*c+e*p*c+o*n*m-e*l*m)*E,t[7]=(o*f*r-h*l*r+h*n*c-e*f*c-o*n*d+e*l*d)*E,t[8]=v*E,t[9]=(g*u*r-h*x*r-g*i*d+e*x*d+h*i*m-e*u*m)*E,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*m+e*a*m)*E,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*E,t[12]=C*E,t[13]=(h*x*n-g*u*n+g*i*f-e*x*f-h*i*p+e*u*p)*E,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*p-e*a*p)*E,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*f+e*a*f)*E,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,p=o*u,m=a*u,y=l*c,M=l*h,v=l*u,C=i.x,w=i.y,E=i.z;return n[0]=(1-(x+m))*C,n[1]=(d+v)*C,n[2]=(g-M)*C,n[3]=0,n[4]=(d-v)*w,n[5]=(1-(f+m))*w,n[6]=(p+y)*w,n[7]=0,n[8]=(g+M)*E,n[9]=(p-y)*E,n[10]=(1-(f+x))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=rs.set(n[0],n[1],n[2]).length(),o=rs.set(n[4],n[5],n[6]).length(),a=rs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Ci.copy(this);let c=1/r,h=1/o,u=1/a;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=u,Ci.elements[9]*=u,Ci.elements[10]*=u,e.setFromRotationMatrix(Ci),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=en){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),d,g;if(a===en)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=en){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),f=(e+t)*c,d=(i+n)*h,g,x;if(a===en)g=(o+r)*u,x=-2*u;else if(a===Qr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},rs=new L,Ci=new jt,Bd=new L(0,0,0),kd=new L(1,1,1),pn=new L,wr=new L,hi=new L,uh=new jt,dh=new Te,Pe=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pe.DEFAULT_ORDER="XYZ";var io=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hd=0,fh=new L,os=new Te,$i=new jt,Er=new L,Ws=new L,Vd=new L,Gd=new Te,ph=new L(1,0,0),mh=new L(0,1,0),gh=new L(0,0,1),xh={type:"added"},Wd={type:"removed"},as={type:"childadded",child:null},ya={type:"childremoved",child:null},He=class s extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Pe,i=new Te,n=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new jt},normalMatrix:{value:new Wt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Er.copy(t):Er.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ws,Er,this.up):$i.lookAt(Er,Ws,this.up),this.quaternion.setFromRotationMatrix($i),n&&($i.extractRotation(n.matrixWorld),os.setFromRotationMatrix($i),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wd),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$i.multiply(t.parent.matrixWorld)),t.applyMatrix4($i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};He.DEFAULT_UP=new L(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pi=new L,Ji=new L,va=new L,Ki=new L,ls=new L,cs=new L,yh=new L,_a=new L,Ma=new L,ba=new L,Sa=new Ee,wa=new Ee,Ea=new Ee,Fn=class s{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Pi.subVectors(t,e),n.cross(Pi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Pi.subVectors(n,e),Ji.subVectors(i,e),va.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(Ji),l=Pi.dot(va),c=Ji.dot(Ji),h=Ji.dot(va),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Sa.setScalar(0),wa.setScalar(0),Ea.setScalar(0),Sa.fromBufferAttribute(t,e),wa.fromBufferAttribute(t,i),Ea.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(wa,r.y),o.addScaledVector(Ea,r.z),o}static isFrontFacing(t,e,i,n){return Pi.subVectors(i,e),Ji.subVectors(t,e),Pi.cross(Ji).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Pi.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;ls.subVectors(n,i),cs.subVectors(r,i),_a.subVectors(t,i);let l=ls.dot(_a),c=cs.dot(_a);if(l<=0&&c<=0)return e.copy(i);Ma.subVectors(t,n);let h=ls.dot(Ma),u=cs.dot(Ma);if(h>=0&&u<=h)return e.copy(n);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ls,o);ba.subVectors(t,r);let d=ls.dot(ba),g=cs.dot(ba);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(cs,a);let p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return yh.subVectors(r,n),a=(u-h)/(u-h+(d-g)),e.copy(n).addScaledVector(yh,a);let m=1/(p+x+f);return o=x*m,a=f*m,e.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Ta(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ft=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ie.workingColorSpace){if(t=Id(t,1),e=ze(e,0,1),i=ze(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ta(o,r,t+1/3),this.g=Ta(o,r,t),this.b=Ta(o,r,t-1/3)}return ie.toWorkingColorSpace(this,n),this}setStyle(t,e=Ce){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let i=vu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nn(t.r),this.g=nn(t.g),this.b=nn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ie.fromWorkingColorSpace(qe.copy(this),t),Math.round(ze(qe.r*255,0,255))*65536+Math.round(ze(qe.g*255,0,255))*256+Math.round(ze(qe.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(qe.copy(this),e);let i=qe.r,n=qe.g,r=qe.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ce){ie.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,n=qe.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(Tr);let i=ca(mn.h,Tr.h,e),n=ca(mn.s,Tr.s,e),r=ca(mn.l,Tr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new ft;ft.NAMES=vu;var Xd=0,Vi=class extends Mn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=lr(),this.name="",this.blending=yn,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Va,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yn&&(i.blending=this.blending),this.side!==_n&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ha&&(i.blendSrc=this.blendSrc),this.blendDst!==Va&&(i.blendDst=this.blendDst),this.blendEquation!==Nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ae=class extends Vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new L,Ar=new gt,be=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ih,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array),n=oi(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),i=oi(i,this.array),n=oi(n,this.array),r=oi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ih&&(t.usage=this.usage),t}};var no=class extends be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var so=class extends be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Et=class extends be{constructor(t,e,i){super(new Float32Array(t),e,i)}},Yd=0,vi=new jt,Aa=new He,hs=new L,ui=new rn,Xs=new rn,Fe=new L,Xt=class s extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yu(t)?so:no)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,e,i){return vi.makeTranslation(t,e,i),this.applyMatrix4(vi),this}scale(t,e,i){return vi.makeScale(t,e,i),this.applyMatrix4(vi),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(ui.min,Xs.min),ui.expandByPoint(Fe),Fe.addVectors(ui.max,Xs.max),ui.expandByPoint(Fe)):(ui.expandByPoint(Xs.min),ui.expandByPoint(Xs.max))}ui.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),Fe.add(hs)),n=Math.max(n,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new L,l[A]=new L;let c=new L,h=new L,u=new L,f=new gt,d=new gt,g=new gt,x=new L,p=new L;function m(A,b,_){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,_),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[A].add(x),a[b].add(x),a[_].add(x),l[A].add(p),l[b].add(p),l[_].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,b=y.length;A<b;++A){let _=y[A],P=_.start,N=_.count;for(let B=P,W=P+N;B<W;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new L,v=new L,C=new L,w=new L;function E(A){C.fromBufferAttribute(n,A),w.copy(C);let b=a[A];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(w,b);let P=v.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,P)}for(let A=0,b=y.length;A<b;++A){let _=y[A],P=_.start,N=_.count;for(let B=P,W=P+N;B<W;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new be(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vh=new jt,Pn=new er,Rr=new on,_h=new L,Cr=new L,Pr=new L,Ir=new L,Ra=new L,Lr=new L,Mh=new L,Dr=new L,Pt=class extends He{constructor(t=new Xt,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ra.fromBufferAttribute(u,t),o?Lr.addScaledVector(Ra,h):Lr.addScaledVector(Ra.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(Rr.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Rr,_h)===null||Pn.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(vh.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(vh),!(i.boundingBox!==null&&Pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,C=M;v<C;v+=3){let w=a.getX(v),E=a.getX(v+1),A=a.getX(v+2);n=Ur(this,m,t,i,c,h,u,w,E,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);n=Ur(this,o,t,i,c,h,u,y,M,v),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,C=M;v<C;v+=3){let w=v,E=v+1,A=v+2;n=Ur(this,m,t,i,c,h,u,w,E,A),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let y=p,M=p+1,v=p+2;n=Ur(this,o,t,i,c,h,u,y,M,v),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function qd(s,t,e,i,n,r,o,a){let l;if(t.side===Ze?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===_n,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:s}}function Ur(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Cr),s.getVertexPosition(l,Pr),s.getVertexPosition(c,Ir);let h=qd(s,t,e,i,Cr,Pr,Ir,Mh);if(h){let u=new L;Fn.getBarycoord(Mh,Cr,Pr,Ir,u),n&&(h.uv=Fn.getInterpolatedAttribute(n,a,l,c,u,new gt)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,a,l,c,u,new gt)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};Fn.getNormal(Cr,Pr,Ir,f.normal),h.face=f,h.barycoord=u}return h}var Oe=class s extends Xt{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(u,2));function g(x,p,m,y,M,v,C,w,E,A,b){let _=v/E,P=C/A,N=v/2,B=C/2,W=w/2,Q=E+1,X=A+1,it=0,k=0,lt=new L;for(let ut=0;ut<X;ut++){let vt=ut*P-B;for(let Ot=0;Ot<Q;Ot++){let Rt=Ot*_-N;lt[x]=Rt*y,lt[p]=vt*M,lt[m]=W,c.push(lt.x,lt.y,lt.z),lt[x]=0,lt[p]=0,lt[m]=w>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Ot/E),u.push(1-ut/A),it+=1}}for(let ut=0;ut<A;ut++)for(let vt=0;vt<E;vt++){let Ot=f+vt+Q*ut,Rt=f+vt+Q*(ut+1),nt=f+(vt+1)+Q*(ut+1),ht=f+(vt+1)+Q*ut;l.push(Ot,Rt,ht),l.push(Rt,nt,ht),k+=6}a.addGroup(d,k,b),d+=k,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Qe(s){let t={};for(let e=0;e<s.length;e++){let i=ws(s[e]);for(let n in i)t[n]=i[n]}return t}function Zd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function _u(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var En={clone:ws,merge:Qe},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pe=class extends Vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ro=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=en}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gn=new L,bh=new gt,Sh=new gt,je=class extends ro{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Sh),e.subVectors(Sh,bh)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(la*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},us=-90,ds=1,Pl=class extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new je(us,ds,t,e);n.layers=this.layers,this.add(n);let r=new je(us,ds,t,e);r.layers=this.layers,this.add(r);let o=new je(us,ds,t,e);o.layers=this.layers,this.add(o);let a=new je(us,ds,t,e);a.layers=this.layers,this.add(a);let l=new je(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new je(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===en)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},oo=class extends ai{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Il=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new oo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_i}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Oe(5,5,5),r=new pe({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:Hi});r.uniforms.tEquirect.value=e;let o=new Pt(n,r),a=e.minFilter;return e.minFilter===On&&(e.minFilter=_i),new Pl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Ca=new L,Kd=new L,Qd=new Wt,ji=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Ca.subVectors(i,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ca),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Qd.getNormalMatrix(t),n=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},In=new on,Nr=new L,ir=class{constructor(t=new ji,e=new ji,i=new ji,n=new ji,r=new ji,o=new ji){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=en){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],g=n[9],x=n[10],p=n[11],m=n[12],y=n[13],M=n[14],v=n[15];if(i[0].setComponents(l-r,f-c,p-d,v-m).normalize(),i[1].setComponents(l+r,f+c,p+d,v+m).normalize(),i[2].setComponents(l+o,f+h,p+g,v+y).normalize(),i[3].setComponents(l-o,f-h,p-g,v-y).normalize(),i[4].setComponents(l-a,f-u,p-x,v-M).normalize(),e===en)i[5].setComponents(l+a,f+u,p+x,v+M).normalize();else if(e===Qr)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(Nr.x=n.normal.x>0?t.max.x:t.min.x,Nr.y=n.normal.y>0?t.max.y:t.min.y,Nr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mu(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function jd(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Di=class s extends Xt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*f-o;for(let M=0;M<c;M++){let v=M*u-r;g.push(v,-y,0),x.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let M=y+c*m,v=y+c*(m+1),C=y+1+c*(m+1),w=y+1+c*m;d.push(M,v,w),d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
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
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
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
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
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
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pf=`#ifdef USE_IRIDESCENCE
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
#endif`,mf=`#ifdef USE_BUMPMAP
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wf=`#define PI 3.141592653589793
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
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
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
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
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
#endif`,jf=`struct PhysicalMaterial {
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
}`,tp=`
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
#endif`,ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hp=`#if defined( USE_POINTS_UV )
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
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bp=`float getShadowMask() {
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
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
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
}`,am=`#if DEPTH_PACKING == 3200
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
}`,lm=`#define DISTANCE
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
}`,cm=`#define DISTANCE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#define LAMBERT
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
}`,xm=`#define LAMBERT
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
}`,ym=`#define MATCAP
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
}`,vm=`#define MATCAP
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
}`,_m=`#define NORMAL
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
}`,Mm=`#define NORMAL
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
}`,bm=`#define PHONG
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
}`,Sm=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,Em=`#define STANDARD
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
}`,Tm=`#define TOON
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
}`,Am=`#define TOON
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
}`,Rm=`uniform float size;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Im=`uniform vec3 color;
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
}`,Lm=`uniform float rotation;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:tf,alphahash_pars_fragment:ef,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:of,aomap_fragment:af,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:hf,begin_vertex:uf,beginnormal_vertex:df,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:vf,color_fragment:_f,color_pars_fragment:Mf,color_pars_vertex:bf,color_vertex:Sf,common:wf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Af,displacementmap_vertex:Rf,emissivemap_fragment:Cf,emissivemap_pars_fragment:Pf,colorspace_fragment:If,colorspace_pars_fragment:Lf,envmap_fragment:Df,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Nf,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:qf,envmap_vertex:zf,fog_vertex:Of,fog_pars_vertex:Bf,fog_fragment:kf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:Yf,lights_toon_fragment:Zf,lights_toon_pars_fragment:$f,lights_phong_fragment:Jf,lights_phong_pars_fragment:Kf,lights_physical_fragment:Qf,lights_physical_pars_fragment:jf,lights_fragment_begin:tp,lights_fragment_maps:ep,lights_fragment_end:ip,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:op,map_fragment:ap,map_pars_fragment:lp,map_particle_fragment:cp,map_particle_pars_fragment:hp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:xp,normal_fragment_begin:yp,normal_fragment_maps:vp,normal_pars_fragment:_p,normal_pars_vertex:Mp,normal_vertex:bp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ap,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Pp,project_vertex:Ip,dithering_fragment:Lp,dithering_pars_fragment:Dp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:zp,shadowmap_vertex:Op,shadowmask_pars_fragment:Bp,skinbase_vertex:kp,skinning_pars_vertex:Hp,skinning_vertex:Vp,skinnormal_vertex:Gp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:Yp,tonemapping_pars_fragment:qp,transmission_fragment:Zp,transmission_pars_fragment:$p,uv_pars_fragment:Jp,uv_pars_vertex:Kp,uv_vertex:Qp,worldpos_vertex:jp,background_vert:tm,background_frag:em,backgroundCube_vert:im,backgroundCube_frag:nm,cube_vert:sm,cube_frag:rm,depth_vert:om,depth_frag:am,distanceRGBA_vert:lm,distanceRGBA_frag:cm,equirect_vert:hm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:xm,meshmatcap_vert:ym,meshmatcap_frag:vm,meshnormal_vert:_m,meshnormal_frag:Mm,meshphong_vert:bm,meshphong_frag:Sm,meshphysical_vert:wm,meshphysical_frag:Em,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:Rm,points_frag:Cm,shadow_vert:Pm,shadow_frag:Im,sprite_vert:Lm,sprite_frag:Dm},yt={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Bi={basic:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ft(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Qe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Qe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new ft(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Qe([yt.points,yt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Qe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Qe([yt.common,yt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Qe([yt.sprite,yt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Qe([yt.common,yt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Qe([yt.lights,yt.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Bi.physical={uniforms:Qe([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Fr={r:0,b:0,g:0},Ln=new Pe,Um=new jt;function Nm(s,t,e,i,n,r,o){let a=new ft(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1,v=g(y);v===null?m(a,l):v&&v.isColor&&(m(v,1),M=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===Eo)?(h===void 0&&(h=new Pt(new Oe(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:ws(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Ln.copy(M.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Ln)),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==ae,(u!==v||f!==v.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Pt(new Di(2,2),new pe({name:"BackgroundMaterial",uniforms:ws(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ie.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(Fr,_u(s)),i.buffers.color.setClear(Fr.r,Fr.g,Fr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:x,addToRenderList:p}}function Fm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null),r=n,o=!1;function a(_,P,N,B,W){let Q=!1,X=u(B,N,P);r!==X&&(r=X,c(r.object)),Q=d(_,B,N,W),Q&&g(_,B,N,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(_,P,N,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,P,N){let B=N.wireframe===!0,W=i[_.id];W===void 0&&(W={},i[_.id]=W);let Q=W[P.id];Q===void 0&&(Q={},W[P.id]=Q);let X=Q[B];return X===void 0&&(X=f(l()),Q[B]=X),X}function f(_){let P=[],N=[],B=[];for(let W=0;W<e;W++)P[W]=0,N[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:_,attributes:{},index:null}}function d(_,P,N,B){let W=r.attributes,Q=P.attributes,X=0,it=N.getAttributes();for(let k in it)if(it[k].location>=0){let ut=W[k],vt=Q[k];if(vt===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),ut===void 0||ut.attribute!==vt||vt&&ut.data!==vt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(_,P,N,B){let W={},Q=P.attributes,X=0,it=N.getAttributes();for(let k in it)if(it[k].location>=0){let ut=Q[k];ut===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ut=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ut=_.instanceColor));let vt={};vt.attribute=ut,ut&&ut.data&&(vt.data=ut.data),W[k]=vt,X++}r.attributes=W,r.attributesNum=X,r.index=B}function x(){let _=r.newAttributes;for(let P=0,N=_.length;P<N;P++)_[P]=0}function p(_){m(_,0)}function m(_,P){let N=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;N[_]=1,B[_]===0&&(s.enableVertexAttribArray(_),B[_]=1),W[_]!==P&&(s.vertexAttribDivisor(_,P),W[_]=P)}function y(){let _=r.newAttributes,P=r.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==_[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function M(_,P,N,B,W,Q,X){X===!0?s.vertexAttribIPointer(_,P,N,W,Q):s.vertexAttribPointer(_,P,N,B,W,Q)}function v(_,P,N,B){x();let W=B.attributes,Q=N.getAttributes(),X=P.defaultAttributeValues;for(let it in Q){let k=Q[it];if(k.location>=0){let lt=W[it];if(lt===void 0&&(it==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),it==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor)),lt!==void 0){let ut=lt.normalized,vt=lt.itemSize,Ot=t.get(lt);if(Ot===void 0)continue;let Rt=Ot.buffer,nt=Ot.type,ht=Ot.bytesPerElement,Ct=nt===s.INT||nt===s.UNSIGNED_INT||lt.gpuType===yc;if(lt.isInterleavedBufferAttribute){let _t=lt.data,Bt=_t.stride,Vt=lt.offset;if(_t.isInstancedInterleavedBuffer){for(let Yt=0;Yt<k.locationSize;Yt++)m(k.location+Yt,_t.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Yt=0;Yt<k.locationSize;Yt++)p(k.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let Yt=0;Yt<k.locationSize;Yt++)M(k.location+Yt,vt/k.locationSize,nt,ut,Bt*ht,(Vt+vt/k.locationSize*Yt)*ht,Ct)}else{if(lt.isInstancedBufferAttribute){for(let _t=0;_t<k.locationSize;_t++)m(k.location+_t,lt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let _t=0;_t<k.locationSize;_t++)p(k.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let _t=0;_t<k.locationSize;_t++)M(k.location+_t,vt/k.locationSize,nt,ut,vt*ht,vt/k.locationSize*_t*ht,Ct)}}else if(X!==void 0){let ut=X[it];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(k.location,ut);break;case 3:s.vertexAttrib3fv(k.location,ut);break;case 4:s.vertexAttrib4fv(k.location,ut);break;default:s.vertexAttrib1fv(k.location,ut)}}}}y()}function C(){A();for(let _ in i){let P=i[_];for(let N in P){let B=P[N];for(let W in B)h(B[W].object),delete B[W];delete P[N]}delete i[_]}}function w(_){if(i[_.id]===void 0)return;let P=i[_.id];for(let N in P){let B=P[N];for(let W in B)h(B[W].object),delete B[W];delete P[N]}delete i[_.id]}function E(_){for(let P in i){let N=i[P];if(N[_.id]===void 0)continue;let B=N[_.id];for(let W in B)h(B[W].object),delete B[W];delete N[_.id]}}function A(){b(),o=!0,r!==n&&(r=n,c(r.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function zm(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Om(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(E){return!(E!==Ii&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let A=E===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Li&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ki&&!A)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function Bm(s){let t=this,e=null,i=0,n=!1,r=!1,o=new ji,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:i,M=y*4,v=m.clippingState||null;l.value=v,v=h(g,f,M,d);for(let C=0;C!==M;++C)v[C]=e[C];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function km(s){let t=new WeakMap;function e(o,a){return a===Ja?o.mapping=_s:a===Ka&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ja||a===Ka)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Il(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Es=class extends ro{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ms=4,wh=[.125,.215,.35,.446,.526,.582],zn=20,Pa=new Es,Eh=new ft,Ia=null,La=0,Da=0,Ua=!1,Un=(1+Math.sqrt(5))/2,fs=1/Un,Th=[new L(-Un,fs,0),new L(Un,fs,0),new L(-fs,0,Un),new L(fs,0,Un),new L(0,Un,-fs),new L(0,Un,fs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ts=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Ia=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,La,Da),this._renderer.xr.enabled=Ua,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:fi,format:Ii,colorSpace:Ds,depthBuffer:!1},n=Ah(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Vm(r,t,e)}return n}_compileMaterial(t){let e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,i,n){let a=new je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Eh),h.toneMapping=vn,h.autoClear=!1;let d=new Ae({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new Pt(new Oe,d),x=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(Eh),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let M=this._cubeSize;zr(n,y*M,m>2?M:0,M,M),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===_s||t.mapping===Ms;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Pa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Th[(n-r-1)%Th.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Pt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zn-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):zn;p>zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);let m=[],y=0;for(let E=0;E<zn;++E){let A=E/x,b=Math.exp(-A*A/2);m.push(b),E===0?y+=b:E<p&&(y+=2*b)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;let v=this._sizeLods[n],C=3*v*(n>M-ms?n-M+ms:0),w=4*(this._cubeSize-v);zr(e,C,w,3*v,2*v),l.setRenderTarget(e),l.render(u,Pa)}};function Hm(s){let t=[],e=[],i=[],n=s,r=s-ms+1+wh.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-ms?l=wh[o-s+ms-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*d),M=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let w=0;w<d;w++){let E=w%3*2/3-1,A=w>2?0:-1,b=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(b,x*g*w),M.set(f,p*g*w);let _=[w,w,w,w,w,w];v.set(_,m*g*w)}let C=new Xt;C.setAttribute("position",new be(y,x)),C.setAttribute("uv",new be(M,p)),C.setAttribute("faceIndex",new be(v,m)),t.push(C),n>ms&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ah(s,t,e){let i=new ke(s,t,e);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Vm(s,t,e){let i=new Float32Array(zn),n=new L(0,1,0);return new pe({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Rh(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Ch(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function Gm(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ja||l===Ka,h=l===_s||l===Ms;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ts(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new Ts(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Wm(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&$s("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Xm(s,t,e,i){let n={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete n[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let M=0,v=y.length;M<v;M+=3){let C=y[M+0],w=y[M+1],E=y[M+2];f.push(C,w,w,E,E,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let C=M+0,w=M+1,E=M+2;f.push(C,w,w,E,E,C)}}else return;let p=new(yu(f)?so:no)(f,1);p.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ym(s,t,e){let i;function n(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,i,1)}function u(f,d,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*x[y];e.update(m,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Zm(s,t,e){let i=new WeakMap,n=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*C*4*u),E=new eo(w,v,C,u);E.type=ki,E.needsUpdate=!0;let A=M*4;for(let _=0;_<u;_++){let P=p[_],N=m[_],B=y[_],W=v*C*4*_;for(let Q=0;Q<P.count;Q++){let X=Q*A;d===!0&&(n.fromBufferAttribute(P,Q),w[W+X+0]=n.x,w[W+X+1]=n.y,w[W+X+2]=n.z,w[W+X+3]=0),g===!0&&(n.fromBufferAttribute(N,Q),w[W+X+4]=n.x,w[W+X+5]=n.y,w[W+X+6]=n.z,w[W+X+7]=0),x===!0&&(n.fromBufferAttribute(B,Q),w[W+X+8]=n.x,w[W+X+9]=n.y,w[W+X+10]=n.z,w[W+X+11]=B.itemSize===4?n.w:1)}}f={count:u,texture:E,size:new gt(v,C)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function $m(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ao=class extends ai{constructor(t,e,i,n,r,o,a,l,c,h=gs){if(h!==gs&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===gs&&(i=Bn),i===void 0&&h===Ss&&(i=bs),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bu=new ai,Ph=new ao(1,1),Su=new eo,wu=new Cl,Eu=new oo,Ih=[],Lh=[],Dh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function Us(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Ih[n];if(r===void 0&&(r=new Float32Array(n),Ih[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ne(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ao(s,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Jm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),Ne(e,t)}}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),Ne(e,t)}}function jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),Ne(e,t)}}function t0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Nh.set(i),s.uniformMatrix2fv(this.addr,!1,Nh),Ne(e,i)}}function e0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Uh.set(i),s.uniformMatrix3fv(this.addr,!1,Uh),Ne(e,i)}}function i0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Dh.set(i),s.uniformMatrix4fv(this.addr,!1,Dh),Ne(e,i)}}function n0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function s0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),Ne(e,t)}}function r0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),Ne(e,t)}}function o0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),Ne(e,t)}}function a0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),Ne(e,t)}}function c0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),Ne(e,t)}}function h0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),Ne(e,t)}}function u0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Ph.compareFunction=xu,r=Ph):r=bu,e.setTexture2D(t||r,n)}function d0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||wu,n)}function f0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Eu,n)}function p0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Su,n)}function m0(s){switch(s){case 5126:return Jm;case 35664:return Km;case 35665:return Qm;case 35666:return jm;case 35674:return t0;case 35675:return e0;case 35676:return i0;case 5124:case 35670:return n0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return h0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(s,t){s.uniform1fv(this.addr,t)}function x0(s,t){let e=Us(t,this.size,2);s.uniform2fv(this.addr,e)}function y0(s,t){let e=Us(t,this.size,3);s.uniform3fv(this.addr,e)}function v0(s,t){let e=Us(t,this.size,4);s.uniform4fv(this.addr,e)}function _0(s,t){let e=Us(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function M0(s,t){let e=Us(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function b0(s,t){let e=Us(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function S0(s,t){s.uniform1iv(this.addr,t)}function w0(s,t){s.uniform2iv(this.addr,t)}function E0(s,t){s.uniform3iv(this.addr,t)}function T0(s,t){s.uniform4iv(this.addr,t)}function A0(s,t){s.uniform1uiv(this.addr,t)}function R0(s,t){s.uniform2uiv(this.addr,t)}function C0(s,t){s.uniform3uiv(this.addr,t)}function P0(s,t){s.uniform4uiv(this.addr,t)}function I0(s,t,e){let i=this.cache,n=t.length,r=Ao(e,n);Ue(i,r)||(s.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||bu,r[o])}function L0(s,t,e){let i=this.cache,n=t.length,r=Ao(e,n);Ue(i,r)||(s.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||wu,r[o])}function D0(s,t,e){let i=this.cache,n=t.length,r=Ao(e,n);Ue(i,r)||(s.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Eu,r[o])}function U0(s,t,e){let i=this.cache,n=t.length,r=Ao(e,n);Ue(i,r)||(s.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Su,r[o])}function N0(s){switch(s){case 5126:return g0;case 35664:return x0;case 35665:return y0;case 35666:return v0;case 35674:return _0;case 35675:return M0;case 35676:return b0;case 5124:case 35670:return S0;case 35667:case 35671:return w0;case 35668:case 35672:return E0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return U0}}var Ll=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=m0(e.type)}},Dl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N0(e.type)}},Ul=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},Na=/(\w+)(\])?(\[|\.)?/g;function Fh(s,t){s.seq.push(t),s.map[t.id]=t}function F0(s,t,e){let i=s.name,n=i.length;for(Na.lastIndex=0;;){let r=Na.exec(i),o=Na.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Fh(e,c===void 0?new Ll(a,s,t):new Dl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ul(a),Fh(e,u)),e=u}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);F0(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function zh(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var z0=37297,O0=0;function B0(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Oh=new Wt;function k0(s){ie._getMatrix(Oh,ie.workingColorSpace,s);let t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case To:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Bh(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+B0(s.getShaderSource(t),o)}else return n}function H0(s,t){let e=k0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function V0(s,t){let e;switch(t){case fc:e="Linear";break;case pc:e="Reinhard";break;case mc:e="Cineon";break;case or:e="ACESFilmic";break;case gc:e="AgX";break;case xc:e="Neutral";break;case vd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Or=new L;function G0(){ie.getLuminanceCoefficients(Or);let s=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function X0(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y0(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Js(s){return s!==""}function kh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(s){return s.replace(q0,$0)}var Z0=new Map;function $0(s,t){let e=$t[t];if(e===void 0){let i=Z0.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nl(e)}var J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(s){return s.replace(J0,K0)}function K0(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Gh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Q0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===uc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qi&&(t="SHADOWMAP_TYPE_VSM"),t}function j0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _s:case Ms:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ms&&(t="ENVMAP_MODE_REFRACTION"),t}function eg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case xd:t="ENVMAP_BLENDING_MIX";break;case yd:t="ENVMAP_BLENDING_ADD";break}return t}function ig(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ng(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Q0(e),c=j0(e),h=tg(e),u=eg(e),f=ig(e),d=W0(e),g=X0(r),x=n.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Js).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Js).join(`
`),m.length>0&&(m+=`
`)):(p=[Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),m=[Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?$t.tonemapping_pars_fragment:"",e.toneMapping!==vn?V0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,H0("linearToOutputTexel",e.outputColorSpace),G0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),o=Nl(o),o=kh(o,e),o=Hh(o,e),a=Nl(a),a=kh(a,e),a=Hh(a,e),o=Vh(o),a=Vh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+p+o,v=y+m+a,C=zh(n,n.VERTEX_SHADER,M),w=zh(n,n.FRAGMENT_SHADER,v);n.attachShader(x,C),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function E(P){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(x).trim(),B=n.getShaderInfoLog(C).trim(),W=n.getShaderInfoLog(w).trim(),Q=!0,X=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,C,w);else{let it=Bh(n,C,"vertex"),k=Bh(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+it+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:Q,programLog:N,vertexShader:{log:B,prefix:p},fragmentShader:{log:W,prefix:m}})}n.deleteShader(C),n.deleteShader(w),A=new ys(n,x),b=Y0(n,x)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(x,z0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}var sg=0,Fl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new zl(t),e.set(t,i)),i}},zl=class{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}};function rg(s,t,e,i,n,r,o){let a=new io,l=new Fl,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,_,P,N,B){let W=N.fog,Q=B.geometry,X=b.isMeshStandardMaterial?N.environment:null,it=(b.isMeshStandardMaterial?e:t).get(b.envMap||X),k=it&&it.mapping===Eo?it.image.height:null,lt=g[b.type];b.precision!==null&&(d=n.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ut=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,vt=ut!==void 0?ut.length:0,Ot=0;Q.morphAttributes.position!==void 0&&(Ot=1),Q.morphAttributes.normal!==void 0&&(Ot=2),Q.morphAttributes.color!==void 0&&(Ot=3);let Rt,nt,ht,Ct;if(lt){let he=Bi[lt];Rt=he.vertexShader,nt=he.fragmentShader}else Rt=b.vertexShader,nt=b.fragmentShader,l.update(b),ht=l.getVertexShaderID(b),Ct=l.getFragmentShaderID(b);let _t=s.getRenderTarget(),Bt=s.state.buffers.depth.getReversed(),Vt=B.isInstancedMesh===!0,Yt=B.isBatchedMesh===!0,me=!!b.map,ee=!!b.matcap,ge=!!it,z=!!b.aoMap,We=!!b.lightMap,Kt=!!b.bumpMap,I=!!b.normalMap,G=!!b.displacementMap,j=!!b.emissiveMap,$=!!b.metalnessMap,R=!!b.roughnessMap,S=b.anisotropy>0,U=b.clearcoat>0,q=b.dispersion>0,Y=b.iridescence>0,V=b.sheen>0,ct=b.transmission>0,rt=S&&!!b.anisotropyMap,st=U&&!!b.clearcoatMap,pt=U&&!!b.clearcoatNormalMap,H=U&&!!b.clearcoatRoughnessMap,et=Y&&!!b.iridescenceMap,mt=Y&&!!b.iridescenceThicknessMap,Z=V&&!!b.sheenColorMap,at=V&&!!b.sheenRoughnessMap,At=!!b.specularMap,xt=!!b.specularColorMap,Ht=!!b.specularIntensityMap,D=ct&&!!b.transmissionMap,Mt=ct&&!!b.thicknessMap,tt=!!b.gradientMap,ot=!!b.alphaMap,wt=b.alphaTest>0,bt=!!b.alphaHash,qt=!!b.extensions,we=vn;b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(we=s.toneMapping);let Xe={shaderID:lt,shaderType:b.type,shaderName:b.name,vertexShader:Rt,fragmentShader:nt,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:Ct,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Yt,batchingColor:Yt&&B._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&B.instanceColor!==null,instancingMorph:Vt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ds,alphaToCoverage:!!b.alphaToCoverage,map:me,matcap:ee,envMap:ge,envMapMode:ge&&it.mapping,envMapCubeUVHeight:k,aoMap:z,lightMap:We,bumpMap:Kt,normalMap:I,displacementMap:f&&G,emissiveMap:j,normalMapObjectSpace:I&&b.normalMapType===Sd,normalMapTangentSpace:I&&b.normalMapType===wc,metalnessMap:$,roughnessMap:R,anisotropy:S,anisotropyMap:rt,clearcoat:U,clearcoatMap:st,clearcoatNormalMap:pt,clearcoatRoughnessMap:H,dispersion:q,iridescence:Y,iridescenceMap:et,iridescenceThicknessMap:mt,sheen:V,sheenColorMap:Z,sheenRoughnessMap:at,specularMap:At,specularColorMap:xt,specularIntensityMap:Ht,transmission:ct,transmissionMap:D,thicknessMap:Mt,gradientMap:tt,opaque:b.transparent===!1&&b.blending===yn&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:wt,alphaHash:bt,combine:b.combine,mapUv:me&&x(b.map.channel),aoMapUv:z&&x(b.aoMap.channel),lightMapUv:We&&x(b.lightMap.channel),bumpMapUv:Kt&&x(b.bumpMap.channel),normalMapUv:I&&x(b.normalMap.channel),displacementMapUv:G&&x(b.displacementMap.channel),emissiveMapUv:j&&x(b.emissiveMap.channel),metalnessMapUv:$&&x(b.metalnessMap.channel),roughnessMapUv:R&&x(b.roughnessMap.channel),anisotropyMapUv:rt&&x(b.anisotropyMap.channel),clearcoatMapUv:st&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:at&&x(b.sheenRoughnessMap.channel),specularMapUv:At&&x(b.specularMap.channel),specularColorMapUv:xt&&x(b.specularColorMap.channel),specularIntensityMapUv:Ht&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:Mt&&x(b.thicknessMap.channel),alphaMapUv:ot&&x(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(I||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Q.attributes.uv&&(me||ot),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Bt,skinning:B.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ot,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:me&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:j&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===De,flipSided:b.side===Ze,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&b.extensions.multiDraw===!0||Yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function m(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)_.push(P),_.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(_,b),M(_,b),_.push(s.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function y(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function M(b,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let _=g[b.type],P;if(_){let N=Bi[_];P=En.clone(N.uniforms)}else P=b.uniforms;return P}function C(b,_){let P;for(let N=0,B=h.length;N<B;N++){let W=h[N];if(W.cacheKey===_){P=W,++P.usedTimes;break}}return P===void 0&&(P=new ng(s,_,b,r),h.push(P)),P}function w(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:A}}function og(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function ag(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xh(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,d,g,x,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):e.push(m)}function l(u,f,d,g,x,p){let m=o(u,f,d,g,x,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||ag),i.length>1&&i.sort(f||Wh),n.length>1&&n.sort(f||Wh)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function lg(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new Xh,s.set(i,[o])):n>=r.length?(o=new Xh,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function cg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ft};break;case"SpotLight":e={position:new L,direction:new L,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":e={color:new ft,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function hg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ug=0;function dg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fg(s){let t=new cg,e=hg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let n=new L,r=new jt,o=new jt;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,y=0,M=0,v=0,C=0,w=0,E=0;c.sort(dg);for(let b=0,_=c.length;b<_;b++){let P=c[b],N=P.color,B=P.intensity,W=P.distance,Q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*B,u+=N.g*B,f+=N.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],B);E++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let it=P.shadow,k=e.get(P);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=X,d++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(N).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[x]=X;let it=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,it.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[x]=it.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=Q,v++}x++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(N).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=X,p++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let it=P.shadow,k=e.get(P);k.shadowIntensity=it.intensity,k.shadowBias=it.bias,k.shadowNormalBias=it.normalBias,k.shadowRadius=it.radius,k.shadowMapSize=it.mapSize,k.shadowCameraNear=it.camera.near,k.shadowCameraFar=it.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=X,g++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[m]=X,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let A=i.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==v||A.numSpotMaps!==C||A.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,A.directionalLength=d,A.pointLength=g,A.spotLength=x,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=v,A.numSpotMaps=C,A.numLightProbes=E,i.version=ug++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let M=c[m];if(M.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),u++}else if(M.isSpotLight){let v=i.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function Yh(s){let t=new fg(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function pg(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new Yh(s),t.set(n,[a])):r>=o.length?(a=new Yh(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ol=class extends Vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bl=class extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gg=`uniform sampler2D shadow_pass;
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
}`;function xg(s,t,e){let i=new ir,n=new gt,r=new gt,o=new Ee,a=new Ol({depthPacking:bd}),l=new Bl,c={},h=e.maxTextureSize,u={[_n]:Ze,[Ze]:_n,[De]:De},f=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:mg,fragmentShader:gg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let m=this.type;this.render=function(w,E,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),_=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Hi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=m!==Qi&&this.type===Qi,W=m===Qi&&this.type!==Qi;for(let Q=0,X=w.length;Q<X;Q++){let it=w[Q],k=it.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);let lt=k.getFrameExtents();if(n.multiply(lt),r.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/lt.x),n.x=r.x*lt.x,k.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/lt.y),n.y=r.y*lt.y,k.mapSize.y=r.y)),k.map===null||B===!0||W===!0){let vt=this.type!==Qi?{minFilter:di,magFilter:di}:{};k.map!==null&&k.map.dispose(),k.map=new ke(n.x,n.y,vt),k.map.texture.name=it.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let ut=k.getViewportCount();for(let vt=0;vt<ut;vt++){let Ot=k.getViewport(vt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),N.viewport(o),k.updateMatrices(it,vt),i=k.getFrustum(),v(E,A,k.camera,it,this.type)}k.isPointLightShadow!==!0&&this.type===Qi&&y(k,A),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(b,_,P)};function y(w,E){let A=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ke(n.x,n.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,A,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,A,d,x,null)}function M(w,E,A,b){let _=null,P=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)_=P;else if(_=A.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=_.uuid,B=E.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let Q=W[B];Q===void 0&&(Q=_.clone(),W[B]=Q,E.addEventListener("dispose",C)),_=Q}if(_.visible=E.visible,_.wireframe=E.wireframe,b===Qi?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:u[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=s.properties.get(_);N.light=A}return _}function v(w,E,A,b,_){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Qi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let B=t.update(w),W=w.material;if(Array.isArray(W)){let Q=B.groups;for(let X=0,it=Q.length;X<it;X++){let k=Q[X],lt=W[k.materialIndex];if(lt&&lt.visible){let ut=M(w,lt,b,_);w.onBeforeShadow(s,w,E,A,B,ut,k),s.renderBufferDirect(A,null,B,ut,w,k),w.onAfterShadow(s,w,E,A,B,ut,k)}}}else if(W.visible){let Q=M(w,W,b,_);w.onBeforeShadow(s,w,E,A,B,Q,null),s.renderBufferDirect(A,null,B,Q,w,null),w.onAfterShadow(s,w,E,A,B,Q,null)}}let N=w.children;for(let B=0,W=N.length;B<W;B++)v(N[B],E,A,b,_)}function C(w){w.target.removeEventListener("dispose",C);for(let A in c){let b=c[A],_=w.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var yg={[Ga]:Wa,[Xa]:Za,[Ya]:$a,[vs]:qa,[Wa]:Ga,[Za]:Xa,[$a]:Ya,[qa]:vs};function vg(s,t){function e(){let D=!1,Mt=new Ee,tt=null,ot=new Ee(0,0,0,0);return{setMask:function(wt){tt!==wt&&!D&&(s.colorMask(wt,wt,wt,wt),tt=wt)},setLocked:function(wt){D=wt},setClear:function(wt,bt,qt,we,Xe){Xe===!0&&(wt*=we,bt*=we,qt*=we),Mt.set(wt,bt,qt,we),ot.equals(Mt)===!1&&(s.clearColor(wt,bt,qt,we),ot.copy(Mt))},reset:function(){D=!1,tt=null,ot.set(-1,0,0,0)}}}function i(){let D=!1,Mt=!1,tt=null,ot=null,wt=null;return{setReversed:function(bt){if(Mt!==bt){let qt=t.get("EXT_clip_control");Mt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let we=wt;wt=null,this.setClear(we)}Mt=bt},getReversed:function(){return Mt},setTest:function(bt){bt?_t(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(bt){tt!==bt&&!D&&(s.depthMask(bt),tt=bt)},setFunc:function(bt){if(Mt&&(bt=yg[bt]),ot!==bt){switch(bt){case Ga:s.depthFunc(s.NEVER);break;case Wa:s.depthFunc(s.ALWAYS);break;case Xa:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Ya:s.depthFunc(s.EQUAL);break;case qa:s.depthFunc(s.GEQUAL);break;case Za:s.depthFunc(s.GREATER);break;case $a:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ot=bt}},setLocked:function(bt){D=bt},setClear:function(bt){wt!==bt&&(Mt&&(bt=1-bt),s.clearDepth(bt),wt=bt)},reset:function(){D=!1,tt=null,ot=null,wt=null,Mt=!1}}}function n(){let D=!1,Mt=null,tt=null,ot=null,wt=null,bt=null,qt=null,we=null,Xe=null;return{setTest:function(he){D||(he?_t(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(he){Mt!==he&&!D&&(s.stencilMask(he),Mt=he)},setFunc:function(he,Ti,Xi){(tt!==he||ot!==Ti||wt!==Xi)&&(s.stencilFunc(he,Ti,Xi),tt=he,ot=Ti,wt=Xi)},setOp:function(he,Ti,Xi){(bt!==he||qt!==Ti||we!==Xi)&&(s.stencilOp(he,Ti,Xi),bt=he,qt=Ti,we=Xi)},setLocked:function(he){D=he},setClear:function(he){Xe!==he&&(s.clearStencil(he),Xe=he)},reset:function(){D=!1,Mt=null,tt=null,ot=null,wt=null,bt=null,qt=null,we=null,Xe=null}}}let r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,y=null,M=null,v=null,C=null,w=null,E=new ft(0,0,0),A=0,b=!1,_=null,P=null,N=null,B=null,W=null,Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,it=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=it>=1):k.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=it>=2);let lt=null,ut={},vt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),Rt=new Ee().fromArray(vt),nt=new Ee().fromArray(Ot);function ht(D,Mt,tt,ot){let wt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(D,bt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<tt;qt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,ot,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(Mt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return bt}let Ct={};Ct[s.TEXTURE_2D]=ht(s.TEXTURE_2D,s.TEXTURE_2D,1),Ct[s.TEXTURE_CUBE_MAP]=ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ct[s.TEXTURE_2D_ARRAY]=ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ct[s.TEXTURE_3D]=ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(s.DEPTH_TEST),o.setFunc(vs),Kt(!1),I($c),_t(s.CULL_FACE),z(Hi);function _t(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Bt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Vt(D,Mt){return u[D]!==Mt?(s.bindFramebuffer(D,Mt),u[D]=Mt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Mt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Yt(D,Mt){let tt=d,ot=!1;if(D){tt=f.get(Mt),tt===void 0&&(tt=[],f.set(Mt,tt));let wt=D.textures;if(tt.length!==wt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,qt=wt.length;bt<qt;bt++)tt[bt]=s.COLOR_ATTACHMENT0+bt;tt.length=wt.length,ot=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,ot=!0);ot&&s.drawBuffers(tt)}function me(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let ee={[Nn]:s.FUNC_ADD,[td]:s.FUNC_SUBTRACT,[ed]:s.FUNC_REVERSE_SUBTRACT};ee[id]=s.MIN,ee[nd]=s.MAX;let ge={[sd]:s.ZERO,[rd]:s.ONE,[od]:s.SRC_COLOR,[Ha]:s.SRC_ALPHA,[dd]:s.SRC_ALPHA_SATURATE,[hd]:s.DST_COLOR,[ld]:s.DST_ALPHA,[ad]:s.ONE_MINUS_SRC_COLOR,[Va]:s.ONE_MINUS_SRC_ALPHA,[ud]:s.ONE_MINUS_DST_COLOR,[cd]:s.ONE_MINUS_DST_ALPHA,[fd]:s.CONSTANT_COLOR,[pd]:s.ONE_MINUS_CONSTANT_COLOR,[md]:s.CONSTANT_ALPHA,[gd]:s.ONE_MINUS_CONSTANT_ALPHA};function z(D,Mt,tt,ot,wt,bt,qt,we,Xe,he){if(D===Hi){x===!0&&(Bt(s.BLEND),x=!1);return}if(x===!1&&(_t(s.BLEND),x=!0),D!==ju){if(D!==p||he!==b){if((m!==Nn||v!==Nn)&&(s.blendEquation(s.FUNC_ADD),m=Nn,v=Nn),he)switch(D){case yn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $e:s.blendFunc(s.ONE,s.ONE);break;case Jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $e:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,M=null,C=null,w=null,E.set(0,0,0),A=0,p=D,b=he}return}wt=wt||Mt,bt=bt||tt,qt=qt||ot,(Mt!==m||wt!==v)&&(s.blendEquationSeparate(ee[Mt],ee[wt]),m=Mt,v=wt),(tt!==y||ot!==M||bt!==C||qt!==w)&&(s.blendFuncSeparate(ge[tt],ge[ot],ge[bt],ge[qt]),y=tt,M=ot,C=bt,w=qt),(we.equals(E)===!1||Xe!==A)&&(s.blendColor(we.r,we.g,we.b,Xe),E.copy(we),A=Xe),p=D,b=!1}function We(D,Mt){D.side===De?Bt(s.CULL_FACE):_t(s.CULL_FACE);let tt=D.side===Ze;Mt&&(tt=!tt),Kt(tt),D.blending===yn&&D.transparent===!1?z(Hi):z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ot=D.stencilWrite;a.setTest(ot),ot&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),j(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(D){_!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),_=D)}function I(D){D!==Ku?(_t(s.CULL_FACE),D!==P&&(D===$c?s.cullFace(s.BACK):D===Qu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),P=D}function G(D){D!==N&&(X&&s.lineWidth(D),N=D)}function j(D,Mt,tt){D?(_t(s.POLYGON_OFFSET_FILL),(B!==Mt||W!==tt)&&(s.polygonOffset(Mt,tt),B=Mt,W=tt)):Bt(s.POLYGON_OFFSET_FILL)}function $(D){D?_t(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+Q-1),lt!==D&&(s.activeTexture(D),lt=D)}function S(D,Mt,tt){tt===void 0&&(lt===null?tt=s.TEXTURE0+Q-1:tt=lt);let ot=ut[tt];ot===void 0&&(ot={type:void 0,texture:void 0},ut[tt]=ot),(ot.type!==D||ot.texture!==Mt)&&(lt!==tt&&(s.activeTexture(tt),lt=tt),s.bindTexture(D,Mt||Ct[D]),ot.type=D,ot.texture=Mt)}function U(){let D=ut[lt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(D){Rt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Rt.copy(D))}function at(D){nt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),nt.copy(D))}function At(D,Mt){let tt=c.get(Mt);tt===void 0&&(tt=new WeakMap,c.set(Mt,tt));let ot=tt.get(D);ot===void 0&&(ot=s.getUniformBlockIndex(Mt,D.name),tt.set(D,ot))}function xt(D,Mt){let ot=c.get(Mt).get(D);l.get(Mt)!==ot&&(s.uniformBlockBinding(Mt,ot,D.__bindingPointIndex),l.set(Mt,ot))}function Ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},lt=null,ut={},u={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,y=null,M=null,v=null,C=null,w=null,E=new ft(0,0,0),A=0,b=!1,_=null,P=null,N=null,B=null,W=null,Rt.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:Bt,bindFramebuffer:Vt,drawBuffers:Yt,useProgram:me,setBlending:z,setMaterial:We,setFlipSided:Kt,setCullFace:I,setLineWidth:G,setPolygonOffset:j,setScissorTest:$,activeTexture:R,bindTexture:S,unbindTexture:U,compressedTexImage2D:q,compressedTexImage3D:Y,texImage2D:et,texImage3D:mt,updateUBOMapping:At,uniformBlockBinding:xt,texStorage2D:pt,texStorage3D:H,texSubImage2D:V,texSubImage3D:ct,compressedTexSubImage2D:rt,compressedTexSubImage3D:st,scissor:Z,viewport:at,reset:Ht}}function qh(s,t,e,i){let n=_g(i);switch(e){case uu:return s*t;case fu:return s*t;case pu:return s*t*2;case ar:return s*t/n.components*n.byteLength;case Mc:return s*t/n.components*n.byteLength;case mu:return s*t*2/n.components*n.byteLength;case bc:return s*t*2/n.components*n.byteLength;case du:return s*t*3/n.components*n.byteLength;case Ii:return s*t*4/n.components*n.byteLength;case Sc:return s*t*4/n.components*n.byteLength;case Yr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zr:case $r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tl:case il:return Math.max(s,16)*Math.max(t,8)/4;case ja:case el:return Math.max(s,8)*Math.max(t,8)/2;case nl:case sl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case cl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Jr:case _l:case Ml:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gu:case bl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Sl:case wl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(s){switch(s){case Li:case lu:return{byteLength:1,components:1};case tr:case cu:case fi:return{byteLength:2,components:1};case vc:case _c:return{byteLength:2,components:4};case Bn:case yc:case ki:return{byteLength:4,components:1};case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Mg(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return d?new OffscreenCanvas(R,S):jr("canvas")}function x(R,S,U){let q=1,Y=$(R);if((Y.width>U||Y.height>U)&&(q=U/Math.max(Y.width,Y.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let V=Math.floor(q*Y.width),ct=Math.floor(q*Y.height);u===void 0&&(u=g(V,ct));let rt=S?g(V,ct):u;return rt.width=V,rt.height=ct,rt.getContext("2d").drawImage(R,0,0,V,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+V+"x"+ct+")."),rt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,S,U,q,Y=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let V=S;if(S===s.RED&&(U===s.FLOAT&&(V=s.R32F),U===s.HALF_FLOAT&&(V=s.R16F),U===s.UNSIGNED_BYTE&&(V=s.R8)),S===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.R8UI),U===s.UNSIGNED_SHORT&&(V=s.R16UI),U===s.UNSIGNED_INT&&(V=s.R32UI),U===s.BYTE&&(V=s.R8I),U===s.SHORT&&(V=s.R16I),U===s.INT&&(V=s.R32I)),S===s.RG&&(U===s.FLOAT&&(V=s.RG32F),U===s.HALF_FLOAT&&(V=s.RG16F),U===s.UNSIGNED_BYTE&&(V=s.RG8)),S===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.RG8UI),U===s.UNSIGNED_SHORT&&(V=s.RG16UI),U===s.UNSIGNED_INT&&(V=s.RG32UI),U===s.BYTE&&(V=s.RG8I),U===s.SHORT&&(V=s.RG16I),U===s.INT&&(V=s.RG32I)),S===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.RGB8UI),U===s.UNSIGNED_SHORT&&(V=s.RGB16UI),U===s.UNSIGNED_INT&&(V=s.RGB32UI),U===s.BYTE&&(V=s.RGB8I),U===s.SHORT&&(V=s.RGB16I),U===s.INT&&(V=s.RGB32I)),S===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),U===s.UNSIGNED_INT&&(V=s.RGBA32UI),U===s.BYTE&&(V=s.RGBA8I),U===s.SHORT&&(V=s.RGBA16I),U===s.INT&&(V=s.RGBA32I)),S===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),S===s.RGBA){let ct=Y?To:ie.getTransfer(q);U===s.FLOAT&&(V=s.RGBA32F),U===s.HALF_FLOAT&&(V=s.RGBA16F),U===s.UNSIGNED_BYTE&&(V=ct===ae?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(R,S){let U;return R?S===null||S===Bn||S===bs?U=s.DEPTH24_STENCIL8:S===ki?U=s.DEPTH32F_STENCIL8:S===tr&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Bn||S===bs?U=s.DEPTH_COMPONENT24:S===ki?U=s.DEPTH_COMPONENT32F:S===tr&&(U=s.DEPTH_COMPONENT16),U}function C(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==di&&R.minFilter!==_i?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){let S=R.target;S.removeEventListener("dispose",w),A(S),S.isVideoTexture&&h.delete(S)}function E(R){let S=R.target;S.removeEventListener("dispose",E),_(S)}function A(R){let S=i.get(R);if(S.__webglInit===void 0)return;let U=R.source,q=f.get(U);if(q){let Y=q[S.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&b(R),Object.keys(q).length===0&&f.delete(U)}i.remove(R)}function b(R){let S=i.get(R);s.deleteTexture(S.__webglTexture);let U=R.source,q=f.get(U);delete q[S.__cacheKey],o.memory.textures--}function _(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Y=0;Y<S.__webglFramebuffer[q].length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[q][Y]);else s.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)s.deleteFramebuffer(S.__webglFramebuffer[q]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let U=R.textures;for(let q=0,Y=U.length;q<Y;q++){let V=i.get(U[q]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(U[q])}i.remove(R)}let P=0;function N(){P=0}function B(){let R=P;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),P+=1,R}function W(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Q(R,S){let U=i.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){let q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(U,R,S);return}}e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+S)}function X(R,S){let U=i.get(R);if(R.version>0&&U.__version!==R.version){nt(U,R,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+S)}function it(R,S){let U=i.get(R);if(R.version>0&&U.__version!==R.version){nt(U,R,S);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+S)}function k(R,S){let U=i.get(R);if(R.version>0&&U.__version!==R.version){ht(U,R,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+S)}let lt={[sn]:s.REPEAT,[tn]:s.CLAMP_TO_EDGE,[Qa]:s.MIRRORED_REPEAT},ut={[di]:s.NEAREST,[_d]:s.NEAREST_MIPMAP_NEAREST,[yr]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[oa]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},vt={[wd]:s.NEVER,[Pd]:s.ALWAYS,[Ed]:s.LESS,[xu]:s.LEQUAL,[Td]:s.EQUAL,[Cd]:s.GEQUAL,[Ad]:s.GREATER,[Rd]:s.NOTEQUAL};function Ot(R,S){if(S.type===ki&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===_i||S.magFilter===oa||S.magFilter===yr||S.magFilter===On||S.minFilter===_i||S.minFilter===oa||S.minFilter===yr||S.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,lt[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,lt[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,lt[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ut[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===di||S.minFilter!==yr&&S.minFilter!==On||S.type===ki&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Rt(R,S){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let q=S.source,Y=f.get(q);Y===void 0&&(Y={},f.set(q,Y));let V=W(S);if(V!==R.__cacheKey){Y[V]===void 0&&(Y[V]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Y[V].usedTimes++;let ct=Y[R.__cacheKey];ct!==void 0&&(Y[R.__cacheKey].usedTimes--,ct.usedTimes===0&&b(S)),R.__cacheKey=V,R.__webglTexture=Y[V].texture}return U}function nt(R,S,U){let q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=s.TEXTURE_3D);let Y=Rt(R,S),V=S.source;e.bindTexture(q,R.__webglTexture,s.TEXTURE0+U);let ct=i.get(V);if(V.version!==ct.__version||Y===!0){e.activeTexture(s.TEXTURE0+U);let rt=ie.getPrimaries(ie.workingColorSpace),st=S.colorSpace===xn?null:ie.getPrimaries(S.colorSpace),pt=S.colorSpace===xn||rt===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let H=x(S.image,!1,n.maxTextureSize);H=j(S,H);let et=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),Z=M(S.internalFormat,et,mt,S.colorSpace,S.isVideoTexture);Ot(q,S);let at,At=S.mipmaps,xt=S.isVideoTexture!==!0,Ht=ct.__version===void 0||Y===!0,D=V.dataReady,Mt=C(S,H);if(S.isDepthTexture)Z=v(S.format===Ss,S.type),Ht&&(xt?e.texStorage2D(s.TEXTURE_2D,1,Z,H.width,H.height):e.texImage2D(s.TEXTURE_2D,0,Z,H.width,H.height,0,et,mt,null));else if(S.isDataTexture)if(At.length>0){xt&&Ht&&e.texStorage2D(s.TEXTURE_2D,Mt,Z,At[0].width,At[0].height);for(let tt=0,ot=At.length;tt<ot;tt++)at=At[tt],xt?D&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,at.width,at.height,et,mt,at.data):e.texImage2D(s.TEXTURE_2D,tt,Z,at.width,at.height,0,et,mt,at.data);S.generateMipmaps=!1}else xt?(Ht&&e.texStorage2D(s.TEXTURE_2D,Mt,Z,H.width,H.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,H.width,H.height,et,mt,H.data)):e.texImage2D(s.TEXTURE_2D,0,Z,H.width,H.height,0,et,mt,H.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xt&&Ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,Z,At[0].width,At[0].height,H.depth);for(let tt=0,ot=At.length;tt<ot;tt++)if(at=At[tt],S.format!==Ii)if(et!==null)if(xt){if(D)if(S.layerUpdates.size>0){let wt=qh(at.width,at.height,S.format,S.type);for(let bt of S.layerUpdates){let qt=at.data.subarray(bt*wt/at.data.BYTES_PER_ELEMENT,(bt+1)*wt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,bt,at.width,at.height,1,et,qt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,at.width,at.height,H.depth,et,at.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,Z,at.width,at.height,H.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,at.width,at.height,H.depth,et,mt,at.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,Z,at.width,at.height,H.depth,0,et,mt,at.data)}else{xt&&Ht&&e.texStorage2D(s.TEXTURE_2D,Mt,Z,At[0].width,At[0].height);for(let tt=0,ot=At.length;tt<ot;tt++)at=At[tt],S.format!==Ii?et!==null?xt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,at.width,at.height,et,at.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,Z,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?D&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,at.width,at.height,et,mt,at.data):e.texImage2D(s.TEXTURE_2D,tt,Z,at.width,at.height,0,et,mt,at.data)}else if(S.isDataArrayTexture)if(xt){if(Ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,Z,H.width,H.height,H.depth),D)if(S.layerUpdates.size>0){let tt=qh(H.width,H.height,S.format,S.type);for(let ot of S.layerUpdates){let wt=H.data.subarray(ot*tt/H.data.BYTES_PER_ELEMENT,(ot+1)*tt/H.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,H.width,H.height,1,et,mt,wt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,et,mt,H.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Z,H.width,H.height,H.depth,0,et,mt,H.data);else if(S.isData3DTexture)xt?(Ht&&e.texStorage3D(s.TEXTURE_3D,Mt,Z,H.width,H.height,H.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,et,mt,H.data)):e.texImage3D(s.TEXTURE_3D,0,Z,H.width,H.height,H.depth,0,et,mt,H.data);else if(S.isFramebufferTexture){if(Ht)if(xt)e.texStorage2D(s.TEXTURE_2D,Mt,Z,H.width,H.height);else{let tt=H.width,ot=H.height;for(let wt=0;wt<Mt;wt++)e.texImage2D(s.TEXTURE_2D,wt,Z,tt,ot,0,et,mt,null),tt>>=1,ot>>=1}}else if(At.length>0){if(xt&&Ht){let tt=$(At[0]);e.texStorage2D(s.TEXTURE_2D,Mt,Z,tt.width,tt.height)}for(let tt=0,ot=At.length;tt<ot;tt++)at=At[tt],xt?D&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,et,mt,at):e.texImage2D(s.TEXTURE_2D,tt,Z,et,mt,at);S.generateMipmaps=!1}else if(xt){if(Ht){let tt=$(H);e.texStorage2D(s.TEXTURE_2D,Mt,Z,tt.width,tt.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et,mt,H)}else e.texImage2D(s.TEXTURE_2D,0,Z,et,mt,H);p(S)&&m(q),ct.__version=V.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ht(R,S,U){if(S.image.length!==6)return;let q=Rt(R,S),Y=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+U);let V=i.get(Y);if(Y.version!==V.__version||q===!0){e.activeTexture(s.TEXTURE0+U);let ct=ie.getPrimaries(ie.workingColorSpace),rt=S.colorSpace===xn?null:ie.getPrimaries(S.colorSpace),st=S.colorSpace===xn||ct===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let pt=S.isCompressedTexture||S.image[0].isCompressedTexture,H=S.image[0]&&S.image[0].isDataTexture,et=[];for(let ot=0;ot<6;ot++)!pt&&!H?et[ot]=x(S.image[ot],!0,n.maxCubemapSize):et[ot]=H?S.image[ot].image:S.image[ot],et[ot]=j(S,et[ot]);let mt=et[0],Z=r.convert(S.format,S.colorSpace),at=r.convert(S.type),At=M(S.internalFormat,Z,at,S.colorSpace),xt=S.isVideoTexture!==!0,Ht=V.__version===void 0||q===!0,D=Y.dataReady,Mt=C(S,mt);Ot(s.TEXTURE_CUBE_MAP,S);let tt;if(pt){xt&&Ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,At,mt.width,mt.height);for(let ot=0;ot<6;ot++){tt=et[ot].mipmaps;for(let wt=0;wt<tt.length;wt++){let bt=tt[wt];S.format!==Ii?Z!==null?xt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,0,0,bt.width,bt.height,Z,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,At,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,0,0,bt.width,bt.height,Z,at,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt,At,bt.width,bt.height,0,Z,at,bt.data)}}}else{if(tt=S.mipmaps,xt&&Ht){tt.length>0&&Mt++;let ot=$(et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,At,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(H){xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,et[ot].width,et[ot].height,Z,at,et[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,At,et[ot].width,et[ot].height,0,Z,at,et[ot].data);for(let wt=0;wt<tt.length;wt++){let qt=tt[wt].image[ot].image;xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,0,0,qt.width,qt.height,Z,at,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,At,qt.width,qt.height,0,Z,at,qt.data)}}else{xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Z,at,et[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,At,Z,at,et[ot]);for(let wt=0;wt<tt.length;wt++){let bt=tt[wt];xt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,0,0,Z,at,bt.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt+1,At,Z,at,bt.image[ot])}}}p(S)&&m(s.TEXTURE_CUBE_MAP),V.__version=Y.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ct(R,S,U,q,Y,V){let ct=r.convert(U.format,U.colorSpace),rt=r.convert(U.type),st=M(U.internalFormat,ct,rt,U.colorSpace),pt=i.get(S),H=i.get(U);if(H.__renderTarget=S,!pt.__hasExternalTextures){let et=Math.max(1,S.width>>V),mt=Math.max(1,S.height>>V);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,V,st,et,mt,S.depth,0,ct,rt,null):e.texImage2D(Y,V,st,et,mt,0,ct,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),I(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,Y,H.__webglTexture,0,Kt(S)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,Y,H.__webglTexture,V),e.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(R,S,U){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let q=S.depthTexture,Y=q&&q.isDepthTexture?q.type:null,V=v(S.stencilBuffer,Y),ct=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=Kt(S);I(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,V,S.width,S.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,V,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,V,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,R)}else{let q=S.textures;for(let Y=0;Y<q.length;Y++){let V=q[Y],ct=r.convert(V.format,V.colorSpace),rt=r.convert(V.type),st=M(V.internalFormat,ct,rt,V.colorSpace),pt=Kt(S);U&&I(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,st,S.width,S.height):I(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,st,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,st,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);let Y=q.__webglTexture,V=Kt(S);if(S.depthTexture.format===gs)I(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(S.depthTexture.format===Ss)I(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Vt(R){let S=i.get(R),U=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let Y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Y)};q.addEventListener("dispose",Y),S.__depthDisposeCallback=Y}S.__boundDepthTexture=q}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Bt(S.__webglFramebuffer,R)}else if(U){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=s.createRenderbuffer(),_t(S.__webglDepthbuffer[q],R,!1);else{let Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=S.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,V)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),_t(S.__webglDepthbuffer,R,!1);else{let q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,Y)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(R,S,U){let q=i.get(R);S!==void 0&&Ct(q.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Vt(R)}function me(R){let S=R.texture,U=i.get(R),q=i.get(S);R.addEventListener("dispose",E);let Y=R.textures,V=R.isWebGLCubeRenderTarget===!0,ct=Y.length>1;if(ct||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=S.version,o.memory.textures++),V){U.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[rt]=[];for(let st=0;st<S.mipmaps.length;st++)U.__webglFramebuffer[rt][st]=s.createFramebuffer()}else U.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let rt=0;rt<S.mipmaps.length;rt++)U.__webglFramebuffer[rt]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(ct)for(let rt=0,st=Y.length;rt<st;rt++){let pt=i.get(Y[rt]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&I(R)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let rt=0;rt<Y.length;rt++){let st=Y[rt];U.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[rt]);let pt=r.convert(st.format,st.colorSpace),H=r.convert(st.type),et=M(st.internalFormat,pt,H,st.colorSpace,R.isXRRenderTarget===!0),mt=Kt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,et,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,U.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,S);for(let rt=0;rt<6;rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)Ct(U.__webglFramebuffer[rt][st],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,st);else Ct(U.__webglFramebuffer[rt],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let rt=0,st=Y.length;rt<st;rt++){let pt=Y[rt],H=i.get(pt);e.bindTexture(s.TEXTURE_2D,H.__webglTexture),Ot(s.TEXTURE_2D,pt),Ct(U.__webglFramebuffer,R,pt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),p(pt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(rt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,q.__webglTexture),Ot(rt,S),S.mipmaps&&S.mipmaps.length>0)for(let st=0;st<S.mipmaps.length;st++)Ct(U.__webglFramebuffer[st],R,S,s.COLOR_ATTACHMENT0,rt,st);else Ct(U.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,rt,0);p(S)&&m(rt),e.unbindTexture()}R.depthBuffer&&Vt(R)}function ee(R){let S=R.textures;for(let U=0,q=S.length;U<q;U++){let Y=S[U];if(p(Y)){let V=y(R),ct=i.get(Y).__webglTexture;e.bindTexture(V,ct),m(V),e.unbindTexture()}}}let ge=[],z=[];function We(R){if(R.samples>0){if(I(R)===!1){let S=R.textures,U=R.width,q=R.height,Y=s.COLOR_BUFFER_BIT,V=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=i.get(R),rt=S.length>1;if(rt)for(let st=0;st<S.length;st++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let st=0;st<S.length;st++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[st]);let pt=i.get(S[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,U,q,0,0,U,q,Y,s.NEAREST),l===!0&&(ge.length=0,z.length=0,ge.push(s.COLOR_ATTACHMENT0+st),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ge.push(V),z.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let st=0;st<S.length;st++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,ct.__webglColorRenderbuffer[st]);let pt=i.get(S[st]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Kt(R){return Math.min(n.maxSamples,R.samples)}function I(R){let S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function j(R,S){let U=R.colorSpace,q=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Ds&&U!==xn&&(ie.getTransfer(U)===ae?(q!==Ii||Y!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function $(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=it,this.setTextureCube=k,this.rebindTextures=Yt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=I}function bg(s,t){function e(i,n=xn){let r,o=ie.getTransfer(n);if(i===Li)return s.UNSIGNED_BYTE;if(i===vc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===_c)return s.UNSIGNED_SHORT_5_5_5_1;if(i===hu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===lu)return s.BYTE;if(i===cu)return s.SHORT;if(i===tr)return s.UNSIGNED_SHORT;if(i===yc)return s.INT;if(i===Bn)return s.UNSIGNED_INT;if(i===ki)return s.FLOAT;if(i===fi)return s.HALF_FLOAT;if(i===uu)return s.ALPHA;if(i===du)return s.RGB;if(i===Ii)return s.RGBA;if(i===fu)return s.LUMINANCE;if(i===pu)return s.LUMINANCE_ALPHA;if(i===gs)return s.DEPTH_COMPONENT;if(i===Ss)return s.DEPTH_STENCIL;if(i===ar)return s.RED;if(i===Mc)return s.RED_INTEGER;if(i===mu)return s.RG;if(i===bc)return s.RG_INTEGER;if(i===Sc)return s.RGBA_INTEGER;if(i===Yr||i===qr||i===Zr||i===$r)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ja||i===tl||i===el||i===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nl||i===sl)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===xl||i===yl||i===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ol)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===fl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jr||i===_l||i===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Jr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gu||i===bl||i===Sl||i===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var kl=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sg={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eg=`
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

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ai,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new pe({vertexShader:wg,fragmentShader:Eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends Mn{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=new Hl,p=e.getContextAttributes(),m=null,y=null,M=[],v=[],C=new gt,w=null,E=new je;E.viewport=new Ee;let A=new je;A.viewport=new Ee;let b=[E,A],_=new kl,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=M[nt];return ht===void 0&&(ht=new Ks,M[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=M[nt];return ht===void 0&&(ht=new Ks,M[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=M[nt];return ht===void 0&&(ht=new Ks,M[nt]=ht),ht.getHandSpace()};function B(nt){let ht=v.indexOf(nt.inputSource);if(ht===-1)return;let Ct=M[ht];Ct!==void 0&&(Ct.update(nt.inputSource,nt.frame,c||o),Ct.dispatchEvent({type:nt.type,data:nt.inputSource}))}function W(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",Q);for(let nt=0;nt<M.length;nt++){let ht=v[nt];ht!==null&&(v[nt]=null,M[nt].disconnect(ht))}P=null,N=null,x.reset(),t.setRenderTarget(m),d=null,f=null,u=null,n=null,y=null,Rt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(nt){if(n=nt,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",W),n.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),n.renderState.layers===void 0){let ht={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,ht),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ke(d.framebufferWidth,d.framebufferHeight,{format:Ii,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ht=null,Ct=null,_t=null;p.depth&&(_t=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=p.stencil?Ss:gs,Ct=p.stencil?bs:Bn);let Bt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(Bt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ke(f.textureWidth,f.textureHeight,{format:Ii,type:Li,depthTexture:new ao(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Rt.setContext(n),Rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(nt){for(let ht=0;ht<nt.removed.length;ht++){let Ct=nt.removed[ht],_t=v.indexOf(Ct);_t>=0&&(v[_t]=null,M[_t].disconnect(Ct))}for(let ht=0;ht<nt.added.length;ht++){let Ct=nt.added[ht],_t=v.indexOf(Ct);if(_t===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=v.length){v.push(Ct),_t=Vt;break}else if(v[Vt]===null){v[Vt]=Ct,_t=Vt;break}if(_t===-1)break}let Bt=M[_t];Bt&&Bt.connect(Ct)}}let X=new L,it=new L;function k(nt,ht,Ct){X.setFromMatrixPosition(ht.matrixWorld),it.setFromMatrixPosition(Ct.matrixWorld);let _t=X.distanceTo(it),Bt=ht.projectionMatrix.elements,Vt=Ct.projectionMatrix.elements,Yt=Bt[14]/(Bt[10]-1),me=Bt[14]/(Bt[10]+1),ee=(Bt[9]+1)/Bt[5],ge=(Bt[9]-1)/Bt[5],z=(Bt[8]-1)/Bt[0],We=(Vt[8]+1)/Vt[0],Kt=Yt*z,I=Yt*We,G=_t/(-z+We),j=G*-z;if(ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(j),nt.translateZ(G),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Bt[10]===-1)nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let $=Yt+G,R=me+G,S=Kt-j,U=I+(_t-j),q=ee*me/R*$,Y=ge*me/R*$;nt.projectionMatrix.makePerspective(S,U,q,Y,$,R),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function lt(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(n===null)return;let ht=nt.near,Ct=nt.far;x.texture!==null&&(x.depthNear>0&&(ht=x.depthNear),x.depthFar>0&&(Ct=x.depthFar)),_.near=A.near=E.near=ht,_.far=A.far=E.far=Ct,(P!==_.near||N!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,N=_.far),E.layers.mask=nt.layers.mask|2,A.layers.mask=nt.layers.mask|4,_.layers.mask=E.layers.mask|A.layers.mask;let _t=nt.parent,Bt=_.cameras;lt(_,_t);for(let Vt=0;Vt<Bt.length;Vt++)lt(Bt[Vt],_t);Bt.length===2?k(_,E,A):_.projectionMatrix.copy(E.projectionMatrix),ut(nt,_,_t)};function ut(nt,ht,Ct){Ct===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(Ct.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Tl*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let vt=null;function Ot(nt,ht){if(h=ht.getViewerPose(c||o),g=ht,h!==null){let Ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let _t=!1;Ct.length!==_.cameras.length&&(_.cameras.length=0,_t=!0);for(let Vt=0;Vt<Ct.length;Vt++){let Yt=Ct[Vt],me=null;if(d!==null)me=d.getViewport(Yt);else{let ge=u.getViewSubImage(f,Yt);me=ge.viewport,Vt===0&&(t.setRenderTargetTextures(y,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(y))}let ee=b[Vt];ee===void 0&&(ee=new je,ee.layers.enable(Vt),ee.viewport=new Ee,b[Vt]=ee),ee.matrix.fromArray(Yt.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Yt.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(me.x,me.y,me.width,me.height),Vt===0&&(_.matrix.copy(ee.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),_t===!0&&_.cameras.push(ee)}let Bt=n.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){let Vt=u.getDepthInformation(Ct[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,n.renderState)}}for(let Ct=0;Ct<M.length;Ct++){let _t=v[Ct],Bt=M[Ct];_t!==null&&Bt!==void 0&&Bt.update(_t,ht,c||o)}vt&&vt(nt,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Rt=new Mu;Rt.setAnimationLoop(Ot),this.setAnimationLoop=function(nt){vt=nt},this.dispose=function(){}}},Dn=new Pe,Tg=new jt;function Ag(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,_u(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ze&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ze&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),M=y.envMap,v=y.envMapRotation;M&&(p.envMap.value=M,Dn.copy(v),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),p.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(Dn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ze&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Rg(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let v=M.program;i.uniformBlockBinding(y,v)}function c(y,M){let v=n[y.id];v===void 0&&(g(y),v=h(y),n[y.id]=v,y.addEventListener("dispose",p));let C=M.program;i.updateUBOMapping(y,C);let w=t.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){let M=u();y.__bindingPointIndex=M;let v=s.createBuffer(),C=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=n[y.id],v=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,E=v.length;w<E;w++){let A=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,_=A.length;b<_;b++){let P=A[b];if(d(P,w,b,C)===!0){let N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],W=0;for(let Q=0;Q<B.length;Q++){let X=B[Q],it=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,N+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,M,v,C){let w=y.value,E=M+"_"+v;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{let A=C[E];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return C[E]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(y){let M=y.uniforms,v=0,C=16;for(let E=0,A=M.length;E<A;E++){let b=Array.isArray(M[E])?M[E]:[M[E]];for(let _=0,P=b.length;_<P;_++){let N=b[_],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,Q=B.length;W<Q;W++){let X=B[W],it=x(X),k=v%C,lt=k%it.boundary,ut=k+lt;v+=lt,ut!==0&&C-ut<it.storage&&(v+=C-ut),N.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=it.storage}}}let w=v%C;return w>0&&(v+=C-w),y.__size=v,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){let M=y.target;M.removeEventListener("dispose",p);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function m(){for(let y in n)s.deleteBuffer(n[y]);o=[],n={},r={}}return{bind:l,update:c,dispose:m}}var lo=class{constructor(t={}){let{canvas:e=Ld(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,m=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=vn,this.toneMappingExposure=1;let v=this,C=!1,w=0,E=0,A=null,b=-1,_=null,P=new Ee,N=new Ee,B=null,W=new ft(0),Q=0,X=e.width,it=e.height,k=1,lt=null,ut=null,vt=new Ee(0,0,X,it),Ot=new Ee(0,0,X,it),Rt=!1,nt=new ir,ht=!1,Ct=!1,_t=new jt,Bt=new jt,Vt=new L,Yt=new Ee,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function ge(){return A===null?k:1}let z=i;function We(T,F){return e.getContext(T,F)}try{let T={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),z===null){let F="webgl2";if(z=We(F,T),z===null)throw We(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Kt,I,G,j,$,R,S,U,q,Y,V,ct,rt,st,pt,H,et,mt,Z,at,At,xt,Ht,D;function Mt(){Kt=new Wm(z),Kt.init(),xt=new bg(z,Kt),I=new Om(z,Kt,t,xt),G=new vg(z,Kt),I.reverseDepthBuffer&&f&&G.buffers.depth.setReversed(!0),j=new qm(z),$=new og,R=new Mg(z,Kt,G,$,I,xt,j),S=new km(v),U=new Gm(v),q=new jd(z),Ht=new Fm(z,q),Y=new Xm(z,q,j,Ht),V=new $m(z,Y,q,j),Z=new Zm(z,I,R),H=new Bm($),ct=new rg(v,S,U,Kt,I,Ht,H),rt=new Ag(v,$),st=new lg,pt=new pg(Kt),mt=new Nm(v,S,U,G,V,d,l),et=new xg(v,V,I),D=new Rg(z,j,I,G),at=new zm(z,Kt,j),At=new Ym(z,Kt,j),j.programs=ct.programs,v.capabilities=I,v.extensions=Kt,v.properties=$,v.renderLists=st,v.shadowMap=et,v.state=G,v.info=j}Mt();let tt=new Vl(v,z);this.xr=tt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let T=Kt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Kt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(X,it,!1))},this.getSize=function(T){return T.set(X,it)},this.setSize=function(T,F,J=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,it=F,e.width=Math.floor(T*k),e.height=Math.floor(F*k),J===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(X*k,it*k).floor()},this.setDrawingBufferSize=function(T,F,J){X=T,it=F,k=J,e.width=Math.floor(T*J),e.height=Math.floor(F*J),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,F,J,K){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,F,J,K),G.viewport(P.copy(vt).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(Ot)},this.setScissor=function(T,F,J,K){T.isVector4?Ot.set(T.x,T.y,T.z,T.w):Ot.set(T,F,J,K),G.scissor(N.copy(Ot).multiplyScalar(k).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(T){G.setScissorTest(Rt=T)},this.setOpaqueSort=function(T){lt=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(T=!0,F=!0,J=!0){let K=0;if(T){let O=!1;if(A!==null){let dt=A.texture.format;O=dt===Sc||dt===bc||dt===Mc}if(O){let dt=A.texture.type,St=dt===Li||dt===Bn||dt===tr||dt===bs||dt===vc||dt===_c,Lt=mt.getClearColor(),Dt=mt.getClearAlpha(),Gt=Lt.r,Zt=Lt.g,Ut=Lt.b;St?(g[0]=Gt,g[1]=Zt,g[2]=Ut,g[3]=Dt,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=Gt,x[1]=Zt,x[2]=Ut,x[3]=Dt,z.clearBufferiv(z.COLOR,0,x))}else K|=z.COLOR_BUFFER_BIT}F&&(K|=z.DEPTH_BUFFER_BIT),J&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),st.dispose(),pt.dispose(),$.dispose(),S.dispose(),U.dispose(),V.dispose(),Ht.dispose(),D.dispose(),ct.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Hc),tt.removeEventListener("sessionend",Vc),An.stop()};function ot(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let T=j.autoReset,F=et.enabled,J=et.autoUpdate,K=et.needsUpdate,O=et.type;Mt(),j.autoReset=T,et.enabled=F,et.autoUpdate=J,et.needsUpdate=K,et.type=O}function bt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qt(T){let F=T.target;F.removeEventListener("dispose",qt),we(F)}function we(T){Xe(T),$.remove(T)}function Xe(T){let F=$.get(T).programs;F!==void 0&&(F.forEach(function(J){ct.releaseProgram(J)}),T.isShaderMaterial&&ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,J,K,O,dt){F===null&&(F=me);let St=O.isMesh&&O.matrixWorld.determinant()<0,Lt=Zu(T,F,J,K,O);G.setMaterial(K,St);let Dt=J.index,Gt=1;if(K.wireframe===!0){if(Dt=Y.getWireframeAttribute(J),Dt===void 0)return;Gt=2}let Zt=J.drawRange,Ut=J.attributes.position,se=Zt.start*Gt,de=(Zt.start+Zt.count)*Gt;dt!==null&&(se=Math.max(se,dt.start*Gt),de=Math.min(de,(dt.start+dt.count)*Gt)),Dt!==null?(se=Math.max(se,0),de=Math.min(de,Dt.count)):Ut!=null&&(se=Math.max(se,0),de=Math.min(de,Ut.count));let xe=de-se;if(xe<0||xe===1/0)return;Ht.setup(O,K,Lt,J,Dt);let ri,re=at;if(Dt!==null&&(ri=q.get(Dt),re=At,re.setIndex(ri)),O.isMesh)K.wireframe===!0?(G.setLineWidth(K.wireframeLinewidth*ge()),re.setMode(z.LINES)):re.setMode(z.TRIANGLES);else if(O.isLine){let Nt=K.linewidth;Nt===void 0&&(Nt=1),G.setLineWidth(Nt*ge()),O.isLineSegments?re.setMode(z.LINES):O.isLineLoop?re.setMode(z.LINE_LOOP):re.setMode(z.LINE_STRIP)}else O.isPoints?re.setMode(z.POINTS):O.isSprite&&re.setMode(z.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)re.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))re.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Nt=O._multiDrawStarts,Yi=O._multiDrawCounts,oe=O._multiDrawCount,Ai=Dt?q.get(Dt).bytesPerElement:1,jn=$.get(K).currentProgram.getUniforms();for(let ci=0;ci<oe;ci++)jn.setValue(z,"_gl_DrawID",ci),re.render(Nt[ci]/Ai,Yi[ci])}else if(O.isInstancedMesh)re.renderInstances(se,xe,O.count);else if(J.isInstancedBufferGeometry){let Nt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Yi=Math.min(J.instanceCount,Nt);re.renderInstances(se,xe,Yi)}else re.render(se,xe)};function he(T,F,J){T.transparent===!0&&T.side===De&&T.forceSinglePass===!1?(T.side=Ze,T.needsUpdate=!0,xr(T,F,J),T.side=_n,T.needsUpdate=!0,xr(T,F,J),T.side=De):xr(T,F,J)}this.compile=function(T,F,J=null){J===null&&(J=T),m=pt.get(J),m.init(F),M.push(m),J.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),T!==J&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let K=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let dt=O.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){let Lt=dt[St];he(Lt,J,O),K.add(Lt)}else he(dt,J,O),K.add(dt)}),M.pop(),m=null,K},this.compileAsync=function(T,F,J=null){let K=this.compile(T,F,J);return new Promise(O=>{function dt(){if(K.forEach(function(St){$.get(St).currentProgram.isReady()&&K.delete(St)}),K.size===0){O(T);return}setTimeout(dt,10)}Kt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ti=null;function Xi(T){Ti&&Ti(T)}function Hc(){An.stop()}function Vc(){An.start()}let An=new Mu;An.setAnimationLoop(Xi),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(T){Ti=T,tt.setAnimationLoop(T),T===null?An.stop():An.start()},tt.addEventListener("sessionstart",Hc),tt.addEventListener("sessionend",Vc),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(F),F=tt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,A),m=pt.get(T,M.length),m.init(F),M.push(m),Bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(Bt),Ct=this.localClippingEnabled,ht=H.init(this.clippingPlanes,Ct),p=st.get(T,y.length),p.init(),y.push(p),tt.enabled===!0&&tt.isPresenting===!0){let dt=v.xr.getDepthSensingMesh();dt!==null&&ra(dt,F,-1/0,v.sortObjects)}ra(T,F,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(lt,ut),ee=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ee&&mt.addToRenderList(p,T),this.info.render.frame++,ht===!0&&H.beginShadows();let J=m.state.shadowsArray;et.render(J,T,F),ht===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=p.opaque,O=p.transmissive;if(m.setupLights(),F.isArrayCamera){let dt=F.cameras;if(O.length>0)for(let St=0,Lt=dt.length;St<Lt;St++){let Dt=dt[St];Wc(K,O,T,Dt)}ee&&mt.render(T);for(let St=0,Lt=dt.length;St<Lt;St++){let Dt=dt[St];Gc(p,T,Dt,Dt.viewport)}}else O.length>0&&Wc(K,O,T,F),ee&&mt.render(T),Gc(p,T,F);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(v,T,F),Ht.resetDefaultState(),b=-1,_=null,M.pop(),M.length>0?(m=M[M.length-1],ht===!0&&H.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function ra(T,F,J,K){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){K&&Yt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Bt);let St=V.update(T),Lt=T.material;Lt.visible&&p.push(T,St,Lt,J,Yt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){let St=V.update(T),Lt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Yt.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Yt.copy(St.boundingSphere.center)),Yt.applyMatrix4(T.matrixWorld).applyMatrix4(Bt)),Array.isArray(Lt)){let Dt=St.groups;for(let Gt=0,Zt=Dt.length;Gt<Zt;Gt++){let Ut=Dt[Gt],se=Lt[Ut.materialIndex];se&&se.visible&&p.push(T,St,se,J,Yt.z,Ut)}}else Lt.visible&&p.push(T,St,Lt,J,Yt.z,null)}}let dt=T.children;for(let St=0,Lt=dt.length;St<Lt;St++)ra(dt[St],F,J,K)}function Gc(T,F,J,K){let O=T.opaque,dt=T.transmissive,St=T.transparent;m.setupLightsView(J),ht===!0&&H.setGlobalState(v.clippingPlanes,J),K&&G.viewport(P.copy(K)),O.length>0&&gr(O,F,J),dt.length>0&&gr(dt,F,J),St.length>0&&gr(St,F,J),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Wc(T,F,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new ke(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?fi:Li,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let dt=m.state.transmissionRenderTarget[K.id],St=K.viewport||P;dt.setSize(St.z,St.w);let Lt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(W),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),ee&&mt.render(J);let Dt=v.toneMapping;v.toneMapping=vn;let Gt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),ht===!0&&H.setGlobalState(v.clippingPlanes,K),gr(T,J,K),R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Ut=0,se=F.length;Ut<se;Ut++){let de=F[Ut],xe=de.object,ri=de.geometry,re=de.material,Nt=de.group;if(re.side===De&&xe.layers.test(K.layers)){let Yi=re.side;re.side=Ze,re.needsUpdate=!0,Xc(xe,J,K,ri,re,Nt),re.side=Yi,re.needsUpdate=!0,Zt=!0}}Zt===!0&&(R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt))}v.setRenderTarget(Lt),v.setClearColor(W,Q),Gt!==void 0&&(K.viewport=Gt),v.toneMapping=Dt}function gr(T,F,J){let K=F.isScene===!0?F.overrideMaterial:null;for(let O=0,dt=T.length;O<dt;O++){let St=T[O],Lt=St.object,Dt=St.geometry,Gt=K===null?St.material:K,Zt=St.group;Lt.layers.test(J.layers)&&Xc(Lt,F,J,Dt,Gt,Zt)}}function Xc(T,F,J,K,O,dt){T.onBeforeRender(v,F,J,K,O,dt),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(v,F,J,K,T,dt),O.transparent===!0&&O.side===De&&O.forceSinglePass===!1?(O.side=Ze,O.needsUpdate=!0,v.renderBufferDirect(J,F,K,O,T,dt),O.side=_n,O.needsUpdate=!0,v.renderBufferDirect(J,F,K,O,T,dt),O.side=De):v.renderBufferDirect(J,F,K,O,T,dt),T.onAfterRender(v,F,J,K,O,dt)}function xr(T,F,J){F.isScene!==!0&&(F=me);let K=$.get(T),O=m.state.lights,dt=m.state.shadowsArray,St=O.state.version,Lt=ct.getParameters(T,O.state,dt,F,J),Dt=ct.getProgramCacheKey(Lt),Gt=K.programs;K.environment=T.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(T.isMeshStandardMaterial?U:S).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",qt),Gt=new Map,K.programs=Gt);let Zt=Gt.get(Dt);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===St)return qc(T,Lt),Zt}else Lt.uniforms=ct.getUniforms(T),T.onBeforeCompile(Lt,v),Zt=ct.acquireProgram(Lt,Dt),Gt.set(Dt,Zt),K.uniforms=Lt.uniforms;let Ut=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=H.uniform),qc(T,Lt),K.needsLights=Ju(T),K.lightsStateVersion=St,K.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function Yc(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=ys.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function qc(T,F){let J=$.get(T);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function Zu(T,F,J,K,O){F.isScene!==!0&&(F=me),R.resetTextureUnits();let dt=F.fog,St=K.isMeshStandardMaterial?F.environment:null,Lt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ds,Dt=(K.isMeshStandardMaterial?U:S).get(K.envMap||St),Gt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Zt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ut=!!J.morphAttributes.position,se=!!J.morphAttributes.normal,de=!!J.morphAttributes.color,xe=vn;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xe=v.toneMapping);let ri=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,re=ri!==void 0?ri.length:0,Nt=$.get(K),Yi=m.state.lights;if(ht===!0&&(Ct===!0||T!==_)){let yi=T===_&&K.id===b;H.setState(K,T,yi)}let oe=!1;K.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Yi.state.version||Nt.outputColorSpace!==Lt||O.isBatchedMesh&&Nt.batching===!1||!O.isBatchedMesh&&Nt.batching===!0||O.isBatchedMesh&&Nt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Nt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Nt.instancing===!1||!O.isInstancedMesh&&Nt.instancing===!0||O.isSkinnedMesh&&Nt.skinning===!1||!O.isSkinnedMesh&&Nt.skinning===!0||O.isInstancedMesh&&Nt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Nt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Nt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Nt.instancingMorph===!1&&O.morphTexture!==null||Nt.envMap!==Dt||K.fog===!0&&Nt.fog!==dt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==H.numPlanes||Nt.numIntersection!==H.numIntersection)||Nt.vertexAlphas!==Gt||Nt.vertexTangents!==Zt||Nt.morphTargets!==Ut||Nt.morphNormals!==se||Nt.morphColors!==de||Nt.toneMapping!==xe||Nt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Nt.__version=K.version);let Ai=Nt.currentProgram;oe===!0&&(Ai=xr(K,F,O));let jn=!1,ci=!1,Bs=!1,ye=Ai.getUniforms(),Oi=Nt.uniforms;if(G.useProgram(Ai.program)&&(jn=!0,ci=!0,Bs=!0),K.id!==b&&(b=K.id,ci=!0),jn||_!==T){G.buffers.depth.getReversed()?(_t.copy(T.projectionMatrix),Ud(_t),Nd(_t),ye.setValue(z,"projectionMatrix",_t)):ye.setValue(z,"projectionMatrix",T.projectionMatrix),ye.setValue(z,"viewMatrix",T.matrixWorldInverse);let cn=ye.map.cameraPosition;cn!==void 0&&cn.setValue(z,Vt.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&ye.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ye.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),_!==T&&(_=T,ci=!0,Bs=!0)}if(O.isSkinnedMesh){ye.setOptional(z,O,"bindMatrix"),ye.setOptional(z,O,"bindMatrixInverse");let yi=O.skeleton;yi&&(yi.boneTexture===null&&yi.computeBoneTexture(),ye.setValue(z,"boneTexture",yi.boneTexture,R))}O.isBatchedMesh&&(ye.setOptional(z,O,"batchingTexture"),ye.setValue(z,"batchingTexture",O._matricesTexture,R),ye.setOptional(z,O,"batchingIdTexture"),ye.setValue(z,"batchingIdTexture",O._indirectTexture,R),ye.setOptional(z,O,"batchingColorTexture"),O._colorsTexture!==null&&ye.setValue(z,"batchingColorTexture",O._colorsTexture,R));let ks=J.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&Z.update(O,J,Ai),(ci||Nt.receiveShadow!==O.receiveShadow)&&(Nt.receiveShadow=O.receiveShadow,ye.setValue(z,"receiveShadow",O.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Oi.envMap.value=Dt,Oi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(Oi.envMapIntensity.value=F.environmentIntensity),ci&&(ye.setValue(z,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&$u(Oi,Bs),dt&&K.fog===!0&&rt.refreshFogUniforms(Oi,dt),rt.refreshMaterialUniforms(Oi,K,k,it,m.state.transmissionRenderTarget[T.id]),ys.upload(z,Yc(Nt),Oi,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ys.upload(z,Yc(Nt),Oi,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ye.setValue(z,"center",O.center),ye.setValue(z,"modelViewMatrix",O.modelViewMatrix),ye.setValue(z,"normalMatrix",O.normalMatrix),ye.setValue(z,"modelMatrix",O.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let yi=K.uniformsGroups;for(let cn=0,hn=yi.length;cn<hn;cn++){let Zc=yi[cn];D.update(Zc,Ai),D.bind(Zc,Ai)}}return Ai}function $u(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Ju(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,J){$.get(T.texture).__webglTexture=F,$.get(T.depthTexture).__webglTexture=J;let K=$.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){let J=$.get(T);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,J=0){A=T,w=F,E=J;let K=!0,O=null,dt=!1,St=!1;if(T){let Dt=$.get(T);if(Dt.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(z.FRAMEBUFFER,null),K=!1;else if(Dt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Dt.__hasExternalTextures)R.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ut=T.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&$.has(Ut)&&(T.width!==Ut.image.width||T.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(St=!0);let Zt=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Zt[F])?O=Zt[F][J]:O=Zt[F],dt=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?O=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Zt)?O=Zt[J]:O=Zt,P.copy(T.viewport),N.copy(T.scissor),B=T.scissorTest}else P.copy(vt).multiplyScalar(k).floor(),N.copy(Ot).multiplyScalar(k).floor(),B=Rt;if(G.bindFramebuffer(z.FRAMEBUFFER,O)&&K&&G.drawBuffers(T,O),G.viewport(P),G.scissor(N),G.setScissorTest(B),dt){let Dt=$.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Dt.__webglTexture,J)}else if(St){let Dt=$.get(T.texture),Gt=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Dt.__webglTexture,J||0,Gt)}b=-1},this.readRenderTargetPixels=function(T,F,J,K,O,dt,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){G.bindFramebuffer(z.FRAMEBUFFER,Lt);try{let Dt=T.texture,Gt=Dt.format,Zt=Dt.type;if(!I.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-K&&J>=0&&J<=T.height-O&&z.readPixels(F,J,K,O,xt.convert(Gt),xt.convert(Zt),dt)}finally{let Dt=A!==null?$.get(A).__webglFramebuffer:null;G.bindFramebuffer(z.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,F,J,K,O,dt,St){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){let Dt=T.texture,Gt=Dt.format,Zt=Dt.type;if(!I.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-K&&J>=0&&J<=T.height-O){G.bindFramebuffer(z.FRAMEBUFFER,Lt);let Ut=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ut),z.bufferData(z.PIXEL_PACK_BUFFER,dt.byteLength,z.STREAM_READ),z.readPixels(F,J,K,O,xt.convert(Gt),xt.convert(Zt),0);let se=A!==null?$.get(A).__webglFramebuffer:null;G.bindFramebuffer(z.FRAMEBUFFER,se);let de=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Dd(z,de,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ut),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,dt),z.deleteBuffer(Ut),z.deleteSync(de),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,J=0){T.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);let K=Math.pow(2,-J),O=Math.floor(T.image.width*K),dt=Math.floor(T.image.height*K),St=F!==null?F.x:0,Lt=F!==null?F.y:0;R.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,St,Lt,O,dt),G.unbindTexture()},this.copyTextureToTexture=function(T,F,J=null,K=null,O=0){T.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,J=null);let dt,St,Lt,Dt,Gt,Zt,Ut,se,de,xe=T.isCompressedTexture?T.mipmaps[O]:T.image;J!==null?(dt=J.max.x-J.min.x,St=J.max.y-J.min.y,Lt=J.isBox3?J.max.z-J.min.z:1,Dt=J.min.x,Gt=J.min.y,Zt=J.isBox3?J.min.z:0):(dt=xe.width,St=xe.height,Lt=xe.depth||1,Dt=0,Gt=0,Zt=0),K!==null?(Ut=K.x,se=K.y,de=K.z):(Ut=0,se=0,de=0);let ri=xt.convert(F.format),re=xt.convert(F.type),Nt;F.isData3DTexture?(R.setTexture3D(F,0),Nt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Nt=z.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Nt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let Yi=z.getParameter(z.UNPACK_ROW_LENGTH),oe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ai=z.getParameter(z.UNPACK_SKIP_PIXELS),jn=z.getParameter(z.UNPACK_SKIP_ROWS),ci=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,xe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Dt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Gt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Zt);let Bs=T.isDataArrayTexture||T.isData3DTexture,ye=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Oi=$.get(T),ks=$.get(F),yi=$.get(Oi.__renderTarget),cn=$.get(ks.__renderTarget);G.bindFramebuffer(z.READ_FRAMEBUFFER,yi.__webglFramebuffer),G.bindFramebuffer(z.DRAW_FRAMEBUFFER,cn.__webglFramebuffer);for(let hn=0;hn<Lt;hn++)Bs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(T).__webglTexture,O,Zt+hn),T.isDepthTexture?(ye&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$.get(F).__webglTexture,O,de+hn),z.blitFramebuffer(Dt,Gt,dt,St,Ut,se,dt,St,z.DEPTH_BUFFER_BIT,z.NEAREST)):ye?z.copyTexSubImage3D(Nt,O,Ut,se,de+hn,Dt,Gt,dt,St):z.copyTexSubImage2D(Nt,O,Ut,se,de+hn,Dt,Gt,dt,St);G.bindFramebuffer(z.READ_FRAMEBUFFER,null),G.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ye?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Nt,O,Ut,se,de,dt,St,Lt,ri,re,xe.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Nt,O,Ut,se,de,dt,St,Lt,ri,xe.data):z.texSubImage3D(Nt,O,Ut,se,de,dt,St,Lt,ri,re,xe):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,Ut,se,dt,St,ri,re,xe.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,Ut,se,xe.width,xe.height,ri,xe.data):z.texSubImage2D(z.TEXTURE_2D,O,Ut,se,dt,St,ri,re,xe);z.pixelStorei(z.UNPACK_ROW_LENGTH,Yi),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ai),z.pixelStorei(z.UNPACK_SKIP_ROWS,jn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ci),O===0&&F.generateMipmaps&&z.generateMipmap(Nt),G.unbindTexture()},this.copyTextureToTexture3D=function(T,F,J=null,K=null,O=0){return T.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,J,K,O)},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),G.unbindTexture()},this.resetState=function(){w=0,E=0,A=null,G.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}},co=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ft(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var As=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pe,this.environmentIntensity=1,this.environmentRotation=new Pe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var nr=class extends ai{constructor(t=null,e=1,i=1,n,r,o,a,l,c=di,h=di,u,f){super(null,o,a,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ho=class extends be{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new jt,Zh=new jt,Br=[],$h=new rn,Cg=new jt,Ys=new Pt,qs=new on,bn=class extends Pt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Cg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ps),$h.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union($h)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ps),qs.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(i),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ps),Zh.multiplyMatrices(i,ps),Ys.matrixWorld=Zh,Ys.raycast(t,Br);for(let o=0,a=Br.length;o<a;o++){let l=Br[o];l.instanceId=r,l.object=this,e.push(l)}Br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new nr(new Float32Array(n*this.count),n,this.count,ar,ki));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var kn=class extends Vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},uo=new L,fo=new L,Jh=new jt,Zs=new er,kr=new on,Fa=new L,Kh=new L,Gl=class extends He{constructor(t=new Xt,e=new kn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)uo.fromBufferAttribute(e,n-1),fo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=uo.distanceTo(fo);t.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(n),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Jh.copy(n).invert(),Zs.copy(t.ray).applyMatrix4(Jh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=h.getX(x),y=h.getX(x+1),M=Hr(this,t,Zs,l,m,y);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(d),m=Hr(this,t,Zs,l,x,p);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=Hr(this,t,Zs,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=Hr(this,t,Zs,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hr(s,t,e,i,n,r){let o=s.geometry.attributes.position;if(uo.fromBufferAttribute(o,n),fo.fromBufferAttribute(o,r),e.distanceSqToSegment(uo,fo,Fa,Kh)>i)return;Fa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Fa);if(!(l<t.near||l>t.far))return{distance:l,point:Kh.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var Qh=new L,jh=new L,Rs=class extends Gl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Qh.fromBufferAttribute(e,n),jh.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Qh.distanceTo(jh);t.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sr=class extends Vi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tu=new jt,Wl=new er,Vr=new on,Gr=new L,Cs=class extends He{constructor(t=new Xt,e=new sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(n),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;tu.copy(n).invert(),Wl.copy(t.ray).applyMatrix4(tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let p=c.getX(g);Gr.fromBufferAttribute(u,p),eu(Gr,p,l,n,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Gr.fromBufferAttribute(u,g),eu(Gr,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function eu(s,t,e,i,n,r,o){let a=Wl.distanceSqToPoint(s);if(a<e){let l=new L;Wl.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var an=class extends ai{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],f=i[n+1]-h,d=(o-h)/f;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new gt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new L,n=[],r=[],o=[],a=new L,l=new jt;for(let d=0;d<=t;d++){let g=d/t;n[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ze(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(ze(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],d*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},po=class extends Ui{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xl=class extends po{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tc(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,n(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var Wr=new L,za=new Tc,Oa=new Tc,Ba=new Tc,Ps=class extends Ui{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new L){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Wr.subVectors(n[0],n[1]).add(n[0]),c=Wr);let u=n[a%r],f=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Wr.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Wr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),za.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),Oa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),Ba.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(za.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Oa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ba.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(za.calc(l),Oa.calc(l),Ba.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new L().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function iu(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function Pg(s,t){let e=1-s;return e*e*t}function Ig(s,t){return 2*(1-s)*s*t}function Lg(s,t){return s*s*t}function Qs(s,t,e,i){return Pg(s,t)+Ig(s,e)+Lg(s,i)}function Dg(s,t){let e=1-s;return e*e*e*t}function Ug(s,t){let e=1-s;return 3*e*e*s*t}function Ng(s,t){return 3*(1-s)*s*s*t}function Fg(s,t){return s*s*s*t}function js(s,t,e,i,n){return Dg(s,t)+Ug(s,e)+Ng(s,i)+Fg(s,n)}var Yl=class extends Ui{constructor(t=new gt,e=new gt,i=new gt,n=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new gt){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(js(t,n.x,r.x,o.x,a.x),js(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ql=class extends Ui{constructor(t=new L,e=new L,i=new L,n=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new L){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(js(t,n.x,r.x,o.x,a.x),js(t,n.y,r.y,o.y,a.y),js(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zl=class extends Ui{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$l=class extends Ui{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jl=class extends Ui{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Qs(t,n.x,r.x,o.x),Qs(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends Ui{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(Qs(t,n.x,r.x,o.x),Qs(t,n.y,r.y,o.y),Qs(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kl=class extends Ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(iu(a,l.x,c.x,h.x,u.x),iu(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new gt().fromArray(n))}return this}},zg=Object.freeze({__proto__:null,ArcCurve:Xl,CatmullRomCurve3:Ps,CubicBezierCurve:Yl,CubicBezierCurve3:ql,EllipseCurve:po,LineCurve:Zl,LineCurve3:$l,QuadraticBezierCurve:Jl,QuadraticBezierCurve3:mo,SplineCurve:Kl});var go=class s extends Xt{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=ze(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,f=new gt,d=new L,g=new L,x=new L,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){let M=i+y*h*n,v=Math.sin(M),C=Math.cos(M);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*C,o.push(u.x,u.y,u.z),f.x=y/e,f.y=w/(t.length-1),a.push(f.x,f.y);let E=l[3*w+0]*v,A=l[3*w+1],b=l[3*w+0]*C;c.push(E,A,b)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let v=M+y*t.length,C=v,w=v+t.length,E=v+t.length+1,A=v+1;r.push(C,w,A),r.push(E,A,w)}this.setIndex(r),this.setAttribute("position",new Et(o,3)),this.setAttribute("uv",new Et(a,2)),this.setAttribute("normal",new Et(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Sn=class s extends Xt{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new L,h=new gt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Et(o,3)),this.setAttribute("normal",new Et(a,3)),this.setAttribute("uv",new Et(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Be=class s extends Xt{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],p=i/2,m=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(d,2));function y(){let v=new L,C=new L,w=0,E=(e-t)/i;for(let A=0;A<=r;A++){let b=[],_=A/r,P=_*(e-t)+t;for(let N=0;N<=n;N++){let B=N/n,W=B*l+a,Q=Math.sin(W),X=Math.cos(W);C.x=P*Q,C.y=-_*i+p,C.z=P*X,u.push(C.x,C.y,C.z),v.set(Q,E,X).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-_),b.push(g++)}x.push(b)}for(let A=0;A<n;A++)for(let b=0;b<r;b++){let _=x[b][A],P=x[b+1][A],N=x[b+1][A+1],B=x[b][A+1];(t>0||b!==0)&&(h.push(_,P,B),w+=3),(e>0||b!==r-1)&&(h.push(P,N,B),w+=3)}c.addGroup(m,w,0),m+=w}function M(v){let C=g,w=new gt,E=new L,A=0,b=v===!0?t:e,_=v===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),g++;let P=g;for(let N=0;N<=n;N++){let W=N/n*l+a,Q=Math.cos(W),X=Math.sin(W);E.x=b*X,E.y=p*_,E.z=b*Q,u.push(E.x,E.y,E.z),f.push(0,_,0),w.x=Q*.5+.5,w.y=X*.5*_+.5,d.push(w.x,w.y),g++}for(let N=0;N<n;N++){let B=C+N,W=P+N;v===!0?h.push(W,W+1,B):h.push(W+1,W,B),A+=3}c.addGroup(m,A,v===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rr=class s extends Be{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ql=class s extends Xt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new L,v=new L,C=new L;for(let w=0;w<e.length;w+=3)d(e[w+0],M),d(e[w+1],v),d(e[w+2],C),l(M,v,C,y)}function l(y,M,v,C){let w=C+1,E=[];for(let A=0;A<=w;A++){E[A]=[];let b=y.clone().lerp(v,A/w),_=M.clone().lerp(v,A/w),P=w-A;for(let N=0;N<=P;N++)N===0&&A===w?E[A][N]=b:E[A][N]=b.clone().lerp(_,N/P)}for(let A=0;A<w;A++)for(let b=0;b<2*(w-A)-1;b++){let _=Math.floor(b/2);b%2===0?(f(E[A][_+1]),f(E[A+1][_]),f(E[A][_])):(f(E[A][_+1]),f(E[A+1][_+1]),f(E[A+1][_]))}}function c(y){let M=new L;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let y=new L;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let v=p(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;o.push(v,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let M=o[y+0],v=o[y+2],C=o[y+4],w=Math.max(M,v,C),E=Math.min(M,v,C);w>.9&&E<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,M){let v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){let y=new L,M=new L,v=new L,C=new L,w=new gt,E=new gt,A=new gt;for(let b=0,_=0;b<r.length;b+=9,_+=6){y.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(o[_+0],o[_+1]),E.set(o[_+2],o[_+3]),A.set(o[_+4],o[_+5]),C.copy(y).add(M).add(v).divideScalar(3);let P=p(C);x(w,_+0,y,P),x(E,_+2,M,P),x(A,_+4,v,P)}}function x(y,M,v,C){C<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Hn=class s extends Ql{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Is=class s extends Xt{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/n,d=new L,g=new gt;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){let m=r+p/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<n;x++){let p=x*(i+1);for(let m=0;m<i;m++){let y=m+p,M=y,v=y+i+1,C=y+i+2,w=y+1;a.push(M,v,w),a.push(v,C,w)}}this.setIndex(a),this.setAttribute("position",new Et(l,3)),this.setAttribute("normal",new Et(c,3)),this.setAttribute("uv",new Et(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Vn=class s extends Xt{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,d=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let y=[],M=m/i,v=0;m===0&&o===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){let w=C/e;u.x=-t*Math.cos(n+w*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(n+w*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(w+v,1-M),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let M=h[m][y+1],v=h[m][y],C=h[m+1][y],w=h[m+1][y+1];(m!==0||o>0)&&d.push(M,v,w),(m!==i-1||l<Math.PI)&&d.push(v,C,w)}this.setIndex(d),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(x,3)),this.setAttribute("uv",new Et(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wn=class s extends Xt{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=i;d++)for(let g=0;g<=n;g++){let x=g/n*r,p=d/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=n;g++){let x=(n+1)*d+g-1,p=(n+1)*(d-1)+g-1,m=(n+1)*(d-1)+g,y=(n+1)*d+g;o.push(x,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new Et(a,3)),this.setAttribute("normal",new Et(l,3)),this.setAttribute("uv",new Et(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var xo=class s extends Xt{constructor(t=new mo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new gt,h=new L,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(d,2));function x(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),y(),m()}function p(M){h=t.getPointAt(M/e,h);let v=o.normals[M],C=o.binormals[M];for(let w=0;w<=n;w++){let E=w/n*Math.PI*2,A=Math.sin(E),b=-Math.cos(E);l.x=b*v.x+A*C.x,l.y=b*v.y+A*C.y,l.z=b*v.z+A*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let v=1;v<=n;v++){let C=(n+1)*(M-1)+(v-1),w=(n+1)*M+(v-1),E=(n+1)*M+v,A=(n+1)*(M-1)+v;g.push(C,w,A),g.push(w,E,A)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=n;v++)c.x=M/e,c.y=v/n,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new zg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var yo=class extends pe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Ni=class extends Vi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vo=class extends Ni{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ve=class extends Vi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Xr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Og(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ls=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jl=class extends Ls{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case jc:r=t,a=2*e-i;break;case th:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:o=t,l=2*i-e;break;case th:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-e)/(n-e),x=g*g,p=x*g,m=-f*p+2*f*x-f*g,y=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,M=(-1-d)*p+(1.5+d)*x+.5*g,v=d*p-d*x;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+y*o[c+C]+M*o[l+C]+v*o[u+C];return r}},tc=class extends Ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},ec=class extends Ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Fi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xr(e,this.TimeBufferType),this.values=Xr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Xr(t.times,Array),values:Xr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case El:e=this.InterpolantFactoryMethodLinear;break;case aa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Og(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===aa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=El;var Gn=class extends Fi{constructor(t,e,i){super(t,e,i)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Kr;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends Fi{};ic.prototype.ValueTypeName="color";var nc=class extends Fi{};nc.prototype.ValueTypeName="number";var sc=class extends Ls{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Te.slerpFlat(r,0,o,c-a,o,c,l);return r}},_o=class extends Fi{InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Fi{constructor(t,e,i){super(t,e,i)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=Kr;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Fi{};rc.prototype.ValueTypeName="vector";var oc=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Bg=new oc,ac=class{constructor(t){this.manager=t!==void 0?t:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mo=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},bo=class extends Mo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ka=new jt,nu=new L,su=new L,lc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(nu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var cc=class extends lc{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},So=class extends Mo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var wo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ru();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ru(){return performance.now()}var Ac="\\[\\]\\.:\\/",kg=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",Hg="[^"+Ac.replace("\\.","")+"]",Vg=/((?:WC+[\/:])*)/.source.replace("WC",Rc),Gg=/(WCOD+)?/.source.replace("WCOD",Hg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),Yg=new RegExp("^"+Vg+Gg+Wg+Xg+"$"),qg=["material","materials","bones","map"],hc=class{constructor(t,e,i){let n=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kg,"")}static parseTrackName(t){let e=Yg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);qg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=hc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ox=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var It=(s,t,e)=>s<t?t:s>e?e:s,Zg=s=>s<0?0:s>1?1:s,zt=(s,t,e)=>s+(t-s)*e,Qt=(s,t,e)=>{let i=Zg((e-s)/(t-s));return i*i*(3-2*i)},ue=(s,t,e,i)=>s+(t-s)*(1-Math.exp(-e*i)),$g=s=>(s=(s+Math.PI)%(Math.PI*2),s<0&&(s+=Math.PI*2),s-Math.PI),Ns=(s,t,e,i)=>s+$g(t-s)*(1-Math.exp(-e*i)),Tu=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;function Yn(s){let t=s>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ro(s,t,e){let i=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Co(s,t,e=0){let i=Math.floor(s),n=Math.floor(t),r=s-i,o=t-n,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Ro(i,n,e),h=Ro(i+1,n,e),u=Ro(i,n+1,e),f=Ro(i+1,n+1,e);return c+(h-c)*a+(u-c)*l+(c-h-u+f)*a*l}function qn(s,t,e=4,i=0){let n=0,r=.5,o=1,a=0;for(let l=0;l<e;l++)n+=r*Co(s*o,t*o,i+l*17),a+=r,r*=.5,o*=2.03;return n/a}function Je(s){let t=s.length,e=new Array(t);for(let i=0;i<t;i++){let n=s[Math.max(0,i-1)],r=s[Math.min(t-1,i+1)];e[i]=r[0]===n[0]?0:(r[1]-n[1])/(r[0]-n[0])}return i=>{if(i<=s[0][0])return s[0][1];if(i>=s[t-1][0])return s[t-1][1];let n=0;for(;i>s[n+1][0];)n++;let r=s[n][0],o=s[n+1][0],a=o-r,l=(i-r)/a,c=l*l,h=c*l;return(2*h-3*c+1)*s[n][1]+(h-2*c+l)*a*e[n]+(-2*h+3*c)*s[n+1][1]+(h-c)*a*e[n+1]}}var ti=s=>Math.round(s).toLocaleString("en-US");var Jg="https://sdk.crazygames.com/crazygames-sdk-v3.js",Mi={api:null,active:!1,playing:!1,loading:!1,muted:!1,onMute:null,async init(){try{await new Promise((t,e)=>{if(window.CrazyGames&&window.CrazyGames.SDK)return t();let i=document.createElement("script");i.src=Jg,i.onload=t,i.onerror=()=>e(new Error("sdk blocked")),document.head.appendChild(i),setTimeout(()=>e(new Error("sdk timeout")),3500)});let s=window.CrazyGames.SDK;if(await Promise.race([s.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("init timeout")),3500))]),this.api=s,this.active=s.environment==="crazygames"||s.environment==="local",this.active)try{this.muted=!!s.game.settings.muteAudio,s.game.addSettingsChangeListener(t=>{this.muted=!!t.muteAudio,this.onMute&&this.onMute(this.muted)})}catch{}}catch{this.api=null,this.active=!1}return this.active},call(s){if(this.active)try{s(this.api)}catch{}},loadingStart(){this.loading||(this.loading=!0,this.call(s=>s.game.loadingStart()))},loadingStop(){this.loading&&(this.loading=!1,this.call(s=>s.game.loadingStop()))},gameplayStart(){this.playing||(this.playing=!0,this.call(s=>s.game.gameplayStart()))},gameplayStop(){this.playing&&(this.playing=!1,this.call(s=>s.game.gameplayStop()))},happytime(){this.call(s=>s.game.happytime())},getItem(s){if(this.active)try{let t=this.api.data.getItem(s);if(t!==void 0)return t}catch{}try{return localStorage.getItem(s)}catch{return null}},setItem(s,t){if(this.active)try{this.api.data.setItem(s,t);return}catch{}try{localStorage.setItem(s,t)}catch{}}};var Au=[["forward","Accelerate"],["back","Brake / Reverse"],["left","Steer left"],["right","Steer right"],["boost","Boost / Climb"],["shift","Drift / Descend"],["fly","Flight on / off"],["rollL","Roll left"],["rollR","Roll right"],["reset","Reset car"],["look","Look back"],["photo","Photo mode"],["pause","Pause"]],cr={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],boost:["Space"],shift:["ShiftLeft","ShiftRight"],fly:["KeyF"],rollL:["KeyQ"],rollR:["KeyE"],reset:["KeyR"],look:["KeyC"],photo:["KeyP"],pause:["Escape"]};function Zn(s){if(!s)return"\u2014";let t={Space:"Space",ShiftLeft:"Shift",ShiftRight:"R Shift",ControlLeft:"Ctrl",ControlRight:"R Ctrl",AltLeft:"Alt",AltRight:"R Alt",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Escape:"Esc",Enter:"Enter",Backspace:"Backspace",Tab:"Tab"};return t[s]?t[s]:s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):s.startsWith("Numpad")?"Num "+s.slice(6):s}var Po=class{constructor(t,e){this.canvas=t,this.keys=e,this.down=new Set,this.pressed=new Set,this.state={steer:0,throttle:0,boost:!1,shift:!1,roll:0,fly:!1,boostPressed:!1,look:!1},this.dragX=0,this.dragY=0,this.zoom=0,this.pinch=0,this.touch={active:!1,joy:null,jx:0,jy:0,boost:!1,shift:!1,fly:!1,roll:!1,drag:null},this.isTouch=!1,this.capture=null,this.enabled=!0,this.padPrev=[],this.onTouchMode=null,addEventListener("keydown",l=>{if(this.capture){l.preventDefault();let c=this.capture;this.capture=null,c(l.code);return}l.target&&/INPUT|SELECT|TEXTAREA/.test(l.target.tagName)||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(l.code)&&l.preventDefault(),l.repeat||this.pressed.add(l.code),this.down.add(l.code))}),addEventListener("keyup",l=>this.down.delete(l.code)),addEventListener("blur",()=>{this.down.clear(),this.touch.boost=this.touch.shift=!1,this.touch.joy=null});let i=!1;t.addEventListener("mousedown",l=>{(l.button===0||l.button===2)&&(i=!0)}),addEventListener("mouseup",()=>{i=!1}),addEventListener("mousemove",l=>{i&&(this.dragX+=l.movementX,this.dragY+=l.movementY)}),t.addEventListener("wheel",l=>{l.preventDefault(),this.zoom+=Math.sign(l.deltaY)},{passive:!1}),t.addEventListener("contextmenu",l=>l.preventDefault());let n=this.touch,r=l=>{this.isTouch||(this.isTouch=!0,this.onTouchMode&&this.onTouchMode(!0));for(let c of l.changedTouches)this.joyEnabled&&!n.joy&&c.clientX<innerWidth*.46&&c.clientY>innerHeight*.25?(n.joy={id:c.identifier,x:c.clientX,y:c.clientY},n.jx=n.jy=0,this.onJoy&&this.onJoy(n.joy,0,0,!0)):n.drag?n.drag2||(n.drag2={id:c.identifier,x:c.clientX,y:c.clientY},n.pinchD=Math.hypot(n.drag.x-c.clientX,n.drag.y-c.clientY)):n.drag={id:c.identifier,x:c.clientX,y:c.clientY};l.preventDefault()},o=l=>{for(let c of l.changedTouches){if(n.joy&&c.identifier===n.joy.id){let u=(c.clientX-n.joy.x)/58,f=(c.clientY-n.joy.y)/58,d=Math.hypot(u,f);d>1&&(u/=d,f/=d),n.jx=u,n.jy=-f,this.onJoy&&this.onJoy(n.joy,u,f,!0)}else n.drag&&c.identifier===n.drag.id?(n.drag2||(this.dragX+=(c.clientX-n.drag.x)*1.4,this.dragY+=(c.clientY-n.drag.y)*1.4),n.drag.x=c.clientX,n.drag.y=c.clientY):n.drag2&&c.identifier===n.drag2.id&&(n.drag2.x=c.clientX,n.drag2.y=c.clientY);if(n.drag&&n.drag2){let h=Math.hypot(n.drag.x-n.drag2.x,n.drag.y-n.drag2.y);this.pinch+=(n.pinchD-h)*.02,n.pinchD=h}}l.preventDefault()},a=l=>{for(let c of l.changedTouches)n.joy&&c.identifier===n.joy.id&&(n.joy=null,n.jx=n.jy=0,this.onJoy&&this.onJoy(null,0,0,!1)),n.drag&&c.identifier===n.drag.id?(n.drag=n.drag2||null,n.drag2=null):n.drag2&&c.identifier===n.drag2.id&&(n.drag2=null)};t.addEventListener("touchstart",r,{passive:!1}),t.addEventListener("touchmove",o,{passive:!1}),t.addEventListener("touchend",a),t.addEventListener("touchcancel",a),this.joyEnabled=!0}bindButton(t,e){let i=this.touch,n=o=>{o.preventDefault(),this.isTouch||(this.isTouch=!0,this.onTouchMode&&this.onTouchMode(!0)),i[e]=!0,(e==="fly"||e==="roll")&&(i[e+"Edge"]=!0),t.classList.add("on")},r=o=>{o.preventDefault(),i[e]=!1,t.classList.remove("on")};t.addEventListener("touchstart",n,{passive:!1}),t.addEventListener("touchend",r,{passive:!1}),t.addEventListener("touchcancel",r,{passive:!1}),t.addEventListener("mousedown",n),t.addEventListener("mouseup",r),t.addEventListener("mouseleave",o=>{i[e]&&r(o)})}held(t){let e=this.keys[t];if(!e)return!1;for(let i of e)if(i&&this.down.has(i))return!0;return!1}hit(t){let e=this.keys[t];if(!e)return!1;for(let i of e)if(i&&this.pressed.has(i))return!0;return!1}poll(t){let e=this.state,i=this.touch,n=(this.held("right")?1:0)-(this.held("left")?1:0),r=(this.held("forward")?1:0)-(this.held("back")?1:0),o=this.held("boost"),a=this.held("shift"),l=(this.held("rollR")?1:0)-(this.held("rollL")?1:0),c=this.hit("fly"),h=this.hit("boost"),u={pause:this.hit("pause"),photo:this.hit("photo"),reset:this.hit("reset")};if(e.look=this.held("look"),i.joy){let d=(g,x)=>Math.abs(g)<x?0:(g-Math.sign(g)*x)/(1-x);n=It(n+d(i.jx,.12),-1,1),r=It(r+d(i.jy,.2)*1.25,-1,1)}i.boost&&(o=!0,i.boostWas||(h=!0)),i.boostWas=i.boost,i.shift&&(a=!0),i.flyEdge&&(c=!0,i.flyEdge=!1),i.rollEdge&&(l=n<-.1?-1:1,i.rollEdge=!1);let f=navigator.getGamepads?navigator.getGamepads():[];for(let d of f){if(!d||!d.connected||d.mapping!=="standard")continue;let g=y=>d.buttons[y]&&d.buttons[y].pressed,x=y=>d.buttons[y]?d.buttons[y].value:0,p=this.padPrev,m=Math.abs(d.axes[0])>.15?d.axes[0]:0;n=It(n+m,-1,1),r=It(r+x(7)-x(6),-1,1),g(0)&&(o=!0,p[0]||(h=!0)),(g(1)||g(2))&&(a=!0),g(3)&&!p[3]&&(c=!0),l=It(l+(g(5)?1:0)-(g(4)?1:0),-1,1),g(9)&&!p[9]&&(u.pause=!0),g(8)&&!p[8]&&(u.reset=!0),Math.abs(d.axes[2])>.2&&(this.dragX+=d.axes[2]*14),Math.abs(d.axes[3])>.2&&(this.dragY+=d.axes[3]*10),this.padPrev=d.buttons.map(y=>y.pressed);break}return e.steer=n,e.throttle=r,e.boost=o,e.shift=a,e.roll=l,e.fly=c,e.boostPressed=h,this.pressed.clear(),u}takeDrag(){let t={x:this.dragX,y:this.dragY,zoom:this.zoom+this.pinch};return this.dragX=this.dragY=this.zoom=this.pinch=0,t}};var Ru="flying-roadster-save-v1",Fs=()=>({points:0,paint:"white",unlocked:["white"],stats:{bestCombo:0,topSpeed:0,longestAir:0,rings:0,launches:0,pads:[]},hints:{},settings:{master:.8,music:.55,sfx:.9,quality:"auto",cinematic:!0,units:"kmh",time:"sunset",sens:1,shake:!0},keys:JSON.parse(JSON.stringify(cr))}),kt={data:Fs(),timer:null,load(){let s=Fs();try{let t=Mi.getItem(Ru);if(t){let e=JSON.parse(t);Object.assign(s,e),s.stats=Object.assign(Fs().stats,e.stats),s.settings=Object.assign(Fs().settings,e.settings),s.keys=Object.assign(Fs().keys,e.keys),s.hints=e.hints||{},(!Array.isArray(s.unlocked)||!s.unlocked.includes("white"))&&(s.unlocked=["white"])}}catch{}return this.data=s,s},flush(){clearTimeout(this.timer),this.timer=null;try{Mi.setItem(Ru,JSON.stringify(this.data))}catch{}},touch(){this.timer||(this.timer=setTimeout(()=>this.flush(),1500))},reset(){let s={settings:this.data.settings,keys:this.data.keys};this.data=Object.assign(Fs(),s),this.flush()}};var Io={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Kg=new Es(-1,1,1,-1,0,1),Cc=class extends Xt{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}},Qg=new Cc,Tn=class{constructor(t){this._mesh=new Pt(Qg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Kg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Lo=class extends mi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=En.clone(t.uniforms),this.material=new pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Tn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var hr=class extends mi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Do=class extends mi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Uo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new gt);this._width=i.width,this._height=i.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lo(Io),this.copyPass.material.blending=Hi,this.clock=new wo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}hr!==void 0&&(o instanceof hr?i=!0:o instanceof Do&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var No=class extends mi{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Cu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zs=class s extends mi{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new gt(t.x,t.y):new gt(256,256),this.clearColor=new ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(r,o,{type:fi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new ke(r,o,{type:fi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new ke(r,o,{type:fi});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Cu;this.highPassUniforms=En.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new gt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Io;this.copyUniforms=En.clone(h.uniforms),this.blendMaterial=new pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$e,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ft,this.oldClearAlpha=1,this.basic=new Ae,this.fsQuad=new Tn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new gt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new gt(.5,.5)},direction:{value:new gt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};zs.BlurDirectionX=new gt(1,0);zs.BlurDirectionY=new gt(0,1);var Pu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Fo=class extends mi{constructor(){super();let t=Pu;this.uniforms=En.clone(t.uniforms),this.material=new yo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Tn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===or?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jg={low:{ratio:1,bloom:!1,shadows:0,msaa:0,treeShadows:!1},medium:{ratio:1.5,bloom:!0,shadows:1024,msaa:0,treeShadows:!1},high:{ratio:2,bloom:!0,shadows:2048,msaa:4,treeShadows:!0}},zo=class{constructor(t){this.canvas=t;let e=this.renderer=new lo({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1});e.toneMapping=or,e.outputColorSpace=Ce,e.shadowMap.enabled=!0,e.shadowMap.type=uc,this.mobile=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),this.setting="auto",this.tierName=this.mobile?"medium":"high",this.scale=1,this.composer=null,this.frameAcc=0,this.frameN=0,this.slowStreak=0,this.fastStreak=0,this.bloomStrength=.5,this.w=1,this.h=1}get tier(){return jg[this.tierName]}init(t,e,i){this.scene=t,this.camera=e,this.world=i,this.apply()}setQuality(t){this.setting=t,this.tierName=t==="auto"?this.mobile?"medium":"high":t,this.scale=1,this.slowStreak=this.fastStreak=0,this.scene&&this.apply()}apply(){let t=this.tier,e=this.renderer,i=this.world.sky.sun;e.shadowMap.enabled=t.shadows>0,i.castShadow=t.shadows>0,t.shadows&&i.shadow.mapSize.x!==t.shadows&&(i.shadow.mapSize.set(t.shadows,t.shadows),i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null));for(let n of this.world.props.group.userData.trees||[])n.castShadow=t.treeShadows;if(this.scene.traverse(n=>{if(n.material){let r=Array.isArray(n.material)?n.material:[n.material];for(let o of r)o.needsUpdate=!0}}),this.composer&&(this.composer.dispose(),this.composer=null),t.bloom){let n=new ke(4,4,{type:fi,samples:t.msaa}),r=this.composer=new Uo(e,n);r.addPass(new No(this.scene,this.camera)),this.bloom=new zs(new gt(256,256),this.bloomStrength,.6,1);let o=this.bloom.materialHighPassFilter;o.fragmentShader=o.fragmentShader.replace("gl_FragColor = mix( outputColor, texel, alpha );","vec4 safe = mix( outputColor, texel, alpha ); if ( any( isnan( safe ) ) || any( isinf( safe ) ) ) safe = vec4( 0.0 ); gl_FragColor = min( safe, vec4( 4.5 ) );"),o.needsUpdate=!0,r.addPass(this.bloom),r.addPass(new Fo)}this.resize(!0)}resize(t){let e=this.canvas.clientWidth||innerWidth,i=this.canvas.clientHeight||innerHeight,n=Math.min(devicePixelRatio||1,this.tier.ratio)*this.scale;!t&&e===this.w&&i===this.h&&n===this.ratio||(this.w=e,this.h=i,this.ratio=n,this.renderer.setPixelRatio(n),this.renderer.setSize(e,i,!1),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,i)),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())}adapt(t){if(this.setting!=="auto"||t>.25||(this.frameAcc+=t,this.frameN++,this.frameAcc<1.5))return;let e=this.frameAcc/this.frameN;this.frameAcc=0,this.frameN=0,e>1/48?(this.slowStreak++,this.fastStreak=0):e<1/57?(this.fastStreak++,this.slowStreak=0):this.slowStreak=this.fastStreak=0,this.slowStreak>=2?(this.slowStreak=0,this.scale>.72?(this.scale=Math.max(.7,this.scale-.15),this.resize(!0)):this.tierName==="high"?(this.tierName="medium",this.scale=1,this.apply()):this.tierName==="medium"?(this.tierName="low",this.scale=1,this.apply()):this.scale>.55&&(this.scale=.55,this.resize(!0))):this.fastStreak>=6&&this.scale<1&&(this.fastStreak=0,this.scale=Math.min(1,this.scale+.15),this.resize(!0))}render(){this.resize(!1),this.composer?(this.bloom.strength=this.world.sky.v.bloom,this.bloom.threshold=this.world.sky.v.bloomT,this.composer.render()):this.renderer.render(this.scene,this.camera)}snapshot(){this.render();let t=document.createElement("canvas");return t.width=this.canvas.width,t.height=this.canvas.height,t.getContext("2d").drawImage(this.canvas,0,0),t}};var te={x:-200,z:-820,r:780,h:300,summitY:262,summitR:46},Se={x:-40,z:840,rx:330,rz:640},ei={x:-900,z:1430,r:190,h:20},bi={x:1010,z:-990,r:430,h:62},le={x0:-1640,x1:-510,z0:240,z1:520,y:14},ne={x0:-1604,x1:-598,z:380,halfW:20},Iu={x:-569,z:380,yaw:Math.PI/2,len:54,halfW:9,h:10.5,curve:1.85},Tt={x0:511,z0:101,n:9,pitch:82,street:18,y:7};Tt.x1=Tt.x0+Tt.n*Tt.pitch;Tt.z1=Tt.z0+Tt.n*Tt.pitch;var Ve={x:-1150,z:380,yaw:Math.PI/2},Oo=Math.atan2(.5,.82);var Pc=(s,t,e,i,n,r)=>Math.hypot(Math.max(e-s,0,s-n),Math.max(i-t,0,t-r));function Lu(s,t,e,i,n,r,o,a,l){let c=Pc(t,e,i,n,r,o);return c>=l?s:zt(a,s,Qt(0,l,c))}function ko(s,t){let e=Math.hypot(s,t),i=(qn(s*.0011+3.1,t*.0011-7.7,3,11)-.5)*520,n=Qt(1800,1180,e+i),r=-30+n*44;r+=n*n*(qn(s*.0021+20,t*.0021+9,4,5)-.42)*85,r+=n*(qn(s*.012,t*.012,2,31)-.5)*5;let o=Math.hypot(s-te.x,t-te.z)/te.r;if(o<1){let u=1-o,f=u*u*(3-2*u),d=1-Math.abs(qn(s*.0042+50,t*.0042-20,3,77)*2-1);r+=f*te.h*(.8+.2*d)}let a=Math.hypot(s-bi.x,t-bi.z)/bi.r;if(a<1){let u=1-a;r+=u*u*(3-2*u)*bi.h*(.4+.6*n)}let l=Math.hypot((s-Se.x)/Se.rx,(t-Se.z)/Se.rz);r=zt(r,-16,Qt(1.22,.8,l));let c=Math.hypot(s-ei.x,t-ei.z);c<ei.r&&(r=Math.max(r,-6+(ei.h+6)*Qt(ei.r,ei.r*.3,c))),r>0&&r<7&&(r=7*Math.pow(r/7,1.9)),r=Lu(r,s,t,le.x0,le.z0,le.x1,le.z1,le.y,80),r=Lu(r,s,t,Tt.x0-24,Tt.z0-24,Tt.x1+24,Tt.z1+24,Tt.y,90);let h=Math.hypot(s-te.x,t-te.z);return h<te.summitR+70&&(r=zt(te.summitY,r,Qt(te.summitR,te.summitR+70,h))),r}var Gi=s=>new ft(s),gi={seabed:Gi("#1d5e6b"),wetSand:Gi("#c9b083"),sand:Gi("#e6cf9f"),grassA:Gi("#86a75a"),grassB:Gi("#5f9150"),dry:Gi("#b3ab66"),rock:Gi("#8d8176"),rockDark:Gi("#6f6660"),peak:Gi("#c4b8aa"),pave:Gi("#878b92")},Bo=class{constructor(t){let e=this.n=320;this.size=4e3,this.half=4e3/2,this.cell=4e3/e;let i=e+1,n=this.h=new Float32Array(i*i);for(let r=0;r<i;r++)for(let o=0;o<i;o++)n[r*i+o]=ko(-this.half+o*this.cell,-this.half+r*this.cell);this.flatten(t)}flatten(t){let e=this.n+1,i=this.h,n=new Float32Array(i.length).fill(9),r=new Float32Array(i.length);for(let o of t){let a=o.halfW+9,l=o.halfW+44;for(let c of o.pts){if(c.bridge)continue;let h=Math.max(0,Math.floor((c.x-l+this.half)/this.cell)),u=Math.min(e-1,Math.ceil((c.x+l+this.half)/this.cell)),f=Math.max(0,Math.floor((c.z-l+this.half)/this.cell)),d=Math.min(e-1,Math.ceil((c.z+l+this.half)/this.cell));for(let g=f;g<=d;g++)for(let x=h;x<=u;x++){let p=(Math.hypot(-this.half+x*this.cell-c.x,-this.half+g*this.cell-c.z)-a)/(l-a),m=g*e+x;p<n[m]&&(n[m]=p,r[m]=c.y)}}}for(let o=0;o<i.length;o++)n[o]<1&&(i[o]=zt(r[o],i[o],Qt(0,1,n[o])))}heightAt(t,e){let i=this.n,n=i+1,r=(t+this.half)/this.cell,o=(e+this.half)/this.cell;if(r<0||o<0||r>=i||o>=i)return-30;let a=r|0,l=o|0,c=r-a,h=o-l,u=l*n+a,f=this.h,d=f[u],g=f[u+1],x=f[u+n],p=f[u+n+1];return c+h<=1?d+(g-d)*c+(x-d)*h:p+(x-p)*(1-c)+(g-p)*(1-h)}normalAt(t,e,i){return i.set(this.heightAt(t-2.5,e)-this.heightAt(t+2.5,e),2*2.5,this.heightAt(t,e-2.5)-this.heightAt(t,e+2.5)),i.normalize()}buildMesh(){let t=this.n,e=t+1,i=this.h,n=new Float32Array(e*e*3),r=new Float32Array(e*e*3),o=new ft,a=new ft;for(let f=0;f<e;f++)for(let d=0;d<e;d++){let g=f*e+d,x=-this.half+d*this.cell,p=-this.half+f*this.cell,m=i[g];n[g*3]=x,n[g*3+1]=m,n[g*3+2]=p;let y=i[f*e+Math.max(0,d-1)],M=i[f*e+Math.min(t,d+1)],v=i[Math.max(0,f-1)*e+d],C=i[Math.min(t,f+1)*e+d],w=Math.hypot(M-y,C-v)/(2*this.cell),E=Co(x*.006,p*.006,3),A=Co(x*.031,p*.031,9);m<.4?o.copy(gi.wetSand).lerp(gi.seabed,Qt(.4,-7,m)):m<3.4+E*1.5?o.copy(gi.sand).lerp(gi.wetSand,Qt(1.4,.4,m)):(o.copy(gi.grassA).lerp(gi.grassB,Qt(.3,.7,E)).lerp(gi.dry,Qt(.55,.95,A)*.6),o.lerp(gi.sand,Qt(6.5,3.4,m)*.7),a.copy(gi.rock).lerp(gi.rockDark,A),o.lerp(a,Qt(.34,.58,w+A*.08)),o.lerp(gi.peak,Qt(170,255,m+E*40)*.85));let b=Pc(x,p,Tt.x0-10,Tt.z0-10,Tt.x1+10,Tt.z1+10);b<30&&o.lerp(gi.pave,Qt(30,0,b));let _=Pc(x,p,le.x0+10,le.z0+10,le.x1-10,le.z1-10);_<40&&m>6&&o.lerp(gi.dry,Qt(40,0,_)*.75),o.multiplyScalar(.94+A*.12),r[g*3]=o.r,r[g*3+1]=o.g,r[g*3+2]=o.b}let l=new Uint32Array(t*t*6),c=0;for(let f=0;f<t;f++)for(let d=0;d<t;d++){let g=f*e+d,x=g+1,p=g+e,m=p+1;l[c++]=g,l[c++]=p,l[c++]=x,l[c++]=x,l[c++]=p,l[c++]=m}let h=new Xt;h.setAttribute("position",new be(n,3)),h.setAttribute("color",new be(r,3)),h.setIndex(new be(l,1)),h.computeVertexNormals(),this.colors=r;let u=new Pt(h,new ve({vertexColors:!0,flatShading:!0}));return u.receiveShadow=!0,u.matrixAutoUpdate=!1,u}buildHeightTexture(){let t=this.n+1,e=new Uint8Array(t*t);for(let n=0;n<e.length;n++)e[n]=It(Math.round((this.h[n]+16)/32*255),0,255);let i=new nr(e,t,t,ar,Li);return i.magFilter=i.minFilter=_i,i.needsUpdate=!0,i}};var li=.15;function tx(){let s=[[-100,-60],[-112,-150]],t=1.42,e=1.62,i=24;for(let n=0;n<=i;n++){let r=n/i,o=t+r*e*Math.PI*2,a=zt(640,te.summitR-10,Math.pow(r,.92));s.push([te.x+Math.cos(o)*a,te.z+Math.sin(o)*a])}return s}var ex=[{id:"coast",closed:!0,halfW:9,lanes:4,deck:15,pts:[[-440,150],[-405,430],[-470,760],[-545,1040],[-380,1172],[-40,1178],[300,1172],[560,1050],[900,945],[1230,935],[1345,700],[1345,300],[1290,-150],[1140,-600],[820,-800],[500,-560],[250,-250],[-100,-60],[-330,40]]},{id:"summit",halfW:6.5,lanes:2,deck:8,join:"coast",endY:te.summitY,pts:tx()},{id:"cape",halfW:6.5,lanes:2,deck:7,join:"coast",pts:[[-545,1040],[-660,1180],[-790,1320],[ei.x+26,ei.z-34]]},{id:"airlink",halfW:6.5,lanes:2,deck:8,join:"coast",pts:[[-440,150],[-505,196],[-572,246],[-606,300]]}];function ix(s,t,e){let i=new Ps(s.pts.map(d=>new L(d[0],0,d[1])),!!s.closed,"centripetal"),n=Math.ceil(i.getLength()/5),r=i.getSpacedPoints(n);s.closed&&r.pop();let o=r.length,a=r.map(d=>({x:d.x,z:d.z,y:0,base:t(d.x,d.z),bridge:!1,nx:0,nz:0,s:0})),l=a.map(d=>d.base<-.6?Math.max(s.deck,d.base):Math.max(d.base,3.2)),c=null,h=s.endY??null;if(s.join){let d=e.find(x=>x.id===s.join),g=1e9;for(let x of d.pts){let p=Math.hypot(x.x-a[0].x,x.z-a[0].z);p<g&&(g=p,c=x.y)}}let u=8;for(let d=0;d<9;d++){let g=new Array(o);for(let x=0;x<o;x++){let p=0;for(let m=-u;m<=u;m++){let y=s.closed?(x+m+o)%o:Math.min(o-1,Math.max(0,x+m));p+=l[y]}g[x]=p/(2*u+1)}if(l=g,c!==null)for(let x=0;x<10;x++)l[x]=zt(c,l[x],Qt(0,10,x));if(h!==null)for(let x=0;x<10;x++)l[o-1-x]=zt(h,l[o-1-x],Qt(0,10,x))}let f=0;for(let d=0;d<o;d++){let g=a[d],x=a[s.closed?(d-1+o)%o:Math.max(0,d-1)],p=a[s.closed?(d+1)%o:Math.min(o-1,d+1)],m=p.x-x.x,y=p.z-x.z,M=Math.hypot(m,y)||1;g.tx=m/M,g.tz=y/M,g.nx=y/M,g.nz=-m/M,g.y=l[d],g.bridge=g.y-g.base>4.2&&g.base<2.5,d>0&&(f+=Math.hypot(g.x-a[d-1].x,g.z-a[d-1].z)),g.s=f}return{id:s.id,halfW:s.halfW,lanes:s.lanes,closed:!!s.closed,pts:a}}function nx(s){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillStyle="#3b3e46",e.fillRect(0,0,256,256);for(let n=0;n<2600;n++){let r=50+Math.random()*30;e.fillStyle=`rgba(${r},${r+2},${r+8},0.35)`,e.fillRect(Math.random()*256,Math.random()*256,2,2)}e.fillStyle="#e9e6dc",e.fillRect(12,0,5,256),e.fillRect(239,0,5,256),s===4?(e.fillStyle="#e8b64a",e.fillRect(123,0,3.5,256),e.fillRect(130,0,3.5,256),e.fillStyle="#e9e6dc",e.fillRect(68,20,4,96),e.fillRect(184,20,4,96),e.fillRect(68,148,4,96),e.fillRect(184,148,4,96)):(e.fillStyle="#e8b64a",e.fillRect(125,16,6,100),e.fillRect(125,144,6,100));let i=new an(t);return i.wrapS=tn,i.wrapT=sn,i.colorSpace=Ce,i.anisotropy=8,i}var Ho=class{constructor(t,e){this.roads=[];let i=ex.slice();e&&e-44>1010&&i.push({id:"pier",halfW:6.5,lanes:2,deck:7,join:"coast",pts:[[900,945],[893,990],[884,(990+e-44)/2],[880,e-44]]});for(let n of i)this.roads.push(ix(n,t,this.roads));this.cell=32,this.hash=new Map;for(let n of this.roads){let r=n.pts,o=r.length,a=n.closed?o:o-1;for(let l=0;l<a;l++){let c=r[l],h=r[(l+1)%o];if(c.bridge&&h.bridge)continue;let u=n.halfW+2,f=Math.floor((Math.min(c.x,h.x)-u)/this.cell),d=Math.floor((Math.max(c.x,h.x)+u)/this.cell),g=Math.floor((Math.min(c.z,h.z)-u)/this.cell),x=Math.floor((Math.max(c.z,h.z)+u)/this.cell),p={ax:c.x,az:c.z,bx:h.x,bz:h.z,w:n.halfW};for(let m=g;m<=x;m++)for(let y=f;y<=d;y++){let M=y*4096+m,v=this.hash.get(M);v||this.hash.set(M,v=[]),v.push(p)}}}}surfaceAt(t,e){let i=this.hash.get(Math.floor(t/this.cell)*4096+Math.floor(e/this.cell));if(!i)return 0;let n=0;for(let r=0;r<i.length;r++){let o=i[r],a=o.bx-o.ax,l=o.bz-o.az,c=((t-o.ax)*a+(e-o.az)*l)/(a*a+l*l);c=c<0?0:c>1?1:c;let h=Math.hypot(t-o.ax-a*c,e-o.az-l*c);if(h<o.w+.9){let u=h<o.w-.3?1:(o.w+.9-h)/1.2;u>n&&(n=u)}}return n}buildMeshes(t){let e=new fe,i={2:[],4:[]};for(let n of this.roads)i[n.lanes].push(n);for(let n of[4,2]){let r=[],o=[],a=[];for(let u of i[n]){let f=u.pts,d=f.length,g=u.closed?d+1:d,x=r.length/3,p=f[d-1].s+5;for(let m=0;m<g;m++){let y=f[m%d],M=m===d?p:y.s;for(let v=0;v<5;v++){let C=(v-2)/2,w=y.x+y.nx*C*u.halfW,E=y.z+y.nz*C*u.halfW,A=y.bridge?y.y+li:Math.max(t.heightAt(w,E),y.y-.4)+li;r.push(w,A,E),o.push(v/4,M/24)}if(m>0){let v=x+(m-1)*5,C=x+m*5;for(let w=0;w<4;w++)a.push(v+w,v+w+1,C+w,C+w,v+w+1,C+w+1)}}}let l=new Xt;l.setAttribute("position",new Et(r,3)),l.setAttribute("uv",new Et(o,2)),l.setIndex(a),l.computeVertexNormals();let c=new ve({map:nx(n),polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}),h=new Pt(l,c);h.receiveShadow=!0,h.matrixAutoUpdate=!1,e.add(h)}return e}buildBridges(t,e){let i=[],a=[],l=null;for(let u of this.roads){let f=u.pts,d=f.length,g=[],x=()=>{if(g.length>1){let p=g[g.length-1].s-g[0].s,m=g[g.length>>1],y=Math.hypot(m.x-Se.x,m.z-(Se.z+Se.rz*.52));u.id==="coast"&&p>200&&(!l||y<l.dist)&&(l={run:g.slice(),len:p,road:u,dist:y});let M=1e9;for(let v=0;v<g.length-1;v++){let C=g[v],w=g[v+1],E=(C.x+w.x)/2,A=(C.z+w.z)/2,b=Math.hypot(w.x-C.x,w.z-C.z),_=Math.atan2(w.x-C.x,w.z-C.z),P=C.y+li,N=w.y+li,B=u.halfW+.9;t.add({x:E,z:A,hx:B,hz:b/2+.35,yaw:_,y0:Math.min(P,N)-1.5,y1:P,y2:N,kind:"deck",quiet:!0});let W=-Math.atan2(N-P,b);i.push({x:E,y:(P+N)/2-1,z:A,sx:B*2,sy:1.5,sz:b+.5,yaw:_,pitch:W,color:12170410});for(let X of[-1,1]){let it=Math.cos(_)*X*(B-.3),k=-Math.sin(_)*X*(B-.3);t.add({x:E+it,z:A+k,hx:.32,hz:b/2+.35,yaw:_,y0:Math.min(P,N)-1.5,y1:P+.95,y2:N+.95,kind:"rail",quiet:!0}),i.push({x:E+it,y:(P+N)/2+.47,z:A+k,sx:.5,sy:.95,sz:b+.5,yaw:_,pitch:W,color:14209734})}M+=b;let Q=e.heightAt(E,A);if(M>44&&(P+N)/2-Q>3){M=0;let X=(P+N)/2-1.5,it=Q-2;i.push({x:E,y:(X+it)/2,z:A,sx:B*1.3,sy:X-it,sz:2.6,yaw:_,pitch:0,color:5593183}),t.add({x:E,z:A,hx:B*.65,hz:1.3,yaw:_,y0:it,y1:X,kind:"pier"})}}}g=[]};for(let p=0;p<d;p++)f[p].bridge?g.push(f[p]):x();x()}let c=[];if(this.bayBridge=null,l){let u=l.run,f=l.road.halfW+2.6,d=M=>u[Math.round(M*(u.length-1))],g=78,x=[d(.27),d(.73)];for(let M of x){let v=Math.atan2(M.tx,M.tz),C=e.heightAt(M.x,M.z)-2;for(let w of[-1,1]){let E=M.x+M.nx*w*f,A=M.z+M.nz*w*f;i.push({x:E,y:(g+C)/2,z:A,sx:3.2,sy:g-C,sz:4.4,yaw:v,pitch:0,color:13191226}),t.add({x:E,z:A,hx:1.6,hz:2.2,yaw:v,y0:C,y1:g,kind:"tower"}),a.push([E,g+1.2,A])}for(let w of[g-3,M.y+30,M.y-4])i.push({x:M.x,y:w,z:M.z,sx:f*2,sy:w<M.y?3:2.4,sz:3.2,yaw:v,pitch:0,color:13191226}),w>M.y&&t.add({x:M.x,z:M.z,hx:f,hz:1.6,yaw:v,y0:w-1.2,y1:w+1.2,kind:"tower"})}let p=Math.round(.27*(u.length-1)),m=Math.round(.73*(u.length-1));for(let M of[-1,1]){let v=[];for(let C=0;C<u.length;C++){let w=u[C],E;if(C<=p)E=zt(w.y+2,g-2,Math.pow(C/p,1.7));else if(C>=m)E=zt(w.y+2,g-2,Math.pow((u.length-1-C)/(u.length-1-m),1.7));else{let A=(C-p)/(m-p)*2-1;E=zt(w.y+7,g-2,A*A)}v.push(new L(w.x+w.nx*M*f,E,w.z+w.nz*M*f))}c.push(v)}let y=d(.5);this.bayBridge={x:y.x,z:y.z,y:y.y,yaw:Math.atan2(y.tx,y.tz),halfW:l.road.halfW,len:l.len}}let h=new fe;if(i.length){let u=new Oe(1,1,1).toNonIndexed(),f=[],d=[],g=[],x=new jt,p=new Te,m=new Pe,y=new L,M=new L,v=new ft,C=u.attributes.position,w=u.attributes.normal;for(let b of i){m.set(b.pitch,b.yaw,0,"YXZ"),p.setFromEuler(m),x.compose(y.set(b.x,b.y,b.z),p,M.set(b.sx,b.sy,b.sz)),v.set(b.color);for(let _=0;_<C.count;_++)y.fromBufferAttribute(C,_).applyMatrix4(x),M.fromBufferAttribute(w,_).applyQuaternion(p),f.push(y.x,y.y,y.z),d.push(M.x,M.y,M.z),g.push(v.r,v.g,v.b)}let E=new Xt;E.setAttribute("position",new Et(f,3)),E.setAttribute("normal",new Et(d,3)),E.setAttribute("color",new Et(g,3));let A=new Pt(E,new ve({vertexColors:!0}));A.castShadow=A.receiveShadow=!0,A.matrixAutoUpdate=!1,h.add(A)}if(c.length){let u=new ve({color:13191226}),f=[];for(let m of c){let y=new Pt(new xo(new Ps(m),90,.38,5,!1),u);y.matrixAutoUpdate=!1,h.add(y)}let d=l.run,g=l.road.halfW+2.6;for(let m=3;m<d.length-3;m+=3)for(let y=0;y<2;y++){let M=c[y][m],v=y?1:-1;f.push(M.x,M.y,M.z,d[m].x+d[m].nx*v*(g-1.6),d[m].y+1,d[m].z+d[m].nz*v*(g-1.6))}let x=new Xt;x.setAttribute("position",new Et(f,3));let p=new Rs(x,new kn({color:14198684,transparent:!0,opacity:.75}));p.matrixAutoUpdate=!1,h.add(p)}return this.beaconPositions=a,h}};var $n=class{constructor(){this.boxes=[],this.cell=64,this.grid=new Map}add(t){t.yaw=t.yaw||0,t.c=Math.cos(t.yaw),t.s=Math.sin(t.yaw),t.y2===void 0&&(t.y2=t.y1),t.curve=t.curve||1,t.top=Math.max(t.y1,t.y2),t.id=this.boxes.length,this.boxes.push(t);let e=Math.abs(t.c)*t.hx+Math.abs(t.s)*t.hz,i=Math.abs(t.s)*t.hx+Math.abs(t.c)*t.hz,n=6,r=Math.floor((t.x-e-n)/this.cell),o=Math.floor((t.x+e+n)/this.cell),a=Math.floor((t.z-i-n)/this.cell),l=Math.floor((t.z+i+n)/this.cell);for(let c=a;c<=l;c++)for(let h=r;h<=o;h++){let u=h*4096+c,f=this.grid.get(u);f||this.grid.set(u,f=[]),f.push(t)}return t}near(t,e){return this.grid.get(Math.floor(t/this.cell)*4096+Math.floor(e/this.cell))}static topAt(t,e){if(t.y1===t.y2)return t.y1;let i=(e+t.hz)/(2*t.hz);return i=i<0?0:i>1?1:i,t.y1+(t.y2-t.y1)*(t.curve===1?i:Math.pow(i,t.curve))}};var Go={sunset:{label:"Golden hour",elev:.2,az:Oo,sun:"#ffae6b",sunI:2.9,hemiSky:"#b4c0ee",hemiGround:"#c79a78",hemiI:1.7,zenith:"#25427f",mid:"#e88f78",horizon:"#ffcf96",glow:"#ff9a4d",disc:9,fog:"#eeb48e",fogD:205e-6,deep:"#144a63",shallow:"#3fa7a3",foam:"#ffe9d6",cloud:"#ffd9c2",cloudDark:"#c97f86",exposure:1,windows:.85,stars:0,bloom:.5,bloomT:2.3,lamps:1},day:{label:"Clear day",elev:.86,az:Oo-.5,sun:"#fff3de",sunI:2.7,hemiSky:"#bcd4ff",hemiGround:"#a39d84",hemiI:1.2,zenith:"#2a66c4",mid:"#78b1ea",horizon:"#d3e9f7",glow:"#fff1cf",disc:9,fog:"#cfe3f3",fogD:15e-5,deep:"#0f5c8a",shallow:"#3fc2bb",foam:"#ffffff",cloud:"#ffffff",cloudDark:"#b9c8de",exposure:.95,windows:.12,stars:0,bloom:.32,bloomT:2.8,lamps:0},night:{label:"Night flight",elev:.62,az:Oo+2.1,sun:"#9fb6ff",sunI:.8,hemiSky:"#4a5c9c",hemiGround:"#232838",hemiI:.95,zenith:"#040817",mid:"#0c1736",horizon:"#263763",glow:"#5a6fb5",disc:3.5,fog:"#141d3a",fogD:19e-5,deep:"#050f24",shallow:"#123a55",foam:"#b7c8ee",cloud:"#3a4672",cloudDark:"#1a2140",exposure:1.15,windows:2.3,stars:1,bloom:.75,bloomT:1,lamps:1.6}},Os=["sunset","day","night"],Ic=["sun","hemiSky","hemiGround","zenith","mid","horizon","glow","fog","deep","shallow","foam","cloud","cloudDark"],Du=["elev","az","sunI","hemiI","disc","fogD","exposure","windows","stars","bloom","bloomT","lamps"],sx=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,rx=`
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
}`,Vo=class{constructor(t,e){this.scene=t,this.renderer=e,this.v={sunDir:new L};for(let o of Ic)this.v[o]=new ft;this.from=null,this.to=null,this.t=1,this.name="sunset",this.uniforms={uZenith:{value:this.v.zenith},uMid:{value:this.v.mid},uHorizon:{value:this.v.horizon},uGlow:{value:this.v.glow},uSunDir:{value:this.v.sunDir},uSunColor:{value:this.v.sun},uFog:{value:this.v.fog},uDisc:{value:8},uStars:{value:0}};let i=new pe({vertexShader:sx,fragmentShader:rx,uniforms:this.uniforms,side:Ze,depthWrite:!1,depthTest:!0,fog:!1});this.dome=new Pt(new Vn(1,32,16),i),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,t.add(this.dome),this.sun=new So(16777215,3),this.sun.castShadow=!0;let n=this.sun.shadow;n.mapSize.set(2048,2048),n.camera.near=1,n.camera.far=520,n.bias=-5e-4,n.normalBias=.06,this.setShadowRange(70),t.add(this.sun,this.sun.target),this.hemi=new bo(16777215,8947848,1),t.add(this.hemi),t.fog=new co(16777215,2e-4),this.clouds=this.buildClouds(),t.add(this.clouds),this.pmrem=new Ts(e),this.envScene=new As;let r=new Pt(this.dome.geometry,i);r.scale.setScalar(900),this.envScene.add(r),this.envRT=null,this.setTime("sunset",!0)}setShadowRange(t){let e=this.sun.shadow.camera;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.updateProjectionMatrix(),this.shadowRange=t}buildClouds(){let t=Yn(77),e=new Hn(1,1);this.cloudMat=new ve({color:16777215,emissive:0,flatShading:!0,fog:!1});let i=[];for(let l=0;l<46;l++){let c=t()*Math.PI*2,h=500+t()*3600,u=Math.cos(c)*h,f=Math.sin(c)*h,d=380+t()*380,g=40+t()*70,x=4+Math.floor(t()*4);for(let p=0;p<x;p++)i.push({x:u+(t()-.5)*g*3.4,y:d+(t()-.3)*g*.4,z:f+(t()-.5)*g*1.6,sx:g*(.7+t()*.8),sy:g*(.32+t()*.25),sz:g*(.6+t()*.6),r:t()*3})}let n=new bn(e,this.cloudMat,i.length),r=new jt,o=new Te,a=new Pe;return i.forEach((l,c)=>{o.setFromEuler(a.set(0,l.r,0)),r.compose(new L(l.x,l.y,l.z),o,new L(l.sx,l.sy,l.sz)),n.setMatrixAt(c,r)}),n.frustumCulled=!1,n}setTime(t,e=!1){let i=Go[t];if(i){this.name=t,this.to={},this.from={};for(let n of Ic)this.to[n]=new ft(i[n]),this.from[n]=this.v[n].clone();for(let n of Du)this.to[n]=i[n],this.from[n]=this.v[n]??i[n];this.t=e?1:0,this.apply(this.t),e&&this.refreshEnv()}}apply(t){let e=this.v,i=t*t*(3-2*t);for(let r of Ic)e[r].copy(this.from[r]).lerp(this.to[r],i);for(let r of Du)e[r]=zt(this.from[r],this.to[r],i);let n=Math.cos(e.elev);e.sunDir.set(n*Math.cos(e.az),Math.sin(e.elev),n*Math.sin(e.az)).normalize(),this.uniforms.uDisc.value=e.disc,this.uniforms.uStars.value=e.stars,this.sun.color.copy(e.sun),this.sun.intensity=e.sunI,this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround),this.hemi.intensity=e.hemiI,this.scene.fog.color.copy(e.fog),this.scene.fog.density=e.fogD,this.cloudMat.color.copy(e.cloud),this.cloudMat.emissive.copy(e.cloudDark).multiplyScalar(.55),this.renderer.toneMappingExposure=e.exposure}refreshEnv(){let t=this.envRT,e=this.uniforms.uDisc.value;this.uniforms.uDisc.value=Math.min(e,4),this.envRT=this.pmrem.fromScene(this.envScene,.02,1,2e3),this.uniforms.uDisc.value=e,this.scene.environment=this.envRT.texture,t&&t.dispose()}update(t,e,i){this.t<1&&(this.t=Math.min(1,this.t+t/1.6),this.apply(this.t),this.t>=1&&this.refreshEnv()),this.dome.position.copy(e.position),this.dome.scale.setScalar(e.far*.9),this.clouds.rotation.y+=t*.0012;let n=this.shadowRange,r=2*n/this.sun.shadow.mapSize.x,o=Math.round(i.x/r)*r,a=Math.round(i.y/r)*r,l=Math.round(i.z/r)*r;this.sun.target.position.set(o,a,l),this.sun.position.set(o,a,l).addScaledVector(this.v.sunDir,260)}};var ox=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,ax=`
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
}`;function Uu(s){let t=new pe({vertexShader:ox,fragmentShader:ax,uniforms:{uTime:{value:0},uSize:{value:4e3},uHeight:{value:s},uFogDensity:{value:2e-4},uSunDir:{value:new L(0,1,0)},uSunColor:{value:new ft},uDeep:{value:new ft},uShallow:{value:new ft},uFoam:{value:new ft},uHorizon:{value:new ft},uZenith:{value:new ft},uFogColor:{value:new ft}}}),e=new Pt(new Di(24e3,24e3,1,1).rotateX(-Math.PI/2),t);return e.frustumCulled=!1,e.matrixAutoUpdate=!1,e}var ii=class s{constructor(){this.pos=[],this.nor=[],this.col=[],this._m=new jt,this._q=new Te,this._e=new Pe,this._v=new L,this._s=new L,this._c=new ft,this._n3=new Wt}addGeometry(t,e,i){let n=t.index?t.toNonIndexed():t;n.attributes.normal||n.computeVertexNormals();let r=n.attributes.position,o=n.attributes.normal,a=this._v,l=this._c;this._n3.getNormalMatrix(e);let c=typeof i=="function"?i:null;c||l.set(i);for(let h=0;h<r.count;h++)a.fromBufferAttribute(r,h),c&&l.set(c(a)),a.applyMatrix4(e),this.pos.push(a.x,a.y,a.z),a.fromBufferAttribute(o,h).applyMatrix3(this._n3).normalize(),this.nor.push(a.x,a.y,a.z),this.col.push(l.r,l.g,l.b);return this}matrix(t,e,i,n=1,r=1,o=1,a=0,l=0,c=0){return this._e.set(l,a,c,"YXZ"),this._q.setFromEuler(this._e),this._m.compose(this._v.set(t,e,i),this._q,this._s.set(n,r,o)).clone()}box(t,e,i,n,r,o,a,l=0,c=0,h=0){return this.addGeometry(s.unitBox,this.matrix(t,e,i,n,r,o,l,c,h),a)}cyl(t,e,i,n,r,o,a,l=8,c=0,h=0,u=0){let f=new Be(n,r,o,l);return this.addGeometry(f,this.matrix(t,e,i,1,1,1,c,h,u),a)}quad(t,e,i,n,r){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=i[0]-t[0],h=i[1]-t[1],u=i[2]-t[2],f=a*u-l*h,d=l*c-o*u,g=o*h-a*c,x=Math.hypot(f,d,g)||1;f/=x,d/=x,g/=x;let p=this._c.set(r);for(let m of[t,e,i,t,i,n])this.pos.push(m[0],m[1],m[2]),this.nor.push(f,d,g),this.col.push(p.r,p.g,p.b);return this}build(t,e=!0){let i=new Xt;i.setAttribute("position",new Et(this.pos,3)),i.setAttribute("normal",new Et(this.nor,3)),i.setAttribute("color",new Et(this.col,3));let n=new Pt(i,t||new ve({vertexColors:!0}));return n.castShadow=n.receiveShadow=e,n.matrixAutoUpdate=!1,n}};ii.unitBox=new Oe(1,1,1).toNonIndexed();var lx=3.2,cx=3.4,zi=16;function hx(s,t){let e=Yn(t),i=512,n=i/zi,r=document.createElement("canvas"),o=document.createElement("canvas");r.width=r.height=o.width=o.height=i;let a=r.getContext("2d"),l=o.getContext("2d");if(l.fillStyle="#000",l.fillRect(0,0,i,i),s==="A"){a.fillStyle="#ffffff",a.fillRect(0,0,i,i);for(let h=0;h<zi;h++){a.fillStyle="rgba(0,0,0,0.07)",a.fillRect(0,h*n+n-2,i,2);for(let u=0;u<zi;u++){let f=u*n+7,d=h*n+6,g=n-14,x=n-13;if(a.fillStyle="#26313f",a.fillRect(f,d,g,x),a.fillStyle="#51657c",a.fillRect(f,d,g,5),a.fillStyle="rgba(255,255,255,0.5)",a.fillRect(f-1,d+x,g+2,2),e()<.34){let p=e();l.fillStyle=p<.6?"#ffc778":p<.88?"#ffe3b8":"#bcd6ff",l.globalAlpha=.55+e()*.45,l.fillRect(f,d,g,x),l.globalAlpha=1}}}}else{a.fillStyle="#8fb0c9",a.fillRect(0,0,i,i);for(let h=0;h<zi;h++)for(let u=0;u<zi;u++){let f=u*n,d=h*n,g=.72+e()*.28;a.fillStyle=`rgb(${Math.round(150*g)},${Math.round(186*g)},${Math.round(214*g)})`,a.fillRect(f+1,d+1,n-2,n-8),a.fillStyle="#dfe9f0",a.fillRect(f,d+n-7,n,5),a.fillStyle="#31404f",a.fillRect(f,d,2,n),e()<.24&&(l.fillStyle=e()<.8?"#e8a85c":"#cfe0ff",l.globalAlpha=.3+e()*.4,l.fillRect(f+2,d+1,n-3,n-8),l.globalAlpha=1)}}let c=h=>{let u=new an(h);return u.wrapS=u.wrapT=sn,u.colorSpace=Ce,u.anisotropy=4,u};return{map:c(r),emissiveMap:c(o)}}function ux(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),i=512/Tt.pitch,n=Tt.street/2*i,r=3.2*i;for(let a=0;a<2;a++){let l=a*512;e.save(),e.translate(l,0),e.beginPath(),e.rect(0,0,512,512),e.clip(),e.fillStyle="#3b3e46",e.fillRect(0,0,512,512);for(let h=0;h<3e3;h++){let u=52+Math.random()*26;e.fillStyle=`rgba(${u},${u+2},${u+8},0.3)`,e.fillRect(Math.random()*512,Math.random()*512,2,2)}if(e.fillStyle="#b3aea4",e.fillRect(n,n,512-2*n,512-2*n),e.fillStyle=a===0?"#96938c":"#6f9a57",e.fillRect(n+r,n+r,512-2*(n+r),512-2*(n+r)),a===0){e.strokeStyle="rgba(0,0,0,0.08)",e.lineWidth=1;for(let h=n+r;h<512-n-r;h+=4*i)e.beginPath(),e.moveTo(h,n+r),e.lineTo(h,512-n-r),e.stroke(),e.beginPath(),e.moveTo(n+r,h),e.lineTo(512-n-r,h),e.stroke()}else{e.strokeStyle="#d8c9a3",e.lineWidth=3*i,e.beginPath(),e.moveTo(n+r,n+r),e.lineTo(512-n-r,512-n-r),e.stroke(),e.beginPath(),e.moveTo(512-n-r,n+r),e.lineTo(n+r,512-n-r),e.stroke(),e.fillStyle="#d8c9a3",e.beginPath(),e.arc(512/2,512/2,11*i,0,7),e.fill(),e.fillStyle="#7fa965";for(let h=0;h<60;h++)e.globalAlpha=.5,e.beginPath(),e.arc(n+r+Math.random()*(512-2*n-2*r),n+r+Math.random()*(512-2*n-2*r),4+Math.random()*9,0,7),e.fill();e.globalAlpha=1}e.fillStyle="#e8b64a";for(let h=n+14;h<512-n-14;h+=34)e.fillRect(0,h,2.5,18),e.fillRect(512-2.5,h,2.5,18),e.fillRect(h,0,18,2.5),e.fillRect(h,512-2.5,18,2.5);e.fillStyle="#e9e6dc";let c=4*i;for(let h=5;h<n-4;h+=9)e.fillRect(n+2,h,c,5),e.fillRect(512-n-2-c,h,c,5),e.fillRect(n+2,512-h-5,c,5),e.fillRect(512-n-2-c,512-h-5,c,5),e.fillRect(h,n+2,5,c),e.fillRect(h,512-n-2-c,5,c),e.fillRect(512-h-5,n+2,5,c),e.fillRect(512-h-5,512-n-2-c,5,c);e.restore()}let o=new an(t);return o.colorSpace=Ce,o.anisotropy=8,o}var dx=["#efe3cf","#dccab2","#cdbcab","#e6d6c2","#bfae9d","#d9b99e","#d2d8da","#f3eadb","#c9906f","#e2c7a6"],fx=["#b4d2e4","#9cc0d8","#bfdcd8","#d6c2a4","#a9b8d2","#cfe2ec","#94b6c8"];function Nu(s){let t=Yn(2026),e=new fe,i={A:{pos:[],nor:[],uv:[],col:[]},B:{pos:[],nor:[],uv:[],col:[]}},n=new ii,r=[],o=[],a=[],l=[],c=[],h=new ft,u=Tt.y+li;function f(E,A,b,_,P,N,B,W,Q,X,it,k){let lt=Math.hypot(_-A,P-b),ut=Math.max(1,Math.round(lt/lx))/zi,vt=Math.max(1,Math.round((B-N)/cx))/zi;E.pos.push(A,N,b,_,N,P,_,B,P,A,N,b,_,B,P,A,B,b),E.uv.push(it,k,it+ut,k,it+ut,k+vt,it,k,it+ut,k+vt,it,k+vt);for(let Ot=0;Ot<6;Ot++)E.nor.push(W,0,Q),E.col.push(X.r,X.g,X.b)}function d(E,A,b,_,P,N,B,W){let Q=i[B];h.set(W);let X=Math.floor(t()*zi)/zi,it=Math.floor(t()*zi)/zi;f(Q,E-b,A+_,E+b,A+_,P,N,0,1,h,X,it),f(Q,E+b,A+_,E+b,A-_,P,N,1,0,h,X,it),f(Q,E+b,A-_,E-b,A-_,P,N,0,-1,h,X,it),f(Q,E-b,A-_,E-b,A+_,P,N,-1,0,h,X,it);let k=new ft(W).multiplyScalar(.5).lerp(new ft("#5c6068"),.5);n.box(E,N-.05,A,b*2,.1,_*2,k.getHex()),n.box(E,N-.03,A,b*2-3,.1,_*2-3,k.clone().multiplyScalar(1.25).getHex()),s.add({x:E,z:A,hx:b,hz:_,y0:P-3,y1:N,kind:"building"}),c.push({x:E,z:A,hx:b,hz:_,y:N})}function g(E,A,b,_,P,N){let B=P>70,W=B?t()<.7?"B":"A":t()<.16?"B":"A",Q=W==="A"?dx:fx,X=Q[Math.floor(t()*Q.length)];if(B&&Math.min(b,_)>12&&t()<.75){let it=P*(.5+t()*.25);d(E,A,b,_,u,u+it,W,X);let k=4+t()*4;if(d(E,A,b-k,_-k,u+it,u+P,W,X),t()<.4){let lt=k+4+t()*3,ut=10+t()*22;if(Math.min(b,_)-lt>4)return d(E,A,b-lt,_-lt,u+P,u+P+ut,W,X),{x:E,z:A,hx:b-lt,hz:_-lt,top:u+P+ut}}return{x:E,z:A,hx:b-k,hz:_-k,top:u+P}}return d(E,A,b,_,u,u+P,W,X),{x:E,z:A,hx:b,hz:_,top:u+P}}let x=[],p={pos:[],uv:[],idx:[]},m=(Tt.pitch-Tt.street)/2-4;for(let E=0;E<Tt.n;E++)for(let A=0;A<Tt.n;A++){let b=Tt.x0+(A+.5)*Tt.pitch,_=Tt.z0+(E+.5)*Tt.pitch,P=Math.max(Math.abs(A-4),Math.abs(E-4)),N=`${A},${E}`,B=N==="2,6"||N==="7,3",W=N==="6,6"||N==="1,2",Q=p.pos.length/3,X=Tt.pitch/2,it=B?.5:0;if(p.pos.push(b-X,u,_-X,b+X,u,_-X,b-X,u,_+X,b+X,u,_+X),p.uv.push(it+.001,1,it+.499,1,it+.001,0,it+.499,0),p.idx.push(Q,Q+2,Q+1,Q+1,Q+2,Q+3),B){l.push({x:b,z:_,r:m});continue}if(W){o.push({x:b,z:_,y:u,plaza:!0});continue}if(P===0){let Rt="#8fb7cf";d(b,_,27,27,u,u+70,"B",Rt),d(b,_,21,21,u+70,u+170,"B",Rt),d(b,_,15,15,u+170,u+246,"B",Rt),r.push({x:b,z:_,y:u+246,r:10,name:"Aurora Tower"}),a.push([b+14,u+248,_+14],[b-14,u+248,_-14]),x.push({x:b,z:_,hx:15,hz:15,top:u+246,ring:P});continue}let k=t(),lt=P===1?[88,190]:P===2?[34,92]:P===3?[11,34]:[8,20],ut=()=>lt[0]+t()*(lt[1]-lt[0]),vt=2.5,Ot=[];if(P===1&&k<.5||P===2&&k<.25){let Rt=m-t()*5;Ot.push(g(b,_,Rt,Rt,ut()*1.1,P))}else if(P<=2&&k<.7||P>2&&k<.3){let Rt=m/2-vt/2;t()<.5?Ot.push(g(b-Rt-vt,_,Rt,m,ut(),P),g(b+Rt+vt,_,Rt,m,ut(),P)):Ot.push(g(b,_-Rt-vt,m,Rt,ut(),P),g(b,_+Rt+vt,m,Rt,ut(),P))}else if(k<.86||P<=2){let Rt=m/2-vt/2;for(let nt of[-1,1])for(let ht of[-1,1])Ot.push(g(b+nt*(Rt+vt),_+ht*(Rt+vt),Rt,Rt,ut()*(.7+t()*.5),P))}else{let Rt=m/2-vt/2;Ot.push(g(b,_-Rt-vt,m,Rt,ut(),P));for(let nt of[-1,1])Ot.push(g(b+nt*(Rt+vt),_+Rt+vt,Rt,Rt,ut()*.8,P))}for(let Rt of Ot)x.push({...Rt,ring:P})}let y=x.filter(E=>E.ring>=1&&E.ring<=2&&Math.min(E.hx,E.hz)>=11).sort((E,A)=>A.top-E.top),M=["Skyline Deck","Harbor View","Midtown Roof"];[y[0],y[Math.floor(y.length/2)],y[y.length-2]].forEach((E,A)=>{E&&r.push({x:E.x,z:E.z,y:E.top,r:Math.min(9,Math.min(E.hx,E.hz)-1.5),name:M[A]})});for(let E of x)E.top>150&&E.ring>0&&a.push([E.x,E.top+1.5,E.z]);let v={};for(let E of["A","B"]){let A=i[E],b=new Xt;b.setAttribute("position",new Et(A.pos,3)),b.setAttribute("normal",new Et(A.nor,3)),b.setAttribute("uv",new Et(A.uv,2)),b.setAttribute("color",new Et(A.col,3));let _=hx(E,E==="A"?5:9),P=new ve({map:_.map,emissiveMap:_.emissiveMap,emissive:16777215,emissiveIntensity:1,vertexColors:!0});v[E]=P;let N=new Pt(b,P);N.castShadow=N.receiveShadow=!0,N.matrixAutoUpdate=!1,e.add(N)}e.add(n.build());let C=new Xt;C.setAttribute("position",new Et(p.pos,3)),C.setAttribute("uv",new Et(p.uv,2)),C.setIndex(p.idx),C.computeVertexNormals();let w=new Pt(C,new ve({map:ux(),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));return w.receiveShadow=!0,w.matrixAutoUpdate=!1,e.add(w),{group:e,mats:v,pads:r,rampSpots:o,beacons:a,parks:l,tops:x,roofList:c}}var px='"Barlow Condensed", "Arial Narrow", Arial, sans-serif';function Jn(s,t,e,i={}){let n=document.createElement("canvas");n.width=s,n.height=t,e(n.getContext("2d"),s,t);let r=new an(n);return r.colorSpace=Ce,r.anisotropy=8,i.repeat&&(r.wrapS=r.wrapT=sn),r}function Lc(s,t,e,i){s.beginPath(),s.moveTo(t-50*i,e+32*i),s.lineTo(t,e-18*i),s.lineTo(t+50*i,e+32*i),s.lineTo(t+50*i,e+6*i),s.lineTo(t,e-44*i),s.lineTo(t-50*i,e+6*i),s.closePath(),s.fill()}function Fu({terrain:s,roads:t,colliders:e,city:i,pierZ:n}){let r=new fe,o=Yn(4242),a=new ii,l=new ii,c=[],h=[...i.pads],u=[],f=[],d=[],g=[...i.beacons,...t.beaconPositions||[]],x={kicker:{pos:[],uv:[],idx:[]},launch:{pos:[],uv:[],idx:[]}};function p(I){I.curve=I.curve||1.6;let G=Math.cos(I.yaw),j=Math.sin(I.yaw),$=14,R=x[I.launch?"launch":"kicker"],S=(rt,st,pt)=>[I.x+rt*G+pt*j,I.baseY+st,I.z-rt*j+pt*G],U=rt=>I.h*Math.pow(rt,I.curve),q=R.pos.length/3,Y=I.halfW,V=I.len,ct=I.launch?1908260:3159100;for(let rt=0;rt<=$;rt++){let st=rt/$,pt=-V/2+st*V,H=U(st);if(R.pos.push(...S(-Y,H,pt),...S(Y,H,pt)),R.uv.push(0,st*V/8,1,st*V/8),rt>0){let et=q+(rt-1)*2,mt=q+rt*2;R.idx.push(et,mt,et+1,et+1,mt,mt+1);let Z=pt-V/$,at=U((rt-1)/$);a.quad(S(-Y,-3,Z),S(-Y,-3,pt),S(-Y,H,pt),S(-Y,at,Z),ct),a.quad(S(Y,-3,pt),S(Y,-3,Z),S(Y,at,Z),S(Y,H,pt),ct);let At=-Math.atan2(H-at,V/$),xt=Math.hypot(H-at,V/$)+.05;for(let Ht of[-1,1]){let D=S(Ht*(Y-.16),(H+at)/2+.1,(pt+Z)/2);(I.launch?l:a).box(D[0],D[1],D[2],.3,.22,xt,I.launch?rt%2?16769730:16730682:rt%2?16118246:2764083,I.yaw,At)}}}return a.quad(S(-Y,-3,V/2),S(Y,-3,V/2),S(Y,I.h,V/2),S(-Y,I.h,V/2),ct),I.collider=e.add({x:I.x,z:I.z,hx:Y,hz:V/2,yaw:I.yaw,y0:I.baseY-3,y1:I.baseY,y2:I.baseY+I.h,curve:I.curve,kind:"ramp",launch:!!I.launch,name:I.name}),I.lipX=I.x+j*V/2,I.lipZ=I.z+G*V/2,I.lipY=I.baseY+I.h,c.push(I),I}let m=le.y+li;p({...Iu,baseY:m,launch:!0,name:"Proving Ground Launch"}),p({x:-1400,z:462,yaw:Math.PI/2,len:14,halfW:5,h:3,baseY:m}),p({x:-1310,z:462,yaw:Math.PI/2,len:20,halfW:5.5,h:5.2,baseY:m}),p({x:-1196,z:462,yaw:Math.PI/2,len:22,halfW:6,h:6,baseY:m}),p({x:-1104,z:462,yaw:-Math.PI/2,len:22,halfW:6,h:6,baseY:m}),p({x:-960,z:470,yaw:Math.PI/2,len:12,halfW:4,h:2.4,curve:1.3,baseY:m}),p({x:-920,z:470,yaw:-Math.PI/2,len:12,halfW:4,h:2.4,curve:1.3,baseY:m}),p({x:-1500,z:300,yaw:.9,len:16,halfW:5,h:4,baseY:m});let y=t.roads[0];for(let[I,G,j]of[[.045,1,3.4],[.34,1,3.6],[.46,-1,3.2],[.58,1,4],[.72,-1,3.4],[.86,1,3.8],[.95,-1,3.2]]){let $=y.pts[Math.floor(I*y.pts.length)];if($.bridge)continue;let R=Math.atan2($.tx,$.tz)+(G<0?Math.PI:0);p({x:$.x+$.nx*4.6*G,z:$.z+$.nz*4.6*G,yaw:R,len:17,halfW:3.7,h:j,baseY:$.y+li})}if(t.bayBridge){let I=t.bayBridge;p({x:I.x+Math.cos(I.yaw)*-4.6,z:I.z-Math.sin(I.yaw)*-4.6,yaw:I.yaw+Math.PI,len:15,halfW:3.6,h:3,baseY:I.y+li})}let M=Tt.x0+300-te.x,v=Tt.z0+300-te.z,C=Math.hypot(M,v);p({x:te.x+M/C*17,z:te.z+v/C*17,yaw:Math.atan2(M,v),len:30,halfW:6.5,h:6.5,curve:1.8,baseY:te.summitY,launch:!0,name:"Summit Send"});for(let I of i.rampSpots){let G=Math.atan2(Tt.x0+4.5*Tt.pitch-I.x,Tt.z0+4.5*Tt.pitch-I.z);p({x:I.x,z:I.z,yaw:Math.round(G/(Math.PI/2))*(Math.PI/2),len:20,halfW:5.5,h:5,baseY:I.y}),h.push({x:I.x+18,z:I.z-18,y:I.y,r:7,name:"Plaza"})}let w=i.tops.filter(I=>I.ring>=2&&I.ring<=3&&Math.min(I.hx,I.hz)>=11&&!i.pads.some(G=>G.x===I.x&&G.z===I.z));for(let I=0;I<4&&I<w.length;I++){let G=w[Math.floor((I+.5)*w.length/4)],j=Math.atan2(Tt.x0+4.5*Tt.pitch-G.x,Tt.z0+4.5*Tt.pitch-G.z),$=Math.round(j/(Math.PI/2))*(Math.PI/2),R=Math.abs(Math.sin($))>.5?G.hx:G.hz;p({x:G.x+Math.sin($)*(R-8.5),z:G.z+Math.cos($)*(R-8.5),yaw:$,len:15,halfW:4,h:3.2,baseY:G.top})}{let G=n-26,j=n+190,$=6.6;e.add({x:880,z:(G+j)/2,hx:8,hz:(j-G)/2,y0:$-1.2,y1:$,kind:"deck",quiet:!0}),a.box(880,$-.6,(G+j)/2,16,1.2,j-G,12160870),a.box(880,$+.03,(G+j)/2,12,.08,j-G-2,13280122);for(let H=G+12;H<j;H+=24)for(let et of[-1,1])a.box(880+et*6.5,($-8)/2-.6,H,1.1,$+8,1.1,7232072);for(let H=G+6;H<j-30;H+=12)for(let et of[-1,1])a.box(880+et*7.7,$+1.9,H,.18,3.8,.18,3816772),l.box(880+et*7.7,$+3.9,H,.5,.5,.5,16767392);let R=Math.max(s.heightAt(880,G-16),1);e.add({x:880,z:G-8,hx:8,hz:8.2,y0:R-3,y1:R,y2:$,kind:"ramp",quiet:!0}),a.box(880,(R+$)/2-.45,G-8,16,.9,16.6,12160870,0,-Math.atan2($-R,16)),p({x:880,z:j-17,yaw:0,len:30,halfW:6,h:6.5,curve:1.8,baseY:$,launch:!0,name:"Pier Launch"});let S=910,U=n+70,q=27,Y=$+q+5;e.add({x:S,z:U,hx:22,hz:14,y0:$-1.2,y1:$,kind:"deck",quiet:!0}),a.box(S,$-.6,U,44,1.2,28,12160870);for(let H of[-1,1])for(let et of[-1,1])a.box(S+et*8,($+Y)/2,U+H*3,.9,Math.hypot(Y-$,16)+1,.9,15920610,0,0,et*Math.atan2(16,Y-$));for(let H of[-1,1])e.add({x:S+H*13,z:U,hx:3,hz:3.6,y0:$,y1:$+11,kind:"prop"});let V=new fe,ct=new ii,rt=new ii;for(let H of[-1.6,1.6])ct.addGeometry(new wn(q,.35,5,40),ct.matrix(0,0,H),15920610),ct.addGeometry(new wn(q*.55,.22,4,32),ct.matrix(0,0,H),15920610);let st=["#e5484d","#f2a33a","#3aa6c9","#f2ede2"];for(let H=0;H<16;H++){let et=H/16*Math.PI*2;ct.box(Math.cos(et)*q/2,Math.sin(et)*q/2,0,q,.2,.2,15920610,0,0,et),rt.box(Math.cos(et)*q,Math.sin(et)*q,0,.5,.5,3.6,H%2?16761466:16738906)}V.add(ct.build(null,!1),rt.build(new Ae({vertexColors:!0}),!1)),V.children.forEach(H=>{H.matrixAutoUpdate=!0});let pt=[];for(let H=0;H<16;H++){let et=new Pt(new Oe(2.6,2.4,2.2),new ve({color:st[H%4]}));V.add(et),pt.push(et)}V.position.set(S,Y,U),r.add(V),d.push((H,et)=>{V.rotation.z=et*.07;for(let mt=0;mt<16;mt++){let Z=mt/16*Math.PI*2;pt[mt].position.set(Math.cos(Z)*q,Math.sin(Z)*q-1.9,0),pt[mt].rotation.z=-V.rotation.z}}),f.push({x:S,y:Y,z:U,r:3.5,name:"wheel hub"})}{let I=m,G=Jn(4096,128,(Z,at,At)=>{Z.fillStyle="#454850",Z.fillRect(0,0,at,At);for(let xt=0;xt<14e3;xt++){let Ht=62+Math.random()*30;Z.fillStyle=`rgba(${Ht},${Ht+2},${Ht+8},0.35)`,Z.fillRect(Math.random()*at,Math.random()*At,3,2)}Z.fillStyle="#ece9df",Z.fillRect(0,5,at,3),Z.fillRect(0,At-8,at,3);for(let xt=240;xt<at-700;xt+=150)Z.fillRect(xt,At/2-2,80,4);for(let xt=0;xt<8;xt++)Z.fillRect(40,14+xt*13.2,120,7);for(let xt=0;xt<7;xt++)Z.fillStyle=xt%2?"#ece9df":"#ff4a3a",Z.save(),Z.translate(at-640+xt*84,At/2),Z.beginPath(),Z.moveTo(0,-50),Z.lineTo(34,0),Z.lineTo(0,50),Z.lineTo(26,50),Z.lineTo(60,0),Z.lineTo(26,-50),Z.closePath(),Z.fill(),Z.restore()}),j=new Pt(new Di(ne.x1-ne.x0,ne.halfW*2).rotateX(-Math.PI/2),new ve({map:G,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));j.position.set((ne.x0+ne.x1)/2,I,ne.z);let $=Jn(256,256,Z=>{Z.fillStyle="#a9a69d",Z.fillRect(0,0,256,256);for(let at=0;at<1500;at++){let At=150+Math.random()*40;Z.fillStyle=`rgba(${At},${At},${At-8},0.25)`,Z.fillRect(Math.random()*256,Math.random()*256,3,3)}Z.strokeStyle="rgba(60,60,60,0.35)",Z.lineWidth=2,Z.strokeRect(0,0,256,256)},{repeat:!0}),R=new ve({map:$,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),S=le.x0+28,U=le.x1-20;for(let[Z,at]of[[le.z0+10,ne.z-ne.halfW],[ne.z+ne.halfW,le.z1-10]]){let At=new Di(U-S,at-Z).rotateX(-Math.PI/2),xt=At.attributes.uv;for(let D=0;D<xt.count;D++)xt.setXY(D,xt.getX(D)*(U-S)/24,xt.getY(D)*(at-Z)/24);let Ht=new Pt(At,R);Ht.position.set((S+U)/2,I,(Z+at)/2),Ht.receiveShadow=!0,r.add(Ht)}for(let[Z,at]of[[S,ne.x0],[ne.x1,U]]){let At=new Di(at-Z,ne.halfW*2).rotateX(-Math.PI/2),xt=At.attributes.uv;for(let D=0;D<xt.count;D++)xt.setXY(D,xt.getX(D)*(at-Z)/24,xt.getY(D)*ne.halfW/12);let Ht=new Pt(At,R);Ht.position.set((Z+at)/2,I,ne.z),Ht.receiveShadow=!0,r.add(Ht)}j.receiveShadow=!0,r.add(j);for(let Z=ne.x0+10;Z<ne.x1;Z+=28)for(let at of[-1,1])l.box(Z,I+.14,ne.z+at*(ne.halfW+1.2),.28,.28,.28,Z>ne.x1-200?16734780:16771e3);let q=-1250,Y=296,V=76,ct=17,rt=15;for(let Z of[-1,1])e.add({x:q,z:Y+Z*(ct+.7),hx:V/2,hz:.9,y0:I-2,y1:I+rt,kind:"building"}),a.box(q,I+rt/2,Y+Z*(ct+.7),V,rt,1.6,14275783),a.box(q,I+1.1,Y+Z*(ct+1.56),V,2.2,.12,13191226);e.add({x:q,z:Y,hx:V/2,hz:ct+1.6,y0:I+rt,y1:I+rt+5.5,kind:"building"});let st=new Be(ct+1.6,ct+1.6,V,14,1,!1,0,Math.PI);a.addGeometry(st,a.matrix(q,I+rt,Y,.32,1,1,0,0,Math.PI/2),12568009);for(let Z=-3;Z<=3;Z++)l.box(q+Z*10,I+rt-.3,Y,1.6,.25,.5,16773584);for(let Z of[-1432,-1085])e.add({x:Z,z:286,hx:30,hz:20,y0:I-2,y1:I+15,kind:"building"}),a.box(Z,I+7.5,286,60,15,40,14275783),a.box(Z,I+15.6,286,61,1.2,41,12568009),a.box(Z,I+5.5,306.1,42,11,.3,9278620),a.box(Z,I+12.6,306.15,60,1,.3,13191226);e.add({x:-985,z:282,hx:4,hz:4,y0:I-2,y1:I+30,kind:"building"}),e.add({x:-985,z:282,hx:6.5,hz:6.5,y0:I+30,y1:I+36.5,kind:"building"}),a.box(-985,I+15,282,8,30,8,15328472),a.box(-985,I+30.6,282,13.6,1.2,13.6,13191226),a.box(-985,I+33,282,12.4,3.6,12.4,8370633),a.box(-985,I+35.6,282,14,1.6,14,15328472),g.push([-985,I+39,282]),h.push({x:-915,z:300,y:I,r:9,name:"Proving Ground"});let pt=[13191226,3112858,15311419,5016666,15328472];for(let Z=0;Z<9;Z++){let at=-820-Z%3*22,At=450+Math.floor(Z/3)*16,xt=1+Z*7%3;for(let Ht=0;Ht<xt;Ht++)a.box(at,I+1.45+Ht*2.9,At,12.2,2.9,2.6,pt[(Z+Ht)%5]);e.add({x:at,z:At,hx:6.1,hz:1.3,y0:I-1,y1:I+xt*2.9,kind:"prop"})}let H=-690;for(let Z of[-1,1])a.box(H,I+9,ne.z+Z*25,1.4,18,1.4,2434861),e.add({x:H,z:ne.z+Z*25,hx:.9,hz:.9,y0:I-1,y1:I+18,kind:"prop"});a.box(H,I+17.2,ne.z,2,3.6,52,2434861),e.add({x:H,z:ne.z,hx:1,hz:26,y0:I+15.4,y1:I+19,kind:"prop"});let et=Jn(1024,96,(Z,at,At)=>{Z.fillStyle="#101115",Z.fillRect(0,0,at,At),Z.fillStyle="#ff4a3a",Z.fillRect(0,0,at,6),Z.fillRect(0,At-6,at,6),Z.font=`italic 700 62px ${px}`,Z.textAlign="center",Z.textBaseline="middle",Z.fillStyle="#fff3e0",Z.fillText("FLIGHT  TEST   \u203A\u203A\u203A   FULL  THROTTLE   \u203A\u203A\u203A",at/2,At/2+3)}),mt=new Pt(new Di(40,3),new Ae({map:et}));mt.position.set(H-1.05,I+17.2,ne.z),mt.rotation.y=-Math.PI/2,r.add(mt);for(let[Z,at]of[[-610,344],[-610,416],[-545,348],[-545,412]])a.box(Z,I+11,at,.7,22,.7,2434861),l.box(Z,I+22.4,at,1,2.2,4.4,16773584,at<ne.z?.5:-.5),e.add({x:Z,z:at,hx:.6,hz:.6,y0:I-1,y1:I+23,kind:"prop"})}{let I=ei.x,G=ei.z,j=s.heightAt(I,G);for(let Y=0;Y<6;Y++)a.cyl(I,j+3+Y*6,G,3.6-Y*.28-.28,3.6-Y*.28,6,Y%2?13191226:15920610,10);a.cyl(I,j+36.4,G,3.4,3.4,.8,3159100,10),l.addGeometry(new Be(1.8,1.8,3,8),l.matrix(I,j+38.3,G),16773568),a.addGeometry(new rr(2.6,2.6,8),a.matrix(I,j+41.1,G),13191226),e.add({x:I,z:G,hx:3.4,hz:3.4,y0:j-3,y1:j+42,kind:"building"});let $=new Be(.6,9,150,10,1,!0).rotateX(Math.PI/2).translate(0,0,75),R=new Ae({color:16773568,transparent:!0,opacity:.1,blending:$e,depthWrite:!1,side:De,fog:!1}),S=new fe,U=new Pt($,R),q=new Pt($,R);q.rotation.y=Math.PI,S.add(U,q),S.position.set(I,j+38.3,G),r.add(S),d.push((Y,V,ct)=>{S.rotation.y=V*.5,R.opacity=.03+.1*Math.min(ct,1.5),S.visible=ct>.05}),h.push({x:I+22,z:G+4,y:s.heightAt(I+22,G+4),r:7,name:"Lighthouse Cape"})}{let I=te.x-27,G=te.z+6,j=te.summitY;a.cyl(I,j+3,G,8,8.4,6,15328472,12),a.addGeometry(new Vn(8,12,6,0,Math.PI*2,0,Math.PI/2),a.matrix(I,j+6,G),$=>Math.abs($.x)<1.2&&$.z>0?3159100:16249834),e.add({x:I,z:G,hx:7.4,hz:7.4,y0:j-3,y1:j+13,kind:"building"}),a.box(te.x-6,j+14,te.z-36,.5,28,.5,13191226),e.add({x:te.x-6,z:te.z-36,hx:.5,hz:.5,y0:j-2,y1:j+28,kind:"prop"}),g.push([te.x-6,j+28.6,te.z-36]),h.push({x:te.x+2,z:te.z-22,y:j,r:8,name:"Mount Ember Summit"})}{let I=new fe,G=new ve({color:16249834}),j=new Oe(1.5,27,.4).translate(0,14.5,0);for(let R=0;R<7;R++){let S=R*.9+.4,U=70+R*97%230,q=bi.x+Math.cos(S)*U,Y=bi.z+Math.sin(S)*U,V=s.heightAt(q,Y);if(V<4)continue;a.cyl(q,V+31,Y,1.1,2,62,16249834,8),e.add({x:q,z:Y,hx:1.6,hz:1.6,y0:V-3,y1:V+62,kind:"prop"});let ct=new fe,rt=new Pt(new Oe(2.4,2.4,6),G);for(let H=0;H<3;H++){let et=new Pt(j,G);et.rotation.z=H/3*Math.PI*2,ct.add(et)}ct.position.set(0,0,3.4);let st=new fe;st.add(rt,ct),st.position.set(q,V+62.5,Y),st.rotation.y=2.2,I.add(st);let pt=.7+R%3*.18;d.push((H,et)=>{ct.rotation.z=et*pt+R}),g.push([q,V+64.5,Y])}r.add(I);let $=s.heightAt(bi.x,bi.z);h.push({x:bi.x,z:bi.z,y:$,r:8,name:"Wind Farm"})}{let I=Se.x+30,G=Se.z-190,j=3.6;e.add({x:I,z:G,hx:30,hz:13,y0:-4,y1:j,kind:"deck",quiet:!0}),a.box(I,j/2-2,G,60,j+4,26,2829877),a.box(I,j+.02,G,58,.1,24,4014409);for(let $ of[-1,1])for(let R of[-1,1])l.box(I+$*29,j+.5,G+R*12,.6,1,.6,16761466);h.push({x:I,z:G,y:j,r:10,name:"Bay Barge",bonus:1.5})}{let I=new ii;I.box(0,.5,0,2.6,1.3,8,15920610),I.box(0,6.5,-.4,.2,11,.2,7232072),I.quad([0,1.8,-.7],[0,1.8,-4.4],[0,11.5,-.7],[0,11.5,-.7],16644334),I.quad([0,11.5,-.7],[0,1.8,-4.4],[0,1.8,-.7],[0,1.8,-.7],16644334),I.quad([0,1.8,-.1],[0,10.5,-.1],[0,1.8,3.6],[0,1.8,3.6],16747100),I.quad([0,1.8,3.6],[0,10.5,-.1],[0,1.8,-.1],[0,1.8,-.1],16747100);let G=I.build().geometry,j=new ve({vertexColors:!0});[[Se.x-90,Se.z+120],[Se.x+120,Se.z+330],[Se.x-30,Se.z-40],[Se.x+60,Se.z+560],[Se.x-150,Se.z+640],[1240,1500],[300,1640],[-1500,1100],[1640,200]].forEach(([U,q],Y)=>{if(s.heightAt(U,q)>-3)return;let V=new Pt(G,j);V.position.set(U,0,q),V.rotation.y=Y*1.7,r.add(V),d.push((ct,rt)=>{V.position.y=Math.sin(rt*.9+Y)*.25,V.rotation.z=Math.sin(rt*.7+Y*2)*.05})});let R=[["#e5484d","#fdf3df"],["#f2a33a","#2f7f9a"],["#7c5cc4","#fdf3df"],["#2f9a7a","#f2d23a"],["#e5484d","#f2a33a"]];[[Se.x+40,150,Se.z-380],[640,210,60],[260,130,1300],[-620,170,-260],[1340,160,-480]].forEach(([U,q,Y],V)=>{let ct=new ii,[rt,st]=R[V],pt=new Vn(10,12,8);ct.addGeometry(pt,ct.matrix(0,0,0,1,1.15,1),mt=>Math.floor((Math.atan2(mt.z,mt.x)/(Math.PI*2)+.5)*12)%2?rt:st),ct.addGeometry(new Be(5.2,1.6,6,12,1,!0),ct.matrix(0,-12.4,0),mt=>Math.floor((Math.atan2(mt.z,mt.x)/(Math.PI*2)+.5)*12)%2?rt:st),ct.box(0,-17.4,0,2.2,1.8,2.2,9071178);let H=ct.build(new ve({vertexColors:!0,side:De}),!1);H.matrixAutoUpdate=!0,H.position.set(U,q,Y),r.add(H);let et={x:U,y:q,z:Y,r:11.5,name:"balloon"};f.push(et),d.push((mt,Z)=>{et.y=q+Math.sin(Z*.15+V*2)*9,H.position.y=et.y,H.rotation.y=Z*.03+V})})}let E=[];function A(I,G,j=8){let $=E.length;E.push({name:I,count:G.length,id:$}),G.forEach((R,S)=>{let U=G[Math.max(0,S-1)],q=G[Math.min(G.length-1,S+1)],Y=new L(q[0]-U[0],q[1]-U[1],q[2]-U[2]).normalize();u.push({pos:new L(R[0],R[1],R[2]),dir:Y,r:j,chain:$,index:S,cooldown:0,pulse:0})})}A("Liftoff Line",[[-440,50,380],[-310,56,384],[-170,61,394],[-30,66,410],[120,64,430],[280,62,452],[430,70,470]],9);let b=I=>Tt.x0+I*Tt.pitch,_=I=>Tt.z0+I*Tt.pitch,P=Tt.y;if(A("Downtown Slalom",[[b(3),P+38,_(0)+30],[b(3),P+50,_(2)],[b(3),P+62,_(4)],[b(3)+28,P+66,_(5)-12],[b(4)+20,P+70,_(5)],[b(6)-20,P+74,_(5)],[b(6),P+68,_(5)-30],[b(6),P+56,_(3)],[b(6),P+44,_(1)]],7.5),t.bayBridge){let I=t.bayBridge,G=Math.sin(I.yaw),j=Math.cos(I.yaw);A("Bridge Thread",[-.44,-.23,0,.23,.44].map(U=>[I.x+G*U*I.len,I.y+14+(Math.abs(U)<.3?1:0),I.z+j*U*I.len]),7.5);let $=e.boxes.filter(U=>U.kind==="pier"&&Math.hypot(U.x-I.x,U.z-I.z)<140).sort((U,q)=>Math.hypot(U.x-I.x,U.z-I.z)-Math.hypot(q.x-I.x,q.z-I.z)),R=$.length>1?($[0].x+$[1].x)/2:I.x+G*22,S=$.length>1?($[0].z+$[1].z)/2:I.z+j*22;A("Under the Deck",[[R-j*150,6.5,S+G*150],[R-j*60,6,S+G*60],[R,6,S],[R+j*70,6.5,S-G*70],[R+j*160,9,S-G*160]],5.6)}{let I=t.roads.find(j=>j.id==="summit"),G=[];for(let j=1;j<=9;j++){let $=I.pts[Math.floor(j/10*I.pts.length)];G.push([$.x,$.y+20,$.z])}G.push([te.x,te.summitY+34,te.z]),A("Summit Climb",G,9)}{let I=[];for(let G=0;G<8;G++){let j=.25+G*.2,$=900;for(;$<2100&&s.heightAt(Math.cos(j)*$,Math.sin(j)*$)>-1.5;)$+=15;I.push([Math.cos(j)*($+70),7.5,Math.sin(j)*($+70)])}A("Coast Skimmer",I,7)}A("Hangar Run",[[-1420,le.y+26,330],[-1330,le.y+9.5,296],[-1250,le.y+8,296],[-1170,le.y+9.5,296],[-1060,le.y+30,330]],6.2);{let I=[];for(let G=0;G<9;G++){let j=G/9*Math.PI*2;I.push([260+Math.cos(j)*430,420+Math.sin(j*2)*40,60+Math.sin(j)*430])}A("Cloud Nine",I,10)}let N=new wn(1,.055,6,36),B=new Ae({color:16777215,fog:!1}),W=new bn(N,B,u.length);W.frustumCulled=!1;let Q=new Is(.72,1,36),X=new Ae({color:6744319,transparent:!0,opacity:.07,blending:$e,depthWrite:!1,side:De,fog:!1}),it=new bn(Q,X,u.length);it.frustumCulled=!1,r.add(W,it);let k=new jt,lt=new Te,ut=new L,vt=new ft,Ot=new L(0,0,1),Rt=new ft(.55,3,3.9),nt=new ft(.1,.16,.22),ht=new ft(5,4.4,2.8);function Ct(I){for(let G=0;G<u.length;G++){let j=u[G];j.cooldown>0&&(j.cooldown-=I),j.pulse=Math.max(0,j.pulse-I*1.6);let $=j.r*(1+j.pulse*.5);lt.setFromUnitVectors(Ot,j.dir),k.compose(j.pos,lt,ut.set($,$,$)),W.setMatrixAt(G,k),it.setMatrixAt(G,k),vt.copy(j.cooldown>0?nt:Rt).lerp(ht,j.pulse),W.setColorAt(G,vt),it.setColorAt(G,j.cooldown>0?nt:Rt)}W.instanceMatrix.needsUpdate=!0,it.instanceMatrix.needsUpdate=!0,W.instanceColor.needsUpdate=!0,it.instanceColor.needsUpdate=!0}Ct(0);let _t=Jn(128,128,I=>{I.fillStyle="#f0702e",I.fillRect(0,0,128,128),I.fillStyle="#d95c20",I.fillRect(0,0,128,3),I.fillStyle="#fff3e0",Lc(I,64,70,.9)},{repeat:!0}),Bt=Jn(128,128,I=>{I.fillStyle="#17181d",I.fillRect(0,0,128,128),I.fillStyle="#24262d",I.fillRect(0,0,128,3),I.fillStyle="#7a2b25",Lc(I,64,70,.95)},{repeat:!0}),Vt=Jn(128,128,I=>{I.fillStyle="#000",I.fillRect(0,0,128,128),I.fillStyle="#ff5a40",Lc(I,64,70,.95)},{repeat:!0}),Yt=new ve({map:Bt,emissiveMap:Vt,emissive:16777215,emissiveIntensity:1.6});for(let[I,G]of[["kicker",new ve({map:_t})],["launch",Yt]]){let j=x[I],$=new Xt;$.setAttribute("position",new Et(j.pos,3)),$.setAttribute("uv",new Et(j.uv,2)),$.setIndex(j.idx),$.computeVertexNormals();let R=new Pt($,G);R.castShadow=R.receiveShadow=!0,R.matrixAutoUpdate=!1,r.add(R)}let me=Jn(256,256,I=>{I.clearRect(0,0,256,256),I.strokeStyle="#fff3e0",I.lineWidth=12,I.beginPath(),I.arc(128,128,116,0,7),I.stroke(),I.strokeStyle="#ff5a40",I.lineWidth=8,I.beginPath(),I.arc(128,128,74,0,7),I.stroke(),I.fillStyle="#fff3e0",I.beginPath(),I.arc(128,128,18,0,7),I.fill();for(let G=0;G<4;G++)I.save(),I.translate(128,128),I.rotate(G*Math.PI/2),I.fillRect(-5,-108,10,26),I.restore()}),ee=new Ae({map:me,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8});for(let I of h){let G=new Pt(new Sn(I.r,28).rotateX(-Math.PI/2),ee);G.position.set(I.x,I.y+.06,I.z),G.matrixAutoUpdate=!1,G.updateMatrix(),G.renderOrder=2,r.add(G),I.done=!1}{let I=new Set;for(let st of t.roads)for(let pt of st.pts){let H=st.halfW+16;for(let et=Math.floor((pt.x-H)/16);et<=Math.floor((pt.x+H)/16);et++)for(let mt=Math.floor((pt.z-H)/16);mt<=Math.floor((pt.z+H)/16);mt++)I.add(et*4096+mt)}let G=new ii,j=new ii,$=new ii;for(let st=0;st<4;st++)G.cyl(st*.22,1+st*1.9,0,.2-st*.02,.26-st*.02,2.1,st%2?9071178:8084801,5,0,0,-.12);for(let st=0;st<7;st++){let pt=st/7*Math.PI*2;G.box(.75+Math.sin(pt)*1.5,7.6,Math.cos(pt)*1.5,.9,.1,3.4,st%2?5216842:4163396,pt,.42)}j.cyl(0,.9,0,.22,.3,1.8,7032634,5),[[2.6,2,3,3107392],[4.3,1.5,2.6,3634503],[5.8,1,2.2,4162128]].forEach(([st,pt,H,et])=>j.addGeometry(new rr(pt,H,6),j.matrix(0,st,0),et)),$.cyl(0,1.2,0,.22,.3,2.4,7032634,5),$.addGeometry(new Hn(2.3,0),$.matrix(0,4,0,1,.9,1),6266188),$.addGeometry(new Hn(1.5,0),$.matrix(1.2,3.3,.6),6990165);let R={palm:[],pine:[],round:[]},S=new L;for(let st=0;st<26e3;st++){let pt=(o()-.5)*3700,H=(o()-.5)*3700,et=s.heightAt(pt,H);if(et<2.4||et>215||pt>Tt.x0-34&&pt<Tt.x1+34&&H>Tt.z0-34&&H<Tt.z1+34||pt>le.x0-6&&pt<le.x1+14&&H>le.z0-6&&H<le.z1+6||I.has(Math.floor(pt/16)*4096+Math.floor(H/16))||Math.hypot(pt-ei.x,H-ei.z)<34||Math.hypot(pt-880,H-n)<40||s.normalAt(pt,H,S).y<.84)continue;let mt=qn(pt*.0045+4,H*.0045-2,3,91),Z;if(et<8.5){if(o()>.2)continue;Z="palm"}else if(et<42){if(o()>(mt-.38)*3.2)continue;Z=o()<.12?"palm":"round"}else{if(o()>(mt-.3)*3.4)continue;Z=et>70||o()<.6?"pine":"round"}R[Z].push([pt,et,H])}for(let st of i.parks)for(let pt=0;pt<22;pt++){let H=st.x+(o()-.5)*2*(st.r-2),et=st.z+(o()-.5)*2*(st.r-2);Math.hypot(H-st.x,et-st.z)<13||R.round.push([H,Tt.y+li,et])}let U=new ve({vertexColors:!0,flatShading:!0}),q=new jt,Y=new Te,V=new Pe,ct=new ft,rt=[];for(let[st,pt]of[["palm",G],["pine",j],["round",$]]){let H=R[st],et=new bn(pt.build().geometry,U,H.length);H.forEach(([mt,Z,at],At)=>{let xt=(st==="palm"?.95:st==="pine"?1.25:1.05)*(.75+o()*.7);Y.setFromEuler(V.set((o()-.5)*.08,o()*Math.PI*2,(o()-.5)*.08)),q.compose(S.set(mt,Z-.15,at),Y,new L(xt,xt*(.85+o()*.35),xt)),et.setMatrixAt(At,q),et.setColorAt(At,ct.setScalar(.82+o()*.36))}),et.castShadow=!0,et.receiveShadow=!1,et.frustumCulled=!1,r.add(et),rt.push(et)}r.userData.trees=rt}r.add(a.build());let ge=new Ae({vertexColors:!0});r.add(l.build(ge,!1));let z=new Xt;z.setAttribute("position",new Et(g.flat(),3));let We=new sr({color:16726570,size:7,sizeAttenuation:!0,transparent:!0,blending:$e,depthWrite:!1,fog:!1}),Kt=new Cs(z,We);return Kt.frustumCulled=!1,r.add(Kt),{group:r,ramps:c,pads:h,rings:u,chains:E,spheres:f,launchMat:Yt,glowMat:ge,update(I,G,j){for(let R of d)R(I,G,j);Ct(I);let $=Math.pow(Math.max(0,Math.sin(G*3.2)),6);We.opacity=(.25+.75*$)*Math.min(1,.35+j),We.color.setRGB(6,.8,.5),ge.color.setScalar(.8+j*1.9),Yt.emissiveIntensity=.9+j*1.6}}}var Wo=class{constructor(t,e){let i=960;for(;i<1900&&ko(880,i)>.3;)i+=4;this.pierZ=i,this.roads=new Ho(ko,i),this.terrain=new Bo(this.roads.roads),this.colliders=new $n,this.terrainMesh=this.terrain.buildMesh(),t.add(this.terrainMesh),t.add(this.roads.buildMeshes(this.terrain)),t.add(this.roads.buildBridges(this.colliders,this.terrain)),this.city=Nu(this.colliders),t.add(this.city.group),this.props=Fu({terrain:this.terrain,roads:this.roads,colliders:this.colliders,city:this.city,pierZ:i}),t.add(this.props.group),this.sky=new Vo(t,e),this.water=Uu(this.terrain.buildHeightTexture()),t.add(this.water),this.rings=this.props.rings,this.chains=this.props.chains,this.pads=this.props.pads,this.ramps=this.props.ramps,this.spheres=this.props.spheres,this.time=0}ground(t,e,i,n){let r=this.terrain.heightAt(t,i),o=r,a;if(t>Tt.x0&&t<Tt.x1&&i>Tt.z0&&i<Tt.z1||t>le.x0+28&&t<le.x1-20&&i>le.z0+10&&i<le.z1-10)o+=li,a="road";else{let c=this.roads.surfaceAt(t,i);o+=li*c,a=c>.5?"road":r<3.6?"sand":"grass"}n.box=null;let l=this.colliders.near(t,i);if(l)for(let c=0;c<l.length;c++){let h=l[c],u=t-h.x,f=i-h.z,d=u*h.c-f*h.s;if(d<-h.hx||d>h.hx)continue;let g=u*h.s+f*h.c;if(g<-h.hz||g>h.hz)continue;let x=$n.topAt(h,g);x<=e+.55&&x>o&&(o=x,n.box=h,a="road")}return n.h=o,n.surf=a,n.water=o<0,n}update(t,e,i){this.time+=t;let n=this.sky,r=n.v;n.update(t,e,i);let o=this.water.material.uniforms;o.uTime.value=this.time,o.uSunDir.value.copy(r.sunDir),o.uSunColor.value.copy(r.sun).multiplyScalar(Math.min(1.2,r.sunI/2.6)),o.uDeep.value.copy(r.deep),o.uShallow.value.copy(r.shallow),o.uFoam.value.copy(r.foam),o.uHorizon.value.copy(r.horizon),o.uZenith.value.copy(r.zenith),o.uFogColor.value.copy(r.fog),o.uFogDensity.value=r.fogD,this.city.mats.A.emissiveIntensity=r.windows,this.city.mats.B.emissiveIntensity=r.windows*.8,this.props.update(t,this.time,r.lamps)}};var ce={frontZ:1.38,rearZ:-1.34,wheelbase:2.72,trackHalf:.85,rFront:.345,rRear:.362,wFront:.265,wRear:.315,height:1.16,length:4.42},xi=[{id:"white",name:"Aero White",color:"#cfd1ce",metal:.12,rough:.36,coat:.7,cost:0},{id:"cherry",name:"Cherry Red",color:"#a20d1c",metal:.55,rough:.3,coat:1,cost:1500},{id:"black",name:"Solid Black",color:"#0b0b0d",metal:.4,rough:.22,coat:1,cost:4e3},{id:"silver",name:"Midnight Silver",color:"#42464c",metal:.8,rough:.3,coat:1,cost:8e3},{id:"blue",name:"Deep Blue",color:"#0f2f72",metal:.65,rough:.28,coat:1,cost:13e3},{id:"quick",name:"Quicksilver",color:"#9a9fa6",metal:.95,rough:.2,coat:1,cost:2e4},{id:"stealth",name:"Stealth Grey",color:"#55585d",metal:.3,rough:.5,coat:.4,cost:28e3},{id:"ultra",name:"Ultra Red",color:"#d3101c",metal:.35,rough:.26,coat:1,cost:38e3},{id:"orange",name:"Sunset Orange",color:"#ee5a12",metal:.5,rough:.3,coat:1,cost:5e4},{id:"teal",name:"Aurora Teal",color:"#0f9d93",metal:.7,rough:.26,coat:1,cost:65e3},{id:"violet",name:"Ultraviolet",color:"#4a22b8",metal:.7,rough:.26,coat:1,cost:82e3},{id:"gold",name:"Solar Gold",color:"#c9961c",metal:.95,rough:.24,coat:1,cost:1e5},{id:"matte",name:"Matte Black",color:"#141416",metal:.2,rough:.78,coat:0,cost:125e3},{id:"chrome",name:"Liquid Chrome",color:"#c9ccd2",metal:1,rough:.06,coat:1,cost:15e4}],Si={wb:Je([[-2.2,.62],[-1.34,.8],[0,.84],[1.38,.8],[1.9,.7],[2.22,.46]]),yb:Je([[-2.2,.36],[-1.9,.28],[-1.34,.17],[0,.15],[1.38,.15],[2,.16],[2.22,.2]]),ws:Je([[-2.2,.8],[-1.34,.965],[-.6,.945],[.6,.935],[1.38,.945],[1.9,.85],[2.22,.54]]),ys:Je([[-2.2,.42],[-1.34,.29],[0,.26],[1.38,.26],[2,.25],[2.22,.27]]),wm:Je([[-2.2,.865],[-1.8,.985],[-1.34,1.03],[-.75,.99],[0,.93],[.75,.945],[1.38,.995],[1.9,.89],[2.22,.58]]),ym:Je([[-2.2,.63],[-1.34,.66],[-.75,.6],[0,.52],[.75,.5],[1.38,.56],[1.9,.46],[2.22,.36]]),wsh:Je([[-2.2,.8],[-1.34,.935],[-.75,.92],[0,.9],[.75,.895],[1.38,.885],[1.9,.76],[2.22,.46]]),ysh:Je([[-2.2,.8],[-1.8,.89],[-1.34,.925],[-.75,.9],[0,.855],[.75,.815],[1.38,.805],[1.9,.63],[2.22,.44]]),wg:Je([[-2.2,.7],[-1.34,.75],[-.75,.8],[0,.815],[.75,.8],[.95,.78],[1.38,.68],[1.9,.55],[2.22,.33]]),yg:Je([[-2.2,.855],[-1.45,.965],[-.75,.915],[0,.875],[.75,.83],[.95,.815],[1.38,.735],[1.9,.61],[2.22,.44]]),wr:Je([[-2.2,.42],[-1.45,.5],[-.9,.58],[-.05,.63],[.3,.6],[.95,.52],[1.38,.42],[1.9,.33],[2.22,.2]])},Ou=s=>t=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0])return zt(s[e-1][1],s[e][1],(t-s[e-1][0])/(s[e][0]-s[e-1][0]));return s[s.length-1][1]},mx=Je([[-1.45,.985],[-.9,1.085],[-.35,1.15],[-.05,1.16],[.3,1.13]]),gx=Je([[.95,.835],[1.4,.74],[1.85,.62],[2.1,.52],[2.22,.44]]),xx=Ou([[-2.2,.868],[-2.1,.898],[-1.9,.908],[-1.45,.985]]),yx=s=>s<-1.45?xx(s):s<=.3?mx(s):s<.95?zt(1.13,.835,(s-.3)/.65):gx(s),vx=Je([[-1.45,.975],[-.9,1.06],[-.35,1.115],[-.05,1.125],[.3,1.1]]),_x=Je([[.95,.83],[1.38,.732],[1.85,.614],[2.1,.518],[2.22,.44]]),Mx=Ou([[-2.2,.864],[-2.1,.892],[-1.9,.902],[-1.45,.975]]),bx=s=>s<-1.45?Mx(s):s<=.3?vx(s):s<.95?zt(1.1,.83,(s-.3)/.65):_x(s),Nc=-1.45,Fc=.95,Wi=-2.2,ur=2.22,Bu=[{z:ce.frontZ,r:ce.rFront,a:ce.rFront+.052},{z:ce.rearZ,r:ce.rRear,a:ce.rRear+.052}];function Uc(s){let t=[[0,Si.yb(s)],[Si.wb(s),Si.yb(s)],[Si.ws(s),Si.ys(s)],[Si.wm(s),Si.ym(s)],[Si.wsh(s),Si.ysh(s)],[Si.wg(s),Si.yg(s)],[Si.wr(s),bx(s)],[0,yx(s)]];for(let e of Bu){let i=s-e.z;if(Math.abs(i)<e.a){let n=e.r+Math.sqrt(e.a*e.a-i*i);t[1][0]=.6,t[1][1]=Math.max(t[1][1],Math.min(n,t[5][1]-.09)),t[2][1]=Math.max(t[2][1],n),t[2][0]=Math.max(t[2][0],t[3][0]-.012),t[3][1]=Math.max(t[3][1],n+.03),t[4][1]=Math.max(t[4][1],t[3][1]+.03)}}return t}function Yo(s,t,e){let i=Math.min(6,Math.floor(t)),n=t-i;if(i<2)return e[0]=zt(s[i][0],s[i+1][0],n),e[1]=zt(s[i][1],s[i+1][1],n),e;let r=i===2?s[2]:s[i-1],o=s[i],a=s[i+1],l=i===6?[-s[6][0],s[6][1]]:s[i+2],c=n*n,h=c*n;for(let u=0;u<2;u++)e[u]=.5*(2*o[u]+(a[u]-r[u])*n+(2*r[u]-5*o[u]+4*a[u]-l[u])*c+(-r[u]+3*o[u]-3*a[u]+l[u])*h);return e}var zu=(s,t,e)=>Math.max(0,1-Math.abs(s-t)/e);function qo(s,t,e){let i=It((t-5)/2,0,1),n=i*(2-i),r=.13*n*zu(s,Fc,.55)-.15*n*zu(s,Nc,.6);return r-=.4*Qt(1.45,ur,s)*e*e,r+=.17*Qt(-1.7,Wi,s)*e*e,s+r}var ni=[0,0];function Sx(s,t,e,i=0,n=new L){let r=Uc(s);Yo(r,t,ni);let o=ni[0],a=ni[1];if(n.set(o*e,a,qo(s,t,o)),i){Yo(r,Math.min(7,t+.02),ni);let c=new L(ni[0]*e-n.x,ni[1]-a,qo(s,t+.02,ni[0])-n.z);Yo(Uc(s+.02),t,ni);let h=new L(ni[0]*e-n.x,ni[1]-a,qo(s+.02,t,ni[0])-n.z),u=c.cross(h).normalize();(u.x*e<0&&Math.abs(u.x)>.2||Math.abs(u.x)<=.2&&u.y<0)&&u.negate(),n.addScaledVector(u,i)}return n}function wx(){let s=[];for(let i=Wi;i<ur-.03;i+=.105)s.push(i);s.push(ur,ur-.045,Wi+.04);let t=[Nc,Fc,.3];for(let i of Bu)for(let n=0;n<=12;n++)t.push(i.z+i.a*Math.cos(n/12*Math.PI)*.9999);let e=s.filter(i=>!t.some(n=>Math.abs(n-i)<.04)).concat(t);return e.sort((i,n)=>i-n),e}var Kn=[0,1,2,2.5,3,3.5,4,4.5,5,5.34,5.67,6,6.34,6.67,7];function Ex(){let s=wx(),t=Kn.length,e=[];for(let u=0;u<s.length;u++){let f=Uc(s[u]),d=[];for(let g=0;g<t;g++)Yo(f,Kn[g],ni),d.push([ni[0],ni[1],qo(s[u],Kn[g],ni[0])]);e.push(d)}let i={paint:{pos:[],idx:[],map:new Map},glass:{pos:[],idx:[],map:new Map},trim:{pos:[],idx:[],map:new Map}},n=(u,f,d,g)=>{let x=e[f][d],p=f*1e3+d*4+(x[0]<1e-5?0:g+2),m=u.map.get(p);return m===void 0&&(m=u.pos.length/3,u.pos.push(x[0]*g,x[1],x[2]),u.map.set(p,m)),m},r=(u,f,d,g)=>(u.pos.push(f,d,g),u.pos.length/3-1),o=(u,f,d,g,x)=>{d===g||g===x||d===x||(f?u.idx.push(d,x,g):u.idx.push(d,g,x))},a=Math.floor(s.length/2),l=3,c=(u,f,d,g)=>{let x=(f[0]-u[0])*g,p=f[1]-u[1],m=f[2]-u[2],y=(d[0]-u[0])*g,M=d[1]-u[1],v=d[2]-u[2];return[p*v-m*M,m*y-x*v,x*M-p*y]};for(let u of[1,-1]){let f=c(e[a][l],e[a+1][l],e[a+1][l+1],u)[0]*u<0;for(let d=0;d<s.length-1;d++){let g=(s[d]+s[d+1])/2;for(let x=0;x<t-1;x++){let p=(Kn[x]+Kn[x+1])/2,m=p<2?i.trim:p<5?i.paint:g>Nc&&g<Fc?i.glass:i.paint,y=n(m,d,x,u),M=n(m,d+1,x,u),v=n(m,d+1,x+1,u),C=n(m,d,x+1,u);o(m,f,y,M,v),o(m,f,y,v,C)}}for(let[d,g,x]of[[0,-.03,3],[s.length-1,.035,2]]){let p=e[d],m=(p[0][1]+p[t-1][1])/2+(d===0?.02:-.03),y=[0,m,p[0][2]+g],M=c(p[l],p[l+1],y,u)[2]*g<0;for(let v=0;v<t-1;v++){let C=(Kn[v]+Kn[v+1])/2<x?i.trim:i.paint,w=`cap${d}`;C[w]===void 0&&(C[w]=r(C,y[0],y[1],y[2])),o(C,M,n(C,d,v,u),n(C,d,v+1,u),C[w])}}}let h={};for(let u in i){let f=new Xt;f.setAttribute("position",new Et(i[u].pos,3)),f.setIndex(i[u].idx),f.computeVertexNormals(),h[u]=f}return h}function Xo(s,t,e,i,n,r=.006,o=2){let a=[],l=[],c=o+1;for(let u of[1,-1]){let f=a.length/3;for(let d=0;d<=n;d++){let g=d/n,x=zt(s,t,g),[p,m]=typeof e=="function"?[e(g),i(g)]:[e,i];for(let y=0;y<c;y++){let M=Sx(x,zt(p,m,y/o),u,r);a.push(M.x,M.y,M.z)}if(d>0){let y=f+(d-1)*c,M=f+d*c;for(let v=0;v<o;v++)u>0?l.push(y+v,M+v,y+v+1,y+v+1,M+v,M+v+1):l.push(y+v,y+v+1,M+v,y+v+1,M+v+1,M+v)}}}let h=new Xt;return h.setAttribute("position",new Et(a,3)),h.setIndex(l),h.computeVertexNormals(),h}function Tx(s,t,e){let i=new fe,n=[[s-.1,-t/2],[s-.03,-t/2],[s,-t/2+.035],[s,t/2-.035],[s-.03,t/2],[s-.1,t/2]],r=new Pt(new go(n.map(x=>new gt(x[0],x[1])),22).rotateZ(-Math.PI/2),e.tire),o=s-.095,a=new Pt(new Be(o,o,t*.9,22,1,!0).rotateZ(Math.PI/2),e.rimDark),l=new Pt(new Sn(o,22).rotateY(Math.PI/2).translate(t*.18,0,0),e.rimDark),c=new Pt(new Be(o*.78,o*.78,.02,20).rotateZ(Math.PI/2).translate(t*.2,0,0),e.brake);i.add(r,a,l,c);let h=new fe,u=9,f=new Oe(.022,o-.05,.016).translate(0,(o-.05)/2+.05,0);for(let x=0;x<u;x++)for(let p of[-.085,.085]){let m=new Pt(f,e.rim);m.rotation.set(x/u*Math.PI*2+p,0,0,"XYZ"),h.add(m)}let d=new Pt(new wn(o-.012,.014,5,26).rotateY(Math.PI/2),e.rim),g=new Pt(new Be(.062,.07,.05,12).rotateZ(-Math.PI/2),e.rimDark);return h.add(d,g),h.position.x=t/2-.035,i.add(h),i.traverse(x=>{x.isMesh&&(x.castShadow=!0)}),i}var Zo=class{constructor(){this.root=new fe,this.body=new fe,this.root.add(this.body);let t=this.mats={paint:new vo({color:13619662,metalness:.12,roughness:.3,clearcoat:1,clearcoatRoughness:.13,envMapIntensity:1.1}),glass:new Ni({color:7031324,metalness:1,roughness:.24,envMapIntensity:1.35}),titan:new Ni({color:9277847,metalness:.92,roughness:.34}),trim:new Ni({color:789775,metalness:.3,roughness:.55}),tire:new Ni({color:1250327,roughness:.9,metalness:0}),rim:new Ni({color:10133157,metalness:.95,roughness:.3}),rimDark:new Ni({color:1513499,metalness:.7,roughness:.5}),brake:new Ni({color:4869458,metalness:.8,roughness:.45}),head:new Ae({color:16777215}),tail:new Ae({color:16719892}),nozzle:new Ae({color:0})};t.head.color.setRGB(3.4,3.5,3.8),t.tail.color.setRGB(3.4,.07,.05);let e=Ex();for(let o of["paint","glass","trim"]){let a=new Pt(e[o],t[o]);a.castShadow=!0,this.body.add(a)}let i=(o,a,l=!1)=>{let c=new Pt(o,a);return c.castShadow=l,this.body.add(c),c};{let o=[],a=[];for(let f=0;f<=16;f++){let d=zt(-.5,.5,f/16),g=zt(ur+.047,2.116,Math.abs(d)/.55);if(o.push(d,.298,g,d,.318,g),f>0){let x=(f-1)*2,p=f*2;a.push(x,p,x+1,p,p+1,x+1)}}let u=new Xt;u.setAttribute("position",new Et(o,3)),u.setIndex(a),i(u,t.head)}i(Xo(Wi+.012,Wi+.3,o=>zt(3.5,3.6,o),o=>zt(3.66,3.66,o),4),t.tail);{let o=[],a=[];for(let f=0;f<=14;f++){let d=zt(-.8,.8,f/14),g=Wi+.17*d*d-.034+Math.abs(d)*.012;if(o.push(d,.748,g,d,.766,g),f>0){let x=(f-1)*2,p=f*2;a.push(x,x+1,p,p,x+1,p+1)}}let u=new Xt;u.setAttribute("position",new Et(o,3)),u.setIndex(a),i(u,t.tail)}i(Xo(.74,.95,o=>zt(2.5,2.9,o),o=>zt(3.5,3.25,o),3),t.trim),i(Xo(.6,.612,2,4.95,1,.004,10),t.trim),i(Xo(-.66,-.648,2,4.95,1,.004,10),t.trim);for(let o of[-.42,-.14,.14,.42])i(new Oe(.02,.13,.3).translate(o,.43,Wi+.14),t.trim);for(let o of[1,-1])i(new Oe(.14,.02,.04).translate(o*.92,.868,.6),t.trim),i(new Oe(.03,.055,.13).translate(o*1,.878,.59),t.titan,!0).geometry.computeVertexNormals();this.nozzles=[];for(let o of[-.26,0,.26])i(new Be(.062,.075,.12,10).rotateX(Math.PI/2).translate(o,.56,Wi+.03),t.trim),i(new Sn(.052,10).rotateY(Math.PI).translate(o,.56,Wi-.032),t.nozzle),this.nozzles.push(new L(o,.56,Wi-.04));this.wheels=[];let n=[{z:ce.frontZ,s:1,r:ce.rFront,w:ce.wFront,front:!0},{z:ce.frontZ,s:-1,r:ce.rFront,w:ce.wFront,front:!0},{z:ce.rearZ,s:1,r:ce.rRear,w:ce.wRear},{z:ce.rearZ,s:-1,r:ce.rRear,w:ce.wRear}],r=this.jetMat=new Ae({color:new ft(1.2,2.6,3.4),transparent:!0,opacity:0,blending:$e,depthWrite:!1,side:De});for(let o of n){let a=new fe,l=new fe,c=new fe,h=o.s*(ce.trackHalf+(o.front?0:.012)-o.w/2+.13);a.position.set(h,o.r,o.z);let u=Tx(o.r,o.w,t);o.s<0&&(u.rotation.y=Math.PI),c.add(u),l.add(c),a.add(l);let f=new Pt(new Sn(o.r*.82,18).rotateY(o.s>0?Math.PI/2:-Math.PI/2),r);f.position.x=o.s*(o.w/2+.012),a.add(f),this.body.add(a),this.wheels.push({pivot:a,steer:l,spin:c,home:a.position.clone(),...o})}this.fold=0,this.spinAngle=0,this.setPaint(xi[0])}setPaint(t){let e=this.mats.paint;e.color.set(t.color),e.metalness=t.metal,e.roughness=Math.max(t.rough,.14),e.clearcoat=t.coat,this.paint=t}pose(t,e,i,n){this.fold=t,this.spinAngle+=i;let r=t*t*(3-2*t);for(let o of this.wheels)o.pivot.rotation.z=-o.s*r*Math.PI/2,o.pivot.position.set(zt(o.home.x,o.s*.74,r),zt(o.home.y,.31,r),o.home.z),o.steer.rotation.y=o.front?e*(1-r):0,o.spin.rotation.x=this.spinAngle*(1-r)+r*this.spinAngle*.2;this.jetMat.opacity=r*n}setLights(t,e){let i=this.mats.tail.color,n=1+t*1.6+e*.3;i.setRGB(3.4*n,.07*n,.05*n);let r=3.2+e*3;this.mats.head.color.setRGB(r,r*1.03,r*1.12)}setThrust(t){this.mats.nozzle.color.setRGB(3*t,5*t,7*t)}};var Ax=66,Rx=92,Jo=100,Cx=15,ku=23,Px=15,Hu=720,zc=2500,$o=1,Vu=1.15,Oc=1.15,wi=new Pe(0,0,0,"YXZ"),Gu=new Te,dr=new L,Re={h:0,surf:"road",box:null,water:!1},Ix={h:0,surf:"road",box:null,water:!1},Ko=class{constructor(t){this.world=t,this.pos=new L,this.prev=new L,this.vel=new L,this.quat=new Te,this.angVel=new L,this.events=[],this.near=[],this.safe={x:Ve.x,z:Ve.z,yaw:Ve.yaw},this.time=0,this.reset(Ve.x,Ve.z,Ve.yaw)}reset(t,e,i){this.world.ground(t,5e3,e,Re),this.pos.set(t,Math.max(Re.h,0),e),this.prev.copy(this.pos),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.yaw=i,this.pitch=0,this.roll=0,this.yawRate=0,this.mode="drive",this.fold=0,this.foldTarget=0,this.steer=0,this.speed=0,this.slip=0,this.boost=1,this.boosting=!1,this.braking=!1,this.thrust=0,this.lift=0,this.offGround=0,this.airTime=0,this.flyTime=0,this.launchAssist=0,this.recover=0,this.rollTrick=0,this.rollDir=0,this.pitchLock=!1,this.launching=!1,this.lastThrottle=0,this.surf="road",this.groundY=this.pos.y,this.alt=0,this.overWater=!1,this.lastRamp=null,this.lastRampT=-9,this.underT=-9,this.underAward=-9,this.hitT=-9,this.safeT=0,this.syncQuat()}syncQuat(){wi.set(this.pitch,this.yaw,this.roll+this.rollTrick,"YXZ"),this.quat.setFromEuler(wi)}eulerFromQuat(){wi.setFromQuaternion(this.quat,"YXZ"),this.yaw=wi.y,this.pitch=wi.x,this.roll=wi.z}emit(t,e){this.events.push(Object.assign({type:t},e))}engageFlight(t=!1){if(this.mode==="fly")return;let e=this.mode==="drive";this.mode==="air"&&this.eulerFromQuat(),this.mode="fly",this.launching=!1,this.foldTarget=1,this.flyTime=0,this.rollTrick=0,this.launchAssist=t?1.5:0,e&&(this.pos.y+=.25,this.vel.y=Math.max(this.vel.y,7.5),this.launchAssist=.45),this.emit("engage",{fromRamp:t,wasGround:e})}dropFlight(){this.mode==="fly"&&(this.syncQuat(),this.mode="air",this.foldTarget=0,this.airTime=0,this.angVel.set(0,0,0),this.emit("disengage",{}))}step(t,e){if(this.time+=t,this.prev.copy(this.pos),this.mode==="sunk"){this.vel.multiplyScalar(1-3*t),this.pos.addScaledVector(this.vel,t),this.thrust=this.lift=0,this.speed=0;return}e.fly&&(this.mode==="fly"?this.dropFlight():this.engageFlight(!1)),this.mode==="drive"?this.stepDrive(t,e):this.mode==="air"?this.stepAir(t,e):this.stepFly(t,e),this.collide(t),this.fold=It(this.fold+Math.sign(this.foldTarget-this.fold)*t/.42,0,1),Math.abs(this.fold-this.foldTarget)<t/.42&&(this.fold=this.foldTarget);let i=Math.hypot(this.pos.x,this.pos.z);if(i>zc){let n=Math.atan2(-this.pos.x,-this.pos.z);this.mode!=="air"?this.yaw=Ns(this.yaw,n,Qt(zc,zc+500,i)*1.6,t):(this.vel.x-=this.pos.x/i*30*t,this.vel.z-=this.pos.z/i*30*t),this.time-(this.edgeT||-9)>6&&(this.edgeT=this.time,this.emit("edge",{}))}this.mode!=="air"&&this.syncQuat(),this.speed=Math.hypot(this.vel.x,this.vel.z)}stepDrive(t,e){let i=this.world,n=this.pos;this.lastThrottle=e.throttle,this.steer=ue(this.steer,-e.steer,8,t);let r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this.vel.x*r+this.vel.z*o,l=this.offGround<.05,c=this.surf==="road"?1:this.surf==="grass"?.82:.66,h=e.shift&&Math.abs(a)>4,u=zt(.6,.075,Qt(0,72,Math.abs(a))),f=a*Math.tan(this.steer*u)/ce.wheelbase,d=(h?31:25)*c/Math.max(Math.abs(a),7);f=It(f,-d,d)*(h?1.5:1),l&&(this.yaw+=f*t),this.yawRate=f,r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this.vel.x*r+this.vel.z*o;let g=this.vel.x*o-this.vel.z*r,x=ce.trackHalf,p=(W,Q)=>i.ground(n.x+W*o+Q*r,n.y,n.z-W*r+Q*o,Ix).h,m=p(x,ce.frontZ),y=p(-x,ce.frontZ),M=p(x,ce.rearZ),v=p(-x,ce.rearZ);i.ground(n.x,n.y,n.z,Re);let C=(m+y)/2,w=(M+v)/2,E=Math.max(Re.h,(C+w)/2);this.surf=Re.surf,this.groundY=E,this.alt=n.y-E,this.overWater=Re.water,Re.box&&Re.box.kind==="ramp"&&(this.lastRamp=Re.box,this.lastRampT=this.time);let A=0;Math.abs(C-w)<1.6&&(A=(C-w)/ce.wheelbase,this.pitch=ue(this.pitch,-Math.atan(A),l?14:3,t)),Math.abs(m+M-y-v)<2.4&&(this.roll=ue(this.roll,Math.atan((m+M-y-v)/(4*x)),l?12:3,t)),this.boosting=e.boost&&this.boost>.01&&e.throttle>=0&&a>-1;let b=this.boosting?Rx:Ax,_=0;if(this.braking=!1,this.boosting||e.throttle>0){let W=this.boosting?1:e.throttle;a<0?_=30*W:_=(this.boosting?27:16)*W*It(1-Math.pow(a/b,2.2),-.4,1)}else e.throttle<0&&(a>.6?(_=36*e.throttle,this.braking=!0):_=10*e.throttle*It(1+a/Px,0,1));let P=this.surf==="road"?.35:this.surf==="grass"?2:3.4;_-=Math.sign(a)*P*Math.min(1,Math.abs(a)/2)+5e-4*a*Math.abs(a),h&&(_-=Math.sign(a)*5),!this.boosting&&e.throttle===0&&Math.abs(a)<.4&&(a=0),_-=ku*.75*A/Math.sqrt(1+A*A),l&&(a+=_*t*(this.surf==="road"?1:this.boosting?.9:.86),g*=Math.exp(-(h?2.3:11.5)*c*t)),this.slip=Math.abs(g),this.boost=It(this.boost+(this.boosting?-.3:.085)*t,0,1),this.thrust=ue(this.thrust,this.boosting?1:0,8,t),this.lift=ue(this.lift,0,6,t),this.vel.x=r*a+o*g,this.vel.z=o*a-r*g,n.x+=this.vel.x*t,n.z+=this.vel.z*t;let N=this.vel.y-ku*t,B=n.y+N*t;if(B>E+.015?(n.y=B,this.vel.y=N,this.offGround+=t,this.offGround>.085&&B-E>.4&&this.takeOff()):(this.vel.y=It((E-n.y)/t,-30,45),this.offGround>.2&&this.emit("thump",{impact:-N}),n.y=E,this.offGround=0),this.overWater&&n.y<-.55)return this.sink();l&&!this.overWater&&E>1.5&&this.time-this.safeT>1.2&&Math.abs(a)>2&&this.time-this.hitT>1.5&&(this.safeT=this.time,this.safe.x=n.x-r*4,this.safe.z=n.z-o*4,this.safe.yaw=this.yaw)}sink(){this.mode="sunk",this.vel.y=Math.max(this.vel.y,-3),this.boosting=this.braking=!1,this.emit("splash",{})}takeOff(){this.mode="air",this.airTime=this.offGround,this.pitchLock=this.lastThrottle>0,this.angVel.set(0,this.yawRate*.35,0),this.syncQuat();let t=this.time-this.lastRampT<.25?this.lastRamp:null,e=Math.hypot(this.vel.x,this.vel.z);this.emit("jump",{ramp:t,speed:e}),t&&t.launch&&e>36&&this.emit("launch",{ramp:t,speed:e})}stepAir(t,e){let i=this.pos;if(this.airTime+=t,this.steer=ue(this.steer,0,6,t),this.thrust=ue(this.thrust,0,8,t),this.boosting=!1,this.braking=!1,e.boostPressed&&this.airTime>.12&&this.recover<=0)return this.engageFlight(!1);this.vel.y-=Cx*t;let n=1-.035*t;this.vel.x*=n,this.vel.z*=n,i.addScaledVector(this.vel,t),this.pitchLock&&e.throttle<=0&&(this.pitchLock=!1);let r=this.launching?0:1,o=this.pitchLock?0:e.throttle*r,a=o!==0||e.steer*r!==0||e.roll*r!==0;this.angVel.x=ue(this.angVel.x,o*4.4,7,t),this.angVel.y=ue(this.angVel.y,-e.steer*3.8*r,7,t),this.angVel.z=ue(this.angVel.z,e.roll*6*r,7,t);let l=this.angVel,c=l.length();if(c>1e-4&&(Gu.setFromAxisAngle(dr.copy(l).divideScalar(c),c*t),this.quat.multiply(Gu).normalize()),this.recover>0||!a&&this.airTime>.3){wi.setFromQuaternion(this.quat,"YXZ");let h=this.recover>0?9:1.7;wi.x=ue(wi.x,It(-Math.atan2(this.vel.y,Math.max(8,Math.hypot(this.vel.x,this.vel.z)))*.35,-.3,.3),h,t),wi.z=ue(wi.z,0,h,t),this.quat.setFromEuler(wi),this.recover-=t}if(this.world.ground(i.x,i.y+.2,i.z,Re),this.groundY=Re.h,this.overWater=Re.water,this.alt=i.y-Math.max(Re.h,0),Re.water&&i.y<-.5)return this.sink();if(i.y<=Re.h){let h=-this.vel.y,u=dr.set(0,1,0).applyQuaternion(this.quat).y;i.y=Re.h,u>.5?(this.eulerFromQuat(),this.mode="drive",this.launching=!1,this.offGround=0,this.vel.y=0,this.surf=Re.surf,this.emit("land",{impact:h,airTime:this.airTime,clean:u>.9,fromFlight:!1,x:i.x,y:i.y,z:i.z})):(this.vel.y=It(h*.35,3.5,7),this.vel.x*=.6,this.vel.z*=.6,this.recover=.5,this.airTime=0,this.angVel.set(0,0,0),this.hitT=this.time,this.emit("crash",{impact:Math.max(h,8),flipped:!0}))}}stepFly(t,e){let i=this.pos,n=this.world;this.flyTime+=t,this.steer=ue(this.steer,-e.steer,6,t);let r=Math.hypot(this.vel.x,this.vel.z),o=It(r/Jo,0,1);this.yawRate=ue(this.yawRate,-e.steer*zt(1.75,.8,o),5.5,t),this.yaw+=this.yawRate*t;let a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=this.vel.x*a+this.vel.z*l,h=this.vel.x*l-this.vel.z*a;e.throttle>0?c+=26*e.throttle*It(1-c/Jo,0,1)*t:e.throttle<0?c+=(c>0?34:12*It(1+c/12,0,1))*e.throttle*t:c-=c*.2*t,h*=Math.exp(-3.4*t),this.vel.x=a*c+l*h,this.vel.z=l*c-a*h,this.braking=e.throttle<0&&c>1,this.boosting=!1;let u=e.boost?27:e.shift?-30:0;i.y>Hu-80&&(u=Math.min(u,(Hu-i.y)*.35));let f=-(2.5+this.alt*1.7);if(this.alt<14&&(u=Math.max(u,f)),this.launchAssist-=t,this.vel.y=ue(this.vel.y,u,this.launchAssist>0&&!e.shift?.35:this.alt<14&&this.vel.y<f?11:3.3,t),i.addScaledVector(this.vel,t),this.thrust=ue(this.thrust,.35+.65*Math.max(0,e.throttle)*(1-o*.4)+(e.boost?.3:0),6,t),this.lift=ue(this.lift,.55+(e.boost?.45:0)-(e.shift?.25:0),6,t),this.pitch=ue(this.pitch,It(-Math.atan2(this.vel.y,Math.max(Math.abs(c),24))*.9+e.throttle*.035,-.7,.7),5,t),this.roll=ue(this.roll,It(-this.yawRate*(.3+.42*o),-1,1),5,t),this.rollDir===0&&e.roll!==0&&this.flyTime>.3&&(this.rollDir=e.roll,this.rollT=0),this.rollDir!==0){this.rollT+=t/.72;let m=Math.min(this.rollT,1),y=m*m*(3-2*m);this.rollTrick=this.rollDir*y*Math.PI*2,m>=1&&(this.rollTrick=0,this.emit("barrel",{}),this.rollDir=0)}n.ground(i.x,i.y+.6,i.z,Re);let d=Re.water,g=d?0:Re.h;this.groundY=g,this.overWater=d,this.alt=i.y-g,this.surf=Re.surf;let x=!d&&this.rollDir===0&&(this.alt<4&&this.vel.y<-.6||e.shift&&this.alt<9);this.foldTarget=x?0:1;let p=d?.6:.5*this.fold;if(!d&&this.foldTarget===0&&this.fold<.4&&i.y<=g+.03){let m=-this.vel.y;i.y=g,this.mode="drive",this.offGround=0,this.vel.y=0,this.rollTrick=0,this.rollDir=0,this.emit("land",{impact:m,airTime:this.flyTime,clean:!0,fromFlight:!0,x:i.x,y:i.y,z:i.z,box:Re.box});return}if(i.y<g+p){if((g+p-i.y)/t>46&&r>20&&!d){n.terrain.normalAt(i.x,i.z,dr);let y=this.vel.dot(dr);y<0&&this.vel.addScaledVector(dr,-1.5*y),this.vel.multiplyScalar(.62),this.hitT=this.time,this.emit("crash",{impact:Math.max(10,-y)})}else this.vel.y<-17&&!d?(this.vel.y=5,this.vel.x*=.75,this.vel.z*=.75,this.hitT=this.time,this.emit("crash",{impact:12})):this.vel.y<0&&(this.vel.y=ue(this.vel.y,0,14,t));i.y=Math.max(i.y,zt(i.y,g+p,1-Math.exp(-18*t))),i.y<g+.05&&(i.y=g+.05),this.skim=d?"water":"ground"}else this.skim=this.alt<3.2?d?"water":"ground":null}collide(t){let e=this.world,i=this.pos,n=Math.sin(this.yaw),r=Math.cos(this.yaw),o=e.colliders.near(i.x,i.z),a=i.y+.12,l=i.y+Oc,c=this.speed,h=this.stamp=(this.stamp||0)+1,u=!1;if(o)for(let f=0;f<2;f++){let d=(f?-1:1)*Vu*n,g=(f?-1:1)*Vu*r;for(let x=0;x<o.length;x++){let p=o[x],m=i.x+d-p.x,y=i.z+g-p.z,M=m*p.c-y*p.s,v=m*p.s+y*p.c,C=Math.abs(M)-p.hx,w=Math.abs(v)-p.hz;if(C>6||w>6)continue;let E=$n.topAt(p,v);if(a>=E-.55)continue;let A=C<0&&w<0;if(l<=p.y0){A&&p.kind==="deck"&&p.y0-l<14&&(u=!0);continue}let b=A?-1:Math.hypot(Math.max(C,0),Math.max(w,0))-$o;if(b>=0){if(b<4.2&&c>26&&!p.quiet){let k=this.near.find(lt=>lt.box===p);k||this.near.push(k={box:p,gap:b,stamp:h}),k.gap=Math.min(k.gap,b),k.stamp=h}continue}if(A&&this.prev.y+Oc<=p.y0+.3&&this.vel.y>0){i.y=p.y0-Oc-.02,this.vel.y=-1;continue}let _,P,N;if(A)-C<-w?(_=Math.sign(M)||1,P=0,N=-C+$o):(_=0,P=Math.sign(v)||1,N=-w+$o);else{let k=M-It(M,-p.hx,p.hx),lt=v-It(v,-p.hz,p.hz),ut=Math.hypot(k,lt)||1e-6;_=k/ut,P=lt/ut,N=$o-ut}let B=_*p.c+P*p.s,W=-_*p.s+P*p.c;i.x+=B*N,i.z+=W*N;let Q=this.vel.x*B+this.vel.z*W;if(Q<0){let k=this.mode==="fly"?1.4:1.22;this.vel.x-=B*Q*k,this.vel.z-=W*Q*k;let lt=1-Math.min(.3,-Q*.012);this.vel.x*=lt,this.vel.z*=lt,-Q>3.5&&this.time-this.hitT>.25&&(this.hitT=this.time,this.emit(-Q>9?"crash":"scrape",{impact:-Q,x:i.x+d-B,y:i.y+.5,z:i.z+g-W}))}let X=n*B+r*W;if(X<-.05&&this.mode!=="air"){let k=n-B*X,lt=r-W*X;Math.hypot(k,lt)<.25&&(k=-W,lt=B),this.yaw=Ns(this.yaw,Math.atan2(k,lt),this.mode==="fly"?8:5,t)}let it=this.near.findIndex(k=>k.box===p);it>=0&&this.near.splice(it,1)}}for(let f=this.near.length-1;f>=0;f--){let d=this.near[f];d.stamp!==h&&(this.near.splice(f,1),this.time-this.hitT>.7&&this.time-(d.box.nearT||-9)>5&&(d.box.nearT=this.time,this.emit("near",{gap:d.gap,kind:d.box.kind})))}u?this.underT=this.time:this.time-this.underT<.1&&this.time-this.underAward>6&&c>22&&this.mode!=="drive"&&this.time-this.hitT>1&&(this.underAward=this.time,this.emit("under",{}));for(let f of e.spheres){let d=i.x-f.x,g=i.y+.6-f.y,x=i.z-f.z,p=f.r+1.1,m=d*d+g*g+x*x;if(m<p*p){let y=Math.sqrt(m)||1,M=d/y,v=g/y,C=x/y;i.x+=M*(p-y),i.y+=v*(p-y),i.z+=C*(p-y);let w=this.vel.x*M+this.vel.y*v+this.vel.z*C;w<0&&(this.vel.x-=M*w*1.5,this.vel.y-=v*w*1.5,this.vel.z-=C*w*1.5,this.time-this.hitT>.3&&(this.hitT=this.time,this.emit("crash",{impact:Math.max(9,-w),soft:!0})))}else m<(p+5)*(p+5)&&c>26&&this.time-(f.nearT||-9)>6&&this.time-this.hitT>1?f.pending=this.time:f.pending&&m>(p+9)*(p+9)&&(this.time-f.pending<2&&this.time-this.hitT>1&&(f.nearT=this.time,this.emit("near",{gap:2,kind:"balloon"})),f.pending=0)}}respawn(){let t=this.safe,e=this.boost;this.reset(t.x,t.z,t.yaw),this.boost=e}};var si=new L,_e=new L,fr=new L,ln={h:0},Qo=class{constructor(t,e){this.cam=t,this.world=e,this.yaw=0,this.orbitYaw=0,this.orbitPitch=0,this.manual=0,this.zoom=1,this.focus=new L,this.look=new L,this.fov=60,this.shake=0,this.kick=0,this.roll=0,this.time=0,this.cine=null,this.orbit={yaw:.7,pitch:.16,dist:7,roll:0,fov:42,panX:0,panY:0},this.sens=1,this.snapNext=!0}snap(t){this.yaw=t.yaw,this.focus.copy(t.pos).y+=1.05,this.orbitYaw=this.orbitPitch=0,this.snapNext=!0}addShake(t){this.shake=Math.min(1.2,this.shake+t)}aspectFov(t){let e=this.cam.aspect;if(e>=1.2)return t;let i=2*Math.atan(Math.tan(t*Math.PI/360)*1.2);return It(2*Math.atan(Math.tan(i/2)/e)*180/Math.PI,t,96)}startCinematic(t,e){let i=Math.sin(t.yaw),n=Math.cos(t.yaw),r=this.world.sky.v.sunDir,o=r.x*n-r.z*i>0?1:-1,a=new L(t.pos.x+i*21+n*o*10.5,t.pos.y+.6,t.pos.z+n*21-i*o*10.5);this.world.ground(a.x,a.y+50,a.z,ln),a.y=Math.max(a.y,ln.h+1.4),this.cine={t:0,duration:e,pos:a,side:o}}update(t,e,i,n={}){this.time+=t;let r=this.cam,o=e.speed,a=e.mode==="fly",l=It(o/Jo,0,1),c=e.yaw;if(e.mode==="air")c=o>6?Math.atan2(e.vel.x,e.vel.z):this.yaw;else if(o>9&&e.mode==="drive"){let M=Math.atan2(e.vel.x,e.vel.z);c=Math.cos(M-e.yaw)>0?e.yaw+It(Math.atan2(Math.sin(M-e.yaw),Math.cos(M-e.yaw)),-.6,.6)*.45:e.yaw}n.lookBack&&(c+=Math.PI),this.yaw=this.snapNext?c:Ns(this.yaw,c,n.lookBack?14:3.2+l*4,t),i&&(i.x||i.y)&&(this.orbitYaw-=i.x*.0052*this.sens,this.orbitPitch=It(this.orbitPitch+i.y*.004*this.sens,-.5,1.15),this.manual=2.2),i&&i.zoom&&(this.zoom=It(this.zoom+i.zoom*.1,.7,2.2)),this.manual-=t,this.manual<=0&&o>3&&(this.orbitYaw=Ns(this.orbitYaw,0,2.5,t),this.orbitPitch=ue(this.orbitPitch,0,2.5,t));let h=r.aspect<1?1.22:1,u=(a?8.2+l*3:6.5+l*2.2)*this.zoom*h,f=It(e.vel.y/40,-.5,.5),d=It((a?.21:.19)+this.orbitPitch-(a||e.mode==="air"?f*.28:0),-.45,1.3),g=this.yaw+this.orbitYaw;si.copy(e.pos),si.y+=1.05,this.snapNext?this.focus.copy(si):(this.focus.x=ue(this.focus.x,si.x,22,t),this.focus.z=ue(this.focus.z,si.z,22,t),this.focus.y=ue(this.focus.y,si.y,12,t)),_e.set(this.focus.x-Math.sin(g)*Math.cos(d)*u,this.focus.y+Math.sin(d)*u+.25,this.focus.z-Math.cos(g)*Math.cos(d)*u);for(let M=0;M<5&&(this.world.ground(_e.x,_e.y+400,_e.z,ln),!(_e.y>=ln.h+.9));M++){if(M===4||ln.h-_e.y<3){_e.y=ln.h+.9;break}_e.lerp(this.focus,.3)}let x=2+o*.035;fr.set(this.focus.x+Math.sin(this.yaw)*x*(n.lookBack?-1:1),this.focus.y+.25+(a?f*2.2:0),this.focus.z+Math.cos(this.yaw)*x*(n.lookBack?-1:1)),this.kick=ue(this.kick,e.boosting?1:0,5,t);let p=58+Qt(0,1,l)*17+this.kick*6,m=a?e.roll*.22:-e.yawRate*.012*l;if(this.cine){let M=this.cine;M.t+=n.realDt??t;let v=M.t/M.duration,C=Qt(.7,1,v),w=si.copy(e.pos);w.y+=.7;let E=M.pos,A=Tu(It(v/.75,0,1));E.y+=(n.realDt??t)*.5;let b=E.x+Math.sin(e.yaw)*A*5,_=E.z+Math.cos(e.yaw)*A*5;_e.set(zt(b,_e.x,C),zt(E.y,_e.y,C),zt(_,_e.z,C)),fr.lerpVectors(w,fr,C),p=zt(34-A*4,p,C),m=zt(-M.side*.06,m,C),v>=1&&(this.cine=null)}this.shake=Math.max(0,this.shake-t*2.4);let y=this.shake*this.shake*.35+(e.boosting?.012:0)+(a?l*.008:0);if(y>0){let M=this.time;_e.x+=Math.sin(M*61)*y,_e.y+=Math.sin(M*73+1)*y,_e.z+=Math.sin(M*67+2)*y}r.position.copy(_e),this.look.copy(fr),r.up.set(0,1,0),r.lookAt(fr),this.roll=this.snapNext?m:ue(this.roll,m,4,t),r.rotateZ(this.roll),this.fov=this.snapNext?p:ue(this.fov,p,5,t),r.fov=this.aspectFov(this.fov),r.near=zt(.6,3,Qt(6,60,e.alt||0)),r.updateProjectionMatrix(),this.snapNext=!1}updateOrbit(t,e,i,n=0){let r=this.orbit,o=this.cam;i&&((i.x||i.y)&&(r.yaw-=i.x*.006,r.pitch=It(r.pitch+i.y*.005,-.25,1.45)),i.zoom&&(r.dist=It(r.dist*(1+i.zoom*.08),3.6,60))),r.yaw+=n*t;let a=e.yaw,l=Math.cos(a),c=Math.sin(a);si.copy(e.pos),si.y+=.62+r.panY,si.x+=l*r.panX,si.z-=c*r.panX;let h=a+r.yaw,u=o.aspect<1?1.35:1,f=r.dist*u;_e.set(si.x+Math.sin(h)*Math.cos(r.pitch)*f,si.y+Math.sin(r.pitch)*f,si.z+Math.cos(h)*Math.cos(r.pitch)*f),this.world.ground(_e.x,_e.y+400,_e.z,ln),_e.y<ln.h+.35&&(_e.y=ln.h+.35),_e.y<.4&&(_e.y=.4),o.position.copy(_e),o.up.set(0,1,0),o.lookAt(si),o.rotateZ(r.roll),o.fov=o.aspect<1?It(r.fov*1.25,20,100):r.fov,o.near=.3,o.updateProjectionMatrix(),this.snapNext=!0,this.yaw=e.yaw,this.focus.copy(e.pos).y+=1.05}};var Lx=`
attribute float size;
attribute vec4 tint;
uniform float uScale;
varying vec4 vTint;
void main() {
  vTint = tint;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,Dx=`
varying vec4 vTint;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.25, d) * vTint.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vTint.rgb, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,jo=class{constructor(t,e){this.n=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.tint=new Float32Array(t*4),this.size=new Float32Array(t),this.life=new Float32Array(t),this.max=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.a0=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.next=0;let i=new Xt;i.setAttribute("position",new be(this.pos,3).setUsage(Xn)),i.setAttribute("tint",new be(this.tint,4).setUsage(Xn)),i.setAttribute("size",new be(this.size,1).setUsage(Xn)),this.mat=new pe({vertexShader:Lx,fragmentShader:Dx,uniforms:{uScale:{value:600}},transparent:!0,depthWrite:!1,blending:e?$e:yn}),this.points=new Cs(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=e?6:5}spawn(t,e,i,n,r,o,a,l,c,h,u,f,d,g=0,x=0){let p=this.next;this.next=(p+1)%this.n,this.pos[p*3]=t,this.pos[p*3+1]=e,this.pos[p*3+2]=i,this.vel[p*3]=n,this.vel[p*3+1]=r,this.vel[p*3+2]=o,this.tint[p*4]=h,this.tint[p*4+1]=u,this.tint[p*4+2]=f,this.tint[p*4+3]=d,this.life[p]=this.max[p]=a,this.s0[p]=l,this.s1[p]=c,this.a0[p]=d,this.grav[p]=g,this.drag[p]=x,this.size[p]=l}update(t){let{pos:e,vel:i,tint:n,size:r,life:o,max:a,n:l}=this;for(let h=0;h<l;h++){if(o[h]<=0)continue;if(o[h]-=t,o[h]<=0){r[h]=0,n[h*4+3]=0;continue}let u=1-o[h]/a[h],f=1-this.drag[h]*t;i[h*3]*=f,i[h*3+1]=i[h*3+1]*f-this.grav[h]*t,i[h*3+2]*=f,e[h*3]+=i[h*3]*t,e[h*3+1]+=i[h*3+1]*t,e[h*3+2]+=i[h*3+2]*t,r[h]=zt(this.s0[h],this.s1[h],u),n[h*4+3]=this.a0[h]*(1-u)*Math.min(1,u*12)}let c=this.points.geometry;c.attributes.position.needsUpdate=!0,c.attributes.tint.needsUpdate=!0,c.attributes.size.needsUpdate=!0}},Ux=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Nx=`
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
}`,Jt=s=>(Math.random()-.5)*2*s,Ie=new L,Wu=new L,Xu=new Te,ta=class{constructor(t,e){this.scene=t,this.model=e,this.add=new jo(700,!0),this.alpha=new jo(600,!1),t.add(this.add.points,this.alpha.points),this.time=0;let i=()=>new pe({vertexShader:Ux,fragmentShader:Nx,transparent:!0,depthWrite:!1,blending:$e,side:De,uniforms:{uTime:{value:0},uPower:{value:0},uCore:{value:new ft(1,1,1)},uEdge:{value:new ft(.25,.6,1)}}});this.rearMat=i(),this.liftMat=i();let n=new Be(.085,.02,1,10,1,!0).rotateX(Math.PI/2).translate(0,0,-.5);{let h=n.attributes.uv,u=n.attributes.position;for(let f=0;f<h.count;f++)h.setY(f,1+u.getZ(f))}this.rear=[];for(let h of e.nozzles){let u=new Pt(n,this.rearMat);u.position.copy(h),u.visible=!1,e.body.add(u),this.rear.push(u)}let r=new Be(.26,.06,1,12,1,!0).translate(0,-.5,0);{let h=r.attributes.uv,u=r.attributes.position;for(let f=0;f<h.count;f++)h.setY(f,1+u.getY(f))}this.lifts=[];for(let h of e.wheels){let u=new Pt(r,this.liftMat);u.position.set(h.s*.74,.17,h.z),u.visible=!1,e.body.add(u),this.lifts.push(u)}let o=this.trailN=26;this.trails=[],this.trailMat=new Ae({vertexColors:!0,transparent:!0,blending:$e,depthWrite:!1,side:De,fog:!1});for(let h=0;h<2;h++){let u=new Xt,f=new Float32Array(o*2*3),d=new Float32Array(o*2*3),g=[];for(let p=0;p<o-1;p++)g.push(p*2,p*2+1,p*2+2,p*2+2,p*2+1,p*2+3);u.setAttribute("position",new be(f,3).setUsage(Xn)),u.setAttribute("color",new be(d,3).setUsage(Xn)),u.setIndex(g);let x=new Pt(u,this.trailMat);x.frustumCulled=!1,x.renderOrder=6,t.add(x),this.trails.push({mesh:x,pts:[],local:new L((h?-1:1)*.74,.757,-2.14)})}this.trailPower=0,this.trailAcc=0;let a=this.streakN=40;this.streakPos=new Float32Array(a*6),this.streakSeed=[];for(let h=0;h<a;h++)this.streakSeed.push(new L(Jt(1),Jt(1),Math.random()));let l=new Xt;l.setAttribute("position",new be(this.streakPos,3).setUsage(Xn)),this.streakMat=new kn({color:16777215,transparent:!0,opacity:0,blending:$e,depthWrite:!1,fog:!1}),this.streaks=new Rs(l,this.streakMat),this.streaks.frustumCulled=!1,this.streaks.renderOrder=7,t.add(this.streaks),this.waves=[];let c=new Is(.82,1,40);for(let h=0;h<3;h++){let u=new Pt(c,new Ae({color:new ft(2.2,3.2,4),transparent:!0,opacity:0,blending:$e,depthWrite:!1,side:De,fog:!1}));u.visible=!1,u.renderOrder=6,t.add(u),this.waves.push({m:u,t:1,size:8})}}reset(){for(let t of this.trails)t.pts.length=0}shockwave(t,e,i=9,n=12577279){let r=this.waves.find(o=>o.t>=1)||this.waves[0];r.t=0,r.size=i,r.m.position.copy(t),r.m.quaternion.setFromUnitVectors(Ie.set(0,0,1),Wu.copy(e).normalize()),r.m.visible=!0}burst(t,e,i,n,r=0,o=0,a=0,l=12){let c=this.add,h=this.alpha;for(let u=0;u<l;u++)t==="spark"?c.spawn(e,i,n,r*.4+Jt(7),o*.4+Math.random()*6,a*.4+Jt(7),.35+Math.random()*.4,.22,.05,3,1.6,.5,1,16,1.5):t==="dust"?h.spawn(e+Jt(1.2),i+.2,n+Jt(1.2),r*.25+Jt(3),.6+Math.random()*2,a*.25+Jt(3),.8+Math.random()*.7,.8,3.6,.78,.7,.6,.34,-.4,1.6):t==="splash"?h.spawn(e+Jt(1.5),i,n+Jt(1.5),r*.3+Jt(5),4+Math.random()*9,a*.3+Jt(5),.7+Math.random()*.6,.6,2.2,.92,.97,1,.6,14,.6):t==="ring"?c.spawn(e+Jt(6),i+Jt(6),n+Jt(6),r*.5+Jt(6),o*.5+Jt(6),a*.5+Jt(6),.5+Math.random()*.5,.5,.05,.5,2.2,3,1,0,1):t==="ignite"?c.spawn(e,i,n,r+Jt(9),o+Jt(9),a+Jt(9),.3+Math.random()*.45,.9,.1,1.6,2.6,4,1,0,2.5):t==="confetti"&&c.spawn(e+Jt(1),i+1,n+Jt(1),Jt(6),4+Math.random()*6,Jt(6),.8+Math.random()*.6,.3,.1,1+Math.random()*2,1+Math.random()*2,1+Math.random()*2,1,9,1)}update(t,e,i,n){this.time+=t;let r=this.time,o=this.model.body,a=n/(2*Math.tan(i.fov*Math.PI/360));this.add.mat.uniforms.uScale.value=a,this.alpha.mat.uniforms.uScale.value=a;let l=e.thrust*(e.mode==="fly"?1:.85);this.rearMat.uniforms.uTime.value=r,this.rearMat.uniforms.uPower.value=It(l*1.3,0,1.25);for(let y of this.rear){y.visible=l>.02;let M=.5+l*(e.mode==="fly"?2.6:1.9)+Math.sin(r*47)*.08;y.scale.set(1+l*.5,1+l*.5,M)}let c=e.fold*e.lift;this.liftMat.uniforms.uTime.value=r+3,this.liftMat.uniforms.uPower.value=It(c*1.1,0,1.1);for(let y of this.lifts)y.visible=c>.02,y.scale.set(1,.5+c*1.5+Math.sin(r*41+y.position.z)*.06,1);this.model.setThrust(Math.max(l,c*.3));let h=e.speed,u=e.pos,f=Math.sin(e.yaw),d=Math.cos(e.yaw);if(l>.5&&Math.random()<t*60*l&&(Ie.set(Jt(.3),.56,-2.3).applyQuaternion(e.quat).add(u),this.add.spawn(Ie.x,Ie.y,Ie.z,e.vel.x*.6-f*6+Jt(1.5),e.vel.y*.6+Jt(1.5),e.vel.z*.6-d*6+Jt(1.5),.25+Math.random()*.25,.4,.05,.7,1.7,3.2,.9,0,2)),e.mode==="drive"&&e.offGround<.05&&h>4){let y=e.surf!=="road",M=e.slip>5.5,v=(y?Qt(4,40,h)*34:0)+(M?44:0);if(v>0&&Math.random()<t*v){let C=Math.random()<.5?1:-1;Ie.set(C*ce.trackHalf,.1,ce.rearZ).applyQuaternion(e.quat).add(u);let w=y?e.surf==="sand"?[.86,.78,.62]:[.62,.58,.46]:[.85,.85,.88];this.alpha.spawn(Ie.x,Ie.y,Ie.z,e.vel.x*.25+Jt(1.2),.8+Math.random()*1.6,e.vel.z*.25+Jt(1.2),.7+Math.random()*.7,.7,y?3.4:2.6,w[0],w[1],w[2],y?.32:.22,-.3,1.4)}}if(e.mode==="fly"&&e.skim&&h>14&&e.alt<3.2){let y=Qt(14,70,h)*(1-e.alt/3.4);if(Math.random()<t*90*y){let M=e.skim==="water",v=u.x-f*1.6+Jt(.9),C=u.z-d*1.6+Jt(.9),w=e.groundY+.15;M?this.alpha.spawn(v,w,C,e.vel.x*.35+Jt(4),2.5+Math.random()*5,e.vel.z*.35+Jt(4),.6+Math.random()*.6,.7,3,.9,.96,1,.5,9,.8):this.alpha.spawn(v,w,C,e.vel.x*.3+Jt(3),1+Math.random()*2.5,e.vel.z*.3+Jt(3),.7+Math.random()*.6,.8,3.6,.72,.66,.54,.3,-.2,1.2)}}if(e.mode==="fly"&&e.alt<5&&!e.overWater&&Math.random()<t*22*(1-e.alt/5)){let y=Math.random()*6.28;this.alpha.spawn(u.x+Math.cos(y)*1.3,e.groundY+.15,u.z+Math.sin(y)*1.3,Math.cos(y)*7,.6,Math.sin(y)*7,.6,.6,2.6,.75,.7,.6,.22,0,2.4)}this.add.update(t),this.alpha.update(t);let g=e.mode==="fly"?Qt(20,60,h):e.boosting?1:Qt(46,62,h)*.7;this.trailPower=zt(this.trailPower,g,1-Math.exp(-4*t)),this.trailAcc+=Math.hypot(e.vel.x,e.vel.y,e.vel.z)*t;let x=this.trailAcc>.3;x&&(this.trailAcc=0);let p=this.trailN;for(let y of this.trails){if(Ie.copy(y.local).applyQuaternion(e.quat).add(u),y.pts.length===0)for(let C=0;C<p;C++)y.pts.push(Ie.clone());if(x){let C=y.pts.pop();C.copy(Ie),y.pts.unshift(C)}else y.pts[0].copy(Ie);let M=y.mesh.geometry.attributes.position,v=y.mesh.geometry.attributes.color;for(let C=0;C<p;C++){let w=y.pts[C],E=1-C/(p-1),A=E*E*this.trailPower;M.setXYZ(C*2,w.x,w.y-.02-.02*E,w.z),M.setXYZ(C*2+1,w.x,w.y+.02+.02*E,w.z),v.setXYZ(C*2,3.4*A,.2*A,.12*A),v.setXYZ(C*2+1,3.4*A,.2*A,.12*A)}M.needsUpdate=v.needsUpdate=!0,y.mesh.visible=this.trailPower>.01}let m=Qt(58,100,h)*.22;if(this.streakMat.opacity=m,this.streaks.visible=m>.01,m>.01){let y=Math.hypot(e.vel.x,e.vel.y,e.vel.z)||1,M=e.vel.x/y,v=e.vel.y/y,C=e.vel.z/y;Xu.setFromUnitVectors(Ie.set(0,0,1),Wu.set(M,v,C));let w=90,E=1+h*.035;for(let A=0;A<this.streakN;A++){let b=this.streakSeed[A];b.z-=h*t/w,b.z<0&&(b.z+=1,b.x=Jt(1),b.y=Jt(1));let _=9+Math.abs(b.x)*16;Ie.set(Math.cos(b.y*3.14159)*_,Math.sin(b.y*3.14159)*_*.7+1,(b.z-.35)*w).applyQuaternion(Xu).add(u),this.streakPos[A*6]=Ie.x,this.streakPos[A*6+1]=Ie.y,this.streakPos[A*6+2]=Ie.z,this.streakPos[A*6+3]=Ie.x-M*E,this.streakPos[A*6+4]=Ie.y-v*E,this.streakPos[A*6+5]=Ie.z-C*E}this.streaks.geometry.attributes.position.needsUpdate=!0}for(let y of this.waves){if(y.t>=1)continue;y.t+=t/.55;let M=Math.min(y.t,1),v=1-Math.pow(1-M,3);y.m.scale.setScalar(.6+v*y.size),y.m.material.opacity=(1-M)*.9,M>=1&&(y.m.visible=!1)}}};var Ei={music:{loop:[1,116.86954648526077]},motor:{loop:[.25,4]},hum:{loop:[.25,4]},jet:{loop:[.25,4]},lift:{loop:[.25,4.6]},wind:{loop:[.25,5]},skid:{loop:[.25,1.7]},click:{},tick:{},ring:{},bank:{},bankBig:{},unlock:{},thud:{},land:{},crash:{},crash2:{},scrape:{},ignite:{},fold:{},unfold:{},whoosh:{},whoosh2:{},splash:{},shutter:{}};var Fx="assets/audio/",zx=["motor","hum","jet","lift","wind","skid"],ea=class{constructor(){this.ctx=null,this.vol={master:.8,music:.55,sfx:.9},this.muted=!1,this.paused=!1,this.buffers={},this.layers=null,this.state="idle"}unlock(){if(this.ctx){this.ctx.state==="suspended"&&!this.paused&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let i=e.createDynamicsCompressor();i.threshold.value=-12,i.ratio.value=4,i.attack.value=.005,i.release.value=.2,this.master.connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.music=e.createGain(),this.music.connect(this.master),this.world=e.createGain(),this.world.connect(this.sfx),this.world.gain.value=0,this.applyVolumes(),this.load()}async fetchBuffer(t){let e=await fetch(`${Fx}${t}.mp3`);if(!e.ok)throw new Error(`missing ${t}`);let i=await e.arrayBuffer();return new Promise((n,r)=>this.ctx.decodeAudioData(i,n,r))}async load(){if(this.state!=="idle")return;this.state="loading";let t=Object.keys(Ei).filter(e=>e!=="music");await Promise.all(t.map(async e=>{try{this.buffers[e]=await this.fetchBuffer(e)}catch{}})),this.startLayers(),this.state="ready";try{let e=await this.fetchBuffer("music"),i=this.ctx.createGain();i.gain.value=0,i.gain.linearRampToValueAtTime(1,this.ctx.currentTime+3),this.loopSource(e,Ei.music.loop,i).connect(this.music)}catch{}}loopSource(t,e,i){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=!0,n.loopStart=e[0],n.loopEnd=e[0]+e[1],n.connect(i),n.start(0,e[0]),i}startLayers(){let t=this.ctx,e={};for(let i of zx){let n=this.buffers[i];if(!n)continue;let r=t.createBufferSource();r.buffer=n,r.loop=!0,r.loopStart=Ei[i].loop[0],r.loopEnd=Ei[i].loop[0]+Ei[i].loop[1];let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=18e3;let a=t.createGain();a.gain.value=0,r.connect(o).connect(a).connect(this.world),r.start(0,Ei[i].loop[0]+Math.random()*Ei[i].loop[1]*.5),e[i]={src:r,filter:o,gain:a}}if(this.buffers.wind){let i=t.createBufferSource();i.buffer=this.buffers.wind,i.loop=!0,i.loopStart=Ei.wind.loop[0],i.loopEnd=Ei.wind.loop[0]+Ei.wind.loop[1],i.playbackRate.value=.5;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=420;let r=t.createGain();r.gain.value=0,i.connect(n).connect(r).connect(this.world),i.start(0,Ei.wind.loop[0]+1.3),e.road={src:i,filter:n,gain:r}}this.layers=e}setVolumes(t){Object.assign(this.vol,t),this.applyVolumes()}setMuted(t){this.muted=t,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted?0:this.vol.master,t,.03),this.sfx.gain.setTargetAtTime(this.vol.sfx,t,.03),this.music.gain.setTargetAtTime(this.vol.music*.8,t,.05)}suspend(t){this.paused=t,this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}play(t,e={}){if(!this.ctx||this.ctx.state!=="running")return;let i=this.buffers[t];if(!i)return;let n=this.ctx.createBufferSource();n.buffer=i,n.playbackRate.value=(e.rate||1)*(e.vary?1+(Math.random()-.5)*e.vary:1);let r=this.ctx.createGain();r.gain.value=e.gain??1,n.connect(r).connect(this.sfx),n.start()}update(t,e,i,n=1){let r=this.layers;if(!this.ctx||this.ctx.state!=="running"||!r)return;let o=this.ctx.currentTime,a=(g,x,p=.07)=>g.setTargetAtTime(x,o,p);a(this.world.gain,i?1:0,.12);let l=e.speed,c=It(l/95,0,1),h=e.mode==="fly",u=e.mode==="drive"&&e.offGround<.08,f=e.boosting?1:u?.6:.35,d=zt(.6,1,n);r.motor&&(a(r.motor.src.playbackRate,(.5+c*1.5)*(e.boosting?1.1:1)*d),a(r.motor.gain.gain,(.05+c*.2)*f*(h?.4:1)),a(r.motor.filter.frequency,900+c*5e3+f*1500)),r.hum&&(a(r.hum.src.playbackRate,(.7+c*.7)*d),a(r.hum.gain.gain,.05+c*.1*f)),r.road&&(a(r.road.gain.gain,u?c*(e.surf==="road"?.5:.85):0),a(r.road.filter.frequency,e.surf==="road"?320+c*380:220+c*200)),r.wind&&(a(r.wind.gain.gain,c*c*(h||!u?.75:.4)),a(r.wind.src.playbackRate,.75+c*.6)),r.jet&&(a(r.jet.gain.gain,e.thrust*.55),a(r.jet.src.playbackRate,(.8+e.thrust*.45)*d)),r.lift&&(a(r.lift.gain.gain,e.fold*e.lift*.4),a(r.lift.src.playbackRate,(.85+e.lift*.35)*d)),r.skid&&(a(r.skid.gain.gain,u&&e.surf==="road"?It((e.slip-4)/11,0,1)*.5:0,.05),a(r.skid.src.playbackRate,.9+It(e.slip,0,20)*.012))}};var Bc=Math.PI*2,ia=class{constructor(t){this.game=t,this.pot=0,this.mult=1,this.timer=0,this.lines=[],this.rot={x:0,y:0,z:0},this.drift={t:0,pts:0,gap:0},this.skimT=0,this.chain=new Map,this.time=0,this.lastTouchdown=-99}add(t,e,i){e=Math.round(e),this.pot+=e,this.mult=Math.min(10,this.mult+(this.lines.length?1:0)),this.timer=4.2,this.lines.push({name:t,pts:e}),this.lines.length>4&&this.lines.shift(),this.game.car.boost=Math.min(1,this.game.car.boost+.06+e/4e3),this.game.ui.combo(this,!0),i||this.game.audio.play("tick",{rate:1+Math.min(this.mult,10)*.06})}bank(){if(this.pot<=0)return;let t=this.pot*this.mult,e=kt.data,i=e.points;e.points+=t,t>e.stats.bestCombo&&(e.stats.bestCombo=t),this.game.ui.banked(t,this.mult),this.game.audio.play(t>=2e3?"bankBig":"bank"),this.pot=0,this.mult=1,this.lines=[],this.timer=0,this.game.ui.combo(this,!1);for(let n of xi)n.cost>i&&n.cost<=e.points&&!e.unlocked.includes(n.id)&&(e.unlocked.push(n.id),this.game.onUnlock(n));kt.touch()}fail(){this.pot>0&&(this.game.ui.toast("Combo lost","bad"),this.pot=0,this.mult=1,this.lines=[],this.timer=0,this.game.ui.combo(this,!1)),this.rot.x=this.rot.y=this.rot.z=0,this.drift.t=this.drift.pts=0}onEvent(t){let e=this.game.car,i=kt.data.stats;switch(t.type){case"jump":this.rot.x=this.rot.y=this.rot.z=0;break;case"launch":this.add("Lift-off",250),i.launches++;break;case"barrel":this.add("Barrel roll",120);break;case"near":t.gap<1.1?this.add("Paint-thin miss",160):this.add("Near miss",80);break;case"under":this.add("Under the bridge",300);break;case"crash":this.fail();break;case"land":{if(t.fromFlight){let h=this.padAt(t);if(h){let u=!i.pads.includes(h.name);u&&i.pads.push(h.name),this.add(`Bullseye \xB7 ${h.name}`,(u?900:350)*(h.bonus||1)),this.game.fx.burst("confetti",t.x,t.y,t.z,0,0,0,26)}else this.time-this.lastTouchdown>12&&t.airTime>3&&this.add(t.impact<5?"Butter touchdown":"Touchdown",t.impact<5?150:80);this.lastTouchdown=this.time;break}let n=this.rot,r=Math.floor((Math.abs(n.x)+.9)/Bc),o=Math.floor((Math.abs(n.y)+.9)/Bc),a=Math.floor((Math.abs(n.z)+.9)/Bc);if(t.airTime>i.longestAir&&(i.longestAir=t.airTime),!t.clean&&(r||o||a)){this.game.ui.toast("Sketchy landing","bad"),n.x=n.y=n.z=0;break}t.airTime>.75&&this.add(`Air time ${t.airTime.toFixed(1)}s`,t.airTime*70,!0);let l=h=>h>1?["","","Double ","Triple ","Quad "][Math.min(h,4)]:"";r&&this.add(l(r)+(n.x>0?"Front flip":"Backflip"),320*r*(r>1?1.3:1)),o&&this.add(`${o*360} Spin`,220*o),a&&this.add(l(a)+"Barrel roll",260*a),t.clean&&t.airTime>1.2&&t.impact<12&&this.add("Clean landing",60,!0);let c=this.padAt(t);c&&t.airTime>1&&this.add(`Bullseye \xB7 ${c.name}`,300),n.x=n.y=n.z=0;break}default:}}padAt(t){for(let e of this.game.world.pads)if(Math.abs(t.y-e.y)<1.2&&Math.hypot(t.x-e.x,t.z-e.z)<e.r+.8)return e;return null}update(t,e){this.time+=t;let i=kt.data.stats;e.speed>i.topSpeed&&(i.topSpeed=e.speed),e.mode==="air"&&(this.rot.x+=e.angVel.x*t,this.rot.y+=e.angVel.y*t,this.rot.z+=e.angVel.z*t);let n=this.drift;e.mode==="drive"&&e.offGround<.05&&e.slip>5.5&&e.speed>13?(n.t+=t,n.pts+=e.slip*t*5,n.gap=0):n.t>0&&(n.gap+=t,n.gap>.35&&(n.t>.9&&this.add(`Drift ${n.t.toFixed(1)}s`,n.pts),n.t=n.pts=0)),e.mode==="fly"&&e.skim&&e.alt<3&&e.speed>38?(this.skimT+=t,this.skimT>1.1&&(this.skimT=0,this.add(e.skim==="water"?"Wave skimmer":"Ground hugger",60,!0))):this.skimT=Math.max(0,this.skimT-t),this.checkRings(e),this.pot>0&&(e.mode==="air"||n.t>0||(this.timer-=t),this.timer<=0?this.bank():this.game.ui.comboTimer(this.timer/4.2))}checkRings(t){let e=this.game.world.rings,i=t.prev,n=t.pos;for(let r=0;r<e.length;r++){let o=e[r];if(o.cooldown>0)continue;let a=n.x-o.pos.x,l=n.y+.6-o.pos.y,c=n.z-o.pos.z;if(a*a+l*l+c*c>900)continue;let h=a*o.dir.x+l*o.dir.y+c*o.dir.z,u=(i.x-o.pos.x)*o.dir.x+(i.y+.6-o.pos.y)*o.dir.y+(i.z-o.pos.z)*o.dir.z;if(u*h>0)continue;let f=u/(u-h||1e-6),d=i.x+(n.x-i.x)*f-o.pos.x,g=i.y+.6+(n.y-i.y)*f-o.pos.y,x=i.z+(n.z-i.z)*f-o.pos.z;if(d*d+g*g+x*x>o.r*o.r)continue;o.cooldown=30,o.pulse=1;let p=this.game.world.chains[o.chain],m=this.chain.get(o.chain);(!m||this.time-m.t>16)&&(m={n:0,t:0,seen:new Set}),m.seen.has(o.index)||(m.seen.add(o.index),m.n++),m.t=this.time,this.chain.set(o.chain,m),kt.data.stats.rings++,this.add(`${p.name} ${m.n}/${p.count}`,100+40*(m.n-1),!0),this.game.audio.play("ring",{rate:1+(m.n-1)*.085}),this.game.fx.burst("ring",o.pos.x,o.pos.y,o.pos.z,t.vel.x*.3,t.vel.y*.3,t.vel.z*.3,22),m.n>=p.count&&(this.add(`${p.name} complete!`,500+p.count*60),this.game.audio.play("unlock"),this.chain.delete(o.chain))}}nextUnlock(){let t=kt.data;return xi.find(e=>!t.unlocked.includes(e.id))||null}label(){return`${ti(this.pot)}`}};var na=class{constructor(t,e){this.canvas=t,this.world=e,this.ctx=t.getContext("2d"),this.base=this.render(e),this.frame=0}render(t){let i=document.createElement("canvas");i.width=i.height=512;let n=i.getContext("2d"),r=t.terrain,o=r.n+1,a=n.createImageData(o,o),l=r.colors;for(let u=0;u<o*o;u++){let f=r.h[u],d=l[u*3],g=l[u*3+1],x=l[u*3+2];f<0&&(d=.07,g=.2,x=.3);let p=f<0?1:.85+Math.min(.3,f/600);a.data[u*4]=Math.min(255,Math.sqrt(d)*255*p*.8),a.data[u*4+1]=Math.min(255,Math.sqrt(g)*255*p*.8),a.data[u*4+2]=Math.min(255,Math.sqrt(x)*255*p*.8),a.data[u*4+3]=255}let c=document.createElement("canvas");c.width=c.height=o,c.getContext("2d").putImageData(a,0,0),n.imageSmoothingEnabled=!0,n.drawImage(c,0,0,512,512);let h=u=>(u+4e3/2)/4e3*512;n.fillStyle="rgba(70,74,84,0.9)",n.fillRect(h(Tt.x0),h(Tt.z0),h(Tt.x1)-h(Tt.x0),h(Tt.z1)-h(Tt.z0)),n.fillStyle="rgba(190,190,200,0.5)";for(let u of t.city.roofList)n.fillRect(h(u.x-u.hx),h(u.z-u.hz),u.hx*2/4e3*512,u.hz*2/4e3*512);n.fillStyle="#3a3d45",n.fillRect(h(ne.x0),h(ne.z-ne.halfW),h(ne.x1)-h(ne.x0),ne.halfW*2/4e3*512),n.lineCap=n.lineJoin="round";for(let u of[0,1])for(let f of t.roads.roads)n.strokeStyle=u?"#f3ead8":"rgba(20,22,28,0.8)",n.lineWidth=(f.lanes===4?3.2:2.2)+(u?0:1.6),n.beginPath(),f.pts.forEach((d,g)=>g?n.lineTo(h(d.x),h(d.z)):n.moveTo(h(d.x),h(d.z))),f.closed&&n.closePath(),n.stroke();for(let u of t.ramps)n.fillStyle=u.launch?"#ff4a3a":"#f0902e",n.beginPath(),n.arc(h(u.x),h(u.z),u.launch?4.2:2.6,0,7),n.fill();n.strokeStyle="#fff3e0",n.lineWidth=1.4;for(let u of t.pads)n.beginPath(),n.arc(h(u.x),h(u.z),3.2,0,7),n.stroke();return i}draw(t){if(this.frame++%2)return;let e=this.canvas,i=this.ctx,n=e.width,r=n/2,o=this.base.width,a=t.mode==="fly"?620:380;this.range=this.range?this.range+(a-this.range)*.06:a;let l=r/this.range/(o/4e3);i.clearRect(0,0,n,n),i.save(),i.beginPath(),i.arc(r,r,r-2,0,7),i.clip(),i.fillStyle="#12303f",i.fillRect(0,0,n,n),i.translate(r,r),i.rotate(t.yaw+Math.PI),i.scale(l,l);let c=(t.pos.x+4e3/2)/4e3*o,h=(t.pos.z+4e3/2)/4e3*o;i.drawImage(this.base,-c,-h);let u=o/4e3;for(let d of this.world.rings){if(d.cooldown>0)continue;let g=d.pos.x-t.pos.x,x=d.pos.z-t.pos.z;g*g+x*x>this.range*this.range*1.1||(i.fillStyle="#5fe6ff",i.beginPath(),i.arc(g*u,x*u,2.2/l,0,7),i.fill())}i.restore(),i.save(),i.translate(r,r),i.fillStyle="#ff3b30",i.strokeStyle="#fff",i.lineWidth=n*.012;let f=n*.055;i.beginPath(),i.moveTo(0,-f*1.3),i.lineTo(f,f),i.lineTo(0,f*.5),i.lineTo(-f,f),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.28)",i.lineWidth=n*.02,i.beginPath(),i.arc(r,r,r-n*.012,0,7),i.stroke()}};var Ft=s=>document.getElementById(s),Ke=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},sa=class{constructor(t){this.game=t,this.screens=["menu","pause","garage","settings","help","photo"],this.last={},this.hintTimer=null,document.querySelectorAll("[data-act]").forEach(e=>e.addEventListener("click",()=>{t.audio.play("click"),t.act(e.dataset.act)})),Ft("btn-pause").addEventListener("click",()=>t.act("pause")),Ft("btn-photo").addEventListener("click",()=>t.act("photo"));for(let e of["p-fov","p-roll","p-pan"])Ft(e).addEventListener("input",()=>t.photoSliders(+Ft("p-fov").value,+Ft("p-roll").value,+Ft("p-pan").value));Ft("p-time").addEventListener("click",()=>{t.audio.play("click"),t.cycleTime()}),Ft("p-hide").addEventListener("click",()=>{document.body.classList.toggle("photo-clean"),Ft("p-hide").textContent=document.body.classList.contains("photo-clean")?"SHOW UI":"HIDE UI"}),Ft("p-shot").addEventListener("click",()=>t.takePhoto()),Ft("p-exit").addEventListener("click",()=>{t.audio.play("click"),t.act("back")}),this.buildHelp()}show(t){for(let e of this.screens)Ft(e).classList.toggle("hidden",e!==t);Ft("hud").classList.toggle("hidden",t!==null),document.body.classList.remove("photo-clean"),Ft("p-hide").textContent="HIDE UI",t==="menu"&&this.menuFoot(),t==="pause"&&this.pauseStats(),t==="garage"&&this.buildGarage(),t==="settings"&&this.buildSettings(),t==="photo"&&this.photoTime()}loading(t,e){Ft("load-fill").style.width=`${Math.round(t*100)}%`,e&&(Ft("load-tip").textContent=e)}loadingDone(){let t=Ft("loading");t.classList.add("out"),setTimeout(()=>t.remove(),700)}hud(t,e){let i=this.last,n=kt.data.settings,r=Math.round(t.speed*(n.units==="mph"?2.23694:3.6));r!==i.v&&(i.v=r,Ft("speed").textContent=r),n.units!==i.units&&(i.units=n.units,Ft("unit").textContent=n.units==="mph"?"MPH":"KM/H");let o=t.mode==="fly"?"fly":t.mode==="air"?"air":"drive";if(o!==i.mode){i.mode=o;let c=Ft("mode");c.textContent=o==="fly"?"FLIGHT":o==="air"?"AIRBORNE":"DRIVE",c.className=o,Ft("alt").classList.toggle("on",o!=="drive"),document.body.classList.toggle("flying",o==="fly"),Ft("boost").classList.toggle("hot",o==="fly"),Ft("t-boost").textContent=o==="fly"?"UP":o==="air"?"FLY":"BOOST",Ft("t-shift").textContent=o==="fly"?"DOWN":"DRIFT",Ft("t-fly").textContent=o==="fly"?"ROLL":"FLY"}if(o!=="drive"){let c=Math.max(0,Math.round(t.alt));c!==i.alt&&(i.alt=c,Ft("alt").textContent=`ALT ${c} M`)}let a=o==="fly"?1:t.boost;Math.abs(a-(i.boost??-1))>.004&&(i.boost=a,Ft("boost-fill").style.transform=`scaleX(${a.toFixed(3)})`);let l=kt.data.points;if(l!==i.pts){i.pts=l,Ft("score-val").textContent=ti(l);let c=e.nextUnlock();if(c){let h=[...xi].reverse().find(f=>f.cost<=l),u=h?h.cost:0;Ft("next-fill").style.width=`${It((l-u)/(c.cost-u)*100,0,100)}%`,Ft("next-label").textContent=`${c.name} \xB7 ${ti(c.cost)}`}else Ft("next-fill").style.width="100%",Ft("next-label").textContent="All paints unlocked"}}combo(t,e){let i=Ft("combo");if(t.pot<=0){i.classList.add("hidden");return}i.classList.remove("hidden");let n=Ft("combo-lines");n.innerHTML="";for(let r of t.lines.slice(-3))n.appendChild(Ke("div","",`${r.name}<span>+${ti(r.pts)}</span>`));if(Ft("combo-pts").textContent=ti(t.pot),Ft("combo-mult").textContent=`\xD7${t.mult}`,e){let r=Ft("combo-pot");r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop")}}comboTimer(t){Ft("combo-timer").firstElementChild.style.transform=`scaleX(${It(t,0,1).toFixed(3)})`}banked(t,e){this.toast(`+${ti(t)}`,"good",e>1?`Combo \xD7${e} banked`:"Banked",1700);let i=Ft("score");i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")}toast(t,e="",i="",n=2200){let r=Ft("toasts");for(;r.children.length>2;)r.firstElementChild.remove();let o=Ke("div",`toast ${e}`,i?`${t}<small>${i}</small>`:t);r.appendChild(o),setTimeout(()=>{o.classList.add("out"),setTimeout(()=>o.remove(),320)},n)}hint(t,e=7e3){let i=Ft("hint");if(clearTimeout(this.hintTimer),!t){i.classList.add("hidden");return}i.innerHTML=t,i.classList.remove("hidden"),this.hintTimer=setTimeout(()=>i.classList.add("hidden"),e)}cinematic(t){document.body.classList.toggle("cine",t)}cineTitle(){let t=Ft("cine-title");t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}flash(){let t=Ft("flash");t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}fade(t){Ft("fade").classList.toggle("on",t)}touchMode(t){document.body.classList.toggle("touch",t),Ft("touch").classList.toggle("hidden",!t)}joy(t,e,i,n){let r=Ft("joy");r.classList.toggle("hidden",!n),Ft("joy-ghost").classList.toggle("hidden",n),n&&t&&(r.style.left=`${t.x}px`,r.style.top=`${t.y}px`,r.firstElementChild.style.transform=`translate(${e*40}px, ${i*40}px)`)}menuFoot(){let t=kt.data;Ft("menu-foot").innerHTML=`Stunt points <b>${ti(t.points)}</b> &nbsp;\xB7&nbsp; Paints <b>${t.unlocked.length}/${xi.length}</b>`}pauseStats(){let t=kt.data,e=t.stats,i=t.settings.units==="mph";Ft("pause-stats").innerHTML=`
      <div>Stunt points<b>${ti(t.points)}</b></div>
      <div>Best combo<b>${ti(e.bestCombo)}</b></div>
      <div>Top speed<b>${Math.round(e.topSpeed*(i?2.23694:3.6))} ${i?"mph":"km/h"}</b></div>
      <div>Longest air<b>${e.longestAir.toFixed(1)} s</b></div>
      <div>Rings<b>${ti(e.rings)}</b></div>
      <div>Landing pads<b>${e.pads.length}/${this.game.world.pads.length}</b></div>`}buildGarage(){let t=Ft("g-strip"),e=kt.data;t.innerHTML="",this.gSel=this.gSel&&xi.some(o=>o.id===this.gSel)?this.gSel:e.paint;for(let o of xi){let a=!e.unlocked.includes(o.id),l=Ke("button",`swatch${a?" locked":""}${o.id===this.gSel?" on":""}`,"<i></i>");l.style.setProperty("--c",o.color),l.setAttribute("aria-label",o.name),l.addEventListener("click",()=>{this.game.audio.play("click"),this.gSel=o.id,this.game.previewPaint(o.id),this.buildGarage()}),t.appendChild(l),o.id===this.gSel&&setTimeout(()=>l.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}),0)}let i=xi.find(o=>o.id===this.gSel),n=!e.unlocked.includes(i.id);Ft("g-name").textContent=i.name;let r=Ft("g-state");r.classList.toggle("locked",n),r.textContent=n?`Locked \xB7 ${ti(i.cost)} stunt points (${ti(Math.max(0,i.cost-e.points))} to go)`:i.id===e.paint?"Equipped":"Unlocked \xB7 tap done to equip",Ft("g-points").innerHTML=`\u2605 ${ti(e.points)} stunt points`}buildSettings(){let t=Ft("settings-body"),e=kt.data.settings,i=this.game;t.innerHTML="";let n=p=>{let m=Ke("div","set-group",`<h3>${p}</h3>`);return t.appendChild(m),m},r=(p,m,y,M=0,v=1)=>{let C=Ke("div","set-row",`<span>${m}</span>`),w=Ke("input");w.type="range",w.min=M,w.max=v,w.step=.01,w.value=e[y],w.addEventListener("input",()=>{e[y]=+w.value,i.applySettings(),kt.touch()}),C.appendChild(w),p.appendChild(C)},o=(p,m,y,M)=>{let v=Ke("div","set-row",`<span>${m}</span>`),C=Ke("div","seg");for(let[w,E]of M){let A=Ke("button",e[y]===w?"on":"",E);A.addEventListener("click",()=>{e[y]=w,i.audio.play("click"),i.applySettings(),kt.touch(),this.buildSettings()}),C.appendChild(A)}v.appendChild(C),p.appendChild(v)},a=n("Audio");r(a,"Master volume","master"),r(a,"Music","music"),r(a,"Sound effects","sfx");let l=n("Graphics");o(l,"Quality","quality",[["auto","Auto"],["low","Low"],["medium","Medium"],["high","High"]]),o(l,"Time of day","time",Os.map(p=>[p,Go[p].label]));let c=n("Gameplay");o(c,"Cinematic take-off","cinematic",[[!0,"On"],[!1,"Off"]]),o(c,"Camera shake","shake",[[!0,"On"],[!1,"Off"]]),o(c,"Speed units","units",[["kmh","km/h"],["mph","mph"]]),r(c,"Look sensitivity","sens",.4,2);let h=n("Keyboard controls"),u=Ke("div","keys");for(let[p,m]of Au){let y=Ke("div","key-row",`<span>${m}</span>`),M=Ke("div","slots");for(let v=0;v<2;v++){let C=Ke("button","",Zn(kt.data.keys[p][v]));C.addEventListener("click",()=>{C.textContent="Press\u2026",C.classList.add("listen"),i.input.capture=w=>{if(w!=="Escape"||p==="pause"){for(let E in kt.data.keys)kt.data.keys[E]=kt.data.keys[E].map(A=>A===w?null:A);kt.data.keys[p][v]=w}kt.touch(),this.buildSettings()}}),M.appendChild(C)}y.appendChild(M),u.appendChild(y)}h.appendChild(u);let f=Ke("button","link-btn","Restore default keys");f.style.marginTop="10px",f.addEventListener("click",()=>{for(let p in cr)kt.data.keys[p]=cr[p].slice();kt.touch(),this.buildSettings()}),h.appendChild(f);let d=n("Progress"),g=Ke("div","set-row","<span>Stunt points and unlocked paints</span>"),x=Ke("button","link-btn","Reset progress");x.addEventListener("click",()=>{x.dataset.sure?(i.resetProgress(),this.buildSettings()):(x.dataset.sure="1",x.textContent="Tap again to confirm")}),g.appendChild(x),d.appendChild(g)}buildHelp(){let t=e=>Zn(kt.data.keys[e][0]);Ft("help-body").innerHTML=`<div class="help-grid">
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
    </div>`}photoTime(){Ft("p-time").textContent=Go[this.game.world.sky.name].label.toUpperCase()}};var Qn=1/120,pr=()=>new Promise(s=>requestAnimationFrame(()=>s())),mr=new L,Yu=new L,kc=class{constructor(){this.state="loading",this.returnTo="menu",this.acc=0,this.last=0,this.launch=null,this.cine=null,this.timeScale=1,this.pend={fly:!1,boostPressed:!1},this.respawning=!1,this.playTime=0,this.hinted={}}async boot(){let t=document.getElementById("game");this.audio=new ea,this.ui=new sa(this),this.ui.loading(.08,"Charging the thrusters\u2026"),await pr(),await Mi.init(),Mi.loadingStart(),kt.load(),this.ui.buildHelp();try{await Promise.race([document.fonts.load('italic 700 40px "Barlow Condensed"'),new Promise(i=>setTimeout(i,1500))])}catch{}this.ui.loading(.2,"Raising the island\u2026"),await pr(),this.gfx=new zo(t),this.scene=new As,this.camera=new je(60,innerWidth/innerHeight,.6,9e3),this.world=new Wo(this.scene,this.gfx.renderer),this.ui.loading(.62,"Polishing the paint\u2026"),await pr(),this.model=new Zo,this.scene.add(this.model.root),this.car=new Ko(this.world),this.rig=new Qo(this.camera,this.world),this.fx=new ta(this.scene,this.model),this.input=new Po(t,kt.data.keys),this.stunts=new ia(this),this.minimap=new na(document.getElementById("minimap"),this.world),this.input.onTouchMode=i=>this.ui.touchMode(i),this.input.onJoy=(i,n,r,o)=>this.ui.joy(i,n,r,o),this.input.bindButton(document.getElementById("t-boost"),"boost"),this.input.bindButton(document.getElementById("t-shift"),"shift"),this.input.bindButton(document.getElementById("t-fly"),"fly"),matchMedia("(pointer: coarse)").matches&&"ontouchstart"in window&&(this.input.isTouch=!0,this.ui.touchMode(!0)),this.gfx.init(this.scene,this.camera,this.world),this.applySettings(!0),this.setPaint(kt.data.paint),this.syncModel(0),this.rig.orbit.yaw=2.5,this.rig.orbit.pitch=.12,this.rig.orbit.dist=7.4,this.rig.updateOrbit(0,this.car,null),this.world.update(.016,this.camera,this.car.pos),this.ui.loading(.85,"Warming up the shaders\u2026"),await pr();try{this.gfx.renderer.compile(this.scene,this.camera)}catch{}this.gfx.render(),this.ui.loading(1,"Ready for take-off"),await pr(),Mi.onMute=i=>this.audio.setMuted(i),this.audio.setMuted(Mi.muted);let e=()=>this.audio.unlock();addEventListener("pointerdown",e),addEventListener("keydown",e),addEventListener("touchend",e),document.addEventListener("visibilitychange",()=>{document.hidden?(this.state==="play"&&this.act("pause"),this.audio.suspend(!0),kt.flush()):this.audio.suspend(!1)}),addEventListener("pagehide",()=>kt.flush()),addEventListener("resize",()=>this.gfx.resize(!0)),Mi.loadingStop(),this.ui.loadingDone(),this.setState("menu"),this.last=performance.now(),requestAnimationFrame(i=>this.frame(i))}setState(t){let e=this.state;if(this.state=t,this.ui.show(t==="play"?null:t),t==="play"?Mi.gameplayStart():Mi.gameplayStop(),t==="menu"||t==="garage"){let i=this.rig.orbit;i.roll=0,i.panY=0,i.fov=40,t==="garage"?(i.dist=6.6,i.pitch=.2,i.panX=0):(i.dist=7.6,i.pitch=.11,i.panX=this.camera.aspect>1?2.1:0,e==="loading"&&(i.yaw=2.45))}t!=="play"&&(this.ui.cinematic(!1),this.ui.hint(null)),t!=="play"&&t!=="photo"&&kt.flush()}act(t){switch(t){case"play":this.audio.unlock(),(this.car.mode!=="drive"||this.car.overWater)&&this.car.reset(Ve.x,Ve.z,Ve.yaw),this.rig.snap(this.car),this.fx.reset(),this.setState("play"),this.firstHints();break;case"resume":this.setState("play");break;case"pause":this.state==="play"&&(this.endCinematic(),this.setState("pause"));break;case"garage":this.returnTo=this.state,this.setState("garage");break;case"settings":this.returnTo=this.state,this.setState("settings");break;case"help":this.returnTo=this.state,this.setState("help");break;case"photo":if(this.state==="play"||this.state==="pause"){this.endCinematic();let e=this.rig.orbit;e.yaw=Math.atan2(this.camera.position.x-this.car.pos.x,this.camera.position.z-this.car.pos.z)-this.car.yaw,e.pitch=.16,e.dist=8,e.roll=0,e.fov=42,e.panX=0,e.panY=0,document.getElementById("p-fov").value=42,document.getElementById("p-roll").value=0,document.getElementById("p-pan").value=0,this.setState("photo")}break;case"menu":this.stunts.bank(),this.car.reset(Ve.x,Ve.z,Ve.yaw),this.syncModel(0),this.setState("menu");break;case"respawn":this.stunts.fail(),this.car.reset(Ve.x,Ve.z,Ve.yaw),this.rig.snap(this.car),this.fx.reset(),this.setState("play");break;case"back":if(this.state==="garage"){let e=this.ui.gSel;e&&kt.data.unlocked.includes(e)&&(kt.data.paint=e,kt.touch()),this.setPaint(kt.data.paint),this.ui.gSel=null}this.setState(this.state==="photo"?"play":this.returnTo==="pause"?"pause":"menu");break;default:}}applySettings(t){let e=kt.data.settings;this.audio.setVolumes({master:e.master,music:e.music,sfx:e.sfx}),(t||e.quality!==this.gfx.setting)&&this.gfx.setQuality(e.quality),(e.time!==this.world.sky.name||t)&&this.world.sky.setTime(e.time,!!t),this.rig.sens=e.sens}cycleTime(){let t=kt.data.settings;t.time=Os[(Os.indexOf(t.time)+1)%Os.length],this.world.sky.setTime(t.time,!1),this.ui.photoTime(),kt.touch()}setPaint(t){let e=xi.find(i=>i.id===t)||xi[0];this.model.setPaint(e)}previewPaint(t){this.setPaint(t)}onUnlock(t){this.ui.toast(`New paint \xB7 ${t.name}`,"big","Open the garage to equip it",3600),this.audio.play("unlock"),this.fx.burst("confetti",this.car.pos.x,this.car.pos.y,this.car.pos.z,0,0,0,40),Mi.happytime()}resetProgress(){kt.reset(),this.setPaint(kt.data.paint),this.ui.last={}}photoSliders(t,e,i){let n=this.rig.orbit;n.fov=t,n.roll=e*Math.PI/180,n.panY=i/10}takePhoto(){document.body.classList.add("photo-clean"),this.audio.play("shutter");let t=this.gfx.snapshot(),e=t.getContext("2d"),i=t.width,n=t.height,r=Math.max(12,n/46),o=e.createRadialGradient(i/2,n*.46,n*.45,i/2,n*.46,Math.hypot(i,n)*.62);o.addColorStop(0,"rgba(10,4,8,0)"),o.addColorStop(1,"rgba(10,4,8,0.32)"),e.fillStyle=o,e.fillRect(0,0,i,n),e.font=`italic 700 ${r*1.5}px "Barlow Condensed", Arial, sans-serif`,e.textAlign="right",e.textBaseline="alphabetic",e.fillStyle="rgba(255,255,255,0.92)",e.shadowColor="rgba(0,0,0,0.5)",e.shadowBlur=r*.5,e.fillText("FLYING ROADSTER",i-r*1.2,n-r*1.1),this.ui.flash(),t.toBlob(async a=>{if(document.body.classList.remove("photo-clean"),document.getElementById("p-hide").textContent="HIDE UI",!a)return;let l=new File([a],"flying-roadster.png",{type:"image/png"});try{if(this.input.isTouch&&navigator.canShare&&navigator.canShare({files:[l]})){await navigator.share({files:[l],title:"Flying Roadster"});return}}catch{}let c=document.createElement("a");c.href=URL.createObjectURL(a),c.download=`flying-roadster-${Date.now()}.png`,document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(c.href),4e3),this.ui.toast("Photo saved","good","",1600)},"image/png")}firstHints(){if(this.hinted.start)return;this.hinted.start=!0;let t=e=>Zn(kt.data.keys[e][0]);this.input.isTouch?this.ui.hint("<span>Push the stick <b>up</b> for gas</span><span><b>BOOST</b> down the runway</span><span>Hit the <b>ramp</b></span>",9e3):this.ui.hint(`<span><kbd>${t("forward")}</kbd>Accelerate</span><span><kbd>${t("left")}</kbd><kbd>${t("right")}</kbd>Steer</span><span><kbd>${t("boost")}</kbd>Boost</span><span><b>Hit the ramp at full speed</b></span>`,1e4)}handle(t){let e=this.car,i=this.fx,n=this.audio,r=e.pos,o=kt.data.settings.shake?1:0;switch(this.stunts.onEvent(t),t.type){case"launch":e.foldTarget=1,e.launching=!0,n.play("fold",{rate:.7}),this.launch={t:0},kt.data.settings.cinematic&&(this.cine={t:0,dur:2.8},this.rig.startCinematic(e,2.8),this.ui.cinematic(!0));break;case"engage":{if(Yu.set(-Math.sin(e.yaw),.15,-Math.cos(e.yaw)),mr.set(0,.6,-2.3).applyQuaternion(e.quat).add(r),i.shockwave(mr,Yu,t.fromRamp?12:7),i.burst("ignite",mr.x,mr.y,mr.z,e.vel.x*.5,e.vel.y*.5,e.vel.z*.5,t.fromRamp?34:18),n.play("ignite",{gain:t.fromRamp?1:.7}),t.fromRamp||n.play("fold"),this.rig.addShake(.5*o),t.fromRamp&&(this.ui.flash(),this.cine?this.ui.cineTitle():this.ui.toast("Lift-off","big","Wheels up \xB7 thrusters on",1800)),t.wasGround&&i.burst("dust",r.x,r.y,r.z,0,0,0,14),!this.hinted.fly){this.hinted.fly=!0;let a=l=>Zn(kt.data.keys[l][0]);setTimeout(()=>{this.state==="play"&&(this.input.isTouch?this.ui.hint("<span><b>UP</b> climb</span><span><b>DOWN</b> descend &amp; land</span><span>Fly through the <b>rings</b></span>",9e3):this.ui.hint(`<span><kbd>${a("boost")}</kbd>Climb</span><span><kbd>${a("shift")}</kbd>Descend &amp; land</span><span><kbd>${a("rollL")}</kbd><kbd>${a("rollR")}</kbd>Roll</span><span>Fly through the <b>rings</b></span>`,9e3))},t.fromRamp?2600:600)}break}case"disengage":n.play("unfold");break;case"land":n.play("land",{gain:It(.4+t.impact/20,.4,1)}),t.fromFlight&&n.play("unfold",{gain:.6}),i.burst("dust",r.x,r.y,r.z,e.vel.x,0,e.vel.z,t.fromFlight?10:It(Math.round(t.impact),6,20)),this.rig.addShake(It(t.impact/28,.1,.7)*o),t.fromFlight&&!this.hinted.land&&(this.hinted.land=!0,this.input.isTouch?this.ui.hint("<span>Tap <b>FLY</b> to take off anywhere</span>",6e3):this.ui.hint(`<span><kbd>${Zn(kt.data.keys.fly[0])}</kbd>Take off again anywhere</span>`,6e3)),this.launch=null;break;case"thump":t.impact>5&&(n.play("thud",{gain:It(t.impact/22,.25,.9),vary:.2}),this.rig.addShake(It(t.impact/50,0,.4)*o));break;case"crash":n.play("crash",{gain:It(t.impact/26,.5,1),vary:.15}),n.play("crash2",{gain:It(t.impact/30,.4,.9),rate:.8,vary:.2}),i.burst("spark",t.x??r.x,t.y??r.y+.5,t.z??r.z,e.vel.x,2,e.vel.z,22),this.rig.addShake(.9*o),this.launch=null,e.launching=!1,this.endCinematic();break;case"scrape":n.play("scrape",{gain:It(t.impact/9,.3,.9),vary:.3}),i.burst("spark",t.x,t.y,t.z,e.vel.x,1,e.vel.z,8),this.rig.addShake(.25*o);break;case"near":case"under":n.play("whoosh",{rate:.55,vary:.2});break;case"barrel":n.play("whoosh2",{rate:.5});break;case"jump":t.speed>30&&n.play("whoosh",{gain:.5,rate:.42});break;case"edge":this.ui.toast("Turning back to the island","","",1800);break;case"splash":if(this.respawning)break;this.respawning=!0,n.play("splash"),i.burst("splash",r.x,.2,r.z,e.vel.x,0,e.vel.z,36),this.stunts.fail(),this.endCinematic(),this.launch=null,this.ui.toast("Splashdown","bad","Back to dry land",1600),setTimeout(()=>this.ui.fade(!0),250),setTimeout(()=>{this.car.respawn(),this.rig.snap(this.car),this.fx.reset(),this.syncModel(0),this.ui.fade(!1),this.respawning=!1},640);break;default:}}tick(t){let e=this.car;if(e.step(Qn,t),this.launch&&(this.launch.t+=Qn,e.mode!=="air"?this.launch=null:this.launch.t>=.34&&(e.engageFlight(!0),this.launch=null)),e.events.length){let i=e.events.splice(0);for(let n of i)this.handle(n)}this.stunts.update(Qn,e)}debugAdvance(t,e={}){let i=Object.assign({steer:0,throttle:0,boost:!1,shift:!1,roll:0,fly:!1,boostPressed:!1,look:!1},e);for(let n=Math.round(t/Qn);n>0;n--)this.tick(i),i.fly=i.boostPressed=!1;this.syncModel(Qn)}endCinematic(){this.cine&&(this.cine=null,this.rig.cine=null,this.timeScale=1,this.ui.cinematic(!1))}syncModel(t){let e=this.car,i=this.model;i.root.position.copy(e.pos),i.root.quaternion.copy(e.quat);let n=e.mode==="fly"?Math.sin(this.world.time*2.1)*.05*(1-It(e.speed/30,0,1)):0,r=e.mode==="drive"?It(e.yawRate*e.speed*.0024,-.06,.06):0,o=e.mode==="drive"?e.boosting?-.022:e.braking?.02:0:0;i.body.rotation.z=zt(i.body.rotation.z,r,1-Math.exp(-8*t)),i.body.rotation.x=zt(i.body.rotation.x,o,1-Math.exp(-8*t)),i.body.position.y=n;let a=Math.sin(e.yaw),l=Math.cos(e.yaw),c=e.vel.x*a+e.vel.z*l;i.pose(e.fold,e.steer*zt(.5,.12,It(e.speed/60,0,1)),c*t/.35,e.lift),i.setLights(e.braking?1:0,this.world.sky.v.lamps>1.2?1:this.world.sky.v.lamps*.5)}frame(t){requestAnimationFrame(l=>this.frame(l));let e=Math.min((t-this.last)/1e3,.1);this.last=t;let i=this.input.poll(),n=this.input.takeDrag(),r=this.car,o=this.input.state,a=0;if(this.state==="play"?i.pause?this.act("pause"):i.photo?this.act("photo"):i.reset&&!this.respawning&&(this.stunts.fail(),r.respawn(),this.rig.snap(r),this.fx.reset()):i.pause?this.state==="pause"?this.act("resume"):(this.state==="photo"||this.state==="garage"||this.state==="settings"||this.state==="help")&&this.act("back"):this.state==="photo"&&i.photo&&this.act("back"),this.state==="play"){if(this.gfx.adapt(e),this.playTime+=e,this.cine){let c=this.cine;c.t+=e;let h=c.t/c.dur;this.timeScale=h<.07?zt(1,.17,h/.07):h<.74?.17:zt(.17,1,Qt(.74,1,h)),h>=1&&this.endCinematic()}a=e*this.timeScale,o.fly&&(this.pend.fly=!0),o.boostPressed&&(this.pend.boostPressed=!0),this.acc+=a;let l=0;for(;this.acc>=Qn&&l<14;)o.fly=this.pend.fly,o.boostPressed=this.pend.boostPressed,this.pend.fly=this.pend.boostPressed=!1,this.respawning&&(o.fly=!1,o.boostPressed=!1),this.tick(o),this.acc-=Qn,l++;l===14&&(this.acc=0),o.fly=o.boostPressed=!1,this.syncModel(a),this.rig.update(e,r,n,{lookBack:o.look,realDt:e}),this.world.update(a,this.camera,r.pos),this.fx.update(a,r,this.camera,this.gfx.h),this.ui.hud(r,this.stunts),this.minimap.draw(r),this.hinted.start&&!this.hinted.startDone&&(r.speed>28||r.mode!=="drive")&&(this.hinted.startDone=!0,this.ui.hint(null))}else this.state==="menu"||this.state==="garage"?(this.syncModel(e),this.rig.updateOrbit(e,r,this.state==="garage"?n:null,this.state==="garage"?.1:.07),this.world.update(e,this.camera,r.pos),this.fx.update(e,r,this.camera,this.gfx.h)):this.state==="photo"?(this.rig.updateOrbit(e,r,n,0),this.world.update(0,this.camera,r.pos),this.world.sky.update(e,this.camera,r.pos)):this.world.update(0,this.camera,r.pos);this.audio.update(e,r,this.state==="play",this.timeScale),this.gfx.render()}},qu=new kc;window.__game=qu;qu.boot().catch(s=>{console.error(s);let t=document.getElementById("load-tip");t&&(t.textContent="Could not start: WebGL is unavailable on this device.")});})();
