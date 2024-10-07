var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "sec-week-1",
  "level": "1",
  "url": "sec-week-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Week 1",
  "body": " Week 1  Problems For week 1, due 4pm Wednesday 9th October .   Arc Lengths  Find the arc length of along .   cosh along      along      along      (H)  ln along       The arc length formula is given by The following identities are also useful These combine to give We also have and even     Part (c).  Use the substitution     Part (d).  Nobody knows.      Question 3   (H) Suppose a chain of length is suspended between two points and , both of which are at height . The shape of the chain is then given by with . Assume the lowest part of the hanging chain is at the point so that .   "
},
{
  "id": "sec-week-1-3",
  "level": "2",
  "url": "sec-week-1.html#sec-week-1-3",
  "type": "Problem",
  "number": "1.1.1",
  "title": "Arc Lengths.",
  "body": " Arc Lengths  Find the arc length of along .   cosh along      along      along      (H)  ln along       The arc length formula is given by The following identities are also useful These combine to give We also have and even     Part (c).  Use the substitution     Part (d).  Nobody knows.    "
},
{
  "id": "sec-week-1-4",
  "level": "2",
  "url": "sec-week-1.html#sec-week-1-4",
  "type": "Problem",
  "number": "1.1.2",
  "title": "Question 3.",
  "body": " Question 3   (H) Suppose a chain of length is suspended between two points and , both of which are at height . The shape of the chain is then given by with . Assume the lowest part of the hanging chain is at the point so that .  "
},
{
  "id": "sec-week-2",
  "level": "1",
  "url": "sec-week-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Week 2",
  "body": " Week 2  Text of section.   what is this?    hmmm    hmmmmm    here you go   question 1 hello   Arc Lengths  Find the arc length of along .   cosh along      along      along      (H)  ln along       The arc length formula is given by The following identities are also useful These combine to give Finally,     part (c)  Use the substitution     "
},
{
  "id": "sec-week-2-3",
  "level": "2",
  "url": "sec-week-2.html#sec-week-2-3",
  "type": "Question",
  "number": "1.2.1",
  "title": "",
  "body": " what is this?  "
},
{
  "id": "sec-week-2-7",
  "level": "2",
  "url": "sec-week-2.html#sec-week-2-7",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "question 1.",
  "body": "question 1 hello "
},
{
  "id": "sec-week-2-8",
  "level": "2",
  "url": "sec-week-2.html#sec-week-2-8",
  "type": "Problem",
  "number": "1.2.3",
  "title": "Arc Lengths.",
  "body": " Arc Lengths  Find the arc length of along .   cosh along      along      along      (H)  ln along       The arc length formula is given by The following identities are also useful These combine to give Finally,     part (c)  Use the substitution    "
},
{
  "id": "sec-arc-length-derivation",
  "level": "1",
  "url": "sec-arc-length-derivation.html",
  "type": "Section",
  "number": "2.1",
  "title": "Arc Length",
  "body": " Arc Length  Text of section.  "
},
{
  "id": "sec-normal-dist-derivation",
  "level": "1",
  "url": "sec-normal-dist-derivation.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Normal Distribution",
  "body": " The Normal Distribution  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
