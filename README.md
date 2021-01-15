# Polaris [![NPM version](https://badge.fury.io/js/polaris.svg)](https://npmjs.org/package/polaris)

> myScienceWork assessement work

## Installation

```sh
$ docker-compose up --build
```
Seeding database 
```sh
$ cd serverApp
$ npm run db:seed
```
if Elasticsearch throw an error 137, this cammand might help to solve it
```sh
$ ./script/setVMCount.cmd
```
## Usage

```js
http://localhost:8080

```
here is users present in the database

```json
{  
	"firstname": "Mike",
	"lastname": "Pratellesi"
},
{
	"firstname": "Vera",
	"lastname": "Collini"
},
{
	"firstname": "Ida",
	"lastname": "Vargas"
},
{
	"firstname": "Alex",
	"lastname": "Hashimoto"
},
{
	"firstname": "Ethel",
	"lastname": "Bonanni"
},
{
	"firstname": "Eva",
	"lastname": "Fox"
}
```

somme publications are in there 

```json
[{
	"titre": "Miliku erko muwbudpu.",
  }, {
	"titre": "Owibomac jemod upu.",
  }, {
	"titre": "Lezzi pak oti 2",
  }, {
	"titre": "Lezzi pak oti.",
  }]
```

## License

MIT © [Afjnik hassan](https://www.linkedin.com/in/hassan-afjnik-06b569142/)
