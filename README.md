# nisummarizer
Sure, here's a sample README.md file for the text summarization code:

# Text Summarization using NLP

This code is a Python implementation of text summarization using natural language processing (NLP) techniques. The code takes in a block of text and generates a summary of the text by selecting the most important sentences.

## Getting Started

Before running the code, ensure that you have the necessary libraries installed. The code requires the following libraries:

- spacy
- string

To install the spacy library, run the following command:

```
!pip install -U spacy
```

You will also need to download the English language model for spacy by running the following command:

```
!python -m spacy download en_core_web_sm
```

## How to Use

The code can be run using any Python IDE or the command line. 

1. Import the necessary libraries:
```
import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
```

2. Load the spacy language model:
```
nlp = spacy.load('en_core_web_sm')
```

3. Process the input text:
```
doc = nlp(text)
```

4. Tokenize the text and remove stop words and punctuation:
```
stopwords = list(STOP_WORDS)
punctuation = punctuation + '\n'

word_frequencies = {}
for word in doc:
    if word.text.lower() not in stopwords:
        if word.text.lower() not in punctuation:
            if word.text not in word_frequencies.keys():
                word_frequencies[word.text] = 1
            else:
                word_frequencies[word.text] += 1
```

5. Normalize the word frequencies:
```
max_frequency = max(word_frequencies.values())

for word in word_frequencies.keys():
    word_frequencies[word] = word_frequencies[word]/max_frequency
```

6. Tokenize the text into sentences:
```
sentence_tokens = [sent for sent in doc.sents]
```

7. Calculate the sentence scores:
```
sentence_scores = {}
for sent in sentence_tokens:
    for word in sent:
        if word.text.lower() in word_frequencies.keys():
            if sent not in sentence_scores.keys():
                sentence_scores[sent] = word_frequencies[word.text.lower()]
            else:
                sentence_scores[sent] += word_frequencies[word.text.lower()]
```

8. Generate the summary:
```
select_length = int(len(sentence_tokens)*0.3)

summary = nlargest(select_length, sentence_scores, key = sentence_scores.get)

final_summary = [word.text for word in summary]
summary = ' '.join(final_summary)
```

## License

This code is released under the MIT License.
