(()=>{var mf=0,lh=1,gf=2;var _u=1,Tc=2,sn=3,wn=0,ze=1,Ue=2,qi=0,bn=1,Be=2,ch=3,hh=4,xf=5,On=100,yf=101,vf=102,_f=103,Mf=104,bf=200,Sf=201,wf=202,Ef=203,il=204,nl=205,Tf=206,Af=207,Rf=208,Cf=209,Pf=210,If=211,Lf=212,Df=213,Uf=214,sl=0,rl=1,ol=2,ws=3,al=4,ll=5,cl=6,hl=7,No=0,Nf=1,Ff=2,Sn=0,Ac=1,Rc=2,Cc=3,yr=4,zf=5,Pc=6,Ic=7;var Mu=300,Es=301,Ts=302,ul=303,fl=304,Fo=306,zi=1e3,on=1001,dl=1002,mi=1003,Bf=1004;var Pr=1005;var Si=1006,_a=1007;var Vn=1008;var Bi=1009,bu=1010,Su=1011,cr=1012,Lc=1013,Gn=1014,Yi=1015,xi=1016,Dc=1017,Uc=1018,As=1020,wu=35902,Eu=1021,Tu=1022,Fi=1023,Au=1024,Ru=1025,Ms=1026,Rs=1027,vr=1028,Nc=1029,Cu=1030,Fc=1031;var zc=1033,so=33776,ro=33777,oo=33778,ao=33779,pl=35840,ml=35841,gl=35842,xl=35843,yl=36196,vl=37492,_l=37496,Ml=37808,bl=37809,Sl=37810,wl=37811,El=37812,Tl=37813,Al=37814,Rl=37815,Cl=37816,Pl=37817,Il=37818,Ll=37819,Dl=37820,Ul=37821,lo=36492,Nl=36494,Fl=36495,Pu=36283,zl=36284,Bl=36285,Ol=36286;var co=2300,kl=2301,Ma=2302,uh=2400,fh=2401,dh=2402;var Of=3200,kf=3201;var zo=0,Hf=1,Mn="",Ae="srgb",Bs="srgb-linear",Bo="linear",he="srgb";var rs=7680;var ph=519,Vf=512,Gf=513,Wf=514,Iu=515,Xf=516,Yf=517,qf=518,Zf=519,mh=35044,$n=35048;var gh="300 es",an=2e3,ho=2001,En=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ba=Math.PI/180,Hl=180/Math.PI;function _r(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[s&255]+Ze[s>>8&255]+Ze[s>>16&255]+Ze[s>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function Ve(s,t,e){return Math.max(t,Math.min(e,s))}function $f(s,t){return(s%t+t)%t}function Sa(s,t,e){return(1-e)*s+e*t}function $s(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var yt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wt=class s{constructor(t,e,i,n,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],p=n[3],m=n[6],y=n[1],M=n[4],v=n[7],P=n[2],E=n[5],T=n[8];return r[0]=o*x+a*y+l*P,r[3]=o*p+a*M+l*E,r[6]=o*m+a*v+l*T,r[1]=c*x+h*y+u*P,r[4]=c*p+h*M+u*E,r[7]=c*m+h*v+u*T,r[2]=d*x+f*y+g*P,r[5]=d*p+f*M+g*E,r[8]=d*m+f*v+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wa=new Wt;function Lu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jf(){let s=uo("canvas");return s.style.display="block",s}var xh={};function sr(s){s in xh||(xh[s]=!0,console.warn(s))}function Kf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Qf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mn?Bo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var yh=[.64,.33,.3,.6,.15,.06],vh=[.2126,.7152,.0722],_h=[.3127,.329],Mh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Bs]:{primaries:yh,whitePoint:_h,transfer:Bo,toXYZ:Mh,fromXYZ:bh,luminanceCoefficients:vh,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:yh,whitePoint:_h,transfer:he,toXYZ:Mh,fromXYZ:bh,luminanceCoefficients:vh,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});var os,Vl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=uo("canvas")),os.width=t.width,os.height=t.height;let i=os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=uo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=ln(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},td=0,fo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=_r(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Ea(n[o].image)):r.push(Ea(n[o]))}else r=Ea(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ea(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ed=0,ui=class s extends En{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=on,n=on,r=Si,o=Vn,a=Fi,l=Bi,c=s.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=_r(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case on:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case on:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=Mu;ui.DEFAULT_ANISOTROPY=1;var ge=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,P=(m+1)/2,E=(h+d)/4,T=(u+x)/4,R=(g+p)/4;return M>v&&M>P?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=E/i,r=T/i):v>P?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=E/n,r=R/n):P<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(P),i=T/r,n=R/r),this.set(i,n,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gl=class extends En{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new ui(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new fo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends Gl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},po=class extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=mi,this.minFilter=mi,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=mi,this.minFilter=mi,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pe=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let p=1-a,m=l*d+c*f+h*g+u*x,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let P=Math.sqrt(M),E=Math.atan2(P,m*y);p=Math.sin(p*E)/P,a=Math.sin(a*E)/P}let v=a*y;if(l=l*p+d*v,c=c*p+f*v,h=h*p+g*v,u=u*p+x*v,p===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ve(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ta=new I,Sh=new pe,cn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(r,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ir.copy(i.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Lr.subVectors(this.max,Js),as.subVectors(t.a,Js),ls.subVectors(t.b,Js),cs.subVectors(t.c,Js),mn.subVectors(ls,as),gn.subVectors(cs,ls),Ln.subVectors(as,cs);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Ln.z,Ln.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Ln.z,0,-Ln.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Ln.y,Ln.x,0];return!Aa(e,as,ls,cs,Lr)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,as,ls,cs,Lr))?!1:(Dr.crossVectors(mn,gn),e=[Dr.x,Dr.y,Dr.z],Aa(e,as,ls,cs,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qi=[new I,new I,new I,new I,new I,new I,new I,new I],Di=new I,Ir=new cn,as=new I,ls=new I,cs=new I,mn=new I,gn=new I,Ln=new I,Js=new I,Lr=new I,Dr=new I,Dn=new I;function Aa(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Dn.fromArray(s,r);let a=n.x*Math.abs(Dn.x)+n.y*Math.abs(Dn.y)+n.z*Math.abs(Dn.z),l=t.dot(Dn),c=e.dot(Dn),h=i.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var id=new cn,Ks=new I,Ra=new I,hn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):id.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ks,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Ra)),this.expandByPoint(Ks.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ji=new I,Ca=new I,Ur=new I,xn=new I,Pa=new I,Nr=new I,Ia=new I,hr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ca.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Ca);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ur),a=xn.dot(this.direction),l=-xn.dot(Ur),c=xn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ca).addScaledVector(Ur,d),f}intersectSphere(t,e){ji.subVectors(t.center,this.origin);let i=ji.dot(this.direction),n=ji.dot(ji)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,i,n,r){Pa.subVectors(e,t),Nr.subVectors(i,t),Ia.crossVectors(Pa,Nr);let o=this.direction.dot(Ia),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,t);let l=a*this.direction.dot(Nr.crossVectors(xn,Nr));if(l<0)return null;let c=a*this.direction.dot(Pa.cross(xn));if(c<0||l+c>o)return null;let h=-a*xn.dot(Ia);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class s{constructor(t,e,i,n,r,o,a,l,c,h,u,d,f,g,x,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,d,f,g,x,p)}set(t,e,i,n,r,o,a,l,c,h,u,d,f,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nd,t,sd)}lookAt(t,e,i){let n=this.elements;return di.subVectors(t,e),di.lengthSq()===0&&(di.z=1),di.normalize(),yn.crossVectors(i,di),yn.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),yn.crossVectors(i,di)),yn.normalize(),Fr.crossVectors(di,yn),n[0]=yn.x,n[4]=Fr.x,n[8]=di.x,n[1]=yn.y,n[5]=Fr.y,n[9]=di.y,n[2]=yn.z,n[6]=Fr.z,n[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],y=i[3],M=i[7],v=i[11],P=i[15],E=n[0],T=n[4],R=n[8],S=n[12],b=n[1],L=n[5],N=n[9],F=n[13],V=n[2],J=n[6],G=n[10],et=n[14],z=n[3],lt=n[7],ht=n[11],gt=n[15];return r[0]=o*E+a*b+l*V+c*z,r[4]=o*T+a*L+l*J+c*lt,r[8]=o*R+a*N+l*G+c*ht,r[12]=o*S+a*F+l*et+c*gt,r[1]=h*E+u*b+d*V+f*z,r[5]=h*T+u*L+d*J+f*lt,r[9]=h*R+u*N+d*G+f*ht,r[13]=h*S+u*F+d*et+f*gt,r[2]=g*E+x*b+p*V+m*z,r[6]=g*T+x*L+p*J+m*lt,r[10]=g*R+x*N+p*G+m*ht,r[14]=g*S+x*F+p*et+m*gt,r[3]=y*E+M*b+v*V+P*z,r[7]=y*T+M*L+v*J+P*lt,r[11]=y*R+M*N+v*G+P*ht,r[15]=y*S+M*F+v*et+P*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*f-i*l*f)+x*(+e*l*f-e*c*d+r*o*d-n*o*f+n*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+m*(-n*a*h-e*l*u+e*a*d+n*o*u-i*o*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=u*p*c-x*d*c+x*l*f-a*p*f-u*l*m+a*d*m,M=g*d*c-h*p*c-g*l*f+o*p*f+h*l*m-o*d*m,v=h*x*c-g*u*c+g*a*f-o*x*f-h*a*m+o*u*m,P=g*u*l-h*x*l-g*a*d+o*x*d+h*a*p-o*u*p,E=e*y+i*M+n*v+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=y*T,t[1]=(x*d*r-u*p*r-x*n*f+i*p*f+u*n*m-i*d*m)*T,t[2]=(a*p*r-x*l*r+x*n*c-i*p*c-a*n*m+i*l*m)*T,t[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*f-i*l*f)*T,t[4]=M*T,t[5]=(h*p*r-g*d*r+g*n*f-e*p*f-h*n*m+e*d*m)*T,t[6]=(g*l*r-o*p*r-g*n*c+e*p*c+o*n*m-e*l*m)*T,t[7]=(o*d*r-h*l*r+h*n*c-e*d*c-o*n*f+e*l*f)*T,t[8]=v*T,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*m-e*u*m)*T,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*m+e*a*m)*T,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*f-e*a*f)*T,t[12]=P*T,t[13]=(h*x*n-g*u*n+g*i*d-e*x*d-h*i*p+e*u*p)*T,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*p-e*a*p)*T,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*d+e*a*d)*T,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,y=l*c,M=l*h,v=l*u,P=i.x,E=i.y,T=i.z;return n[0]=(1-(x+m))*P,n[1]=(f+v)*P,n[2]=(g-M)*P,n[3]=0,n[4]=(f-v)*E,n[5]=(1-(d+m))*E,n[6]=(p+y)*E,n[7]=0,n[8]=(g+M)*T,n[9]=(p-y)*T,n[10]=(1-(d+x))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=hs.set(n[0],n[1],n[2]).length(),o=hs.set(n[4],n[5],n[6]).length(),a=hs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Ui.copy(this);let c=1/r,h=1/o,u=1/a;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=h,Ui.elements[5]*=h,Ui.elements[6]*=h,Ui.elements[8]*=u,Ui.elements[9]*=u,Ui.elements[10]*=u,e.setFromRotationMatrix(Ui),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=an){let l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(a===an)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ho)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=an){let l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),d=(e+t)*c,f=(i+n)*h,g,x;if(a===an)g=(o+r)*u,x=-2*u;else if(a===ho)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},hs=new I,Ui=new Xt,nd=new I(0,0,0),sd=new I(1,1,1),yn=new I,Fr=new I,di=new I,wh=new Xt,Eh=new pe,Ce=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ce.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rd=0,Th=new I,us=new pe,tn=new Xt,zr=new I,Qs=new I,od=new I,ad=new pe,Ah=new I(1,0,0),Rh=new I(0,1,0),Ch=new I(0,0,1),Ph={type:"added"},ld={type:"removed"},fs={type:"childadded",child:null},La={type:"childremoved",child:null},Xe=class s extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Ce,i=new pe,n=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Wt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(Rh,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(Rh,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?zr.copy(t):zr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(Qs,zr,this.up):tn.lookAt(zr,Qs,this.up),this.quaternion.setFromRotationMatrix(tn),n&&(tn.extractRotation(n.matrixWorld),us.setFromRotationMatrix(tn),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ph),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ld),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ph),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Xe.DEFAULT_UP=new I(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new I,en=new I,Da=new I,nn=new I,ds=new I,ps=new I,Ih=new I,Ua=new I,Na=new I,Fa=new I,za=new ge,Ba=new ge,Oa=new ge,kn=class s{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ni.subVectors(t,e),n.cross(Ni);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ni.subVectors(n,e),en.subVectors(i,e),Da.subVectors(t,e);let o=Ni.dot(Ni),a=Ni.dot(en),l=Ni.dot(Da),c=en.dot(en),h=en.dot(Da),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,nn.x),l.addScaledVector(o,nn.y),l.addScaledVector(a,nn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return za.setScalar(0),Ba.setScalar(0),Oa.setScalar(0),za.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,i),Oa.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(Ba,r.y),o.addScaledVector(Oa,r.z),o}static isFrontFacing(t,e,i,n){return Ni.subVectors(i,e),en.subVectors(t,e),Ni.cross(en).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Ni.cross(en).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;ds.subVectors(n,i),ps.subVectors(r,i),Ua.subVectors(t,i);let l=ds.dot(Ua),c=ps.dot(Ua);if(l<=0&&c<=0)return e.copy(i);Na.subVectors(t,n);let h=ds.dot(Na),u=ps.dot(Na);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ds,o);Fa.subVectors(t,r);let f=ds.dot(Fa),g=ps.dot(Fa);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ps,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Ih.subVectors(r,n),a=(u-h)/(u-h+(f-g)),e.copy(n).addScaledVector(Ih,a);let m=1/(p+x+d);return o=x*m,a=d*m,e.copy(i).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Br={h:0,s:0,l:0};function ka(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=se.workingColorSpace){if(t=$f(t,1),e=Ve(e,0,1),i=Ve(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ka(o,r,t+1/3),this.g=ka(o,r,t),this.b=ka(o,r,t-1/3)}return se.toWorkingColorSpace(this,n),this}setStyle(t,e=Ae){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let i=Du[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return se.fromWorkingColorSpace($e.copy(this),t),Math.round(Ve($e.r*255,0,255))*65536+Math.round(Ve($e.g*255,0,255))*256+Math.round(Ve($e.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace($e.copy(this),e);let i=$e.r,n=$e.g,r=$e.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ae){se.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,i=$e.g,n=$e.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(Br);let i=Sa(vn.h,Br.h,e),n=Sa(vn.s,Br.s,e),r=Sa(vn.l,Br.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new ut;ut.NAMES=Du;var cd=0,Oi=class extends En{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=_r(),this.name="",this.blending=bn,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=nl,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bn&&(i.blending=this.blending),this.side!==wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==nl&&(i.blendDst=this.blendDst),this.blendEquation!==On&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qt=class extends Oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Fe=new I,Or=new yt,ve=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mh,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=$s(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=hi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$s(e,this.array)),e}setX(t,e){return this.normalized&&(e=hi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$s(e,this.array)),e}setY(t,e){return this.normalized&&(e=hi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$s(e,this.array)),e}setW(t,e){return this.normalized&&(e=hi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=hi(e,this.array),i=hi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=hi(e,this.array),i=hi(i,this.array),n=hi(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=hi(e,this.array),i=hi(i,this.array),n=hi(n,this.array),r=hi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mh&&(t.usage=this.usage),t}};var go=class extends ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var xo=class extends ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var wt=class extends ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},hd=0,bi=new Xt,Ha=new Xe,ms=new I,pi=new cn,js=new cn,He=new I,Vt=class s extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lu(t)?xo:go)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,e,i){return bi.makeTranslation(t,e,i),this.applyMatrix4(bi),this}scale(t,e,i){return bi.makeScale(t,e,i),this.applyMatrix4(bi),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wt(i,3))}else{for(let i=0,n=e.count;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];pi.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(pi.min,js.min),pi.expandByPoint(He),He.addVectors(pi.max,js.max),pi.expandByPoint(He)):(pi.expandByPoint(js.min),pi.expandByPoint(js.max))}pi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),He.add(ms)),n=Math.max(n,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new I,l[R]=new I;let c=new I,h=new I,u=new I,d=new yt,f=new yt,g=new yt,x=new I,p=new I;function m(R,S,b){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[R].add(x),a[S].add(x),a[b].add(x),l[R].add(p),l[S].add(p),l[b].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,S=y.length;R<S;++R){let b=y[R],L=b.start,N=b.count;for(let F=L,V=L+N;F<V;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new I,v=new I,P=new I,E=new I;function T(R){P.fromBufferAttribute(n,R),E.copy(P);let S=a[R];M.copy(S),M.sub(P.multiplyScalar(P.dot(S))).normalize(),v.crossVectors(E,S);let L=v.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,L)}for(let R=0,S=y.length;R<S;++R){let b=y[R],L=b.start,N=b.count;for(let F=L,V=L+N;F<V;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lh=new Xt,Un=new hr,kr=new hn,Dh=new I,Hr=new I,Vr=new I,Gr=new I,Va=new I,Wr=new I,Uh=new I,Xr=new I,mt=class extends Xe{constructor(t=new Vt,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Va.fromBufferAttribute(u,t),o?Wr.addScaledVector(Va,h):Wr.addScaledVector(Va.sub(e),h))}e.add(Wr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(kr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(kr,Dh)===null||Un.origin.distanceToSquared(Dh)>(t.far-t.near)**2))&&(Lh.copy(r).invert(),Un.copy(t.ray).applyMatrix4(Lh),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,P=M;v<P;v+=3){let E=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);n=Yr(this,m,t,i,c,h,u,E,T,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);n=Yr(this,o,t,i,c,h,u,y,M,v),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=y,P=M;v<P;v+=3){let E=v,T=v+1,R=v+2;n=Yr(this,m,t,i,c,h,u,E,T,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,M=p+1,v=p+2;n=Yr(this,o,t,i,c,h,u,y,M,v),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function ud(s,t,e,i,n,r,o,a){let l;if(t.side===ze?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===wn,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:s}}function Yr(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Hr),s.getVertexPosition(l,Vr),s.getVertexPosition(c,Gr);let h=ud(s,t,e,i,Hr,Vr,Gr,Uh);if(h){let u=new I;kn.getBarycoord(Uh,Hr,Vr,Gr,u),n&&(h.uv=kn.getInterpolatedAttribute(n,a,l,c,u,new yt)),r&&(h.uv1=kn.getInterpolatedAttribute(r,a,l,c,u,new yt)),o&&(h.normal=kn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};kn.getNormal(Hr,Vr,Gr,d.normal),h.face=d,h.barycoord=u}return h}var Pe=class s extends Vt{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(u,2));function g(x,p,m,y,M,v,P,E,T,R,S){let b=v/T,L=P/R,N=v/2,F=P/2,V=E/2,J=T+1,G=R+1,et=0,z=0,lt=new I;for(let ht=0;ht<G;ht++){let gt=ht*L-F;for(let Et=0;Et<J;Et++){let _t=Et*b-N;lt[x]=_t*y,lt[p]=gt*M,lt[m]=V,c.push(lt.x,lt.y,lt.z),lt[x]=0,lt[p]=0,lt[m]=E>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Et/T),u.push(1-ht/R),et+=1}}for(let ht=0;ht<R;ht++)for(let gt=0;gt<T;gt++){let Et=d+gt+J*ht,_t=d+gt+J*(ht+1),j=d+(gt+1)+J*(ht+1),ft=d+(gt+1)+J*ht;l.push(Et,_t,ft),l.push(_t,j,ft),z+=6}a.addGroup(f,z,S),f+=z,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Cs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function ei(s){let t={};for(let e=0;e<s.length;e++){let i=Cs(s[e]);for(let n in i)t[n]=i[n]}return t}function fd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Uu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Rn={clone:Cs,merge:ei},dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends Oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},yo=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=an}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_n=new I,Nh=new yt,Fh=new yt,Je=class extends yo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,Nh,Fh),e.subVectors(Fh,Nh)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ba*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,xs=1,Xl=class extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Je(gs,xs,t,e);n.layers=this.layers,this.add(n);let r=new Je(gs,xs,t,e);r.layers=this.layers,this.add(r);let o=new Je(gs,xs,t,e);o.layers=this.layers,this.add(o);let a=new Je(gs,xs,t,e);a.layers=this.layers,this.add(a);let l=new Je(gs,xs,t,e);l.layers=this.layers,this.add(l);let c=new Je(gs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===an)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},vo=class extends ui{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Es,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yl=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new vo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Pe(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ze,blending:qi});r.uniforms.tEquirect.value=e;let o=new mt(n,r),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=Si),new Xl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}},Ga=new I,md=new I,gd=new Wt,rn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Ga.subVectors(i,e).cross(md.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ga),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||gd.getNormalMatrix(t),n=this.coplanarPoint(Ga).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Nn=new hn,qr=new I,ur=class{constructor(t=new rn,e=new rn,i=new rn,n=new rn,r=new rn,o=new rn){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=an){let i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],x=n[10],p=n[11],m=n[12],y=n[13],M=n[14],v=n[15];if(i[0].setComponents(l-r,d-c,p-f,v-m).normalize(),i[1].setComponents(l+r,d+c,p+f,v+m).normalize(),i[2].setComponents(l+o,d+h,p+g,v+y).normalize(),i[3].setComponents(l-o,d-h,p-g,v-y).normalize(),i[4].setComponents(l-a,d-u,p-x,v-M).normalize(),e===an)i[5].setComponents(l+a,d+u,p+x,v+M).normalize();else if(e===ho)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(qr.x=n.normal.x>0?t.max.x:t.min.x,qr.y=n.normal.y>0?t.max.y:t.min.y,qr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nu(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function xd(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Ke=class s extends Vt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*d-o;for(let M=0;M<c;M++){let v=M*u-r;g.push(v,-y,0),x.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let M=y+c*m,v=y+c*(m+1),P=y+1+c*(m+1),E=y+1+c*m;f.push(M,v,E),f.push(v,P,E)}this.setIndex(f),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},yd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Ld=`#ifdef USE_BUMPMAP
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hd=`#define PI 3.141592653589793
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rp=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
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
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
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
#endif`,gp=`struct PhysicalMaterial {
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
}`,xp=`
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ym=`uniform sampler2D t2D;
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
}`,Em=`#define DISTANCE
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
}`,Tm=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,zm=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,Om=`#define PHONG
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
}`,km=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:yd,alphahash_pars_fragment:vd,alphamap_fragment:_d,alphamap_pars_fragment:Md,alphatest_fragment:bd,alphatest_pars_fragment:Sd,aomap_fragment:wd,aomap_pars_fragment:Ed,batching_pars_vertex:Td,batching_vertex:Ad,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Pd,iridescence_fragment:Id,bumpmap_pars_fragment:Ld,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Fd,color_fragment:zd,color_pars_fragment:Bd,color_pars_vertex:Od,color_vertex:kd,common:Hd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Wd,displacementmap_vertex:Xd,emissivemap_fragment:Yd,emissivemap_pars_fragment:qd,colorspace_fragment:Zd,colorspace_pars_fragment:$d,envmap_fragment:Jd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Qd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:hp,envmap_vertex:tp,fog_vertex:ep,fog_pars_vertex:ip,fog_fragment:np,fog_pars_fragment:sp,gradientmap_pars_fragment:rp,lightmap_pars_fragment:op,lights_lambert_fragment:ap,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:up,lights_toon_pars_fragment:fp,lights_phong_fragment:dp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:xp,lights_fragment_maps:yp,lights_fragment_end:vp,logdepthbuf_fragment:_p,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:Sp,map_fragment:wp,map_pars_fragment:Ep,map_particle_fragment:Tp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Pp,morphcolor_vertex:Ip,morphnormal_vertex:Lp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Up,normal_fragment_begin:Np,normal_fragment_maps:Fp,normal_pars_fragment:zp,normal_pars_vertex:Bp,normal_vertex:Op,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Gp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:Yp,premultiplied_alpha_fragment:qp,project_vertex:Zp,dithering_fragment:$p,dithering_pars_fragment:Jp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:im,skinbase_vertex:nm,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:om,specularmap_fragment:am,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:fm,uv_pars_fragment:dm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:xm,background_frag:ym,backgroundCube_vert:vm,backgroundCube_frag:_m,cube_vert:Mm,cube_frag:bm,depth_vert:Sm,depth_frag:wm,distanceRGBA_vert:Em,distanceRGBA_frag:Tm,equirect_vert:Am,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Im,meshbasic_frag:Lm,meshlambert_vert:Dm,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Fm,meshnormal_vert:zm,meshnormal_frag:Bm,meshphong_vert:Om,meshphong_frag:km,meshphysical_vert:Hm,meshphysical_frag:Vm,meshtoon_vert:Gm,meshtoon_frag:Wm,points_vert:Xm,points_frag:Ym,shadow_vert:qm,shadow_frag:Zm,sprite_vert:$m,sprite_frag:Jm},vt={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Xi={basic:{uniforms:ei([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ei([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ei([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ei([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ei([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ut(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ei([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ei([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ei([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ei([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ei([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ei([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:ei([vt.common,vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:ei([vt.lights,vt.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Xi.physical={uniforms:ei([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Zr={r:0,b:0,g:0},Fn=new Ce,Km=new Xt;function Qm(s,t,e,i,n,r,o){let a=new ut(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function x(y){let M=!1,v=g(y);v===null?m(a,l):v&&v.isColor&&(m(v,1),M=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===Fo)?(h===void 0&&(h=new mt(new Pe(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:Cs(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Fn.copy(M.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(Fn)),h.material.toneMapped=se.getTransfer(v.colorSpace)!==he,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new mt(new Ke(2,2),new _e({name:"BackgroundMaterial",uniforms:Cs(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=se.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(Zr,Uu(s)),i.buffers.color.setClear(Zr.r,Zr.g,Zr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:x,addToRenderList:p}}function jm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,o=!1;function a(b,L,N,F,V){let J=!1,G=u(F,N,L);r!==G&&(r=G,c(r.object)),J=f(b,F,N,V),J&&g(b,F,N,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(b,L,N,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,L,N){let F=N.wireframe===!0,V=i[b.id];V===void 0&&(V={},i[b.id]=V);let J=V[L.id];J===void 0&&(J={},V[L.id]=J);let G=J[F];return G===void 0&&(G=d(l()),J[F]=G),G}function d(b){let L=[],N=[],F=[];for(let V=0;V<e;V++)L[V]=0,N[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:F,object:b,attributes:{},index:null}}function f(b,L,N,F){let V=r.attributes,J=L.attributes,G=0,et=N.getAttributes();for(let z in et)if(et[z].location>=0){let ht=V[z],gt=J[z];if(gt===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor)),ht===void 0||ht.attribute!==gt||gt&&ht.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(b,L,N,F){let V={},J=L.attributes,G=0,et=N.getAttributes();for(let z in et)if(et[z].location>=0){let ht=J[z];ht===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));let gt={};gt.attribute=ht,ht&&ht.data&&(gt.data=ht.data),V[z]=gt,G++}r.attributes=V,r.attributesNum=G,r.index=F}function x(){let b=r.newAttributes;for(let L=0,N=b.length;L<N;L++)b[L]=0}function p(b){m(b,0)}function m(b,L){let N=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;N[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),V[b]!==L&&(s.vertexAttribDivisor(b,L),V[b]=L)}function y(){let b=r.newAttributes,L=r.enabledAttributes;for(let N=0,F=L.length;N<F;N++)L[N]!==b[N]&&(s.disableVertexAttribArray(N),L[N]=0)}function M(b,L,N,F,V,J,G){G===!0?s.vertexAttribIPointer(b,L,N,V,J):s.vertexAttribPointer(b,L,N,F,V,J)}function v(b,L,N,F){x();let V=F.attributes,J=N.getAttributes(),G=L.defaultAttributeValues;for(let et in J){let z=J[et];if(z.location>=0){let lt=V[et];if(lt===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),lt!==void 0){let ht=lt.normalized,gt=lt.itemSize,Et=t.get(lt);if(Et===void 0)continue;let _t=Et.buffer,j=Et.type,ft=Et.bytesPerElement,At=j===s.INT||j===s.UNSIGNED_INT||lt.gpuType===Lc;if(lt.isInterleavedBufferAttribute){let dt=lt.data,Tt=dt.stride,Ot=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<z.locationSize;Gt++)m(z.location+Gt,dt.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Gt=0;Gt<z.locationSize;Gt++)p(z.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let Gt=0;Gt<z.locationSize;Gt++)M(z.location+Gt,gt/z.locationSize,j,ht,Tt*ft,(Ot+gt/z.locationSize*Gt)*ft,At)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<z.locationSize;dt++)m(z.location+dt,lt.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let dt=0;dt<z.locationSize;dt++)p(z.location+dt);s.bindBuffer(s.ARRAY_BUFFER,_t);for(let dt=0;dt<z.locationSize;dt++)M(z.location+dt,gt/z.locationSize,j,ht,gt*ft,gt/z.locationSize*dt*ft,At)}}else if(G!==void 0){let ht=G[et];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(z.location,ht);break;case 3:s.vertexAttrib3fv(z.location,ht);break;case 4:s.vertexAttrib4fv(z.location,ht);break;default:s.vertexAttrib1fv(z.location,ht)}}}}y()}function P(){R();for(let b in i){let L=i[b];for(let N in L){let F=L[N];for(let V in F)h(F[V].object),delete F[V];delete L[N]}delete i[b]}}function E(b){if(i[b.id]===void 0)return;let L=i[b.id];for(let N in L){let F=L[N];for(let V in F)h(F[V].object),delete F[V];delete L[N]}delete i[b.id]}function T(b){for(let L in i){let N=i[L];if(N[b.id]===void 0)continue;let F=N[b.id];for(let V in F)h(F[V].object),delete F[V];delete N[b.id]}}function R(){S(),o=!0,r!==n&&(r=n,c(r.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function t0(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(T){return!(T!==Fi&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Bi&&i.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Yi&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:P,maxSamples:E}}function i0(s){let t=this,e=null,i=0,n=!1,r=!1,o=new rn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{let y=r?0:i,M=y*4,v=m.clippingState||null;l.value=v,v=h(g,d,M,f);for(let P=0;P!==M;++P)v[P]=e[P];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=f;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function n0(s){let t=new WeakMap;function e(o,a){return a===ul?o.mapping=Es:a===fl&&(o.mapping=Ts),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ul||a===fl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Yl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Ps=class extends yo{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_s=4,zh=[.125,.215,.35,.446,.526,.582],Hn=20,Wa=new Ps,Bh=new ut,Xa=null,Ya=0,qa=0,Za=!1,Bn=(1+Math.sqrt(5))/2,ys=1/Bn,Oh=[new I(-Bn,ys,0),new I(Bn,ys,0),new I(-ys,0,Bn),new I(ys,0,Bn),new I(0,Bn,-ys),new I(0,Bn,ys),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Is=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Xa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,Ya,qa),this._renderer.xr.enabled=Za,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:xi,format:Fi,colorSpace:Bs,depthBuffer:!1},n=kh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s0(r)),this._blurMaterial=r0(r,t,e)}return n}_compileMaterial(t){let e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,i,n){let a=new Je(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Bh),h.toneMapping=Sn,h.autoClear=!1;let f=new Qt({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new mt(new Pe,f),x=!1,p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,x=!0):(f.color.copy(Bh),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let M=this._cubeSize;$r(n,y*M,m>2?M:0,M,M),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Es||t.mapping===Ts;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=n?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;$r(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Wa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oh[(n-r-1)%Oh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hn-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):Hn;p>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hn}`);let m=[],y=0;for(let T=0;T<Hn;++T){let R=T/x,S=Math.exp(-R*R/2);m.push(S),T===0?y+=S:T<p&&(y+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;let v=this._sizeLods[n],P=3*v*(n>M-_s?n-M+_s:0),E=4*(this._cubeSize-v);$r(e,P,E,3*v,2*v),l.setRenderTarget(e),l.render(u,Wa)}};function s0(s){let t=[],e=[],i=[],n=s,r=s-_s+1+zh.length;for(let o=0;o<r;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>s-_s?l=zh[o-s+_s-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*f),M=new Float32Array(p*g*f),v=new Float32Array(m*g*f);for(let E=0;E<f;E++){let T=E%3*2/3-1,R=E>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(S,x*g*E),M.set(d,p*g*E);let b=[E,E,E,E,E,E];v.set(b,m*g*E)}let P=new Vt;P.setAttribute("position",new ve(y,x)),P.setAttribute("uv",new ve(M,p)),P.setAttribute("faceIndex",new ve(v,m)),t.push(P),n>_s&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kh(s,t,e){let i=new We(s,t,e);return i.texture.mapping=Fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function r0(s,t,e){let i=new Float32Array(Hn),n=new I(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Hh(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Vh(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function o0(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ul||l===fl,h=l===Es||l===Ts;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Is(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(e===null&&(e=new Is(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function a0(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&sr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function l0(s,t,e,i){let n={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)t.remove(x[p])}d.removeEventListener("dispose",o),delete n[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)t.update(x[p],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let M=0,v=y.length;M<v;M+=3){let P=y[M+0],E=y[M+1],T=y[M+2];d.push(P,E,E,T,T,P)}}else if(g!==void 0){let y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let P=M+0,E=M+1,T=M+2;d.push(P,E,E,T,T,P)}}else return;let p=new(Lu(d)?xo:go)(d,1);p.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function c0(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function u(d,f,g,x){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y]*x[y];e.update(m,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function h0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function u0(s,t,e){let i=new WeakMap,n=new ge;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let v=a.attributes.position.count*M,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*P*4*u),T=new po(E,v,P,u);T.type=Yi,T.needsUpdate=!0;let R=M*4;for(let b=0;b<u;b++){let L=p[b],N=m[b],F=y[b],V=v*P*4*b;for(let J=0;J<L.count;J++){let G=J*R;f===!0&&(n.fromBufferAttribute(L,J),E[V+G+0]=n.x,E[V+G+1]=n.y,E[V+G+2]=n.z,E[V+G+3]=0),g===!0&&(n.fromBufferAttribute(N,J),E[V+G+4]=n.x,E[V+G+5]=n.y,E[V+G+6]=n.z,E[V+G+7]=0),x===!0&&(n.fromBufferAttribute(F,J),E[V+G+8]=n.x,E[V+G+9]=n.y,E[V+G+10]=n.z,E[V+G+11]=F.itemSize===4?n.w:1)}}d={count:u,texture:T,size:new yt(v,P)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function f0(s,t,e,i){let n=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var _o=class extends ui{constructor(t,e,i,n,r,o,a,l,c,h=Ms){if(h!==Ms&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ms&&(i=Gn),i===void 0&&h===Rs&&(i=As),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mi,this.minFilter=l!==void 0?l:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fu=new ui,Gh=new _o(1,1),zu=new po,Bu=new Wl,Ou=new vo,Wh=[],Xh=[],Yh=new Float32Array(16),qh=new Float32Array(9),Zh=new Float32Array(4);function Os(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Wh[n];if(r===void 0&&(r=new Float32Array(n),Wh[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Oo(s,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function d0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function g0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function x0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,i))return;Zh.set(i),s.uniformMatrix2fv(this.addr,!1,Zh),ke(e,i)}}function y0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,i))return;qh.set(i),s.uniformMatrix3fv(this.addr,!1,qh),ke(e,i)}}function v0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,i))return;Yh.set(i),s.uniformMatrix4fv(this.addr,!1,Yh),ke(e,i)}}function _0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function b0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function S0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function w0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function E0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function T0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function A0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function R0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Gh.compareFunction=Iu,r=Gh):r=Fu,e.setTexture2D(t||r,n)}function C0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Bu,n)}function P0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Ou,n)}function I0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||zu,n)}function L0(s){switch(s){case 5126:return d0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return x0;case 35675:return y0;case 35676:return v0;case 5124:case 35670:return _0;case 35667:case 35671:return M0;case 35668:case 35672:return b0;case 35669:case 35673:return S0;case 5125:return w0;case 36294:return E0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}function D0(s,t){s.uniform1fv(this.addr,t)}function U0(s,t){let e=Os(t,this.size,2);s.uniform2fv(this.addr,e)}function N0(s,t){let e=Os(t,this.size,3);s.uniform3fv(this.addr,e)}function F0(s,t){let e=Os(t,this.size,4);s.uniform4fv(this.addr,e)}function z0(s,t){let e=Os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function B0(s,t){let e=Os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function O0(s,t){let e=Os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function k0(s,t){s.uniform1iv(this.addr,t)}function H0(s,t){s.uniform2iv(this.addr,t)}function V0(s,t){s.uniform3iv(this.addr,t)}function G0(s,t){s.uniform4iv(this.addr,t)}function W0(s,t){s.uniform1uiv(this.addr,t)}function X0(s,t){s.uniform2uiv(this.addr,t)}function Y0(s,t){s.uniform3uiv(this.addr,t)}function q0(s,t){s.uniform4uiv(this.addr,t)}function Z0(s,t,e){let i=this.cache,n=t.length,r=Oo(e,n);Oe(i,r)||(s.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Fu,r[o])}function $0(s,t,e){let i=this.cache,n=t.length,r=Oo(e,n);Oe(i,r)||(s.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Bu,r[o])}function J0(s,t,e){let i=this.cache,n=t.length,r=Oo(e,n);Oe(i,r)||(s.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Ou,r[o])}function K0(s,t,e){let i=this.cache,n=t.length,r=Oo(e,n);Oe(i,r)||(s.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||zu,r[o])}function Q0(s){switch(s){case 5126:return D0;case 35664:return U0;case 35665:return N0;case 35666:return F0;case 35674:return z0;case 35675:return B0;case 35676:return O0;case 5124:case 35670:return k0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return G0;case 5125:return W0;case 36294:return X0;case 36295:return Y0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return K0}}var ql=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=L0(e.type)}},Zl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Q0(e.type)}},$l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},$a=/(\w+)(\])?(\[|\.)?/g;function $h(s,t){s.seq.push(t),s.map[t.id]=t}function j0(s,t,e){let i=s.name,n=i.length;for($a.lastIndex=0;;){let r=$a.exec(i),o=$a.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){$h(e,c===void 0?new ql(a,s,t):new Zl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new $l(a),$h(e,u)),e=u}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);j0(r,o,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Jh(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var tg=37297,eg=0;function ig(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Kh=new Wt;function ng(s){se._getMatrix(Kh,se.workingColorSpace,s);let t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case Bo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Qh(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+ig(s.getShaderSource(t),o)}else return n}function sg(s,t){let e=ng(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rg(s,t){let e;switch(t){case Ac:e="Linear";break;case Rc:e="Reinhard";break;case Cc:e="Cineon";break;case yr:e="ACESFilmic";break;case Pc:e="AgX";break;case Ic:e="Neutral";break;case zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jr=new I;function og(){se.getLuminanceCoefficients(Jr);let s=Jr.x.toFixed(4),t=Jr.y.toFixed(4),e=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function lg(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function cg(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function rr(s){return s!==""}function jh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(s){return s.replace(hg,fg)}var ug=new Map;function fg(s,t){let e=Zt[t];if(e===void 0){let i=ug.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(s){return s.replace(dg,pg)}function pg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function iu(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function mg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_u?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sn&&(t="SHADOWMAP_TYPE_VSM"),t}function gg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Es:case Ts:t="ENVMAP_TYPE_CUBE";break;case Fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ts&&(t="ENVMAP_MODE_REFRACTION"),t}function yg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case No:t="ENVMAP_BLENDING_MULTIPLY";break;case Nf:t="ENVMAP_BLENDING_MIX";break;case Ff:t="ENVMAP_BLENDING_ADD";break}return t}function vg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _g(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=mg(e),c=gg(e),h=xg(e),u=yg(e),d=vg(e),f=ag(e),g=lg(r),x=n.createProgram(),p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`)):(p=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),m=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=Jl(o),o=jh(o,e),o=tu(o,e),a=Jl(a),a=jh(a,e),a=tu(a,e),o=eu(o),a=eu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=y+p+o,v=y+m+a,P=Jh(n,n.VERTEX_SHADER,M),E=Jh(n,n.FRAGMENT_SHADER,v);n.attachShader(x,P),n.attachShader(x,E),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function T(L){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(x).trim(),F=n.getShaderInfoLog(P).trim(),V=n.getShaderInfoLog(E).trim(),J=!0,G=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,P,E);else{let et=Qh(n,P,"vertex"),z=Qh(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+et+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||V==="")&&(G=!1);G&&(L.diagnostics={runnable:J,programLog:N,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:m}})}n.deleteShader(P),n.deleteShader(E),R=new Ss(n,x),S=cg(n,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(x,tg)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=E,this}var Mg=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ql(t),e.set(t,i)),i}},Ql=class{constructor(t){this.id=Mg++,this.code=t,this.usedTimes=0}};function bg(s,t,e,i,n,r,o){let a=new mo,l=new Kl,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,b,L,N,F){let V=N.fog,J=F.geometry,G=S.isMeshStandardMaterial?N.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),z=et&&et.mapping===Fo?et.image.height:null,lt=g[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,gt=ht!==void 0?ht.length:0,Et=0;J.morphAttributes.position!==void 0&&(Et=1),J.morphAttributes.normal!==void 0&&(Et=2),J.morphAttributes.color!==void 0&&(Et=3);let _t,j,ft,At;if(lt){let de=Xi[lt];_t=de.vertexShader,j=de.fragmentShader}else _t=S.vertexShader,j=S.fragmentShader,l.update(S),ft=l.getVertexShaderID(S),At=l.getFragmentShaderID(S);let dt=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,Gt=F.isBatchedMesh===!0,ae=!!S.map,ne=!!S.matcap,Me=!!et,k=!!S.aoMap,li=!!S.lightMap,Jt=!!S.bumpMap,Kt=!!S.normalMap,zt=!!S.displacementMap,me=!!S.emissiveMap,C=!!S.metalnessMap,w=!!S.roughnessMap,_=S.anisotropy>0,D=S.clearcoat>0,W=S.dispersion>0,Y=S.iridescence>0,X=S.sheen>0,at=S.transmission>0,K=_&&!!S.anisotropyMap,rt=D&&!!S.clearcoatMap,St=D&&!!S.clearcoatNormalMap,it=D&&!!S.clearcoatRoughnessMap,ot=Y&&!!S.iridescenceMap,ct=Y&&!!S.iridescenceThicknessMap,st=X&&!!S.sheenColorMap,tt=X&&!!S.sheenRoughnessMap,Pt=!!S.specularMap,Ct=!!S.specularColorMap,$=!!S.specularIntensityMap,U=at&&!!S.transmissionMap,nt=at&&!!S.thicknessMap,H=!!S.gradientMap,Q=!!S.alphaMap,xt=S.alphaTest>0,Mt=!!S.alphaHash,Yt=!!S.extensions,Re=Sn;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Re=s.toneMapping);let qe={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:_t,fragmentShader:j,defines:S.defines,customVertexShaderID:ft,customFragmentShaderID:At,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Bs,alphaToCoverage:!!S.alphaToCoverage,map:ae,matcap:ne,envMap:Me,envMapMode:Me&&et.mapping,envMapCubeUVHeight:z,aoMap:k,lightMap:li,bumpMap:Jt,normalMap:Kt,displacementMap:d&&zt,emissiveMap:me,normalMapObjectSpace:Kt&&S.normalMapType===Hf,normalMapTangentSpace:Kt&&S.normalMapType===zo,metalnessMap:C,roughnessMap:w,anisotropy:_,anisotropyMap:K,clearcoat:D,clearcoatMap:rt,clearcoatNormalMap:St,clearcoatRoughnessMap:it,dispersion:W,iridescence:Y,iridescenceMap:ot,iridescenceThicknessMap:ct,sheen:X,sheenColorMap:st,sheenRoughnessMap:tt,specularMap:Pt,specularColorMap:Ct,specularIntensityMap:$,transmission:at,transmissionMap:U,thicknessMap:nt,gradientMap:H,opaque:S.transparent===!1&&S.blending===bn&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:Mt,combine:S.combine,mapUv:ae&&x(S.map.channel),aoMapUv:k&&x(S.aoMap.channel),lightMapUv:li&&x(S.lightMap.channel),bumpMapUv:Jt&&x(S.bumpMap.channel),normalMapUv:Kt&&x(S.normalMap.channel),displacementMapUv:zt&&x(S.displacementMap.channel),emissiveMapUv:me&&x(S.emissiveMap.channel),metalnessMapUv:C&&x(S.metalnessMap.channel),roughnessMapUv:w&&x(S.roughnessMap.channel),anisotropyMapUv:K&&x(S.anisotropyMap.channel),clearcoatMapUv:rt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:St&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:st&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:tt&&x(S.sheenRoughnessMap.channel),specularMapUv:Pt&&x(S.specularMap.channel),specularColorMapUv:Ct&&x(S.specularColorMap.channel),specularIntensityMapUv:$&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:nt&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Kt||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(ae||Q),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:me&&S.emissiveMap.isVideoTexture===!0&&se.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ue,flipSided:S.side===ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(b,S),M(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let b=g[S.type],L;if(b){let N=Xi[b];L=Rn.clone(N.uniforms)}else L=S.uniforms;return L}function P(S,b){let L;for(let N=0,F=h.length;N<F;N++){let V=h[N];if(V.cacheKey===b){L=V,++L.usedTimes;break}}return L===void 0&&(L=new _g(s,b,S,r),h.push(L)),L}function E(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:P,releaseProgram:E,releaseShaderCache:T,programs:h,dispose:R}}function Sg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function wg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function nu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function su(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,f,g,x,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(u,d,f,g,x,p){let m=o(u,d,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||wg),i.length>1&&i.sort(d||nu),n.length>1&&n.sort(d||nu)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function Eg(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new su,s.set(i,[o])):n>=r.length?(o=new su,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Tg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ut};break;case"SpotLight":e={position:new I,direction:new I,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Ag(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Rg=0;function Cg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Pg(s){let t=new Tg,e=Ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let n=new I,r=new Xt,o=new Xt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,M=0,v=0,P=0,E=0,T=0;c.sort(Cg);for(let S=0,b=c.length;S<b;S++){let L=c[S],N=L.color,F=L.intensity,V=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],F);T++}else if(L.isDirectionalLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let et=L.shadow,z=e.get(L);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=L.shadow.matrix,y++}i.directional[f]=G,f++}else if(L.isSpotLight){let G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(N).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[x]=G;let et=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,et.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[x]=et.matrix,L.castShadow){let z=e.get(L);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=J,v++}x++}else if(L.isRectAreaLight){let G=t.get(L);G.color.copy(N).multiplyScalar(F),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=G,p++}else if(L.isPointLight){let G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let et=L.shadow,z=e.get(L);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,z.shadowCameraNear=et.camera.near,z.shadowCameraFar=et.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=G,g++}else if(L.isHemisphereLight){let G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(F),G.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[m]=G,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==P||R.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+P-E,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=P,R.numLightProbes=T,i.version=Rg++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let M=c[m];if(M.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),u++}else if(M.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),f++}else if(M.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function ru(s){let t=new Pg(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ig(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new ru(s),t.set(n,[a])):r>=o.length?(a=new ru(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var jl=class extends Oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},tc=class extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
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
}`;function Ug(s,t,e){let i=new ur,n=new yt,r=new yt,o=new ge,a=new jl({depthPacking:kf}),l=new tc,c={},h=e.maxTextureSize,u={[wn]:ze,[ze]:wn,[Ue]:Ue},d=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Lg,fragmentShader:Dg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Vt;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let m=this.type;this.render=function(E,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),b=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(qi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=m!==sn&&this.type===sn,V=m===sn&&this.type!==sn;for(let J=0,G=E.length;J<G;J++){let et=E[J],z=et.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let lt=z.getFrameExtents();if(n.multiply(lt),r.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/lt.x),n.x=r.x*lt.x,z.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/lt.y),n.y=r.y*lt.y,z.mapSize.y=r.y)),z.map===null||F===!0||V===!0){let gt=this.type!==sn?{minFilter:mi,magFilter:mi}:{};z.map!==null&&z.map.dispose(),z.map=new We(n.x,n.y,gt),z.map.texture.name=et.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let ht=z.getViewportCount();for(let gt=0;gt<ht;gt++){let Et=z.getViewport(gt);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),N.viewport(o),z.updateMatrices(et,gt),i=z.getFrustum(),v(T,R,z.camera,et,this.type)}z.isPointLightShadow!==!0&&this.type===sn&&y(z,R),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(S,b,L)};function y(E,T){let R=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new We(n.x,n.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,R,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,R,f,x,null)}function M(E,T,R,S){let b=null,L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=b.uuid,F=T.uuid,V=c[N];V===void 0&&(V={},c[N]=V);let J=V[F];J===void 0&&(J=b.clone(),V[F]=J,T.addEventListener("dispose",P)),b=J}if(b.visible=T.visible,b.wireframe=T.wireframe,S===sn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=s.properties.get(b);N.light=R}return b}function v(E,T,R,S,b){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===sn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=t.update(E),V=E.material;if(Array.isArray(V)){let J=F.groups;for(let G=0,et=J.length;G<et;G++){let z=J[G],lt=V[z.materialIndex];if(lt&&lt.visible){let ht=M(E,lt,S,b);E.onBeforeShadow(s,E,T,R,F,ht,z),s.renderBufferDirect(R,null,F,ht,E,z),E.onAfterShadow(s,E,T,R,F,ht,z)}}}else if(V.visible){let J=M(E,V,S,b);E.onBeforeShadow(s,E,T,R,F,J,null),s.renderBufferDirect(R,null,F,J,E,null),E.onAfterShadow(s,E,T,R,F,J,null)}}let N=E.children;for(let F=0,V=N.length;F<V;F++)v(N[F],T,R,S,b)}function P(E){E.target.removeEventListener("dispose",P);for(let R in c){let S=c[R],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var Ng={[sl]:rl,[ol]:cl,[al]:hl,[ws]:ll,[rl]:sl,[cl]:ol,[hl]:al,[ll]:ws};function Fg(s,t){function e(){let U=!1,nt=new ge,H=null,Q=new ge(0,0,0,0);return{setMask:function(xt){H!==xt&&!U&&(s.colorMask(xt,xt,xt,xt),H=xt)},setLocked:function(xt){U=xt},setClear:function(xt,Mt,Yt,Re,qe){qe===!0&&(xt*=Re,Mt*=Re,Yt*=Re),nt.set(xt,Mt,Yt,Re),Q.equals(nt)===!1&&(s.clearColor(xt,Mt,Yt,Re),Q.copy(nt))},reset:function(){U=!1,H=null,Q.set(-1,0,0,0)}}}function i(){let U=!1,nt=!1,H=null,Q=null,xt=null;return{setReversed:function(Mt){if(nt!==Mt){let Yt=t.get("EXT_clip_control");nt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);let Re=xt;xt=null,this.setClear(Re)}nt=Mt},getReversed:function(){return nt},setTest:function(Mt){Mt?dt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(Mt){H!==Mt&&!U&&(s.depthMask(Mt),H=Mt)},setFunc:function(Mt){if(nt&&(Mt=Ng[Mt]),Q!==Mt){switch(Mt){case sl:s.depthFunc(s.NEVER);break;case rl:s.depthFunc(s.ALWAYS);break;case ol:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case al:s.depthFunc(s.EQUAL);break;case ll:s.depthFunc(s.GEQUAL);break;case cl:s.depthFunc(s.GREATER);break;case hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=Mt}},setLocked:function(Mt){U=Mt},setClear:function(Mt){xt!==Mt&&(nt&&(Mt=1-Mt),s.clearDepth(Mt),xt=Mt)},reset:function(){U=!1,H=null,Q=null,xt=null,nt=!1}}}function n(){let U=!1,nt=null,H=null,Q=null,xt=null,Mt=null,Yt=null,Re=null,qe=null;return{setTest:function(de){U||(de?dt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(de){nt!==de&&!U&&(s.stencilMask(de),nt=de)},setFunc:function(de,Ii,Ji){(H!==de||Q!==Ii||xt!==Ji)&&(s.stencilFunc(de,Ii,Ji),H=de,Q=Ii,xt=Ji)},setOp:function(de,Ii,Ji){(Mt!==de||Yt!==Ii||Re!==Ji)&&(s.stencilOp(de,Ii,Ji),Mt=de,Yt=Ii,Re=Ji)},setLocked:function(de){U=de},setClear:function(de){qe!==de&&(s.clearStencil(de),qe=de)},reset:function(){U=!1,nt=null,H=null,Q=null,xt=null,Mt=null,Yt=null,Re=null,qe=null}}}let r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,y=null,M=null,v=null,P=null,E=null,T=new ut(0,0,0),R=0,S=!1,b=null,L=null,N=null,F=null,V=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,et=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=et>=1):z.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=et>=2);let lt=null,ht={},gt=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),_t=new ge().fromArray(gt),j=new ge().fromArray(Et);function ft(U,nt,H,Q){let xt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(U,Mt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<H;Yt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(nt+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return Mt}let At={};At[s.TEXTURE_2D]=ft(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=ft(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=ft(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=ft(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),o.setFunc(ws),Jt(!1),Kt(lh),dt(s.CULL_FACE),k(qi);function dt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Tt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Ot(U,nt){return u[U]!==nt?(s.bindFramebuffer(U,nt),u[U]=nt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=nt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Gt(U,nt){let H=f,Q=!1;if(U){H=d.get(nt),H===void 0&&(H=[],d.set(nt,H));let xt=U.textures;if(H.length!==xt.length||H[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Yt=xt.length;Mt<Yt;Mt++)H[Mt]=s.COLOR_ATTACHMENT0+Mt;H.length=xt.length,Q=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,Q=!0);Q&&s.drawBuffers(H)}function ae(U){return g!==U?(s.useProgram(U),g=U,!0):!1}let ne={[On]:s.FUNC_ADD,[yf]:s.FUNC_SUBTRACT,[vf]:s.FUNC_REVERSE_SUBTRACT};ne[_f]=s.MIN,ne[Mf]=s.MAX;let Me={[bf]:s.ZERO,[Sf]:s.ONE,[wf]:s.SRC_COLOR,[il]:s.SRC_ALPHA,[Pf]:s.SRC_ALPHA_SATURATE,[Rf]:s.DST_COLOR,[Tf]:s.DST_ALPHA,[Ef]:s.ONE_MINUS_SRC_COLOR,[nl]:s.ONE_MINUS_SRC_ALPHA,[Cf]:s.ONE_MINUS_DST_COLOR,[Af]:s.ONE_MINUS_DST_ALPHA,[If]:s.CONSTANT_COLOR,[Lf]:s.ONE_MINUS_CONSTANT_COLOR,[Df]:s.CONSTANT_ALPHA,[Uf]:s.ONE_MINUS_CONSTANT_ALPHA};function k(U,nt,H,Q,xt,Mt,Yt,Re,qe,de){if(U===qi){x===!0&&(Tt(s.BLEND),x=!1);return}if(x===!1&&(dt(s.BLEND),x=!0),U!==xf){if(U!==p||de!==S){if((m!==On||v!==On)&&(s.blendEquation(s.FUNC_ADD),m=On,v=On),de)switch(U){case bn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Be:s.blendFunc(s.ONE,s.ONE);break;case ch:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Be:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ch:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,M=null,P=null,E=null,T.set(0,0,0),R=0,p=U,S=de}return}xt=xt||nt,Mt=Mt||H,Yt=Yt||Q,(nt!==m||xt!==v)&&(s.blendEquationSeparate(ne[nt],ne[xt]),m=nt,v=xt),(H!==y||Q!==M||Mt!==P||Yt!==E)&&(s.blendFuncSeparate(Me[H],Me[Q],Me[Mt],Me[Yt]),y=H,M=Q,P=Mt,E=Yt),(Re.equals(T)===!1||qe!==R)&&(s.blendColor(Re.r,Re.g,Re.b,qe),T.copy(Re),R=qe),p=U,S=!1}function li(U,nt){U.side===Ue?Tt(s.CULL_FACE):dt(s.CULL_FACE);let H=U.side===ze;nt&&(H=!H),Jt(H),U.blending===bn&&U.transparent===!1?k(qi):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),me(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(U){b!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),b=U)}function Kt(U){U!==mf?(dt(s.CULL_FACE),U!==L&&(U===lh?s.cullFace(s.BACK):U===gf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),L=U}function zt(U){U!==N&&(G&&s.lineWidth(U),N=U)}function me(U,nt,H){U?(dt(s.POLYGON_OFFSET_FILL),(F!==nt||V!==H)&&(s.polygonOffset(nt,H),F=nt,V=H)):Tt(s.POLYGON_OFFSET_FILL)}function C(U){U?dt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function w(U){U===void 0&&(U=s.TEXTURE0+J-1),lt!==U&&(s.activeTexture(U),lt=U)}function _(U,nt,H){H===void 0&&(lt===null?H=s.TEXTURE0+J-1:H=lt);let Q=ht[H];Q===void 0&&(Q={type:void 0,texture:void 0},ht[H]=Q),(Q.type!==U||Q.texture!==nt)&&(lt!==H&&(s.activeTexture(H),lt=H),s.bindTexture(U,nt||At[U]),Q.type=U,Q.texture=nt)}function D(){let U=ht[lt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function W(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(U){_t.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),_t.copy(U))}function tt(U){j.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function Pt(U,nt){let H=c.get(nt);H===void 0&&(H=new WeakMap,c.set(nt,H));let Q=H.get(U);Q===void 0&&(Q=s.getUniformBlockIndex(nt,U.name),H.set(U,Q))}function Ct(U,nt){let Q=c.get(nt).get(U);l.get(nt)!==Q&&(s.uniformBlockBinding(nt,Q,U.__bindingPointIndex),l.set(nt,Q))}function $(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},lt=null,ht={},u={},d=new WeakMap,f=[],g=null,x=!1,p=null,m=null,y=null,M=null,v=null,P=null,E=null,T=new ut(0,0,0),R=0,S=!1,b=null,L=null,N=null,F=null,V=null,_t.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Tt,bindFramebuffer:Ot,drawBuffers:Gt,useProgram:ae,setBlending:k,setMaterial:li,setFlipSided:Jt,setCullFace:Kt,setLineWidth:zt,setPolygonOffset:me,setScissorTest:C,activeTexture:w,bindTexture:_,unbindTexture:D,compressedTexImage2D:W,compressedTexImage3D:Y,texImage2D:ot,texImage3D:ct,updateUBOMapping:Pt,uniformBlockBinding:Ct,texStorage2D:St,texStorage3D:it,texSubImage2D:X,texSubImage3D:at,compressedTexSubImage2D:K,compressedTexSubImage3D:rt,scissor:st,viewport:tt,reset:$}}function ou(s,t,e,i){let n=zg(i);switch(e){case Eu:return s*t;case Au:return s*t;case Ru:return s*t*2;case vr:return s*t/n.components*n.byteLength;case Nc:return s*t/n.components*n.byteLength;case Cu:return s*t*2/n.components*n.byteLength;case Fc:return s*t*2/n.components*n.byteLength;case Tu:return s*t*3/n.components*n.byteLength;case Fi:return s*t*4/n.components*n.byteLength;case zc:return s*t*4/n.components*n.byteLength;case so:case ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ml:case xl:return Math.max(s,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(s,8)*Math.max(t,8)/2;case yl:case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case lo:case Nl:case Fl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Pu:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Bl:case Ol:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zg(s){switch(s){case Bi:case bu:return{byteLength:1,components:1};case cr:case Su:case xi:return{byteLength:2,components:1};case Dc:case Uc:return{byteLength:2,components:4};case Gn:case Lc:case Yi:return{byteLength:4,components:1};case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Bg(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return f?new OffscreenCanvas(w,_):uo("canvas")}function x(w,_,D){let W=1,Y=C(w);if((Y.width>D||Y.height>D)&&(W=D/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let X=Math.floor(W*Y.width),at=Math.floor(W*Y.height);u===void 0&&(u=g(X,at));let K=_?g(X,at):u;return K.width=X,K.height=at,K.getContext("2d").drawImage(w,0,0,X,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+at+")."),K}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function p(w){return w.generateMipmaps}function m(w){s.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(w,_,D,W,Y=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=_;if(_===s.RED&&(D===s.FLOAT&&(X=s.R32F),D===s.HALF_FLOAT&&(X=s.R16F),D===s.UNSIGNED_BYTE&&(X=s.R8)),_===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(X=s.R8UI),D===s.UNSIGNED_SHORT&&(X=s.R16UI),D===s.UNSIGNED_INT&&(X=s.R32UI),D===s.BYTE&&(X=s.R8I),D===s.SHORT&&(X=s.R16I),D===s.INT&&(X=s.R32I)),_===s.RG&&(D===s.FLOAT&&(X=s.RG32F),D===s.HALF_FLOAT&&(X=s.RG16F),D===s.UNSIGNED_BYTE&&(X=s.RG8)),_===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(X=s.RG8UI),D===s.UNSIGNED_SHORT&&(X=s.RG16UI),D===s.UNSIGNED_INT&&(X=s.RG32UI),D===s.BYTE&&(X=s.RG8I),D===s.SHORT&&(X=s.RG16I),D===s.INT&&(X=s.RG32I)),_===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(X=s.RGB8UI),D===s.UNSIGNED_SHORT&&(X=s.RGB16UI),D===s.UNSIGNED_INT&&(X=s.RGB32UI),D===s.BYTE&&(X=s.RGB8I),D===s.SHORT&&(X=s.RGB16I),D===s.INT&&(X=s.RGB32I)),_===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),D===s.UNSIGNED_INT&&(X=s.RGBA32UI),D===s.BYTE&&(X=s.RGBA8I),D===s.SHORT&&(X=s.RGBA16I),D===s.INT&&(X=s.RGBA32I)),_===s.RGB&&D===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),_===s.RGBA){let at=Y?Bo:se.getTransfer(W);D===s.FLOAT&&(X=s.RGBA32F),D===s.HALF_FLOAT&&(X=s.RGBA16F),D===s.UNSIGNED_BYTE&&(X=at===he?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(w,_){let D;return w?_===null||_===Gn||_===As?D=s.DEPTH24_STENCIL8:_===Yi?D=s.DEPTH32F_STENCIL8:_===cr&&(D=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Gn||_===As?D=s.DEPTH_COMPONENT24:_===Yi?D=s.DEPTH_COMPONENT32F:_===cr&&(D=s.DEPTH_COMPONENT16),D}function P(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==mi&&w.minFilter!==Si?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function E(w){let _=w.target;_.removeEventListener("dispose",E),R(_),_.isVideoTexture&&h.delete(_)}function T(w){let _=w.target;_.removeEventListener("dispose",T),b(_)}function R(w){let _=i.get(w);if(_.__webglInit===void 0)return;let D=w.source,W=d.get(D);if(W){let Y=W[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(w),Object.keys(W).length===0&&d.delete(D)}i.remove(w)}function S(w){let _=i.get(w);s.deleteTexture(_.__webglTexture);let D=w.source,W=d.get(D);delete W[_.__cacheKey],o.memory.textures--}function b(w){let _=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Y=0;Y<_.__webglFramebuffer[W].length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[W][Y]);else s.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)s.deleteFramebuffer(_.__webglFramebuffer[W]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let D=w.textures;for(let W=0,Y=D.length;W<Y;W++){let X=i.get(D[W]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(D[W])}i.remove(w)}let L=0;function N(){L=0}function F(){let w=L;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),L+=1,w}function V(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function J(w,_){let D=i.get(w);if(w.isVideoTexture&&zt(w),w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){let W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(D,w,_);return}}e.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+_)}function G(w,_){let D=i.get(w);if(w.version>0&&D.__version!==w.version){j(D,w,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+_)}function et(w,_){let D=i.get(w);if(w.version>0&&D.__version!==w.version){j(D,w,_);return}e.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+_)}function z(w,_){let D=i.get(w);if(w.version>0&&D.__version!==w.version){ft(D,w,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+_)}let lt={[zi]:s.REPEAT,[on]:s.CLAMP_TO_EDGE,[dl]:s.MIRRORED_REPEAT},ht={[mi]:s.NEAREST,[Bf]:s.NEAREST_MIPMAP_NEAREST,[Pr]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[_a]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},gt={[Vf]:s.NEVER,[Zf]:s.ALWAYS,[Gf]:s.LESS,[Iu]:s.LEQUAL,[Wf]:s.EQUAL,[qf]:s.GEQUAL,[Xf]:s.GREATER,[Yf]:s.NOTEQUAL};function Et(w,_){if(_.type===Yi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Si||_.magFilter===_a||_.magFilter===Pr||_.magFilter===Vn||_.minFilter===Si||_.minFilter===_a||_.minFilter===Pr||_.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,lt[_.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,lt[_.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,lt[_.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ht[_.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,gt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===mi||_.minFilter!==Pr&&_.minFilter!==Vn||_.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function _t(w,_){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",E));let W=_.source,Y=d.get(W);Y===void 0&&(Y={},d.set(W,Y));let X=V(_);if(X!==w.__cacheKey){Y[X]===void 0&&(Y[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Y[X].usedTimes++;let at=Y[w.__cacheKey];at!==void 0&&(Y[w.__cacheKey].usedTimes--,at.usedTimes===0&&S(_)),w.__cacheKey=X,w.__webglTexture=Y[X].texture}return D}function j(w,_,D){let W=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=s.TEXTURE_3D);let Y=_t(w,_),X=_.source;e.bindTexture(W,w.__webglTexture,s.TEXTURE0+D);let at=i.get(X);if(X.version!==at.__version||Y===!0){e.activeTexture(s.TEXTURE0+D);let K=se.getPrimaries(se.workingColorSpace),rt=_.colorSpace===Mn?null:se.getPrimaries(_.colorSpace),St=_.colorSpace===Mn||K===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let it=x(_.image,!1,n.maxTextureSize);it=me(_,it);let ot=r.convert(_.format,_.colorSpace),ct=r.convert(_.type),st=M(_.internalFormat,ot,ct,_.colorSpace,_.isVideoTexture);Et(W,_);let tt,Pt=_.mipmaps,Ct=_.isVideoTexture!==!0,$=at.__version===void 0||Y===!0,U=X.dataReady,nt=P(_,it);if(_.isDepthTexture)st=v(_.format===Rs,_.type),$&&(Ct?e.texStorage2D(s.TEXTURE_2D,1,st,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,st,it.width,it.height,0,ot,ct,null));else if(_.isDataTexture)if(Pt.length>0){Ct&&$&&e.texStorage2D(s.TEXTURE_2D,nt,st,Pt[0].width,Pt[0].height);for(let H=0,Q=Pt.length;H<Q;H++)tt=Pt[H],Ct?U&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,tt.width,tt.height,ot,ct,tt.data):e.texImage2D(s.TEXTURE_2D,H,st,tt.width,tt.height,0,ot,ct,tt.data);_.generateMipmaps=!1}else Ct?($&&e.texStorage2D(s.TEXTURE_2D,nt,st,it.width,it.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,ot,ct,it.data)):e.texImage2D(s.TEXTURE_2D,0,st,it.width,it.height,0,ot,ct,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ct&&$&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,st,Pt[0].width,Pt[0].height,it.depth);for(let H=0,Q=Pt.length;H<Q;H++)if(tt=Pt[H],_.format!==Fi)if(ot!==null)if(Ct){if(U)if(_.layerUpdates.size>0){let xt=ou(tt.width,tt.height,_.format,_.type);for(let Mt of _.layerUpdates){let Yt=tt.data.subarray(Mt*xt/tt.data.BYTES_PER_ELEMENT,(Mt+1)*xt/tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,Mt,tt.width,tt.height,1,ot,Yt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,tt.width,tt.height,it.depth,ot,tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,st,tt.width,tt.height,it.depth,0,tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,tt.width,tt.height,it.depth,ot,ct,tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,st,tt.width,tt.height,it.depth,0,ot,ct,tt.data)}else{Ct&&$&&e.texStorage2D(s.TEXTURE_2D,nt,st,Pt[0].width,Pt[0].height);for(let H=0,Q=Pt.length;H<Q;H++)tt=Pt[H],_.format!==Fi?ot!==null?Ct?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,tt.width,tt.height,ot,tt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,st,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?U&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,tt.width,tt.height,ot,ct,tt.data):e.texImage2D(s.TEXTURE_2D,H,st,tt.width,tt.height,0,ot,ct,tt.data)}else if(_.isDataArrayTexture)if(Ct){if($&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,st,it.width,it.height,it.depth),U)if(_.layerUpdates.size>0){let H=ou(it.width,it.height,_.format,_.type);for(let Q of _.layerUpdates){let xt=it.data.subarray(Q*H/it.data.BYTES_PER_ELEMENT,(Q+1)*H/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,ot,ct,xt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,ct,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,ot,ct,it.data);else if(_.isData3DTexture)Ct?($&&e.texStorage3D(s.TEXTURE_3D,nt,st,it.width,it.height,it.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,ct,it.data)):e.texImage3D(s.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,ot,ct,it.data);else if(_.isFramebufferTexture){if($)if(Ct)e.texStorage2D(s.TEXTURE_2D,nt,st,it.width,it.height);else{let H=it.width,Q=it.height;for(let xt=0;xt<nt;xt++)e.texImage2D(s.TEXTURE_2D,xt,st,H,Q,0,ot,ct,null),H>>=1,Q>>=1}}else if(Pt.length>0){if(Ct&&$){let H=C(Pt[0]);e.texStorage2D(s.TEXTURE_2D,nt,st,H.width,H.height)}for(let H=0,Q=Pt.length;H<Q;H++)tt=Pt[H],Ct?U&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,ot,ct,tt):e.texImage2D(s.TEXTURE_2D,H,st,ot,ct,tt);_.generateMipmaps=!1}else if(Ct){if($){let H=C(it);e.texStorage2D(s.TEXTURE_2D,nt,st,H.width,H.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,ct,it)}else e.texImage2D(s.TEXTURE_2D,0,st,ot,ct,it);p(_)&&m(W),at.__version=X.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ft(w,_,D){if(_.image.length!==6)return;let W=_t(w,_),Y=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+D);let X=i.get(Y);if(Y.version!==X.__version||W===!0){e.activeTexture(s.TEXTURE0+D);let at=se.getPrimaries(se.workingColorSpace),K=_.colorSpace===Mn?null:se.getPrimaries(_.colorSpace),rt=_.colorSpace===Mn||at===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let St=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,ot=[];for(let Q=0;Q<6;Q++)!St&&!it?ot[Q]=x(_.image[Q],!0,n.maxCubemapSize):ot[Q]=it?_.image[Q].image:_.image[Q],ot[Q]=me(_,ot[Q]);let ct=ot[0],st=r.convert(_.format,_.colorSpace),tt=r.convert(_.type),Pt=M(_.internalFormat,st,tt,_.colorSpace),Ct=_.isVideoTexture!==!0,$=X.__version===void 0||W===!0,U=Y.dataReady,nt=P(_,ct);Et(s.TEXTURE_CUBE_MAP,_);let H;if(St){Ct&&$&&e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Pt,ct.width,ct.height);for(let Q=0;Q<6;Q++){H=ot[Q].mipmaps;for(let xt=0;xt<H.length;xt++){let Mt=H[xt];_.format!==Fi?st!==null?Ct?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,Mt.width,Mt.height,st,Mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,Pt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,Mt.width,Mt.height,st,tt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,Pt,Mt.width,Mt.height,0,st,tt,Mt.data)}}}else{if(H=_.mipmaps,Ct&&$){H.length>0&&nt++;let Q=C(ot[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Pt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ot[Q].width,ot[Q].height,st,tt,ot[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Pt,ot[Q].width,ot[Q].height,0,st,tt,ot[Q].data);for(let xt=0;xt<H.length;xt++){let Yt=H[xt].image[Q].image;Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Yt.width,Yt.height,st,tt,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,Pt,Yt.width,Yt.height,0,st,tt,Yt.data)}}else{Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,st,tt,ot[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Pt,st,tt,ot[Q]);for(let xt=0;xt<H.length;xt++){let Mt=H[xt];Ct?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,st,tt,Mt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,Pt,st,tt,Mt.image[Q])}}}p(_)&&m(s.TEXTURE_CUBE_MAP),X.__version=Y.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function At(w,_,D,W,Y,X){let at=r.convert(D.format,D.colorSpace),K=r.convert(D.type),rt=M(D.internalFormat,at,K,D.colorSpace),St=i.get(_),it=i.get(D);if(it.__renderTarget=_,!St.__hasExternalTextures){let ot=Math.max(1,_.width>>X),ct=Math.max(1,_.height>>X);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,X,rt,ot,ct,_.depth,0,at,K,null):e.texImage2D(Y,X,rt,ot,ct,0,at,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Kt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,Y,it.__webglTexture,0,Jt(_)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,Y,it.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(w,_,D){if(s.bindRenderbuffer(s.RENDERBUFFER,w),_.depthBuffer){let W=_.depthTexture,Y=W&&W.isDepthTexture?W.type:null,X=v(_.stencilBuffer,Y),at=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=Jt(_);Kt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,X,_.width,_.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,X,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,X,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,w)}else{let W=_.textures;for(let Y=0;Y<W.length;Y++){let X=W[Y],at=r.convert(X.format,X.colorSpace),K=r.convert(X.type),rt=M(X.internalFormat,at,K,X.colorSpace),St=Jt(_);D&&Kt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,St,rt,_.width,_.height):Kt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St,rt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,rt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=i.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let Y=W.__webglTexture,X=Jt(_);if(_.depthTexture.format===Ms)Kt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(_.depthTexture.format===Rs)Kt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ot(w){let _=i.get(w),D=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let W=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=W}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Tt(_.__webglFramebuffer,w)}else if(D){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=s.createRenderbuffer(),dt(_.__webglDepthbuffer[W],w,!1);else{let Y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,X)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),dt(_.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,Y)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(w,_,D){let W=i.get(w);_!==void 0&&At(W.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Ot(w)}function ae(w){let _=w.texture,D=i.get(w),W=i.get(_);w.addEventListener("dispose",T);let Y=w.textures,X=w.isWebGLCubeRenderTarget===!0,at=Y.length>1;if(at||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=_.version,o.memory.textures++),X){D.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[K]=[];for(let rt=0;rt<_.mipmaps.length;rt++)D.__webglFramebuffer[K][rt]=s.createFramebuffer()}else D.__webglFramebuffer[K]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)D.__webglFramebuffer[K]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(at)for(let K=0,rt=Y.length;K<rt;K++){let St=i.get(Y[K]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&Kt(w)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let rt=Y[K];D.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[K]);let St=r.convert(rt.format,rt.colorSpace),it=r.convert(rt.type),ot=M(rt.internalFormat,St,it,rt.colorSpace,w.isXRRenderTarget===!0),ct=Jt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,ot,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,D.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(D.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Et(s.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)At(D.__webglFramebuffer[K][rt],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,rt);else At(D.__webglFramebuffer[K],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,rt=Y.length;K<rt;K++){let St=Y[K],it=i.get(St);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),Et(s.TEXTURE_2D,St),At(D.__webglFramebuffer,w,St,s.COLOR_ATTACHMENT0+K,s.TEXTURE_2D,0),p(St)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,W.__webglTexture),Et(K,_),_.mipmaps&&_.mipmaps.length>0)for(let rt=0;rt<_.mipmaps.length;rt++)At(D.__webglFramebuffer[rt],w,_,s.COLOR_ATTACHMENT0,K,rt);else At(D.__webglFramebuffer,w,_,s.COLOR_ATTACHMENT0,K,0);p(_)&&m(K),e.unbindTexture()}w.depthBuffer&&Ot(w)}function ne(w){let _=w.textures;for(let D=0,W=_.length;D<W;D++){let Y=_[D];if(p(Y)){let X=y(w),at=i.get(Y).__webglTexture;e.bindTexture(X,at),m(X),e.unbindTexture()}}}let Me=[],k=[];function li(w){if(w.samples>0){if(Kt(w)===!1){let _=w.textures,D=w.width,W=w.height,Y=s.COLOR_BUFFER_BIT,X=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=i.get(w),K=_.length>1;if(K)for(let rt=0;rt<_.length;rt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let rt=0;rt<_.length;rt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[rt]);let St=i.get(_[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,St,0)}s.blitFramebuffer(0,0,D,W,0,0,D,W,Y,s.NEAREST),l===!0&&(Me.length=0,k.length=0,Me.push(s.COLOR_ATTACHMENT0+rt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Me.push(X),k.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let rt=0;rt<_.length;rt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,at.__webglColorRenderbuffer[rt]);let St=i.get(_[rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,St,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Jt(w){return Math.min(n.maxSamples,w.samples)}function Kt(w){let _=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function zt(w){let _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function me(w,_){let D=w.colorSpace,W=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==Bs&&D!==Mn&&(se.getTransfer(D)===he?(W!==Fi||Y!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function C(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=et,this.setTextureCube=z,this.rebindTextures=Gt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=li,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Kt}function Og(s,t){function e(i,n=Mn){let r,o=se.getTransfer(n);if(i===Bi)return s.UNSIGNED_BYTE;if(i===Dc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===wu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===bu)return s.BYTE;if(i===Su)return s.SHORT;if(i===cr)return s.UNSIGNED_SHORT;if(i===Lc)return s.INT;if(i===Gn)return s.UNSIGNED_INT;if(i===Yi)return s.FLOAT;if(i===xi)return s.HALF_FLOAT;if(i===Eu)return s.ALPHA;if(i===Tu)return s.RGB;if(i===Fi)return s.RGBA;if(i===Au)return s.LUMINANCE;if(i===Ru)return s.LUMINANCE_ALPHA;if(i===Ms)return s.DEPTH_COMPONENT;if(i===Rs)return s.DEPTH_STENCIL;if(i===vr)return s.RED;if(i===Nc)return s.RED_INTEGER;if(i===Cu)return s.RG;if(i===Fc)return s.RG_INTEGER;if(i===zc)return s.RGBA_INTEGER;if(i===so||i===ro||i===oo||i===ao)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===so)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===so)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ro)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pl||i===ml||i===gl||i===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yl||i===vl||i===_l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yl||i===vl)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_l)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ml||i===bl||i===Sl||i===wl||i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===Ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ml)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Al)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lo||i===Nl||i===Fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===lo)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pu||i===zl||i===Bl||i===Ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var ec=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},kg={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
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

}`,ic=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new ui,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new _e({vertexShader:Hg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Ke(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nc=class extends En{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new ic,p=e.getContextAttributes(),m=null,y=null,M=[],v=[],P=new yt,E=null,T=new Je;T.viewport=new ge;let R=new Je;R.viewport=new ge;let S=[T,R],b=new ec,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ft=M[j];return ft===void 0&&(ft=new or,M[j]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(j){let ft=M[j];return ft===void 0&&(ft=new or,M[j]=ft),ft.getGripSpace()},this.getHand=function(j){let ft=M[j];return ft===void 0&&(ft=new or,M[j]=ft),ft.getHandSpace()};function F(j){let ft=v.indexOf(j.inputSource);if(ft===-1)return;let At=M[ft];At!==void 0&&(At.update(j.inputSource,j.frame,c||o),At.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",J);for(let j=0;j<M.length;j++){let ft=v[j];ft!==null&&(v[j]=null,M[j].disconnect(ft))}L=null,N=null,x.reset(),t.setRenderTarget(m),f=null,d=null,u=null,n=null,y=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",V),n.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(P),n.renderState.layers===void 0){let ft={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,ft),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new We(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:Bi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ft=null,At=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=p.stencil?Rs:Ms,At=p.stencil?As:Gn);let Tt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Tt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new We(d.textureWidth,d.textureHeight,{format:Fi,type:Bi,depthTexture:new _o(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),_t.setContext(n),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(j){for(let ft=0;ft<j.removed.length;ft++){let At=j.removed[ft],dt=v.indexOf(At);dt>=0&&(v[dt]=null,M[dt].disconnect(At))}for(let ft=0;ft<j.added.length;ft++){let At=j.added[ft],dt=v.indexOf(At);if(dt===-1){for(let Ot=0;Ot<M.length;Ot++)if(Ot>=v.length){v.push(At),dt=Ot;break}else if(v[Ot]===null){v[Ot]=At,dt=Ot;break}if(dt===-1)break}let Tt=M[dt];Tt&&Tt.connect(At)}}let G=new I,et=new I;function z(j,ft,At){G.setFromMatrixPosition(ft.matrixWorld),et.setFromMatrixPosition(At.matrixWorld);let dt=G.distanceTo(et),Tt=ft.projectionMatrix.elements,Ot=At.projectionMatrix.elements,Gt=Tt[14]/(Tt[10]-1),ae=Tt[14]/(Tt[10]+1),ne=(Tt[9]+1)/Tt[5],Me=(Tt[9]-1)/Tt[5],k=(Tt[8]-1)/Tt[0],li=(Ot[8]+1)/Ot[0],Jt=Gt*k,Kt=Gt*li,zt=dt/(-k+li),me=zt*-k;if(ft.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(me),j.translateZ(zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Tt[10]===-1)j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let C=Gt+zt,w=ae+zt,_=Jt-me,D=Kt+(dt-me),W=ne*ae/w*C,Y=Me*ae/w*C;j.projectionMatrix.makePerspective(_,D,W,Y,C,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function lt(j,ft){ft===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ft.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let ft=j.near,At=j.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(At=x.depthFar)),b.near=R.near=T.near=ft,b.far=R.far=T.far=At,(L!==b.near||N!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,N=b.far),T.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,b.layers.mask=T.layers.mask|R.layers.mask;let dt=j.parent,Tt=b.cameras;lt(b,dt);for(let Ot=0;Ot<Tt.length;Ot++)lt(Tt[Ot],dt);Tt.length===2?z(b,T,R):b.projectionMatrix.copy(T.projectionMatrix),ht(j,b,dt)};function ht(j,ft,At){At===null?j.matrix.copy(ft.matrixWorld):(j.matrix.copy(At.matrixWorld),j.matrix.invert(),j.matrix.multiply(ft.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Hl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let gt=null;function Et(j,ft){if(h=ft.getViewerPose(c||o),g=ft,h!==null){let At=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let dt=!1;At.length!==b.cameras.length&&(b.cameras.length=0,dt=!0);for(let Ot=0;Ot<At.length;Ot++){let Gt=At[Ot],ae=null;if(f!==null)ae=f.getViewport(Gt);else{let Me=u.getViewSubImage(d,Gt);ae=Me.viewport,Ot===0&&(t.setRenderTargetTextures(y,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(y))}let ne=S[Ot];ne===void 0&&(ne=new Je,ne.layers.enable(Ot),ne.viewport=new ge,S[Ot]=ne),ne.matrix.fromArray(Gt.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Gt.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ae.x,ae.y,ae.width,ae.height),Ot===0&&(b.matrix.copy(ne.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),dt===!0&&b.cameras.push(ne)}let Tt=n.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Ot=u.getDepthInformation(At[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,n.renderState)}}for(let At=0;At<M.length;At++){let dt=v[At],Tt=M[At];dt!==null&&Tt!==void 0&&Tt.update(dt,ft,c||o)}gt&&gt(j,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),g=null}let _t=new Nu;_t.setAnimationLoop(Et),this.setAnimationLoop=function(j){gt=j},this.dispose=function(){}}},zn=new Ce,Gg=new Xt;function Wg(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Uu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ze&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ze&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=t.get(m),M=y.envMap,v=y.envMapRotation;M&&(p.envMap.value=M,zn.copy(v),zn.x*=-1,zn.y*=-1,zn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.envMapRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(zn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Xg(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let v=M.program;i.uniformBlockBinding(y,v)}function c(y,M){let v=n[y.id];v===void 0&&(g(y),v=h(y),n[y.id]=v,y.addEventListener("dispose",p));let P=M.program;i.updateUBOMapping(y,P);let E=t.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){let M=u();y.__bindingPointIndex=M;let v=s.createBuffer(),P=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=n[y.id],v=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,T=v.length;E<T;E++){let R=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,b=R.length;S<b;S++){let L=R[S];if(f(L,E,S,P)===!0){let N=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],V=0;for(let J=0;J<F.length;J++){let G=F[J],et=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,N+V,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,V),V+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,M,v,P){let E=y.value,T=M+"_"+v;if(P[T]===void 0)return typeof E=="number"||typeof E=="boolean"?P[T]=E:P[T]=E.clone(),!0;{let R=P[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return P[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(y){let M=y.uniforms,v=0,P=16;for(let T=0,R=M.length;T<R;T++){let S=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,L=S.length;b<L;b++){let N=S[b],F=Array.isArray(N.value)?N.value:[N.value];for(let V=0,J=F.length;V<J;V++){let G=F[V],et=x(G),z=v%P,lt=z%et.boundary,ht=z+lt;v+=lt,ht!==0&&P-ht<et.storage&&(v+=P-ht),N.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=et.storage}}}let E=v%P;return E>0&&(v+=P-E),y.__size=v,y.__cache={},this}function x(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){let M=y.target;M.removeEventListener("dispose",p);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function m(){for(let y in n)s.deleteBuffer(n[y]);o=[],n={},r={}}return{bind:l,update:c,dispose:m}}var Mo=class{constructor(t={}){let{canvas:e=Jf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),p=null,m=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=Sn,this.toneMappingExposure=1;let v=this,P=!1,E=0,T=0,R=null,S=-1,b=null,L=new ge,N=new ge,F=null,V=new ut(0),J=0,G=e.width,et=e.height,z=1,lt=null,ht=null,gt=new ge(0,0,G,et),Et=new ge(0,0,G,et),_t=!1,j=new ur,ft=!1,At=!1,dt=new Xt,Tt=new Xt,Ot=new I,Gt=new ge,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ne=!1;function Me(){return R===null?z:1}let k=i;function li(A,B){return e.getContext(A,B)}try{let A={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),k===null){let B="webgl2";if(k=li(B,A),k===null)throw li(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Jt,Kt,zt,me,C,w,_,D,W,Y,X,at,K,rt,St,it,ot,ct,st,tt,Pt,Ct,$,U;function nt(){Jt=new a0(k),Jt.init(),Ct=new Og(k,Jt),Kt=new e0(k,Jt,t,Ct),zt=new Fg(k,Jt),Kt.reverseDepthBuffer&&d&&zt.buffers.depth.setReversed(!0),me=new h0(k),C=new Sg,w=new Bg(k,Jt,zt,C,Kt,Ct,me),_=new n0(v),D=new o0(v),W=new xd(k),$=new jm(k,W),Y=new l0(k,W,me,$),X=new f0(k,Y,W,me),st=new u0(k,Kt,w),it=new i0(C),at=new bg(v,_,D,Jt,Kt,$,it),K=new Wg(v,C),rt=new Eg,St=new Ig(Jt),ct=new Qm(v,_,D,zt,X,f,l),ot=new Ug(v,X,Kt),U=new Xg(k,me,Kt,zt),tt=new t0(k,Jt,me),Pt=new c0(k,Jt,me),me.programs=at.programs,v.capabilities=Kt,v.extensions=Jt,v.properties=C,v.renderLists=rt,v.shadowMap=ot,v.state=zt,v.info=me}nt();let H=new nc(v,k);this.xr=H,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(G,et,!1))},this.getSize=function(A){return A.set(G,et)},this.setSize=function(A,B,q=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,et=B,e.width=Math.floor(A*z),e.height=Math.floor(B*z),q===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(G*z,et*z).floor()},this.setDrawingBufferSize=function(A,B,q){G=A,et=B,z=q,e.width=Math.floor(A*q),e.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(gt)},this.setViewport=function(A,B,q,Z){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,B,q,Z),zt.viewport(L.copy(gt).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Et)},this.setScissor=function(A,B,q,Z){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,B,q,Z),zt.scissor(N.copy(Et).multiplyScalar(z).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){zt.setScissorTest(_t=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){ht=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(A=!0,B=!0,q=!0){let Z=0;if(A){let O=!1;if(R!==null){let pt=R.texture.format;O=pt===zc||pt===Fc||pt===Nc}if(O){let pt=R.texture.type,bt=pt===Bi||pt===Gn||pt===cr||pt===As||pt===Dc||pt===Uc,Dt=ct.getClearColor(),Ut=ct.getClearAlpha(),Ht=Dt.r,qt=Dt.g,Nt=Dt.b;bt?(g[0]=Ht,g[1]=qt,g[2]=Nt,g[3]=Ut,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=Ht,x[1]=qt,x[2]=Nt,x[3]=Ut,k.clearBufferiv(k.COLOR,0,x))}else Z|=k.COLOR_BUFFER_BIT}B&&(Z|=k.DEPTH_BUFFER_BIT),q&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),rt.dispose(),St.dispose(),C.dispose(),_.dispose(),D.dispose(),X.dispose(),$.dispose(),U.dispose(),at.dispose(),H.dispose(),H.removeEventListener("sessionstart",th),H.removeEventListener("sessionend",eh),In.stop()};function Q(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=me.autoReset,B=ot.enabled,q=ot.autoUpdate,Z=ot.needsUpdate,O=ot.type;nt(),me.autoReset=A,ot.enabled=B,ot.autoUpdate=q,ot.needsUpdate=Z,ot.type=O}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){let B=A.target;B.removeEventListener("dispose",Yt),Re(B)}function Re(A){qe(A),C.remove(A)}function qe(A){let B=C.get(A).programs;B!==void 0&&(B.forEach(function(q){at.releaseProgram(q)}),A.isShaderMaterial&&at.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,Z,O,pt){B===null&&(B=ae);let bt=O.isMesh&&O.matrixWorld.determinant()<0,Dt=ff(A,B,q,Z,O);zt.setMaterial(Z,bt);let Ut=q.index,Ht=1;if(Z.wireframe===!0){if(Ut=Y.getWireframeAttribute(q),Ut===void 0)return;Ht=2}let qt=q.drawRange,Nt=q.attributes.position,re=qt.start*Ht,ye=(qt.start+qt.count)*Ht;pt!==null&&(re=Math.max(re,pt.start*Ht),ye=Math.min(ye,(pt.start+pt.count)*Ht)),Ut!==null?(re=Math.max(re,0),ye=Math.min(ye,Ut.count)):Nt!=null&&(re=Math.max(re,0),ye=Math.min(ye,Nt.count));let be=ye-re;if(be<0||be===1/0)return;$.setup(O,Z,Dt,q,Ut);let ci,le=tt;if(Ut!==null&&(ci=W.get(Ut),le=Pt,le.setIndex(ci)),O.isMesh)Z.wireframe===!0?(zt.setLineWidth(Z.wireframeLinewidth*Me()),le.setMode(k.LINES)):le.setMode(k.TRIANGLES);else if(O.isLine){let Ft=Z.linewidth;Ft===void 0&&(Ft=1),zt.setLineWidth(Ft*Me()),O.isLineSegments?le.setMode(k.LINES):O.isLineLoop?le.setMode(k.LINE_LOOP):le.setMode(k.LINE_STRIP)}else O.isPoints?le.setMode(k.POINTS):O.isSprite&&le.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)le.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))le.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ft=O._multiDrawStarts,Ki=O._multiDrawCounts,ce=O._multiDrawCount,Li=Ut?W.get(Ut).bytesPerElement:1,ss=C.get(Z).currentProgram.getUniforms();for(let fi=0;fi<ce;fi++)ss.setValue(k,"_gl_DrawID",fi),le.render(Ft[fi]/Li,Ki[fi])}else if(O.isInstancedMesh)le.renderInstances(re,be,O.count);else if(q.isInstancedBufferGeometry){let Ft=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ki=Math.min(q.instanceCount,Ft);le.renderInstances(re,be,Ki)}else le.render(re,be)};function de(A,B,q){A.transparent===!0&&A.side===Ue&&A.forceSinglePass===!1?(A.side=ze,A.needsUpdate=!0,Cr(A,B,q),A.side=wn,A.needsUpdate=!0,Cr(A,B,q),A.side=Ue):Cr(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),m=St.get(q),m.init(B),M.push(m),q.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),A!==q&&A.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let Z=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let pt=O.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){let Dt=pt[bt];de(Dt,q,O),Z.add(Dt)}else de(pt,q,O),Z.add(pt)}),M.pop(),m=null,Z},this.compileAsync=function(A,B,q=null){let Z=this.compile(A,B,q);return new Promise(O=>{function pt(){if(Z.forEach(function(bt){C.get(bt).currentProgram.isReady()&&Z.delete(bt)}),Z.size===0){O(A);return}setTimeout(pt,10)}Jt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Ii=null;function Ji(A){Ii&&Ii(A)}function th(){In.stop()}function eh(){In.start()}let In=new Nu;In.setAnimationLoop(Ji),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){Ii=A,H.setAnimationLoop(A),A===null?In.stop():In.start()},H.addEventListener("sessionstart",th),H.addEventListener("sessionend",eh),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(B),B=H.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,B,R),m=St.get(A,M.length),m.init(B),M.push(m),Tt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Tt),At=this.localClippingEnabled,ft=it.init(this.clippingPlanes,At),p=rt.get(A,y.length),p.init(),y.push(p),H.enabled===!0&&H.isPresenting===!0){let pt=v.xr.getDepthSensingMesh();pt!==null&&va(pt,B,-1/0,v.sortObjects)}va(A,B,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(lt,ht),ne=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,ne&&ct.addToRenderList(p,A),this.info.render.frame++,ft===!0&&it.beginShadows();let q=m.state.shadowsArray;ot.render(q,A,B),ft===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=p.opaque,O=p.transmissive;if(m.setupLights(),B.isArrayCamera){let pt=B.cameras;if(O.length>0)for(let bt=0,Dt=pt.length;bt<Dt;bt++){let Ut=pt[bt];nh(Z,O,A,Ut)}ne&&ct.render(A);for(let bt=0,Dt=pt.length;bt<Dt;bt++){let Ut=pt[bt];ih(p,A,Ut,Ut.viewport)}}else O.length>0&&nh(Z,O,A,B),ne&&ct.render(A),ih(p,A,B);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,B),$.resetDefaultState(),S=-1,b=null,M.pop(),M.length>0?(m=M[M.length-1],ft===!0&&it.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function va(A,B,q,Z){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Z&&Gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Tt);let bt=X.update(A),Dt=A.material;Dt.visible&&p.push(A,bt,Dt,q,Gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){let bt=X.update(A),Dt=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Gt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Gt.copy(bt.boundingSphere.center)),Gt.applyMatrix4(A.matrixWorld).applyMatrix4(Tt)),Array.isArray(Dt)){let Ut=bt.groups;for(let Ht=0,qt=Ut.length;Ht<qt;Ht++){let Nt=Ut[Ht],re=Dt[Nt.materialIndex];re&&re.visible&&p.push(A,bt,re,q,Gt.z,Nt)}}else Dt.visible&&p.push(A,bt,Dt,q,Gt.z,null)}}let pt=A.children;for(let bt=0,Dt=pt.length;bt<Dt;bt++)va(pt[bt],B,q,Z)}function ih(A,B,q,Z){let O=A.opaque,pt=A.transmissive,bt=A.transparent;m.setupLightsView(q),ft===!0&&it.setGlobalState(v.clippingPlanes,q),Z&&zt.viewport(L.copy(Z)),O.length>0&&Rr(O,B,q),pt.length>0&&Rr(pt,B,q),bt.length>0&&Rr(bt,B,q),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function nh(A,B,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new We(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?xi:Bi,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let pt=m.state.transmissionRenderTarget[Z.id],bt=Z.viewport||L;pt.setSize(bt.z,bt.w);let Dt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(V),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),ne&&ct.render(q);let Ut=v.toneMapping;v.toneMapping=Sn;let Ht=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),ft===!0&&it.setGlobalState(v.clippingPlanes,Z),Rr(A,q,Z),w.updateMultisampleRenderTarget(pt),w.updateRenderTargetMipmap(pt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Nt=0,re=B.length;Nt<re;Nt++){let ye=B[Nt],be=ye.object,ci=ye.geometry,le=ye.material,Ft=ye.group;if(le.side===Ue&&be.layers.test(Z.layers)){let Ki=le.side;le.side=ze,le.needsUpdate=!0,sh(be,q,Z,ci,le,Ft),le.side=Ki,le.needsUpdate=!0,qt=!0}}qt===!0&&(w.updateMultisampleRenderTarget(pt),w.updateRenderTargetMipmap(pt))}v.setRenderTarget(Dt),v.setClearColor(V,J),Ht!==void 0&&(Z.viewport=Ht),v.toneMapping=Ut}function Rr(A,B,q){let Z=B.isScene===!0?B.overrideMaterial:null;for(let O=0,pt=A.length;O<pt;O++){let bt=A[O],Dt=bt.object,Ut=bt.geometry,Ht=Z===null?bt.material:Z,qt=bt.group;Dt.layers.test(q.layers)&&sh(Dt,B,q,Ut,Ht,qt)}}function sh(A,B,q,Z,O,pt){A.onBeforeRender(v,B,q,Z,O,pt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(v,B,q,Z,A,pt),O.transparent===!0&&O.side===Ue&&O.forceSinglePass===!1?(O.side=ze,O.needsUpdate=!0,v.renderBufferDirect(q,B,Z,O,A,pt),O.side=wn,O.needsUpdate=!0,v.renderBufferDirect(q,B,Z,O,A,pt),O.side=Ue):v.renderBufferDirect(q,B,Z,O,A,pt),A.onAfterRender(v,B,q,Z,O,pt)}function Cr(A,B,q){B.isScene!==!0&&(B=ae);let Z=C.get(A),O=m.state.lights,pt=m.state.shadowsArray,bt=O.state.version,Dt=at.getParameters(A,O.state,pt,B,q),Ut=at.getProgramCacheKey(Dt),Ht=Z.programs;Z.environment=A.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(A.isMeshStandardMaterial?D:_).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",Yt),Ht=new Map,Z.programs=Ht);let qt=Ht.get(Ut);if(qt!==void 0){if(Z.currentProgram===qt&&Z.lightsStateVersion===bt)return oh(A,Dt),qt}else Dt.uniforms=at.getUniforms(A),A.onBeforeCompile(Dt,v),qt=at.acquireProgram(Dt,Ut),Ht.set(Ut,qt),Z.uniforms=Dt.uniforms;let Nt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=it.uniform),oh(A,Dt),Z.needsLights=pf(A),Z.lightsStateVersion=bt,Z.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),Z.currentProgram=qt,Z.uniformsList=null,qt}function rh(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Ss.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function oh(A,B){let q=C.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function ff(A,B,q,Z,O){B.isScene!==!0&&(B=ae),w.resetTextureUnits();let pt=B.fog,bt=Z.isMeshStandardMaterial?B.environment:null,Dt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bs,Ut=(Z.isMeshStandardMaterial?D:_).get(Z.envMap||bt),Ht=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qt=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Nt=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,ye=!!q.morphAttributes.color,be=Sn;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(be=v.toneMapping);let ci=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=ci!==void 0?ci.length:0,Ft=C.get(Z),Ki=m.state.lights;if(ft===!0&&(At===!0||A!==b)){let Mi=A===b&&Z.id===S;it.setState(Z,A,Mi)}let ce=!1;Z.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ki.state.version||Ft.outputColorSpace!==Dt||O.isBatchedMesh&&Ft.batching===!1||!O.isBatchedMesh&&Ft.batching===!0||O.isBatchedMesh&&Ft.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ft.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ft.instancing===!1||!O.isInstancedMesh&&Ft.instancing===!0||O.isSkinnedMesh&&Ft.skinning===!1||!O.isSkinnedMesh&&Ft.skinning===!0||O.isInstancedMesh&&Ft.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ft.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ft.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ft.instancingMorph===!1&&O.morphTexture!==null||Ft.envMap!==Ut||Z.fog===!0&&Ft.fog!==pt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==it.numPlanes||Ft.numIntersection!==it.numIntersection)||Ft.vertexAlphas!==Ht||Ft.vertexTangents!==qt||Ft.morphTargets!==Nt||Ft.morphNormals!==re||Ft.morphColors!==ye||Ft.toneMapping!==be||Ft.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Ft.__version=Z.version);let Li=Ft.currentProgram;ce===!0&&(Li=Cr(Z,B,O));let ss=!1,fi=!1,qs=!1,Se=Li.getUniforms(),Wi=Ft.uniforms;if(zt.useProgram(Li.program)&&(ss=!0,fi=!0,qs=!0),Z.id!==S&&(S=Z.id,fi=!0),ss||b!==A){zt.buffers.depth.getReversed()?(dt.copy(A.projectionMatrix),Qf(dt),jf(dt),Se.setValue(k,"projectionMatrix",dt)):Se.setValue(k,"projectionMatrix",A.projectionMatrix),Se.setValue(k,"viewMatrix",A.matrixWorldInverse);let dn=Se.map.cameraPosition;dn!==void 0&&dn.setValue(k,Ot.setFromMatrixPosition(A.matrixWorld)),Kt.logarithmicDepthBuffer&&Se.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Se.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,fi=!0,qs=!0)}if(O.isSkinnedMesh){Se.setOptional(k,O,"bindMatrix"),Se.setOptional(k,O,"bindMatrixInverse");let Mi=O.skeleton;Mi&&(Mi.boneTexture===null&&Mi.computeBoneTexture(),Se.setValue(k,"boneTexture",Mi.boneTexture,w))}O.isBatchedMesh&&(Se.setOptional(k,O,"batchingTexture"),Se.setValue(k,"batchingTexture",O._matricesTexture,w),Se.setOptional(k,O,"batchingIdTexture"),Se.setValue(k,"batchingIdTexture",O._indirectTexture,w),Se.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&Se.setValue(k,"batchingColorTexture",O._colorsTexture,w));let Zs=q.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&st.update(O,q,Li),(fi||Ft.receiveShadow!==O.receiveShadow)&&(Ft.receiveShadow=O.receiveShadow,Se.setValue(k,"receiveShadow",O.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Wi.envMap.value=Ut,Wi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(Wi.envMapIntensity.value=B.environmentIntensity),fi&&(Se.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&df(Wi,qs),pt&&Z.fog===!0&&K.refreshFogUniforms(Wi,pt),K.refreshMaterialUniforms(Wi,Z,z,et,m.state.transmissionRenderTarget[A.id]),Ss.upload(k,rh(Ft),Wi,w)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ss.upload(k,rh(Ft),Wi,w),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Se.setValue(k,"center",O.center),Se.setValue(k,"modelViewMatrix",O.modelViewMatrix),Se.setValue(k,"normalMatrix",O.normalMatrix),Se.setValue(k,"modelMatrix",O.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Mi=Z.uniformsGroups;for(let dn=0,pn=Mi.length;dn<pn;dn++){let ah=Mi[dn];U.update(ah,Li),U.bind(ah,Li)}}return Li}function df(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function pf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,B,q){C.get(A.texture).__webglTexture=B,C.get(A.depthTexture).__webglTexture=q;let Z=C.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){let q=C.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,q=0){R=A,E=B,T=q;let Z=!0,O=null,pt=!1,bt=!1;if(A){let Ut=C.get(A);if(Ut.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(k.FRAMEBUFFER,null),Z=!1;else if(Ut.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(Ut.__hasExternalTextures)w.rebindTextures(A,C.get(A.texture).__webglTexture,C.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Nt=A.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&C.has(Nt)&&(A.width!==Nt.image.width||A.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}let Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);let qt=C.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[B])?O=qt[B][q]:O=qt[B],pt=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?O=C.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?O=qt[q]:O=qt,L.copy(A.viewport),N.copy(A.scissor),F=A.scissorTest}else L.copy(gt).multiplyScalar(z).floor(),N.copy(Et).multiplyScalar(z).floor(),F=_t;if(zt.bindFramebuffer(k.FRAMEBUFFER,O)&&Z&&zt.drawBuffers(A,O),zt.viewport(L),zt.scissor(N),zt.setScissorTest(F),pt){let Ut=C.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ut.__webglTexture,q)}else if(bt){let Ut=C.get(A.texture),Ht=B||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ut.__webglTexture,q||0,Ht)}S=-1},this.readRenderTargetPixels=function(A,B,q,Z,O,pt,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){zt.bindFramebuffer(k.FRAMEBUFFER,Dt);try{let Ut=A.texture,Ht=Ut.format,qt=Ut.type;if(!Kt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Z&&q>=0&&q<=A.height-O&&k.readPixels(B,q,Z,O,Ct.convert(Ht),Ct.convert(qt),pt)}finally{let Ut=R!==null?C.get(R).__webglFramebuffer:null;zt.bindFramebuffer(k.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,Z,O,pt,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=C.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){let Ut=A.texture,Ht=Ut.format,qt=Ut.type;if(!Kt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-Z&&q>=0&&q<=A.height-O){zt.bindFramebuffer(k.FRAMEBUFFER,Dt);let Nt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Nt),k.bufferData(k.PIXEL_PACK_BUFFER,pt.byteLength,k.STREAM_READ),k.readPixels(B,q,Z,O,Ct.convert(Ht),Ct.convert(qt),0);let re=R!==null?C.get(R).__webglFramebuffer:null;zt.bindFramebuffer(k.FRAMEBUFFER,re);let ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Kf(k,ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Nt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,pt),k.deleteBuffer(Nt),k.deleteSync(ye),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,q=0){A.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);let Z=Math.pow(2,-q),O=Math.floor(A.image.width*Z),pt=Math.floor(A.image.height*Z),bt=B!==null?B.x:0,Dt=B!==null?B.y:0;w.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,bt,Dt,O,pt),zt.unbindTexture()},this.copyTextureToTexture=function(A,B,q=null,Z=null,O=0){A.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],B=arguments[2],O=arguments[3]||0,q=null);let pt,bt,Dt,Ut,Ht,qt,Nt,re,ye,be=A.isCompressedTexture?A.mipmaps[O]:A.image;q!==null?(pt=q.max.x-q.min.x,bt=q.max.y-q.min.y,Dt=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,Ht=q.min.y,qt=q.isBox3?q.min.z:0):(pt=be.width,bt=be.height,Dt=be.depth||1,Ut=0,Ht=0,qt=0),Z!==null?(Nt=Z.x,re=Z.y,ye=Z.z):(Nt=0,re=0,ye=0);let ci=Ct.convert(B.format),le=Ct.convert(B.type),Ft;B.isData3DTexture?(w.setTexture3D(B,0),Ft=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(w.setTexture2DArray(B,0),Ft=k.TEXTURE_2D_ARRAY):(w.setTexture2D(B,0),Ft=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let Ki=k.getParameter(k.UNPACK_ROW_LENGTH),ce=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Li=k.getParameter(k.UNPACK_SKIP_PIXELS),ss=k.getParameter(k.UNPACK_SKIP_ROWS),fi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,be.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,be.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ut),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ht),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qt);let qs=A.isDataArrayTexture||A.isData3DTexture,Se=B.isDataArrayTexture||B.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Wi=C.get(A),Zs=C.get(B),Mi=C.get(Wi.__renderTarget),dn=C.get(Zs.__renderTarget);zt.bindFramebuffer(k.READ_FRAMEBUFFER,Mi.__webglFramebuffer),zt.bindFramebuffer(k.DRAW_FRAMEBUFFER,dn.__webglFramebuffer);for(let pn=0;pn<Dt;pn++)qs&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,C.get(A).__webglTexture,O,qt+pn),A.isDepthTexture?(Se&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,C.get(B).__webglTexture,O,ye+pn),k.blitFramebuffer(Ut,Ht,pt,bt,Nt,re,pt,bt,k.DEPTH_BUFFER_BIT,k.NEAREST)):Se?k.copyTexSubImage3D(Ft,O,Nt,re,ye+pn,Ut,Ht,pt,bt):k.copyTexSubImage2D(Ft,O,Nt,re,ye+pn,Ut,Ht,pt,bt);zt.bindFramebuffer(k.READ_FRAMEBUFFER,null),zt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Se?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ft,O,Nt,re,ye,pt,bt,Dt,ci,le,be.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Ft,O,Nt,re,ye,pt,bt,Dt,ci,be.data):k.texSubImage3D(Ft,O,Nt,re,ye,pt,bt,Dt,ci,le,be):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,O,Nt,re,pt,bt,ci,le,be.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,O,Nt,re,be.width,be.height,ci,be.data):k.texSubImage2D(k.TEXTURE_2D,O,Nt,re,pt,bt,ci,le,be);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ki),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ce),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Li),k.pixelStorei(k.UNPACK_SKIP_ROWS,ss),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fi),O===0&&B.generateMipmaps&&k.generateMipmap(Ft),zt.unbindTexture()},this.copyTextureToTexture3D=function(A,B,q=null,Z=null,O=0){return A.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],B=arguments[3],O=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,q,Z,O)},this.initRenderTarget=function(A){C.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),zt.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,zt.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}},bo=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Tn=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ce,this.environmentIntensity=1,this.environmentRotation=new Ce,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var fr=class extends ui{constructor(t=null,e=1,i=1,n,r,o,a,l,c=mi,h=mi,u,d){super(null,o,a,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=class extends ve{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new Xt,au=new Xt,Kr=[],lu=new cn,Yg=new Xt,tr=new mt,er=new hn,wi=class extends mt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Yg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),lu.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(lu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,vs),er.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(i),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,vs),au.multiplyMatrices(i,vs),tr.matrixWorld=au,tr.raycast(t,Kr);for(let o=0,a=Kr.length;o<a;o++){let l=Kr[o];l.instanceId=r,l.object=this,e.push(l)}Kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(n*this.count),n,this.count,vr,Yi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Wn=class extends Oi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},So=new I,wo=new I,cu=new Xt,ir=new hr,Qr=new hn,Ja=new I,hu=new I,sc=class extends Xe{constructor(t=new Vt,e=new Wn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)So.fromBufferAttribute(e,n-1),wo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=So.distanceTo(wo);t.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(n),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;cu.copy(n).invert(),ir.copy(t.ray).applyMatrix4(cu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=h.getX(x),y=h.getX(x+1),M=jr(this,t,ir,l,m,y);M&&e.push(M)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=jr(this,t,ir,l,x,p);m&&e.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=c){let m=jr(this,t,ir,l,x,x+1);m&&e.push(m)}if(this.isLineLoop){let x=jr(this,t,ir,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jr(s,t,e,i,n,r){let o=s.geometry.attributes.position;if(So.fromBufferAttribute(o,n),wo.fromBufferAttribute(o,r),e.distanceSqToSegment(So,wo,Ja,hu)>i)return;Ja.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ja);if(!(l<t.near||l>t.far))return{distance:l,point:hu.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}var uu=new I,fu=new I,Ls=class extends sc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)uu.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+uu.distanceTo(fu);t.setAttribute("lineDistance",new wt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var pr=class extends Oi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},du=new Xt,rc=new hr,to=new hn,eo=new I,Ds=class extends Xe{constructor(t=new Vt,e=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(n),to.radius+=r,t.ray.intersectsSphere(to)===!1)return;du.copy(n).invert(),rc.copy(t.ray).applyMatrix4(du);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=c.getX(g);eo.fromBufferAttribute(u,p),pu(eo,p,l,n,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)eo.fromBufferAttribute(u,g),pu(eo,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pu(s,t,e,i,n,r,o){let a=rc.distanceSqToPoint(s);if(a<e){let l=new I;rc.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ii=class extends ui{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ki=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=e||(o.isVector2?new yt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new I,n=[],r=[],o=[],a=new I,l=new Xt;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ve(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Ve(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Eo=class extends ki{constructor(t=0,e=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new yt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oc=class extends Eo{constructor(t,e,i,n,r,o){super(t,e,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let s=0,t=0,e=0,i=0;function n(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+i*a}}}var io=new I,Ka=new Oc,Qa=new Oc,ja=new Oc,Us=class extends ki{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new I){let i=e,n=this.points,r=n.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(io.subVectors(n[0],n[1]).add(n[0]),c=io);let u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(io.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=io),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Ka.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,p),Qa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,p),ja.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Qa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ja.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Ka.calc(l),Qa.calc(l),ja.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new I().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function mu(s,t,e,i,n){let r=(i-t)*.5,o=(n-e)*.5,a=s*s,l=s*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*s+e}function qg(s,t){let e=1-s;return e*e*t}function Zg(s,t){return 2*(1-s)*s*t}function $g(s,t){return s*s*t}function ar(s,t,e,i){return qg(s,t)+Zg(s,e)+$g(s,i)}function Jg(s,t){let e=1-s;return e*e*e*t}function Kg(s,t){let e=1-s;return 3*e*e*s*t}function Qg(s,t){return 3*(1-s)*s*s*t}function jg(s,t){return s*s*s*t}function lr(s,t,e,i,n){return Jg(s,t)+Kg(s,e)+Qg(s,i)+jg(s,n)}var ac=class extends ki{constructor(t=new yt,e=new yt,i=new yt,n=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new yt){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,n.x,r.x,o.x,a.x),lr(t,n.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lc=class extends ki{constructor(t=new I,e=new I,i=new I,n=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new I){let i=e,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,n.x,r.x,o.x,a.x),lr(t,n.y,r.y,o.y,a.y),lr(t,n.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cc=class extends ki{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hc=class extends ki{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uc=class extends ki{constructor(t=new yt,e=new yt,i=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new yt){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(ar(t,n.x,r.x,o.x),ar(t,n.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends ki{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,n=this.v0,r=this.v1,o=this.v2;return i.set(ar(t,n.x,r.x,o.x),ar(t,n.y,r.y,o.y),ar(t,n.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fc=class extends ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){let i=e,n=this.points,r=(n.length-1)*t,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(mu(a,l.x,c.x,h.x,u.x),mu(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new yt().fromArray(n))}return this}},tx=Object.freeze({__proto__:null,ArcCurve:oc,CatmullRomCurve3:Us,CubicBezierCurve:ac,CubicBezierCurve3:lc,EllipseCurve:Eo,LineCurve:cc,LineCurve3:hc,QuadraticBezierCurve:uc,QuadraticBezierCurve3:To,SplineCurve:fc});var Ao=class s extends Vt{constructor(t=[new yt(0,-.5),new yt(.5,0),new yt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ve(n,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,d=new yt,f=new I,g=new I,x=new I,p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let M=i+y*h*n,v=Math.sin(M),P=Math.cos(M);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*P,o.push(u.x,u.y,u.z),d.x=y/e,d.y=E/(t.length-1),a.push(d.x,d.y);let T=l[3*E+0]*v,R=l[3*E+1],S=l[3*E+0]*P;c.push(T,R,S)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let v=M+y*t.length,P=v,E=v+t.length,T=v+t.length+1,R=v+1;r.push(P,E,R),r.push(T,R,E)}this.setIndex(r),this.setAttribute("position",new wt(o,3)),this.setAttribute("uv",new wt(a,2)),this.setAttribute("normal",new wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Hi=class s extends Vt{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new yt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ie=class s extends Vt{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=i/2,m=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function y(){let v=new I,P=new I,E=0,T=(e-t)/i;for(let R=0;R<=r;R++){let S=[],b=R/r,L=b*(e-t)+t;for(let N=0;N<=n;N++){let F=N/n,V=F*l+a,J=Math.sin(V),G=Math.cos(V);P.x=L*J,P.y=-b*i+p,P.z=L*G,u.push(P.x,P.y,P.z),v.set(J,T,G).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-b),S.push(g++)}x.push(S)}for(let R=0;R<n;R++)for(let S=0;S<r;S++){let b=x[S][R],L=x[S+1][R],N=x[S+1][R+1],F=x[S][R+1];(t>0||S!==0)&&(h.push(b,L,F),E+=3),(e>0||S!==r-1)&&(h.push(L,N,F),E+=3)}c.addGroup(m,E,0),m+=E}function M(v){let P=g,E=new yt,T=new I,R=0,S=v===!0?t:e,b=v===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,p*b,0),d.push(0,b,0),f.push(.5,.5),g++;let L=g;for(let N=0;N<=n;N++){let V=N/n*l+a,J=Math.cos(V),G=Math.sin(V);T.x=S*G,T.y=p*b,T.z=S*J,u.push(T.x,T.y,T.z),d.push(0,b,0),E.x=J*.5+.5,E.y=G*.5*b+.5,f.push(E.x,E.y),g++}for(let N=0;N<n;N++){let F=P+N,V=L+N;v===!0?h.push(V,V+1,F):h.push(V+1,V,F),R+=3}c.addGroup(m,R,v===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xn=class s extends Ie{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},dc=class s extends Vt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let M=new I,v=new I,P=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],M),f(e[E+1],v),f(e[E+2],P),l(M,v,P,y)}function l(y,M,v,P){let E=P+1,T=[];for(let R=0;R<=E;R++){T[R]=[];let S=y.clone().lerp(v,R/E),b=M.clone().lerp(v,R/E),L=E-R;for(let N=0;N<=L;N++)N===0&&R===E?T[R][N]=S:T[R][N]=S.clone().lerp(b,N/L)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){let b=Math.floor(S/2);S%2===0?(d(T[R][b+1]),d(T[R+1][b]),d(T[R][b])):(d(T[R][b+1]),d(T[R+1][b+1]),d(T[R+1][b]))}}function c(y){let M=new I;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let y=new I;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let v=p(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let M=o[y+0],v=o[y+2],P=o[y+4],E=Math.max(M,v,P),T=Math.min(M,v,P);E>.9&&T<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,M){let v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){let y=new I,M=new I,v=new I,P=new I,E=new yt,T=new yt,R=new yt;for(let S=0,b=0;S<r.length;S+=9,b+=6){y.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),R.set(o[b+4],o[b+5]),P.copy(y).add(M).add(v).divideScalar(3);let L=p(P);x(E,b+0,y,L),x(T,b+2,M,L),x(R,b+4,v,L)}}function x(y,M,v,P){P<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var Yn=class s extends dc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ns=class s extends Vt{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new I,g=new yt;for(let x=0;x<=n;x++){for(let p=0;p<=i;p++){let m=r+p/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){let p=x*(i+1);for(let m=0;m<i;m++){let y=m+p,M=y,v=y+i+1,P=y+i+2,E=y+1;a.push(M,v,E),a.push(v,P,E)}}this.setIndex(a),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(c,3)),this.setAttribute("uv",new wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var An=class s extends Vt{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let y=[],M=m/i,v=0;m===0&&o===0?v=.5/e:m===i&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let E=P/e;u.x=-t*Math.cos(n+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(n+E*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(E+v,1-M),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let M=h[m][y+1],v=h[m][y],P=h[m+1][y],E=h[m+1][y+1];(m!==0||o>0)&&f.push(M,v,E),(m!==i-1||l<Math.PI)&&f.push(v,P,E)}this.setIndex(f),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(x,3)),this.setAttribute("uv",new wt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ei=class s extends Vt{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let x=g/n*r,p=f/i*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let x=(n+1)*f+g-1,p=(n+1)*(f-1)+g-1,m=(n+1)*(f-1)+g,y=(n+1)*f+g;o.push(x,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ro=class s extends Vt{constructor(t=new To(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new yt,h=new I,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new wt(u,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function x(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),y(),m()}function p(M){h=t.getPointAt(M/e,h);let v=o.normals[M],P=o.binormals[M];for(let E=0;E<=n;E++){let T=E/n*Math.PI*2,R=Math.sin(T),S=-Math.cos(T);l.x=S*v.x+R*P.x,l.y=S*v.y+R*P.y,l.z=S*v.z+R*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let v=1;v<=n;v++){let P=(n+1)*(M-1)+(v-1),E=(n+1)*M+(v-1),T=(n+1)*M+v,R=(n+1)*(M-1)+v;g.push(P,E,R),g.push(E,T,R)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=n;v++)c.x=M/e,c.y=v/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new tx[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Co=class extends _e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},gi=class extends Oi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},mr=class extends gi{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},gr=class extends Oi{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var we=class extends Oi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ce,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function no(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ex(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Fs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends Fs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=t,a=2*e-i;break;case dh:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:o=t,l=2*i-e;break;case dh:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,y=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*p+(1.5+f)*x+.5*g,v=f*p-f*x;for(let P=0;P!==a;++P)r[P]=m*o[h+P]+y*o[c+P]+M*o[l+P]+v*o[u+P];return r}},mc=class extends Fs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},gc=class extends Fs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Vi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=no(e,this.TimeBufferType),this.values=no(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:no(t.times,Array),values:no(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case kl:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&ex(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=kl;var qn=class extends Vi{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=co;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends Vi{};xc.prototype.ValueTypeName="color";var yc=class extends Vi{};yc.prototype.ValueTypeName="number";var vc=class extends Fs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)pe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Po=class extends Vi{InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends Vi{constructor(t,e,i){super(t,e,i)}};Zn.prototype.ValueTypeName="string";Zn.prototype.ValueBufferType=Array;Zn.prototype.DefaultInterpolation=co;Zn.prototype.InterpolantFactoryMethodLinear=void 0;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends Vi{};_c.prototype.ValueTypeName="vector";var Mc=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},ix=new Mc,bc=class{constructor(t){this.manager=t!==void 0?t:ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=class extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Io=class extends xr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},tl=new Xt,gu=new I,xu=new I,Lo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ur,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(gu),xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xu),e.updateMatrixWorld(),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var yu=new Xt,nr=new I,el=new I,Sc=class extends Lo{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),i.position.copy(nr),el.copy(i.position),el.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(el),i.updateMatrixWorld(),n.makeTranslation(-nr.x,-nr.y,-nr.z),yu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}},zs=class extends xr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Sc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},wc=class extends Lo{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Do=class extends xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new wc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Uo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=vu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function vu(){return performance.now()}var kc="\\[\\]\\.:\\/",nx=new RegExp("["+kc+"]","g"),Hc="[^"+kc+"]",sx="[^"+kc.replace("\\.","")+"]",rx=/((?:WC+[\/:])*)/.source.replace("WC",Hc),ox=/(WCOD+)?/.source.replace("WCOD",sx),ax=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),lx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),cx=new RegExp("^"+rx+ox+ax+lx+"$"),hx=["material","materials","bones","map"],Ec=class{constructor(t,e,i){let n=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nx,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);hx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Ec;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ny=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var It=(s,t,e)=>s<t?t:s>e?e:s,ux=s=>s<0?0:s>1?1:s,Bt=(s,t,e)=>s+(t-s)*e,jt=(s,t,e)=>{let i=ux((e-s)/(t-s));return i*i*(3-2*i)},te=(s,t,e,i)=>s+(t-s)*(1-Math.exp(-e*i)),fx=s=>(s=(s+Math.PI)%(Math.PI*2),s<0&&(s+=Math.PI*2),s-Math.PI),Cn=(s,t,e,i)=>s+fx(t-s)*(1-Math.exp(-e*i)),ku=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;function Jn(s){let t=s>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ko(s,t,e){let i=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,1442695041);return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}function Ho(s,t,e=0){let i=Math.floor(s),n=Math.floor(t),r=s-i,o=t-n,a=r*r*(3-2*r),l=o*o*(3-2*o),c=ko(i,n,e),h=ko(i+1,n,e),u=ko(i,n+1,e),d=ko(i+1,n+1,e);return c+(h-c)*a+(u-c)*l+(c-h-u+d)*a*l}function Kn(s,t,e=4,i=0){let n=0,r=.5,o=1,a=0;for(let l=0;l<e;l++)n+=r*Ho(s*o,t*o,i+l*17),a+=r,r*=.5,o*=2.03;return n/a}function Qe(s){let t=s.length,e=new Array(t);for(let i=0;i<t;i++){let n=s[Math.max(0,i-1)],r=s[Math.min(t-1,i+1)];e[i]=r[0]===n[0]?0:(r[1]-n[1])/(r[0]-n[0])}return i=>{if(i<=s[0][0])return s[0][1];if(i>=s[t-1][0])return s[t-1][1];let n=0;for(;i>s[n+1][0];)n++;let r=s[n][0],o=s[n+1][0],a=o-r,l=(i-r)/a,c=l*l,h=c*l;return(2*h-3*c+1)*s[n][1]+(h-2*c+l)*a*e[n]+(-2*h+3*c)*s[n+1][1]+(h-c)*a*e[n+1]}}var si=s=>Math.round(s).toLocaleString("en-US");var dx="https://sdk.crazygames.com/crazygames-sdk-v3.js",Ti={api:null,active:!1,playing:!1,loading:!1,muted:!1,onMute:null,async init(){try{await new Promise((t,e)=>{if(window.CrazyGames&&window.CrazyGames.SDK)return t();let i=document.createElement("script");i.src=dx,i.onload=t,i.onerror=()=>e(new Error("sdk blocked")),document.head.appendChild(i),setTimeout(()=>e(new Error("sdk timeout")),3500)});let s=window.CrazyGames.SDK;if(await Promise.race([s.init(),new Promise((t,e)=>setTimeout(()=>e(new Error("init timeout")),3500))]),this.api=s,this.active=s.environment==="crazygames"||s.environment==="local",this.active)try{this.muted=!!s.game.settings.muteAudio,s.game.addSettingsChangeListener(t=>{this.muted=!!t.muteAudio,this.onMute&&this.onMute(this.muted)})}catch{}}catch{this.api=null,this.active=!1}return this.active},call(s){if(this.active)try{s(this.api)}catch{}},loadingStart(){this.loading||(this.loading=!0,this.call(s=>s.game.loadingStart()))},loadingStop(){this.loading&&(this.loading=!1,this.call(s=>s.game.loadingStop()))},gameplayStart(){this.playing||(this.playing=!0,this.call(s=>s.game.gameplayStart()))},gameplayStop(){this.playing&&(this.playing=!1,this.call(s=>s.game.gameplayStop()))},happytime(){this.call(s=>s.game.happytime())},getItem(s){if(this.active)try{let t=this.api.data.getItem(s);if(t!==void 0)return t}catch{}try{return localStorage.getItem(s)}catch{return null}},setItem(s,t){if(this.active)try{this.api.data.setItem(s,t);return}catch{}try{localStorage.setItem(s,t)}catch{}}};var Hu=[["forward","Accelerate"],["back","Brake / Reverse"],["left","Steer left"],["right","Steer right"],["boost","Boost / Climb"],["shift","Drift / Descend"],["fly","Flight on / off"],["rollL","Roll left"],["rollR","Roll right"],["reset","Reset car"],["look","Look back"],["photo","Photo mode"],["pause","Pause"]],Mr={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],boost:["Space"],shift:["ShiftLeft","ShiftRight"],fly:["KeyF"],rollL:["KeyQ"],rollR:["KeyE"],reset:["KeyR"],look:["KeyC"],photo:["KeyP"],pause:["Escape"]};function Qn(s){if(!s)return"\u2014";let t={Space:"Space",ShiftLeft:"Shift",ShiftRight:"R Shift",ControlLeft:"Ctrl",ControlRight:"R Ctrl",AltLeft:"Alt",AltRight:"R Alt",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Escape:"Esc",Enter:"Enter",Backspace:"Backspace",Tab:"Tab"};return t[s]?t[s]:s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):s.startsWith("Numpad")?"Num "+s.slice(6):s}var Vo=class{constructor(t,e){this.canvas=t,this.keys=e,this.down=new Set,this.pressed=new Set,this.state={steer:0,throttle:0,boost:!1,shift:!1,roll:0,fly:!1,boostPressed:!1,look:!1},this.dragX=0,this.dragY=0,this.zoom=0,this.pinch=0,this.touch={active:!1,joy:null,jx:0,jy:0,boost:!1,shift:!1,fly:!1,roll:!1,drag:null},this.isTouch=!1,this.capture=null,this.enabled=!0,this.padPrev=[],this.onTouchMode=null,addEventListener("keydown",l=>{if(this.capture){l.preventDefault();let c=this.capture;this.capture=null,c(l.code);return}l.target&&/INPUT|SELECT|TEXTAREA/.test(l.target.tagName)||(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(l.code)&&l.preventDefault(),l.repeat||this.pressed.add(l.code),this.down.add(l.code))}),addEventListener("keyup",l=>this.down.delete(l.code)),addEventListener("blur",()=>{this.down.clear(),this.touch.boost=this.touch.shift=!1,this.touch.joy=null});let i=!1;t.addEventListener("mousedown",l=>{(l.button===0||l.button===2)&&(i=!0)}),addEventListener("mouseup",()=>{i=!1}),addEventListener("mousemove",l=>{i&&(this.dragX+=l.movementX,this.dragY+=l.movementY)}),t.addEventListener("wheel",l=>{l.preventDefault(),this.zoom+=Math.sign(l.deltaY)},{passive:!1}),t.addEventListener("contextmenu",l=>l.preventDefault());let n=this.touch,r=l=>{this.isTouch||(this.isTouch=!0,this.onTouchMode&&this.onTouchMode(!0));for(let c of l.changedTouches)this.joyEnabled&&!n.joy&&c.clientX<innerWidth*.46&&c.clientY>innerHeight*.25?(n.joy={id:c.identifier,x:c.clientX,y:c.clientY},n.jx=n.jy=0,this.onJoy&&this.onJoy(n.joy,0,0,!0)):n.drag?n.drag2||(n.drag2={id:c.identifier,x:c.clientX,y:c.clientY},n.pinchD=Math.hypot(n.drag.x-c.clientX,n.drag.y-c.clientY)):n.drag={id:c.identifier,x:c.clientX,y:c.clientY};l.preventDefault()},o=l=>{for(let c of l.changedTouches){if(n.joy&&c.identifier===n.joy.id){let u=(c.clientX-n.joy.x)/58,d=(c.clientY-n.joy.y)/58,f=Math.hypot(u,d);f>1&&(u/=f,d/=f),n.jx=u,n.jy=-d,this.onJoy&&this.onJoy(n.joy,u,d,!0)}else n.drag&&c.identifier===n.drag.id?(n.drag2||(this.dragX+=(c.clientX-n.drag.x)*1.4,this.dragY+=(c.clientY-n.drag.y)*1.4),n.drag.x=c.clientX,n.drag.y=c.clientY):n.drag2&&c.identifier===n.drag2.id&&(n.drag2.x=c.clientX,n.drag2.y=c.clientY);if(n.drag&&n.drag2){let h=Math.hypot(n.drag.x-n.drag2.x,n.drag.y-n.drag2.y);this.pinch+=(n.pinchD-h)*.02,n.pinchD=h}}l.preventDefault()},a=l=>{for(let c of l.changedTouches)n.joy&&c.identifier===n.joy.id&&(n.joy=null,n.jx=n.jy=0,this.onJoy&&this.onJoy(null,0,0,!1)),n.drag&&c.identifier===n.drag.id?(n.drag=n.drag2||null,n.drag2=null):n.drag2&&c.identifier===n.drag2.id&&(n.drag2=null)};t.addEventListener("touchstart",r,{passive:!1}),t.addEventListener("touchmove",o,{passive:!1}),t.addEventListener("touchend",a),t.addEventListener("touchcancel",a),this.joyEnabled=!0}bindButton(t,e){let i=this.touch,n=o=>{o.preventDefault(),this.isTouch||(this.isTouch=!0,this.onTouchMode&&this.onTouchMode(!0)),i[e]=!0,(e==="fly"||e==="roll")&&(i[e+"Edge"]=!0),t.classList.add("on")},r=o=>{o.preventDefault(),i[e]=!1,t.classList.remove("on")};t.addEventListener("touchstart",n,{passive:!1}),t.addEventListener("touchend",r,{passive:!1}),t.addEventListener("touchcancel",r,{passive:!1}),t.addEventListener("mousedown",n),t.addEventListener("mouseup",r),t.addEventListener("mouseleave",o=>{i[e]&&r(o)})}held(t){let e=this.keys[t];if(!e)return!1;for(let i of e)if(i&&this.down.has(i))return!0;return!1}hit(t){let e=this.keys[t];if(!e)return!1;for(let i of e)if(i&&this.pressed.has(i))return!0;return!1}poll(t){let e=this.state,i=this.touch,n=(this.held("right")?1:0)-(this.held("left")?1:0),r=(this.held("forward")?1:0)-(this.held("back")?1:0),o=this.held("boost"),a=this.held("shift"),l=(this.held("rollR")?1:0)-(this.held("rollL")?1:0),c=this.hit("fly"),h=this.hit("boost"),u={pause:this.hit("pause"),photo:this.hit("photo"),reset:this.hit("reset")};if(e.look=this.held("look"),i.joy){let f=(g,x)=>Math.abs(g)<x?0:(g-Math.sign(g)*x)/(1-x);n=It(n+f(i.jx,.12),-1,1),r=It(r+f(i.jy,.2)*1.25,-1,1)}i.boost&&(o=!0,i.boostWas||(h=!0)),i.boostWas=i.boost,i.shift&&(a=!0),i.flyEdge&&(t?this.rollHold={dir:n<-.1?-1:1,t:6}:c=!0,i.flyEdge=!1),this.rollHold&&(l=this.rollHold.dir,--this.rollHold.t<=0&&(this.rollHold=null));let d=navigator.getGamepads?navigator.getGamepads():[];for(let f of d){if(!f||!f.connected||f.mapping!=="standard")continue;let g=y=>f.buttons[y]&&f.buttons[y].pressed,x=y=>f.buttons[y]?f.buttons[y].value:0,p=this.padPrev,m=Math.abs(f.axes[0])>.15?f.axes[0]:0;n=It(n+m,-1,1),r=It(r+x(7)-x(6),-1,1),g(0)&&(o=!0,p[0]||(h=!0)),(g(1)||g(2))&&(a=!0),g(3)&&!p[3]&&(c=!0),l=It(l+(g(5)?1:0)-(g(4)?1:0),-1,1),g(9)&&!p[9]&&(u.pause=!0),g(8)&&!p[8]&&(u.reset=!0),Math.abs(f.axes[2])>.2&&(this.dragX+=f.axes[2]*14),Math.abs(f.axes[3])>.2&&(this.dragY+=f.axes[3]*10),this.padPrev=f.buttons.map(y=>y.pressed);break}return e.steer=n,e.throttle=r,e.boost=o,e.shift=a,e.roll=l,e.fly=c,e.boostPressed=h,this.pressed.clear(),u}takeDrag(){let t={x:this.dragX,y:this.dragY,zoom:this.zoom+this.pinch};return this.dragX=this.dragY=this.zoom=this.pinch=0,t}};var Vu="flying-roadster-save-v1",ks=()=>({points:0,paint:"white",unlocked:["white"],stats:{bestCombo:0,topSpeed:0,longestAir:0,rings:0,launches:0,pads:[]},hints:{},settings:{master:.8,music:.55,sfx:.9,quality:"auto",cinematic:!0,units:"kmh",time:"sunset",sens:1,shake:!0},keys:JSON.parse(JSON.stringify(Mr))}),kt={data:ks(),timer:null,load(){let s=ks();try{let t=Ti.getItem(Vu);if(t){let e=JSON.parse(t);Object.assign(s,e),s.stats=Object.assign(ks().stats,e.stats),s.settings=Object.assign(ks().settings,e.settings),s.keys=Object.assign(ks().keys,e.keys),s.hints=e.hints||{},(!Array.isArray(s.unlocked)||!s.unlocked.includes("white"))&&(s.unlocked=["white"])}}catch{}return this.data=s,s},flush(){clearTimeout(this.timer),this.timer=null;try{Ti.setItem(Vu,JSON.stringify(this.data))}catch{}},touch(){this.timer||(this.timer=setTimeout(()=>this.flush(),1500))},reset(){let s={settings:this.data.settings,keys:this.data.keys};this.data=Object.assign(ks(),s),this.flush()}};var Go={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},px=new Ps(-1,1,1,-1,0,1),Vc=class extends Vt{constructor(){super(),this.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new wt([0,2,0,0,2,0],2))}},mx=new Vc,Pn=class{constructor(t){this._mesh=new mt(mx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,px)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hs=class extends yi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rn.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Pn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var br=class extends yi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Wo=class extends yi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Xo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new yt);this._width=i.width,this._height=i.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hs(Go),this.copyPass.material.blending=qi,this.clock=new Uo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}br!==void 0&&(o instanceof br?i=!0:o instanceof Wo&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new yt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yo=class extends yi{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ut}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Gu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vs=class s extends yi{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new yt(t.x,t.y):new yt(256,256),this.clearColor=new ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new We(r,o,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new We(r,o,{type:xi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new We(r,o,{type:xi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Gu;this.highPassUniforms=Rn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new yt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Go;this.copyUniforms=Rn.clone(h.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ut,this.oldClearAlpha=1,this.basic=new Qt,this.fsQuad=new Pn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new yt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new yt(.5,.5)},direction:{value:new yt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Vs.BlurDirectionX=new yt(1,0);Vs.BlurDirectionY=new yt(0,1);var Wu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var qo=class extends yi{constructor(){super();let t=Wu;this.uniforms=Rn.clone(t.uniforms),this.material=new Co({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Pn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ac?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ic&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var gx={low:{ratio:1,bloom:!1,shadows:0,msaa:0,treeShadows:!1,trees:.4},medium:{ratio:1.5,bloom:!0,shadows:1024,msaa:0,treeShadows:!1,trees:.7},high:{ratio:2,bloom:!0,shadows:2048,msaa:4,treeShadows:!0,trees:1}},xx={uniforms:{tDiffuse:{value:null},uStrength:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uStrength; varying vec2 vUv;
    void main() {
      vec2 d = vUv - vec2(0.5, 0.52);
      float r = length(d);
      vec4 acc = vec4(0.0);
      float amt = uStrength * 0.11 * smoothstep(0.08, 0.6, r);
      for (int i = 0; i < 10; i++) acc += texture2D(tDiffuse, vUv - d * amt * (float(i) / 9.0));
      acc /= 10.0;
            gl_FragColor = acc;
    }`},Zo=class{constructor(t){this.canvas=t;let e=this.renderer=new Mo({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1});e.toneMapping=yr,e.outputColorSpace=Ae,e.shadowMap.enabled=!0,e.shadowMap.type=Tc,this.mobile=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent),this.setting="auto",this.tierName=this.mobile?"medium":"high",this.scale=1,this.composer=null,this.frameAcc=0,this.frameN=0,this.slowStreak=0,this.fastStreak=0,this.bloomStrength=.5,this.radial=0,this.w=1,this.h=1}get tier(){return gx[this.tierName]}init(t,e,i){this.scene=t,this.camera=e,this.world=i,this.apply()}setQuality(t){this.setting=t,this.tierName=t==="auto"?this.mobile?"medium":"high":t,this.scale=1,this.slowStreak=this.fastStreak=0,this.scene&&this.apply()}apply(){let t=this.tier,e=this.renderer,i=this.world.sky.sun;e.shadowMap.enabled=t.shadows>0,i.castShadow=t.shadows>0,t.shadows&&i.shadow.mapSize.x!==t.shadows&&(i.shadow.mapSize.set(t.shadows,t.shadows),i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null));for(let n of this.world.props.group.userData.trees||[])n.castShadow=t.treeShadows,n.count=Math.round(n.userData.full*t.trees);if(this.scene.traverse(n=>{if(n.material){let r=Array.isArray(n.material)?n.material:[n.material];for(let o of r)o.needsUpdate=!0}}),this.composer&&(this.composer.dispose(),this.composer=null),t.bloom){let n=new We(4,4,{type:xi,samples:t.msaa}),r=this.composer=new Xo(e,n);r.addPass(new Yo(this.scene,this.camera)),this.bloom=new Vs(new yt(256,256),this.bloomStrength,.6,1);let o=this.bloom.materialHighPassFilter;o.fragmentShader=o.fragmentShader.replace("gl_FragColor = mix( outputColor, texel, alpha );","vec4 safe = mix( outputColor, texel, alpha ); if ( any( isnan( safe ) ) || any( isinf( safe ) ) ) safe = vec4( 0.0 ); gl_FragColor = min( safe, vec4( 4.5 ) );"),o.needsUpdate=!0,r.addPass(this.bloom),this.radialPass=new Hs(xx),this.radialPass.enabled=!1,r.addPass(this.radialPass),r.addPass(new qo)}this.resize(!0)}resize(t){let e=this.canvas.clientWidth||innerWidth,i=this.canvas.clientHeight||innerHeight,n=Math.min(devicePixelRatio||1,this.tier.ratio)*this.scale;!t&&e===this.w&&i===this.h&&n===this.ratio||(this.w=e,this.h=i,this.ratio=n,this.renderer.setPixelRatio(n),this.renderer.setSize(e,i,!1),this.composer&&(this.composer.setPixelRatio(n),this.composer.setSize(e,i)),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())}adapt(t){if(this.setting!=="auto"||t>.25||(this.frameAcc+=t,this.frameN++,this.frameAcc<1.5))return;let e=this.frameAcc/this.frameN;this.frameAcc=0,this.frameN=0,e>1/48?(this.slowStreak++,this.fastStreak=0):e<1/57?(this.fastStreak++,this.slowStreak=0):this.slowStreak=this.fastStreak=0,this.slowStreak>=2?(this.slowStreak=0,this.scale>.72?(this.scale=Math.max(.7,this.scale-.15),this.resize(!0)):this.tierName==="high"?(this.tierName="medium",this.scale=1,this.apply()):this.tierName==="medium"?(this.tierName="low",this.scale=1,this.apply()):this.scale>.55&&(this.scale=.55,this.resize(!0))):this.fastStreak>=6&&this.scale<1&&(this.fastStreak=0,this.scale=Math.min(1,this.scale+.15),this.resize(!0))}render(){if(this.resize(!1),this.composer){let t=this.world.sky;this.bloom.strength=t.studio?.38:t.v.bloom,this.bloom.threshold=t.studio?1.6:t.v.bloomT,this.bloom.radius=t.studio?.35:.6,this.radialPass.enabled=this.radial>.01,this.radialPass.uniforms.uStrength.value=this.radial,this.composer.render()}else this.renderer.render(this.scene,this.camera)}snapshot(){this.render();let t=document.createElement("canvas");return t.width=this.canvas.width,t.height=this.canvas.height,t.getContext("2d").drawImage(this.canvas,0,0),t}};var ee={x:-200,z:-820,r:780,h:300,summitY:262,summitR:46},Te={x:-40,z:840,rx:330,rz:640},ri={x:-900,z:1430,r:190,h:20},Ai={x:1010,z:-990,r:430,h:62},oe={x0:-1640,x1:-510,z0:240,z1:520,y:14},ie={x0:-1604,x1:-598,z:380,halfW:20},un={x:-569,z:380,yaw:Math.PI/2,len:54,halfW:9,h:10.5,curve:1.85},Rt={x0:511,z0:101,n:9,pitch:82,street:18,y:7};Rt.x1=Rt.x0+Rt.n*Rt.pitch;Rt.z1=Rt.z0+Rt.n*Rt.pitch;var Le={x:-1150,z:380,yaw:Math.PI/2},$o=Math.atan2(.5,.82);var Gc=(s,t,e,i,n,r)=>Math.hypot(Math.max(e-s,0,s-n),Math.max(i-t,0,t-r));function Xu(s,t,e,i,n,r,o,a,l){let c=Gc(t,e,i,n,r,o);return c>=l?s:Bt(a,s,jt(0,l,c))}function Ko(s,t){let e=Math.hypot(s,t),i=(Kn(s*.0011+3.1,t*.0011-7.7,3,11)-.5)*520,n=jt(1800,1180,e+i),r=-30+n*44;r+=n*n*(Kn(s*.0021+20,t*.0021+9,4,5)-.42)*85,r+=n*(Kn(s*.012,t*.012,2,31)-.5)*5;let o=Math.hypot(s-ee.x,t-ee.z)/ee.r;if(o<1){let u=1-o,d=u*u*(3-2*u),f=1-Math.abs(Kn(s*.0042+50,t*.0042-20,3,77)*2-1);r+=d*ee.h*(.8+.2*f)}let a=Math.hypot(s-Ai.x,t-Ai.z)/Ai.r;if(a<1){let u=1-a;r+=u*u*(3-2*u)*Ai.h*(.4+.6*n)}let l=Math.hypot((s-Te.x)/Te.rx,(t-Te.z)/Te.rz);r=Bt(r,-16,jt(1.22,.8,l));let c=Math.hypot(s-ri.x,t-ri.z);c<ri.r&&(r=Math.max(r,-6+(ri.h+6)*jt(ri.r,ri.r*.3,c))),r>0&&r<7&&(r=7*Math.pow(r/7,1.9)),r=Xu(r,s,t,oe.x0,oe.z0,oe.x1,oe.z1,oe.y,80),r=Xu(r,s,t,Rt.x0-24,Rt.z0-24,Rt.x1+24,Rt.z1+24,Rt.y,90);let h=Math.hypot(s-ee.x,t-ee.z);return h<ee.summitR+70&&(r=Bt(ee.summitY,r,jt(ee.summitR,ee.summitR+70,h))),r}var Zi=s=>new ut(s),vi={seabed:Zi("#1d5e6b"),wetSand:Zi("#c9b083"),sand:Zi("#e6cf9f"),grassA:Zi("#86a75a"),grassB:Zi("#5f9150"),dry:Zi("#b3ab66"),rock:Zi("#8d8176"),rockDark:Zi("#6f6660"),peak:Zi("#c4b8aa"),pave:Zi("#878b92")},Jo=class{constructor(t){let e=this.n=320;this.size=4e3,this.half=4e3/2,this.cell=4e3/e;let i=e+1,n=this.h=new Float32Array(i*i);for(let r=0;r<i;r++)for(let o=0;o<i;o++)n[r*i+o]=Ko(-this.half+o*this.cell,-this.half+r*this.cell);this.flatten(t)}flatten(t){let e=this.n+1,i=this.h,n=new Float32Array(i.length).fill(9),r=new Float32Array(i.length);for(let o of t){let a=o.halfW+9,l=o.halfW+44;for(let c of o.pts){if(c.bridge)continue;let h=Math.max(0,Math.floor((c.x-l+this.half)/this.cell)),u=Math.min(e-1,Math.ceil((c.x+l+this.half)/this.cell)),d=Math.max(0,Math.floor((c.z-l+this.half)/this.cell)),f=Math.min(e-1,Math.ceil((c.z+l+this.half)/this.cell));for(let g=d;g<=f;g++)for(let x=h;x<=u;x++){let p=(Math.hypot(-this.half+x*this.cell-c.x,-this.half+g*this.cell-c.z)-a)/(l-a),m=g*e+x;p<n[m]&&(n[m]=p,r[m]=c.y)}}}for(let o=0;o<i.length;o++)n[o]<1&&(i[o]=Bt(r[o],i[o],jt(0,1,n[o])))}heightAt(t,e){let i=this.n,n=i+1,r=(t+this.half)/this.cell,o=(e+this.half)/this.cell;if(r<0||o<0||r>=i||o>=i)return-30;let a=r|0,l=o|0,c=r-a,h=o-l,u=l*n+a,d=this.h,f=d[u],g=d[u+1],x=d[u+n],p=d[u+n+1];return c+h<=1?f+(g-f)*c+(x-f)*h:p+(x-p)*(1-c)+(g-p)*(1-h)}normalAt(t,e,i){return i.set(this.heightAt(t-2.5,e)-this.heightAt(t+2.5,e),2*2.5,this.heightAt(t,e-2.5)-this.heightAt(t,e+2.5)),i.normalize()}buildMesh(){let t=this.n,e=t+1,i=this.h,n=new Float32Array(e*e*3),r=new Float32Array(e*e*3),o=new ut,a=new ut;for(let d=0;d<e;d++)for(let f=0;f<e;f++){let g=d*e+f,x=-this.half+f*this.cell,p=-this.half+d*this.cell,m=i[g];n[g*3]=x,n[g*3+1]=m,n[g*3+2]=p;let y=i[d*e+Math.max(0,f-1)],M=i[d*e+Math.min(t,f+1)],v=i[Math.max(0,d-1)*e+f],P=i[Math.min(t,d+1)*e+f],E=Math.hypot(M-y,P-v)/(2*this.cell),T=Ho(x*.006,p*.006,3),R=Ho(x*.031,p*.031,9);m<.4?o.copy(vi.wetSand).lerp(vi.seabed,jt(.4,-7,m)):m<3.4+T*1.5?o.copy(vi.sand).lerp(vi.wetSand,jt(1.4,.4,m)):(o.copy(vi.grassA).lerp(vi.grassB,jt(.3,.7,T)).lerp(vi.dry,jt(.55,.95,R)*.6),o.lerp(vi.sand,jt(6.5,3.4,m)*.7),a.copy(vi.rock).lerp(vi.rockDark,R),o.lerp(a,jt(.34,.58,E+R*.08)),o.lerp(vi.peak,jt(170,255,m+T*40)*.85));let S=Gc(x,p,Rt.x0-10,Rt.z0-10,Rt.x1+10,Rt.z1+10);S<30&&o.lerp(vi.pave,jt(30,0,S));let b=Gc(x,p,oe.x0+10,oe.z0+10,oe.x1-10,oe.z1-10);b<40&&m>6&&o.lerp(vi.dry,jt(40,0,b)*.75),o.multiplyScalar(.94+R*.12),r[g*3]=o.r,r[g*3+1]=o.g,r[g*3+2]=o.b}let l=new Uint32Array(t*t*6),c=0;for(let d=0;d<t;d++)for(let f=0;f<t;f++){let g=d*e+f,x=g+1,p=g+e,m=p+1;l[c++]=g,l[c++]=p,l[c++]=x,l[c++]=x,l[c++]=p,l[c++]=m}let h=new Vt;h.setAttribute("position",new ve(n,3)),h.setAttribute("color",new ve(r,3)),h.setIndex(new ve(l,1)),h.computeVertexNormals(),this.colors=r;let u=new mt(h,new we({vertexColors:!0,flatShading:!0}));return u.receiveShadow=!0,u.matrixAutoUpdate=!1,u}buildHeightTexture(){let t=this.n+1,e=new Uint8Array(t*t);for(let n=0;n<e.length;n++)e[n]=It(Math.round((this.h[n]+16)/32*255),0,255);let i=new fr(e,t,t,vr,Bi);return i.magFilter=i.minFilter=Si,i.needsUpdate=!0,i}};var je=.15;function yx(){let s=[[-100,-60],[-112,-150]],t=1.42,e=1.62,i=24;for(let n=0;n<=i;n++){let r=n/i,o=t+r*e*Math.PI*2,a=Bt(640,ee.summitR-10,Math.pow(r,.92));s.push([ee.x+Math.cos(o)*a,ee.z+Math.sin(o)*a])}return s}var vx=[{id:"coast",closed:!0,halfW:9,lanes:4,deck:15,pts:[[-440,150],[-405,430],[-470,760],[-545,1040],[-380,1172],[-40,1178],[300,1172],[560,1050],[900,945],[1230,935],[1345,700],[1345,300],[1290,-150],[1140,-600],[820,-800],[500,-560],[250,-250],[-100,-60],[-330,40]]},{id:"summit",halfW:6.5,lanes:2,deck:8,join:"coast",endY:ee.summitY,pts:yx()},{id:"cape",halfW:6.5,lanes:2,deck:7,join:"coast",pts:[[-545,1040],[-660,1180],[-790,1320],[ri.x+26,ri.z-34]]},{id:"airlink",halfW:6.5,lanes:2,deck:8,join:"coast",pts:[[-440,150],[-505,196],[-572,246],[-606,300]]}];function _x(s,t,e){let i=new Us(s.pts.map(f=>new I(f[0],0,f[1])),!!s.closed,"centripetal"),n=Math.ceil(i.getLength()/5),r=i.getSpacedPoints(n);s.closed&&r.pop();let o=r.length,a=r.map(f=>({x:f.x,z:f.z,y:0,base:t(f.x,f.z),bridge:!1,nx:0,nz:0,s:0})),l=a.map(f=>f.base<-.6?Math.max(s.deck,f.base):Math.max(f.base,3.2)),c=null,h=s.endY??null;if(s.join){let f=e.find(x=>x.id===s.join),g=1e9;for(let x of f.pts){let p=Math.hypot(x.x-a[0].x,x.z-a[0].z);p<g&&(g=p,c=x.y)}}let u=8;for(let f=0;f<9;f++){let g=new Array(o);for(let x=0;x<o;x++){let p=0;for(let m=-u;m<=u;m++){let y=s.closed?(x+m+o)%o:Math.min(o-1,Math.max(0,x+m));p+=l[y]}g[x]=p/(2*u+1)}if(l=g,c!==null)for(let x=0;x<10;x++)l[x]=Bt(c,l[x],jt(0,10,x));if(h!==null)for(let x=0;x<10;x++)l[o-1-x]=Bt(h,l[o-1-x],jt(0,10,x))}let d=0;for(let f=0;f<o;f++){let g=a[f],x=a[s.closed?(f-1+o)%o:Math.max(0,f-1)],p=a[s.closed?(f+1)%o:Math.min(o-1,f+1)],m=p.x-x.x,y=p.z-x.z,M=Math.hypot(m,y)||1;g.tx=m/M,g.tz=y/M,g.nx=y/M,g.nz=-m/M,g.y=l[f],g.bridge=g.y-g.base>4.2&&g.base<2.5,f>0&&(d+=Math.hypot(g.x-a[f-1].x,g.z-a[f-1].z)),g.s=d}return{id:s.id,halfW:s.halfW,lanes:s.lanes,closed:!!s.closed,pts:a}}function Mx(s){let t=document.createElement("canvas");t.width=256,t.height=256;let e=t.getContext("2d");e.fillStyle="#3b3e46",e.fillRect(0,0,256,256);for(let n=0;n<2600;n++){let r=50+Math.random()*30;e.fillStyle=`rgba(${r},${r+2},${r+8},0.35)`,e.fillRect(Math.random()*256,Math.random()*256,2,2)}e.fillStyle="#e9e6dc",e.fillRect(12,0,5,256),e.fillRect(239,0,5,256),s===4?(e.fillStyle="#e8b64a",e.fillRect(123,0,3.5,256),e.fillRect(130,0,3.5,256),e.fillStyle="#e9e6dc",e.fillRect(68,20,4,96),e.fillRect(184,20,4,96),e.fillRect(68,148,4,96),e.fillRect(184,148,4,96)):(e.fillStyle="#e8b64a",e.fillRect(125,16,6,100),e.fillRect(125,144,6,100));let i=new ii(t);return i.wrapS=on,i.wrapT=zi,i.colorSpace=Ae,i.anisotropy=8,i}var Qo=class{constructor(t,e){this.roads=[];let i=vx.slice();e&&e-44>1010&&i.push({id:"pier",halfW:6.5,lanes:2,deck:7,join:"coast",pts:[[900,945],[893,990],[884,(990+e-44)/2],[880,e-44]]});for(let n of i)this.roads.push(_x(n,t,this.roads));this.cell=32,this.hash=new Map;for(let n of this.roads){let r=n.pts,o=r.length,a=n.closed?o:o-1;for(let l=0;l<a;l++){let c=r[l],h=r[(l+1)%o];if(c.bridge&&h.bridge)continue;let u=n.halfW+2,d=Math.floor((Math.min(c.x,h.x)-u)/this.cell),f=Math.floor((Math.max(c.x,h.x)+u)/this.cell),g=Math.floor((Math.min(c.z,h.z)-u)/this.cell),x=Math.floor((Math.max(c.z,h.z)+u)/this.cell),p={ax:c.x,az:c.z,bx:h.x,bz:h.z,w:n.halfW};for(let m=g;m<=x;m++)for(let y=d;y<=f;y++){let M=y*4096+m,v=this.hash.get(M);v||this.hash.set(M,v=[]),v.push(p)}}}}surfaceAt(t,e){let i=this.hash.get(Math.floor(t/this.cell)*4096+Math.floor(e/this.cell));if(!i)return 0;let n=0;for(let r=0;r<i.length;r++){let o=i[r],a=o.bx-o.ax,l=o.bz-o.az,c=((t-o.ax)*a+(e-o.az)*l)/(a*a+l*l);c=c<0?0:c>1?1:c;let h=Math.hypot(t-o.ax-a*c,e-o.az-l*c);if(h<o.w+.9){let u=h<o.w-.3?1:(o.w+.9-h)/1.2;u>n&&(n=u)}}return n}buildMeshes(t){let e=new ue,i={2:[],4:[]};for(let n of this.roads)i[n.lanes].push(n);for(let n of[4,2]){let r=[],o=[],a=[];for(let u of i[n]){let d=u.pts,f=d.length,g=u.closed?f+1:f,x=r.length/3,p=d[f-1].s+5;for(let m=0;m<g;m++){let y=d[m%f],M=m===f?p:y.s;for(let v=0;v<5;v++){let P=(v-2)/2,E=y.x+y.nx*P*u.halfW,T=y.z+y.nz*P*u.halfW,R=y.bridge?y.y+je:Math.max(t.heightAt(E,T),y.y-.4)+je;r.push(E,R,T),o.push(v/4,M/24)}if(m>0){let v=x+(m-1)*5,P=x+m*5;for(let E=0;E<4;E++)a.push(v+E,v+E+1,P+E,P+E,v+E+1,P+E+1)}}}let l=new Vt;l.setAttribute("position",new wt(r,3)),l.setAttribute("uv",new wt(o,2)),l.setIndex(a),l.computeVertexNormals();let c=new we({map:Mx(n),polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}),h=new mt(l,c);h.receiveShadow=!0,h.matrixAutoUpdate=!1,e.add(h)}return e}buildBridges(t,e){let i=[],a=[],l=null;for(let u of this.roads){let d=u.pts,f=d.length,g=[],x=()=>{if(g.length>1){let p=g[g.length-1].s-g[0].s,m=g[g.length>>1],y=Math.hypot(m.x-Te.x,m.z-(Te.z+Te.rz*.52));u.id==="coast"&&p>200&&(!l||y<l.dist)&&(l={run:g.slice(),len:p,road:u,dist:y});let M=1e9;for(let v=0;v<g.length-1;v++){let P=g[v],E=g[v+1],T=(P.x+E.x)/2,R=(P.z+E.z)/2,S=Math.hypot(E.x-P.x,E.z-P.z),b=Math.atan2(E.x-P.x,E.z-P.z),L=P.y+je,N=E.y+je,F=u.halfW+.9;t.add({x:T,z:R,hx:F,hz:S/2+.35,yaw:b,y0:Math.min(L,N)-1.5,y1:L,y2:N,kind:"deck",quiet:!0});let V=-Math.atan2(N-L,S);i.push({x:T,y:(L+N)/2-1,z:R,sx:F*2,sy:1.5,sz:S+.5,yaw:b,pitch:V,color:12170410});for(let G of[-1,1]){let et=Math.cos(b)*G*(F-.3),z=-Math.sin(b)*G*(F-.3);t.add({x:T+et,z:R+z,hx:.32,hz:S/2+.35,yaw:b,y0:Math.min(L,N)-1.5,y1:L+.95,y2:N+.95,kind:"rail",quiet:!0}),i.push({x:T+et,y:(L+N)/2+.47,z:R+z,sx:.5,sy:.95,sz:S+.5,yaw:b,pitch:V,color:14209734})}M+=S;let J=e.heightAt(T,R);if(M>44&&(L+N)/2-J>3){M=0;let G=(L+N)/2-1.5,et=J-2;i.push({x:T,y:(G+et)/2,z:R,sx:F*1.3,sy:G-et,sz:2.6,yaw:b,pitch:0,color:5593183}),t.add({x:T,z:R,hx:F*.65,hz:1.3,yaw:b,y0:et,y1:G,kind:"pier"})}}}g=[]};for(let p=0;p<f;p++)d[p].bridge?g.push(d[p]):x();x()}let c=[];if(this.bayBridge=null,l){let u=l.run,d=l.road.halfW+2.6,f=M=>u[Math.round(M*(u.length-1))],g=78,x=[f(.27),f(.73)];for(let M of x){let v=Math.atan2(M.tx,M.tz),P=e.heightAt(M.x,M.z)-2;for(let E of[-1,1]){let T=M.x+M.nx*E*d,R=M.z+M.nz*E*d;i.push({x:T,y:(g+P)/2,z:R,sx:3.2,sy:g-P,sz:4.4,yaw:v,pitch:0,color:13191226}),t.add({x:T,z:R,hx:1.6,hz:2.2,yaw:v,y0:P,y1:g,kind:"tower"}),a.push([T,g+1.2,R])}for(let E of[g-3,M.y+30,M.y-4])i.push({x:M.x,y:E,z:M.z,sx:d*2,sy:E<M.y?3:2.4,sz:3.2,yaw:v,pitch:0,color:13191226}),E>M.y&&t.add({x:M.x,z:M.z,hx:d,hz:1.6,yaw:v,y0:E-1.2,y1:E+1.2,kind:"tower"})}let p=Math.round(.27*(u.length-1)),m=Math.round(.73*(u.length-1));for(let M of[-1,1]){let v=[];for(let P=0;P<u.length;P++){let E=u[P],T;if(P<=p)T=Bt(E.y+2,g-2,Math.pow(P/p,1.7));else if(P>=m)T=Bt(E.y+2,g-2,Math.pow((u.length-1-P)/(u.length-1-m),1.7));else{let R=(P-p)/(m-p)*2-1;T=Bt(E.y+7,g-2,R*R)}v.push(new I(E.x+E.nx*M*d,T,E.z+E.nz*M*d))}c.push(v)}let y=f(.5);this.bayBridge={x:y.x,z:y.z,y:y.y,yaw:Math.atan2(y.tx,y.tz),halfW:l.road.halfW,len:l.len}}let h=new ue;if(i.length){let u=new Pe(1,1,1).toNonIndexed(),d=[],f=[],g=[],x=new Xt,p=new pe,m=new Ce,y=new I,M=new I,v=new ut,P=u.attributes.position,E=u.attributes.normal;for(let S of i){m.set(S.pitch,S.yaw,0,"YXZ"),p.setFromEuler(m),x.compose(y.set(S.x,S.y,S.z),p,M.set(S.sx,S.sy,S.sz)),v.set(S.color);for(let b=0;b<P.count;b++)y.fromBufferAttribute(P,b).applyMatrix4(x),M.fromBufferAttribute(E,b).applyQuaternion(p),d.push(y.x,y.y,y.z),f.push(M.x,M.y,M.z),g.push(v.r,v.g,v.b)}let T=new Vt;T.setAttribute("position",new wt(d,3)),T.setAttribute("normal",new wt(f,3)),T.setAttribute("color",new wt(g,3));let R=new mt(T,new we({vertexColors:!0}));R.castShadow=R.receiveShadow=!0,R.matrixAutoUpdate=!1,h.add(R)}if(c.length){let u=new we({color:13191226}),d=[];for(let m of c){let y=new mt(new Ro(new Us(m),90,.38,5,!1),u);y.matrixAutoUpdate=!1,h.add(y)}let f=l.run,g=l.road.halfW+2.6;for(let m=3;m<f.length-3;m+=3)for(let y=0;y<2;y++){let M=c[y][m],v=y?1:-1;d.push(M.x,M.y,M.z,f[m].x+f[m].nx*v*(g-1.6),f[m].y+1,f[m].z+f[m].nz*v*(g-1.6))}let x=new Vt;x.setAttribute("position",new wt(d,3));let p=new Ls(x,new Wn({color:14198684,transparent:!0,opacity:.75}));p.matrixAutoUpdate=!1,h.add(p)}return this.beaconPositions=a,h}};var jn=class{constructor(){this.boxes=[],this.cell=64,this.grid=new Map}add(t){t.yaw=t.yaw||0,t.c=Math.cos(t.yaw),t.s=Math.sin(t.yaw),t.y2===void 0&&(t.y2=t.y1),t.curve=t.curve||1,t.top=Math.max(t.y1,t.y2),t.id=this.boxes.length,this.boxes.push(t);let e=Math.abs(t.c)*t.hx+Math.abs(t.s)*t.hz,i=Math.abs(t.s)*t.hx+Math.abs(t.c)*t.hz,n=6,r=Math.floor((t.x-e-n)/this.cell),o=Math.floor((t.x+e+n)/this.cell),a=Math.floor((t.z-i-n)/this.cell),l=Math.floor((t.z+i+n)/this.cell);for(let c=a;c<=l;c++)for(let h=r;h<=o;h++){let u=h*4096+c,d=this.grid.get(u);d||this.grid.set(u,d=[]),d.push(t)}return t}near(t,e){return this.grid.get(Math.floor(t/this.cell)*4096+Math.floor(e/this.cell))}static topAt(t,e){if(t.y1===t.y2)return t.y1;let i=(e+t.hz)/(2*t.hz);return i=i<0?0:i>1?1:i,t.y1+(t.y2-t.y1)*(t.curve===1?i:Math.pow(i,t.curve))}};var jo=class extends Tn{constructor(){super();let t=new Pe;t.deleteAttribute("uv");let e=new gi({side:ze}),i=new gi,n=new zs(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new mt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new mt(t,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new mt(t,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new mt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new mt(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new mt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new mt(t,i);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new mt(t,Gs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new mt(t,Gs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new mt(t,Gs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new mt(t,Gs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let p=new mt(t,Gs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let m=new mt(t,Gs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Gs(s){let t=new Qt;return t.color.setScalar(s),t}var ia={sunset:{label:"Golden hour",elev:.2,az:$o,sun:"#ffae6b",sunI:2.9,hemiSky:"#b4c0ee",hemiGround:"#c79a78",hemiI:1.7,zenith:"#25427f",mid:"#e88f78",horizon:"#ffcf96",glow:"#ff9a4d",disc:9,fog:"#eeb48e",fogD:205e-6,deep:"#144a63",shallow:"#3fa7a3",foam:"#ffe9d6",cloud:"#ffd9c2",cloudDark:"#c97f86",exposure:1,windows:.85,stars:0,bloom:.5,bloomT:2.3,lamps:1},day:{label:"Clear day",elev:.86,az:$o-.5,sun:"#fff3de",sunI:2.7,hemiSky:"#bcd4ff",hemiGround:"#a39d84",hemiI:1.2,zenith:"#2a66c4",mid:"#78b1ea",horizon:"#d3e9f7",glow:"#fff1cf",disc:9,fog:"#cfe3f3",fogD:15e-5,deep:"#0f5c8a",shallow:"#3fc2bb",foam:"#ffffff",cloud:"#ffffff",cloudDark:"#b9c8de",exposure:.95,windows:.12,stars:0,bloom:.32,bloomT:2.8,lamps:0},night:{label:"Night flight",elev:.62,az:$o+2.1,sun:"#9fb6ff",sunI:.8,hemiSky:"#4a5c9c",hemiGround:"#232838",hemiI:.95,zenith:"#040817",mid:"#0c1736",horizon:"#263763",glow:"#5a6fb5",disc:3.5,fog:"#141d3a",fogD:19e-5,deep:"#050f24",shallow:"#123a55",foam:"#b7c8ee",cloud:"#3a4672",cloudDark:"#1a2140",exposure:1.15,windows:2.3,stars:1,bloom:.75,bloomT:1,lamps:1.6}},Ws=["sunset","day","night"],ta=["sun","hemiSky","hemiGround","zenith","mid","horizon","glow","fog","deep","shallow","foam","cloud","cloudDark"],Wc=["elev","az","sunI","hemiI","disc","fogD","exposure","windows","stars","bloom","bloomT","lamps"],bx=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Sx=`
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
}`,ea=class{constructor(t,e){this.scene=t,this.renderer=e,this.v={sunDir:new I};for(let o of ta)this.v[o]=new ut;this.from=null,this.to=null,this.t=1,this.name="sunset",this.uniforms={uZenith:{value:this.v.zenith},uMid:{value:this.v.mid},uHorizon:{value:this.v.horizon},uGlow:{value:this.v.glow},uSunDir:{value:this.v.sunDir},uSunColor:{value:this.v.sun},uFog:{value:this.v.fog},uDisc:{value:8},uStars:{value:0}};let i=new _e({vertexShader:bx,fragmentShader:Sx,uniforms:this.uniforms,side:ze,depthWrite:!1,depthTest:!0,fog:!1});this.dome=new mt(new An(1,32,16),i),this.dome.frustumCulled=!1,this.dome.renderOrder=-10,t.add(this.dome),this.sun=new Do(16777215,3),this.sun.castShadow=!0;let n=this.sun.shadow;n.mapSize.set(2048,2048),n.camera.near=1,n.camera.far=520,n.bias=-5e-4,n.normalBias=.06,this.setShadowRange(70),t.add(this.sun,this.sun.target),this.hemi=new Io(16777215,8947848,1),t.add(this.hemi),t.fog=new bo(16777215,2e-4),this.clouds=this.buildClouds(),t.add(this.clouds),this.pmrem=new Is(e),this.envScene=new Tn;let r=new mt(this.dome.geometry,i);r.scale.setScalar(900),this.envScene.add(r),this.envRT=null,this.setTime("sunset",!0)}setShadowRange(t){let e=this.sun.shadow.camera;e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.updateProjectionMatrix(),this.shadowRange=t}buildClouds(){let t=Jn(77),e=new Yn(1,1);this.cloudMat=new we({color:16777215,emissive:0,flatShading:!0,fog:!1});let i=[];for(let l=0;l<46;l++){let c=t()*Math.PI*2,h=500+t()*3600,u=Math.cos(c)*h,d=Math.sin(c)*h,f=380+t()*380,g=40+t()*70,x=4+Math.floor(t()*4);for(let p=0;p<x;p++)i.push({x:u+(t()-.5)*g*3.4,y:f+(t()-.3)*g*.4,z:d+(t()-.5)*g*1.6,sx:g*(.7+t()*.8),sy:g*(.32+t()*.25),sz:g*(.6+t()*.6),r:t()*3})}let n=new wi(e,this.cloudMat,i.length),r=new Xt,o=new pe,a=new Ce;return i.forEach((l,c)=>{o.setFromEuler(a.set(0,l.r,0)),r.compose(new I(l.x,l.y,l.z),o,new I(l.sx,l.sy,l.sz)),n.setMatrixAt(c,r)}),n.frustumCulled=!1,n}setTime(t,e=!1){let i=ia[t];if(i){this.name=t,this.to={},this.from={};for(let n of ta)this.to[n]=new ut(i[n]),this.from[n]=this.v[n].clone();for(let n of Wc)this.to[n]=i[n],this.from[n]=this.v[n]??i[n];if(this.t=e?1:0,this.studio){this.t=1;for(let n of ta)this.v[n].copy(this.to[n]);for(let n of Wc)this.v[n]=this.to[n];this.from=this.to,this.refreshEnv(),this.scene.environment=this.studioEnv.texture;return}this.apply(this.t),e&&this.refreshEnv()}}apply(t){let e=this.v,i=t*t*(3-2*t);for(let r of ta)e[r].copy(this.from[r]).lerp(this.to[r],i);for(let r of Wc)e[r]=Bt(this.from[r],this.to[r],i);let n=Math.cos(e.elev);e.sunDir.set(n*Math.cos(e.az),Math.sin(e.elev),n*Math.sin(e.az)).normalize(),this.uniforms.uDisc.value=e.disc,this.uniforms.uStars.value=e.stars,this.sun.color.copy(e.sun),this.sun.intensity=e.sunI,this.hemi.color.copy(e.hemiSky),this.hemi.groundColor.copy(e.hemiGround),this.hemi.intensity=e.hemiI,this.scene.fog.color.copy(e.fog),this.scene.fog.density=e.fogD,this.cloudMat.color.copy(e.cloud),this.cloudMat.emissive.copy(e.cloudDark).multiplyScalar(.55),this.renderer.toneMappingExposure=e.exposure}refreshEnv(){let t=this.envRT,e=this.uniforms.uDisc.value;this.uniforms.uDisc.value=Math.min(e,4),this.envRT=this.pmrem.fromScene(this.envScene,.02,1,2e3),this.uniforms.uDisc.value=e,this.scene.environment=this.envRT.texture,t&&t.dispose()}setStudio(t){t!==this.studio&&(this.studio=t,t?(this.studioEnv||(this.studioEnv=this.pmrem.fromScene(new jo,.04)),this.scene.environment=this.studioEnv.texture,this.scene.environmentIntensity=.5,this.sun.color.set(16777215),this.sun.intensity=.5,this.hemi.color.set(14673650),this.hemi.groundColor.set(1447708),this.hemi.intensity=.45,this.renderer.toneMappingExposure=.92):(this.apply(this.t),this.scene.environmentIntensity=1,this.envRT&&(this.scene.environment=this.envRT.texture)))}update(t,e,i){this.t<1&&!this.studio&&(this.t=Math.min(1,this.t+t/1.6),this.apply(this.t),this.t>=1&&this.refreshEnv()),this.dome.position.copy(e.position),this.dome.scale.setScalar(e.far*.9),this.clouds.rotation.y+=t*.0012;let n=this.shadowRange,r=2*n/this.sun.shadow.mapSize.x,o=Math.round(i.x/r)*r,a=Math.round(i.y/r)*r,l=Math.round(i.z/r)*r;this.sun.target.position.set(o,a,l),this.sun.position.set(o,a,l).addScaledVector(this.v.sunDir,260)}};var wx=`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,Ex=`
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
}`;function Yu(s){let t=new _e({vertexShader:wx,fragmentShader:Ex,uniforms:{uTime:{value:0},uSize:{value:4e3},uHeight:{value:s},uFogDensity:{value:2e-4},uSunDir:{value:new I(0,1,0)},uSunColor:{value:new ut},uDeep:{value:new ut},uShallow:{value:new ut},uFoam:{value:new ut},uHorizon:{value:new ut},uZenith:{value:new ut},uFogColor:{value:new ut}}}),e=new mt(new Ke(24e3,24e3,1,1).rotateX(-Math.PI/2),t);return e.frustumCulled=!1,e.matrixAutoUpdate=!1,e}var Ge=class s{constructor(){this.pos=[],this.nor=[],this.col=[],this._m=new Xt,this._q=new pe,this._e=new Ce,this._v=new I,this._s=new I,this._c=new ut,this._n3=new Wt}addGeometry(t,e,i){let n=t.index?t.toNonIndexed():t;n.attributes.normal||n.computeVertexNormals();let r=n.attributes.position,o=n.attributes.normal,a=this._v,l=this._c;this._n3.getNormalMatrix(e);let c=typeof i=="function"?i:null;c||l.set(i);for(let h=0;h<r.count;h++)a.fromBufferAttribute(r,h),c&&l.set(c(a)),a.applyMatrix4(e),this.pos.push(a.x,a.y,a.z),a.fromBufferAttribute(o,h).applyMatrix3(this._n3).normalize(),this.nor.push(a.x,a.y,a.z),this.col.push(l.r,l.g,l.b);return this}matrix(t,e,i,n=1,r=1,o=1,a=0,l=0,c=0){return this._e.set(l,a,c,"YXZ"),this._q.setFromEuler(this._e),this._m.compose(this._v.set(t,e,i),this._q,this._s.set(n,r,o)).clone()}box(t,e,i,n,r,o,a,l=0,c=0,h=0){return this.addGeometry(s.unitBox,this.matrix(t,e,i,n,r,o,l,c,h),a)}cyl(t,e,i,n,r,o,a,l=8,c=0,h=0,u=0){let d=new Ie(n,r,o,l);return this.addGeometry(d,this.matrix(t,e,i,1,1,1,c,h,u),a)}quad(t,e,i,n,r){let o=e[0]-t[0],a=e[1]-t[1],l=e[2]-t[2],c=i[0]-t[0],h=i[1]-t[1],u=i[2]-t[2],d=a*u-l*h,f=l*c-o*u,g=o*h-a*c,x=Math.hypot(d,f,g)||1;d/=x,f/=x,g/=x;let p=this._c.set(r);for(let m of[t,e,i,t,i,n])this.pos.push(m[0],m[1],m[2]),this.nor.push(d,f,g),this.col.push(p.r,p.g,p.b);return this}build(t,e=!0){let i=new Vt;i.setAttribute("position",new wt(this.pos,3)),i.setAttribute("normal",new wt(this.nor,3)),i.setAttribute("color",new wt(this.col,3));let n=new mt(i,t||new we({vertexColors:!0}));return n.castShadow=n.receiveShadow=e,n.matrixAutoUpdate=!1,n}};Ge.unitBox=new Pe(1,1,1).toNonIndexed();var Tx=3.2,Ax=3.4,Gi=16;function Rx(s,t){let e=Jn(t),i=512,n=i/Gi,r=document.createElement("canvas"),o=document.createElement("canvas");r.width=r.height=o.width=o.height=i;let a=r.getContext("2d"),l=o.getContext("2d");if(l.fillStyle="#000",l.fillRect(0,0,i,i),s==="A"){a.fillStyle="#ffffff",a.fillRect(0,0,i,i);for(let h=0;h<Gi;h++){a.fillStyle="rgba(0,0,0,0.07)",a.fillRect(0,h*n+n-2,i,2);for(let u=0;u<Gi;u++){let d=u*n+7,f=h*n+6,g=n-14,x=n-13;if(a.fillStyle="#26313f",a.fillRect(d,f,g,x),a.fillStyle="#51657c",a.fillRect(d,f,g,5),a.fillStyle="rgba(255,255,255,0.5)",a.fillRect(d-1,f+x,g+2,2),e()<.34){let p=e();l.fillStyle=p<.6?"#ffc778":p<.88?"#ffe3b8":"#bcd6ff",l.globalAlpha=.55+e()*.45,l.fillRect(d,f,g,x),l.globalAlpha=1}}}}else{a.fillStyle="#8fb0c9",a.fillRect(0,0,i,i);for(let h=0;h<Gi;h++)for(let u=0;u<Gi;u++){let d=u*n,f=h*n,g=.72+e()*.28;a.fillStyle=`rgb(${Math.round(150*g)},${Math.round(186*g)},${Math.round(214*g)})`,a.fillRect(d+1,f+1,n-2,n-8),a.fillStyle="#dfe9f0",a.fillRect(d,f+n-7,n,5),a.fillStyle="#31404f",a.fillRect(d,f,2,n),e()<.24&&(l.fillStyle=e()<.8?"#e8a85c":"#cfe0ff",l.globalAlpha=.3+e()*.4,l.fillRect(d+2,f+1,n-3,n-8),l.globalAlpha=1)}}let c=h=>{let u=new ii(h);return u.wrapS=u.wrapT=zi,u.colorSpace=Ae,u.anisotropy=4,u};return{map:c(r),emissiveMap:c(o)}}function Cx(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),i=512/Rt.pitch,n=Rt.street/2*i,r=3.2*i;for(let a=0;a<2;a++){let l=a*512;e.save(),e.translate(l,0),e.beginPath(),e.rect(0,0,512,512),e.clip(),e.fillStyle="#3b3e46",e.fillRect(0,0,512,512);for(let h=0;h<3e3;h++){let u=52+Math.random()*26;e.fillStyle=`rgba(${u},${u+2},${u+8},0.3)`,e.fillRect(Math.random()*512,Math.random()*512,2,2)}if(e.fillStyle="#b3aea4",e.fillRect(n,n,512-2*n,512-2*n),e.fillStyle=a===0?"#96938c":"#6f9a57",e.fillRect(n+r,n+r,512-2*(n+r),512-2*(n+r)),a===0){e.strokeStyle="rgba(0,0,0,0.08)",e.lineWidth=1;for(let h=n+r;h<512-n-r;h+=4*i)e.beginPath(),e.moveTo(h,n+r),e.lineTo(h,512-n-r),e.stroke(),e.beginPath(),e.moveTo(n+r,h),e.lineTo(512-n-r,h),e.stroke()}else{e.strokeStyle="#d8c9a3",e.lineWidth=3*i,e.beginPath(),e.moveTo(n+r,n+r),e.lineTo(512-n-r,512-n-r),e.stroke(),e.beginPath(),e.moveTo(512-n-r,n+r),e.lineTo(n+r,512-n-r),e.stroke(),e.fillStyle="#d8c9a3",e.beginPath(),e.arc(512/2,512/2,11*i,0,7),e.fill(),e.fillStyle="#7fa965";for(let h=0;h<60;h++)e.globalAlpha=.5,e.beginPath(),e.arc(n+r+Math.random()*(512-2*n-2*r),n+r+Math.random()*(512-2*n-2*r),4+Math.random()*9,0,7),e.fill();e.globalAlpha=1}e.fillStyle="#e8b64a";for(let h=n+14;h<512-n-14;h+=34)e.fillRect(0,h,2.5,18),e.fillRect(512-2.5,h,2.5,18),e.fillRect(h,0,18,2.5),e.fillRect(h,512-2.5,18,2.5);e.fillStyle="#e9e6dc";let c=4*i;for(let h=5;h<n-4;h+=9)e.fillRect(n+2,h,c,5),e.fillRect(512-n-2-c,h,c,5),e.fillRect(n+2,512-h-5,c,5),e.fillRect(512-n-2-c,512-h-5,c,5),e.fillRect(h,n+2,5,c),e.fillRect(h,512-n-2-c,5,c),e.fillRect(512-h-5,n+2,5,c),e.fillRect(512-h-5,512-n-2-c,5,c);e.restore()}let o=new ii(t);return o.colorSpace=Ae,o.anisotropy=8,o}var Px=["#efe3cf","#dccab2","#cdbcab","#e6d6c2","#bfae9d","#d9b99e","#d2d8da","#f3eadb","#c9906f","#e2c7a6"],Ix=["#b4d2e4","#9cc0d8","#bfdcd8","#d6c2a4","#a9b8d2","#cfe2ec","#94b6c8"];function qu(s){let t=Jn(2026),e=new ue,i={A:{pos:[],nor:[],uv:[],col:[]},B:{pos:[],nor:[],uv:[],col:[]}},n=new Ge,r=[],o=[],a=[],l=[],c=[],h=new ut,u=Rt.y+je;function d(T,R,S,b,L,N,F,V,J,G,et,z){let lt=Math.hypot(b-R,L-S),ht=Math.max(1,Math.round(lt/Tx))/Gi,gt=Math.max(1,Math.round((F-N)/Ax))/Gi;T.pos.push(R,N,S,b,N,L,b,F,L,R,N,S,b,F,L,R,F,S),T.uv.push(et,z,et+ht,z,et+ht,z+gt,et,z,et+ht,z+gt,et,z+gt);for(let Et=0;Et<6;Et++)T.nor.push(V,0,J),T.col.push(G.r,G.g,G.b)}function f(T,R,S,b,L,N,F,V){let J=i[F];h.set(V);let G=Math.floor(t()*Gi)/Gi,et=Math.floor(t()*Gi)/Gi;d(J,T-S,R+b,T+S,R+b,L,N,0,1,h,G,et),d(J,T+S,R+b,T+S,R-b,L,N,1,0,h,G,et),d(J,T+S,R-b,T-S,R-b,L,N,0,-1,h,G,et),d(J,T-S,R-b,T-S,R+b,L,N,-1,0,h,G,et);let z=new ut(V).multiplyScalar(.5).lerp(new ut("#5c6068"),.5);n.box(T,N-.05,R,S*2,.1,b*2,z.getHex()),n.box(T,N-.03,R,S*2-3,.1,b*2-3,z.clone().multiplyScalar(1.25).getHex()),s.add({x:T,z:R,hx:S,hz:b,y0:L-3,y1:N,kind:"building"}),c.push({x:T,z:R,hx:S,hz:b,y:N})}function g(T,R,S,b,L,N){let F=L>70,V=F?t()<.7?"B":"A":t()<.16?"B":"A",J=V==="A"?Px:Ix,G=J[Math.floor(t()*J.length)];if(F&&Math.min(S,b)>12&&t()<.75){let et=L*(.5+t()*.25);f(T,R,S,b,u,u+et,V,G);let z=4+t()*4;if(f(T,R,S-z,b-z,u+et,u+L,V,G),t()<.4){let lt=z+4+t()*3,ht=10+t()*22;if(Math.min(S,b)-lt>4)return f(T,R,S-lt,b-lt,u+L,u+L+ht,V,G),{x:T,z:R,hx:S-lt,hz:b-lt,top:u+L+ht}}return{x:T,z:R,hx:S-z,hz:b-z,top:u+L}}return f(T,R,S,b,u,u+L,V,G),{x:T,z:R,hx:S,hz:b,top:u+L}}let x=[],p={pos:[],uv:[],idx:[]},m=(Rt.pitch-Rt.street)/2-4;for(let T=0;T<Rt.n;T++)for(let R=0;R<Rt.n;R++){let S=Rt.x0+(R+.5)*Rt.pitch,b=Rt.z0+(T+.5)*Rt.pitch,L=Math.max(Math.abs(R-4),Math.abs(T-4)),N=`${R},${T}`,F=N==="2,6"||N==="7,3",V=N==="6,6"||N==="1,2",J=p.pos.length/3,G=Rt.pitch/2,et=F?.5:0;if(p.pos.push(S-G,u,b-G,S+G,u,b-G,S-G,u,b+G,S+G,u,b+G),p.uv.push(et+.001,1,et+.499,1,et+.001,0,et+.499,0),p.idx.push(J,J+2,J+1,J+1,J+2,J+3),F){l.push({x:S,z:b,r:m});continue}if(V){o.push({x:S,z:b,y:u,plaza:!0});continue}if(L===0){let _t="#8fb7cf";f(S,b,27,27,u,u+70,"B",_t),f(S,b,21,21,u+70,u+170,"B",_t),f(S,b,15,15,u+170,u+246,"B",_t),r.push({x:S,z:b,y:u+246,r:10,name:"Aurora Tower"}),a.push([S+14,u+248,b+14],[S-14,u+248,b-14]),x.push({x:S,z:b,hx:15,hz:15,top:u+246,ring:L});continue}let z=t(),lt=L===1?[88,190]:L===2?[34,92]:L===3?[11,34]:[8,20],ht=()=>lt[0]+t()*(lt[1]-lt[0]),gt=2.5,Et=[];if(L===1&&z<.5||L===2&&z<.25){let _t=m-t()*5;Et.push(g(S,b,_t,_t,ht()*1.1,L))}else if(L<=2&&z<.7||L>2&&z<.3){let _t=m/2-gt/2;t()<.5?Et.push(g(S-_t-gt,b,_t,m,ht(),L),g(S+_t+gt,b,_t,m,ht(),L)):Et.push(g(S,b-_t-gt,m,_t,ht(),L),g(S,b+_t+gt,m,_t,ht(),L))}else if(z<.86||L<=2){let _t=m/2-gt/2;for(let j of[-1,1])for(let ft of[-1,1])Et.push(g(S+j*(_t+gt),b+ft*(_t+gt),_t,_t,ht()*(.7+t()*.5),L))}else{let _t=m/2-gt/2;Et.push(g(S,b-_t-gt,m,_t,ht(),L));for(let j of[-1,1])Et.push(g(S+j*(_t+gt),b+_t+gt,_t,_t,ht()*.8,L))}for(let _t of Et)x.push({..._t,ring:L})}let y=x.filter(T=>T.ring>=1&&T.ring<=2&&Math.min(T.hx,T.hz)>=11).sort((T,R)=>R.top-T.top),M=["Skyline Deck","Harbor View","Midtown Roof"];[y[0],y[Math.floor(y.length/2)],y[y.length-2]].forEach((T,R)=>{T&&r.push({x:T.x,z:T.z,y:T.top,r:Math.min(9,Math.min(T.hx,T.hz)-1.5),name:M[R]})});for(let T of x)T.top>150&&T.ring>0&&a.push([T.x,T.top+1.5,T.z]);let v={};for(let T of["A","B"]){let R=i[T],S=new Vt;S.setAttribute("position",new wt(R.pos,3)),S.setAttribute("normal",new wt(R.nor,3)),S.setAttribute("uv",new wt(R.uv,2)),S.setAttribute("color",new wt(R.col,3));let b=Rx(T,T==="A"?5:9),L=new we({map:b.map,emissiveMap:b.emissiveMap,emissive:16777215,emissiveIntensity:1,vertexColors:!0});v[T]=L;let N=new mt(S,L);N.castShadow=N.receiveShadow=!0,N.matrixAutoUpdate=!1,e.add(N)}e.add(n.build());let P=new Vt;P.setAttribute("position",new wt(p.pos,3)),P.setAttribute("uv",new wt(p.uv,2)),P.setIndex(p.idx),P.computeVertexNormals();let E=new mt(P,new we({map:Cx(),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));return E.receiveShadow=!0,E.matrixAutoUpdate=!1,e.add(E),{group:e,mats:v,pads:r,rampSpots:o,beacons:a,parks:l,tops:x,roofList:c}}function $u(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Vt,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Zu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Zu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Zu(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ve(o,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}function Sr(s=8,t=.62,e=.045){let i=[],n=Math.PI*2/s;for(let o=0;o<s;o++){let a=new Ei(1,e,5,10,n*t);a.rotateZ(o*n),i.push(a)}let r=$u(i);return i.forEach(o=>o.dispose()),r}var Xs=6,Lx=new ut(5,4.6,3.6);function Ju(){let s=new ue,t=oe.y+je,e=un.z,i=un.x-un.len/2,n=[];for(let Et=0;Et<Xs;Et++){let _t=Le.x+70+(i-90-Le.x-70)*Et/(Xs-1);n.push({x:_t,y:t+6.6,z:e,r:6.2,pulse:0})}let r=Sr(10,.7,.05),o=Sr(5,.42,.075),a=new Qt({color:16777215,fog:!1,toneMapped:!0}),l=new wi(r,a,Xs),c=new wi(o,a,Xs);l.frustumCulled=c.frustumCulled=!1,s.add(l,c);let h=document.createElement("canvas");h.width=128,h.height=64;let u=h.getContext("2d");u.fillStyle="#fff",u.beginPath(),u.moveTo(34,6),u.lineTo(70,32),u.lineTo(34,58),u.lineTo(52,58),u.lineTo(88,32),u.lineTo(52,6),u.closePath(),u.fill();let d=new ii(h);d.wrapS=zi,d.anisotropy=8;let f=i-8-(Le.x+30),g=6;d.repeat.set(f/(g*3),1);let x=new Qt({map:d,color:new ut(1.5,.42,.1),transparent:!0,opacity:.85,blending:Be,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-2}),p=new mt(new Ke(f,g).rotateX(-Math.PI/2),x);p.position.set(Le.x+30+f/2,t+.05,e),s.add(p);let m=un.x,y=un.z,M=t+un.h+17,v=new ue;v.position.set(m,M,y);let P=new Qt({color:new ut(4.2,1.3,.5),fog:!1}),E=new mt(new Xn(2.4,4.6,4,1).rotateX(Math.PI),P),T=new mt(Sr(12,.55,.04).rotateX(Math.PI/2),new Qt({color:new ut(3.4,3.1,2.6),fog:!1}));T.scale.setScalar(5.2),v.add(E,T);let R=(()=>{let Et=document.createElement("canvas");Et.width=4,Et.height=128;let _t=Et.getContext("2d"),j=_t.createLinearGradient(0,0,0,128);return j.addColorStop(0,"rgba(255,255,255,0)"),j.addColorStop(.75,"rgba(255,255,255,0.55)"),j.addColorStop(1,"rgba(255,255,255,1)"),_t.fillStyle=j,_t.fillRect(0,0,4,128),new ii(Et)})(),S=new Qt({map:R,color:new ut(1.5,.55,.25),transparent:!0,blending:Be,depthWrite:!1,side:Ue,fog:!1}),b=new mt(new Ie(.9,1.6,220,12,1,!0),S);b.position.set(m,M+2+110,y),s.add(v,b);let L=new Xt,N=new pe,F=new pe,V=new I,J=new I,G=new ut,et=new pe().setFromUnitVectors(new I(0,0,1),new I(1,0,0)),z=new I(0,0,1),lt=null,ht=0,gt={group:s,gates:n,passed:-1,update(Et,_t,j){if(ht+=Et,gt.passed=-1,_t&&lt!=null)for(let dt=0;dt<Xs;dt++){let Tt=n[dt];(lt-Tt.x)*(_t.x-Tt.x)<=0&&lt!==_t.x&&Math.hypot(_t.y+.6-Tt.y,_t.z-Tt.z)<Tt.r&&(Tt.pulse=1,gt.passed=dt)}lt=_t?_t.x:null;let ft=1-j*.55;for(let dt=0;dt<Xs;dt++){let Tt=n[dt];Tt.pulse=Math.max(0,Tt.pulse-Et*1.4);let Gt=(.6+Math.pow(Math.max(0,Math.sin(ht*3.1-dt*.85)),6)*1.6)*ft,ae=Tt.r*(1+Tt.pulse*.35);G.setRGB(2.6*Gt,.55*Gt,.16*Gt).lerp(Lx,Tt.pulse),J.set(Tt.x,Tt.y,Tt.z),N.copy(et).multiply(F.setFromAxisAngle(z,ht*.9+dt*.5)),l.setMatrixAt(dt,L.compose(J,N,V.set(ae,ae,ae))),l.setColorAt(dt,G),N.copy(et).multiply(F.setFromAxisAngle(z,-ht*1.7-dt*.5)),c.setMatrixAt(dt,L.compose(J,N,V.setScalar(ae*.86))),c.setColorAt(dt,G)}for(let dt of[l,c])dt.instanceMatrix.needsUpdate=!0;l.instanceColor.needsUpdate=c.instanceColor.needsUpdate=!0,d.offset.x=-(ht*.9)%1,x.opacity=.85*ft,E.rotation.y=ht*1.6,T.rotation.y=-ht*.7,v.position.y=M+Math.sin(ht*2.2)*.9;let At=.7+.3*Math.sin(ht*4.4);P.color.setRGB(4.2*At,1.3*At,.5*At),S.opacity=.75*ft}};return gt.update(0,null,0),gt}var Dx='"Barlow Condensed", "Arial Narrow", Arial, sans-serif';function ts(s,t,e,i={}){let n=document.createElement("canvas");n.width=s,n.height=t,e(n.getContext("2d"),s,t);let r=new ii(n);return r.colorSpace=Ae,r.anisotropy=8,i.repeat&&(r.wrapS=r.wrapT=zi),r}function Xc(s,t,e,i){s.beginPath(),s.moveTo(t-50*i,e+32*i),s.lineTo(t,e-18*i),s.lineTo(t+50*i,e+32*i),s.lineTo(t+50*i,e+6*i),s.lineTo(t,e-44*i),s.lineTo(t-50*i,e+6*i),s.closePath(),s.fill()}function Ku({terrain:s,roads:t,colliders:e,city:i,pierZ:n}){let r=new ue,o=Jn(4242),a=new Ge,l=new Ge,c=[],h=[...i.pads],u=[],d=[],f=[],g=[...i.beacons,...t.beaconPositions||[]],x={kicker:{pos:[],uv:[],idx:[]},launch:{pos:[],uv:[],idx:[]}};function p(C){C.curve=C.curve||1.6;let w=Math.cos(C.yaw),_=Math.sin(C.yaw),D=14,W=x[C.launch?"launch":"kicker"],Y=(it,ot,ct)=>[C.x+it*w+ct*_,C.baseY+ot,C.z-it*_+ct*w],X=it=>C.h*Math.pow(it,C.curve),at=W.pos.length/3,K=C.halfW,rt=C.len,St=C.launch?1908260:3159100;for(let it=0;it<=D;it++){let ot=it/D,ct=-rt/2+ot*rt,st=X(ot);if(W.pos.push(...Y(-K,st,ct),...Y(K,st,ct)),W.uv.push(0,ot*rt/8,1,ot*rt/8),it>0){let tt=at+(it-1)*2,Pt=at+it*2;W.idx.push(tt,Pt,tt+1,tt+1,Pt,Pt+1);let Ct=ct-rt/D,$=X((it-1)/D);a.quad(Y(-K,-3,Ct),Y(-K,-3,ct),Y(-K,st,ct),Y(-K,$,Ct),St),a.quad(Y(K,-3,ct),Y(K,-3,Ct),Y(K,$,Ct),Y(K,st,ct),St);let U=-Math.atan2(st-$,rt/D),nt=Math.hypot(st-$,rt/D)+.05;for(let H of[-1,1]){let Q=Y(H*(K-.16),(st+$)/2+.1,(ct+Ct)/2);(C.launch?l:a).box(Q[0],Q[1],Q[2],.3,.22,nt,C.launch?it%2?16769730:16730682:it%2?16118246:2764083,C.yaw,U)}}}return a.quad(Y(-K,-3,rt/2),Y(K,-3,rt/2),Y(K,C.h,rt/2),Y(-K,C.h,rt/2),St),C.collider=e.add({x:C.x,z:C.z,hx:K,hz:rt/2,yaw:C.yaw,y0:C.baseY-3,y1:C.baseY,y2:C.baseY+C.h,curve:C.curve,kind:"ramp",launch:!!C.launch,name:C.name}),C.lipX=C.x+_*rt/2,C.lipZ=C.z+w*rt/2,C.lipY=C.baseY+C.h,c.push(C),C}let m=oe.y+je;p({...un,baseY:m,launch:!0,name:"Proving Ground Launch"}),p({x:-1400,z:462,yaw:Math.PI/2,len:14,halfW:5,h:3,baseY:m}),p({x:-1310,z:462,yaw:Math.PI/2,len:20,halfW:5.5,h:5.2,baseY:m}),p({x:-1196,z:462,yaw:Math.PI/2,len:22,halfW:6,h:6,baseY:m}),p({x:-1104,z:462,yaw:-Math.PI/2,len:22,halfW:6,h:6,baseY:m}),p({x:-960,z:470,yaw:Math.PI/2,len:12,halfW:4,h:2.4,curve:1.3,baseY:m}),p({x:-920,z:470,yaw:-Math.PI/2,len:12,halfW:4,h:2.4,curve:1.3,baseY:m}),p({x:-1500,z:300,yaw:.9,len:16,halfW:5,h:4,baseY:m});let y=t.roads[0];for(let[C,w,_]of[[.045,1,3.4],[.34,1,3.6],[.46,-1,3.2],[.58,1,4],[.72,-1,3.4],[.86,1,3.8],[.95,-1,3.2]]){let D=y.pts[Math.floor(C*y.pts.length)];if(D.bridge)continue;let W=Math.atan2(D.tx,D.tz)+(w<0?Math.PI:0);p({x:D.x+D.nx*4.6*w,z:D.z+D.nz*4.6*w,yaw:W,len:17,halfW:3.7,h:_,baseY:D.y+je})}if(t.bayBridge){let C=t.bayBridge;p({x:C.x+Math.cos(C.yaw)*-4.6,z:C.z-Math.sin(C.yaw)*-4.6,yaw:C.yaw+Math.PI,len:15,halfW:3.6,h:3,baseY:C.y+je})}let M=Rt.x0+300-ee.x,v=Rt.z0+300-ee.z,P=Math.hypot(M,v);p({x:ee.x+M/P*17,z:ee.z+v/P*17,yaw:Math.atan2(M,v),len:30,halfW:6.5,h:6.5,curve:1.8,baseY:ee.summitY,launch:!0,name:"Summit Send"});for(let C of i.rampSpots){let w=Math.atan2(Rt.x0+4.5*Rt.pitch-C.x,Rt.z0+4.5*Rt.pitch-C.z);p({x:C.x,z:C.z,yaw:Math.round(w/(Math.PI/2))*(Math.PI/2),len:20,halfW:5.5,h:5,baseY:C.y}),h.push({x:C.x+18,z:C.z-18,y:C.y,r:7,name:"Plaza"})}let E=i.tops.filter(C=>C.ring>=2&&C.ring<=3&&Math.min(C.hx,C.hz)>=11&&!i.pads.some(w=>w.x===C.x&&w.z===C.z));for(let C=0;C<4&&C<E.length;C++){let w=E[Math.floor((C+.5)*E.length/4)],_=Math.atan2(Rt.x0+4.5*Rt.pitch-w.x,Rt.z0+4.5*Rt.pitch-w.z),D=Math.round(_/(Math.PI/2))*(Math.PI/2),W=Math.abs(Math.sin(D))>.5?w.hx:w.hz;p({x:w.x+Math.sin(D)*(W-8.5),z:w.z+Math.cos(D)*(W-8.5),yaw:D,len:15,halfW:4,h:3.2,baseY:w.top})}{let w=n-26,_=n+190,D=6.6;e.add({x:880,z:(w+_)/2,hx:8,hz:(_-w)/2,y0:D-1.2,y1:D,kind:"deck",quiet:!0}),a.box(880,D-.6,(w+_)/2,16,1.2,_-w,12160870),a.box(880,D+.03,(w+_)/2,12,.08,_-w-2,13280122);for(let st=w+12;st<_;st+=24)for(let tt of[-1,1])a.box(880+tt*6.5,(D-8)/2-.6,st,1.1,D+8,1.1,7232072);for(let st=w+6;st<_-30;st+=12)for(let tt of[-1,1])a.box(880+tt*7.7,D+1.9,st,.18,3.8,.18,3816772),l.box(880+tt*7.7,D+3.9,st,.5,.5,.5,16767392);let W=Math.max(s.heightAt(880,w-16),1);e.add({x:880,z:w-8,hx:8,hz:8.2,y0:W-3,y1:W,y2:D,kind:"ramp",quiet:!0}),a.box(880,(W+D)/2-.45,w-8,16,.9,16.6,12160870,0,-Math.atan2(D-W,16)),p({x:880,z:_-17,yaw:0,len:30,halfW:6,h:6.5,curve:1.8,baseY:D,launch:!0,name:"Pier Launch"});let Y=910,X=n+70,at=27,K=D+at+5;e.add({x:Y,z:X,hx:22,hz:14,y0:D-1.2,y1:D,kind:"deck",quiet:!0}),a.box(Y,D-.6,X,44,1.2,28,12160870);for(let st of[-1,1])for(let tt of[-1,1])a.box(Y+tt*8,(D+K)/2,X+st*3,.9,Math.hypot(K-D,16)+1,.9,15920610,0,0,tt*Math.atan2(16,K-D));for(let st of[-1,1])e.add({x:Y+st*13,z:X,hx:3,hz:3.6,y0:D,y1:D+11,kind:"prop"});let rt=new ue,St=new Ge,it=new Ge;for(let st of[-1.6,1.6])St.addGeometry(new Ei(at,.35,5,40),St.matrix(0,0,st),15920610),St.addGeometry(new Ei(at*.55,.22,4,32),St.matrix(0,0,st),15920610);let ot=["#e5484d","#f2a33a","#3aa6c9","#f2ede2"];for(let st=0;st<16;st++){let tt=st/16*Math.PI*2;St.box(Math.cos(tt)*at/2,Math.sin(tt)*at/2,0,at,.2,.2,15920610,0,0,tt),it.box(Math.cos(tt)*at,Math.sin(tt)*at,0,.5,.5,3.6,st%2?16761466:16738906)}rt.add(St.build(null,!1),it.build(new Qt({vertexColors:!0}),!1)),rt.children.forEach(st=>{st.matrixAutoUpdate=!0});let ct=[];for(let st=0;st<16;st++){let tt=new mt(new Pe(2.6,2.4,2.2),new we({color:ot[st%4]}));rt.add(tt),ct.push(tt)}rt.position.set(Y,K,X),r.add(rt),f.push((st,tt)=>{rt.rotation.z=tt*.07;for(let Pt=0;Pt<16;Pt++){let Ct=Pt/16*Math.PI*2;ct[Pt].position.set(Math.cos(Ct)*at,Math.sin(Ct)*at-1.9,0),ct[Pt].rotation.z=-rt.rotation.z}}),d.push({x:Y,y:K,z:X,r:3.5,name:"wheel hub"})}{let C=m,w=ts(4096,128,($,U,nt)=>{$.fillStyle="#454850",$.fillRect(0,0,U,nt);for(let H=0;H<14e3;H++){let Q=62+Math.random()*30;$.fillStyle=`rgba(${Q},${Q+2},${Q+8},0.35)`,$.fillRect(Math.random()*U,Math.random()*nt,3,2)}$.fillStyle="#ece9df",$.fillRect(0,5,U,3),$.fillRect(0,nt-8,U,3);for(let H=240;H<U-700;H+=150)$.fillRect(H,nt/2-2,80,4);for(let H=0;H<8;H++)$.fillRect(40,14+H*13.2,120,7);for(let H=0;H<7;H++)$.fillStyle=H%2?"#ece9df":"#ff4a3a",$.save(),$.translate(U-640+H*84,nt/2),$.beginPath(),$.moveTo(0,-50),$.lineTo(34,0),$.lineTo(0,50),$.lineTo(26,50),$.lineTo(60,0),$.lineTo(26,-50),$.closePath(),$.fill(),$.restore()}),_=new mt(new Ke(ie.x1-ie.x0,ie.halfW*2).rotateX(-Math.PI/2),new we({map:w,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));_.position.set((ie.x0+ie.x1)/2,C,ie.z);let D=ts(256,256,$=>{$.fillStyle="#a9a69d",$.fillRect(0,0,256,256);for(let U=0;U<1500;U++){let nt=150+Math.random()*40;$.fillStyle=`rgba(${nt},${nt},${nt-8},0.25)`,$.fillRect(Math.random()*256,Math.random()*256,3,3)}$.strokeStyle="rgba(60,60,60,0.35)",$.lineWidth=2,$.strokeRect(0,0,256,256)},{repeat:!0}),W=new we({map:D,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),Y=oe.x0+28,X=oe.x1-20;for(let[$,U]of[[oe.z0+10,ie.z-ie.halfW],[ie.z+ie.halfW,oe.z1-10]]){let nt=new Ke(X-Y,U-$).rotateX(-Math.PI/2),H=nt.attributes.uv;for(let xt=0;xt<H.count;xt++)H.setXY(xt,H.getX(xt)*(X-Y)/24,H.getY(xt)*(U-$)/24);let Q=new mt(nt,W);Q.position.set((Y+X)/2,C,($+U)/2),Q.receiveShadow=!0,r.add(Q)}for(let[$,U]of[[Y,ie.x0],[ie.x1,X]]){let nt=new Ke(U-$,ie.halfW*2).rotateX(-Math.PI/2),H=nt.attributes.uv;for(let xt=0;xt<H.count;xt++)H.setXY(xt,H.getX(xt)*(U-$)/24,H.getY(xt)*ie.halfW/12);let Q=new mt(nt,W);Q.position.set(($+U)/2,C,ie.z),Q.receiveShadow=!0,r.add(Q)}_.receiveShadow=!0,r.add(_);for(let $=ie.x0+10;$<ie.x1;$+=28)for(let U of[-1,1])l.box($,C+.14,ie.z+U*(ie.halfW+1.2),.28,.28,.28,$>ie.x1-200?16734780:16771e3);let at=-1250,K=296,rt=76,St=17,it=15;for(let $ of[-1,1])e.add({x:at,z:K+$*(St+.7),hx:rt/2,hz:.9,y0:C-2,y1:C+it,kind:"building"}),a.box(at,C+it/2,K+$*(St+.7),rt,it,1.6,14275783),a.box(at,C+1.1,K+$*(St+1.56),rt,2.2,.12,13191226);e.add({x:at,z:K,hx:rt/2,hz:St+1.6,y0:C+it,y1:C+it+5.5,kind:"building"});let ot=new Ie(St+1.6,St+1.6,rt,14,1,!1,0,Math.PI);a.addGeometry(ot,a.matrix(at,C+it,K,.32,1,1,0,0,Math.PI/2),12568009);for(let $=-3;$<=3;$++)l.box(at+$*10,C+it-.3,K,1.6,.25,.5,16773584);for(let $ of[-1432,-1085])e.add({x:$,z:286,hx:30,hz:20,y0:C-2,y1:C+15,kind:"building"}),a.box($,C+7.5,286,60,15,40,14275783),a.box($,C+15.6,286,61,1.2,41,12568009),a.box($,C+5.5,306.1,42,11,.3,9278620),a.box($,C+12.6,306.15,60,1,.3,13191226);e.add({x:-985,z:282,hx:4,hz:4,y0:C-2,y1:C+30,kind:"building"}),e.add({x:-985,z:282,hx:6.5,hz:6.5,y0:C+30,y1:C+36.5,kind:"building"}),a.box(-985,C+15,282,8,30,8,15328472),a.box(-985,C+30.6,282,13.6,1.2,13.6,13191226),a.box(-985,C+33,282,12.4,3.6,12.4,8370633),a.box(-985,C+35.6,282,14,1.6,14,15328472),g.push([-985,C+39,282]),h.push({x:-915,z:300,y:C,r:9,name:"Proving Ground"});let ct=[13191226,3112858,15311419,5016666,15328472];for(let $=0;$<9;$++){let U=-820-$%3*22,nt=450+Math.floor($/3)*16,H=1+$*7%3;for(let Q=0;Q<H;Q++)a.box(U,C+1.45+Q*2.9,nt,12.2,2.9,2.6,ct[($+Q)%5]);e.add({x:U,z:nt,hx:6.1,hz:1.3,y0:C-1,y1:C+H*2.9,kind:"prop"})}let st=[15026253,15901498,3843785,15920610,8150212,3119738];for(let $ of[-1,1]){let U=ie.z+$*52;for(let nt=0;nt<5;nt++){a.box(-700,C+.6+nt*1.1,U+$*nt*1.6,70,1.2,1.7,nt%2?9278620:10988979);for(let H=0;H<34;H++)(H*7+nt*3)%5!==0&&a.box(-733+H*2+(nt*37+H*11)%7*.1,C+1.75+nt*1.1,U+$*nt*1.6,.55,1.1,.5,st[(H*5+nt*3)%6])}a.box(-700,C+9,U+$*9.5,72,.5,5,2434861,0,0,0);for(let nt of[-34,0,34])a.box(-700+nt,C+4.5,U+$*11.5,.6,9,.6,2434861);e.add({x:-700,z:U+$*4,hx:35,hz:5.6,y0:C-1,y1:C+6.4,kind:"building"});for(let nt=-760;nt<-600;nt+=8)l.box(nt,C+.08,ie.z+$*10.5,4,.12,.25,16734784)}for(let $=0;$<4;$++){let U=-1560+$*16,nt=262;a.cyl(U,C+9,nt,5,5,18,15921644,14),a.addGeometry(new An(5,14,6,0,Math.PI*2,0,Math.PI/2),a.matrix(U,C+18,nt),15921644),e.add({x:U,z:nt,hx:4.6,hz:4.6,y0:C-1,y1:C+22,kind:"building"})}for(let $=0;$<4;$++)a.box(-1575+$%2*6,C+20,298+Math.floor($/2)*6,.5,40,.5,13191226);for(let $=0;$<5;$++)a.box(-1572,C+6+$*8,301,7,.4,7,13191226);e.add({x:-1572,z:301,hx:3.6,hz:3.6,y0:C-1,y1:C+40,kind:"building"}),g.push([-1572,C+41,301]);let tt=-690;for(let $ of[-1,1])a.box(tt,C+9,ie.z+$*25,1.4,18,1.4,2434861),e.add({x:tt,z:ie.z+$*25,hx:.9,hz:.9,y0:C-1,y1:C+18,kind:"prop"});a.box(tt,C+17.2,ie.z,2,3.6,52,2434861),e.add({x:tt,z:ie.z,hx:1,hz:26,y0:C+15.4,y1:C+19,kind:"prop"});let Pt=ts(1024,96,($,U,nt)=>{$.fillStyle="#101115",$.fillRect(0,0,U,nt),$.fillStyle="#ff4a3a",$.fillRect(0,0,U,6),$.fillRect(0,nt-6,U,6),$.font=`italic 700 62px ${Dx}`,$.textAlign="center",$.textBaseline="middle",$.fillStyle="#fff3e0",$.fillText("FLIGHT  TEST   \u203A\u203A\u203A   FULL  THROTTLE   \u203A\u203A\u203A",U/2,nt/2+3)}),Ct=new mt(new Ke(40,3),new Qt({map:Pt}));Ct.position.set(tt-1.05,C+17.2,ie.z),Ct.rotation.y=-Math.PI/2,r.add(Ct);for(let[$,U]of[[-610,344],[-610,416],[-545,348],[-545,412]])a.box($,C+11,U,.7,22,.7,2434861),l.box($,C+22.4,U,1,2.2,4.4,16773584,U<ie.z?.5:-.5),e.add({x:$,z:U,hx:.6,hz:.6,y0:C-1,y1:C+23,kind:"prop"})}{let C=ri.x,w=ri.z,_=s.heightAt(C,w);for(let K=0;K<6;K++)a.cyl(C,_+3+K*6,w,3.6-K*.28-.28,3.6-K*.28,6,K%2?13191226:15920610,10);a.cyl(C,_+36.4,w,3.4,3.4,.8,3159100,10),l.addGeometry(new Ie(1.8,1.8,3,8),l.matrix(C,_+38.3,w),16773568),a.addGeometry(new Xn(2.6,2.6,8),a.matrix(C,_+41.1,w),13191226),e.add({x:C,z:w,hx:3.4,hz:3.4,y0:_-3,y1:_+42,kind:"building"});let D=new Ie(.6,9,150,10,1,!0).rotateX(Math.PI/2).translate(0,0,75),W=new Qt({color:16773568,transparent:!0,opacity:.1,blending:Be,depthWrite:!1,side:Ue,fog:!1}),Y=new ue,X=new mt(D,W),at=new mt(D,W);at.rotation.y=Math.PI,Y.add(X,at),Y.position.set(C,_+38.3,w),r.add(Y),f.push((K,rt,St)=>{Y.rotation.y=rt*.5,W.opacity=.03+.1*Math.min(St,1.5),Y.visible=St>.05}),h.push({x:C+22,z:w+4,y:s.heightAt(C+22,w+4),r:7,name:"Lighthouse Cape"})}{let C=ee.x-27,w=ee.z+6,_=ee.summitY;a.cyl(C,_+3,w,8,8.4,6,15328472,12),a.addGeometry(new An(8,12,6,0,Math.PI*2,0,Math.PI/2),a.matrix(C,_+6,w),D=>Math.abs(D.x)<1.2&&D.z>0?3159100:16249834),e.add({x:C,z:w,hx:7.4,hz:7.4,y0:_-3,y1:_+13,kind:"building"}),a.box(ee.x-6,_+14,ee.z-36,.5,28,.5,13191226),e.add({x:ee.x-6,z:ee.z-36,hx:.5,hz:.5,y0:_-2,y1:_+28,kind:"prop"}),g.push([ee.x-6,_+28.6,ee.z-36]),h.push({x:ee.x+2,z:ee.z-22,y:_,r:8,name:"Mount Ember Summit"})}{let C=new ue,w=new we({color:16249834}),_=new Pe(1.5,27,.4).translate(0,14.5,0);for(let W=0;W<7;W++){let Y=W*.9+.4,X=70+W*97%230,at=Ai.x+Math.cos(Y)*X,K=Ai.z+Math.sin(Y)*X,rt=s.heightAt(at,K);if(rt<4)continue;a.cyl(at,rt+31,K,1.1,2,62,16249834,8),e.add({x:at,z:K,hx:1.6,hz:1.6,y0:rt-3,y1:rt+62,kind:"prop"});let St=new ue,it=new mt(new Pe(2.4,2.4,6),w);for(let st=0;st<3;st++){let tt=new mt(_,w);tt.rotation.z=st/3*Math.PI*2,St.add(tt)}St.position.set(0,0,3.4);let ot=new ue;ot.add(it,St),ot.position.set(at,rt+62.5,K),ot.rotation.y=2.2,C.add(ot);let ct=.7+W%3*.18;f.push((st,tt)=>{St.rotation.z=tt*ct+W}),g.push([at,rt+64.5,K])}r.add(C);let D=s.heightAt(Ai.x,Ai.z);h.push({x:Ai.x,z:Ai.z,y:D,r:8,name:"Wind Farm"})}{let C=Te.x+30,w=Te.z-190,_=3.6;e.add({x:C,z:w,hx:30,hz:13,y0:-4,y1:_,kind:"deck",quiet:!0}),a.box(C,_/2-2,w,60,_+4,26,2829877),a.box(C,_+.02,w,58,.1,24,4014409);for(let D of[-1,1])for(let W of[-1,1])l.box(C+D*29,_+.5,w+W*12,.6,1,.6,16761466);h.push({x:C,z:w,y:_,r:10,name:"Bay Barge",bonus:1.5})}{let C=new Ge;C.box(0,.5,0,2.6,1.3,8,15920610),C.box(0,6.5,-.4,.2,11,.2,7232072),C.quad([0,1.8,-.7],[0,1.8,-4.4],[0,11.5,-.7],[0,11.5,-.7],16644334),C.quad([0,11.5,-.7],[0,1.8,-4.4],[0,1.8,-.7],[0,1.8,-.7],16644334),C.quad([0,1.8,-.1],[0,10.5,-.1],[0,1.8,3.6],[0,1.8,3.6],16747100),C.quad([0,1.8,3.6],[0,10.5,-.1],[0,1.8,-.1],[0,1.8,-.1],16747100);let w=C.build().geometry,_=new we({vertexColors:!0});[[Te.x-90,Te.z+120],[Te.x+120,Te.z+330],[Te.x-30,Te.z-40],[Te.x+60,Te.z+560],[Te.x-150,Te.z+640],[1240,1500],[300,1640],[-1500,1100],[1640,200]].forEach(([X,at],K)=>{if(s.heightAt(X,at)>-3)return;let rt=new mt(w,_);rt.position.set(X,0,at),rt.rotation.y=K*1.7,r.add(rt),f.push((St,it)=>{rt.position.y=Math.sin(it*.9+K)*.25,rt.rotation.z=Math.sin(it*.7+K*2)*.05})});let W=[["#e5484d","#fdf3df"],["#f2a33a","#2f7f9a"],["#7c5cc4","#fdf3df"],["#2f9a7a","#f2d23a"],["#e5484d","#f2a33a"]];[[Te.x+40,150,Te.z-380],[640,210,60],[260,130,1300],[-620,170,-260],[1340,160,-480]].forEach(([X,at,K],rt)=>{let St=new Ge,[it,ot]=W[rt],ct=new An(10,12,8);St.addGeometry(ct,St.matrix(0,0,0,1,1.15,1),Pt=>Math.floor((Math.atan2(Pt.z,Pt.x)/(Math.PI*2)+.5)*12)%2?it:ot),St.addGeometry(new Ie(5.2,1.6,6,12,1,!0),St.matrix(0,-12.4,0),Pt=>Math.floor((Math.atan2(Pt.z,Pt.x)/(Math.PI*2)+.5)*12)%2?it:ot),St.box(0,-17.4,0,2.2,1.8,2.2,9071178);let st=St.build(new we({vertexColors:!0,side:Ue}),!1);st.matrixAutoUpdate=!0,st.position.set(X,at,K),r.add(st);let tt={x:X,y:at,z:K,r:11.5,name:"balloon"};d.push(tt),f.push((Pt,Ct)=>{tt.y=at+Math.sin(Ct*.15+rt*2)*9,st.position.y=tt.y,st.rotation.y=Ct*.03+rt})})}let T=[];function R(C,w,_=8){let D=T.length;T.push({name:C,count:w.length,id:D}),w.forEach((W,Y)=>{let X=w[Math.max(0,Y-1)],at=w[Math.min(w.length-1,Y+1)],K=new I(at[0]-X[0],at[1]-X[1],at[2]-X[2]).normalize();u.push({pos:new I(W[0],W[1],W[2]),dir:K,r:_,chain:D,index:Y,cooldown:0,pulse:0})})}R("Liftoff Line",[[-440,50,380],[-310,56,384],[-170,61,394],[-30,66,410],[120,64,430],[280,62,452],[430,70,470]],9);let S=C=>Rt.x0+C*Rt.pitch,b=C=>Rt.z0+C*Rt.pitch,L=Rt.y;if(R("Downtown Slalom",[[S(3),L+38,b(0)+30],[S(3),L+50,b(2)],[S(3),L+62,b(4)],[S(3)+28,L+66,b(5)-12],[S(4)+20,L+70,b(5)],[S(6)-20,L+74,b(5)],[S(6),L+68,b(5)-30],[S(6),L+56,b(3)],[S(6),L+44,b(1)]],7.5),t.bayBridge){let C=t.bayBridge,w=Math.sin(C.yaw),_=Math.cos(C.yaw);R("Bridge Thread",[-.44,-.23,0,.23,.44].map(X=>[C.x+w*X*C.len,C.y+14+(Math.abs(X)<.3?1:0),C.z+_*X*C.len]),7.5);let D=e.boxes.filter(X=>X.kind==="pier"&&Math.hypot(X.x-C.x,X.z-C.z)<140).sort((X,at)=>Math.hypot(X.x-C.x,X.z-C.z)-Math.hypot(at.x-C.x,at.z-C.z)),W=D.length>1?(D[0].x+D[1].x)/2:C.x+w*22,Y=D.length>1?(D[0].z+D[1].z)/2:C.z+_*22;R("Under the Deck",[[W-_*150,6.5,Y+w*150],[W-_*60,6,Y+w*60],[W,6,Y],[W+_*70,6.5,Y-w*70],[W+_*160,9,Y-w*160]],5.6)}{let C=t.roads.find(_=>_.id==="summit"),w=[];for(let _=1;_<=9;_++){let D=C.pts[Math.floor(_/10*C.pts.length)];w.push([D.x,D.y+20,D.z])}w.push([ee.x,ee.summitY+34,ee.z]),R("Summit Climb",w,9)}{let C=[];for(let w=0;w<8;w++){let _=.25+w*.2,D=900;for(;D<2100&&s.heightAt(Math.cos(_)*D,Math.sin(_)*D)>-1.5;)D+=15;C.push([Math.cos(_)*(D+70),7.5,Math.sin(_)*(D+70)])}R("Coast Skimmer",C,7)}R("Hangar Run",[[-1420,oe.y+26,330],[-1330,oe.y+9.5,296],[-1250,oe.y+8,296],[-1170,oe.y+9.5,296],[-1060,oe.y+30,330]],6.2);{let C=[];for(let w=0;w<9;w++){let _=w/9*Math.PI*2;C.push([260+Math.cos(_)*430,420+Math.sin(_*2)*40,60+Math.sin(_)*430])}R("Cloud Nine",C,10)}let N=new Ei(1,.055,6,36),F=new Qt({color:16777215,fog:!1}),V=new wi(N,F,u.length);V.frustumCulled=!1;let J=new Ns(.72,1,36),G=new Qt({color:6744319,transparent:!0,opacity:.07,blending:Be,depthWrite:!1,side:Ue,fog:!1}),et=new wi(J,G,u.length);et.frustumCulled=!1;let z=new wi(Sr(6,.5,.04),new Qt({color:new ut(.55,.55,.55),fog:!1}),u.length);z.frustumCulled=!1,r.add(V,et,z);let lt=new pe,ht=0,gt=new Xt,Et=new pe,_t=new I,j=new ut,ft=new I(0,0,1),At=new ut(.55,3,3.9),dt=new ut(.1,.16,.22),Tt=new ut(5,4.4,2.8);function Ot(C){ht+=C;for(let w=0;w<u.length;w++){let _=u[w];_.cooldown>0&&(_.cooldown-=C),_.pulse=Math.max(0,_.pulse-C*1.6);let D=_.r*(1+_.pulse*.5);Et.setFromUnitVectors(ft,_.dir),gt.compose(_.pos,Et,_t.set(D,D,D)),V.setMatrixAt(w,gt),et.setMatrixAt(w,gt),j.copy(_.cooldown>0?dt:At).lerp(Tt,_.pulse),V.setColorAt(w,j),et.setColorAt(w,_.cooldown>0?dt:At),Et.multiply(lt.setFromAxisAngle(ft,ht*(w%2?1.1:-1.1)+w)),gt.compose(_.pos,Et,_t.multiplyScalar(.84)),z.setMatrixAt(w,gt),z.setColorAt(w,j)}z.instanceMatrix.needsUpdate=!0,z.instanceColor.needsUpdate=!0,V.instanceMatrix.needsUpdate=!0,et.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0,et.instanceColor.needsUpdate=!0}Ot(0);let Gt=ts(128,128,C=>{C.fillStyle="#f0702e",C.fillRect(0,0,128,128),C.fillStyle="#d95c20",C.fillRect(0,0,128,3),C.fillStyle="#fff3e0",Xc(C,64,70,.9)},{repeat:!0}),ae=ts(128,128,C=>{C.fillStyle="#17181d",C.fillRect(0,0,128,128),C.fillStyle="#24262d",C.fillRect(0,0,128,3),C.fillStyle="#7a2b25",Xc(C,64,70,.95)},{repeat:!0}),ne=ts(128,128,C=>{C.fillStyle="#000",C.fillRect(0,0,128,128),C.fillStyle="#ff5a40",Xc(C,64,70,.95)},{repeat:!0}),Me=new we({map:ae,emissiveMap:ne,emissive:16777215,emissiveIntensity:1.6});for(let[C,w]of[["kicker",new we({map:Gt})],["launch",Me]]){let _=x[C],D=new Vt;D.setAttribute("position",new wt(_.pos,3)),D.setAttribute("uv",new wt(_.uv,2)),D.setIndex(_.idx),D.computeVertexNormals();let W=new mt(D,w);W.castShadow=W.receiveShadow=!0,W.matrixAutoUpdate=!1,r.add(W)}let k=ts(256,256,C=>{C.clearRect(0,0,256,256),C.strokeStyle="#fff3e0",C.lineWidth=12,C.beginPath(),C.arc(128,128,116,0,7),C.stroke(),C.strokeStyle="#ff5a40",C.lineWidth=8,C.beginPath(),C.arc(128,128,74,0,7),C.stroke(),C.fillStyle="#fff3e0",C.beginPath(),C.arc(128,128,18,0,7),C.fill();for(let w=0;w<4;w++)C.save(),C.translate(128,128),C.rotate(w*Math.PI/2),C.fillRect(-5,-108,10,26),C.restore()}),li=new Qt({map:k,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8});for(let C of h){let w=new mt(new Hi(C.r,28).rotateX(-Math.PI/2),li);w.position.set(C.x,C.y+.06,C.z),w.matrixAutoUpdate=!1,w.updateMatrix(),w.renderOrder=2,r.add(w),C.done=!1}{let C=new Set;for(let ot of t.roads)for(let ct of ot.pts){let st=ot.halfW+16;for(let tt=Math.floor((ct.x-st)/16);tt<=Math.floor((ct.x+st)/16);tt++)for(let Pt=Math.floor((ct.z-st)/16);Pt<=Math.floor((ct.z+st)/16);Pt++)C.add(tt*4096+Pt)}let w=new Ge,_=new Ge,D=new Ge;for(let ot=0;ot<4;ot++)w.cyl(ot*.22,1+ot*1.9,0,.2-ot*.02,.26-ot*.02,2.1,ot%2?9071178:8084801,5,0,0,-.12);for(let ot=0;ot<7;ot++){let ct=ot/7*Math.PI*2;w.box(.75+Math.sin(ct)*1.5,7.6,Math.cos(ct)*1.5,.9,.1,3.4,ot%2?5216842:4163396,ct,.42)}_.cyl(0,.9,0,.22,.3,1.8,7032634,5),[[2.6,2,3,3107392],[4.3,1.5,2.6,3634503],[5.8,1,2.2,4162128]].forEach(([ot,ct,st,tt])=>_.addGeometry(new Xn(ct,st,6),_.matrix(0,ot,0),tt)),D.cyl(0,1.2,0,.22,.3,2.4,7032634,5),D.addGeometry(new Yn(2.3,0),D.matrix(0,4,0,1,.9,1),6266188),D.addGeometry(new Yn(1.5,0),D.matrix(1.2,3.3,.6),6990165);let W={palm:[],pine:[],round:[]},Y=new I;for(let ot=0;ot<26e3;ot++){let ct=(o()-.5)*3700,st=(o()-.5)*3700,tt=s.heightAt(ct,st);if(tt<2.4||tt>215||ct>Rt.x0-34&&ct<Rt.x1+34&&st>Rt.z0-34&&st<Rt.z1+34||ct>oe.x0-6&&ct<oe.x1+14&&st>oe.z0-6&&st<oe.z1+6||C.has(Math.floor(ct/16)*4096+Math.floor(st/16))||Math.hypot(ct-ri.x,st-ri.z)<34||Math.hypot(ct-880,st-n)<40||s.normalAt(ct,st,Y).y<.84)continue;let Pt=Kn(ct*.0045+4,st*.0045-2,3,91),Ct;if(tt<8.5){if(o()>.2)continue;Ct="palm"}else if(tt<42){if(o()>(Pt-.38)*3.2)continue;Ct=o()<.12?"palm":"round"}else{if(o()>(Pt-.3)*3.4)continue;Ct=tt>70||o()<.6?"pine":"round"}W[Ct].push([ct,tt,st])}for(let ot of i.parks)for(let ct=0;ct<22;ct++){let st=ot.x+(o()-.5)*2*(ot.r-2),tt=ot.z+(o()-.5)*2*(ot.r-2);Math.hypot(st-ot.x,tt-ot.z)<13||W.round.push([st,Rt.y+je,tt])}let X=new we({vertexColors:!0,flatShading:!0}),at=new Xt,K=new pe,rt=new Ce,St=new ut,it=[];for(let[ot,ct]of[["palm",w],["pine",_],["round",D]]){let st=W[ot],tt=new wi(ct.build().geometry,X,st.length);st.forEach(([Pt,Ct,$],U)=>{let nt=(ot==="palm"?.95:ot==="pine"?1.25:1.05)*(.75+o()*.7);K.setFromEuler(rt.set((o()-.5)*.08,o()*Math.PI*2,(o()-.5)*.08)),at.compose(Y.set(Pt,Ct-.15,$),K,new I(nt,nt*(.85+o()*.35),nt)),tt.setMatrixAt(U,at),tt.setColorAt(U,St.setScalar(.82+o()*.36))}),tt.userData.full=st.length,tt.castShadow=!0,tt.receiveShadow=!1,tt.frustumCulled=!1,r.add(tt),it.push(tt)}r.userData.trees=it}r.add(a.build());let Jt=new Qt({vertexColors:!0});r.add(l.build(Jt,!1));let Kt=new Vt;Kt.setAttribute("position",new wt(g.flat(),3));let zt=new pr({color:16726570,size:7,sizeAttenuation:!0,transparent:!0,blending:Be,depthWrite:!1,fog:!1}),me=new Ds(Kt,zt);return me.frustumCulled=!1,r.add(me),{group:r,ramps:c,pads:h,rings:u,chains:T,spheres:d,launchMat:Me,glowMat:Jt,update(C,w,_){for(let W of f)W(C,w,_);Ot(C);let D=Math.pow(Math.max(0,Math.sin(w*3.2)),6);zt.opacity=(.25+.75*D)*Math.min(1,.35+_),zt.color.setRGB(6,.8,.5),Jt.color.setScalar(.8+_*1.9),Me.emissiveIntensity=.9+_*1.6}}}var na=class{constructor(t,e){let i=960;for(;i<1900&&Ko(880,i)>.3;)i+=4;this.pierZ=i,this.roads=new Qo(Ko,i),this.terrain=new Jo(this.roads.roads),this.colliders=new jn,this.terrainMesh=this.terrain.buildMesh(),t.add(this.terrainMesh),t.add(this.roads.buildMeshes(this.terrain)),t.add(this.roads.buildBridges(this.colliders,this.terrain)),this.city=qu(this.colliders),t.add(this.city.group),this.props=Ku({terrain:this.terrain,roads:this.roads,colliders:this.colliders,city:this.city,pierZ:i}),t.add(this.props.group),this.guide=Ju(),t.add(this.guide.group),this.sky=new ea(t,e),this.water=Yu(this.terrain.buildHeightTexture()),t.add(this.water),this.rings=this.props.rings,this.chains=this.props.chains,this.pads=this.props.pads,this.ramps=this.props.ramps,this.spheres=this.props.spheres,this.time=0}ground(t,e,i,n){let r=this.terrain.heightAt(t,i),o=r,a;if(t>Rt.x0&&t<Rt.x1&&i>Rt.z0&&i<Rt.z1||t>oe.x0+28&&t<oe.x1-20&&i>oe.z0+10&&i<oe.z1-10)o+=je,a="road";else{let c=this.roads.surfaceAt(t,i);o+=je*c,a=c>.5?"road":r<3.6?"sand":"grass"}n.box=null;let l=this.colliders.near(t,i);if(l)for(let c=0;c<l.length;c++){let h=l[c],u=t-h.x,d=i-h.z,f=u*h.c-d*h.s;if(f<-h.hx||f>h.hx)continue;let g=u*h.s+d*h.c;if(g<-h.hz||g>h.hz)continue;let x=jn.topAt(h,g);x<=e+.55&&x>o&&(o=x,n.box=h,a="road")}return n.h=o,n.surf=a,n.water=o<0,n}update(t,e,i){this.time+=t;let n=this.sky,r=n.v;n.update(t,e,i);let o=this.water.material.uniforms;o.uTime.value=this.time,o.uSunDir.value.copy(r.sunDir),o.uSunColor.value.copy(r.sun).multiplyScalar(Math.min(1.2,r.sunI/2.6)),o.uDeep.value.copy(r.deep),o.uShallow.value.copy(r.shallow),o.uFoam.value.copy(r.foam),o.uHorizon.value.copy(r.horizon),o.uZenith.value.copy(r.zenith),o.uFogColor.value.copy(r.fog),o.uFogDensity.value=r.fogD,this.city.mats.A.emissiveIntensity=r.windows,this.city.mats.B.emissiveIntensity=r.windows*.8,this.props.update(t,this.time,r.lamps),this.guide.update(t,this.guideFocus||null,this.guideDim||0)}};var fe={frontZ:1.38,rearZ:-1.34,wheelbase:2.72,trackHalf:.85,rFront:.345,rRear:.362,wFront:.265,wRear:.315,height:1.16,length:4.42},_i=[{id:"white",name:"Aero White",color:"#cfd1ce",metal:.12,rough:.36,coat:.7,cost:0},{id:"cherry",name:"Cherry Red",color:"#a20d1c",metal:.55,rough:.3,coat:1,cost:1500},{id:"black",name:"Solid Black",color:"#0b0b0d",metal:.4,rough:.22,coat:1,cost:4e3},{id:"silver",name:"Midnight Silver",color:"#42464c",metal:.8,rough:.3,coat:1,cost:8e3},{id:"blue",name:"Deep Blue",color:"#0f2f72",metal:.65,rough:.28,coat:1,cost:13e3},{id:"quick",name:"Quicksilver",color:"#9a9fa6",metal:.95,rough:.2,coat:1,cost:2e4},{id:"stealth",name:"Stealth Grey",color:"#55585d",metal:.3,rough:.5,coat:.4,cost:28e3},{id:"ultra",name:"Ultra Red",color:"#d3101c",metal:.35,rough:.26,coat:1,cost:38e3},{id:"orange",name:"Sunset Orange",color:"#ee5a12",metal:.5,rough:.3,coat:1,cost:5e4},{id:"teal",name:"Aurora Teal",color:"#0f9d93",metal:.7,rough:.26,coat:1,cost:65e3},{id:"violet",name:"Ultraviolet",color:"#4a22b8",metal:.7,rough:.26,coat:1,cost:82e3},{id:"gold",name:"Solar Gold",color:"#c9961c",metal:.95,rough:.24,coat:1,cost:1e5},{id:"matte",name:"Matte Black",color:"#141416",metal:.2,rough:.78,coat:0,cost:125e3},{id:"chrome",name:"Liquid Chrome",color:"#c9ccd2",metal:1,rough:.06,coat:1,cost:15e4}],Ri={wb:Qe([[-2.2,.62],[-1.34,.8],[0,.84],[1.38,.8],[1.9,.7],[2.22,.46]]),yb:Qe([[-2.2,.36],[-1.9,.28],[-1.34,.17],[0,.15],[1.38,.15],[2,.16],[2.22,.2]]),ws:Qe([[-2.2,.8],[-1.34,.965],[-.6,.945],[.6,.935],[1.38,.945],[1.9,.85],[2.22,.54]]),ys:Qe([[-2.2,.42],[-1.34,.29],[0,.26],[1.38,.26],[2,.25],[2.22,.27]]),wm:Qe([[-2.2,.865],[-1.8,.985],[-1.34,1.03],[-.75,.99],[0,.93],[.75,.945],[1.38,.995],[1.9,.89],[2.22,.58]]),ym:Qe([[-2.2,.63],[-1.34,.66],[-.75,.6],[0,.52],[.75,.5],[1.38,.56],[1.9,.46],[2.22,.36]]),wsh:Qe([[-2.2,.8],[-1.34,.935],[-.75,.92],[0,.9],[.75,.895],[1.38,.885],[1.9,.76],[2.22,.46]]),ysh:Qe([[-2.2,.8],[-1.8,.89],[-1.34,.925],[-.75,.9],[0,.855],[.75,.815],[1.38,.805],[1.9,.63],[2.22,.44]]),wg:Qe([[-2.2,.7],[-1.34,.75],[-.75,.8],[0,.815],[.75,.8],[.95,.78],[1.38,.68],[1.9,.55],[2.22,.33]]),yg:Qe([[-2.2,.855],[-1.45,.965],[-.75,.915],[0,.875],[.75,.83],[.95,.815],[1.38,.735],[1.9,.61],[2.22,.44]]),wr:Qe([[-2.2,.42],[-1.45,.5],[-.9,.58],[-.05,.63],[.3,.6],[.95,.52],[1.38,.42],[1.9,.33],[2.22,.2]])},ju=s=>t=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0])return Bt(s[e-1][1],s[e][1],(t-s[e-1][0])/(s[e][0]-s[e-1][0]));return s[s.length-1][1]},Ux=Qe([[-1.45,.985],[-.9,1.085],[-.35,1.15],[-.05,1.16],[.3,1.13]]),Nx=Qe([[.95,.835],[1.4,.74],[1.85,.62],[2.1,.52],[2.22,.44]]),Fx=ju([[-2.2,.868],[-2.1,.898],[-1.9,.908],[-1.45,.985]]),zx=s=>s<-1.45?Fx(s):s<=.3?Ux(s):s<.95?Bt(1.13,.835,(s-.3)/.65):Nx(s),Bx=Qe([[-1.45,.975],[-.9,1.06],[-.35,1.115],[-.05,1.125],[.3,1.1]]),Ox=Qe([[.95,.83],[1.38,.732],[1.85,.614],[2.1,.518],[2.22,.44]]),kx=ju([[-2.2,.864],[-2.1,.892],[-1.9,.902],[-1.45,.975]]),Hx=s=>s<-1.45?kx(s):s<=.3?Bx(s):s<.95?Bt(1.1,.83,(s-.3)/.65):Ox(s),Zc=-1.45,$c=.95,$i=-2.2,wr=2.22,tf=[{z:fe.frontZ,r:fe.rFront,a:fe.rFront+.052},{z:fe.rearZ,r:fe.rRear,a:fe.rRear+.052}];function qc(s){let t=[[0,Ri.yb(s)],[Ri.wb(s),Ri.yb(s)],[Ri.ws(s),Ri.ys(s)],[Ri.wm(s),Ri.ym(s)],[Ri.wsh(s),Ri.ysh(s)],[Ri.wg(s),Ri.yg(s)],[Ri.wr(s),Hx(s)],[0,zx(s)]];for(let e of tf){let i=s-e.z;if(Math.abs(i)<e.a){let n=e.r+Math.sqrt(e.a*e.a-i*i);t[1][0]=.6,t[1][1]=Math.max(t[1][1],Math.min(n,t[5][1]-.09)),t[2][1]=Math.max(t[2][1],n),t[2][0]=Math.max(t[2][0],t[3][0]-.012),t[3][1]=Math.max(t[3][1],n+.03),t[4][1]=Math.max(t[4][1],t[3][1]+.03)}}return t}function ra(s,t,e){let i=Math.min(6,Math.floor(t)),n=t-i;if(i<2)return e[0]=Bt(s[i][0],s[i+1][0],n),e[1]=Bt(s[i][1],s[i+1][1],n),e;let r=i===2?s[2]:s[i-1],o=s[i],a=s[i+1],l=i===6?[-s[6][0],s[6][1]]:s[i+2],c=n*n,h=c*n;for(let u=0;u<2;u++)e[u]=.5*(2*o[u]+(a[u]-r[u])*n+(2*r[u]-5*o[u]+4*a[u]-l[u])*c+(-r[u]+3*o[u]-3*a[u]+l[u])*h);return e}var Qu=(s,t,e)=>Math.max(0,1-Math.abs(s-t)/e);function oa(s,t,e){let i=It((t-5)/2,0,1),n=i*(2-i),r=.13*n*Qu(s,$c,.55)-.15*n*Qu(s,Zc,.6);return r-=.4*jt(1.45,wr,s)*e*e,r+=.17*jt(-1.7,$i,s)*e*e,s+r}var oi=[0,0];function Vx(s,t,e,i=0,n=new I){let r=qc(s);ra(r,t,oi);let o=oi[0],a=oi[1];if(n.set(o*e,a,oa(s,t,o)),i){ra(r,Math.min(7,t+.02),oi);let c=new I(oi[0]*e-n.x,oi[1]-a,oa(s,t+.02,oi[0])-n.z);ra(qc(s+.02),t,oi);let h=new I(oi[0]*e-n.x,oi[1]-a,oa(s+.02,t,oi[0])-n.z),u=c.cross(h).normalize();(u.x*e<0&&Math.abs(u.x)>.2||Math.abs(u.x)<=.2&&u.y<0)&&u.negate(),n.addScaledVector(u,i)}return n}function Gx(){let s=[];for(let i=$i;i<wr-.03;i+=.105)s.push(i);s.push(wr,wr-.045,$i+.04);let t=[Zc,$c,.3];for(let i of tf)for(let n=0;n<=12;n++)t.push(i.z+i.a*Math.cos(n/12*Math.PI)*.9999);let e=s.filter(i=>!t.some(n=>Math.abs(n-i)<.04)).concat(t);return e.sort((i,n)=>i-n),e}var es=[0,1,2,2.5,3,3.5,4,4.5,5,5.34,5.67,6,6.34,6.67,7];function Wx(){let s=Gx(),t=es.length,e=[];for(let u=0;u<s.length;u++){let d=qc(s[u]),f=[];for(let g=0;g<t;g++)ra(d,es[g],oi),f.push([oi[0],oi[1],oa(s[u],es[g],oi[0])]);e.push(f)}let i={paint:{pos:[],idx:[],map:new Map},glass:{pos:[],idx:[],map:new Map},trim:{pos:[],idx:[],map:new Map}},n=(u,d,f,g)=>{let x=e[d][f],p=d*1e3+f*4+(x[0]<1e-5?0:g+2),m=u.map.get(p);return m===void 0&&(m=u.pos.length/3,u.pos.push(x[0]*g,x[1],x[2]),u.map.set(p,m)),m},r=(u,d,f,g)=>(u.pos.push(d,f,g),u.pos.length/3-1),o=(u,d,f,g,x)=>{f===g||g===x||f===x||(d?u.idx.push(f,x,g):u.idx.push(f,g,x))},a=Math.floor(s.length/2),l=3,c=(u,d,f,g)=>{let x=(d[0]-u[0])*g,p=d[1]-u[1],m=d[2]-u[2],y=(f[0]-u[0])*g,M=f[1]-u[1],v=f[2]-u[2];return[p*v-m*M,m*y-x*v,x*M-p*y]};for(let u of[1,-1]){let d=c(e[a][l],e[a+1][l],e[a+1][l+1],u)[0]*u<0;for(let f=0;f<s.length-1;f++){let g=(s[f]+s[f+1])/2;for(let x=0;x<t-1;x++){let p=(es[x]+es[x+1])/2,m=p<2?i.trim:p<5?i.paint:g>Zc&&g<$c?i.glass:i.paint,y=n(m,f,x,u),M=n(m,f+1,x,u),v=n(m,f+1,x+1,u),P=n(m,f,x+1,u);o(m,d,y,M,v),o(m,d,y,v,P)}}for(let[f,g,x]of[[0,-.03,3],[s.length-1,.035,2]]){let p=e[f],m=(p[0][1]+p[t-1][1])/2+(f===0?.02:-.03),y=[0,m,p[0][2]+g],M=c(p[l],p[l+1],y,u)[2]*g<0;for(let v=0;v<t-1;v++){let P=(es[v]+es[v+1])/2<x?i.trim:i.paint,E=`cap${f}`;P[E]===void 0&&(P[E]=r(P,y[0],y[1],y[2])),o(P,M,n(P,f,v,u),n(P,f,v+1,u),P[E])}}}let h={};for(let u in i){let d=new Vt;d.setAttribute("position",new wt(i[u].pos,3)),d.setIndex(i[u].idx),d.computeVertexNormals(),h[u]=d}return h}function sa(s,t,e,i,n,r=.006,o=2){let a=[],l=[],c=o+1;for(let u of[1,-1]){let d=a.length/3;for(let f=0;f<=n;f++){let g=f/n,x=Bt(s,t,g),[p,m]=typeof e=="function"?[e(g),i(g)]:[e,i];for(let y=0;y<c;y++){let M=Vx(x,Bt(p,m,y/o),u,r);a.push(M.x,M.y,M.z)}if(f>0){let y=d+(f-1)*c,M=d+f*c;for(let v=0;v<o;v++)u>0?l.push(y+v,M+v,y+v+1,y+v+1,M+v,M+v+1):l.push(y+v,y+v+1,M+v,y+v+1,M+v+1,M+v)}}}let h=new Vt;return h.setAttribute("position",new wt(a,3)),h.setIndex(l),h.computeVertexNormals(),h}function Xx(s,t,e){let i=new ue,n=[[s-.1,-t/2],[s-.03,-t/2],[s,-t/2+.035],[s,t/2-.035],[s-.03,t/2],[s-.1,t/2]],r=new mt(new Ao(n.map(m=>new yt(m[0],m[1])),22).rotateZ(-Math.PI/2),e.tire),o=s-.095,a=t/2-.035,l=new Ge,c=new Ge,h=new Xt,u=new Xt;l.addGeometry(new Hi(o,22).rotateY(Math.PI/2),h.makeTranslation(t*.18,0,0),16777215),l.addGeometry(new Ie(.062,.07,.05,12).rotateZ(-Math.PI/2),h.makeTranslation(a,0,0),16777215);let d=new mt(new Ie(o*.78,o*.78,.02,20).rotateZ(Math.PI/2).translate(t*.2,0,0),e.brake),f=9,g=new Pe(.022,o-.05,.016).translate(0,(o-.05)/2+.05,0);for(let m=0;m<f;m++)for(let y of[-.085,.085])c.addGeometry(g,h.makeTranslation(a,0,0).multiply(u.makeRotationX(m/f*Math.PI*2+y)),16777215);c.addGeometry(new Ei(o-.012,.014,5,26).rotateY(Math.PI/2),h.makeTranslation(a,0,0),16777215);let x=l.build(e.rimDark,!1),p=c.build(e.rim,!1);return x.matrixAutoUpdate=p.matrixAutoUpdate=!0,i.add(r,x,d,p),r.castShadow=!0,i}var aa=class{constructor(){this.root=new ue,this.body=new ue,this.root.add(this.body);let t=this.mats={paint:new mr({color:13619662,metalness:.12,roughness:.3,clearcoat:1,clearcoatRoughness:.13,envMapIntensity:1.1}),glass:new mr({color:1314827,metalness:.2,roughness:.32,clearcoat:.6,clearcoatRoughness:.28,sheen:.6,sheenColor:9069616,sheenRoughness:.4}),titan:new gi({color:9277847,metalness:.92,roughness:.34}),trim:new gi({color:789775,metalness:.3,roughness:.55}),tire:new gi({color:1250327,roughness:.9,metalness:0}),rim:new gi({color:10133157,metalness:.95,roughness:.3}),rimDark:new gi({color:1513499,metalness:.7,roughness:.5}),brake:new gi({color:4869458,metalness:.8,roughness:.45}),head:new Qt({color:16777215}),tail:new Qt({color:16719892}),nozzle:new Qt({color:0})};t.head.color.setRGB(3.4,3.5,3.8),t.tail.color.setRGB(3.4,.07,.05);let e=Wx();for(let o of["paint","glass","trim"]){let a=new mt(e[o],t[o]);a.castShadow=!0,this.body.add(a)}let i=(o,a,l=!1)=>{let c=new mt(o,a);return c.castShadow=l,this.body.add(c),c};{let o=[],a=[];for(let d=0;d<=16;d++){let f=Bt(-.5,.5,d/16),g=Bt(wr+.047,2.116,Math.abs(f)/.55);if(o.push(f,.298,g,f,.318,g),d>0){let x=(d-1)*2,p=d*2;a.push(x,p,x+1,p,p+1,x+1)}}let u=new Vt;u.setAttribute("position",new wt(o,3)),u.setIndex(a),i(u,t.head)}i(sa($i+.012,$i+.3,o=>Bt(3.5,3.6,o),o=>Bt(3.66,3.66,o),4),t.tail);{let o=[],a=[];for(let d=0;d<=14;d++){let f=Bt(-.8,.8,d/14),g=$i+.17*f*f-.034+Math.abs(f)*.012;if(o.push(f,.748,g,f,.766,g),d>0){let x=(d-1)*2,p=d*2;a.push(x,x+1,p,p,x+1,p+1)}}let u=new Vt;u.setAttribute("position",new wt(o,3)),u.setIndex(a),i(u,t.tail)}i(sa(.74,.95,o=>Bt(2.5,2.9,o),o=>Bt(3.5,3.25,o),3),t.trim),i(sa(.6,.612,2,4.95,1,.004,10),t.trim),i(sa(-.66,-.648,2,4.95,1,.004,10),t.trim);for(let o of[-.42,-.14,.14,.42])i(new Pe(.02,.13,.3).translate(o,.43,$i+.14),t.trim);for(let o of[1,-1])i(new Pe(.14,.02,.04).translate(o*.92,.868,.6),t.trim),i(new Pe(.03,.055,.13).translate(o*1,.878,.59),t.titan,!0).geometry.computeVertexNormals();this.nozzles=[];for(let o of[-.26,0,.26])i(new Ie(.062,.075,.12,10).rotateX(Math.PI/2).translate(o,.56,$i+.03),t.trim),i(new Hi(.052,10).rotateY(Math.PI).translate(o,.56,$i-.032),t.nozzle),this.nozzles.push(new I(o,.56,$i-.04));this.wheels=[];let n=[{z:fe.frontZ,s:1,r:fe.rFront,w:fe.wFront,front:!0},{z:fe.frontZ,s:-1,r:fe.rFront,w:fe.wFront,front:!0},{z:fe.rearZ,s:1,r:fe.rRear,w:fe.wRear},{z:fe.rearZ,s:-1,r:fe.rRear,w:fe.wRear}],r=this.jetMat=new Qt({color:new ut(1.2,2.6,3.4),transparent:!0,opacity:0,blending:Be,depthWrite:!1,side:Ue});for(let o of n){let a=new ue,l=new ue,c=new ue,h=o.s*(fe.trackHalf+(o.front?0:.012)-o.w/2+.13);a.position.set(h,o.r,o.z);let u=Xx(o.r,o.w,t);o.s<0&&(u.rotation.y=Math.PI),c.add(u),l.add(c),a.add(l);let d=new mt(new Hi(o.r*.82,18).rotateY(o.s>0?Math.PI/2:-Math.PI/2),r);d.position.x=o.s*(o.w/2+.012),a.add(d),this.body.add(a),this.wheels.push({pivot:a,steer:l,spin:c,home:a.position.clone(),...o})}this.fold=0,this.spinAngle=0,this.setPaint(_i[0])}setPaint(t){let e=this.mats.paint;e.color.set(t.color),e.metalness=t.metal,e.roughness=Math.max(t.rough,.14),e.clearcoat=t.coat,this.paint=t}pose(t,e,i,n){this.fold=t,this.spinAngle+=i;let r=t*t*(3-2*t);for(let o of this.wheels)o.pivot.rotation.z=-o.s*r*Math.PI/2,o.pivot.position.set(Bt(o.home.x,o.s*.74,r),Bt(o.home.y,.31,r),o.home.z),o.steer.rotation.y=o.front?e*(1-r):0,o.spin.rotation.x=this.spinAngle*(1-r)+r*this.spinAngle*.2;this.jetMat.opacity=r*n}setLights(t,e){let i=this.mats.tail.color,n=1+t*1.6+e*.3;i.setRGB(3.4*n,.07*n,.05*n);let r=3.2+e*3;this.mats.head.color.setRGB(r,r*1.03,r*1.12)}setThrust(t){this.mats.nozzle.color.setRGB(3*t,5*t,7*t)}};var Yx=66,qx=92,ca=100,Zx=15,ef=23,$x=15,nf=720,Jc=2500,la=1,sf=1.15,Kc=1.15,Ci=new Ce(0,0,0,"YXZ"),rf=new pe,Er=new I,De={h:0,surf:"road",box:null,water:!1},Jx={h:0,surf:"road",box:null,water:!1},ha=class{constructor(t){this.world=t,this.pos=new I,this.prev=new I,this.vel=new I,this.quat=new pe,this.angVel=new I,this.events=[],this.near=[],this.safe={x:Le.x,z:Le.z,yaw:Le.yaw},this.time=0,this.reset(Le.x,Le.z,Le.yaw)}reset(t,e,i){this.world.ground(t,5e3,e,De),this.pos.set(t,Math.max(De.h,0),e),this.prev.copy(this.pos),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.yaw=i,this.pitch=0,this.roll=0,this.yawRate=0,this.mode="drive",this.fold=0,this.foldTarget=0,this.steer=0,this.speed=0,this.slip=0,this.boost=1,this.boosting=!1,this.braking=!1,this.thrust=0,this.lift=0,this.offGround=0,this.airTime=0,this.flyTime=0,this.launchAssist=0,this.recover=0,this.rollTrick=0,this.rollDir=0,this.pitchLock=!1,this.launching=!1,this.lastThrottle=0,this.surf="road",this.groundY=this.pos.y,this.alt=0,this.overWater=!1,this.lastRamp=null,this.lastRampT=-9,this.underT=-9,this.underAward=-9,this.hitT=-9,this.safeT=0,this.syncQuat()}syncQuat(){Ci.set(this.pitch,this.yaw,this.roll+this.rollTrick,"YXZ"),this.quat.setFromEuler(Ci)}eulerFromQuat(){Ci.setFromQuaternion(this.quat,"YXZ"),this.yaw=Ci.y,this.pitch=Ci.x,this.roll=Ci.z}emit(t,e){this.events.push(Object.assign({type:t},e))}engageFlight(t=!1){if(this.mode==="fly")return;let e=this.mode==="drive";this.mode==="air"&&this.eulerFromQuat(),this.mode="fly",this.launching=!1,this.foldTarget=1,this.flyTime=0,this.rollTrick=0,this.launchAssist=t?1.5:0,e&&(this.pos.y+=.25,this.vel.y=Math.max(this.vel.y,7.5),this.launchAssist=.45),this.emit("engage",{fromRamp:t,wasGround:e})}dropFlight(){this.mode==="fly"&&(this.syncQuat(),this.mode="air",this.foldTarget=0,this.airTime=0,this.angVel.set(0,0,0),this.emit("disengage",{}))}step(t,e){if(this.time+=t,this.prev.copy(this.pos),this.mode==="sunk"){this.vel.multiplyScalar(1-3*t),this.pos.addScaledVector(this.vel,t),this.thrust=this.lift=0,this.speed=0;return}e.fly&&(this.mode==="fly"?this.dropFlight():this.engageFlight(!1)),this.mode==="drive"?this.stepDrive(t,e):this.mode==="air"?this.stepAir(t,e):this.stepFly(t,e),this.collide(t),this.fold=It(this.fold+Math.sign(this.foldTarget-this.fold)*t/.42,0,1),Math.abs(this.fold-this.foldTarget)<t/.42&&(this.fold=this.foldTarget);let i=Math.hypot(this.pos.x,this.pos.z);if(i>Jc){let n=Math.atan2(-this.pos.x,-this.pos.z);this.mode!=="air"?this.yaw=Cn(this.yaw,n,jt(Jc,Jc+500,i)*1.6,t):(this.vel.x-=this.pos.x/i*30*t,this.vel.z-=this.pos.z/i*30*t),this.time-(this.edgeT||-9)>6&&(this.edgeT=this.time,this.emit("edge",{}))}this.mode!=="air"&&this.syncQuat(),this.speed=Math.hypot(this.vel.x,this.vel.z)}stepDrive(t,e){let i=this.world,n=this.pos;this.lastThrottle=e.throttle,this.steer=te(this.steer,-e.steer,8,t);let r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this.vel.x*r+this.vel.z*o,l=this.offGround<.05,c=this.surf==="road"?1:this.surf==="grass"?.82:.66,h=e.shift&&Math.abs(a)>4,u=Bt(.6,.075,jt(0,72,Math.abs(a))),d=a*Math.tan(this.steer*u)/fe.wheelbase,f=(h?31:25)*c/Math.max(Math.abs(a),7);d=It(d,-f,f)*(h?1.5:1),l&&(this.yaw+=d*t),this.yawRate=d,r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this.vel.x*r+this.vel.z*o;let g=this.vel.x*o-this.vel.z*r,x=fe.trackHalf,p=(V,J)=>i.ground(n.x+V*o+J*r,n.y,n.z-V*r+J*o,Jx).h,m=p(x,fe.frontZ),y=p(-x,fe.frontZ),M=p(x,fe.rearZ),v=p(-x,fe.rearZ);i.ground(n.x,n.y,n.z,De);let P=(m+y)/2,E=(M+v)/2,T=Math.max(De.h,(P+E)/2);this.surf=De.surf,this.groundY=T,this.alt=n.y-T,this.overWater=De.water,De.box&&De.box.kind==="ramp"&&(this.lastRamp=De.box,this.lastRampT=this.time);let R=0;Math.abs(P-E)<1.6&&(R=(P-E)/fe.wheelbase,this.pitch=te(this.pitch,-Math.atan(R),l?14:3,t)),Math.abs(m+M-y-v)<2.4&&(this.roll=te(this.roll,Math.atan((m+M-y-v)/(4*x)),l?12:3,t)),this.boosting=e.boost&&this.boost>.01&&e.throttle>=0&&a>-1;let S=this.boosting?qx:Yx,b=0;if(this.braking=!1,this.boosting||e.throttle>0){let V=this.boosting?1:e.throttle;a<0?b=30*V:b=(this.boosting?27:16)*V*It(1-Math.pow(a/S,2.2),-.4,1)}else e.throttle<0&&(a>.6?(b=36*e.throttle,this.braking=!0):b=10*e.throttle*It(1+a/$x,0,1));let L=this.surf==="road"?.35:this.surf==="grass"?2:3.4;b-=Math.sign(a)*L*Math.min(1,Math.abs(a)/2)+5e-4*a*Math.abs(a),h&&(b-=Math.sign(a)*5),!this.boosting&&e.throttle===0&&Math.abs(a)<.4&&(a=0),b-=ef*.75*R/Math.sqrt(1+R*R),this.accel=l&&(this.boosting||e.throttle>0)?Math.max(0,b):0,l&&(a+=b*t*(this.surf==="road"?1:this.boosting?.9:.86),g*=Math.exp(-(h?2.3:11.5)*c*t)),this.slip=Math.abs(g),this.boost=It(this.boost+(this.boosting?-.3:.085)*t,0,1),this.thrust=te(this.thrust,this.boosting?1:0,8,t),this.lift=te(this.lift,0,6,t),this.vel.x=r*a+o*g,this.vel.z=o*a-r*g,n.x+=this.vel.x*t,n.z+=this.vel.z*t;let N=this.vel.y-ef*t,F=n.y+N*t;if(F>T+.015?(n.y=F,this.vel.y=N,this.offGround+=t,this.offGround>.085&&F-T>.4&&this.takeOff()):(this.vel.y=It((T-n.y)/t,-30,45),this.offGround>.2&&this.emit("thump",{impact:-N}),n.y=T,this.offGround=0),this.overWater&&n.y<-.55)return this.sink();l&&!this.overWater&&T>1.5&&this.time-this.safeT>1.2&&Math.abs(a)>2&&this.time-this.hitT>1.5&&(this.safeT=this.time,this.safe.x=n.x-r*4,this.safe.z=n.z-o*4,this.safe.yaw=this.yaw)}sink(){this.mode="sunk",this.vel.y=Math.max(this.vel.y,-3),this.boosting=this.braking=!1,this.emit("splash",{})}takeOff(){this.mode="air",this.airTime=this.offGround,this.pitchLock=this.lastThrottle>0,this.angVel.set(0,this.yawRate*.35,0),this.syncQuat();let t=this.time-this.lastRampT<.25?this.lastRamp:null,e=Math.hypot(this.vel.x,this.vel.z);this.emit("jump",{ramp:t,speed:e}),t&&t.launch&&e>36&&this.emit("launch",{ramp:t,speed:e})}stepAir(t,e){let i=this.pos;if(this.airTime+=t,this.steer=te(this.steer,0,6,t),this.thrust=te(this.thrust,0,8,t),this.boosting=!1,this.braking=!1,e.boostPressed&&this.airTime>.12&&this.recover<=0)return this.engageFlight(!1);this.vel.y-=Zx*t;let n=1-.035*t;this.vel.x*=n,this.vel.z*=n,i.addScaledVector(this.vel,t),this.pitchLock&&e.throttle<=0&&(this.pitchLock=!1);let r=this.launching?0:1,o=this.pitchLock?0:e.throttle*r,a=o!==0||e.steer*r!==0||e.roll*r!==0;this.angVel.x=te(this.angVel.x,o*4.4,7,t),this.angVel.y=te(this.angVel.y,-e.steer*3.8*r,7,t),this.angVel.z=te(this.angVel.z,e.roll*6*r,7,t);let l=this.angVel,c=l.length();if(c>1e-4&&(rf.setFromAxisAngle(Er.copy(l).divideScalar(c),c*t),this.quat.multiply(rf).normalize()),this.recover>0||!a&&this.airTime>.3){Ci.setFromQuaternion(this.quat,"YXZ");let h=this.recover>0?9:1.7;Ci.x=te(Ci.x,It(-Math.atan2(this.vel.y,Math.max(8,Math.hypot(this.vel.x,this.vel.z)))*.35,-.3,.3),h,t),Ci.z=te(Ci.z,0,h,t),this.quat.setFromEuler(Ci),this.recover-=t}if(this.world.ground(i.x,i.y+.2,i.z,De),this.groundY=De.h,this.overWater=De.water,this.alt=i.y-Math.max(De.h,0),De.water&&i.y<-.5)return this.sink();if(i.y<=De.h){let h=-this.vel.y,u=Er.set(0,1,0).applyQuaternion(this.quat).y;i.y=De.h,u>.5?(this.eulerFromQuat(),this.mode="drive",this.launching=!1,this.offGround=0,this.vel.y=0,this.surf=De.surf,this.emit("land",{impact:h,airTime:this.airTime,clean:u>.9,fromFlight:!1,x:i.x,y:i.y,z:i.z})):(this.vel.y=It(h*.35,3.5,7),this.vel.x*=.6,this.vel.z*=.6,this.recover=.5,this.airTime=0,this.angVel.set(0,0,0),this.hitT=this.time,this.emit("crash",{impact:Math.max(h,8),flipped:!0}))}}stepFly(t,e){let i=this.pos,n=this.world;this.flyTime+=t,this.steer=te(this.steer,-e.steer,6,t);let r=Math.hypot(this.vel.x,this.vel.z),o=It(r/ca,0,1);this.yawRate=te(this.yawRate,-e.steer*Bt(1.75,.8,o),5.5,t),this.yaw+=this.yawRate*t;let a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=this.vel.x*a+this.vel.z*l,h=this.vel.x*l-this.vel.z*a;e.throttle>0?c+=26*e.throttle*It(1-c/ca,0,1)*t:e.throttle<0?c+=(c>0?34:12*It(1+c/12,0,1))*e.throttle*t:c-=c*.2*t,h*=Math.exp(-3.4*t),this.vel.x=a*c+l*h,this.vel.z=l*c-a*h,this.braking=e.throttle<0&&c>1,this.boosting=!1;let u=e.boost?27:e.shift?-30:0;i.y>nf-80&&(u=Math.min(u,(nf-i.y)*.35));let d=-(2.5+this.alt*1.7);if(this.alt<14&&(u=Math.max(u,d)),this.launchAssist-=t,this.vel.y=te(this.vel.y,u,this.launchAssist>0&&!e.shift?.35:this.alt<14&&this.vel.y<d?11:3.3,t),i.addScaledVector(this.vel,t),this.thrust=te(this.thrust,.35+.65*Math.max(0,e.throttle)*(1-o*.4)+(e.boost?.3:0),6,t),this.lift=te(this.lift,.55+(e.boost?.45:0)-(e.shift?.25:0),6,t),this.pitch=te(this.pitch,It(-Math.atan2(this.vel.y,Math.max(Math.abs(c),24))*.9+e.throttle*.035,-.7,.7),5,t),this.roll=te(this.roll,It(-this.yawRate*(.3+.42*o),-1,1),5,t),this.rollDir===0&&e.roll!==0&&this.flyTime>.3&&(this.rollDir=e.roll,this.rollT=0),this.rollDir!==0){this.rollT+=t/.72;let m=Math.min(this.rollT,1),y=m*m*(3-2*m);this.rollTrick=this.rollDir*y*Math.PI*2,m>=1&&(this.rollTrick=0,this.emit("barrel",{}),this.rollDir=0)}n.ground(i.x,i.y+.6,i.z,De);let f=De.water,g=f?0:De.h;this.groundY=g,this.overWater=f,this.alt=i.y-g,this.surf=De.surf;let x=!f&&this.rollDir===0&&(this.alt<4&&this.vel.y<-.6||e.shift&&this.alt<9);this.foldTarget=x?0:1;let p=f?.6:.5*this.fold;if(!f&&this.foldTarget===0&&this.fold<.4&&i.y<=g+.03){let m=-this.vel.y;i.y=g,this.mode="drive",this.offGround=0,this.vel.y=0,this.rollTrick=0,this.rollDir=0,this.emit("land",{impact:m,airTime:this.flyTime,clean:!0,fromFlight:!0,x:i.x,y:i.y,z:i.z,box:De.box});return}if(i.y<g+p){if((g+p-i.y)/t>46&&r>20&&!f){n.terrain.normalAt(i.x,i.z,Er);let y=this.vel.dot(Er);y<0&&this.vel.addScaledVector(Er,-1.5*y),this.vel.multiplyScalar(.62),this.hitT=this.time,this.emit("crash",{impact:Math.max(10,-y)})}else this.vel.y<-17&&!f?(this.vel.y=5,this.vel.x*=.75,this.vel.z*=.75,this.hitT=this.time,this.emit("crash",{impact:12})):this.vel.y<0&&(this.vel.y=te(this.vel.y,0,14,t));i.y=Math.max(i.y,Bt(i.y,g+p,1-Math.exp(-18*t))),i.y<g+.05&&(i.y=g+.05),this.skim=f?"water":"ground"}else this.skim=this.alt<3.2?f?"water":"ground":null}collide(t){let e=this.world,i=this.pos,n=Math.sin(this.yaw),r=Math.cos(this.yaw),o=e.colliders.near(i.x,i.z),a=i.y+.12,l=i.y+Kc,c=this.speed,h=this.stamp=(this.stamp||0)+1,u=!1;if(o)for(let d=0;d<2;d++){let f=(d?-1:1)*sf*n,g=(d?-1:1)*sf*r;for(let x=0;x<o.length;x++){let p=o[x],m=i.x+f-p.x,y=i.z+g-p.z,M=m*p.c-y*p.s,v=m*p.s+y*p.c,P=Math.abs(M)-p.hx,E=Math.abs(v)-p.hz;if(P>6||E>6)continue;let T=jn.topAt(p,v);if(a>=T-.55)continue;let R=P<0&&E<0;if(l<=p.y0){R&&p.kind==="deck"&&p.y0-l<14&&(u=!0);continue}let S=R?-1:Math.hypot(Math.max(P,0),Math.max(E,0))-la;if(S>=0){if(S<4.2&&c>26&&!p.quiet){let z=this.near.find(lt=>lt.box===p);z||this.near.push(z={box:p,gap:S,stamp:h}),z.gap=Math.min(z.gap,S),z.stamp=h}continue}if(R&&this.prev.y+Kc<=p.y0+.3&&this.vel.y>0){i.y=p.y0-Kc-.02,this.vel.y=-1;continue}let b,L,N;if(R)-P<-E?(b=Math.sign(M)||1,L=0,N=-P+la):(b=0,L=Math.sign(v)||1,N=-E+la);else{let z=M-It(M,-p.hx,p.hx),lt=v-It(v,-p.hz,p.hz),ht=Math.hypot(z,lt)||1e-6;b=z/ht,L=lt/ht,N=la-ht}let F=b*p.c+L*p.s,V=-b*p.s+L*p.c;i.x+=F*N,i.z+=V*N;let J=this.vel.x*F+this.vel.z*V;if(J<0){let z=this.mode==="fly"?1.4:1.22;this.vel.x-=F*J*z,this.vel.z-=V*J*z;let lt=1-Math.min(.3,-J*.012);this.vel.x*=lt,this.vel.z*=lt,-J>3.5&&this.time-this.hitT>.25&&(this.hitT=this.time,this.emit(-J>9?"crash":"scrape",{impact:-J,x:i.x+f-F,y:i.y+.5,z:i.z+g-V}))}let G=n*F+r*V;if(G<-.05&&this.mode!=="air"){let z=n-F*G,lt=r-V*G;Math.hypot(z,lt)<.25&&(z=-V,lt=F),this.yaw=Cn(this.yaw,Math.atan2(z,lt),this.mode==="fly"?8:5,t)}let et=this.near.findIndex(z=>z.box===p);et>=0&&this.near.splice(et,1)}}for(let d=this.near.length-1;d>=0;d--){let f=this.near[d];f.stamp!==h&&(this.near.splice(d,1),this.time-this.hitT>.7&&this.time-(f.box.nearT||-9)>5&&(f.box.nearT=this.time,this.emit("near",{gap:f.gap,kind:f.box.kind})))}u?this.underT=this.time:this.time-this.underT<.1&&this.time-this.underAward>6&&c>22&&this.mode!=="drive"&&this.time-this.hitT>1&&(this.underAward=this.time,this.emit("under",{}));for(let d of e.spheres){let f=i.x-d.x,g=i.y+.6-d.y,x=i.z-d.z,p=d.r+1.1,m=f*f+g*g+x*x;if(m<p*p){let y=Math.sqrt(m)||1,M=f/y,v=g/y,P=x/y;i.x+=M*(p-y),i.y+=v*(p-y),i.z+=P*(p-y);let E=this.vel.x*M+this.vel.y*v+this.vel.z*P;E<0&&(this.vel.x-=M*E*1.5,this.vel.y-=v*E*1.5,this.vel.z-=P*E*1.5,this.time-this.hitT>.3&&(this.hitT=this.time,this.emit("crash",{impact:Math.max(9,-E),soft:!0})))}else m<(p+5)*(p+5)&&c>26&&this.time-(d.nearT||-9)>6&&this.time-this.hitT>1?d.pending=this.time:d.pending&&m>(p+9)*(p+9)&&(this.time-d.pending<2&&this.time-this.hitT>1&&(d.nearT=this.time,this.emit("near",{gap:2,kind:"balloon"})),d.pending=0)}}respawn(){let t=this.safe,e=this.boost;this.reset(t.x,t.z,t.yaw),this.boost=e}};var ai=new I,xe=new I,Tr=new I,fn={h:0},ua=class{constructor(t,e){this.cam=t,this.world=e,this.yaw=0,this.orbitYaw=0,this.orbitPitch=0,this.manual=0,this.zoom=1,this.focus=new I,this.look=new I,this.fov=60,this.shake=0,this.kick=0,this.punch=0,this.roll=0,this.time=0,this.cine=null,this.orbit={yaw:.7,pitch:.16,dist:7,roll:0,fov:42,panX:0,panY:0,floor:null},this.sens=1,this.snapNext=!0}snap(t){this.yaw=t.yaw,this.focus.copy(t.pos).y+=1.05,this.orbitYaw=this.orbitPitch=0,this.snapNext=!0}addShake(t){this.shake=Math.min(1.2,this.shake+t)}aspectFov(t){let e=this.cam.aspect;if(e>=1.2)return t;let i=2*Math.atan(Math.tan(t*Math.PI/360)*1.2);return It(2*Math.atan(Math.tan(i/2)/e)*180/Math.PI,t,96)}startCinematic(t,e){let i=Math.sin(t.yaw),n=Math.cos(t.yaw),r=this.world.sky.v.sunDir,o=r.x*n-r.z*i>0?1:-1,a=new I(t.pos.x+i*21+n*o*10.5,t.pos.y+.6,t.pos.z+n*21-i*o*10.5);this.world.ground(a.x,a.y+50,a.z,fn),a.y=Math.max(a.y,fn.h+1.4),this.cine={t:0,duration:e,pos:a,side:o}}update(t,e,i,n={}){this.time+=t;let r=this.cam,o=e.speed,a=e.mode==="fly",l=It(o/ca,0,1),c=e.yaw;if(e.mode==="air")c=o>6?Math.atan2(e.vel.x,e.vel.z):this.yaw;else if(o>9&&e.mode==="drive"){let M=Math.atan2(e.vel.x,e.vel.z);c=Math.cos(M-e.yaw)>0?e.yaw+It(Math.atan2(Math.sin(M-e.yaw),Math.cos(M-e.yaw)),-.6,.6)*.45:e.yaw}n.lookBack&&(c+=Math.PI),this.yaw=this.snapNext?c:Cn(this.yaw,c,n.lookBack?14:3.2+l*4,t),i&&(i.x||i.y)&&(this.orbitYaw-=i.x*.0052*this.sens,this.orbitPitch=It(this.orbitPitch+i.y*.004*this.sens,-.5,1.15),this.manual=2.2),i&&i.zoom&&(this.zoom=It(this.zoom+i.zoom*.1,.7,2.2)),this.manual-=t,this.manual<=0&&o>3&&(this.orbitYaw=Cn(this.orbitYaw,0,2.5,t),this.orbitPitch=te(this.orbitPitch,0,2.5,t));let h=r.aspect<1?1.22:1,u=(a?8.2+l*3:6.5+l*2.2)*this.zoom*h,d=It(e.vel.y/40,-.5,.5),f=It((a?.21:.19)+this.orbitPitch-(a||e.mode==="air"?d*.28:0),-.45,1.3),g=this.yaw+this.orbitYaw;ai.copy(e.pos),ai.y+=1.05,this.snapNext?this.focus.copy(ai):(this.focus.x=te(this.focus.x,ai.x,22,t),this.focus.z=te(this.focus.z,ai.z,22,t),this.focus.y=te(this.focus.y,ai.y,12,t)),xe.set(this.focus.x-Math.sin(g)*Math.cos(f)*u,this.focus.y+Math.sin(f)*u+.25,this.focus.z-Math.cos(g)*Math.cos(f)*u);for(let M=0;M<5&&(this.world.ground(xe.x,xe.y+400,xe.z,fn),!(xe.y>=fn.h+.9));M++){if(M===4||fn.h-xe.y<3){xe.y=fn.h+.9;break}xe.lerp(this.focus,.3)}let x=2+o*.035;Tr.set(this.focus.x+Math.sin(this.yaw)*x*(n.lookBack?-1:1),this.focus.y+.25+(a?d*2.2:0),this.focus.z+Math.cos(this.yaw)*x*(n.lookBack?-1:1)),this.kick=te(this.kick,e.boosting?1:0,5,t);let p=58+jt(0,1,l)*17+this.kick*6,m=a?e.roll*.22:-e.yawRate*.012*l;if(this.cine){let M=this.cine;M.t+=n.realDt??t;let v=M.t/M.duration,P=jt(.7,1,v),E=ai.copy(e.pos);E.y+=.7;let T=M.pos,R=ku(It(v/.75,0,1));T.y+=(n.realDt??t)*.5;let S=T.x+Math.sin(e.yaw)*R*5,b=T.z+Math.cos(e.yaw)*R*5;xe.set(Bt(S,xe.x,P),Bt(T.y,xe.y,P),Bt(b,xe.z,P)),Tr.lerpVectors(E,Tr,P),p=Bt(34-R*4,p,P),m=Bt(-M.side*.06,m,P),v>=1&&(this.cine=null)}p+=this.punch*16,this.punch=Math.max(0,this.punch-(n.realDt??t)*1.1),this.shake=Math.max(0,this.shake-t*2.4);let y=this.shake*this.shake*.35+(e.boosting?.012:0)+(a?l*.008:0);if(y>0){let M=this.time;xe.x+=Math.sin(M*61)*y,xe.y+=Math.sin(M*73+1)*y,xe.z+=Math.sin(M*67+2)*y}r.position.copy(xe),this.look.copy(Tr),r.up.set(0,1,0),r.lookAt(Tr),this.roll=this.snapNext?m:te(this.roll,m,4,t),r.rotateZ(this.roll),this.fov=this.snapNext?p:te(this.fov,p,5,t),r.fov=this.aspectFov(this.fov),r.near=Bt(.6,3,jt(6,60,e.alt||0)),r.updateProjectionMatrix(),this.snapNext=!1}updateOrbit(t,e,i,n=0){let r=this.orbit,o=this.cam;i&&((i.x||i.y)&&(r.yaw-=i.x*.006,r.pitch=It(r.pitch+i.y*.005,-.25,1.45)),i.zoom&&(r.dist=It(r.dist*(1+i.zoom*.08),3.6,60))),r.yaw+=n*t;let a=e.yaw;ai.copy(e.pos),ai.y+=.62+r.panY;let l=a+r.yaw;ai.x-=Math.cos(l)*r.panX,ai.z+=Math.sin(l)*r.panX;let c=o.aspect<1?1.35:1,h=r.dist*c;xe.set(ai.x+Math.sin(l)*Math.cos(r.pitch)*h,ai.y+Math.sin(r.pitch)*h,ai.z+Math.cos(l)*Math.cos(r.pitch)*h),r.floor!=null?xe.y<r.floor&&(xe.y=r.floor):(this.world.ground(xe.x,xe.y+400,xe.z,fn),xe.y<fn.h+.35&&(xe.y=fn.h+.35),xe.y<.4&&(xe.y=.4)),o.position.copy(xe),o.up.set(0,1,0),o.lookAt(ai),o.rotateZ(r.roll),o.fov=o.aspect<1?It(r.fov*1.25,20,100):r.fov,o.near=.3,o.updateProjectionMatrix(),this.snapNext=!0,this.yaw=e.yaw,this.focus.copy(e.pos).y+=1.05}};var Kx=`
attribute float size;
attribute vec4 tint;
uniform float uScale;
varying vec4 vTint;
void main() {
  vTint = tint;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`,Qx=`
varying vec4 vTint;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.25, d) * vTint.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vTint.rgb, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,fa=class{constructor(t,e){this.n=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.tint=new Float32Array(t*4),this.size=new Float32Array(t),this.life=new Float32Array(t),this.max=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.a0=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.next=0;let i=new Vt;i.setAttribute("position",new ve(this.pos,3).setUsage($n)),i.setAttribute("tint",new ve(this.tint,4).setUsage($n)),i.setAttribute("size",new ve(this.size,1).setUsage($n)),this.mat=new _e({vertexShader:Kx,fragmentShader:Qx,uniforms:{uScale:{value:600}},transparent:!0,depthWrite:!1,blending:e?Be:bn}),this.points=new Ds(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=e?6:5}spawn(t,e,i,n,r,o,a,l,c,h,u,d,f,g=0,x=0){let p=this.next;this.next=(p+1)%this.n,this.pos[p*3]=t,this.pos[p*3+1]=e,this.pos[p*3+2]=i,this.vel[p*3]=n,this.vel[p*3+1]=r,this.vel[p*3+2]=o,this.tint[p*4]=h,this.tint[p*4+1]=u,this.tint[p*4+2]=d,this.tint[p*4+3]=f,this.life[p]=this.max[p]=a,this.s0[p]=l,this.s1[p]=c,this.a0[p]=f,this.grav[p]=g,this.drag[p]=x,this.size[p]=l}update(t){let{pos:e,vel:i,tint:n,size:r,life:o,max:a,n:l}=this;for(let h=0;h<l;h++){if(o[h]<=0)continue;if(o[h]-=t,o[h]<=0){r[h]=0,n[h*4+3]=0;continue}let u=1-o[h]/a[h],d=1-this.drag[h]*t;i[h*3]*=d,i[h*3+1]=i[h*3+1]*d-this.grav[h]*t,i[h*3+2]*=d,e[h*3]+=i[h*3]*t,e[h*3+1]+=i[h*3+1]*t,e[h*3+2]+=i[h*3+2]*t,r[h]=Bt(this.s0[h],this.s1[h],u),n[h*4+3]=this.a0[h]*(1-u)*Math.min(1,u*12)}let c=this.points.geometry;c.attributes.position.needsUpdate=!0,c.attributes.tint.needsUpdate=!0,c.attributes.size.needsUpdate=!0}},jx=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,ty=`
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
}`,$t=s=>(Math.random()-.5)*2*s,Ne=new I,of=new I,af=new pe,da=class{constructor(t,e){this.scene=t,this.model=e,this.add=new fa(700,!0),this.alpha=new fa(600,!1),t.add(this.add.points,this.alpha.points),this.time=0;let i=()=>new _e({vertexShader:jx,fragmentShader:ty,transparent:!0,depthWrite:!1,blending:Be,side:Ue,uniforms:{uTime:{value:0},uPower:{value:0},uCore:{value:new ut(1,1,1)},uEdge:{value:new ut(.25,.6,1)}}});this.rearMat=i(),this.liftMat=i();let n=new Ie(.085,.02,1,10,1,!0).rotateX(Math.PI/2).translate(0,0,-.5);{let h=n.attributes.uv,u=n.attributes.position;for(let d=0;d<h.count;d++)h.setY(d,1+u.getZ(d))}this.rear=[];for(let h of e.nozzles){let u=new mt(n,this.rearMat);u.position.copy(h),u.visible=!1,e.body.add(u),this.rear.push(u)}let r=new Ie(.26,.06,1,12,1,!0).translate(0,-.5,0);{let h=r.attributes.uv,u=r.attributes.position;for(let d=0;d<h.count;d++)h.setY(d,1+u.getY(d))}this.lifts=[];for(let h of e.wheels){let u=new mt(r,this.liftMat);u.position.set(h.s*.74,.17,h.z),u.visible=!1,e.body.add(u),this.lifts.push(u)}let o=this.trailN=26;this.trails=[],this.trailMat=new Qt({vertexColors:!0,transparent:!0,blending:Be,depthWrite:!1,side:Ue,fog:!1});for(let h=0;h<2;h++){let u=new Vt,d=new Float32Array(o*2*3),f=new Float32Array(o*2*3),g=[];for(let p=0;p<o-1;p++)g.push(p*2,p*2+1,p*2+2,p*2+2,p*2+1,p*2+3);u.setAttribute("position",new ve(d,3).setUsage($n)),u.setAttribute("color",new ve(f,3).setUsage($n)),u.setIndex(g);let x=new mt(u,this.trailMat);x.frustumCulled=!1,x.renderOrder=6,t.add(x),this.trails.push({mesh:x,pts:[],local:new I((h?-1:1)*.74,.757,-2.14)})}this.trailPower=0,this.trailAcc=0;let a=this.streakN=40;this.streakPos=new Float32Array(a*6),this.streakSeed=[];for(let h=0;h<a;h++)this.streakSeed.push(new I($t(1),$t(1),Math.random()));let l=new Vt;l.setAttribute("position",new ve(this.streakPos,3).setUsage($n)),this.streakMat=new Wn({color:16777215,transparent:!0,opacity:0,blending:Be,depthWrite:!1,fog:!1}),this.streaks=new Ls(l,this.streakMat),this.streaks.frustumCulled=!1,this.streaks.renderOrder=7,t.add(this.streaks),this.waves=[];let c=new Ns(.82,1,40);for(let h=0;h<3;h++){let u=new mt(c,new Qt({color:new ut(2.2,3.2,4),transparent:!0,opacity:0,blending:Be,depthWrite:!1,side:Ue,fog:!1}));u.visible=!1,u.renderOrder=6,t.add(u),this.waves.push({m:u,t:1,size:8})}}reset(){for(let t of this.trails)t.pts.length=0}shockwave(t,e,i=9,n=12577279){let r=this.waves.find(o=>o.t>=1)||this.waves[0];r.t=0,r.size=i,r.m.position.copy(t),r.m.quaternion.setFromUnitVectors(Ne.set(0,0,1),of.copy(e).normalize()),r.m.visible=!0}burst(t,e,i,n,r=0,o=0,a=0,l=12){let c=this.add,h=this.alpha;for(let u=0;u<l;u++)t==="spark"?c.spawn(e,i,n,r*.4+$t(7),o*.4+Math.random()*6,a*.4+$t(7),.35+Math.random()*.4,.22,.05,3,1.6,.5,1,16,1.5):t==="dust"?h.spawn(e+$t(1.2),i+.2,n+$t(1.2),r*.25+$t(3),.6+Math.random()*2,a*.25+$t(3),.8+Math.random()*.7,.8,3.6,.78,.7,.6,.34,-.4,1.6):t==="splash"?h.spawn(e+$t(1.5),i,n+$t(1.5),r*.3+$t(5),4+Math.random()*9,a*.3+$t(5),.7+Math.random()*.6,.6,2.2,.92,.97,1,.6,14,.6):t==="ring"?c.spawn(e+$t(6),i+$t(6),n+$t(6),r*.5+$t(6),o*.5+$t(6),a*.5+$t(6),.5+Math.random()*.5,.5,.05,.5,2.2,3,1,0,1):t==="ignite"?c.spawn(e,i,n,r+$t(9),o+$t(9),a+$t(9),.3+Math.random()*.45,.9,.1,1.6,2.6,4,1,0,2.5):t==="confetti"&&c.spawn(e+$t(1),i+1,n+$t(1),$t(6),4+Math.random()*6,$t(6),.8+Math.random()*.6,.3,.1,1+Math.random()*2,1+Math.random()*2,1+Math.random()*2,1,9,1)}update(t,e,i,n){this.time+=t;let r=this.time,o=this.model.body,a=n/(2*Math.tan(i.fov*Math.PI/360));this.add.mat.uniforms.uScale.value=a,this.alpha.mat.uniforms.uScale.value=a;let l=e.thrust*(e.mode==="fly"?1:.85);this.rearMat.uniforms.uTime.value=r,this.rearMat.uniforms.uPower.value=It(l*1.3,0,1.25);for(let y of this.rear){y.visible=l>.02;let M=.5+l*(e.mode==="fly"?2.6:1.9)+Math.sin(r*47)*.08;y.scale.set(1+l*.5,1+l*.5,M)}let c=e.fold*e.lift;this.liftMat.uniforms.uTime.value=r+3,this.liftMat.uniforms.uPower.value=It(c*1.1,0,1.1);for(let y of this.lifts)y.visible=c>.02,y.scale.set(1,.5+c*1.5+Math.sin(r*41+y.position.z)*.06,1);this.model.setThrust(Math.max(l,c*.3));let h=e.speed,u=e.pos,d=Math.sin(e.yaw),f=Math.cos(e.yaw);if(l>.5&&Math.random()<t*60*l&&(Ne.set($t(.3),.56,-2.3).applyQuaternion(e.quat).add(u),this.add.spawn(Ne.x,Ne.y,Ne.z,e.vel.x*.6-d*6+$t(1.5),e.vel.y*.6+$t(1.5),e.vel.z*.6-f*6+$t(1.5),.25+Math.random()*.25,.4,.05,.7,1.7,3.2,.9,0,2)),e.mode==="drive"&&e.offGround<.05&&h>4){let y=e.surf!=="road",M=e.slip>5.5,v=(y?jt(4,40,h)*34:0)+(M?44:0);if(v>0&&Math.random()<t*v){let P=Math.random()<.5?1:-1;Ne.set(P*fe.trackHalf,.1,fe.rearZ).applyQuaternion(e.quat).add(u);let E=y?e.surf==="sand"?[.86,.78,.62]:[.62,.58,.46]:[.85,.85,.88];this.alpha.spawn(Ne.x,Ne.y,Ne.z,e.vel.x*.25+$t(1.2),.8+Math.random()*1.6,e.vel.z*.25+$t(1.2),.7+Math.random()*.7,.7,y?3.4:2.6,E[0],E[1],E[2],y?.32:.22,-.3,1.4)}}if(e.mode==="fly"&&e.skim&&h>14&&e.alt<3.2){let y=jt(14,70,h)*(1-e.alt/3.4);if(Math.random()<t*90*y){let M=e.skim==="water",v=u.x-d*1.6+$t(.9),P=u.z-f*1.6+$t(.9),E=e.groundY+.15;M?this.alpha.spawn(v,E,P,e.vel.x*.35+$t(4),2.5+Math.random()*5,e.vel.z*.35+$t(4),.6+Math.random()*.6,.7,3,.9,.96,1,.5,9,.8):this.alpha.spawn(v,E,P,e.vel.x*.3+$t(3),1+Math.random()*2.5,e.vel.z*.3+$t(3),.7+Math.random()*.6,.8,3.6,.72,.66,.54,.3,-.2,1.2)}}if(e.mode==="fly"&&e.alt<5&&!e.overWater&&Math.random()<t*22*(1-e.alt/5)){let y=Math.random()*6.28;this.alpha.spawn(u.x+Math.cos(y)*1.3,e.groundY+.15,u.z+Math.sin(y)*1.3,Math.cos(y)*7,.6,Math.sin(y)*7,.6,.6,2.6,.75,.7,.6,.22,0,2.4)}this.add.update(t),this.alpha.update(t);let g=e.mode==="fly"?jt(20,60,h):e.boosting?1:jt(46,62,h)*.7;this.trailPower=Bt(this.trailPower,g,1-Math.exp(-4*t)),this.trailAcc+=Math.hypot(e.vel.x,e.vel.y,e.vel.z)*t;let x=this.trailAcc>.3;x&&(this.trailAcc=0);let p=this.trailN;for(let y of this.trails){if(Ne.copy(y.local).applyQuaternion(e.quat).add(u),y.pts.length===0)for(let P=0;P<p;P++)y.pts.push(Ne.clone());if(x){let P=y.pts.pop();P.copy(Ne),y.pts.unshift(P)}else y.pts[0].copy(Ne);let M=y.mesh.geometry.attributes.position,v=y.mesh.geometry.attributes.color;for(let P=0;P<p;P++){let E=y.pts[P],T=1-P/(p-1),R=T*T*this.trailPower;M.setXYZ(P*2,E.x,E.y-.02-.02*T,E.z),M.setXYZ(P*2+1,E.x,E.y+.02+.02*T,E.z),v.setXYZ(P*2,3.4*R,.2*R,.12*R),v.setXYZ(P*2+1,3.4*R,.2*R,.12*R)}M.needsUpdate=v.needsUpdate=!0,y.mesh.visible=this.trailPower>.01}let m=jt(58,100,h)*.22;if(this.streakMat.opacity=m,this.streaks.visible=m>.01,m>.01){let y=Math.hypot(e.vel.x,e.vel.y,e.vel.z)||1,M=e.vel.x/y,v=e.vel.y/y,P=e.vel.z/y;af.setFromUnitVectors(Ne.set(0,0,1),of.set(M,v,P));let E=90,T=1+h*.035;for(let R=0;R<this.streakN;R++){let S=this.streakSeed[R];S.z-=h*t/E,S.z<0&&(S.z+=1,S.x=$t(1),S.y=$t(1));let b=9+Math.abs(S.x)*16;Ne.set(Math.cos(S.y*3.14159)*b,Math.sin(S.y*3.14159)*b*.7+1,(S.z-.35)*E).applyQuaternion(af).add(u),this.streakPos[R*6]=Ne.x,this.streakPos[R*6+1]=Ne.y,this.streakPos[R*6+2]=Ne.z,this.streakPos[R*6+3]=Ne.x-M*T,this.streakPos[R*6+4]=Ne.y-v*T,this.streakPos[R*6+5]=Ne.z-P*T}this.streaks.geometry.attributes.position.needsUpdate=!0}for(let y of this.waves){if(y.t>=1)continue;y.t+=t/.55;let M=Math.min(y.t,1),v=1-Math.pow(1-M,3);y.m.scale.setScalar(.6+v*y.size),y.m.material.opacity=(1-M)*.9,M>=1&&(y.m.visible=!1)}}};var Pi={music:{loop:[1,116.86954648526077]},motor:{loop:[.25,4]},jet:{loop:[.25,4]},lift:{loop:[.25,4.6]},wind:{loop:[.25,5]},skid:{loop:[.25,1.7]},click:{},tick:{},ring:{},bank:{},bankBig:{},unlock:{},thud:{},land:{},crash:{},crash2:{},scrape:{},ignite:{},fold:{},unfold:{},whoosh:{},whoosh2:{},splash:{},shutter:{}};var ey="assets/audio/",iy=["motor","jet","lift","wind","skid"],pa=class{constructor(){this.ctx=null,this.vol={master:.8,music:.55,sfx:.9},this.muted=!1,this.paused=!1,this.buffers={},this.layers=null,this.state="idle"}unlock(){if(this.ctx){this.ctx.state==="suspended"&&!this.paused&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain();let i=e.createDynamicsCompressor();i.threshold.value=-12,i.ratio.value=4,i.attack.value=.005,i.release.value=.2,this.master.connect(i).connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.music=e.createGain(),this.music.connect(this.master),this.world=e.createGain(),this.world.connect(this.sfx),this.world.gain.value=0,this.applyVolumes(),this.load()}async fetchBuffer(t){let e=await fetch(`${ey}${t}.mp3`);if(!e.ok)throw new Error(`missing ${t}`);let i=await e.arrayBuffer();return new Promise((n,r)=>this.ctx.decodeAudioData(i,n,r))}async load(){if(this.state!=="idle")return;this.state="loading";let t=Object.keys(Pi).filter(e=>e!=="music");await Promise.all(t.map(async e=>{try{this.buffers[e]=await this.fetchBuffer(e)}catch{}})),this.startLayers(),this.state="ready";try{let e=await this.fetchBuffer("music"),i=this.ctx.createGain();i.gain.value=0,i.gain.linearRampToValueAtTime(1,this.ctx.currentTime+3),this.loopSource(e,Pi.music.loop,i).connect(this.music)}catch{}}loopSource(t,e,i){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=!0,n.loopStart=e[0],n.loopEnd=e[0]+e[1],n.connect(i),n.start(0,e[0]),i}startLayers(){let t=this.ctx,e={};for(let i of iy){let n=this.buffers[i];if(!n)continue;let r=t.createBufferSource();r.buffer=n,r.loop=!0,r.loopStart=Pi[i].loop[0],r.loopEnd=Pi[i].loop[0]+Pi[i].loop[1];let o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=18e3;let a=t.createGain();a.gain.value=0,r.connect(o).connect(a).connect(this.world),r.start(0,Pi[i].loop[0]+Math.random()*Pi[i].loop[1]*.5),e[i]={src:r,filter:o,gain:a}}if(e.motor&&(e.motor.filter.type="bandpass",e.motor.filter.Q.value=1.6,e.motor.filter.frequency.value=2400),this.buffers.wind){let i=t.createBufferSource();i.buffer=this.buffers.wind,i.loop=!0,i.loopStart=Pi.wind.loop[0],i.loopEnd=Pi.wind.loop[0]+Pi.wind.loop[1],i.playbackRate.value=.5;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=420;let r=t.createGain();r.gain.value=0,i.connect(n).connect(r).connect(this.world),i.start(0,Pi.wind.loop[0]+1.3),e.road={src:i,filter:n,gain:r}}this.layers=e}setVolumes(t){Object.assign(this.vol,t),this.applyVolumes()}setMuted(t){this.muted=t,this.applyVolumes()}applyVolumes(){if(!this.ctx)return;let t=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted?0:this.vol.master,t,.03),this.sfx.gain.setTargetAtTime(this.vol.sfx,t,.03),this.music.gain.setTargetAtTime(this.vol.music*.8,t,.05)}suspend(t){this.paused=t,this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}play(t,e={}){if(!this.ctx||this.ctx.state!=="running")return;let i=this.buffers[t];if(!i)return;let n=this.ctx.createBufferSource();n.buffer=i,n.playbackRate.value=(e.rate||1)*(e.vary?1+(Math.random()-.5)*e.vary:1);let r=this.ctx.createGain();r.gain.value=e.gain??1,n.connect(r).connect(this.sfx),n.start()}update(t,e,i,n=1){let r=this.layers;if(!this.ctx||this.ctx.state!=="running"||!r)return;let o=this.ctx.currentTime,a=(f,g,x=.07)=>f.setTargetAtTime(g,o,x);a(this.world.gain,i?1:0,.12);let l=e.speed,c=It(l/95,0,1),h=e.mode==="fly",u=e.mode==="drive"&&e.offGround<.08,d=Bt(.6,1,n);if(r.motor){let f=u?It(Math.abs(e.accel||0)/16,0,1)*.7+(e.boosting?.3:0):0;a(r.motor.src.playbackRate,(1.1+c*1.7)*d),a(r.motor.gain.gain,c>.01?(.012+c*.03)*f:0,.12),a(r.motor.filter.frequency,1900+c*3600)}r.road&&(a(r.road.gain.gain,u?c*(e.surf==="road"?.62:.95):0),a(r.road.filter.frequency,e.surf==="road"?320+c*380:220+c*200)),r.wind&&(a(r.wind.gain.gain,c*c*(h||!u?.75:.5)),a(r.wind.src.playbackRate,.75+c*.6)),r.jet&&(a(r.jet.gain.gain,e.thrust*.55),a(r.jet.src.playbackRate,(.8+e.thrust*.45)*d)),r.lift&&(a(r.lift.gain.gain,e.fold*e.lift*.4),a(r.lift.src.playbackRate,(.85+e.lift*.35)*d)),r.skid&&(a(r.skid.gain.gain,u&&e.surf==="road"?It((e.slip-4)/11,0,1)*.5:0,.05),a(r.skid.src.playbackRate,.9+It(e.slip,0,20)*.012))}};var Qc=Math.PI*2,ma=class{constructor(t){this.game=t,this.pot=0,this.mult=1,this.timer=0,this.lines=[],this.rot={x:0,y:0,z:0},this.drift={t:0,pts:0,gap:0},this.skimT=0,this.chain=new Map,this.time=0,this.lastTouchdown=-99}add(t,e,i){e=Math.round(e),this.pot+=e,this.mult=Math.min(10,this.mult+(this.lines.length?1:0)),this.timer=4.2,this.lines.push({name:t,pts:e}),this.lines.length>4&&this.lines.shift(),this.game.car.boost=Math.min(1,this.game.car.boost+.06+e/4e3),this.game.ui.combo(this,!0),i||this.game.audio.play("tick",{rate:1+Math.min(this.mult,10)*.06})}bank(){if(this.pot<=0)return;let t=this.pot*this.mult,e=kt.data,i=e.points;e.points+=t,t>e.stats.bestCombo&&(e.stats.bestCombo=t),this.game.ui.banked(t,this.mult),this.game.audio.play(t>=2e3?"bankBig":"bank"),this.pot=0,this.mult=1,this.lines=[],this.timer=0,this.game.ui.combo(this,!1);for(let n of _i)n.cost>i&&n.cost<=e.points&&!e.unlocked.includes(n.id)&&(e.unlocked.push(n.id),this.game.onUnlock(n));kt.touch()}fail(){this.pot>0&&(this.game.ui.toast("Combo lost","bad"),this.pot=0,this.mult=1,this.lines=[],this.timer=0,this.game.ui.combo(this,!1)),this.rot.x=this.rot.y=this.rot.z=0,this.drift.t=this.drift.pts=0}onEvent(t){let e=this.game.car,i=kt.data.stats;switch(t.type){case"jump":this.rot.x=this.rot.y=this.rot.z=0;break;case"launch":this.add("Lift-off",250),i.launches++;break;case"barrel":this.add("Barrel roll",120);break;case"near":t.gap<1.1?this.add("Paint-thin miss",160):this.add("Near miss",80);break;case"under":this.add("Under the bridge",300);break;case"crash":this.fail();break;case"land":{if(t.fromFlight){let h=this.padAt(t);if(h){let u=!i.pads.includes(h.name);u&&i.pads.push(h.name),this.add(`Bullseye \xB7 ${h.name}`,(u?900:350)*(h.bonus||1)),this.game.fx.burst("confetti",t.x,t.y,t.z,0,0,0,26)}else this.time-this.lastTouchdown>12&&t.airTime>3&&this.add(t.impact<5?"Butter touchdown":"Touchdown",t.impact<5?150:80);this.lastTouchdown=this.time;break}let n=this.rot,r=Math.floor((Math.abs(n.x)+.9)/Qc),o=Math.floor((Math.abs(n.y)+.9)/Qc),a=Math.floor((Math.abs(n.z)+.9)/Qc);if(t.airTime>i.longestAir&&(i.longestAir=t.airTime),!t.clean&&(r||o||a)){this.game.ui.toast("Sketchy landing","bad"),n.x=n.y=n.z=0;break}t.airTime>.75&&this.add(`Air time ${t.airTime.toFixed(1)}s`,t.airTime*70,!0);let l=h=>h>1?["","","Double ","Triple ","Quad "][Math.min(h,4)]:"";r&&this.add(l(r)+(n.x>0?"Front flip":"Backflip"),320*r*(r>1?1.3:1)),o&&this.add(`${o*360} Spin`,220*o),a&&this.add(l(a)+"Barrel roll",260*a),t.clean&&t.airTime>1.2&&t.impact<12&&this.add("Clean landing",60,!0);let c=this.padAt(t);c&&t.airTime>1&&this.add(`Bullseye \xB7 ${c.name}`,300),n.x=n.y=n.z=0;break}default:}}padAt(t){for(let e of this.game.world.pads)if(Math.abs(t.y-e.y)<1.2&&Math.hypot(t.x-e.x,t.z-e.z)<e.r+.8)return e;return null}update(t,e){this.time+=t;let i=kt.data.stats;e.speed>i.topSpeed&&(i.topSpeed=e.speed),e.mode==="air"&&(this.rot.x+=e.angVel.x*t,this.rot.y+=e.angVel.y*t,this.rot.z+=e.angVel.z*t);let n=this.drift;e.mode==="drive"&&e.offGround<.05&&e.slip>5.5&&e.speed>13?(n.t+=t,n.pts+=e.slip*t*5,n.gap=0):n.t>0&&(n.gap+=t,n.gap>.35&&(n.t>.9&&this.add(`Drift ${n.t.toFixed(1)}s`,n.pts),n.t=n.pts=0)),e.mode==="fly"&&e.skim&&e.alt<3&&e.speed>38?(this.skimT+=t,this.skimT>1.1&&(this.skimT=0,this.add(e.skim==="water"?"Wave skimmer":"Ground hugger",60,!0))):this.skimT=Math.max(0,this.skimT-t),this.checkRings(e),this.pot>0&&(e.mode==="air"||n.t>0||(this.timer-=t),this.timer<=0?this.bank():this.game.ui.comboTimer(this.timer/4.2))}checkRings(t){let e=this.game.world.rings,i=t.prev,n=t.pos;for(let r=0;r<e.length;r++){let o=e[r];if(o.cooldown>0)continue;let a=n.x-o.pos.x,l=n.y+.6-o.pos.y,c=n.z-o.pos.z;if(a*a+l*l+c*c>900)continue;let h=a*o.dir.x+l*o.dir.y+c*o.dir.z,u=(i.x-o.pos.x)*o.dir.x+(i.y+.6-o.pos.y)*o.dir.y+(i.z-o.pos.z)*o.dir.z;if(u*h>0)continue;let d=u/(u-h||1e-6),f=i.x+(n.x-i.x)*d-o.pos.x,g=i.y+.6+(n.y-i.y)*d-o.pos.y,x=i.z+(n.z-i.z)*d-o.pos.z;if(f*f+g*g+x*x>o.r*o.r)continue;o.cooldown=30,o.pulse=1;let p=this.game.world.chains[o.chain],m=this.chain.get(o.chain);(!m||this.time-m.t>16)&&(m={n:0,t:0,seen:new Set}),m.seen.has(o.index)||(m.seen.add(o.index),m.n++),m.t=this.time,this.chain.set(o.chain,m),kt.data.stats.rings++,this.add(`${p.name} ${m.n}/${p.count}`,100+40*(m.n-1),!0),this.game.audio.play("ring",{rate:1+(m.n-1)*.085}),this.game.fx.burst("ring",o.pos.x,o.pos.y,o.pos.z,t.vel.x*.3,t.vel.y*.3,t.vel.z*.3,22),m.n>=p.count&&(this.add(`${p.name} complete!`,500+p.count*60),this.game.audio.play("unlock"),this.chain.delete(o.chain))}}nextUnlock(){let t=kt.data;return _i.find(e=>!t.unlocked.includes(e.id))||null}label(){return`${si(this.pot)}`}};var ga=class{constructor(t,e){this.canvas=t,this.world=e,this.ctx=t.getContext("2d"),this.base=this.render(e),this.frame=0}render(t){let i=document.createElement("canvas");i.width=i.height=512;let n=i.getContext("2d"),r=t.terrain,o=r.n+1,a=n.createImageData(o,o),l=r.colors;for(let u=0;u<o*o;u++){let d=r.h[u],f=l[u*3],g=l[u*3+1],x=l[u*3+2];d<0&&(f=.07,g=.2,x=.3);let p=d<0?1:.85+Math.min(.3,d/600);a.data[u*4]=Math.min(255,Math.sqrt(f)*255*p*.8),a.data[u*4+1]=Math.min(255,Math.sqrt(g)*255*p*.8),a.data[u*4+2]=Math.min(255,Math.sqrt(x)*255*p*.8),a.data[u*4+3]=255}let c=document.createElement("canvas");c.width=c.height=o,c.getContext("2d").putImageData(a,0,0),n.imageSmoothingEnabled=!0,n.drawImage(c,0,0,512,512);let h=u=>(u+4e3/2)/4e3*512;n.fillStyle="rgba(70,74,84,0.9)",n.fillRect(h(Rt.x0),h(Rt.z0),h(Rt.x1)-h(Rt.x0),h(Rt.z1)-h(Rt.z0)),n.fillStyle="rgba(190,190,200,0.5)";for(let u of t.city.roofList)n.fillRect(h(u.x-u.hx),h(u.z-u.hz),u.hx*2/4e3*512,u.hz*2/4e3*512);n.fillStyle="#3a3d45",n.fillRect(h(ie.x0),h(ie.z-ie.halfW),h(ie.x1)-h(ie.x0),ie.halfW*2/4e3*512),n.lineCap=n.lineJoin="round";for(let u of[0,1])for(let d of t.roads.roads)n.strokeStyle=u?"#f3ead8":"rgba(20,22,28,0.8)",n.lineWidth=(d.lanes===4?3.2:2.2)+(u?0:1.6),n.beginPath(),d.pts.forEach((f,g)=>g?n.lineTo(h(f.x),h(f.z)):n.moveTo(h(f.x),h(f.z))),d.closed&&n.closePath(),n.stroke();for(let u of t.ramps)n.fillStyle=u.launch?"#ff4a3a":"#f0902e",n.beginPath(),n.arc(h(u.x),h(u.z),u.launch?4.2:2.6,0,7),n.fill();n.strokeStyle="#fff3e0",n.lineWidth=1.4;for(let u of t.pads)n.beginPath(),n.arc(h(u.x),h(u.z),3.2,0,7),n.stroke();return i}draw(t){if(this.frame++%2)return;let e=this.canvas,i=this.ctx,n=e.width,r=n/2,o=this.base.width,a=t.mode==="fly"?620:380;this.range=this.range?this.range+(a-this.range)*.06:a;let l=r/this.range/(o/4e3);i.clearRect(0,0,n,n),i.save(),i.beginPath(),i.arc(r,r,r-2,0,7),i.clip(),i.fillStyle="#12303f",i.fillRect(0,0,n,n),i.translate(r,r),i.rotate(t.yaw+Math.PI),i.scale(l,l);let c=(t.pos.x+4e3/2)/4e3*o,h=(t.pos.z+4e3/2)/4e3*o;i.drawImage(this.base,-c,-h);let u=o/4e3;for(let f of this.world.rings){if(f.cooldown>0)continue;let g=f.pos.x-t.pos.x,x=f.pos.z-t.pos.z;g*g+x*x>this.range*this.range*1.1||(i.fillStyle="#5fe6ff",i.beginPath(),i.arc(g*u,x*u,2.2/l,0,7),i.fill())}i.restore(),i.save(),i.translate(r,r),i.fillStyle="#ff3b30",i.strokeStyle="#fff",i.lineWidth=n*.012;let d=n*.055;i.beginPath(),i.moveTo(0,-d*1.3),i.lineTo(d,d),i.lineTo(0,d*.5),i.lineTo(-d,d),i.closePath(),i.fill(),i.stroke(),i.restore(),i.strokeStyle="rgba(255,255,255,0.28)",i.lineWidth=n*.02,i.beginPath(),i.arc(r,r,r-n*.012,0,7),i.stroke()}};var Lt=s=>document.getElementById(s),ti=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i},xa=class{constructor(t){this.game=t,this.screens=["menu","pause","garage","settings","help","photo"],this.last={},this.hintTimer=null,document.querySelectorAll("[data-act]").forEach(e=>e.addEventListener("click",()=>{t.audio.play("click"),t.act(e.dataset.act)})),Lt("btn-pause").addEventListener("click",()=>t.act("pause")),Lt("btn-photo").addEventListener("click",()=>t.act("photo"));for(let e of["p-fov","p-roll","p-pan"])Lt(e).addEventListener("input",()=>t.photoSliders(+Lt("p-fov").value,+Lt("p-roll").value,+Lt("p-pan").value));Lt("p-time").addEventListener("click",()=>{t.audio.play("click"),t.cycleTime()}),Lt("p-hide").addEventListener("click",()=>{document.body.classList.toggle("photo-clean"),Lt("p-hide").textContent=document.body.classList.contains("photo-clean")?"SHOW UI":"HIDE UI"}),Lt("p-shot").addEventListener("click",()=>t.takePhoto()),Lt("p-exit").addEventListener("click",()=>{t.audio.play("click"),t.act("back")}),this.buildHelp()}show(t){for(let e of this.screens)Lt(e).classList.toggle("hidden",e!==t);Lt("hud").classList.toggle("hidden",t!==null),document.body.classList.remove("photo-clean"),Lt("p-hide").textContent="HIDE UI",t==="menu"&&this.menuFoot(),t==="pause"&&this.pauseStats(),t==="garage"&&this.buildGarage(),t==="settings"&&this.buildSettings(),t==="photo"&&this.photoTime()}loading(t,e){Lt("load-fill").style.width=`${Math.round(t*100)}%`,e&&(Lt("load-tip").textContent=e)}loadingDone(){let t=Lt("loading");t.classList.add("out"),setTimeout(()=>t.remove(),700)}hud(t,e){let i=this.last,n=kt.data.settings,r=Math.round(t.speed*(n.units==="mph"?2.23694:3.6));r!==i.v&&(i.v=r,Lt("speed").textContent=r),n.units!==i.units&&(i.units=n.units,Lt("unit").textContent=n.units==="mph"?"MPH":"KM/H");let o=t.mode==="fly"?"fly":t.mode==="air"?"air":"drive";if(o!==i.mode){i.mode=o;let c=Lt("mode");c.textContent=o==="fly"?"FLIGHT":o==="air"?"AIRBORNE":"DRIVE",c.className=o,Lt("alt").classList.toggle("on",o!=="drive"),document.body.classList.toggle("flying",o==="fly"),Lt("boost").classList.toggle("hot",o==="fly"),Lt("t-boost").textContent=o==="fly"?"UP":o==="air"?"FLY":"BOOST",Lt("t-shift").textContent=o==="fly"?"DOWN":"DRIFT",Lt("t-fly").textContent=o==="fly"?"ROLL":"FLY"}if(o!=="drive"){let c=Math.max(0,Math.round(t.alt));c!==i.alt&&(i.alt=c,Lt("alt").textContent=`ALT ${c} M`)}let a=o==="fly"?1:t.boost;Math.abs(a-(i.boost??-1))>.004&&(i.boost=a,Lt("boost-fill").style.transform=`scaleX(${a.toFixed(3)})`);let l=kt.data.points;if(l!==i.pts){i.pts=l,Lt("score-val").textContent=si(l);let c=e.nextUnlock();if(c){let h=[..._i].reverse().find(d=>d.cost<=l),u=h?h.cost:0;Lt("next-fill").style.width=`${It((l-u)/(c.cost-u)*100,0,100)}%`,Lt("next-label").textContent=`${c.name} \xB7 ${si(c.cost)}`}else Lt("next-fill").style.width="100%",Lt("next-label").textContent="All paints unlocked"}}combo(t,e){let i=Lt("combo");if(t.pot<=0){i.classList.add("hidden");return}i.classList.remove("hidden");let n=Lt("combo-lines");n.innerHTML="";for(let r of t.lines.slice(-3))n.appendChild(ti("div","",`${r.name}<span>+${si(r.pts)}</span>`));if(Lt("combo-pts").textContent=si(t.pot),Lt("combo-mult").textContent=`\xD7${t.mult}`,e){let r=Lt("combo-pot");r.classList.remove("pop"),r.offsetWidth,r.classList.add("pop")}}comboTimer(t){Lt("combo-timer").firstElementChild.style.transform=`scaleX(${It(t,0,1).toFixed(3)})`}banked(t,e){this.toast(`+${si(t)}`,"good",e>1?`Combo \xD7${e} banked`:"Banked",1700);let i=Lt("score");i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")}toast(t,e="",i="",n=2200){let r=Lt("toasts");for(;r.children.length>2;)r.firstElementChild.remove();let o=ti("div",`toast ${e}`,i?`${t}<small>${i}</small>`:t);r.appendChild(o),setTimeout(()=>{o.classList.add("out"),setTimeout(()=>o.remove(),320)},n)}hint(t,e=7e3){let i=Lt("hint");if(clearTimeout(this.hintTimer),!t){i.classList.add("hidden");return}i.innerHTML=t,i.classList.remove("hidden"),this.hintTimer=setTimeout(()=>i.classList.add("hidden"),e)}cinematic(t){document.body.classList.toggle("cine",t)}cineTitle(){let t=Lt("cine-title");t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}flash(){let t=Lt("flash");t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}fade(t){Lt("fade").classList.toggle("on",t)}touchMode(t){document.body.classList.toggle("touch",t),Lt("touch").classList.toggle("hidden",!t)}joy(t,e,i,n){let r=Lt("joy");r.classList.toggle("hidden",!n),Lt("joy-ghost").classList.toggle("hidden",n),n&&t&&(r.style.left=`${t.x}px`,r.style.top=`${t.y}px`,r.firstElementChild.style.transform=`translate(${e*40}px, ${i*40}px)`)}menuFoot(){let t=kt.data;Lt("menu-foot").innerHTML=`Stunt points <b>${si(t.points)}</b> &nbsp;\xB7&nbsp; Paints <b>${t.unlocked.length}/${_i.length}</b>`}pauseStats(){let t=kt.data,e=t.stats,i=t.settings.units==="mph";Lt("pause-stats").innerHTML=`
      <div>Stunt points<b>${si(t.points)}</b></div>
      <div>Best combo<b>${si(e.bestCombo)}</b></div>
      <div>Top speed<b>${Math.round(e.topSpeed*(i?2.23694:3.6))} ${i?"mph":"km/h"}</b></div>
      <div>Longest air<b>${e.longestAir.toFixed(1)} s</b></div>
      <div>Rings<b>${si(e.rings)}</b></div>
      <div>Landing pads<b>${e.pads.length}/${this.game.world.pads.length}</b></div>`}buildGarage(){let t=Lt("g-strip"),e=kt.data;t.innerHTML="",this.gSel=this.gSel&&_i.some(o=>o.id===this.gSel)?this.gSel:e.paint;for(let o of _i){let a=!e.unlocked.includes(o.id),l=ti("button",`swatch${a?" locked":""}${o.id===this.gSel?" on":""}`,"<i></i>");l.style.setProperty("--c",o.color),l.setAttribute("aria-label",o.name),l.addEventListener("click",()=>{this.game.audio.play("click"),this.gSel=o.id,this.game.previewPaint(o.id),this.buildGarage()}),t.appendChild(l),o.id===this.gSel&&setTimeout(()=>l.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"}),0)}let i=_i.find(o=>o.id===this.gSel),n=!e.unlocked.includes(i.id);Lt("g-name").textContent=i.name;let r=Lt("g-state");r.classList.toggle("locked",n),r.textContent=n?`Locked \xB7 ${si(i.cost)} stunt points (${si(Math.max(0,i.cost-e.points))} to go)`:i.id===e.paint?"Equipped":"Unlocked \xB7 tap done to equip",Lt("g-points").innerHTML=`\u2605 ${si(e.points)} stunt points`}buildSettings(){let t=Lt("settings-body"),e=kt.data.settings,i=this.game;t.innerHTML="";let n=p=>{let m=ti("div","set-group",`<h3>${p}</h3>`);return t.appendChild(m),m},r=(p,m,y,M=0,v=1)=>{let P=ti("div","set-row",`<span>${m}</span>`),E=ti("input");E.type="range",E.min=M,E.max=v,E.step=.01,E.value=e[y],E.addEventListener("input",()=>{e[y]=+E.value,i.applySettings(),kt.touch()}),P.appendChild(E),p.appendChild(P)},o=(p,m,y,M)=>{let v=ti("div","set-row",`<span>${m}</span>`),P=ti("div","seg");for(let[E,T]of M){let R=ti("button",e[y]===E?"on":"",T);R.addEventListener("click",()=>{e[y]=E,i.audio.play("click"),i.applySettings(),kt.touch(),this.buildSettings()}),P.appendChild(R)}v.appendChild(P),p.appendChild(v)},a=n("Audio");r(a,"Master volume","master"),r(a,"Music","music"),r(a,"Sound effects","sfx");let l=n("Graphics");o(l,"Quality","quality",[["auto","Auto"],["low","Low"],["medium","Medium"],["high","High"]]),o(l,"Time of day","time",Ws.map(p=>[p,ia[p].label]));let c=n("Gameplay");o(c,"Cinematic take-off","cinematic",[[!0,"On"],[!1,"Off"]]),o(c,"Camera shake","shake",[[!0,"On"],[!1,"Off"]]),o(c,"Speed units","units",[["kmh","km/h"],["mph","mph"]]),r(c,"Look sensitivity","sens",.4,2);let h=n("Keyboard controls"),u=ti("div","keys");for(let[p,m]of Hu){let y=ti("div","key-row",`<span>${m}</span>`),M=ti("div","slots");for(let v=0;v<2;v++){let P=ti("button","",Qn(kt.data.keys[p][v]));P.addEventListener("click",()=>{P.textContent="Press\u2026",P.classList.add("listen"),i.input.capture=E=>{if(E!=="Escape"||p==="pause"){for(let T in kt.data.keys)kt.data.keys[T]=kt.data.keys[T].map(R=>R===E?null:R);kt.data.keys[p][v]=E}kt.touch(),this.buildSettings()}}),M.appendChild(P)}y.appendChild(M),u.appendChild(y)}h.appendChild(u);let d=ti("button","link-btn","Restore default keys");d.style.marginTop="10px",d.addEventListener("click",()=>{for(let p in Mr)kt.data.keys[p]=Mr[p].slice();kt.touch(),this.buildSettings()}),h.appendChild(d);let f=n("Progress"),g=ti("div","set-row","<span>Stunt points and unlocked paints</span>"),x=ti("button","link-btn","Reset progress");x.addEventListener("click",()=>{x.dataset.sure?(i.resetProgress(),this.buildSettings()):(x.dataset.sure="1",x.textContent="Tap again to confirm")}),g.appendChild(x),f.appendChild(g)}buildHelp(){let t=e=>Qn(kt.data.keys[e][0]);Lt("help-body").innerHTML=`<div class="help-grid">
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
    </div>`}slide(t,e,i){let n=Lt("showcase");Lt("sc-num").textContent=`0${t+1} / 0${e}`,Lt("sc-title").textContent=i.title,Lt("sc-text").textContent=i.text,Lt("sc-dots").innerHTML=Array.from({length:e},(r,o)=>`<i class="${o===t?"on":""}"></i>`).join(""),n.classList.remove("in"),n.offsetWidth,n.classList.add("in")}photoTime(){Lt("p-time").textContent=ia[this.game.world.sky.name].label.toUpperCase()}};var lf=-400,is=lf+.18;function cf(){let s=new ue,t=(x,p,m)=>new Qt({color:new ut(x,p,m),fog:!1}),e=new mt(new Hi(42,64).rotateX(-Math.PI/2),new gr({color:658190,specular:3158586,shininess:70,fog:!1}));e.receiveShadow=!0;let i=new mt(new Ie(4.3,4.5,.18,64),new gr({color:1711138,specular:5593183,shininess:90,fog:!1}));i.position.y=.09,i.receiveShadow=!0,s.userData.stage=i;let n=new mt(new Ie(42,42,26,64,1,!0),new Qt({color:460811,side:ze,fog:!1}));n.position.y=13;let r=new mt(new Hi(42,48).rotateX(Math.PI/2),new Qt({color:263431,fog:!1}));r.position.y=26,s.add(e,i,n,r);let o=(x,p,m,y)=>{let M=new mt(new Ei(x,p,6,96).rotateX(Math.PI/2),y);return M.position.y=m,s.add(M),M};o(4.42,.035,.19,t(2.6,2.4,2.1)),o(9,.03,.02,t(2.6,.22,.16)),o(16,.03,.02,t(.5,.5,.55)),o(8,.1,13,t(2.2,2.1,1.9)),o(15,.06,16,t(1.3,1.25,1.2));let a=new Pe(.35,15,.12);for(let x=0;x<24;x++){let p=x/24*Math.PI*2,m=new mt(a,x%3===0?t(3.2,.3,.22):t(1.5,1.45,1.4));m.position.set(Math.sin(p)*40,8.5,Math.cos(p)*40),m.rotation.y=p,s.add(m)}let l=document.createElement("canvas");l.width=2048,l.height=384;let c=l.getContext("2d");c.fillStyle="#07080b",c.fillRect(0,0,2048,384),c.textAlign="center",c.textBaseline="middle",c.fillStyle="#fff3e0",c.font='italic 700 250px "Barlow Condensed", "Arial Narrow", Arial, sans-serif',c.fillText("FLYING ROADSTER",1024,200),c.fillStyle="#e2202c",c.fillRect(250,340,1548,14);let h=new ii(l);h.colorSpace=Ae,h.anisotropy=8;for(let x of[0,Math.PI]){let p=new mt(new Ke(40,7.5),new Qt({map:h,fog:!1}));p.position.set(Math.sin(x)*-38,11,Math.cos(x)*-38),p.rotation.y=x,s.add(p)}for(let[x,p,m,y]of[[5,9,6,110],[-7,7,-4,85],[0,12,-9,60]]){let M=new zs(16777215,y,45,2);M.position.set(x,p,m),s.add(M)}let u=document.createElement("canvas");u.width=u.height=128;let d=u.getContext("2d"),f=d.createRadialGradient(64,64,4,64,64,64);f.addColorStop(0,"rgba(0,0,0,0.85)"),f.addColorStop(.55,"rgba(0,0,0,0.45)"),f.addColorStop(1,"rgba(0,0,0,0)"),d.fillStyle=f,d.fillRect(0,0,128,128);let g=new mt(new Ke(1,1).rotateX(-Math.PI/2),new Qt({map:new ii(u),transparent:!0,depthWrite:!1,fog:!1}));return g.position.y=.185,g.renderOrder=1,s.userData.shadow=g,s.add(g),s.name="showroom",e.name="hallFloor",s.position.y=lf,s}var ya=[{title:"MEET THE ROADSTER",text:"All-electric, near silent and absurdly quick. One car, one island, no rules.",yaw:2.45,pitch:.11,dist:7.6,fly:0},{title:"HIT THE RAMP",text:"Floor it down the runway and take the launch ramp for a slow-motion lift-off.",yaw:.75,pitch:.16,dist:8.2,fly:0},{title:"WHEELS UP",text:"The wheels fold away, the cold-gas thrusters fire and the roadster simply flies.",yaw:3.95,pitch:.08,dist:8.6,fly:1},{title:"FLY ANYWHERE",text:"Thread the ring chains, skim the bay, slip under the bridge, land on a rooftop.",yaw:1.5,pitch:.3,dist:8.4,fly:1},{title:"STUNT FOR PAINT",text:"Flips, drifts, near misses and combos earn points that unlock 13 more colours.",yaw:5.3,pitch:.14,dist:7.8,fly:0},{title:"FRAME THE SHOT",text:"Photo mode with golden hour, clear day and night. Save it and show it off.",yaw:2.9,pitch:.42,dist:9,fly:0}],ns=1/120,Ar=()=>new Promise(s=>requestAnimationFrame(()=>s())),Ys=new I,hf=new I,jc=class{constructor(){this.state="loading",this.returnTo="menu",this.acc=0,this.last=0,this.launch=null,this.cine=null,this.timeScale=1,this.liftFx=0,this.pend={fly:!1,boostPressed:!1},this.respawning=!1,this.playTime=0,this.hinted={},this.show={pos:new I(0,is,0),quat:new pe,vel:new I,yaw:0,speed:0,mode:"show",fold:0,lift:0,thrust:0,hover:0,alt:0,groundY:is,slide:-1,t:99},this.showCam={pos:new I(0,is,0),yaw:0}}async boot(){let t=document.getElementById("game");this.audio=new pa,this.ui=new xa(this),this.ui.loading(.08,"Charging the thrusters\u2026"),await Ar(),await Ti.init(),Ti.loadingStart(),kt.load(),this.ui.buildHelp();try{await Promise.race([document.fonts.load('italic 700 40px "Barlow Condensed"'),new Promise(i=>setTimeout(i,1500))])}catch{}this.ui.loading(.2,"Raising the island\u2026"),await Ar(),this.gfx=new Zo(t),this.scene=new Tn,this.camera=new Je(60,innerWidth/innerHeight,.6,9e3),this.world=new na(this.scene,this.gfx.renderer),this.ui.loading(.62,"Polishing the paint\u2026"),await Ar(),this.model=new aa,this.scene.add(this.model.root),this.hall=cf(),this.scene.add(this.hall),this.car=new ha(this.world),this.rig=new ua(this.camera,this.world),this.fx=new da(this.scene,this.model),this.input=new Vo(t,kt.data.keys),this.stunts=new ma(this),this.minimap=new ga(document.getElementById("minimap"),this.world),this.input.onTouchMode=i=>this.ui.touchMode(i),this.input.onJoy=(i,n,r,o)=>this.ui.joy(i,n,r,o),this.input.bindButton(document.getElementById("t-boost"),"boost"),this.input.bindButton(document.getElementById("t-shift"),"shift"),this.input.bindButton(document.getElementById("t-fly"),"fly"),matchMedia("(pointer: coarse)").matches&&"ontouchstart"in window&&(this.input.isTouch=!0,this.ui.touchMode(!0)),this.gfx.init(this.scene,this.camera,this.world),this.applySettings(!0),this.setPaint(kt.data.paint),this.rig.orbit.yaw=2.45,this.rig.orbit.pitch=.12,this.rig.orbit.dist=7.6,this.rig.orbit.floor=is+.25,this.updateShow(0,!1),this.ui.loading(.85,"Warming up the shaders\u2026"),await Ar();try{this.gfx.renderer.compile(this.scene,this.camera)}catch{}this.gfx.render(),this.ui.loading(1,"Ready for take-off"),await Ar(),Ti.onMute=i=>this.audio.setMuted(i),this.audio.setMuted(Ti.muted);let e=()=>this.audio.unlock();addEventListener("pointerdown",e),addEventListener("keydown",e),addEventListener("touchend",e),document.addEventListener("visibilitychange",()=>{document.hidden?(this.state==="play"&&this.act("pause"),this.audio.suspend(!0),kt.flush()):this.audio.suspend(!1)}),addEventListener("pagehide",()=>kt.flush()),addEventListener("resize",()=>this.gfx.resize(!0)),Ti.loadingStop(),this.ui.loadingDone(),this.setState("menu"),this.last=performance.now(),requestAnimationFrame(i=>this.frame(i))}setState(t){let e=this.state;if(this.state=t,this.ui.show(t==="play"?null:t),t==="play"?Ti.gameplayStart():Ti.gameplayStop(),t==="menu"||t==="garage"?this.inHall=!0:(t==="play"||t==="pause"||t==="photo")&&(this.inHall=!1),this.rig.orbit.floor=this.inHall?is+.25:null,this.world.sky.setStudio(!!this.inHall),this.fx&&this.fx.reset(),t==="menu"&&(this.show.slide=-1,this.show.t=99),t==="menu"||t==="garage"){let i=this.rig.orbit;i.roll=0,i.panY=0,i.fov=40,t==="garage"?(i.dist=6.6,i.pitch=.2,i.panX=0):(i.dist=7.6,i.pitch=.11,i.panX=this.camera.aspect>1?2.1:0,e==="loading"&&(i.yaw=2.45))}t==="pause"&&e==="garage"&&(this.syncModel(0),this.rig.snap(this.car),this.rig.update(1/60,this.car,null,{})),t!=="play"&&(this.ui.cinematic(!1),this.ui.hint(null)),t!=="play"&&t!=="photo"&&kt.flush()}act(t){switch(t){case"play":this.audio.unlock(),(this.car.mode!=="drive"||this.car.overWater)&&this.car.reset(Le.x,Le.z,Le.yaw),this.rig.snap(this.car),this.fx.reset(),this.setState("play"),this.firstHints();break;case"resume":this.setState("play");break;case"pause":this.state==="play"&&(this.endCinematic(),this.setState("pause"));break;case"garage":this.returnTo=this.state,this.setState("garage");break;case"settings":this.returnTo=this.state,this.setState("settings");break;case"help":this.returnTo=this.state,this.setState("help");break;case"photo":if(this.state==="play"||this.state==="pause"){this.endCinematic();let e=this.rig.orbit;e.yaw=Math.atan2(this.camera.position.x-this.car.pos.x,this.camera.position.z-this.car.pos.z)-this.car.yaw,e.pitch=.16,e.dist=8,e.roll=0,e.fov=42,e.panX=0,e.panY=0,document.getElementById("p-fov").value=42,document.getElementById("p-roll").value=0,document.getElementById("p-pan").value=0,this.setState("photo")}break;case"menu":this.stunts.bank(),this.car.reset(Le.x,Le.z,Le.yaw),this.syncModel(0),this.setState("menu");break;case"respawn":this.stunts.fail(),this.car.reset(Le.x,Le.z,Le.yaw),this.rig.snap(this.car),this.fx.reset(),this.setState("play");break;case"back":if(this.state==="garage"){let e=this.ui.gSel;e&&kt.data.unlocked.includes(e)&&(kt.data.paint=e,kt.touch()),this.setPaint(kt.data.paint),this.ui.gSel=null}this.setState(this.state==="photo"?"play":this.returnTo==="pause"?"pause":"menu");break;default:}}applySettings(t){let e=kt.data.settings;this.audio.setVolumes({master:e.master,music:e.music,sfx:e.sfx}),(t||e.quality!==this.gfx.setting)&&this.gfx.setQuality(e.quality),(e.time!==this.world.sky.name||t)&&this.world.sky.setTime(e.time,!!t),this.rig.sens=e.sens}cycleTime(){let t=kt.data.settings;t.time=Ws[(Ws.indexOf(t.time)+1)%Ws.length],this.world.sky.setTime(t.time,!1),this.ui.photoTime(),kt.touch()}setPaint(t){let e=_i.find(i=>i.id===t)||_i[0];this.model.setPaint(e)}previewPaint(t){this.setPaint(t)}onUnlock(t){this.ui.toast(`New paint \xB7 ${t.name}`,"big","Open the garage to equip it",3600),this.audio.play("unlock"),this.fx.burst("confetti",this.car.pos.x,this.car.pos.y,this.car.pos.z,0,0,0,40),Ti.happytime()}resetProgress(){kt.reset(),this.setPaint(kt.data.paint),this.ui.last={}}photoSliders(t,e,i){let n=this.rig.orbit;n.fov=t,n.roll=e*Math.PI/180,n.panY=i/10}takePhoto(){document.body.classList.add("photo-clean"),this.audio.play("shutter");let t=this.gfx.snapshot(),e=t.getContext("2d"),i=t.width,n=t.height,r=Math.max(12,n/46),o=e.createRadialGradient(i/2,n*.46,n*.45,i/2,n*.46,Math.hypot(i,n)*.62);o.addColorStop(0,"rgba(10,4,8,0)"),o.addColorStop(1,"rgba(10,4,8,0.32)"),e.fillStyle=o,e.fillRect(0,0,i,n),e.font=`italic 700 ${r*1.5}px "Barlow Condensed", Arial, sans-serif`,e.textAlign="right",e.textBaseline="alphabetic",e.fillStyle="rgba(255,255,255,0.92)",e.shadowColor="rgba(0,0,0,0.5)",e.shadowBlur=r*.5,e.fillText("FLYING ROADSTER",i-r*1.2,n-r*1.1),this.ui.flash(),t.toBlob(async a=>{if(document.body.classList.remove("photo-clean"),document.getElementById("p-hide").textContent="HIDE UI",!a)return;let l=new File([a],"flying-roadster.png",{type:"image/png"});try{if(this.input.isTouch&&navigator.canShare&&navigator.canShare({files:[l]})){await navigator.share({files:[l],title:"Flying Roadster"});return}}catch{}let c=document.createElement("a");c.href=URL.createObjectURL(a),c.download=`flying-roadster-${Date.now()}.png`,document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(c.href),4e3)},"image/png")}firstHints(){if(this.hinted.start)return;this.hinted.start=!0;let t=e=>Qn(kt.data.keys[e][0]);this.input.isTouch?this.ui.hint("<span>Push the stick <b>up</b> for gas</span><span><b>BOOST</b> down the runway</span><span>Hit the <b>ramp</b></span>",9e3):this.ui.hint(`<span><kbd>${t("forward")}</kbd>Accelerate</span><span><kbd>${t("left")}</kbd><kbd>${t("right")}</kbd>Steer</span><span><kbd>${t("boost")}</kbd>Boost</span><span><b>Hit the ramp at full speed</b></span>`,1e4)}handle(t){let e=this.car,i=this.fx,n=this.audio,r=e.pos,o=kt.data.settings.shake?1:0;switch(this.stunts.onEvent(t),t.type){case"launch":e.foldTarget=1,e.launching=!0,n.play("fold",{rate:.7}),n.play("whoosh2",{rate:.55,gain:.8}),this.launch={t:0},this.liftFx=Math.max(this.liftFx,.35),kt.data.settings.cinematic&&(this.cine={t:0,dur:2.8},this.rig.startCinematic(e,2.8),this.ui.cinematic(!0));break;case"engage":{if(hf.set(-Math.sin(e.yaw),.15,-Math.cos(e.yaw)),Ys.set(0,.6,-2.3).applyQuaternion(e.quat).add(r),i.shockwave(Ys,hf,t.fromRamp?12:7),i.burst("ignite",Ys.x,Ys.y,Ys.z,e.vel.x*.5,e.vel.y*.5,e.vel.z*.5,t.fromRamp?34:18),n.play("ignite",{gain:t.fromRamp?1:.7}),t.fromRamp||n.play("fold"),this.rig.addShake(.5*o),t.fromRamp&&(this.liftFx=1.25,this.rig.punch=1,n.play("whoosh",{rate:.8,gain:.9}),this.ui.flash(),this.cine?this.ui.cineTitle():this.ui.toast("Lift-off","big","Wheels up \xB7 thrusters on",1800)),t.wasGround&&i.burst("dust",r.x,r.y,r.z,0,0,0,14),!this.hinted.fly){this.hinted.fly=!0;let a=l=>Qn(kt.data.keys[l][0]);setTimeout(()=>{this.state==="play"&&(this.input.isTouch?this.ui.hint("<span><b>UP</b> climb</span><span><b>DOWN</b> descend &amp; land</span><span>Fly through the <b>rings</b></span>",9e3):this.ui.hint(`<span><kbd>${a("boost")}</kbd>Climb</span><span><kbd>${a("shift")}</kbd>Descend &amp; land</span><span><kbd>${a("rollL")}</kbd><kbd>${a("rollR")}</kbd>Roll</span><span>Fly through the <b>rings</b></span>`,9e3))},t.fromRamp?2600:600)}break}case"disengage":n.play("unfold");break;case"land":n.play("land",{gain:It(.4+t.impact/20,.4,1)}),t.fromFlight&&n.play("unfold",{gain:.6}),i.burst("dust",r.x,r.y,r.z,e.vel.x,0,e.vel.z,t.fromFlight?10:It(Math.round(t.impact),6,20)),this.rig.addShake(It(t.impact/28,.1,.7)*o),t.fromFlight&&!this.hinted.land&&(this.hinted.land=!0,this.input.isTouch?this.ui.hint("<span>Tap <b>FLY</b> to take off anywhere</span>",6e3):this.ui.hint(`<span><kbd>${Qn(kt.data.keys.fly[0])}</kbd>Take off again anywhere</span>`,6e3)),this.launch=null;break;case"thump":t.impact>5&&(n.play("thud",{gain:It(t.impact/22,.25,.9),vary:.2}),this.rig.addShake(It(t.impact/50,0,.4)*o));break;case"crash":n.play("crash",{gain:It(t.impact/26,.5,1),vary:.15}),n.play("crash2",{gain:It(t.impact/30,.4,.9),rate:.8,vary:.2}),i.burst("spark",t.x??r.x,t.y??r.y+.5,t.z??r.z,e.vel.x,2,e.vel.z,22),this.rig.addShake(.9*o),this.launch=null,e.launching=!1,this.endCinematic();break;case"scrape":n.play("scrape",{gain:It(t.impact/9,.3,.9),vary:.3}),i.burst("spark",t.x,t.y,t.z,e.vel.x,1,e.vel.z,8),this.rig.addShake(.25*o);break;case"near":case"under":n.play("whoosh",{rate:.55,vary:.2});break;case"barrel":n.play("whoosh2",{rate:.5});break;case"jump":t.speed>30&&n.play("whoosh",{gain:.5,rate:.42});break;case"edge":this.ui.toast("Turning back to the island","","",1800);break;case"splash":if(this.respawning)break;this.respawning=!0,n.play("splash"),i.burst("splash",r.x,.2,r.z,e.vel.x,0,e.vel.z,36),this.stunts.fail(),this.endCinematic(),this.launch=null,this.ui.toast("Splashdown","bad","Back to dry land",1600),setTimeout(()=>this.ui.fade(!0),250),setTimeout(()=>{this.car.respawn(),this.rig.snap(this.car),this.fx.reset(),this.syncModel(0),this.ui.fade(!1),this.respawning=!1},640);break;default:}}tick(t){let e=this.car;if(e.step(ns,t),this.launch&&(this.launch.t+=ns,e.mode!=="air"?this.launch=null:this.launch.t>=.34&&(e.engageFlight(!0),this.launch=null)),e.events.length){let i=e.events.splice(0);for(let n of i)this.handle(n)}this.stunts.update(ns,e)}debugAdvance(t,e={}){let i=Object.assign({steer:0,throttle:0,boost:!1,shift:!1,roll:0,fly:!1,boostPressed:!1,look:!1},e);for(let n=Math.round(t/ns);n>0;n--)this.tick(i),i.fly=i.boostPressed=!1;this.syncModel(ns)}endCinematic(){this.cine&&(this.cine=null,this.rig.cine=null,this.timeScale=1,this.ui.cinematic(!1))}syncModel(t){let e=this.car,i=this.model;i.root.position.copy(e.pos),i.root.quaternion.copy(e.quat);let n=e.mode==="fly"?Math.sin(this.world.time*2.1)*.05*(1-It(e.speed/30,0,1)):0,r=e.mode==="drive"?It(e.yawRate*e.speed*.0024,-.06,.06):0,o=e.mode==="drive"?e.boosting?-.022:e.braking?.02:0:0;i.body.rotation.z=Bt(i.body.rotation.z,r,1-Math.exp(-8*t)),i.body.rotation.x=Bt(i.body.rotation.x,o,1-Math.exp(-8*t)),i.body.position.y=n;let a=Math.sin(e.yaw),l=Math.cos(e.yaw),c=e.vel.x*a+e.vel.z*l;i.pose(e.fold,e.steer*Bt(.5,.12,It(e.speed/60,0,1)),c*t/.35,e.lift),i.setLights(e.braking?1:0,this.world.sky.v.lamps>1.2?1:this.world.sky.v.lamps*.5)}updateShow(t,e,i){let n=this.show,r=this.rig.orbit,o=this.model;n.t+=t,!e&&n.t>4.6&&(n.t=0,n.slide=(n.slide+1)%ya.length,this.ui.slide(n.slide,ya.length,ya[n.slide]));let a=e?{fly:0}:ya[Math.max(0,n.slide)];if(!e){r.yaw=Cn(r.yaw,a.yaw,1.6,t)+t*.05,r.pitch=te(r.pitch,a.pitch,1.6,t);let h=this.camera.aspect<1;r.dist=te(r.dist,a.dist*(h?1.18:1),1.6,t),r.panY=te(r.panY,h?.75:0,3,t)}n.fold=It(n.fold+(a.fly?1:-1)*t/.7,0,1),n.lift=te(n.lift,a.fly?.4:0,3,t),n.thrust=te(n.thrust,a.fly?.3:0,3,t),n.hover=te(n.hover,a.fly?.85:0,2.2,t),n.yaw+=t*(e?.12:.22),n.pos.y=is+n.hover+Math.sin(this.world.time*2)*.04*n.hover,n.quat.setFromAxisAngle(Ys.set(0,1,0),n.yaw),o.root.position.copy(n.pos),o.root.quaternion.copy(n.quat);let l=this.hall.userData.shadow,c=1+n.hover*.5;l.rotation.y=n.yaw,l.scale.set(2.5*c,1,5.6*c),l.material.opacity=1-n.hover*.55,o.body.rotation.set(Math.sin(this.world.time*1.3)*.02*n.hover,0,0),o.body.position.y=0,o.pose(n.fold,0,0,n.lift),o.setLights(0,1),this.rig.updateOrbit(t,this.showCam,e?i:null,0),this.world.update(t,this.camera,n.pos),this.fx.update(t,n,this.camera,this.gfx.h)}frame(t){requestAnimationFrame(l=>this.frame(l));let e=Math.min((t-this.last)/1e3,.1);this.last=t;let i=this.input.poll(this.car.mode==="fly"),n=this.input.takeDrag(),r=this.car,o=this.input.state,a=0;if(this.state==="play"?i.pause?this.act("pause"):i.photo?this.act("photo"):i.reset&&!this.respawning&&(this.stunts.fail(),r.respawn(),this.rig.snap(r),this.fx.reset()):i.pause?this.state==="pause"?this.act("resume"):(this.state==="photo"||this.state==="garage"||this.state==="settings"||this.state==="help")&&this.act("back"):this.state==="photo"&&i.photo&&this.act("back"),this.state==="play"){if(this.gfx.adapt(e),this.playTime+=e,this.cine){let c=this.cine;c.t+=e;let h=c.t/c.dur;this.timeScale=h<.07?Bt(1,.17,h/.07):h<.74?.17:Bt(.17,1,jt(.74,1,h)),h>=1&&this.endCinematic()}a=e*this.timeScale,o.fly&&(this.pend.fly=!0),o.boostPressed&&(this.pend.boostPressed=!0),this.acc+=a;let l=0;for(;this.acc>=ns&&l<14;)o.fly=this.pend.fly,o.boostPressed=this.pend.boostPressed,this.pend.fly=this.pend.boostPressed=!1,this.respawning&&(o.fly=!1,o.boostPressed=!1),this.tick(o),this.acc-=ns,l++;l===14&&(this.acc=0),o.fly=o.boostPressed=!1,this.syncModel(a),this.rig.update(e,r,n,{lookBack:o.look,realDt:e}),this.world.guideFocus=r.pos,this.guideDim=te(this.guideDim||0,r.mode==="fly"||r.alt>30?1:0,2,e),this.world.guideDim=this.guideDim,this.world.update(a,this.camera,r.pos),this.world.guide.passed>=0&&(this.audio.play("whoosh2",{rate:1.1+this.world.guide.passed*.06,gain:.55}),this.audio.play("tick",{rate:.8+this.world.guide.passed*.1,gain:.6})),this.liftFx=Math.max(0,(this.liftFx||0)-e*1.5),this.gfx.radial=Math.min(1,this.liftFx),this.fx.update(a,r,this.camera,this.gfx.h),this.ui.hud(r,this.stunts),this.minimap.draw(r),this.hinted.start&&!this.hinted.startDone&&(r.speed>28||r.mode!=="drive")&&(this.hinted.startDone=!0,this.ui.hint(null))}else this.state==="menu"||this.state==="garage"?(this.world.guideFocus=null,this.gfx.radial=0,this.updateShow(e,this.state==="garage",n)):this.state==="photo"?(this.rig.updateOrbit(e,r,n,0),this.world.update(0,this.camera,r.pos),this.world.sky.update(e,this.camera,r.pos)):this.world.update(0,this.camera,r.pos);this.audio.update(e,r,this.state==="play",this.timeScale),this.gfx.render()}},uf=new jc;window.__game=uf;uf.boot().catch(s=>{console.error(s);let t=document.getElementById("load-tip");t&&(t.textContent="Could not start: WebGL is unavailable on this device.")});})();
