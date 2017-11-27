# TypeScript and RollUp

I have 3 component classes in `src/mod1.ts`, `src/mod2.ts`, and `src/mod3.ts` files. In `src/mod1.ts` and `src/mod2.ts` files uses the property decorator and `src/mod3.ts` uses extend class. 

I have used one class in `demo/sample.js` file. When i bundle this file, i can see some unwanted classes in bundled output(TreeShaking is not working)

## Install npm

```
npm install
```

## Build Application

```
npm run build
```

