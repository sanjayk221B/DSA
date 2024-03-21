class Node {
    constructor() {
        this.children = {}
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                curr.children[word[i]] = new Node();
            }
            curr = curr.children[word[i]]
        }
        curr.isEndOfWord = true;
    }

    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                return false
            }
            curr = curr.children[word[i]]
        }
        return curr.isEndOfWord;
    }

    searchPrefix(word) {
        let curr = this.root
        let words = []
        for (let i = 0; i < word.length; i++) {
            if (!(word[i] in curr.children)) {
                return word;
            }
            curr = curr.children[word[i]]
        }
        this.searchHelper(curr, word, words);
        return words;
    }

    searchHelper(root, word, words) {
        if (root.isEndOfWord) {
            words.push(word)
        }

        for (let child in root.children) {
            this.searchHelper(root.children[child], word + child, words);
        }
    }

    delete(word) {
        this.deleteNode(this.root, word, 0)
    }

    deleteNode (root, word, index) {
        if(!root) {
            return false
        }
        if(index === word.length) {
            if(!root.isEndOfWord) {
                return false 
            }
            root.isEndOfWord = false;
            return Object.keys(root.children).length === 0;
        }
        let char = word[index] 
        if(this.deleteNode(root.children[char], word, index)) {
            delete root.children[char];
            return Object.keys(root.children).length === 0
        }
    }
}


let trie = new Trie();

trie.insert("sanjay");
trie.insert("sanay")
trie.insert("sam")
trie.insert("sa")
trie.insert("samuel")
trie.insert("rocky")
console.log(trie.search("sanay"));
trie.delete("sa")
console.log(trie.searchPrefix("sa"));