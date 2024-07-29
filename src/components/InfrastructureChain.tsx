import React from "react";

type ChainItem = {
  name: string;
  image: string;
};

type Chain = {
  name: string;
  image: string;
  items: ChainItem[];
};

const endToEndChain: Chain = {
  name: "Our End-to-End Model",
  image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAe1BMVEUAAAD///////////////////////////////////////////////////////////////860Un///84z0g5z0k50kk60Ug60Uk50En///////9Az0U50EhR11503oA60ko50Ur///860Unn+emj6qpr3XdG1FTy/PSE4o3d3BnnAAAAIXRSTlMAIN/vvxBAn4BgkHDPUK+gf+8wIHC/gN+/sF8QoIign2+FL/vdAAADoklEQVRYw8WZ6XLbIBSFETsSyPKeNklbyUna93/CphYIYS4GKZ7p+ZUZx58Od0Vj9J9UGSVr8U+yMbsHAHlHSR9KC1WtBzIuSA9LN+u4Ve2IsKhCTs+n43kYtsfDPnNs2meFR+z+OEz6eQdb0ZjwKQJhf22HmbaHVCy7+bdJ25iKuafxptYB9nW40Qk+OZ4FTnLgoWYzPfVtiAR57bzHmicLQ41+Lx8xdBvFldEJKVk+lX8GQMfbDGEYmYjTZQD1DDNpWW3/8KBkrnbE2mxQmZ5g6BHwiYuHxhaGnmOmZqhUQ0I+75a5Yehx0Noy0QKdYebWfd6MzDZPKk9URcYcsUXQk8PAjUpH5sLR+wxDbZ+q8fA8Ayk7/0tQTRIt1X6bHijdeHi0XAc4ot6oCVcU1iIdYkUxVWCuTsEIFfFoIVDD+qLurl6DCHy8IqvRaGCL2mkFM00/S+z+xTPfL9IdJTbKeqsqYXRUbdN1ePq0e35/+933OnDFg9Pfh276PjLiOR6gUSA3WREoaaEq3AQz9yr63I8CCUMZBmuQeB8teE5pn+oVFYeuwFDziU+hCyS7t/XUGLz4/E3w15fFrv6+TdHj6BGiLqjiCl1JAYNaWbp+DFS5GWLj8BBVLj++Hr8u5mAW/hgR27xQPyFuShDc3JY/nkN51C8FO7CLj6jHRoKg9ZS7yjS1oNhdsjQV0nA2ywphcaHC0Pb670Jo0oMimrZC0LEo01AVOS1V6BSnoaqcqe8kSkblVigRQt2YJsBntBjKgY6SLgzg3M8LQwPVuFRHg7FMAjKz8+MqkMzz4q+5zTRdDNQqqxLqUj2lWqAVUcXg5KunfiXxZsiLJ2a0X6zxEs5JwkaYr4M2muJkKbOa3+mIGzehdmmv8LuRmKdc+geXR0Cm7kJs3uqExdRNCkmCzQDeSGly+SnYrGDQ9SpsB+6slmEph5fLzRChtmpBmQ2ZEyWDV35UujzzbrZTUlAqRGNAovcl4vs2ZmitOmDAMLLwHRo+vAQHSLeS6a7r8AD5vobJsD18/MFqKtPJt45db6mrmD4h8FxuFsbTMjG7+8rVrciRu9ClqW1VzGyIZ2aoWBWGs+1hJryaRVVq0zPz/5fHcjoNGZYPfAmWKb9u64I4zcY9VTCX18Qvf54BAnOZSs7Co6jgd4qalfaIvNlIVMirRKsJsARggSuv9CeJRViSQVKThcAJTorUfPVAVy3kV1vieu1MPaWHYCoans/3X0u/KVUtyWOXAAAAAElFTkSuQmCC",
  items: [
    {
      name: "Natural Gas",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAIO/ff0C/EJ9wMFCQYM+vj180YKxHAAAB7ElEQVRIx+WX3ULDIAyFCxkwSv/k/R9W4DhxTYGCd5obZeNr0tPklE1/N8SvaO1pHadnH+I5XIH1MWgexDePeIzpFsjlOcxHUkwP8EPJn+Gvk0M8peQh5hH+yEziXQ+cbpleizUspOijAeSlToI4cZP2asqxh7UNtPRkbt23f+t2Q7Ga1MZHAzY6Vn6aFYXyNaqqhKBIs0YHKCQULQW6hMRlF2mosjZE06bQwyqJQHV6KU8QptjVaFv0Hi/NZGSorkzLgrAQ32LTXKQr3oK8pjBAc4OellT9pC/FM8RF4dUriCfKE1qtfsEjWK+eC7V8H6ITbIg7W3sQN2zdCs5WDbOTwlXk6Zu1lry9V7OC6k9g5qL2WLhiLeN6cMfrGccd1OgofhxXDFc9OM8leqTjbWMKLjNfmcfO/YauetY889mE9QizAiaR9DGOgnKNz6z/is2cZpNlgoFy192tBN+azeWU3sGz8c7STWMQb7tArd//2UZyXNW+rR75SlKwIw+/+7xLIUdeLFmRwmTbH69WnXNgJU3eYwrnQPD8BtXrvj5qZySzgedvAvJ+R+UYjQovLQyd9aTQkV5bxxq/iSx79tZD4sjTGkaEO1nhzbO9I+ycTz0VYzF33CBdQDBcq5tWaMnv54nQa9cvsH8QnxZAJsVsD1vTAAAAAElFTkSuQmCC",
    },
    {
      name: "Gas Generator",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAvx9gn0CA3xCgMK/PkO9wUNDrU84AAAFBSURBVFjD7dVhj4MgDIDhUigw1Gn//5+9Jg0OJ3fqTZct4f1EDXlMJERofXvRHir+CiEfCv+Cwu42IIKd4RZ0898GJeccngERM9NHQUlOnj7qY++GYjwH6s3OeoGuv7TR1eqYO1crwqH0Kp9QCswhve7EwNI9wsEMr6N052p0DLoD/Avq7CLP3Ivu8zwwW20L8rDMszSUtx+0oxCMzBbOgJAZ3w9xJQMQuKw4Uy98Di+CRlp2U2jIs1fIkNQrZGU5riDZWpa8QjbpTFYhh96DUQitn2gNTa6MMkQ6TzPk3AyNzlYgWJahPGdIlgqp0KAGNahBV0GIcQUhFlBEnCHZXIf0Zc8QMtMDIuYZkvF6KBE+Q5EoPiCZZkg2ryHjlvUKzY+NQsFJQaFOlt1VP0hTaQDoTBnAkJcW0OQitFqt9/UDmLI+TuZwCZkAAAAASUVORK5CYII=",
    },
    {
      name: "Data Center",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAvx9gn0CA3xCgMK/PkO9wUNDrU84AAAFBSURBVFjD7dVhj4MgDIDhUigw1Gn//5+9Jg0OJ3fqTZct4f1EDXlMJERofXvRHir+CiEfCv+Cwu42IIKd4RZ0898GJeccngERM9NHQUlOnj7qY++GYjwH6s3OeoGuv7TR1eqYO1crwqH0Kp9QCswhve7EwNI9wsEMr6N052p0DLoD/Avq7CLP3Ivu8zwwW20L8rDMszSUtx+0oxCMzBbOgJAZ3w9xJQMQuKw4Uy98Di+CRlp2U2jIs1fIkNQrZGU5riDZWpa8QjbpTFYhh96DUQitn2gNTa6MMkQ6TzPk3AyNzlYgWJahPGdIlgqp0KAGNahBV0GIcQUhFlBEnCHZXIf0Zc8QMtMDIuYZkvF6KBE+Q5EoPiCZZkg2ryHjlvUKzY+NQsFJQaFOlt1VP0hTaQDoTBnAkJcW0OQitFqt9/UDmLI+TuZwCZkAAAAASUVORK5CYII=",
    },
    {
      name: "HPC",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA378gYJ9wEIDvQK+Qj88wUNGtp4QAAAHWSURBVEjH7ZTdsqsgDIUD4a+AWt//ZQ9hMY2O9qizL/deF7XFSfIlWZR+k5Zp4qcx/FrX1/IwyKxN5llMWrvSI7gWUEr7WJ7BGY6tLfsMzhGF9ggP4FDCtgnenbttQdyj7wM6HVu6C8hms6D5JqAHHJTR3h24Gt6Uk8jV9vN9C67NOq5QMg0w3oBzi7FUeoxhAZyu4fwxTf5fTOz+IS6JghX5SOImEy8Kuf7gTgc34fFFeN+Ssg1UragwfBEu7ms5XdyVvzPxPFExopnVVd81S9eNclmhd5/N98mFxPDNFGsg50UpToDLycUzK8DRdb8WBlxYT+cuGcXRgjPvLz4ynhhj7KUAMO0GgwEqwTZjcTivUlFT1eH8eRCoQrdPEvAOaD8X34DYH3bcDxyslwAYNq5KPZRCJ1D54e2M/8eCO8RSAYxu1LU7nxrkqP08wk0exz1UtOgsQOX0awBXHnCacfQMTZuyWcgwgQGHjJD5LIvVxQAsmAwq+G0j+QOIkUHoJ/dRAVRHpj1jRbTRG+BpNqFn1OVoz2wApypbG2lG7Zmxop2i9shHw83Ss/TrdhK/Awk3wu8kd4Fe65mcBh1lzs8Na98HScfOHlSZhtgfXpZAf/qJ/gFpYyYzly50KQAAAABJRU5ErkJggg==",
    },
  ],
};

const traditionalChain: Chain = {
  name: "Traditional Model",
  image:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////+nr6inr6j///+nr6eosKmnr6imr6imrainr6ifr5/BxsKxuLKosaj///+nr6j09fTO0s69w72stK3Y3Nkl9pSAAAAAHnRSTlMA3yAQ779AYICfkHDPUK8wf++/oCCA33BwnxCgj28YB/cmAAADsUlEQVRYw8WY6XabMBCFrV0CgXdnaSuy9P2fsYkRDLJGSEDO6f2VE5yPWa/k7P6TaKN0Zb6l62a/ncfkQXAXyhpFtxANd7hsvY67r4CISajxo6/X063rjqfnyzxSCpcV6bGXUzfqZQZLRUz4Esewf47dRMfnVC0PbiLe1g1lw9tkXdkA+7t70BXPnEwKpyXy0uY8xvy3i4TFCmHySiYHQ/Xxvn3G0GNUVyZGpGb5Vr53iE6PHSIFSKjTW4fqFWeKstn+BaBkr/bch1nvynTCoSckTlJsGkcceouZlu1K1SUEfffMMzC3QyvP3C3QDWceh+d1z2zzpPJGUd73iC2CXgGELaromQut9xWH+j1V7i7Y9S35vwTTpHdLdTnihgLORHbL9RRDn4JAm8AGKmJNusRKEKHQXl0DCzWxtXBsYWGoD/dYgwp8jmbSBxqEJbxb4czGTRp7eQHmx5seUokDZc6LJgLtVfl2PZ2+wr19vH87RxCVDLKfh56diwIBDgBs+GeDs+Lpaw9V4UkwiV5Fz8EKNA5lBJ1BDnG0aJ4a3goKh8NStNRy5AvsAjnnLlJBE8L86+CnzWJ8cM8aYt4sMRTV3KHbgVBU6un2Z6Bq8BBfhx8RHfoD87hdbIBtaz42/sZD1ePENawAIZvH8SdTqIz2peAMPMQpWr9ICLSC3uW6wsOMBAoFNyBl80PTUIXMMFLV7KcICsXMEBQD7EyjNDJuYp65B+8HDTbNkWeiIH+DjY2P0JcB8/0qv5EEM9TGt5pjxuhkNlCDBbMHuwqkcxfLOjps4WQaLwYKDdXMd8np1EAw+PM4EpNgcvQ0pdAKC0WN7z0txXapZzqJe/TDwYp9qVKRaVYOkk9NosS/QVDuehkZIA88xaTTneFgN0HhiPMiWvZPqTIeiU2xmbZcw4uxCngwsYQ7kE7dhdh01TmLqWeXEG9SVmjCAmuszwRlGoZdr8J1kBBqCVag63t4tDYxZyDNmU+JmuEGE42uhN+g2itthDCmTh+yIt7AMxjIOh0Qg2F84XdoPHmNGshhJROu65iBqDVMRiB59IFawbSQPO67Tq1ltskTYvkNkFo3NzraLe8W+C4UFKcKWsysOTAzVKIKy9k6YGapztDSMIGZ/xxg8/8LFyxf+BIsUyPSVQV1mti9UDhXVuCGJPa2rC8LLSE5OPwgTFa6I9oF4sLou0xreeYQABUfeSCYvEVYkkGKJgvBG5wUr+RqQ1ctR4gWiCu1b3RriY+PCFPLfL//Abnm5I4UJ4EjAAAAAElFTkSuQmCC",
  items: [
    {
      name: "Natural Gas",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAIO/ff0C/EJ9wMFCQYM+vj180YKxHAAAB7ElEQVRIx+WX3ULDIAyFCxkwSv/k/R9W4DhxTYGCd5obZeNr0tPklE1/N8SvaO1pHadnH+I5XIH1MWgexDePeIzpFsjlOcxHUkwP8EPJn+Gvk0M8peQh5hH+yEziXQ+cbpleizUspOijAeSlToI4cZP2asqxh7UNtPRkbt23f+t2Q7Ga1MZHAzY6Vn6aFYXyNaqqhKBIs0YHKCQULQW6hMRlF2mosjZE06bQwyqJQHV6KU8QptjVaFv0Hi/NZGSorkzLgrAQ32LTXKQr3oK8pjBAc4OellT9pC/FM8RF4dUriCfKE1qtfsEjWK+eC7V8H6ITbIg7W3sQN2zdCs5WDbOTwlXk6Zu1lry9V7OC6k9g5qL2WLhiLeN6cMfrGccd1OgofhxXDFc9OM8leqTjbWMKLjNfmcfO/YauetY889mE9QizAiaR9DGOgnKNz6z/is2cZpNlgoFy192tBN+azeWU3sGz8c7STWMQb7tArd//2UZyXNW+rR75SlKwIw+/+7xLIUdeLFmRwmTbH69WnXNgJU3eYwrnQPD8BtXrvj5qZySzgedvAvJ+R+UYjQovLQyd9aTQkV5bxxq/iSx79tZD4sjTGkaEO1nhzbO9I+ycTz0VYzF33CBdQDBcq5tWaMnv54nQa9cvsH8QnxZAJsVsD1vTAAAAAElFTkSuQmCC",
    },
    {
      name: "Gas Generator",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAvx9gn0CA3xCgMK/PkO9wUNDrU84AAAFBSURBVFjD7dVhj4MgDIDhUigw1Gn//5+9Jg0OJ3fqTZct4f1EDXlMJERofXvRHir+CiEfCv+Cwu42IIKd4RZ0898GJeccngERM9NHQUlOnj7qY++GYjwH6s3OeoGuv7TR1eqYO1crwqH0Kp9QCswhve7EwNI9wsEMr6N052p0DLoD/Avq7CLP3Ivu8zwwW20L8rDMszSUtx+0oxCMzBbOgJAZ3w9xJQMQuKw4Uy98Di+CRlp2U2jIs1fIkNQrZGU5riDZWpa8QjbpTFYhh96DUQitn2gNTa6MMkQ6TzPk3AyNzlYgWJahPGdIlgqp0KAGNahBV0GIcQUhFlBEnCHZXIf0Zc8QMtMDIuYZkvF6KBE+Q5EoPiCZZkg2ryHjlvUKzY+NQsFJQaFOlt1VP0hTaQDoTBnAkJcW0OQitFqt9/UDmLI+TuZwCZkAAAAASUVORK5CYII=",
    },
    {
      name: "Power Grid",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMA3x9Av2CA7xDPoDCfcJBQr7CPbx9H9XAAAAMxSURBVFjDxNXdduogEIbhDpnwY8Ck9r3/a92SySa2wVbrQb8TEVeesBgG3/4g7HG/NRx7hj9FBgiuJsH4AiLrQF9AZkjrYIHy9NOqWqsxgq7fT+Dtl+yfKW1Fyg1yrp8xQ34S8fZIG8QEpPiY4fuIE+D0oJExpG2Fbc4UqvHgCUsc8+Spm4SXkQ94FXEK4N0WgexqBsBtiT8tIwBhf5VUccWBbl+0xP8zCnA9qi2BTYlA7Bi0uBsilOOd5G3kvkUGI9oyWmJVTQGmboMGuQaY42yEVK5luFTA2b5IryqtQRNoMGL8JAhr3kwRmLvt8X5d8CxY0k5MZQlsCdYxNWMX0Utii65rddNYcmqAZpA6LV8R572/5CUFWsQnFZHAbbREu9ia4jtVsYRQm1w+z+l5iG3favx9JOQyxALvDQmynMepnaoCalhN3hGXgezHAHN7Wy3xaXLxuG+5GeTD1dcKP4Nst88hZ8hmyLkuuKUooKpA0msSBNUAogek0mY42579h7s5IAt4MyqVfocoLGbYf2HLMK4pAEsdAR8210PMMOROE49tn7sRM9qt1EcYrEzfIeFf63WzhCAMAwGYFrD8iY7m/Z9V0wX2kKTjwZwch/lG4pKGNURGkVTqFSk+8EUuZbI/GGFcqzI0kbEcChAnjFVJ0daAwboeSnFG267HfFXEDSv7AMVtHXIOJVoWVkVOxRttA24CiocwG1C8/l/tfOij1ESgiIPMeovX2mIBziQqpnXoEwxJDQT1chEcRjCkWIAHAj6h/xbJauA5DZGNhkU0AjCWzLPazRIMjDYbARgm0CZLN442++/BYKDdwQYDoy3Z41xg+LOAWYLhTqWRhkZmDBEYaEAxjVeD10YzaQhGG5F5Yv8CBEaALAKFy79Tp8FkGaRAQaZi5N45CCfBAiVEJuHE8pKAZh4KY2RTnaDYJPAbKIyRTXWmYqdSqQiUh48gXlV52SSwS1B0+IUIlG2y75LcslXRimYSX9lMnM7kUMkRospS42Li1OMOqOTmYNtV2YRJyP233rqCnzVrpPRDx2u0Nt2eUIJ69qiflpybNCv9B9lTWFwZUrOG7h/1AX5baeK3aU9IAAAAAElFTkSuQmCC",
    },
    {
      name: "Utility",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAMAAABEH1h2AAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA32C/n4BAIBDvzzAfr3CPUJDrkumQAAABYElEQVRIx+3TjYqlMAyG4S9NmzR2/Znc/8VuPMeBs6sMGAYGhvOCiCWPUrB49+5Hkkr3m6rg0erJ1v7Q6WagxG2Sjpt1oYAFHLojU0iGuStSaXwe7oaI/CL62ofBMURUT9kNzjjFN7k0QZ43XmhJ8054Xrw37nKdAFjwtqd3ObjJWvN77x9z62l+aue9XNb/51ZPEQHql8kL/+qnVb5svPJEv4vrak5V8axr1KF7z4d/lk58WOsYlQ5fjJkqfOKJUInZpPjnEvuJH2et8cEZqDH7BxK8ASSFgBZLAj3xwhg15mEjwz8aZNYpTEnxBVIRZk7xjQ9OmuGdyoO3GRkOpXkGV9Ich87m3jqS/Nj7N/FJhGN2kyV4FbHgIvsbFylXfEw84bONowUcVTSOxssSf9+Js57kFpzcW04Xd0Jz95LREh+v6Bae291WDmYKDPNktiFSzmkeeKZbuZ/i3btcfwHl3i5iCOBBGAAAAABJRU5ErkJggg==",
    },
    {
      name: "Data Center",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAvx9gn0CA3xCgMK/PkO9wUNDrU84AAAFBSURBVFjD7dVhj4MgDIDhUigw1Gn//5+9Jg0OJ3fqTZct4f1EDXlMJERofXvRHir+CiEfCv+Cwu42IIKd4RZ0898GJeccngERM9NHQUlOnj7qY++GYjwH6s3OeoGuv7TR1eqYO1crwqH0Kp9QCswhve7EwNI9wsEMr6N052p0DLoD/Avq7CLP3Ivu8zwwW20L8rDMszSUtx+0oxCMzBbOgJAZ3w9xJQMQuKw4Uy98Di+CRlp2U2jIs1fIkNQrZGU5riDZWpa8QjbpTFYhh96DUQitn2gNTa6MMkQ6TzPk3AyNzlYgWJahPGdIlgqp0KAGNahBV0GIcQUhFlBEnCHZXIf0Zc8QMtMDIuYZkvF6KBE+Q5EoPiCZZkg2ryHjlvUKzY+NQsFJQaFOlt1VP0hTaQDoTBnAkJcW0OQitFqt9/UDmLI+TuZwCZkAAAAASUVORK5CYII=",
    },
    {
      name: "HPC",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAMAAADypuvZAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA378gYJ9wEIDvQK+Qj88wUNGtp4QAAAHWSURBVEjH7ZTdsqsgDIUD4a+AWt//ZQ9hMY2O9qizL/deF7XFSfIlWZR+k5Zp4qcx/FrX1/IwyKxN5llMWrvSI7gWUEr7WJ7BGY6tLfsMzhGF9ggP4FDCtgnenbttQdyj7wM6HVu6C8hms6D5JqAHHJTR3h24Gt6Uk8jV9vN9C67NOq5QMg0w3oBzi7FUeoxhAZyu4fwxTf5fTOz+IS6JghX5SOImEy8Kuf7gTgc34fFFeN+Ssg1UragwfBEu7ms5XdyVvzPxPFExopnVVd81S9eNclmhd5/N98mFxPDNFGsg50UpToDLycUzK8DRdb8WBlxYT+cuGcXRgjPvLz4ynhhj7KUAMO0GgwEqwTZjcTivUlFT1eH8eRCoQrdPEvAOaD8X34DYH3bcDxyslwAYNq5KPZRCJ1D54e2M/8eCO8RSAYxu1LU7nxrkqP08wk0exz1UtOgsQOX0awBXHnCacfQMTZuyWcgwgQGHjJD5LIvVxQAsmAwq+G0j+QOIkUHoJ/dRAVRHpj1jRbTRG+BpNqFn1OVoz2wApypbG2lG7Zmxop2i9shHw83Ss/TrdhK/Awk3wu8kd4Fe65mcBh1lzs8Na98HScfOHlSZhtgfXpZAf/qJ/gFpYyYzly50KQAAAABJRU5ErkJggg==",
    },
  ],
};

interface ChainProps {
  chain: Chain;
}

const InfrastructureChain: React.FC<ChainProps> = ({ chain }) => {
  return (
    <div className="flex-grow bg-slate-400 rounded-lg p-2">
      <div className="flex items-center space-x-2">
        <img
          src={chain.image}
          alt={chain.name}
          className="w-6 object-scale-down"
        />
        <p className="text-white smalltext text-center">{chain.name}</p>
      </div>
      <ul className="flex justify-between mt-2 mx-2">
        {chain.items.map((item, index) => (
          <React.Fragment key={item.name}>
            <li className="flex flex-col items-center h-16 justify-center">
              <div className="flex items-center justify-center h-8 w-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-scale-down"
                />
              </div>
              <p className="text-white minitext text-center">{item.name}</p>
            </li>
            {index < chain.items.length - 1 && (
              <li className="flex mx-2 h-16 items-center">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA3+8gEL9AYM+QgDCfcFCv3JZjzAAAAcNJREFUSMfNltuywyAIRSMqxmv9/6891XZCDF6S89T95DguQER0+x0pj2959Qjy8QX5K9DR33Tl9nyRMPIGBrmnsEDjF4PdRmOSiVYfXieY1B8qoDrFkMIH1UOnXlTMKWbQiep0kCVTw7SqG0v1CqbLVaO4DZSq0w7poXBykoBCgu9O72p6UnvPtC6TnOOkvpwfMzaMNrIZ3JbCss1zXCXZYbsh+17oTg4HgfpXUJdtQuPSVDtcgifaNUvLDnuZgXpEzKU4Ihrt0GRO2lMaI43XJNZY6fAZMyIVUBHQcEqSG/jaKJdpu03aI5NIdTQnKSP+ABPdWH0VtKQpy48RUiADuXNazQPQcjCVETU6cRXkppTT4cdPk0M9hZWLpEDmHG1GUQEsOF4ANFxzzI2jtM45KnIa2zlHCmcvn37AJTgn6SJTP2AC4vpdRg1cpl3LTmeVbQuyd9tjaK71qiFTdwL5zyfA8Udnv/PoiKsxePrMUUUUcvawFi7j6Cn3Iw7pKedkkes6VTYTNzAqjBp8twAn6a5owMaeBfZBYnLHn9EaREzGavjOxMUZh/z0E0ioaBD6pa2FJUAKGrcnkpiMMSi3n9Ef8sQoJ7NmHUoAAAAASUVORK5CYII="
                  alt="arrow"
                  className="w-6 object-scale-down"
                />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export { InfrastructureChain, endToEndChain, traditionalChain };
