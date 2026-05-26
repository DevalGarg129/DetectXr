#pragma once

#include <string>
#include <sstream>
#include <unordered_set>

class SimilarityEngine {
    public:
        double calculateSimilarity(const std::string& codeA, const std::string& codeB){
            auto tokensA = tokenize(codeA);
            auto tokensB = tokenize(codeB);

            int commonTokens = 0;
            for(const auto& token: tokensA){
                if(tokensB.find(token) != tokensB.end()){
                    commonTokens++;
                }
            }

            int totalTokens = tokensA.size() + tokensB.size() - commonTokens;
            if(totalTokens == 0){
                return 1.0;
            }
            return (double)commonTokens / totalTokens;
        }

    private:
        std::unordered_set<std::string> tokenize(const std::string& code){
            std::unordered_set<std::string> tokens;
            std::stringstream ss(code);
            std::string token;

            while(ss >> token){
                tokens.insert(token);
            }
            return tokens;
        }
};