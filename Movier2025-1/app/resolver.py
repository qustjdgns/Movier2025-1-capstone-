import genre
import pandas as pd


def random_items():

    movies_df = pd.read_csv("data/movies_final.csv")

    movies_df = movies_df.fillna('')

    result_items = movies_df.sample(n=10).to_dict(orient='records')
    return result_items

def random_genres_items(genre):

    movies_df = pd.read_csv("data/movies_final.csv")

    genre_df = movies_df[movies_df['genres'].str.contains(genre, case=False, na=False)]

    genre_df = genre_df.fillna('')

    nitem = min(5, genre_df.size);
    print(len(genre_df))

    result_items = genre_df.sample(n=nitem).to_dict(orient='records')

    return result_items

def random_genres_items_best(genre):

    movies_df = pd.read_csv("data/movies_final.csv")

    genre_df = movies_df[movies_df['genres'].str.contains(genre, case=False, na=False)]

    genre_df = genre_df.fillna('')
    nitem = min(5,genre_df.size);
    print(len(genre_df))



    result_items = genre_df.sample(n=nitem).to_dict(orient='records')

    return result_items
