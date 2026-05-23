#pragma once

#include <string>
#include <vector>

class BehaviorEngine{
    public:
        int calculateBehaviorEngine(double typingSpeed, int submissionTimeSeconds, bool suspiciousPasteBurst){
            int score = 0;

            //Extremely fast typing
            if(typingSpeed > 120){
                score += 30;
            }

            //Very fast submission turnaround
            if(submissionTimeSeconds < 120){
                score += 25;
            }

            //large suspicious paste events
            if(suspiciousPasteBurst){
                score += 40;
            }
            return score;
        }
};