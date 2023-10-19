class Solution {
    public boolean backspaceCompare(String s, String t) {
        
        ArrayList<Character> s1=new ArrayList<>();
        ArrayList<Character> s2=new ArrayList<>();

        for(int i=0;i<s.length();i++)
        {
            if(s.charAt(i)!='#')
            {
                s1.add(s.charAt(i));     
            }
            else 
            {
                if(s1.size()!=0)
                {
                    s1.remove(s1.size()-1);
                }
            }
        }
        for(int i=0;i<t.length();i++)
        {
            if(t.charAt(i)!='#')
            {
                s2.add(t.charAt(i));     
            }
            else 
            {
                if(s2.size()!=0)
                {
                    s2.remove(s2.size()-1);
                }
            }
        }

        if(s1.size()!=s2.size())
        return false;

        for( int i=0;i<s1.size();i++)
        {
            if(s1.get(i)!=s2.get(i))
            return false;
        }

        return true;
    }
}