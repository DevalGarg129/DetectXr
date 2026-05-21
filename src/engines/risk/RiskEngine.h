#pragma once

class RiskEngine{
    public:
        int calculateRiskScore(double pasteRatio){
            int score = 0;

            if(pasteRatio >= 0.7){
                score += 70;
            }
            else if(pasteRatio >= 0.4){
                score += 40;
            }
            else{
                score += 10;
            }
            return score;
        }
        bool isFlagged(int score){
            return score >= 60;
    }
};