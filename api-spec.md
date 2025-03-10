## YTS.mx API Endpoints

### `https://yts.mx/api/v2/list_movies.json`
Used to list and search through out all the available movies. Can sort, filter, search and order the results.

Query Parameters:
| Parameter |	Required | Type |	Default |	Description |
|-----------|----------|------|---------|-------------|
| limit	| ✖️ | Integer between 1 - 50 (inclusive)	| 20 | The limit of results per page that has been set |
| page	| ✖️ | Integer (Unsigned)	| 1 | Used to see the next page of movies, eg limit=15 and page=2 will show you movies 15-30 |

Response Type: Object

| Field    | Type                       |
|----------|----------------------------|
| status | String |
| status_message | String |
| data | JSON |
| @meta | String |

Example Query:
https://yts.mx/api/v2/list_movies.json?limit=2&page=1

Example Output:
```
{
  "status": "ok",
  "status_message": "Query was successful",
  "data": {
    "movie_count": 66249,
    "limit": 2,
    "page_number": 1,
    "movies": [
      {
        "id": 67442,
        "url": "https://yts.mx/movies/strike-the-village-that-fought-back-2024",
        "imdb_code": "tt31652548",
        "title": "Strike! The Village That Fought Back",
        "title_english": "Strike! The Village That Fought Back",
        "title_long": "Strike! The Village That Fought Back (2024)",
        "slug": "strike-the-village-that-fought-back-2024",
        "year": 2024,
        "rating": 0,
        "runtime": 60,
        "genres": ["Documentary"],
        "language": "en",
        "background_image": "https://yts.mx/assets/images/movies/strike_the_village_that_fought_back_2024/background.jpg",
        "small_cover_image": "https://yts.mx/assets/images/movies/strike_the_village_that_fought_back_2024/small-cover.jpg",
        "medium_cover_image": "https://yts.mx/assets/images/movies/strike_the_village_that_fought_back_2024/medium-cover.jpg",
        "large_cover_image": "https://yts.mx/assets/images/movies/strike_the_village_that_fought_back_2024/large-cover.jpg",
        "torrents": [
          {
            "url": "https://yts.mx/torrent/download/D002390531A80E32F79430442B7F54A84AF8F21C",
            "quality": "720p",
            "type": "web",
            "size": "541.65 MB",
            "date_uploaded": "2025-03-10 16:31:18"
          },
          {
            "url": "https://yts.mx/torrent/download/1592FEA5A235635E1BCF34078B888B8E4B0908E2",
            "quality": "1080p",
            "type": "web",
            "size": "1003.94 MB",
            "date_uploaded": "2025-03-10 17:09:59"
          }
        ]
      },
      {
        "id": 67440,
        "url": "https://yts.mx/movies/evil-bong-666-2017",
        "imdb_code": "tt6462084",
        "title": "Evil Bong 666",
        "title_english": "Evil Bong 666",
        "title_long": "Evil Bong 666 (2017)",
        "slug": "evil-bong-666-2017",
        "year": 2017,
        "rating": 3.7,
        "runtime": 65,
        "genres": ["Comedy", "Horror"],
        "language": "en",
        "background_image": "https://yts.mx/assets/images/movies/evil_bong_666_2017/background.jpg",
        "small_cover_image": "https://yts.mx/assets/images/movies/evil_bong_666_2017/small-cover.jpg",
        "medium_cover_image": "https://yts.mx/assets/images/movies/evil_bong_666_2017/medium-cover.jpg",
        "large_cover_image": "https://yts.mx/assets/images/movies/evil_bong_666_2017/large-cover.jpg",
        "torrents": [
          {
            "url": "https://yts.mx/torrent/download/C05F62D0ADF0C67838EE9AAD8D2A2A9DD5CC0AB2",
            "quality": "720p",
            "type": "web",
            "size": "603.85 MB",
            "date_uploaded": "2025-03-10 15:54:40"
          },
          {
            "url": "https://yts.mx/torrent/download/E3F80E81B671DD3AEFB205DCE40D9781BE2030F5",
            "quality": "1080p",
            "type": "web",
            "size": "1.09 GB",
            "date_uploaded": "2025-03-10 16:37:43"
          }
        ]
      }
    ]
  },
  "@meta": {
    "server_time": 1741624614,
    "server_timezone": "CET",
    "api_version": 2,
    "execution_time": "0.23 ms"
  }
}
```

----

### `GET https://yts.mx/api/v2/movie_details.jsonp`
Returns the information about a specific movie.

Query Parameters:
| Parameter |	Required | Type |	Default |	Description |
|-----------|----------|------|---------|-------------|
| movie_id or imdb_id	| ✔️ | Integer (Unsigned)	| null | The YTS ID of the movie or the IMDB ID |


Response Type: Object

| Field    | Type                       |
|----------|----------------------------|
| status | String |
| status_message | String |
| data | JSON |
| @meta | String |


Example Query:
https://yts.mx/api/v2/movie_details.jsonp?imdb_id=tt0172495

Example Output:
```
{
  "status": "ok",
  "status_message": "Query was successful",
  "data": {
    "movie": {
      "id": 1317,
      "url": "https://yts.mx/movies/gladiator-2000",
      "imdb_code": "tt0172495",
      "title": "Gladiator",
      "title_english": "Gladiator",
      "title_long": "Gladiator (2000)",
      "slug": "gladiator-2000",
      "year": 2000,
      "rating": 8.5,
      "runtime": 155,
      "genres": ["Action", "Adventure", "Drama", "Romance"],
      "like_count": 606,
      "description_intro": "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.—Chris \"Morphy\" Terry",
      "description_full": "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.—Chris \"Morphy\" Terry",
      "yt_trailer_code": "P5ieIbInFpg",
      "language": "en",
      "mpa_rating": "",
      "background_image": "https://yts.mx/assets/images/movies/Gladiator_EXTENDED_2000/background.jpg",
      "background_image_original": "https://yts.mx/assets/images/movies/Gladiator_EXTENDED_2000/background.jpg",
      "small_cover_image": "https://yts.mx/assets/images/movies/Gladiator_EXTENDED_2000/small-cover.jpg",
      "medium_cover_image": "https://yts.mx/assets/images/movies/Gladiator_EXTENDED_2000/medium-cover.jpg",
      "large_cover_image": "https://yts.mx/assets/images/movies/Gladiator_EXTENDED_2000/large-cover.jpg",
      "torrents": [
        {
          "url": "https://yts.mx/torrent/download/3FBFACC87CC7108B60BB64D5C3A38FBB8226B21E",
          "hash": "3FBFACC87CC7108B60BB64D5C3A38FBB8226B21E",
          "quality": "720p",
          "type": "bluray",
          "is_repack": "0",
          "video_codec": "x264",
          "bit_depth": "8",
          "audio_channels": "2.0",
          "seeds": 0,
          "peers": 0,
          "size": "1.10 GB",
          "size_bytes": 1181116006,
          "date_uploaded": "2015-10-31 23:40:53",
          "date_uploaded_unix": 1446331253
        },
        {
          "url": "https://yts.mx/torrent/download/9BFAB920305925F9954D8C4B9DEDCD4C6B12FFEA",
          "hash": "9BFAB920305925F9954D8C4B9DEDCD4C6B12FFEA",
          "quality": "1080p",
          "type": "bluray",
          "is_repack": "0",
          "video_codec": "x264",
          "bit_depth": "8",
          "audio_channels": "2.0",
          "seeds": 100,
          "peers": 80,
          "size": "1.60 GB",
          "size_bytes": 1717986918,
          "date_uploaded": "2015-10-31 23:40:56",
          "date_uploaded_unix": 1446331256
        },
        {
          "url": "https://yts.mx/torrent/download/34037A882E86E721070226D459C592F4A5A589A9",
          "hash": "34037A882E86E721070226D459C592F4A5A589A9",
          "quality": "2160p",
          "type": "bluray",
          "is_repack": "",
          "video_codec": "x265",
          "bit_depth": "10",
          "audio_channels": "5.1",
          "seeds": 100,
          "peers": 25,
          "size": "8.09 GB",
          "size_bytes": 8686571356,
          "date_uploaded": "2022-02-26 16:10:22",
          "date_uploaded_unix": 1645888222
        }
      ],
      "date_uploaded": "2015-10-31 23:40:53",
      "date_uploaded_unix": 1446331253
    }
  },
  "@meta": {
    "server_time": 1741622674,
    "server_timezone": "CET",
    "api_version": 2,
    "execution_time": "0 ms"
  }
}
```
